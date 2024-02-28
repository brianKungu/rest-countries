// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="inline-flex items-center gap-2 justify-center"
        >
          <FiSun /> Light Mode
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2 justify-center"
        >
          <FiMoon /> Dark Mode
        </button>
      )}
    </div>
  );
}
