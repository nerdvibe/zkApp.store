import { ScrollShadow } from "@nextui-org/react";
import CategoryCard from "../CategoryCard";
const mockCategories = [
  {
    id: "test1",
    alt: false,
  },
  {
    id: "test2",
    alt: true,
  },
  {
    id: "test3",
    alt: false,
  },
  {
    id: "test4",
    alt: true,
  },
];

export default function Categories() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-white text-xl">Categories</h1>
      </div>
      <div className="mx-auto max-w-[100%]">
        <ScrollShadow
          orientation="horizontal"
          className="w-full flex gap-4 left-0 py-5"
        >
          {mockCategories.map(({ id, alt }) => (
            <CategoryCard alt={alt} id={id} key={id} />
          ))}
        </ScrollShadow>
      </div>
    </div>
  );
}
