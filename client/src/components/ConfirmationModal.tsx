import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";

export default function ConfirmationModal({
  children,
  onCancel,
  onConfirm,
  show,
  disableConfirm,
}: {
  children: React.ReactNode | string;
  onCancel: () => void;
  onConfirm: () => void;
  show: boolean;
  disableConfirm?: boolean;
}) {
  return (
    <Modal backdrop={"blur"} isOpen={show} className="">
      <ModalContent>
        <ModalHeader>
          <h1>Confirm operation</h1>
        </ModalHeader>
        <ModalBody className="flex flex-col gap-8">
          {children}
          <div className="flex gap-4 w-full justify-center">
            <Button color="danger" variant="bordered" onPress={onCancel}>
              Cancel
            </Button>
            <Button
              color={disableConfirm ? "default" : "primary"}
              onPress={onConfirm}
              disabled={disableConfirm}
            >
              Confirm
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
