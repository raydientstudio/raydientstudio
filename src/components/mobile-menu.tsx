"use client";

import React, { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { MobileNavigation } from "./mobile-navigation";
import { Label } from "./ui/label";
import { Poppins } from "@/fonts/local";
import { useSettings } from "@/hooks/use-settings";
import { Switch } from '@/components/ui/switch'; 
import ThemeSwitcher from "./theme-switcher";
import menus from "@/utils/mobile-menus";

type MobileMenuContextType = {
    isMenuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
};

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

export function MobileMenuProvider({ children }: { children: ReactNode }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <MobileMenuContext.Provider value={{ isMenuOpen, setMenuOpen }}>
            {children}
        </MobileMenuContext.Provider>
    );
}

export function useMobileMenu() {
    const context = useContext(MobileMenuContext);
    if (!context) throw new Error("useMobileMenu must be used within MobileMenuProvider");
    return context;
}

export default function MobileMenu() {

    const SIGNUP = "/signup";
    const LOGIN = "/login";

    const router = useRouter();

    const { isMaintenance, toggleMaintenance } = useSettings();
    const { isScrollbarDisabled, toggleScrollbar } = useSettings();
    const { isMenuOpen, setMenuOpen } = useMobileMenu();

    const toggleMenu = () => setMenuOpen(!isMenuOpen);
    const navigateTo = (path: string) => router.push(path);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "visible";
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* Hamburger Button */}
            <Button aria-label="menu" variant="outlined" size="icon" radius={"medium"} onClick={toggleMenu} className="flex flex-col items-center justify-center p-2 gap-1.5 transition-opacity disabled:opacity-50 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary">
                <motion.span animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 4 : 0 }} transition={{ duration: 0.150, ease: "linear" }} className="block w-full h-0.5 bg-muted-foreground rounded-none" />
                <motion.span animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -4 : 0 }} transition={{ duration: 0.150, ease: "linear" }} className="block w-full h-0.5 bg-muted-foreground rounded-none" />
            </Button>

            {/* Drawer Content */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div key="mobile-drawer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.150, ease: "easeInOut" }} className="z-20 flex flex-col fixed left-0 right-0 top-16 bottom-0 h-[100dvh] w-screen bg-background text-foreground px-4 py-4 gap-y-3">
                        <div className="flex flex-col items-center justify-between gap-y-4">
                            <Button onClick={() => navigateTo(SIGNUP)} variant={"filled"} size={"wide"} radius={"medium"}>
                                Signup
                            </Button>
                            <Button onClick={() => navigateTo(LOGIN)} variant={"outlined"} size={"wide"} radius={"medium"}>
                                Login
                            </Button>
                        </div>

                        <Label className={`${Poppins.className} antialiased text-xs font-medium tracking-tight normal text-muted-foreground mt-4`}>
                            Settings
                        </Label>

                        <div className="flex flex-col pl-2 gap-x-2 gap-y-3">
                            <div className="flex flex-row items-center justify-between">
                                <Label className="text-sm font-normal">Theme</Label>
                                <ThemeSwitcher />
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <Label className="text-sm font-normal">Dashboard</Label>
                                <Avatar className="w-8 h-8 border border-border rounded-md">
                                    <AvatarImage src={"https://github.com/sheikh-abdul-aziz.png"} alt={"User Avatar"} />
                                    <AvatarFallback>{"Sheikh Abdul Aziz"}</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <Label className="text-sm font-normal">Disable Scrollbar</Label>
                                <Switch id="scrollbar-toggle" checked={isScrollbarDisabled} onCheckedChange={toggleScrollbar} />
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <Label className="text-sm font-normal">Maintenance</Label>
                                <Switch id="scrollbar-toggle" checked={isMaintenance} onCheckedChange={toggleMaintenance} />
                            </div>                            
                        </div>

                        <Separator orientation="horizontal" className="my-3" />

                        <div className="flex flex-col">
                            <MobileNavigation itemFirst={menus.navigationMenu} itemSecond={menus.projectsMenu} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}