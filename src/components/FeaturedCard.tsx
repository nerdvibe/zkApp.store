import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

interface Props {
  white?: boolean;
  onClick?: () => void;
  name?: string;
  subtitle?: string;
  slug?: string;
  key?: string;
  icon?: string;
}

export default function FeaturedCard({
  white,
  onClick,
  name,
  subtitle,
  slug,
  key,
  icon,
}: Props) {
  return (
    <Card
      key={key}
      className={`pb-4 w-[80%]  ${
        white && "bg-slate-200"
      } w-[200px] max-w-[300px] min-w-[150px] ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <CardHeader onClick={onClick} className="flex-col items-start p-0 w-full">
        <Image
          alt="Card background"
          className="object-cover w-full max-w-[300px] rounded-none"
          src={icon || `https://picsum.photos/seed/${slug}/400/400`}
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
          {name}
        </p>
        <small
          className={`text-default-400 text-center flex-wrap ${
            white && "text-black"
          }`}
        >
          {subtitle}
        </small>
      </CardBody>
    </Card>
  );
}
