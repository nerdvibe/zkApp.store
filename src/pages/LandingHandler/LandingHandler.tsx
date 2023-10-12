import { Spinner } from "@nextui-org/react";
import { useEffect } from "react";
import { isLogged } from "../../store/session";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes";

export default function LandingHandler() {
  const state = useSelector((state: RootState) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged(state)) {
      navigate(ROUTES.DASHBOARD);
    } else {
      navigate(ROUTES.LOGIN);
    }
  }, [state, navigate]);

  return (
    <div className="flex w-full h-[90vh] justify-center items-center flex-col gap-4">
      <Spinner />
      Loading
    </div>
  );
}
