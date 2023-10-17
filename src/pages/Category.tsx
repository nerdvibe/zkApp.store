import { Button, Tab, Tabs } from "@nextui-org/react";
import Trending from "../components/Category/CategoryTabs/Trending";
import MostUsed from "../components/Category/CategoryTabs/MostUsed";
import { useParams } from "react-router-dom";
import FollowButton from "../components/FollowButton";

const tabs = [
  { key: "Trending", title: "Trending", component: <Trending /> },
  { key: "MostUsed", title: "Most used", component: <MostUsed /> },
  { key: "News", title: "News", component: <MostUsed /> },
];

export default function Category() {
  const appsNumber = 123;
  const { id } = useParams();
  const onFollowClick = () => {
    alert("Follow");
  };

  return (
    <div className="flex flex-col gap-4 my-11 mx-8">
      <h1 className="text-4xl text-white font-bold">#{id}</h1>
      <div className="flex text-white justify-between">
        <p className="text-xl">{appsNumber} zkApps</p>
        <FollowButton />
        {/* <Button color="primary" onClick={onFollowClick}>
          Follow
        </Button> */}
      </div>
      <div className="flex flex-col gap-4">
        <Tabs
          className="flex justify-center w-full"
          key={"underlined"}
          radius="full"
          aria-label="Tabs variants"
          variant="light"
        >
          {tabs.map(({ key, component, title }) => (
            <Tab key={key} title={title}>
              {component}
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
