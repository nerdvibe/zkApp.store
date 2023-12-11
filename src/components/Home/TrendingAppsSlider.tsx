import { ScrollShadow, Tab, Tabs } from "@nextui-org/react";
import CustomCard from "../Card";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import { useTrendingAppsQuery } from "@/gql/generated";

export default function TrendingAppsSlider() {
  const { data } = useTrendingAppsQuery();
  const navigate = useNavigate();
  const onClick = (id: string) => {
    navigate(`${routes.PRODUCT}/${id}`);
  };

  if (!data?.zkApps) {
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
              orientation="horizontal"
              className="w-full flex gap-4 left-0 p-4"
            >
              {data?.zkApps?.map((element) => (
                <CustomCard
                  {...element}
                  onClick={() => onClick(element?.slug)}
                />
              ))}
            </ScrollShadow>
          </Tab>
          {/* <Tab key="week" title="Week" />
          <Tab key="ever" title="Ever" /> */}
        </Tabs>
      </div>
    </>
  );
}
