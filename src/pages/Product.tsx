import { Avatar, Button, Image, Tab, Tabs } from "@nextui-org/react";
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
import mock from "@/mocks/product.json";
import { useState } from "react";
import { toggleEditProductModal } from "@/store/product";
import Edit from "@/components/Product/Edit";
import { Link } from "react-router-dom";
import routes from "@/routes";

const tabs = [
  { key: "description", title: "Description", component: <Description /> },
  { key: "reviews", title: "Reviews", component: <Reviews /> },
  { key: "stats", title: "Stats", component: <Stats /> },
  { key: "audits", title: "Audits", component: <Audits /> },
];

export default function Product() {
  const [editableContent, setEditableContent] = useState(true);
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const isFavourite = selectIsProductFavorite("123")(state);
  const { title, creator, shortDescription, link, social } = mock;

  const toggleFavouriteProduct = () => {
    dispatch(toggleFavorite("123"));
  };

  const editContent = () => {
    dispatch(toggleEditProductModal({ active: true }));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full object-cover flex">
        <Image
          src="/images/banner.png"
          className="w-full max-h-[200px] object-cover"
          removeWrapper
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between px-8">
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <Avatar
            src="/images/banner.png"
            className="w-[100px] h-[100px] object-cover"
          />
          <div className="h-full flex flex-col justify-center items-center md:items-start">
            <h1 className="text-white text-3xl font-bold">
              {title}
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
              {shortDescription}
              <Link
                className="text-primary opacity-100 hover:opacity-80 transition-all duration-300"
                to={`${routes.PROFILE}/${creator}`}
              >
                @{creator}
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 my-4">
          {link && (
            <Button className="w-full" color="primary">
              Use now
            </Button>
          )}
          <SocialButtonsShare {...social} />
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
