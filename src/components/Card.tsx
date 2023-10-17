import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  ScrollShadow,
} from "@nextui-org/react";
import { MouseEventHandler } from "react";

interface CustomCardProps {
  title?: string;
  description?: string;
  category?: string;
  version?: string;
  key?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  buttonColor?:
    | "success"
    | "default"
    | "primary"
    | "secondary"
    | "warning"
    | "danger";
  image?: string;
}

export default function CustomCard({
  title,
  description,
  category,
  version,
  key,
  buttonColor,
  onClick,
  image,
}: CustomCardProps) {
  return (
    <Card className="py-4 min-w-[250px] max-w-[350px]" key={key}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start w-full z-0">
        <Image
          alt="Card background"
          isBlurred
          className="object-cover rounded-xl z-0"
          src={image || "https://nextui.org/images/hero-card.jpeg"}
          width={250}
          height={250}
          style={{
            height: "250px",
            width: "220px",
          }}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 gap-2">
        <div className="flex flex-col">
          <p className="uppercase font-bold">{title || "Daily Mix"}</p>
          <ScrollShadow className="w-full flex gap-4 flex-wrap left-0 max-h-[100px]">
            <small className="text-default-500 w-full flex-wrap ">
              {description || "12 Tracks"}
            </small>
          </ScrollShadow>
          <small className="text-default-400">
            #{category || "Authentication"}
          </small>
          <div className="flex flex-row justify-between">
            <small className="text-default-400">
              {version || "thisisatest.com"}
            </small>
            <p className="text-tiny text-primary">4/5 Score</p>
          </div>
        </div>
        <Button
          color={buttonColor || "primary"}
          className="my-1"
          onClick={onClick}
        >
          Details
        </Button>
      </CardBody>
    </Card>
  );
}
