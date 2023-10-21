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
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// TODO: To be updated

const data = {
  title: "CyberpunKYC v4.0: Simplified Inte...",
  version: "v4.0.1",
  description: `We are thrilled to announce the release of CyberpunKYC version 4.0,
  designed to simplify integration and enhance scalability for
  businesses of all sizes. With streamlined APIs and robust
  infrastructure, this update empowers organizations to seamlessly
  integrate CyberpunKYC into their existing systems and handle
  high-volume verification requests with ease`,
  key: "1",
  app: {
    label: "CyberpunKYC",
    value: "CyberpunKYC",
    key: 1,
  },
};

export default function Edit() {
  const [title, setTitle] = useState(data?.title || "");
  const [shortDescription, setShortDescription] = useState(
    data?.shortDescription || ""
  );
  const [version, setVersion] = useState(data?.version || "");
  const [link, setLink] = useState(data?.link || "");
  const [description, setDescription] = useState(data?.description || "");
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.product.editProduct);

  const closeModal = () => {
    dispatch(toggleEditProductModal({ active: false }));
  };

  return (
    <Modal
      isOpen={show}
      onOpenChange={closeModal}
      placement="top-center"
      size="4xl"
    >
      <ModalContent>
        {(onClose) => (
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
              </div>
              <div data-color-mode="dark" className="flex flex-col gap-2">
                <label className="text-sm">Description</label>
                <MDEditor
                  className="mt-2 min-h-[400px]"
                  value={description}
                  style={{ whiteSpace: "pre-wrap", background: "none" }}
                  onChange={(val) => setDescription(val)}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
