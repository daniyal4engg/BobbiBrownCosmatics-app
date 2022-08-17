import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Pages/SignUp";
import { Login } from "./Pages/SignIn";
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
import { Cart } from "./Pages/Cart";

import { ProtectedRoute } from "./Pages/Context/ProtecteRoute";
export const AllRoutes = () => {
  return (
    <div>
      <NavbarSection />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route
          path="/allproducts"
          element={
            <ProtectedRoute>
              <AllProducts />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/AllProductsSinglePage/:id"
          element={<AllProductsSinglePage />}
        ></Route>
        <Route
          path="/cream"
          element={
            <ProtectedRoute>
              <Cream />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/creamsinglepage/:id"
          element={<CreamSinglepage />}
        ></Route>
        <Route
          path="/lipstick"
          element={
            <ProtectedRoute>
              <Lipstick />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/LipstickSinglePage/:id"
          element={<LipstickSinglePage />}
        ></Route>
        <Route
          path="/palette"
          element={
            <ProtectedRoute>
              <Palette />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/paletteSinglePage/:id"
          element={<PaletteSinglePage />}
        ></Route>
        <Route
          path="/pencil"
          element={
            <ProtectedRoute>
              <Pencil />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/pencilSinglePage/:id"
          element={<PencilSinglePage />}
        ></Route>
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        >
          Cart
        </Route>
      </Routes>
    </div>
  );
};
