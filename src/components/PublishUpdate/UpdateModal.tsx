import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";

interface IUpdateModalProps {
  show?: boolean;
  toggleModal: () => void;
  add?: boolean;
  data?: IUpdateData;
}

export interface IUpdateData {
  title: string;
  version: string;
  description: string;
  key: string;
}

export default function UpdateModal({
  show,
  toggleModal,
  add,
  data,
}: IUpdateModalProps) {
  const [title, setTitle] = useState(data?.title || "");
  const [version, setVersion] = useState(data?.version || "");
  const [description, setDescription] = useState(data?.description || "");
  return (
    <Modal isOpen={show} onOpenChange={toggleModal} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {add ? "Edit app update" : "Add app update"}
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                labelPlacement="outside"
                label="Title"
                placeholder="Enter title"
                value={title}
                onChange={(val) => {
                  setTitle(val.currentTarget.value);
                }}
              />
              <Input
                autoFocus
                labelPlacement="outside"
                label="Version"
                placeholder="Enter your email"
                value={version}
                onChange={(val) => {
                  setVersion(val.currentTarget.value);
                }}
              />
              <Textarea
                label="Description"
                labelPlacement="outside"
                placeholder="Enter your description"
                value={description}
                onChange={(val) => {
                  setDescription(val.currentTarget.value);
                }}
              />
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
