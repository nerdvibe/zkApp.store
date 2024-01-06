import { showModal } from "@/store/newsModal";
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useDispatch } from "react-redux";

export interface IBlurredCardProps {
  category: string;
  title: string;
  body: string;
  textPreview: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  banner: string;
}

export default function BlurredCard({
  category,
  body,
  title,
  textPreview,
  // primaryButtonLabel,
  banner,
}: IBlurredCardProps) {
  const dispatch = useDispatch();
  const openModal = () =>
    dispatch(
      showModal({
        title,
        body,
        banner,
      })
    );
  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-7 min-w-[300px] cursor-pointer news-card bg-sla"
      onClick={openModal}
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white-60-f uppercase font-bold">
          {category}
        </p>
        <h4 className="text-white-f font-medium text-xl">{title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        className="z-0 w-full h-full object-cover "
        src={banner}
      />
      <div
        className="z-0 w-full h-full object-cover absolute bg-black transition-all duration-300 hover:opacity-[50%] opacity-[30%] news-card-hover"
        onClick={openModal}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p
              className="text-tiny text-white-60-f line-clamp-3"
              onClick={openModal}
            >
              {textPreview}
            </p>
          </div>
        </div>
        {/* {primaryButtonLabel && (
          <Button radius="full" size="sm">
            {primaryButtonLabel}
          </Button>
        )} */}
      </CardFooter>
    </Card>
  );
}
