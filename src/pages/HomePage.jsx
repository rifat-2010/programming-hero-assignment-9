import HomeHeroSection from "../components/HomeHeroSection";
import { useLoaderData } from "react-router";
import PopularToySection from "../components/PopularToySection";
import MostWantedProducts from "../components/MostWantedProducts";
import BannerSection from "../components/BannerSection";
import AboutSection from "../components/AboutSection";
import SpecialCategories from "../components/SpecialCategories";

const HomePage = () => {
  const kidsData = useLoaderData();
  console.log(kidsData);

  return (
    <div className="bg-white">
      {/* page title */}
      <title>Home-Page</title>
      {/* Home > hero section */}
      <HomeHeroSection />

      {/* Home > popular toys section */}
      <PopularToySection />

      {/* Home > most wanted products */}
      <MostWantedProducts />

      {/*Home > Banner Section */}
      <BannerSection />

      {/* Home > Special Categories */}
      <SpecialCategories />

      {/*Home > About section */}
      <AboutSection />
    </div>
  );
};
export default HomePage;
