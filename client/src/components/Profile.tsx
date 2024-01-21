import { Spinner, Tab, Tabs } from "@nextui-org/react";
import SocialButtonsShare from "./SocialButtonsShare";
import UserApps from "./User/UserApps";
import UserUpdates from "./User/UserUpdates";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useParams } from "react-router-dom";
import Lottie from "react-lottie-player";
import verified from "@/assets/animations/verified.json";
import { useEffect } from "react";
import EmptyStateCard from "./EmptyStateCard";
import { useUserWithZkAppsLazyQuery } from "@/gql/generated";
import EditableBanner from "./Product/EditableBanner";
import EditableAvatar from "./Product/EditableAvatar";
import FollowButton from "./FollowButton";
import { CustomCardProps } from "./Card";

export default function Profile() {
  const { id: urlId } = useParams();
  const currentUser = useSelector((state: RootState) => state.session.user);
  const isCurrentUser = currentUser?.id === urlId;
  const [fetchUserData, { data, loading, refetch }] =
    useUserWithZkAppsLazyQuery({
      variables: {
        id: urlId,
      },
    });

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
      component: <UserApps apps={data?.user?.zkApps as CustomCardProps[]} />,
    },
    { key: "updates", title: "Updates", component: <UserUpdates /> },
  ];

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center min-h-[500px]">
        <Spinner label="Loading user profile" />;
      </div>
    );
  }

  if (!loading && !data?.user) {
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
        <EditableBanner
          bannerImage={data?.user?.bannerPicture as string}
          isEditable={isCurrentUser}
          isUser
          refetch={refetch}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between px-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <EditableAvatar
            icon={data?.user?.profilePicture as string}
            name={data?.user?.username}
            isEditable={isCurrentUser}
            isUser
            refetch={refetch}
          />
          <div className="h-full flex flex-col justify-center">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-white text-3xl font-bold inline">
                @{data?.user?.username}
              </h1>
              {false && (
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
              {data?.user?.followerCount || 0} Followers
            </p>
            <p className="text-white text-lg">{data?.user?.bio}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 my-4">
          <FollowButton />
          {/* <Button
            className="ml-5 w-full disabled:opacity-50"
            color="primary"
            disabled={!isAuthenticated || isCurrentUser}
          >
            Follow
          </Button> */}
          <SocialButtonsShare
            discord={data?.user?.discordUrl}
            github={data?.user?.githubUrl}
            twitter={data?.user?.xUsername}
          />
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
