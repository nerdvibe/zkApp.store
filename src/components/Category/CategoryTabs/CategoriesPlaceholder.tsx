import { Image } from "@nextui-org/react";

export default function CategoriesPlaceholder() {
  return (
    <>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="w-[45%] object-cover top-5 h-[200px]"
        src={
          "https://nextui.org/_next/image?url=%2Fimages%2Falbum-cover.png&w=640&q=75"
        }
      />
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="w-[50%] z-[11] left-[25%] object-cover absolute h-[200px]"
        src={"https://nextui.org/images/card-example-6.jpeg"}
      />
      <Image
        removeWrapper
        className="w-[45%] object-cover top-5 h-[200px]"
        alt="Relaxing app background"
        src={"https://nextui.org/images/hero-card-complete.jpeg"}
      />
    </>
  );
}
