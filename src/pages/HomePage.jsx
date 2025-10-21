import HomeHeroSection from "../components/HomeHeroSection";
import { useLoaderData } from "react-router";
import PopularToySection from "../components/PopularToySection";
import MostWantedProducts from "../components/MostWantedProducts";
import BannerSection from "../components/BannerSection";
import AboutSection from "../components/AboutSection";

const HomePage = () => {
  const kidsData = useLoaderData();
  console.log(kidsData);

  return (
    <div className="bg-white">
      {/* Home > hero section */}
      <HomeHeroSection />

      {/* Home > popular toys section */}
      <PopularToySection />

      {/* Home > most wanted products */}
      <MostWantedProducts />

      {/*Home > Banner Section */}
      <BannerSection />
      {/*HOme > About section */}
      <AboutSection />
      
    </div>
  );
};
export default HomePage;
