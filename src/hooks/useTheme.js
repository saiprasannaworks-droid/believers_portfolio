import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";

  const storedTheme = window.localStorage.getItem("portfolio-theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light" : "dark";
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }

    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}

export default useTheme;