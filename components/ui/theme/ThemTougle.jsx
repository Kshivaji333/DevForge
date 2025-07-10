"use client";
import { useTheme } from "next-themes";

const ThemeTougle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button className="w-full" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeTougle;
