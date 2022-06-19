import { HomeHead } from "./Home/HomeHead";
import { TrendingSection } from "../Pages/Home/TrendingSection";
import {
  CreamLinerMaskara,
  LearnFromPros,
  SummerLineUp,
} from "../Pages/Home/CreamLinerMaskara";
import { FounderCreators } from "../Pages/Home/FounderCreators";
import { CleanLookposter } from "../Pages/Home/CleanLookposter";
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
    </h1>
  );
};
