import FeaturedBanner from "../components/Home/FeaturedBanner";
import AppModal from "../components/AppModal";
import TrendingAppsSlider from "../components/Home/TrendingAppsSlider";
import Categories from "../components/Home/Categories";
import BlurredCards from "../components/Home/BlurredCards";
import Footer from "../components/Footer/Footer";
import CreativeBanner from "../components/CreativeBanner/CreativeBanner";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleProductModal } from "@/store/product";

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
      <BlurredCards />
      <TrendingAppsSlider />
      <Categories />
      <FeaturedBanner />
      <CreativeBanner />
      <Footer />
      <AppModal />
    </div>
  );
}
