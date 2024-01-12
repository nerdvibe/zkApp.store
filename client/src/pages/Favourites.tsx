import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import CustomCard from "../components/Card";
import EmptyState from "@/components/Favourites/EmptyState";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import { useZkAppsBySlugLazyQuery } from "@/gql/generated";
import { Button, Spinner } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { clearFavourites } from "@/store/favourites";

export default function Favourites() {
  const [zkApps, setZkApps] = useState([]);
  const [fetchZkApps, { called }] = useZkAppsBySlugLazyQuery();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.favoriteProducts.products
  );

  useEffect(() => {
    if (products) {
      fetchApps(products);
    }
  }, [products]);

  const fetchApps = async (apps: string[]) => {
    if (apps) {
      const { data } = await fetchZkApps({
        variables: {
          slugs: products,
        },
      });
      if (data) {
        setZkApps([...data?.zkApps]);
      }
      setLoading(false);
    }
  };

  const clearAllFavourites = () => {
    dispatch(clearFavourites());
    setZkApps([]);
  };

  if (!called || loading) {
    return (
      <div className="min-h-[300px] flex justify-center items-center w-full">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 my-11 md:mx-8">
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-4xl text-white font-bold">{"> Favourites"}</h1>
        {!!zkApps.length && (
          <Button
            className="md:block hidden"
            variant="light"
            color="danger"
            startContent={<FontAwesomeIcon icon={faX} />}
            onClick={clearAllFavourites}
          >
            {" "}
            Remove all
          </Button>
        )}
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {!zkApps.length && <EmptyState />}
        {zkApps?.map((zkApp) => (
          <CustomCard
            {...zkApp}
            key={zkApp.slug}
            onClick={() => navigate(`${routes.PRODUCT}/${zkApp.slug}`)}
          />
        ))}
      </div>
    </div>
  );
}
