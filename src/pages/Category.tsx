import { Tab, Tabs } from "@nextui-org/react";
import Trending from "../components/Category/CategoryTabs/Trending";
import MostUsed from "../components/Category/CategoryTabs/MostUsed";
import { useParams } from "react-router-dom";
import FollowButton from "../components/FollowButton";
import { useState } from "react";
import EmptyStateCard from "@/components/EmptyStateCard";
import { useZkAppsByCategoryQuery } from "@/gql/generated";

export default function Category() {
  const { id } = useParams();
  const [following, setFollowing] = useState(false);
  const onFollowClick = () => {
    setFollowing(!following);
  };
  const { data } = useZkAppsByCategoryQuery({
    variables: {
      categorySlug: id,
    },
  });

  if (!data) {
    return <EmptyStateCard title="Category not found" />;
  }

  const tabs = [
    {
      key: "Trending",
      title: "Trending",
      component: <Trending apps={data?.zkAppsByCategory} />,
    },
    // { key: "MostUsed", title: "Most used", component: <MostUsed /> },
    // { key: "News", title: "News", component: <MostUsed /> },
  ];

  return (
    <div className="flex flex-col gap-4 my-11 md:mx-8">
      <h1 className="text-4xl text-white font-bold">
        {/* TODO: Add category query */}#{id}
      </h1>
      <div className="flex text-white justify-between">
        <p className="text-xl">{data?.zkAppsByCategory?.length} zkApp</p>
        <FollowButton onClick={onFollowClick} following={following} />
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
