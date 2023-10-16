import { useEffect } from "react";
import "./App.css";
import GlobalLoader from "./components/GlobalLoader";
import CustomNavbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { AppRoutes } from "./Router";
import { useDispatch } from "react-redux";
import { toggleLoader } from "./store/config";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleLoader({ show: true }));
    setTimeout(() => {
      dispatch(toggleLoader({ show: false }));
    }, 1500);
  }, []);
  return (
    // <div className="">
    //   <div>HEADER</div>
    //   <div className="flex flex-row">
    //     <div className="basis-1/4">
    //       <div>SIDEBAR</div>
    //     </div>
    //     <div className="basis-3/4">
    //       MAIN CONTENT
    //       <div>HERO BANNER</div>
    //       <div>CAROUSEL</div>
    //       <div>FOOTER</div>
    //     </div>
    //   </div>
    // </div>
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
        <GlobalLoader />
        <CustomNavbar />
        <div style={{ padding: "16px 24px", color: "#44596e" }}>
          <AppRoutes />
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
