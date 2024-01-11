import { Image } from "@nextui-org/react";

export default function CategoriesPlaceholder({ slug }: { slug: string }) {
  return (
    <>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="w-[45%] object-cover top-5 h-[200px]"
        src={`https://picsum.photos/seed/${slug}-1/400/400`}
      />
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="w-[50%] z-[11] left-[25%] object-cover absolute h-[200px]"
        src={`https://picsum.photos/seed/${slug}-2/400/400`}
      />
      <Image
        removeWrapper
        className="w-[45%] object-cover top-5 h-[200px]"
        alt="Relaxing app background"
        src={`https://picsum.photos/seed/${slug}-3/400/400`}
      />
    </>
  );
}
