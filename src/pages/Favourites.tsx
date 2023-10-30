import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CustomCard from "../components/Card";
import EmptyState from "@/components/Favourites/EmptyState";
import { useFilteredProductsLazyQuery } from "@/gql/generated_mock";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";

export default function Favourites() {
  const [fetchProducts, { data }] = useFilteredProductsLazyQuery();
  const navigate = useNavigate();
  const products = useSelector(
    (state: RootState) => state.favoriteProducts.products
  );

  useEffect(() => {
    if (products) {
      fetchProducts({
        variables: {
          ids: products,
        },
      });
    }
  }, [products]);

  return (
    <div className="flex justify-center m-auto flex-col">
      <h1 className="text-4xl text-white font-bold my-8">{"> Favourites"}</h1>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {data?.allProducts?.map((product) => (
          <CustomCard
            {...product}
            onClick={() => navigate(`${routes.PRODUCT}/${product.id}`)}
          />
        ))}
        {!data && <EmptyState />}
      </div>
    </div>
  );
}
