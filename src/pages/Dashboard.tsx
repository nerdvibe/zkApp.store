import { Spinner, Tab, Tabs } from "@nextui-org/react";
import UserApps from "../components/UserApps";
import PublishUpdate from "../components/PublishUpdate";
import EmptyState from "../components/Dashboard/EmptyState";
import Analytics from "@/components/Dashboard/Analytics/Analytics";
import PublishAppModal from "@/components/PublishAppModal";
import { useUserWithZkAppsLazyQuery } from "@/gql/generated";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";

export interface UserApps {
  id: string;
  title: string;
  description: string;
  category: string;
  version: string;
  score: string;
  image: string;
}

export default function Dashboard() {
  const currentUser = useSelector((state: RootState) => state.session.user);

  const [fetchUserData, { data, loading }] = useUserWithZkAppsLazyQuery({
    variables: {
      id: currentUser?.id,
    },
  });

  useEffect(() => {
    if (currentUser?.id) {
      fetchUserData({
        variables: {
          id: "" + currentUser.id,
        },
      });
    }
  }, [currentUser]);

  const tabs = [
    {
      label: "zkApps",
      component: <UserApps apps={data?.user?.zkApps} />,
    },
    {
      label: "Analytics",
      component: <Analytics apps={data?.user?.zkApps} />,
    },
    {
      label: "Publish update",
      component: (
        <PublishUpdate
          apps={data?.user?.zkApps}
          updates={data?.User?.Updates}
        />
      ),
    },
  ];
  const nApps = data?.user?.zkApps?.length || 0;

  if (!data || loading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col gap-4 my-11 md:mx-8">
      <h1 className="text-4xl text-white font-bold">{"> Dashboard"}</h1>
      <p className="text-white">
        You have {nApps || 0} zkApps published.{" "}
        {!nApps && " It’s a great day to publish one!"}
      </p>
      {!nApps ? (
        <EmptyState />
      ) : (
        <div className="flex w-full flex-col items-center">
          <Tabs
            key={"primary"}
            color={"primary"}
            aria-label="Tabs colors"
            variant="light"
          >
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
      <PublishAppModal />
    </div>
  );
}
