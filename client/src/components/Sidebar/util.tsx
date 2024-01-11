import { Diamond } from "@/assets/icons/Diamond";
import { Globe } from "@/assets/icons/Globe";
import routes from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faIcons } from "@fortawesome/free-solid-svg-icons";

export const SIDEBAR_TABS = [
  {
    label: "Home",
    key: "home",
    link: "/home",
    disabled: false,
    icon: <FontAwesomeIcon icon={faHome} />,
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
    label: "Categories",
    key: "categories",
    link: routes.CATEGORIES,
    disabled: false,
    icon: <FontAwesomeIcon icon={faIcons} />,
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
