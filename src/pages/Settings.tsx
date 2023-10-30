import {
  Accordion,
  AccordionItem,
  Avatar,
  Listbox,
  ListboxItem,
  ListboxSection,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useMemo, useState } from "react";
import { IconWrapper } from "../components/IconWrapper";
import Security from "../components/Settings/Security";
import Profile from "@/components/Settings/Profile";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import UserIcon from "@/components/User/UserIcon";
import Lottie from "react-lottie-player";
import verified from "@/assets/animations/verified.json";

enum TABS {
  PROFILE = "PROFILE",
  SETTING = "SETTING",
  DELETE = "DELETE",
}

enum TABS_LABELS {
  PROFILE = "Public profile",
  SETTING = "Security",
  DELETE = "Delete account",
}

const tabs = {
  "User settings": [
    {
      key: TABS.PROFILE,
      label: TABS_LABELS.PROFILE,
      icon: faUser,
      classname: "text-white",
      iconClass: "g-warning/10 text-warning",
    },
    {
      key: TABS.SETTING,
      label: TABS_LABELS.SETTING,
      icon: faShieldHalved,
      classname: "text-white",
      iconClass: "bg-secondary/10 text-secondary",
    },
  ],
  "Danger zone": [
    {
      key: TABS.DELETE,
      label: TABS_LABELS.DELETE,
      icon: faTrash,
      classname: "text-danger",
      iconClass: "bg-danger/10",
      color: "danger",
    },
  ],
};

export default function Settings() {
  const [selectedKeys, setSelectedKeys] = useState(new Set([TABS.PROFILE]));
  const user = useSelector((state: RootState) => state.session.user);
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  const Buttons = (
    <Listbox
      aria-label="Actions"
      // onAction={(key) => alert(key)}
      selectionMode="single"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      {Object.keys(tabs).map((tab: string) => (
        <ListboxSection title="User settings" showDivider>
          {tabs[tab].map((el) => (
            <ListboxItem
              className={el.classname}
              key={el.key}
              startContent={
                <IconWrapper className={el.iconClass}>
                  <FontAwesomeIcon icon={el.icon} />
                </IconWrapper>
              }
            >
              {el.label}
            </ListboxItem>
          ))}
        </ListboxSection>
      ))}
    </Listbox>
  );

  return (
    <div className="flex w-full justify-center">
      <div className="w-full flex flex-col gap-8 max-w-[1200px]">
        <div className="flex flex-row gap-4 justify-between px-8">
          <div className="flex flex-row gap-4">
            <Avatar
              src={user?.avatar}
              className="w-[100px] h-[100px] object-cover"
              fallback={
                <UserIcon value={user?.username || user?.email || ""} />
              }
            />
            <div className="h-full flex flex-col justify-center">
              <div className="flex flex-row gap-2 items-center">
                <h1 className="text-white text-3xl font-bold inline">
                  {user?.username}
                </h1>
                {user?.verified && (
                  <Lottie
                    animationData={verified}
                    loop={false}
                    style={{ maxWidth: "30px" }}
                    play={true}
                    segments={[0, 50]}
                  />
                )}
              </div>
              <p className="text-white text-lg">Your personal account</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex min-w-[200px] md:border-r-1 border-gray-700">
            {Buttons}
          </div>
          <div className="flex md:hidden min-w-[200px] md:border-r-1 border-gray-700">
            <Accordion variant="splitted">
              <AccordionItem key="1" title={TABS_LABELS[selectedValue]}>
                {Buttons}
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex p-4 w-full">
            {selectedValue === TABS.PROFILE && <Profile />}
            {selectedValue === TABS.SETTING && <Security />}
          </div>
        </div>
      </div>
    </div>
  );
}
