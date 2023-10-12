import { Card, CardBody, Image } from "@nextui-org/react";

export default function Comment({ index }) {
  return (
    <div className="flex flex-row ">
      {index % 2 === 1 && <div className="w-[50px]" />}
      <Card className="w-full bg-[#1D1932]">
        <CardBody>
          <div className="flex gap-4">
            <div className="w-full">
              <h1 className="font-bold text-2xl">Love it!</h1>
              <div className="stars"></div>
              <p>
                I've been using CyberpunKYC for a while now, and I must say, it
                has completely transformed the way I approach KYC verification.
                This zkApp is a game-changer!
              </p>
              <p className="text-slate-500">
                {" "}
                - zkUser3030 reviewed on 12-07-2023
              </p>
            </div>
            <div className="flex h-full items-center">
              <Image
                alt="User image"
                className="object-cover rounded-full"
                src="https://nextui.org/images/hero-card.jpeg"
                width={80}
              />
            </div>
          </div>
        </CardBody>
      </Card>
      {index % 2 === 0 && <div className="w-[50px]" />}
    </div>
  );
}
