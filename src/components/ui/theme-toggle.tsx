"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";

function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("app:theme");
  if (saved === "light" || saved === "dark") return saved;
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export const ThemeToggle: React.FC<{ className?: string }>
= ({ className }) => {
  const [theme, setTheme] = React.useState<"light" | "dark">(getInitialTheme);

  React.useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem("app:theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={
        [
          "inline-flex items-center justify-center rounded-md border border-input bg-background px-2.5 py-1.5 text-sm shadow-xs",
          "hover:bg-accent hover:text-accent-foreground",
          "transition-colors",
          className,
        ].filter(Boolean).join(" ")
      }
    >
      {theme === "dark" ? (
        <div className="flex items-center gap-1.5">
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5">
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </div>
      )}
    </button>
  );
};
