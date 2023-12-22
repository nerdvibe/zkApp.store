import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CustomCard from "../components/Card";
import EmptyState from "@/components/Favourites/EmptyState";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import { useAppDataLazyQuery } from "@/gql/generated";

export default function Favourites() {
  // TODO: Add new zkapp query asap
  const [fetchProducts, { data }] = useAppDataLazyQuery();
  const [zkApps, setZkApps] = useState([]);

  const navigate = useNavigate();
  const products = useSelector(
    (state: RootState) => state.favoriteProducts.products
  );

  useEffect(() => {
    if (products) {
      products.map((slug) => {
        fetchProducts({
          variables: {
            slug,
          },
        }).then(({ data, error }) => {
          if (!error) {
            setZkApps([...zkApps, data?.zkApp]);
          }
        });
      });
    }
  }, [products]);

  return (
    <div className="flex justify-center m-auto flex-col">
      <h1 className="text-4xl text-white font-bold my-8">{"> Favourites"}</h1>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {zkApps?.map((zkApp) => (
          <CustomCard
            {...zkApp}
            onClick={() => navigate(`${routes.PRODUCT}/${zkApp.slug}`)}
          />
        ))}
        {!data && <EmptyState />}
      </div>
    </div>
  );
}
