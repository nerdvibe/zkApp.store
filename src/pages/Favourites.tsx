import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CustomCard from "../components/Card";
import EmptyState from "@/components/Favourites/EmptyState";

export default function Favourites() {
  const products = useSelector(
    (state: RootState) => state.favoriteProducts.products
  );
  return (
    <div className="flex justify-center m-auto flex-col">
      <h1 className="text-4xl text-white font-bold my-8">{"> Favourites"}</h1>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {products.map((el) => (
          <CustomCard />
        ))}
        {!products.length && <EmptyState />}
      </div>
    </div>
  );
}
