import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

interface Props {
  white?: boolean;
  onClick?: () => void;
  title?: string;
  description?: string;
  key?: string;
  image?: string;
}

export default function FeaturedCard({
  white,
  onClick,
  title,
  shortDescription,
  key,
  image,
}: Props) {
  return (
    <Card
      key={key}
      className={`pb-4 w-[80%]  ${
        white && "bg-slate-200"
      } min-w-[200px] max-w-[300px] ${onClick ? "cursor-pointer" : ""}`}
    >
      <CardHeader onClick={onClick} className="flex-col items-start p-0 w-full">
        <Image
          alt="Card background"
          className="object-cover w-full max-w-[300px] rounded-none"
          src={image}
        />
      </CardHeader>
      <CardBody
        className={`overflow-visible py-2 flex-wrap ${white && "bg-slate-200"}`}
        onClick={onClick}
      >
        <p
          className={`font-bold text-md text-center flex-wrap ${
            white && "text-black"
          }`}
        >
          {title}
        </p>
        <small
          className={`text-default-400 text-center flex-wrap ${
            white && "text-black"
          }`}
        >
          {shortDescription}
        </small>
      </CardBody>
    </Card>
  );
}
