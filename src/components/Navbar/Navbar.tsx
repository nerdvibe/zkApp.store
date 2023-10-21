import {
  Navbar,
  NavbarContent,
  Input,
  Image,
  NavbarBrand,
  Kbd,
} from "@nextui-org/react";
import { SearchIcon } from "../SearchIcon.js";
import User from "./User.js";
import { collapse, toggle } from "../../store/sidebar";
import { useDispatch, useSelector } from "react-redux";
import ArrowLeft from "../../assets/icons/arrow-left-to-line.svg";
import { RootState } from "../../store/store.js";
import ThemeButton from "./ThemeButton.js";
import { useKeyPress } from "@/hooks/useKeyPress.js";
import { useState } from "react";
import { searchApp, toggleModal } from "@/store/search.js";

export default function CustomNavbar() {
  const [searchText, setSearchText] = useState("");
  const [searchbarFocused, setSearchbarFocused] = useState(false);
  const { collapsed, broken } = useSelector(
    (state: RootState) => state.sidebar
  );

  const keypressAction = () => {
    if (searchbarFocused) {
      dispatch(searchApp({ value: searchText }));
      dispatch(toggleModal({}));
    }
  };

  useKeyPress({
    keys: ["Enter"],
    callback: keypressAction,
  });
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    if (broken) {
      dispatch(toggle());
    } else {
      dispatch(collapse());
    }
  };

  const onNavbarFocus = (event: boolean) => {
    setSearchbarFocused(event);
  };

  return (
    <Navbar shouldHideOnScroll maxWidth="full">
      <NavbarBrand className="max-w-[50px]">
        <div
          className="w-[40px] data-[menu-open=true]:border-none sticky top-0 inset-x-0flex items-center pl-5"
          onClick={toggleSidebar}
        >
          <Image
            src={ArrowLeft}
            className={`${
              collapsed ? "rotate-180" : "rotate-0"
            } cursor-pointer duration-250 transform-gpu w-[20px] sidebar-icon`}
          />
        </div>
      </NavbarBrand>
      <NavbarContent
        as="div"
        className="flex w-full justify-center items-center"
        style={{ justifyContent: "center" }}
      >
        <Input
          classNames={{
            base: "w-3/4 h-10 max-w-[600px]",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
          endContent={<Kbd keys={["command"]}>K</Kbd>}
          onFocusChange={onNavbarFocus}
          onChange={(e) => setSearchText(e.currentTarget.value)}
        />
        <div className="hidden md:block">
          <ThemeButton />
        </div>
        <User />
      </NavbarContent>
    </Navbar>
  );
}
