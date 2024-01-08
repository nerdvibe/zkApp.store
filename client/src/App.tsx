import { useEffect } from "react";
import "./App.css";
import GlobalLoader from "./components/GlobalLoader";
import CustomNavbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { AppRoutes } from "./Router";
import { useDispatch } from "react-redux";
import { toggleLoader } from "./store/config";
import { Toaster } from "react-hot-toast";
import useTokenExpirationChecker from "./hooks/refreshToken";
import SearchModal from "./components/SearchModal/SearchModal";
import { CookieBanner } from "./components/CookieBanner";

function App() {
  const dispatch = useDispatch();
  useTokenExpirationChecker(1);
  useEffect(() => {
    dispatch(toggleLoader({ show: true }));
    setTimeout(() => {
      dispatch(toggleLoader({ show: false }));
    }, 1500);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <div style={{ display: "block", height: "100%", background: "#1D1932" }}>
        <Sidebar />
      </div>
      <main className="w-full overflow-auto">
        <CookieBanner />
        <GlobalLoader />
        <CustomNavbar />
        <SearchModal />
        <div className="flex justify-center w-full items-stretch">
          <div
            style={{ padding: "16px 24px", color: "#44596e" }}
            className="max-w-[1400px] w-full"
          >
            <AppRoutes />
          </div>
        </div>
      </main>
      <div>
        <Toaster
          position="bottom-center"
          reverseOrder={true}
          toastOptions={{
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
