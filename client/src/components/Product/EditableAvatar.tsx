import {
  useUpdateZkAppIconMutation,
  useUploadUserImageMutation,
} from "@/gql/generated";
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
import UserIcon from "../User/UserIcon";
export const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];

interface Props {
  icon?: string;
  name?: string;
  isEditable?: boolean;
  refetch?: () => void;
  isUser?: boolean;
}

export default function EditableAvatar({
  icon,
  name,
  isEditable,
  refetch,
  isUser,
}: Props) {
  const [showEditButton, setShowEditButton] = useState(false);
  const app = useSelector((state: RootState) => state.product.selectedApp);
  const [updateZkAppIcon, { loading: appLoading }] =
    useUpdateZkAppIconMutation();
  const [uploadImageMutation, { loading: profileLoading }] =
    useUploadUserImageMutation();
  const [file, setFile] = useState<File>();
  const [b64File, setB64File] = useState("");
  const [showChangeIconModal, setShowChangeIconModal] = useState(false);

  const handleFileUpload = async (rawFile: File) => {
    setFile(rawFile as File);
  };

  const getBase64 = async (file: File) => {
    return await new Promise((resolve) => {
      let baseURL = "";
      // Make new FileReader
      const reader = new FileReader();
      // Convert the file to base64 text
      reader.readAsDataURL(file);
      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result as string;
        console.log(baseURL);
        resolve(baseURL);
      };
    });
  };

  useEffect(() => {
    if (file) {
      getBase64(file).then((b64) => {
        setB64File(b64 as string);
      });
    }
  }, [file]);

  const uploadImage = async () => {
    if (file) {
      let result = null;
      if (!isUser && app) {
        result = await toast.promise(
          updateZkAppIcon({
            variables: {
              id: app?.id,
              file: file,
            },
          }),
          {
            loading: "Saving image",
            success: <b>ZkApp updated!</b>,
            error: (err) => <b>{err.message}</b>,
          }
        );
      } else if (isUser) {
        result = await toast.promise(
          uploadImageMutation({
            variables: {
              file: file,
            },
          }),
          {
            loading: "Saving image",
            success: <b>Profile picture updated!</b>,
            error: (err) => <b>{err.message}</b>,
          }
        );
      }
      if (result?.data && !result?.errors) {
        if (refetch) {
          refetch();
        }
        setFile(undefined);
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
            <h1>Change {!isUser ? "app icon" : "user profile image"}</h1>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col items-center gap-6">
              {b64File || icon ? (
                <Image
                  src={b64File || icon}
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
                maxSize={2}
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
                <Button
                  color={
                    !profileLoading && !appLoading && file
                      ? "primary"
                      : "default"
                  }
                  onPress={uploadImage}
                  disabled={profileLoading || appLoading || !file}
                >
                  Save
                </Button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  ) : isUser ? (
    <Avatar
      src={icon}
      className="w-[100px] h-[100px] object-cover"
      fallback={<UserIcon value={name || ""} size={"100"} />}
    />
  ) : (
    <Avatar
      src={icon}
      className="w-[100px] h-[100px] object-cover"
      name={name}
    />
  );
}
