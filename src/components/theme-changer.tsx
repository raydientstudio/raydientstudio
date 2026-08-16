"use client";

import { useTheme } from "next-themes";
import Button from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  IconDevices,
  IconMoonStars,
  IconSun,
} from "../icons/icons-theme";

export default function ThemeChanger() {
  const { setTheme, resolvedTheme, theme } = useTheme();

  const CurrentIcon =
    theme === "system"
      ? IconDevices
      : resolvedTheme === "light"
      ? IconSun
      : IconMoonStars;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Toggle theme"
          asIcon
          variant="outline"
          size="medium"
          radius="small"
          className="text-foreground"
        >
          <CurrentIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          aria-label="Light theme"
          className={
            resolvedTheme === "light" && theme !== "system"
              ? "font-medium bg-muted/90 text-foreground"
              : ""
          }
        >
          <IconSun size={16} className="mr-2" />
          Light
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          aria-label="Dark theme"
          className={
            resolvedTheme === "dark" && theme !== "system"
              ? "font-medium bg-muted/90 text-foreground"
              : ""
          }
        >
          <IconMoonStars size={16} className="mr-2" />
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("system")}
          aria-label="System theme"
          className={
            theme === "system"
              ? "font-medium bg-muted/90 text-foreground"
              : ""
          }
        >
          <IconDevices size={16} className="mr-2" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}