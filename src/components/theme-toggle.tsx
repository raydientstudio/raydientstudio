"use client";

import { useTheme } from "next-themes";
import Button from "./ui/button";

/**
 * A single toggle button that flips between "light" and "dark".
 * No system option, no animation — clicking always lands on the
 * opposite of whatever is active right now.
 *
 * `resolvedTheme` is undefined on the very first server render, so
 * the dynamic bits (aria-checked, fill) are wrapped in
 * suppressHydrationWarning instead of gating the whole component
 * behind a mounted-state effect — no setState-in-effect involved.
 *
 * Usage:
 *   import { ThemeToggle } from "@/components/theme-toggle";
 *   <ThemeToggle />
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <Button className="relative" type="button" role="switch" variant="outline" asIcon size="small" aria-checked={isDark} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} onClick={toggleTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4.5">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0">
              </path><path d="M12 3l0 18"></path>
              <path d="M12 9l4.65 -4.65"></path>
              <path d="M12 14.3l7.37 -7.37"></path>
              <path d="M12 19.6l8.85 -8.85"></path>
          </svg>
    </Button>
  );
}
