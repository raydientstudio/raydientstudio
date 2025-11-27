"use client";

import React, { memo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { IconRaydientStudio } from "./mipmap/icon-raydientstudio";
import { DesktopMenu } from "./desktop-menu";
import Search from "./(home)/search";
import Notifications from "./(home)/notifications";
import ThemeSwitcher from "./theme-switcher";
import MobileMenu from "./mobile-menu";

const Header = () => {

    const router = useRouter();

    const navigateTo = useCallback(
        (path: string) => {
            router.push(path);
        },
        [router]
    );

    return (
        <header className="flex justify-center items-center fixed z-20 top-0 left-0 right-0 w-full h-16 rounded-b-lg border-b border-border bg-surface backdrop-blur supports-[backdrop-filter]:bg-surface/80">
            <div className="flex items-center justify-between w-full h-full max-w-7xl px-4 lg:px-0 gap-x-4">
                <div className="flex items-center gap-x-2 w-auto h-auto">
                    {/* MOBILE */}
                    <div className="flex flex-row lg:hidden items-center gap-x-2">
                        {/* Logo */}
                        <IconRaydientStudio size={36} onClick={() => navigateTo("/")} />
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden lg:flex items-center gap-x-6">
                        {/* Logo */}
                        <IconRaydientStudio size={36} onClick={() => navigateTo("/")} />

                        {/* Vertical Divider */}
                        <Separator orientation="vertical" className="hidden data-[orientation=vertical]:h-4" />
                        {/* Desktop Menu */}
                        <DesktopMenu />
                    </div>
                </div>

                <div className="flex items-center gap-x-2 w-auto h-auto">
                    {/* Theme Switcher */}
                    <div className="hidden lg:flex">
                        <ThemeSwitcher />
                    </div>

                    {/* Vertical Divider */}
                    <Separator orientation="vertical" className="hidden lg:flex data-[orientation=vertical]:h-4" />

                    {/* Search and Notifications */}
                    <Search />

                    <Notifications />

                    {/* Avatar */}
                    <div className="hidden lg:flex">
                        <Avatar className="w-8 h-8 border border-border rounded-md">
                            <AvatarImage src="https://github.com/sheikh-abdul-aziz.png" alt="alt" />
                            <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                    </div>

                    {/* Vertical Divider */}
                    <Separator orientation="vertical" className="flex lg:hidden data-[orientation=vertical]:h-4" />

                    {/* MOBILE MENU */}
                    <div className="flex lg:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default memo(Header);