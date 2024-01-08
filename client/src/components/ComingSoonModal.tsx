import { Modal, ModalContent } from "@nextui-org/react";
import Lottie from "react-lottie-player";
import catAnimation from "@/assets/animations/cat.json";

export default function ComingSoonModal({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={show} onClose={onClose}>
      <ModalContent>
        <div className="flex items-center flex-col gap-5 p-4 pt-0">
          <Lottie
            animationData={catAnimation}
            loop={true}
            style={{ width: "100%", maxWidth: "400px" }}
            play={true}
            speed={0.5}
          />
          <div className="mt-4 flex flex-col gap-4 justify-center">
            <h1 className="text-4xl text-white font-bold text-center">
              Social login <br />
              coming soon
            </h1>
            <p className="text-sm text-gray-500 text-center">Stay tuned</p>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
