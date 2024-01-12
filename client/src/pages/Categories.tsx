import CategoryCard from "@/components/CategoryCard";
import EmptyStateCard from "@/components/EmptyStateCard";
import { useAllZkAppCategoriesQuery } from "@/gql/generated";
import { Spinner } from "@nextui-org/react";

export default function Categories() {
  const { data, loading } = useAllZkAppCategoriesQuery();

  return (
    <div className="flex flex-col gap-4 my-11 md:mx-8">
      <h1 className="text-4xl text-white font-bold">{"> Categories"}</h1>
      <div className="flex justify-center w-full min-h-[400px] items-center">
        {loading ? (
          <Spinner label="Loading categories" />
        ) : !data?.zkAppCategories?.length ? (
          <EmptyStateCard title="There are no categories" />
        ) : (
          <div className="flex gap-4 flex-wrap flex-row justify-center">
            {data.zkAppCategories.map((category) => (
              <CategoryCard {...category} key={category?.slug} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
