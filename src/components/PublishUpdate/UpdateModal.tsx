import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { app } from "./UpdateCard";

interface IUpdateModalProps {
  show?: boolean;
  toggleModal: () => void;
  add?: boolean;
  data?: IUpdateData;
  availableApps: app[];
  initialSelectedApp: string;
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
  availableApps,
  initialSelectedApp,
}: IUpdateModalProps) {
  const [title, setTitle] = useState(data?.title || "");
  const [version, setVersion] = useState(data?.version || "");
  const [description, setDescription] = useState(data?.description || "");
  const [selectedApp, setSelectedApp] = useState(
    data?.app?.value || initialSelectedApp || ""
  );
  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setVersion(data.version);
      if (!add) {
        setSelectedApp(data?.app.value);
      }
    }
  }, [data, add]);

  useEffect(() => {
    if (initialSelectedApp && add) {
      setSelectedApp(initialSelectedApp);
    }
  }, [initialSelectedApp, add]);

  const closeModal = () => {
    setTitle("");
    setVersion("");
    setDescription("");
    toggleModal();
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
              <h1 className="text-3xl">
                {add ? "Add app update" : "Edit app update"}
              </h1>
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
                <Select
                  size={"md"}
                  label="Select an app"
                  labelPlacement="outside"
                  className="max-w-md text-white"
                  variant="bordered"
                  value={selectedApp}
                  defaultSelectedKeys={[initialSelectedApp]}
                  onChange={(e) => setSelectedApp(e.target.value)}
                >
                  {availableApps?.map((app) => (
                    <SelectItem
                      className="text-white"
                      key={app.value}
                      value={app.value}
                    >
                      {app.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div data-color-mode="dark" className="flex flex-col gap-2">
                <label className="text-sm">Description</label>
                <MDEditor
                  className="mt-2"
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
