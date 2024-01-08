import FeaturedBanner from "../components/Home/FeaturedBanner";
import AppModal from "../components/AppModal";
import TrendingAppsSlider from "../components/Home/TrendingAppsSlider";
import Categories from "../components/Home/Categories";
import NewsCards from "../components/Home/NewsCards";
import Footer from "../components/Footer/Footer";
import CreativeBanner from "../components/CreativeBanner/CreativeBanner";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleProductModal } from "@/store/product";
import NewsRouteHandler from "@/components/NewsRouteHandler";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    initComponent();
  }, []);

  const initComponent = () => {
    dispatch(toggleProductModal({ active: false, productId: "" }));
  };

  return (
    <div className="flex gap-2 flex-col">
      <NewsRouteHandler />
      <NewsCards />
      <TrendingAppsSlider />
      <Categories />
      <FeaturedBanner />
      <CreativeBanner />
      <Footer />
      <AppModal />
    </div>
  );
}
