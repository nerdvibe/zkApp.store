import { Button } from "@nextui-org/react";
import Lottie from "react-lottie-player";
import bell from "@/assets/animations/bell.json";
import { useState } from "react";

interface IProps {
  following?: boolean;
}

export default function FollowButton({ following }: IProps) {
  const [playAnimation, setPlayAnimation] = useState(false);
  return following ? (
    <div>FollowButton</div>
  ) : (
    <Button
      color="primary"
      className="pr-0"
      onClick={() => {
        setPlayAnimation(true);
      }}
    >
      Follow
      <Lottie
        animationData={bell}
        style={{ width: 75 }}
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
