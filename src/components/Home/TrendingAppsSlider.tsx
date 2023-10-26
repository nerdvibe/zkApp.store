import { ScrollShadow, Tab, Tabs } from "@nextui-org/react";
import CustomCard from "../Card";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import { useTrendingAppsQuery } from "@/gql/generated_mock";

export default function TrendingAppsSlider() {
  const { data } = useTrendingAppsQuery();
  const navigate = useNavigate();
  const onClick = (id: string) => {
    navigate(`${routes.PRODUCT}/${id}`);
  };
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
              {data?.allTrendingApps?.map((element) => (
                <CustomCard {...element} onClick={() => onClick(element?.id)} />
              ))}
            </ScrollShadow>
          </Tab>
          <Tab key="week" title="Week" />
          <Tab key="ever" title="Ever" />
        </Tabs>
      </div>
    </>
  );
}
