import { useEffect, useState } from "react";
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
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const [dataFromWindow, setDataFromWindow] = useState("No data received");
  useTokenExpirationChecker(1);
  useEffect(() => {
    dispatch(toggleLoader({ show: true }));
    setTimeout(() => {
      dispatch(toggleLoader({ show: false }));
    }, 1500);
    setTimeout(() => {
      alert(
        `Data received from the main window: ${
          // @ts-ignore
          window?.text || "No data received"
        }`
      );
      // @ts-ignore
      setDataFromWindow(window?.text || "No data received");
    }, 2000);
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
            <h1 color="white" className="text-5xl text-white font-bold">DATA FROM THE MAIN WINDOW: {dataFromWindow}</h1>
            <div className=" min-h-[90vh]">
              <AppRoutes />
            </div>
            <Footer />
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
