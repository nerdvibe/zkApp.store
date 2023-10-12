import { Navbar, NavbarContent, Input, Image } from "@nextui-org/react";
import { SearchIcon } from "../SearchIcon.js";
import User from "./User.js";
import { collapse } from "../../store/sidebar";
import { useDispatch, useSelector } from "react-redux";
import ArrowLeft from "../../assets/icons/arrow-left-to-line.svg";
import { RootState } from "../../store/store.js";
import ThemeButton from "./ThemeButton.js";

export default function CustomNavbar() {
  const collapsed = useSelector((state: RootState) => state.sidebar.collapsed);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row">
      <div
        className="w-[50px] min-w-[50px] data-[menu-open=true]:border-none sticky top-0 inset-x-0 border-b border-divider flex items-center pl-5"
        onClick={() => dispatch(collapse())}
      >
        <Image
          src={ArrowLeft}
          className={`${
            collapsed ? "rotate-180" : "rotate-0"
          } cursor-pointer duration-250 transform-gpu w-[20px]`}
        />
      </div>
      <Navbar isBordered>
        <NavbarContent as="div" className="flex w-full justify-between">
          <Input
            classNames={{
              base: "w-3/4 h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
          <ThemeButton />
          <User />
        </NavbarContent>
      </Navbar>
    </div>
  );
}
