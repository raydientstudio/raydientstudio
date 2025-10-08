"use client";

import React, { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutGrid, IconShape } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { MobileNavigation } from "./mobile-navigation";
import { Label } from "./ui/label";
import { Poppins } from "@/fonts/local";
import { useSettings } from "@/hooks/use-settings";
import { Switch } from '@/components/ui/switch'; 
import ThemeSwitcher from "./theme-switcher";

const data = {
    user: {
        name: "Entrepreneur Aziz",
        title: "Entrepreneur | Developer | Designer",
        description: "I am a passionate entrepreneur, developer, and designer with a keen interest in creating innovative solutions that make a difference.",
        website: "https://entrepreneuraziz.com",
        github: "https://github.com/sheikh-abdul-aziz",
        x: "https://x.com/@ShekhAbdulAzeez",
        dribbble: "#",
        behance: "#",
        instagram: "https://www.instagram.com/shaykhabdulazeez/",
        email: "info@entrepreneuraziz.com",
        avatar: "https://github.com/sheikh-abdul-aziz.png",
        avatarFallback: "SA",
        avatarAlt: "Entrepreneur Aziz",
    },
    navigationMenu: [
        { title: "Home", url: "/" },
        { title: "Docs", url: "/docs" },
        { title: "Settings", url: "/settings" },
    ],
    projectsMenu: [
        {
            title: "All Categories",
            id: "id1",
            url: "#",
            icon: IconLayoutGrid,
            isActive: false,
            items: [
                { id: "web-designs", title: "Website Design", url: "#" },
                { id: "ui-ux-designs", title: "UI/UX Design", url: "#" },
                { id: "product-designs", title: "Product Design", url: "#" },
                { id: "web-development", title: "Frontend Development", url: "#" },
            ],
        },
        {
            title: "Reusable Blocks",
            id: "id2",
            url: "#",
            icon: IconShape,
            isActive: false,
            items: [
                { id: "hero", title: "Hero", url: "#" },
                { id: "navigation", title: "Navigation", url: "#" },
                { id: "footer", title: "Footer", url: "#" },
                { id: "testimonial", title: "Testimonial", url: "#" },
                { id: "pricing", title: "Pricing", url: "#" },
                { id: "contact", title: "Contact", url: "#" },
                { id: "faq", title: "FAQ", url: "#" },
                { id: "features", title: "Features", url: "#" },
            ],
        },
    ],
};

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
                            <Button onClick={() => navigateTo(SIGNUP)} variant={"primary"} size={"wide"} radius={"small"}>
                                Signup
                            </Button>
                            <Button onClick={() => navigateTo(LOGIN)} variant={"secondary"} size={"wide"} radius={"small"}>
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
                                    <AvatarImage src={data.user.avatar} alt={data.user.avatarAlt} />
                                    <AvatarFallback>{data.user.avatarFallback}</AvatarFallback>
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
                            <MobileNavigation itemFirst={data.navigationMenu} itemSecond={data.projectsMenu} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}