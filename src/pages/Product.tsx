import {
  Avatar,
  Button,
  Image,
  Skeleton,
  Spinner,
  Tab,
  Tabs,
} from "@nextui-org/react";
import Description from "../components/Product/ProductTabs/Description/Description";
import Reviews from "../components/Product/ProductTabs/Reviews";
import Stats from "../components/Product/ProductTabs/Stats";
import Audits from "../components/Product/ProductTabs/Audits";
import SocialButtonsShare from "../components/SocialButtonsShare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faHeartFull,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { selectIsProductFavorite } from "../store/favourites";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleFavorite } from "../store/favourites";
import { useEffect, useState } from "react";
import { toggleEditProductModal } from "@/store/product";
import Edit from "@/components/Product/Edit";
import { Link, useParams } from "react-router-dom";
import routes from "@/routes";
import { useProductQuery } from "@/gql/generated_mock";
import EmptyStateCard from "@/components/EmptyStateCard";

export default function Product() {
  const { id } = useParams();
  const state = useSelector((state: RootState) => state);
  const userData = useSelector((state: RootState) => state.session.user);
  const { data, loading, error } = useProductQuery({
    variables: {
      id,
    },
  });

  useEffect(() => {
    if (userData && data) {
      setEditableContent(userData?.id === data.Product?.User?.id);
    }
  }, [userData, data]);

  const [editableContent, setEditableContent] = useState(true);
  const dispatch = useDispatch();
  const isFavourite = selectIsProductFavorite(`${id}`)(state);
  const tabs = [
    {
      key: "description",
      title: "Description",
      component: <Description description={data?.Product?.description} />,
    },
    { key: "reviews", title: "Reviews", component: <Reviews /> },
    {
      key: "stats",
      title: "Stats",
      component: <Stats reviews={data?.Product?.reviews} />,
    },
    { key: "audits", title: "Audits", component: <Audits /> },
  ];

  useEffect(() => {
    dispatch(toggleEditProductModal({ active: false }));
  }, []);

  const toggleFavouriteProduct = () => {
    dispatch(toggleFavorite(`${id}`));
  };

  const editContent = () => {
    dispatch(toggleEditProductModal({ active: true }));
  };

  if (loading) {
    return <Spinner />;
  }

  if (!loading && !data?.Product) {
    return (
      <EmptyStateCard
        title="zkApp not found"
        description="The zkApp you are looking for is missing"
      />
    );
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full object-cover flex">
        <Image
          src={data?.Product?.bannerImage}
          width={1500}
          className="w-full max-h-[200px] object-cover min-h-[150px] h-[200px]"
          classNames={{
            wrapper: "w-full max-w-max",
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between px-8">
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <Avatar
            src={data?.Product?.image}
            className="w-[100px] h-[100px] object-cover"
          />
          <div className="h-full flex flex-col justify-center items-center md:items-start">
            <h1 className="text-white text-3xl font-bold">
              {data?.Product?.title}
              <FontAwesomeIcon
                className="text-sm px-4 text-red-600 cursor-pointer mb-1"
                icon={isFavourite ? faHeartFull : faHeart}
                onClick={toggleFavouriteProduct}
              />
              {editableContent && (
                <FontAwesomeIcon
                  className="text-sm px-4 cursor-pointer mb-1"
                  icon={faPencil}
                  onClick={editContent}
                />
              )}
            </h1>
            <p className="text-white text-lg flex flex-col md:flex-row gap-4 items-center">
              <Link
                className="text-primary opacity-100 hover:opacity-80 transition-all duration-300"
                to={`${routes.PROFILE}/${data?.Product?.User?.id}`}
              >
                @{data?.Product?.User?.username}
              </Link>
              {data?.Product?.shortDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 my-4">
          {data?.Product?.link && (
            <Button className="w-full" color="primary">
              Use now
            </Button>
          )}
          <SocialButtonsShare {...data?.Product?.social} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Tabs
          className="flex justify-center w-full"
          key={"underlined"}
          radius="full"
          aria-label="Tabs variants"
          color="primary"
          variant="light"
        >
          {tabs.map(({ key, component, title }) => (
            <Tab key={key} title={title}>
              {component}
            </Tab>
          ))}
        </Tabs>
      </div>
      <Edit />
    </div>
  );
}
