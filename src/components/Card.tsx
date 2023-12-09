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
  name?: string;
  subtitle?: string;
  slug?: string;
  category?: string;
  reviewScore?: number;
  currentVersion?: string;
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
  icon?: string;
}

export default function CustomCard({
  name,
  subtitle,
  slug,
  category,
  reviewScore,
  currentVersion,
  key,
  buttonColor,
  onClick,
  icon,
}: CustomCardProps) {
  const dispatch = useDispatch();
  const onCardClick = () => {
    dispatch(toggleProductModal({ active: true, productId: slug }));
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
          src={icon || "https://nextui.org/images/hero-card.jpeg"}
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
          <p className="uppercase font-bold">{name || "ZkApp Name"}</p>
          <small className="text-default-400">#{category || "Category"}</small>
          <div className="flex flex-row justify-between">
            <small className="text-default-400">
              {currentVersion || "Version"}
            </small>
            <p className="text-tiny text-primary">Score {reviewScore || 5}/5</p>
          </div>
          <ScrollShadow className="w-full flex gap-4 flex-wrap left-0 h-[80px] max-w-[220px]">
            <small className="text-default-500 w-full flex-wrap text-md">
              {subtitle || "This a short body of the ZkApp"}
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
