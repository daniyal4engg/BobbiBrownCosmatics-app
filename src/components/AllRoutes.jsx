import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn";
import { NavbarSection } from "./Navbar/Navbar";
import { Pencil } from "./Navbar/NavbarButtons/ShopComponentsCategory/Pencil";
import { Cream } from "./Navbar/NavbarButtons/ShopComponentsCategory/Cream";
import { Lipstick } from "./Navbar/NavbarButtons/ShopComponentsCategory/Lipstick";
import { Palette } from "./Navbar/NavbarButtons/ShopComponentsCategory/Palette";
import { CreamSinglepage } from "./Navbar/NavbarButtons/ShopComponentsCategory/CreamSinglepage";
import { LipstickSinglePage } from "./Navbar/NavbarButtons/ShopComponentsCategory/LipstickSinglePage";
import { PaletteSinglePage } from "./Navbar/NavbarButtons/ShopComponentsCategory/paletteSinglePage";
import { PencilSinglePage } from "./Navbar/NavbarButtons/ShopComponentsCategory/pencilSinglePage";
import { AllProducts } from "./Navbar/NavbarButtons/ShopComponentsCategory/AllProducts";
import { AllProductsSinglePage } from "./Navbar/NavbarButtons/ShopComponentsCategory/AllProductsSinglePage";
export const AllRoutes = () => {
  return (
    <div>
      <NavbarSection />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>

        <Route path="/allproducts" element={<AllProducts />}></Route>
        <Route
          path="/AllProductsSinglePage/:id"
          element={<AllProductsSinglePage />}
        ></Route>
        <Route path="/cream" element={<Cream />}></Route>
        <Route
          path="/creamsinglepage/:id"
          element={<CreamSinglepage />}
        ></Route>
        <Route path="/lipstick" element={<Lipstick />}></Route>
        <Route
          path="/LipstickSinglePage/:id"
          element={<LipstickSinglePage />}
        ></Route>
        <Route path="/palette" element={<Palette />}></Route>
        <Route
          path="/paletteSinglePage/:id"
          element={<PaletteSinglePage />}
        ></Route>
        <Route path="/pencil" element={<Pencil />}></Route>
        <Route
          path="/pencilSinglePage/:id"
          element={<PencilSinglePage />}
        ></Route>
      </Routes>
    </div>
  );
};
