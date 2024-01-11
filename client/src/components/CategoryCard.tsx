import { Card, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import CategoriesPlaceholder from "./Category/CategoryTabs/CategoriesPlaceholder";

interface Props {
  id: number;
  topIcons?: string[];
  name: string;
  slug: string;
}

export default function CategoryCard({ id, name, slug, topIcons }: Props) {
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`${routes.CATEGORY}/${slug}`);
  };

  return (
    <div onClick={onCardClick}>
      <Card
        isFooterBlurred
        className="col-span-12 sm:col-span-7 bg-[none] cursor-pointer hover:-translate-y-3 duration-250 relative select-none min-w-[350px] min-h-[200px] max-w-[300px]"
        key={id}
      >
        <div className="flex gap-[10%]">
          {!topIcons ? (
            <CategoriesPlaceholder slug={slug} />
          ) : (
            <>
              <Image
                removeWrapper
                // TODO: Fix alt text
                alt="Relaxing app background"
                className="w-[45%] object-cover top-5 h-[200px]"
                src={topIcons[0] || `https://picsum.photos/seed/${slug}-1/400/400`}
              />
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="w-[50%] z-[11] left-[25%] object-cover absolute h-[200px]"
                src={topIcons[1] || `https://picsum.photos/seed/${slug}-2/400/400`}
              />
              <Image
                removeWrapper
                className="w-[45%] object-cover top-5 h-[200px]"
                alt="Relaxing app background"
                src={topIcons[2] || `https://picsum.photos/seed/${slug}-3/400/400`}
              />
            </>
          )}
        </div>
        <CardFooter className="absolute bg-black/40 bottom-0 z-20 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60 invert-color">#{name}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
