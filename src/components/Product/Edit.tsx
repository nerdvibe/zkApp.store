import { useDeleteAppMutation, useUpdateZkAppMutation } from "@/gql/generated";
import { toggleEditProductModal } from "@/store/product";
import { RootState } from "@/store/store";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationModal from "../ConfirmationModal";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";

export default function Edit({ refetchData, data }: any) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [title, setTitle] = useState(data?.zkApp?.name || "");
  const [shortDescription, setShortDescription] = useState(
    data?.zkApp?.subtitle || ""
  );
  const [version, setVersion] = useState(data?.zkApp?.currentVersion || "");
  const [link, setLink] = useState(data?.zkApp?.url || "");
  const [category, setCategory] = useState(data?.zkApp?.category || "");
  const [discordUrl, setDiscordUrl] = useState(data?.zkApp?.discordUrl || "");
  const [githubUrl, setGithubdUrl] = useState(data?.zkApp?.githubUrl || "");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState("");
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.product.editProduct);
  const app = useSelector((state: RootState) => state.product.selectedApp);
  const [updateZkApp] = useUpdateZkAppMutation();
  const toggleShowConfirmation = () => setShowConfirmation(!showConfirmation);
  const [deleteAppMutation] = useDeleteAppMutation();
  const navigate = useNavigate();

  const closeModal = () => {
    dispatch(toggleEditProductModal({ active: false }));
  };

  const deleteApp = async () => {
    const { data: result } = await toast.promise(
      deleteAppMutation({
        variables: {
          id: data?.zkApp?.id,
        },
      }),
      {
        loading: "Deleting ZkApp",
        success: (
          <b>ZkApp successfully deleted! Redirecting to the Dashboard.</b>
        ),
        error: (err) => <b>{err.message}</b>,
      }
    );
    if (result) {
      setTimeout(() => {
        setShowDeleteModal(false);
        navigate(routes.DASHBOARD);
      }, [1500]);
    }
  };

  const onSave = async () => {
    if (app?.id) {
      toggleShowConfirmation();
      const { data } = await toast.promise(
        updateZkApp({
          variables: {
            zkApp: {
              id: app.id,
              currentVersion: version,
              category,
              name: title,
              url: link,
              subtitle: shortDescription,
              discordUrl: discordUrl,
              githubUrl: githubUrl,
            },
          },
        }),
        {
          loading: "Updating ZkApp details",
          success: <b>ZkApp details updated!</b>,
          error: (err) => <b>{err.message}</b>,
        }
      );
      if (data) {
        refetchData();
        dispatch(toggleEditProductModal({ active: false }));
      }
    }
  };

  const deleteEdit = () => {
    const { currentVersion, name, category, subtitle, url } = data?.zkApp;
    setVersion(currentVersion);
    setTitle(name);
    setCategory(category);
    setShortDescription(subtitle);
    setLink(url);
    refetchData();
    dispatch(toggleEditProductModal({ active: false }));
  };

  return (
    <Modal
      isOpen={show}
      onOpenChange={closeModal}
      placement="bottom-center"
      size="4xl"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h1 className="text-3xl">{"Edit app "}</h1>
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Title"
                labelPlacement="outside"
                placeholder="zkApp Title"
                value={title}
                variant="bordered"
                onChange={(val) => {
                  setTitle(val.currentTarget.value);
                }}
              />
              <Input
                autoFocus
                label="Short description"
                labelPlacement="outside"
                placeholder="Short description"
                value={shortDescription}
                variant="bordered"
                onChange={(val) => {
                  setShortDescription(val.currentTarget.value);
                }}
              />
              <Input
                autoFocus
                label="Link"
                labelPlacement="outside"
                placeholder="Link"
                value={link}
                variant="bordered"
                onChange={(val) => {
                  setLink(val.currentTarget.value);
                }}
              />
              <div className="flex flex-row gap-2">
                <Input
                  autoFocus
                  labelPlacement="outside"
                  placeholder="zkApp Version"
                  label="Version"
                  value={version}
                  variant="bordered"
                  onChange={(val) => {
                    setVersion(val.currentTarget.value);
                  }}
                />
                <Input
                  autoFocus
                  labelPlacement="outside"
                  placeholder="Category"
                  label="Category"
                  value={category}
                  variant="bordered"
                  onChange={(val) => {
                    setCategory(val.currentTarget.value);
                  }}
                />
              </div>
              <Input
                autoFocus
                labelPlacement="outside"
                placeholder="Discord link"
                label="Discord link"
                value={discordUrl}
                variant="bordered"
                onChange={(val) => {
                  setDiscordUrl(val.currentTarget.value);
                }}
              />
              <Input
                autoFocus
                labelPlacement="outside"
                placeholder="Github link"
                label="Github link"
                value={githubUrl}
                variant="bordered"
                onChange={(val) => {
                  setGithubdUrl(val.currentTarget.value);
                }}
              />
            </ModalBody>
            <ModalFooter>
              <div className="w-full flex justify-between">
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => setShowDeleteModal(true)}
                  startContent={<FontAwesomeIcon icon={faTrash} />}
                >
                  Delete app
                </Button>
                <div className="flex gap-4">
                  <Button color="danger" variant="flat" onPress={deleteEdit}>
                    Close
                  </Button>
                  <Button color="primary" onPress={toggleShowConfirmation}>
                    Save
                  </Button>
                </div>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
      <ConfirmationModal
        show={showConfirmation}
        onConfirm={onSave}
        onCancel={toggleShowConfirmation}
      >
        <h1>Confirm ZkApp details update?</h1>
      </ConfirmationModal>
      <ConfirmationModal
        show={showDeleteModal}
        onConfirm={deleteApp}
        disableConfirm={confirmDelete !== data?.zkApp?.name}
        onCancel={() => {
          setConfirmDelete("");
          setShowDeleteModal(false);
        }}
      >
        <h1>
          Once you delete a ZkApp, there is no going back. Please be certain.
        </h1>
        <p>To confirm please write the ZkApp name here</p>
        <Input
          autoFocus
          labelPlacement="outside"
          placeholder={data?.zkApp?.name}
          label="Confirm ZkApp name"
          value={confirmDelete}
          variant="bordered"
          onChange={(val) => {
            setConfirmDelete(val.currentTarget.value);
          }}
        />
      </ConfirmationModal>
    </Modal>
  );
}
