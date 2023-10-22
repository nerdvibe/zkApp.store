import { Switch } from "@nextui-org/react";
import { MoonIcon } from "@/assets/icons/MoonIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
// import useDarkMode from "use-dark-mode";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    if (theme === "purple-dark") {
      setTheme("light");
    } else {
      setTheme("purple-dark");
    }
  };

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected={theme === "light"}
      size="sm"
      color="secondary"
      onClick={changeTheme}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    />
  );
}
