import { ScrollShadow } from "@nextui-org/react";
import CategoryCard from "../CategoryCard";
import { useHomeCategoriesQuery } from "@/gql/generated_mock";

export default function Categories() {
  const { data } = useHomeCategoriesQuery();
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
          {data?.allHomeCategories?.map((category) => (
            <CategoryCard {...category} key={category.id} />
          ))}
        </ScrollShadow>
      </div>
    </div>
  );
}
