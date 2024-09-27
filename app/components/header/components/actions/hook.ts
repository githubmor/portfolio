import { useState, useEffect } from "react";

export const useThemeSwitch =()=>{
    const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for stored theme in localStorage or default to 'light'
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return {toggleTheme,theme};

}