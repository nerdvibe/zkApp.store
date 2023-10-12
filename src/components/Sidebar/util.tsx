import { Diamond } from "../../assets/icons/Diamond";
import { Globe } from "../../assets/icons/Globe";
import routes from "../../routes";

export const SIDEBAR_TABS = [
  {
    label: "Home",
    key: "home",
    link: "/home",
    disabled: false,
    icon: <Globe />,
    suffix: null,
    onClick: null,
  },
  {
    label: "Dashboard",
    key: "dashboard",
    link: routes.DASHBOARD,
    disabled: false,
    icon: <Globe />,
    suffix: null,
    onClick: null,
  },
  {
    label: "Favourites",
    key: "favourites",
    link: "/favourites",
    disabled: false,
    icon: <Diamond />,
    suffix: null,
    onClick: null,
  },
];
