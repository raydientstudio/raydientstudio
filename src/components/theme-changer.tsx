"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { IconDevices, IconMoonStars, IconSun } from "./mipmap/icons-theme";

export default function ThemeChanger() {

    const { setTheme, resolvedTheme, theme } = useTheme();

    useEffect(() => {
        const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
        if (savedTheme && savedTheme !== theme) {
            setTheme(savedTheme);
        }
    }, [setTheme, theme]);

    const [Icon, setIcon] = useState(() => IconDevices);

    useEffect(() => {
        if (resolvedTheme === "light" && theme !== "system") {
            setIcon(() => IconSun);
        } else if (resolvedTheme === "dark" && theme !== "system") {
            setIcon(() => IconMoonStars);
        } else if (theme === "system") {
            setIcon(() => IconDevices);
        } else {
            setIcon(() => IconDevices);
        }
    }, [resolvedTheme, theme]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outlined"} size={"icon"} radius={"medium"} className="text-foreground">
                    <Icon />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={"end"} defaultValue={theme}>
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    aria-label="Light Theme"
                    aria-checked={resolvedTheme === "light" && theme !== "system"}
                    className={resolvedTheme === "light" && theme !== "system" ? "font-medium bg-muted/90 text-foreground" : ""}>
                    <IconSun size={16} className="mr-2" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    aria-label="Dark Theme"
                    aria-checked={resolvedTheme === "dark" && theme !== "system"}
                    className={resolvedTheme === "dark" && theme !== "system" ? "font-medium bg-muted/90 text-foreground" : ""}>
                    <IconMoonStars size={16} className="mr-2" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    aria-label="System Theme"
                    aria-checked={theme === "system"}
                    className={theme === "system" ? "font-medium bg-muted/90 text-foreground" : ""}>
                    <IconDevices size={16} className="mr-2" /> System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}