import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate, useLocation } from "react-router-dom";
import routes from "../../routes";
import { logout, setUserInfo } from "../../store/session";
import { useLogoutMutation, useUserDataQuery } from "../../gql/generated";
import { toast } from "react-hot-toast";
import UserIcon from "../User/UserIcon";
import { useEffect } from "react";

export default function User() {
  const location = useLocation();
  const { pathname } = location;
  const isAuthenticated = useSelector(
    (state: RootState) => state.session.logged
  );

  const { data: userData, refetch } = useUserDataQuery({
    skip: !isAuthenticated,
    fetchPolicy: "no-cache",
  });
  const user = useSelector((state: RootState) => state.session.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutSession, { client }] = useLogoutMutation();

  useEffect(() => {
    if (
      userData?.selfUser?.username &&
      !pathname.includes(routes.PENDING_VERIFICATION)
    ) {
      dispatch(setUserInfo({ user: userData.selfUser }));
    }
    if (pathname.includes(routes.PENDING_VERIFICATION)) {
      dispatch(setUserInfo({}));
    }
  }, [userData]);

  useEffect(() => {
    if (!userData && user?.username) {
      refetch();
    }
  }, [userData, user]);

  const logoutHandler = async () => {
    try {
      await logoutSession();
      toast.success("Successfully logged out");
    } catch (error) {
      toast.error("There was an error while logging out");
    } finally {
      client.resetStore();
      dispatch(setUserInfo({}));
      dispatch(logout());
      navigate(routes.LANDING);
    }
  };

  const goToProfile = () => {
    navigate(`${routes.PROFILE}/${user?.id}`);
  };

  const goToSettings = () => {
    navigate(routes.SETTINGS);
  };

  return isAuthenticated ? (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="default"
          name={user?.username}
          size="sm"
          src={user?.profilePicture}
          fallback={
            <UserIcon value={user?.username || user?.email || ""} size={"30"} />
          }
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        {user?.username && userData?.selfUser?.username && (
          <DropdownItem
            key="profile"
            className="h-14 gap-2"
            onClick={goToProfile}
          >
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user?.username || user?.email}</p>
          </DropdownItem>
        )}
        {user?.username && userData?.selfUser?.username && (
          <DropdownItem key="settings" onClick={goToSettings}>
            My Settings
          </DropdownItem>
        )}
        <DropdownItem key="logout" color="danger" onClick={logoutHandler}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <div className="flex flex-row gap-4">
      <Button
        onClick={() => navigate(routes.LOGIN)}
        variant="light"
        color="default"
        className="hidden md:block"
      >
        Login
      </Button>
      <Button onClick={() => navigate(routes.REGISTER)} color="primary">
        Sign up
      </Button>
    </div>
  );
}
