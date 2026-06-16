"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md border border-sumi/15 bg-white px-3 py-2 text-sm font-semibold text-sumi shadow-sm transition hover:border-matcha hover:text-matcha dark:border-white/15 dark:bg-sumi dark:text-washi dark:hover:border-sakura dark:hover:text-sakura"
      aria-label="Toggle color theme"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
