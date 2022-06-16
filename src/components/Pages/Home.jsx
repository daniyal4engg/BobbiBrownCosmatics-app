import { HomeHead } from "./Home/HomeHead";
import { TrendingSection } from "../Pages/Home/TrendingSection";
import { CreamLinerMaskara } from "../Pages/Home/CreamLinerMaskara";
import { FounderCreators } from "../Pages/Home/FounderCreators";
import { CleanLookposter } from "../Pages/Home/CleanLookposter";
export const Home = () => {
  return (
    <h1>
      Home
      <HomeHead />
      <TrendingSection />
      <CreamLinerMaskara />
      <FounderCreators />
      <CleanLookposter />
    </h1>
  );
};
