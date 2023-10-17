import { Spinner } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function GlobalLoader() {
  const active = useSelector((state: RootState) => state.config.globalLoading);
  return active ? (
    <div
      className={`w-full h-full flex justify-center fixed left-0 items-center overflow-x-hidden bg-[#00000099] transition-all duration-200 ${
        active ? "opacity-100 z-50" : "opacity-0 -z-2"
      }`}
    >
      <Spinner size="lg" label="Loading" />
    </div>
  ) : (
    <></>
  );
}
