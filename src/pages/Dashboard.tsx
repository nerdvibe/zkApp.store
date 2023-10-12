import { Tab, Tabs } from "@nextui-org/react";
import UserApps from "../components/UserApps";
import PublishUpdate from "../components/PublishUpdate";
import EmptyState from "../components/Dashboard/EmptyState";

const tabs = [
  {
    label: "zkApps",
    component: <UserApps />,
  },
  {
    label: "Analytics",
    component: null,
  },
  {
    label: "Publish update",
    component: <PublishUpdate />,
  },
];

export default function Dashboard() {
  const nApps = 0;
  return (
    <div className="flex flex-col gap-4 my-11 mx-8">
      <h1 className="text-4xl text-white font-bold">{"> Dashboard"}</h1>
      <p className="text-white">
        You have {nApps || 0} zkApps published.{" "}
        {!nApps && " It’s a great day to publish one!"}
      </p>
      {!nApps ? (
        <EmptyState />
    ) : (
        <div className="flex w-full flex-col items-center">
          <Tabs key={"primary"} color={"primary"} aria-label="Tabs colors">
            {tabs.map(({ label, component }) => (
              <Tab className="w-full" key={label} title={label}>
                <div className="w-full flex items-center justify-center">
                  {component}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      )}
    </div>
  );
}
