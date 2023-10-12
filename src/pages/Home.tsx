import FeaturedBanner from "../components/Home/FeaturedBanner";
import AppModal from "../components/AppModal";
import TrendingAppsSlider from "../components/Home/TrendingAppsSlider";
import Categories from "../components/Home/Categories";
import BlurredCards from "../components/Home/BlurredCards";
import Footer from "../components/Footer/Footer";
import CreativeBanner from "../components/CreativeBanner/CreativeBanner";

export default function Home() {
  return (
    <div className="flex gap-2 flex-col">
      <BlurredCards />
      <TrendingAppsSlider />
      <Categories />
      <FeaturedBanner />
      <AppModal />
      <CreativeBanner />
      <Footer />
    </div>
  );
}
