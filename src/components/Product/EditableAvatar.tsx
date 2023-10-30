import { useUpdateZkAppMutation } from "@/gql/generated";
import { RootState } from "@/store/store";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
const fileTypes = ["JPG", "PNG", "GIF"];

export default function EditableAvatar({
  icon,
  name,
  isEditable,
  refetch,
}: any) {
  const [showEditButton, setShowEditButton] = useState(false);
  const app = useSelector((state: RootState) => state.product.selectedApp);
  const [updateZkApp] = useUpdateZkAppMutation();
  const [file, setFile] = useState();
  const [showChangeIconModal, setShowChangeIconModal] = useState(false);
  const handleFileUpload = async (file) => {
    setFile((await getBase64(file)) as string);
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      // Make new FileReader
      const reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
    });
  };

  const uploadImage = async () => {
    if (app && file) {
      const result = await toast.promise(
        updateZkApp({
          variables: {
            zkApp: {
              id: app?.id,
              icon: file as string,
            },
          },
        }),
        {
          loading: "Uploading image",
          success: <b>ZkApp updated!</b>,
          error: (err) => <b>{err.message}</b>,
        }
      );
      if (result.data && !result.errors) {
        refetch();
        setShowChangeIconModal(false);
      }
    }
  };

  const cancelUpload = () => {
    setFile(undefined);
    setShowChangeIconModal(false);
  };

  useEffect(() => {
    if (!showChangeIconModal) {
      setFile(undefined);
    }
  }, [showChangeIconModal]);

  return isEditable ? (
    <>
      {icon ? (
        <div className="cursor-pointer flex items-center">
          <Avatar
            src={icon}
            className={`w-[100px] h-[100px] object-cover opacity-100 transition-all duration-300 ${
              showEditButton ? "opacity-70" : ""
            }`}
            name={name}
            onClick={() => setShowChangeIconModal(true)}
            onMouseEnter={() => {
              setShowEditButton(true);
            }}
            onMouseLeave={() => {
              setShowEditButton(false);
            }}
          />
          <FontAwesomeIcon
            icon={faPen}
            className={`relative z-10 -left-[60px] opacity-0 transition-all duration-300 ${
              showEditButton ? "opacity-100" : ""
            }`}
            color="white"
            size="xl"
            onClick={() => setShowChangeIconModal(true)}
            onMouseEnter={() => {
              setShowEditButton(true);
            }}
          />
        </div>
      ) : (
        <div
          className="flex justify-center items-center h-[100px] w-[100px] bg-[#ffffff0d] rounded-full border-dashed border-2 text-white cursor-pointer responsive-border"
          onClick={() => setShowChangeIconModal(true)}
        >
          <FontAwesomeIcon
            icon={faPen}
            className={`transition-all duration-300`}
            size="xl"
          />
        </div>
      )}
      <Modal
        backdrop={"blur"}
        isOpen={showChangeIconModal}
        onClose={() => {
          setShowChangeIconModal(false);
        }}
        className="max-w-[900px] p-0"
      >
        <ModalContent>
          <ModalHeader>
            <h1>Change app icon</h1>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col items-center gap-6">
              {file || icon ? (
                <Image
                  src={file || icon}
                  className="object-cover rounded-full w-[100px] h-[100px]"
                  width={100}
                  height={100}
                  classNames={{
                    wrapper: "w-full max-w-max",
                  }}
                />
              ) : (
                <h1>No image selected yet</h1>
              )}
              <FileUploader
                handleChange={handleFileUpload}
                name="file"
                types={fileTypes}
                classes="drag-and-drop w-full min-h-[80px]"
                label="Drop your profile picture here"
              />
              <div className="flex gap-4">
                <Button
                  color="danger"
                  variant="bordered"
                  onPress={cancelUpload}
                >
                  Cancel
                </Button>
                <Button color="primary" onPress={uploadImage}>
                  Save
                </Button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  ) : (
    <Avatar
      src={icon}
      className="w-[100px] h-[100px] object-cover"
      name={name}
    />
  );
}
