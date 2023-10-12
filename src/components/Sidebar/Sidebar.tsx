import { Image } from "@nextui-org/react";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store/store";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import { SIDEBAR_TABS } from "./util";

export default function CustomSidebar() {
  const state = useSelector((state: RootState) => state.sidebar);
  const [broken, setBroken] = useState(false);

  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "#1D1932",
          height: "100%",
        },
        height: "100%",
        top: 0,
        left: 0,
        border: 0,
      }}
      toggled={state.active}
      breakPoint="sm"
      onBreakPoint={setBroken}
      collapsed={state.collapsed}
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div className="flex w-full justify-center py-5">
          <Image src={Logo} alt="Alternate Text" radius="none" />
        </div>

        <Menu
          menuItemStyles={{
            button: {
              backgroundColor: "none",
              transition: "0.3s",
              color: "white",
              "&:hover": {
                backgroundColor: "#1D1932",
                transition: "0.3s",
                color: "#8468f8",
              },
              "&.active": {
                color: "#6F4FF2",
              },
            },
          }}
        >
          {SIDEBAR_TABS.map(
            ({ key, label, icon, suffix, link, disabled, onClick }) => (
              <MenuItem
                key={key}
                icon={icon}
                suffix={suffix}
                component={link && <NavLink to={link} />}
                disabled={disabled}
                onClick={() => (onClick ? onClick() : null)}
              >
                {label}
              </MenuItem>
            )
          )}
        </Menu>
      </div>
    </Sidebar>
  );
}
