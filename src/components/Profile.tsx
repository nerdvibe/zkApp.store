import { Avatar, Button, Image, Tab, Tabs } from "@nextui-org/react";
import SocialButtonsShare from "./SocialButtonsShare";
import UserApps from "./User/UserApps";
import UserUpdates from "./User/UserUpdates";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useParams } from "react-router-dom";
import mock from "@/mocks/user-profile.json";
import UserIcon from "./User/UserIcon";
import Lottie from "react-lottie-player";
import verified from "@/assets/animations/verified.json";

const tabs = [
  { key: "zkapps", title: "zkApps", component: <UserApps /> },
  { key: "updates", title: "Updates", component: <UserUpdates /> },
];

export default function Profile() {
  const currentUser = useSelector((state: RootState) => state.session.user);
  const { id: urlId } = useParams();
  const isCurrentUser = currentUser?.id === urlId;

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full object-cover flex">
        <Image
          src={mock.banner}
          className="w-full max-h-[200px] object-cover"
          removeWrapper
        />
      </div>
      <div className="flex flex-row gap-4 justify-between px-8">
        <div className="flex flex-row gap-4">
          <Avatar
            // src={mock?.avatar || "/images/banner.png"}
            className="w-[100px] h-[100px] object-cover"
            fallback={
              <UserIcon
                value={mock?.username || mock?.email || ""}
                size={100}
              />
            }
          />
          <div className="h-full flex flex-col justify-center">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-white text-3xl font-bold inline">
                @{mock?.username}
              </h1>
              <Lottie
                animationData={verified}
                loop={false}
                style={{ maxWidth: "30px" }}
                play={true}
                segments={[0, 50]}
              />
            </div>
            <p className="text-white text-lg">{mock.followers} Followers</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 my-4">
          <Button
            className="ml-5 w-full"
            color="primary"
            disabled={isCurrentUser}
          >
            Follow
          </Button>
          <SocialButtonsShare {...mock.social} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Tabs
          className="flex justify-center w-full"
          key={"underlined"}
          radius="full"
          aria-label="Tabs variants"
          color="primary"
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
