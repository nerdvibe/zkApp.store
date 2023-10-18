import { Card, CardBody } from "@nextui-org/react";
import Lottie from "react-lottie-player";
import ufo from "@/assets/animations/ufo.json";

export default function EmptyState() {
  return (
    <div className="flex justify-center items-center h-full min-h-[500px]">
      <Card>
        <CardBody className="text-center gap-4 max-w-[350px] flex justify-center">
          <div className="flex items-center flex-col gap-5 p-4 pt-0">
            <Lottie
              animationData={ufo}
              loop={true}
              style={{ width: "100%", maxWidth: "400px" }}
              play={true}
              speed={0.5}
            />
            <div className="mt-4 flex flex-col gap-4">
              <h1 className="text-4xl text-white font-bold">
                There are no favourites, yet...
              </h1>
              <p className="text-sm text-gray-500 ">
                Click on the ❤️ button on an zkApp to add to favourites
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
