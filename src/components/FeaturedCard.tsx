import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function FeaturedCard({ white }: any) {
  return (
    <Card
      className={`pb-4 w-[80%]  ${
        white && "bg-slate-200"
      } min-w-[200px] max-w-[300px]`}
    >
      <CardHeader className="flex-col items-start p-0 w-full">
        <Image
          alt="Card background"
          className="object-cover w-full max-w-[300px] rounded-none"
          src="https://nextui.org/images/hero-card.jpeg"
        />
      </CardHeader>
      <CardBody
        className={`overflow-visible py-2 flex-wrap ${white && "bg-slate-200"}`}
      >
        <p
          className={`font-bold text-md text-center flex-wrap ${
            white && "text-black"
          }`}
        >
          Immutable Art Authentication
        </p>
        <small
          className={`text-default-400 text-center flex-wrap ${
            white && "text-black"
          }`}
        >
          immutable record of art transactions and ownership
        </small>
      </CardBody>
    </Card>
  );
}
