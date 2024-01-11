import routes from "@/routes";
import { logout } from "@/store/session";
import { parseJwt } from "@/util/jwt";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { store } from "../store/store";
import { toast } from "react-hot-toast";

function useTokenExpirationChecker(checkIntervalInMinutes: number): void {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Function to check token expiration status
    const checkTokenExpiration = () => {
      const token = store.getState().session.authToken;
      // TODO: Remove session data and logout if there's no token
      if (token) {
        try {
          const decodedToken = parseJwt(token);
          const expirationTimestamp = decodedToken.exp * 1000; // Convert to milliseconds
          const currentTime = Date.now();

          if (currentTime >= expirationTimestamp) {
            // TODO: REFRESH TOKEN IF AVAILABLE
            // Token is expired, dispatch logout action and navigate to /login
            dispatch(logout()); // Replace with your logout action
            navigate(routes.LOGIN);
          }
        } catch (error) {
          // Handle token decoding errors
          // In case of decoding errors, you can also dispatch a logout action and navigate to /login
          dispatch(logout()); // Replace with your logout action
          toast.error("Session expired");
          navigate(routes.LOGIN);
        }
      }
    };

    // Initial token check
    checkTokenExpiration();

    // Set up an interval to periodically check the token
    const intervalId = setInterval(
      checkTokenExpiration,
      checkIntervalInMinutes * 60 * 1000
    );

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, history, checkIntervalInMinutes]);
}

export default useTokenExpirationChecker;
