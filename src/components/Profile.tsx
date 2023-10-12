import { Avatar, Button, Image, Tab, Tabs } from "@nextui-org/react";
import SocialButtonsShare from "./SocialButtonsShare";
import UserApps from "./User/UserApps";
import UserUpdates from "./User/UserUpdates";

const tabs = [
  { key: "zkapps", title: "zkApps", component: <UserApps /> },
  { key: "updates", title: "Updates", component: <UserUpdates /> },
];

export default function Profile() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full object-cover flex">
        <Image
          src="/images/banner.png"
          className="w-full max-h-[200px] object-cover"
          removeWrapper
        />
      </div>
      <div className="flex flex-row gap-4 justify-between px-8">
        <div className="flex flex-row gap-4">
          <Avatar
            src="/images/banner.png"
            className="w-[100px] h-[100px] object-cover"
          />
          <div className="h-full flex flex-col justify-center">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-white text-3xl font-bold inline">
                @dappDeveloper
              </h1>
              <Image
                src="/icons/verified.png"
                className="inline min-w-[18px]"
              />
            </div>
            <p className="text-white text-lg">3234 Followers</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 my-4">
          <Button className="ml-5 w-full" color="primary">
            Follow
          </Button>
          <SocialButtonsShare />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Tabs
          className="flex justify-center w-full"
          key={"underlined"}
          radius="full"
          aria-label="Tabs variants"
          color="primary"
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
