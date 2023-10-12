import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CustomCard from "../components/Card";

export default function Favourites() {
  const products = useSelector(
    (state: RootState) => state.favoriteProducts.products
  );
  return (
    <div className="flex justify-center m-auto">
      <div className="flex justify-center items-center flex-wrap gap-4">
        {products.map((el) => (
          <CustomCard />
        ))}
        {!products.length && (
          <div>
            <h1>There are no favourites zkApps</h1>
          </div>
        )}
      </div>
    </div>
  );
}
