import { useNavigate } from "react-router-dom";
import CustomCard, { CustomCardProps } from "./Card";
import routes from "@/routes";
import EmptyStateCard from "./Dashboard/EmptyStateCard";

interface IUserApps {
  apps: CustomCardProps[];
}

export default function UserApp({ apps }: IUserApps) {
  const navigate = useNavigate();
  const onClick = (appId: string) => {
    navigate(`${routes.PRODUCT}/${appId}`);
  };
  return (
    <div className="flex justify-center w-full gap-4 flex-wrap">
      <EmptyStateCard add />
      {apps.map((app) => (
        <CustomCard
          {...app}
          key={app.slug}
          onClick={() => onClick(app.slug!)}
        />
      ))}
    </div>
  );
}
