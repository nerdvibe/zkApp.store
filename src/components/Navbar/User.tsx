import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import { logout } from "../../store/session";

export default function User() {
  const user = useSelector((state: RootState) => state.session.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    navigate(routes.LANDING);
  };

  const goToProfile = () => {
    navigate(`${routes.PROFILE}/${user?.username}`);
  };

  return user ? (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={user?.username}
          size="sm"
          src={user?.avatar}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          key="profile"
          className="h-14 gap-2"
          onClick={goToProfile}
        >
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{user?.username}</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem key="logout" color="danger" onClick={logoutHandler}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <Avatar
      isBordered
      as="button"
      className="transition-transform"
      color="secondary"
      size="md"
      onClick={() => navigate(routes.LOGIN)}
    />
  );
}
