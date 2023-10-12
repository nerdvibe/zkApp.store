import { Avatar, Button, Image, Tab, Tabs } from "@nextui-org/react";
import Description from "../components/Product/ProductTabs/Description";
import Reviews from "../components/Product/ProductTabs/Reviews";
import Stats from "../components/Product/ProductTabs/Stats";
import Audits from "../components/Product/ProductTabs/Audits";
import SocialButtonsShare from "../components/SocialButtonsShare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFull } from "@fortawesome/free-solid-svg-icons";
import { selectIsProductFavorite } from "../store/favourites";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleFavorite } from "../store/favourites";

const tabs = [
  { key: "description", title: "Description", component: <Description /> },
  { key: "reviews", title: "Reviews", component: <Reviews /> },
  { key: "stats", title: "Stats", component: <Stats /> },
  { key: "audits", title: "Audits", component: <Audits /> },
];

export default function Product() {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const isFavourite = selectIsProductFavorite("123")(state);

  const toggleFavouriteProduct = () => {
    dispatch(toggleFavorite("123"));
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
      <div className="flex flex-row gap-4 justify-between px-8">
        <div className="flex flex-row gap-4">
          <Avatar
            src="/images/banner.png"
            className="w-[100px] h-[100px] object-cover"
          />
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-white text-3xl font-bold">
              CyberpunKYC
              <FontAwesomeIcon
                className="text-sm px-4 text-red-600 cursor-pointer mb-1"
                icon={isFavourite ? faHeartFull : faHeart}
                onClick={toggleFavouriteProduct}
              />
            </h1>
            <p className="text-white text-lg">
              cyberpnk.mina - Decentralized KYC identity - @dappDeveloper
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 my-4">
          <Button className="w-full" color="primary">
            Use now
          </Button>
          <SocialButtonsShare />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Tabs
          className="flex justify-center w-full"
          key={"underlined"}
          radius="full"
          aria-label="Tabs variants"
          color="primary"
        >
          {tabs.map(({ key, component, title }) => (
            <Tab key={key} title={title}>
              {component}
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
