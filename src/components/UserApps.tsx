import { useNavigate } from "react-router-dom";
import CustomCard from "./Card";
import routes from "@/routes";
import { UserApps } from "@/pages/Dashboard";

interface IUserApps {
  apps: UserApps[];
}

export default function UserApp({ apps }: IUserApps) {
  const navigate = useNavigate();
  const onClick = (appId: string) => {
    navigate(`${routes.PRODUCT}/${appId}`);
  };
  return (
    <div className="flex justify-center w-full gap-4 flex-wrap">
      {apps.map((app) => (
        <CustomCard {...app} onClick={() => onClick(app.id)} />
      ))}
    </div>
  );
}
