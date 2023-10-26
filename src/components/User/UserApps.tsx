import routes from "@/routes";
import CustomCard from "../Card";
import { useNavigate } from "react-router-dom";

export default function UserApps({ apps }: { apps: any[] }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center m-auto">
      <div className="flex justify-center items-center flex-wrap gap-4">
        {apps?.map((el) => (
          <CustomCard
            {...el}
            onClick={() => navigate(`${routes.PRODUCT}/${el.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
