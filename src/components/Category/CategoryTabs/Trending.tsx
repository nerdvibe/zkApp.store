import { useNavigate } from "react-router-dom";
import CustomCard from "../../Card";
import routes from "@/routes";

export default function Trending({ apps }: { apps: any[] }) {
  const navigate = useNavigate();
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
