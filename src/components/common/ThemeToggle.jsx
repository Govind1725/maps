import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

const STORAGE_KEY = "maps-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage may be unavailable in private browsing; theme still applies.
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
