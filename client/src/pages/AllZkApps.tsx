import CustomCard from "@/components/Card";
import { useAllZkAppsQuery } from "@/gql/generated";
import routes from "@/routes";
import { Button, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllZkApps() {
  const [skip, setSkip] = useState(0);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const {
    data: zkAppData,
    refetch,
    loading: queryLoading,
  } = useAllZkAppsQuery({
    variables: {
      skip,
    },
  });
  useEffect(() => {
    if (zkAppData?.zkApps?.length > 0) {
      setTimeout(() => {
        setData([...data, ...zkAppData?.zkApps]);
        setLoading(false);
      }, 350);
    }
  }, [zkAppData]);

  const fetchData = async () => {
    setLoading(true);
    await refetch({ skip: skip + 24 });
    setSkip(skip + 24);
  };

  if (queryLoading) {
    return (
      <div className="min-h-[300px] flex justify-center items-center w-full">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 my-11 md:mx-8">
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-4xl text-white font-bold">{"> All zkApps"}</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 min-h-[1000px]">
        {data?.map((zkApp) => (
          <CustomCard
            {...zkApp}
            key={zkApp.slug}
            onClick={() => navigate(`${routes.PRODUCT}/${zkApp.slug}`)}
          />
        ))}
      </div>
      {data && zkAppData?.zkApps?.length === 24 && (
        <Button
          color={loading ? "default" : "primary"}
          onClick={fetchData}
          disabled={zkAppData?.zkApps?.length === 0 || loading}
        >
          {loading ? (
            <Spinner
              style={{
                zIndex: 10,
              }}
            />
          ) : (
            "Load more"
          )}
        </Button>
      )}
    </div>
  );
}
