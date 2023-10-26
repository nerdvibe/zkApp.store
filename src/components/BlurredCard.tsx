import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleProductModal } from "../store/product";

export interface IBlurredCardProps {
  category: string;
  title: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  image: string;
}

export default function BlurredCard({
  category,
  description,
  title,
  primaryButtonLabel,
  image,
}: IBlurredCardProps) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => {
    return state.product;
  });

  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-7"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white-60-f uppercase font-bold">
          {category}
        </p>
        <h4 className="text-white-f font-medium text-xl">{title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover opacity-[20%]"
        src={`/images/${image}`}
      />
      <div
        className="z-0 w-full h-full object-cover absolute bg-white"
        style={{ opacity: 0.1 }}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-tiny text-white-60-f">{description}</p>
          </div>
        </div>
        <Button
          radius="full"
          size="sm"
          onClick={() => {
            // TODO: Fix this modal
            // dispatch(toggleProductModal({ active: true, productId: "123" }));
          }}
        >
          {primaryButtonLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
