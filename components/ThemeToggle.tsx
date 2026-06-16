"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

// Dark/light toggle button. Renders a stable placeholder until mounted to
// avoid a hydration mismatch (theme is only known client-side).
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-accent hover:text-accent"
    >
      {mounted ? (
        isDark ? <FiSun size={16} /> : <FiMoon size={16} />
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}
