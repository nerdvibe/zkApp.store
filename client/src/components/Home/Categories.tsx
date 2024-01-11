import { ScrollShadow, Spinner } from "@nextui-org/react";
import CategoryCard from "../CategoryCard";
import { useHomepageCategoriesQuery } from "@/gql/generated";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Categories() {
  const { data, loading } = useHomepageCategoriesQuery();

  const scrollContainerRef = useRef(null);

  const scrollToPosition = (position) => {
    // Check if the ref is available
    if (scrollContainerRef.current) {
      // Scroll the div to the specified position
      scrollContainerRef.current.scrollLeft += position;
    }
  };

  if (loading) {
    return (
      <div className="min-h-[300px] flex justify-center items-center w-full">
        <Spinner />
      </div>
    );
  }

  if (!data || data.zkAppCategories?.length === 0) {
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
          ref={scrollContainerRef}
          orientation="horizontal"
          className="w-full flex gap-4 left-0 p-4 min-h-[240px] items-end"
        >
          {data?.zkAppCategories?.map((category) => (
            <CategoryCard {...category} key={category.id} />
          ))}
        </ScrollShadow>
        <div className="w-full flex justify-between relative -top-[150px]">
          <FontAwesomeIcon
            className="cursor-pointer text-4xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
            icon={faArrowLeft}
            color="white"
            onClick={() => scrollToPosition(-250)}
          />
          <FontAwesomeIcon
            className="cursor-pointer text-4xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
            color="white"
            icon={faArrowRight}
            onClick={() => scrollToPosition(250)}
          />
        </div>
      </div>
    </div>
  );
}
