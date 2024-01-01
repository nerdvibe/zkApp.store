import { Button, Chip, Spinner, Tab, Tabs } from "@nextui-org/react";
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
import { toggleEditProductModal, updateSelectedApp } from "@/store/product";
import Edit from "@/components/Product/Edit";
import { Link, useNavigate, useParams } from "react-router-dom";
import routes from "@/routes";
import EmptyStateCard from "@/components/EmptyStateCard";
import { useAppDataQuery } from "@/gql/generated";
import EditableBanner from "@/components/Product/EditableBanner";
import EditableAvatar from "@/components/Product/EditableAvatar";
import EditableCard from "@/components/Card/EditableCard";
import { toast } from "react-hot-toast";

export default function Product() {
  const { id } = useParams();
  const state = useSelector((state: RootState) => state);
  const userData = useSelector((state: RootState) => state.session.user);
  const navigate = useNavigate();

  const { data, loading, refetch } = useAppDataQuery({
    variables: {
      slug: id,
    },
  });

  const clearStoreData = () => {
    dispatch(updateSelectedApp({ zkApp: undefined }));
  };

  useEffect(() => {
    clearStoreData();
    return clearStoreData;
  }, []);

  useEffect(() => {
    if (userData && data) {
      setEditableContent(userData?.id === data.zkApp?.owner);
      dispatch(updateSelectedApp({ zkApp: data.zkApp }));
    }
  }, [userData, data]);

  const [editableContent, setEditableContent] = useState(false);
  const dispatch = useDispatch();
  const isFavourite = selectIsProductFavorite(`${id}`)(state);
  const tabs = [
    {
      key: "description",
      title: "Description",
      component: (
        <EditableCard
          initialValue={data?.zkApp?.body || ""}
          editable={editableContent}
          refetchData={() => refetch()}
        />
      ),
    },
    { key: "reviews", title: "Reviews", component: <Reviews /> },
    {
      key: "stats",
      title: "Stats",
      component: <Stats />,
    },
    { key: "audits", title: "Audits", component: <Audits /> },
  ];

  useEffect(() => {
    dispatch(toggleEditProductModal({ active: false }));
  }, []);

  const toggleFavouriteProduct = () => {
    toast.success(
      isFavourite
        ? "ZkApp removed from favourites"
        : "ZkApp added to favourites"
    );
    dispatch(toggleFavorite(`${id}`));
  };

  const editContent = () => {
    dispatch(toggleEditProductModal({ active: true }));
  };

  const openApp = () => {
    window.open(data?.zkApp?.url, "_blank", "noreferrer");
  };

  if (loading) {
    return <Spinner />;
  }

  if (!loading && !data?.zkApp) {
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
        <EditableBanner
          bannerImage={data?.zkApp?.bannerImage}
          isEditable={editableContent}
          refetch={refetch}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between px-8">
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <EditableAvatar
            icon={data?.zkApp?.icon}
            name={data?.zkApp?.name}
            isEditable={editableContent}
            refetch={refetch}
          />
          <div className="h-full flex flex-col justify-center items-center md:items-start">
            <div className="flex flex-col md:flex-row items-center gap-y-2">
              <h1 className="text-white text-3xl font-bold">
                {data?.zkApp?.name}
              </h1>
              <div>
                {editableContent && (
                  <FontAwesomeIcon
                    className="px-4 cursor-pointer text-white text-xl font-bold"
                    icon={faPencil}
                    onClick={editContent}
                  />
                )}
                <FontAwesomeIcon
                  className="text-xl px-4 text-red-600 cursor-pointer font-bold"
                  icon={isFavourite ? faHeartFull : faHeart}
                  onClick={toggleFavouriteProduct}
                />
              </div>
              {data?.zkApp?.category && (
                <Chip
                  className="cursor-pointer"
                  onClick={() =>
                    navigate(
                      `${routes.CATEGORY}/${data?.zkApp?.category?.slug}`
                    )
                  }
                >
                  #{data?.zkApp?.category?.name}
                </Chip>
              )}
            </div>
            <p className="text-white text-lg flex flex-col md:flex-row gap-4 items-center">
              <Link
                className="text-primary opacity-100 hover:opacity-80 transition-all duration-300"
                to={`${routes.PROFILE}/${data?.zkApp?.owner}`}
              >
                @{data?.zkApp?.owner}
              </Link>
              {data?.zkApp?.subtitle}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 my-4">
          {data?.zkApp?.url && (
            <Button className="w-full" color="primary" onClick={openApp}>
              Use ZkApp
            </Button>
          )}
          <SocialButtonsShare
            discord={data?.zkApp?.discordUrl}
            github={data?.zkApp?.githubUrl}
          />
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
      <Edit refetchData={refetch} data={data} />
    </div>
  );
}
