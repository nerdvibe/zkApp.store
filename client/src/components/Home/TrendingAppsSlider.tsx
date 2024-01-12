import { ScrollShadow, Spinner, Tab, Tabs } from "@nextui-org/react";
import CustomCard from "../Card";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import { useTrendingAppsQuery } from "@/gql/generated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function TrendingAppsSlider() {
  const { data,loading } = useTrendingAppsQuery();
  const navigate = useNavigate();
  const onClick = (id: string) => {
    navigate(`${routes.PRODUCT}/${id}`);
  };

  const scrollContainerRef = useRef(null);

  const scrollToPosition = (position: number) => {
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

  if (!data?.zkApps?.length) {
    return (
      <>
        <h1 className="text-white text-xl">Trending zkApps</h1>
        <div className="w-full flex items-center justify-center h-[200px] border-dashed border-2 border-gray-600 rounded-xl">
          <h1 className="text-white">No trending apps</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-between flex-col gap-4 py-2">
        <h1 className="text-white text-xl">Trending zkApps</h1>
        <Tabs
          key={"secondary"}
          color={"secondary"}
          aria-label="Tabs colors"
          radius="full"
          className="no-bg-tab"
          variant="light"
        >
          <Tab key="today" title="Today" className="mx-auto max-w-[100%]">
            <ScrollShadow
              ref={scrollContainerRef}
              orientation="horizontal"
              className="w-full flex gap-4 left-0 p-4"
            >
              {data?.zkApps?.map((element) => (
                <CustomCard
                  {...element}
                  key={element?.slug}
                  onClick={() => onClick(element?.slug)}
                />
              ))}
            </ScrollShadow>
            <div className="w-full flex justify-between relative -top-[300px]">
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
          </Tab>
          {/* <Tab key="week" title="Week" />
          <Tab key="ever" title="Ever" /> */}
        </Tabs>
      </div>
    </>
  );
}
