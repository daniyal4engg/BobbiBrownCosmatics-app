import { HomeHead } from "./Home/HomeHead";
import { TrendingSection } from "../Pages/Home/TrendingSection";
import {
  CreamLinerMaskara,
  LearnFromPros,
  SummerLineUp,
} from "../Pages/Home/CreamLinerMaskara";
import { FounderCreators } from "../Pages/Home/FounderCreators";
import { CleanLookposter } from "../Pages/Home/CleanLookposter";
import Footer from "./Home/Footer";
export const Home = () => {
  return (
    <h1>
      <HomeHead />
      <TrendingSection />
      <CreamLinerMaskara />
      <FounderCreators />
      <CleanLookposter />
      <SummerLineUp />
      <LearnFromPros />
      <Footer />
    </h1>
  );
};
