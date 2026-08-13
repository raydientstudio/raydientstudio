"use client";

import { useTheme } from "next-themes";
import Button from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { IconDevices, IconMoonStars, IconSun } from "../icons/icons-theme";

export default function ThemeChanger() {
    const { setTheme, resolvedTheme, theme } = useTheme();

    // Derived, not stored - next-themes already owns persistence/rehydration,
    // so the icon just needs to be computed from current state on each render.
    function getIcon() {
        if (theme === "system") return IconDevices
        if (resolvedTheme === "light") return IconSun
        if (resolvedTheme === "dark") return IconMoonStars
        return IconDevices
    }
    const Icon = getIcon()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button aria-label="toggle" asIcon variant={"outlined"} size={"icon"} radius={"small"} className="text-foreground">
                    <Icon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={"end"}>
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    aria-label="Light Theme"
                    className={resolvedTheme === "light" && theme !== "system" ? "font-medium bg-muted/90 text-foreground" : ""}>
                    <IconSun size={16} className="mr-2" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    aria-label="Dark Theme"
                    className={resolvedTheme === "dark" && theme !== "system" ? "font-medium bg-muted/90 text-foreground" : ""}>
                    <IconMoonStars size={16} className="mr-2" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    aria-label="System Theme"
                    className={theme === "system" ? "font-medium bg-muted/90 text-foreground" : ""}>
                    <IconDevices size={16} className="mr-2" /> System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
