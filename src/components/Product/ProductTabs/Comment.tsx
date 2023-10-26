import { Card, CardBody, Image } from "@nextui-org/react";
import Lottie from "react-lottie-player";
import star from "@/assets/animations/1star.json";
import stars2 from "@/assets/animations/2stars.json";
import stars3 from "@/assets/animations/3stars.json";
import stars4 from "@/assets/animations/4stars.json";
import stars5 from "@/assets/animations/5stars.json";

interface IComment {
  preview?: string;
  text?: string;
  score?: number;
  index?: number;
  date?: string;
  User?: {
    username?: string;
    userImage?: string;
  };
}

export default function Comment({
  index,
  preview,
  text,
  score,
  date,
  User,
}: IComment) {
  const starsAnimation = () => {
    switch (score) {
      case 1:
        return star;
      case 2:
        return stars2;
      case 3:
        return stars3;
      case 4:
        return stars4;
      case 5:
        return stars5;
    }
  };
  return (
    <div className="flex flex-row ">
      {index % 2 === 1 && <div className="w-[50px]" />}
      <Card className="w-full auth-card">
        <CardBody>
          <div className="flex gap-4">
            <div className="w-full">
              <h1 className="font-bold text-2xl">{preview}</h1>
              <div className="stars"></div>
              <p>{text}</p>
              <div className="flex flex-row gap-4">
                <p className="text-slate-500">
                  {User?.username} reviewed on {date}
                </p>
                <Lottie
                  animationData={starsAnimation()}
                  loop={false}
                  style={{ maxWidth: "80px" }}
                  play={true}
                />
              </div>
            </div>
            <div className="flex h-full items-center">
              <Image
                alt="User image"
                className="object-cover rounded-full  h-[80px] w-[80px]"
                src={User?.userImage}
                width={80}
                height={80}
              />
            </div>
          </div>
        </CardBody>
      </Card>
      {index % 2 === 0 && <div className="w-[50px]" />}
    </div>
  );
}
