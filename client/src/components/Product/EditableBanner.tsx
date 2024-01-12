import {
  useUpdateZkAppBannerMutation,
  useUploadUserBannerMutation,
} from "@/gql/generated";
import { RootState } from "@/store/store";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import { fileTypes } from "./EditableAvatar";

export default function EditableBanner({
  bannerImage,
  isEditable,
  refetch,
  isUser,
}: any) {
  const [showEditButton, setShowEditButton] = useState(false);
  const app = useSelector((state: RootState) => state.product.selectedApp);
  const [updateZkAppBanner, { loading: appLoading }] =
    useUpdateZkAppBannerMutation();
  const [updateUserDataBanner, { loading: profileLoading }] =
    useUploadUserBannerMutation();
  const [file, setFile] = useState();
  const [showChangeBannerModal, setShowChangeBannerModal] = useState(false);
  const [b64File, setB64File] = useState("");
  const handleFileUpload = async (file) => {
    setFile(file);
  };

  const getBase64 = async (file) => {
    return await new Promise((resolve) => {
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

  useEffect(() => {
    if (file) {
      getBase64(file).then((b64) => {
        setB64File(b64);
      });
    }
  }, [file]);

  const uploadImage = async () => {
    if (file) {
      let result = null;
      if (!isUser && app) {
        result = await toast.promise(
          updateZkAppBanner({
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
          updateUserDataBanner({
            variables: {
              file: file,
            },
          }),
          {
            loading: "Saving image",
            success: <b>Banner picture updated!</b>,
            error: (err) => <b>{err.message}</b>,
          }
        );
      }
      if (result?.data && !result?.errors) {
        refetch();
        setShowChangeBannerModal(false);
      }
    }
  };

  const cancelUpload = () => {
    setFile(undefined);
    setShowChangeBannerModal(false);
  };

  return isEditable ? (
    <>
      {bannerImage ? (
        <div className="w-full cursor-pointer">
          <Image
            src={bannerImage}
            width={1500}
            className="w-full max-h-[200px] object-cover min-h-[150px] h-[200px]"
            classNames={{
              wrapper: `w-full max-w-max opacity-100 transition-all duration-300 ${
                showEditButton ? "opacity-70" : ""
              }`,
            }}
            onClick={() => setShowChangeBannerModal(true)}
            onMouseEnter={() => {
              setShowEditButton(true);
            }}
            onMouseLeave={() => {
              setShowEditButton(false);
            }}
          />
          <FontAwesomeIcon
            icon={faPen}
            className={`relative -top-[120px] z-10 left-[48%] opacity-0 transition-all duration-300 ${
              showEditButton ? "opacity-100" : ""
            }`}
            color="white"
            size="xl"
            onClick={() => setShowChangeBannerModal(true)}
            onMouseEnter={() => {
              setShowEditButton(true);
            }}
          />
        </div>
      ) : (
        <div
          className="flex justify-center items-center w-full h-[200px] bg-[#ffffff0d] rounded-lg border-dashed border-2 text-white cursor-pointer responsive-border"
          onClick={() => setShowChangeBannerModal(true)}
        >
          Select banner image
        </div>
      )}
      <Modal
        backdrop={"blur"}
        isOpen={showChangeBannerModal}
        onClose={() => {
          setShowChangeBannerModal(false);
        }}
        className="max-w-[900px] p-0"
      >
        <ModalContent>
          <ModalHeader>
            <h1>Change banner image</h1>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col items-center gap-6">
              {b64File || bannerImage ? (
                <Image
                  src={b64File || bannerImage}
                  width={1500}
                  className="w-full max-h-[200px] object-cover min-h-[150px] h-[200px]"
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
                  disabled={profileLoading || appLoading || !file}
                  onPress={uploadImage}
                >
                  Save
                </Button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  ) : bannerImage ? (
    <Image
      src={bannerImage}
      width={1500}
      className="w-full max-h-[200px] object-cover min-h-[150px] h-[200px]"
      classNames={{
        wrapper: "w-full max-w-max bg-[#475569aa]",
      }}
    />
  ) : (
    <div className="flex justify-center items-center w-full h-[200px] bg-[#ffffff04] rounded-lg border-dashed border-2 text-white responsive-border" />
  );
}
