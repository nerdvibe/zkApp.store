import routes from "@/routes";
import CustomCard from "../Card";
import { useNavigate } from "react-router-dom";
import EmptyStateCard from "../EmptyStateCard";
import satellite from "@/assets/animations/satellite.json";

export default function UserApps({ apps }: { apps: any[] }) {
  const navigate = useNavigate();
  if (!apps || apps.length === 0) {
    return (
      <div className="flex justify-center m-auto min-h-[400px]">
        <div className="flex justify-center items-center flex-wrap gap-4 flex-col">
          <EmptyStateCard
            image={satellite}
            title="There are no ZkApps so far..."
            description="Come back later"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center m-auto">
      <div className="flex justify-center items-center flex-wrap gap-4">
        {apps?.map((el) => (
          <CustomCard
            {...el}
            onClick={() => navigate(`${routes.PRODUCT}/${el.slug}`)}
          />
        ))}
      </div>
    </div>
  );
}
