import { Button } from "@nextui-org/react";
import Lottie from "react-lottie-player";
import bell from "@/assets/animations/bell.json";
import { useState } from "react";

interface IProps {
  following?: boolean;
  onClick: () => void;
}

export default function FollowButton({ following, onClick }: IProps) {
  const [playAnimation, setPlayAnimation] = useState(false);
  return (
    <Button
      color={following ? "primary" : "default"}
      className={`pr-0 w-[120px] delay-150 ${following ? "scale-[110%] w-[140px]" : "" } transion-all ease-in-out transition-width duration-300`}
      onClick={() => {
        onClick();
        setPlayAnimation(true);
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
          console.log("🚀 ~ file: FollowButton.tsx:29 ~ onComplete ~ false:");
          setPlayAnimation(false);
        }}
      />
    </Button>
  );
}
