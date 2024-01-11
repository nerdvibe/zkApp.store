import { Button, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import Lottie from "react-lottie-player";
import bell from "@/assets/animations/bell.json";
import { useState } from "react";
import ComingSoonModal from "./ComingSoonModal";

interface IProps {
  following?: boolean;
  onClick?: () => void;
}

export default function FollowButton({ following, onClick }: IProps) {
  const [showModal, setShowModal] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  return (
    <Button
      color={following ? "primary" : "default"}
      className={`pr-0 w-[120px] delay-150 ${
        following ? "scale-[110%] w-[140px]" : ""
      } transion-all ease-in-out transition-width duration-300`}
      onClick={() => {
        setPlayAnimation(true);
        setShowModal(true);
        // onClick();
      }}
    >
      {following ? "Following" : "Follow"}
      <Lottie
        animationData={bell}
        style={{ width: 55 }}
        loop={false}
        play={playAnimation}
        // onLoopComplete={}
        onLoopComplete={() => {
          setPlayAnimation(false);
        }}
      />
      <ComingSoonModal
        show={showModal}
        onClose={() => setShowModal(false)}
        section="Feature"
      />
    </Button>
  );
}
