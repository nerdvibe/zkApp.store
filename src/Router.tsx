import { Route, Routes, Navigate } from "react-router";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import LandingHandler from "./pages/LandingHandler/LandingHandler";
import ROUTES from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Profile from "./components/Profile";

export const AppRoutes = () => {
  const isAuthenticated = useSelector((state: RootState) => {
    return state.session.logged;
  });
  return (
    <Routes>
      <Route path={ROUTES.LANDING} element={<LandingHandler />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
      <Route path={`${ROUTES.PRODUCT}/:id`} element={<Product />} />
      <Route path={`${ROUTES.CATEGORY}/:id`} element={<Category />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route
        path={ROUTES.DASHBOARD}
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to={ROUTES.LOGIN} />
        }
      />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={`${ROUTES.PROFILE}/:id`} element={<Profile />} />
    </Routes>
  );
};
