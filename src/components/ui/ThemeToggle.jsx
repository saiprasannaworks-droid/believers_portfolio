import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";

function ThemeToggle({ theme, toggleTheme }) {
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      <span className={`theme-toggle__icon ${isLight ? "is-active" : ""}`}>
        <HiMiniSun />
      </span>

      <span className={`theme-toggle__icon ${!isLight ? "is-active" : ""}`}>
        <HiMiniMoon />
      </span>

      <span className={`theme-toggle__thumb ${isLight ? "is-light" : ""}`} />
    </button>
  );
}

export default ThemeToggle;