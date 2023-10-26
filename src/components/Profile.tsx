import { Avatar, Button, Image, Tab, Tabs } from "@nextui-org/react";
import SocialButtonsShare from "./SocialButtonsShare";
import UserApps from "./User/UserApps";
import UserUpdates from "./User/UserUpdates";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useParams } from "react-router-dom";
import UserIcon from "./User/UserIcon";
import Lottie from "react-lottie-player";
import verified from "@/assets/animations/verified.json";
import { useUserLazyQuery } from "@/gql/generated_mock";
import { useEffect } from "react";
import EmptyStateCard from "./EmptyStateCard";

export default function Profile() {
  const currentUser = useSelector((state: RootState) => state.session.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.session.logged
  );
  const { id: urlId } = useParams();
  const isCurrentUser = currentUser?.id === urlId;
  const [fetchUserData, { data, loading }] = useUserLazyQuery();
  useEffect(() => {
    if (urlId) {
      fetchUserData({
        variables: {
          id: urlId,
        },
      });
    }
  }, [urlId]);

  const tabs = [
    {
      key: "zkapps",
      title: "zkApps",
      component: <UserApps apps={data?.User?.Products} />,
    },
    { key: "updates", title: "Updates", component: <UserUpdates /> },
  ];

  if (!loading && !data?.User) {
    return (
      <EmptyStateCard
        title="User not found"
        description="The user you are looking for is missing"
      />
    );
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full object-cover flex">
        <Image
          src={data?.User?.userBanner}
          className="w-full h-[200px] object-cover"
          width={1500}
          classNames={{
            wrapper: "w-full max-w-max",
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between px-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Avatar
            src={data?.User?.userImage}
            className="w-[100px] h-[100px] object-cover"
            fallback={
              <UserIcon
                value={data?.User?.username || data?.User?.email || ""}
                size={100}
              />
            }
          />
          <div className="h-full flex flex-col justify-center">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-white text-3xl font-bold inline">
                @{data?.User?.username}
              </h1>
              {data?.User?.verified && (
                <Lottie
                  animationData={verified}
                  loop={false}
                  style={{ maxWidth: "30px" }}
                  play={true}
                  segments={[0, 50]}
                />
              )}
            </div>
            <p className="text-white text-lg">
              {data?.User?.followers} Followers
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 my-4">
          <Button
            className="ml-5 w-full disabled:opacity-50"
            color="primary"
            disabled={!isAuthenticated || isCurrentUser}
          >
            Follow
          </Button>
          <SocialButtonsShare {...data?.User?.social} />
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
