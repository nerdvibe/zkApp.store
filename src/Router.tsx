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
import ResetAccount from "./pages/ResetAccount";
import Settings from "./pages/Settings";
import VerifyEmail from "./pages/VerifyEmail";
import PendingVerification from "./pages/PendingVerification";

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
      <Route
        path={ROUTES.DASHBOARD}
        element={
          isAuthenticated ? (
            <Dashboard />
          ) : (
            <Navigate to={ROUTES.LOGIN} replace />
          )
        }
      />
      <Route
        path={ROUTES.SETTINGS}
        element={
          isAuthenticated ? (
            <Settings />
          ) : (
            <Navigate to={ROUTES.LOGIN} replace />
          )
        }
      />
      <Route
        path={ROUTES.LOGIN}
        element={
          !isAuthenticated ? <Login /> : <Navigate to={ROUTES.HOME} replace />
        }
      />
      <Route
        path={ROUTES.REGISTER}
        element={
          !isAuthenticated ? (
            <Register />
          ) : (
            <Navigate to={ROUTES.HOME} replace />
          )
        }
      />
      <Route
        path={ROUTES.FORGOT_PASSWORD}
        element={
          !isAuthenticated ? (
            <ForgotPassword />
          ) : (
            <Navigate to={ROUTES.HOME} replace />
          )
        }
      />
      <Route path={`${ROUTES.PROFILE}/:id`} element={<Profile />} />
      <Route
        path={`${ROUTES.RESET_ACCOUNT}/:resetToken`}
        element={<ResetAccount />}
      />
      <Route
        path={`${ROUTES.VERIFY_EMAIL}/:verifyEmailToken`}
        element={<VerifyEmail />}
      />
      <Route path={`${ROUTES.PENDING_VERIFICATION}`} element={<PendingVerification />} />
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
};
