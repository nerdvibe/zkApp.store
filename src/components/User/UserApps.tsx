import { useParams } from "react-router-dom";
import CustomCard from "../Card";
import mock from "@/mocks/user-products.json";

export default function UserApps() {
  const { id: urlId } = useParams();
  return (
    <div className="flex justify-center m-auto">
      <div className="flex justify-center items-center flex-wrap gap-4">
        {mock.map((el) => (
          <CustomCard {...el} />
        ))}
      </div>
    </div>
  );
}
