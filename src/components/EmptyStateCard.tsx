import { Card, CardBody } from "@nextui-org/react";
import Lottie from "react-lottie-player";
import ufo from "@/assets/animations/ufo.json";
import { Player } from "@lottiefiles/react-lottie-player";

interface Props {
  title?: string;
  description?: string;
  image?: any;
  speed?: number;
}

export default function EmptyStateCard({
  title,
  description,
  image,
  speed,
}: Props) {
  return (
    <div className="flex justify-center items-center h-full min-h-[500px] w-full">
      <Card>
        <CardBody className="text-center gap-4 max-w-[350px] flex justify-center">
          <div className="flex items-center flex-col gap-5 p-4 pt-0">
            <Lottie
              animationData={image || ufo}
              loop={true}
              style={{ width: "100%", maxWidth: "400px" }}
              play={true}
              speed={speed || 0.5}
            />
            <div className="mt-4 flex flex-col gap-4">
              {title && (
                <h1 className="text-4xl text-white font-bold">{title}</h1>
              )}
              {description && (
                <p className="text-sm text-gray-500 ">{description}</p>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
