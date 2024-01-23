import { Spinner } from "@nextui-org/react";
import { useEffect } from "react";
import { isLogged, setUserInfo } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes";
import { useUserDetailsLazyQuery } from "../../gql/generated";

export default function LandingHandler() {
  const state = useSelector((state: RootState) => state);
  const [getUserDetails] = useUserDetailsLazyQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogged(state)) {
      if (!state.session.user) {
        fetchUserInfo();
      } else {
        navigate(ROUTES.DASHBOARD);
      }
    } else {
      navigate(ROUTES.HOME);
    }
  }, [state]);

  const fetchUserInfo = async () => {
    const { data } = await getUserDetails();
    dispatch(
      setUserInfo({
        user: {
          email: data?.selfUser?.email,
        },
      })
    );
    navigate(ROUTES.HOME);
  };

  return (
    <div className="flex w-full h-[90vh] justify-center items-center flex-col gap-4">
      <Spinner />
      Loading
    </div>
  );
}
