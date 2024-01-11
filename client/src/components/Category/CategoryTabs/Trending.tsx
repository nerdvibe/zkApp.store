import { useNavigate } from "react-router-dom";
import CustomCard from "../../Card";
import routes from "@/routes";
import EmptyStateCard from "@/components/EmptyStateCard";
import { Spinner } from "@nextui-org/react";

export default function Trending({
  apps,
  loading,
}: {
  apps: any[];
  loading: boolean;
}) {
  const navigate = useNavigate();

  if(loading) {
    return(
      <div className="flex flex-wrap w-full overflow-x-scroll py-5 gap-4 justify-center">
        <Spinner label="Loading ZkApps" />
      </div>
    )
  }

  if (!apps || apps.length === 0) {
    return (
      <div className="flex flex-wrap w-full overflow-x-scroll py-5 gap-4 justify-center">
        <EmptyStateCard
          title="No ZkApps in this category"
          description="Come back later"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap w-full overflow-x-scroll py-5 gap-4 justify-center">
      {apps?.map((product) => (
        <CustomCard
          {...product}
          onClick={() => navigate(`${routes.PRODUCT}/${product.slug}`)}
        />
      ))}
    </div>
  );
}
