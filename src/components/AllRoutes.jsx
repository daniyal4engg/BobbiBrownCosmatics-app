import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn";
import { NavbarSection } from "./Navbar/Navbar";
export const AllRoutes = () => {
  return (
    <div>
      <NavbarSection />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
};
