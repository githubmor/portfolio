"use client";
import IconButton from "@/app/components/icon-button";
import { useThemeSwitch } from "./hook";
import MoonIcon from "./moon-icon";
import SunIcon from "./sun-icon";

function SwitchTheme() {
  const { toggleTheme, theme } = useThemeSwitch();
  return (
    <div className="flex justify-between items-center">
      <span className="text-base text-gray-600 md:hidden">Switch Theme</span>
      <IconButton  onClick={toggleTheme}>
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </div>
  );
}

export default SwitchTheme;
