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

export const useCVDownload = () => {
  const handleDownload = () => {
    const url = "/MortezaDarzi.pdf"; // Path to the PDF file in the public folder

    const link = document.createElement("a");
    link.href = url;
    link.download = "MortezaDarzi.pdf"; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return handleDownload;
};