import { Spinner } from "@nextui-org/react";
import { useEffect } from "react";
import { isLogged } from "../../store/session";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes";
import { usePrivateLazyQuery } from "../../gql/generated";

export default function LandingHandler() {
  const state = useSelector((state: RootState) => state);
  const [fetchInfo] = usePrivateLazyQuery();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged(state)) {
      if (!state.session.user) {
        fetchUserInfo();
      } else {
        navigate(ROUTES.DASHBOARD);
      }
    } else {
      navigate(ROUTES.LOGIN);
    }
  }, [state, navigate]);

  const fetchUserInfo = async () => {
    const result = await fetchInfo();
    console.log(
      "🚀 ~ file: LandingHandler.tsx:27 ~ fetchUserInfo ~ result:",
      result
    );
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <div className="flex w-full h-[90vh] justify-center items-center flex-col gap-4">
      <Spinner />
      Loading
    </div>
  );
}
