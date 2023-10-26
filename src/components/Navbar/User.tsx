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
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import {
  clearRefreshToken,
  clearToken,
  logout,
  setUserInfo,
} from "../../store/session";
import { useLogoutMutation } from "../../gql/generated";
import { toast } from "react-hot-toast";
import UserIcon from "../User/UserIcon";
import { useUserQuery } from "@/gql/generated_mock";
import { useEffect } from "react";

export default function User() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.session.logged
  );
  const { data } = useUserQuery({
    variables: {
      id: 1,
    },
  });
  const user = useSelector((state: RootState) => state.session.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutSession] = useLogoutMutation();

  useEffect(() => {
    if (data?.User) {
      dispatch(setUserInfo({ user: data?.User }));
    }
  }, [data]);

  const logoutHandler = async () => {
    try {
      await logoutSession();
      toast.success("Successfully logged out");
    } catch (error) {
      toast.error("There was an error while logging out");
    } finally {
      dispatch(setUserInfo({}));
      dispatch(logout());
      navigate(routes.LANDING);
    }
  };

  const goToProfile = () => {
    navigate(`${routes.PROFILE}/${data?.User?.id}`);
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
          src={data?.User?.userImage}
          fallback={
            <UserIcon
              value={data?.User?.username || user?.email || ""}
              size={30}
            />
          }
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          key="profile"
          className="h-14 gap-2"
          onClick={goToProfile}
        >
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">
            {data?.User?.username || data?.User?.email}
          </p>
        </DropdownItem>
        <DropdownItem key="settings" onClick={goToSettings}>
          My Settings
        </DropdownItem>
        <DropdownItem key="settings" onClick={() => dispatch(clearToken())}>
          Clear access token
        </DropdownItem>
        <DropdownItem
          key="settings"
          onClick={() => dispatch(clearRefreshToken())}
        >
          Clear refresh token
        </DropdownItem>
        {/* <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
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
