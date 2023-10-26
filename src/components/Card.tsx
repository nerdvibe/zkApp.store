import { toggleProductModal } from "@/store/product";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  ScrollShadow,
} from "@nextui-org/react";
import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";

interface CustomCardProps {
  title?: string;
  description?: string;
  shortDescription?: string;
  category?: string;
  score?: number;
  version?: string;
  id?: number;
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
  id,
  title,
  shortDescription,
  category,
  score,
  version,
  key,
  buttonColor,
  onClick,
  image,
}: CustomCardProps) {
  const dispatch = useDispatch();
  const onCardClick = () => {
    dispatch(toggleProductModal({ active: true, productId: id }));
  };

  return (
    <Card
      className="py-4 min-w-[250px] max-w-[350px] cursor-pointer"
      key={key}
      onMouseUp={onCardClick}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start w-full z-0">
        <Image
          alt="Card background"
          isBlurred
          className="object-cover rounded-xl z-0"
          src={image || "https://nextui.org/images/hero-card.jpeg"}
          // width={250}
          height={250}
          style={{
            height: "250px",
            width: "220px",
          }}
          removeWrapper
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 gap-2 justify-between">
        <div className="flex flex-col">
          <p className="uppercase font-bold">{title || "Daily Mix"}</p>
          <small className="text-default-400">
            #{category || "Authentication"}
          </small>
          <div className="flex flex-row justify-between">
            <small className="text-default-400">
              {version || "thisisatest.com"}
            </small>
            <p className="text-tiny text-primary">{score}/5 Score</p>
          </div>
          <ScrollShadow className="w-full flex gap-4 flex-wrap left-0 h-[80px] max-w-[220px]">
            <small className="text-default-500 w-full flex-wrap ">
              {shortDescription}
            </small>
          </ScrollShadow>
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
