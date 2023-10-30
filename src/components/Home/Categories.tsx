import { ScrollShadow } from "@nextui-org/react";
import CategoryCard from "../CategoryCard";

export default function Categories() {
  const data = undefined;

  if (!data) {
    return (
      <>
        <h1 className="text-white text-xl">Categories</h1>
        <div className="w-full flex items-center justify-center h-[200px] border-dashed border-2 border-gray-600 rounded-xl">
          <h1 className="text-white">No categories</h1>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-white text-xl">Categories</h1>
      </div>
      <div className="mx-auto max-w-[100%]">
        <ScrollShadow
          orientation="horizontal"
          className="w-full flex gap-4 left-0 p-4 min-h-[240px] items-end"
        >
          {data?.map((category) => (
            <CategoryCard {...category} key={category.id} />
          ))}
        </ScrollShadow>
      </div>
    </div>
  );
}
