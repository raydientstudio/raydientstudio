"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import ThemeSwitcher from "./theme-switcher";
import { useMobileMenu } from "./mobile-menu";
import { IconRiveleStudio } from "../icons";
import { cn } from "@/lib/utils";
import Button from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import Search from "@/sections/root/search";
import Notifications from "@/sections/root/notifications";

const VDivider = ({ className = "" }: { className?: string }) => (
    <Separator
        orientation="vertical"
        className={`data-[orientation=vertical]:h-4 ${className}`}
    />
);

/* -------------------------------------------------------------------------- */
/* Mobile Navigation                                                          */
/* -------------------------------------------------------------------------- */

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blogs", href: "/blogs" },
    { label: "Registry", href: "/registry" },
];

/* -------------------------------------------------------------------------- */
/* Products                                                                   */
/* -------------------------------------------------------------------------- */

const products = [
    {
        title: "Agent Stack",
        items: [
            {
                name: "AI SDK",
                href: "/ai-sdk",
            },
            {
                name: "AI Gateway",
                href: "/ai-gateway",
            },
            {
                name: "Sandbox",
                href: "/sandbox",
            },
            {
                name: "Passport",
                href: "/passport",
            },
            {
                name: "Connect",
                href: "/connect",
            },
            {
                name: "eve",
                href: "/eve",
            },
        ],
    },

    {
        title: "Core Platform",
        items: [
            {
                name: "Security",
                href: "/security",
            },
            {
                name: "Content Delivery",
                href: "/content-delivery",
            },
            {
                name: "Fluid Compute",
                href: "/fluid-compute",
            },
            {
                name: "Observability",
                href: "/observability",
            },
            {
                name: "Workflows",
                href: "/workflows",
            },
            {
                name: "CI/CD",
                href: "/ci-cd",
            },
        ],
    },

    {
        title: "Tools",
        items: [
            {
                name: "Next.js",
                href: "/nextjs",
            },
            {
                name: "Vercel Agent",
                href: "/vercel-agent",
            },
            {
                name: "Vercel Plugin",
                href: "/vercel-plugin",
            },
            {
                name: "Domains",
                href: "/domains",
                external: true,
            },
            {
                name: "v0",
                href: "/v0",
                external: true,
            },
        ],
    },
];

/* -------------------------------------------------------------------------- */
/* Resources                                                                  */
/* -------------------------------------------------------------------------- */

const resources = [
    {
        name: "Documentation",
        href: "/docs",
    },
    {
        name: "Guides",
        href: "/guides",
    },
    {
        name: "Help",
        href: "/help",
    },
    {
        name: "Blog",
        href: "/blog",
    },
];

/* -------------------------------------------------------------------------- */
/* Chevron                                                                    */
/* -------------------------------------------------------------------------- */

const Chevron = ({ open }: { open: boolean }) => {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={cn(
                "transition-transform duration-200",
                open && "rotate-180"
            )}
        >
            <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

/* -------------------------------------------------------------------------- */
/* Header                                                                     */
/* -------------------------------------------------------------------------- */

const Header = () => {
    const router = useRouter();

    const {
        isMenuOpen,
        setMenuOpen,
    } = useMobileMenu();

    const [desktopMenu, setDesktopMenu] = useState<"products" | "resources" | null>(null);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const navigateTo = (path: string) => {
        setMenuOpen(false);
        setDesktopMenu(null);
        router.push(path);
    };

    const goHome = useCallback(() => {
        router.push("/");
    }, [router]);

    return (
        <header className="sticky top-0 left-0 right-0 z-50 flex w-full flex-col bg-background/80 backdrop-blur-sm font-sans">
            {/* ================================================================== */}
            {/* HEADER ROW                                                        */}
            {/* ================================================================== */}

            <div className="relative flex h-16 w-full max-w-480 items-center justify-between border-b border-border px-6 md:px-10">
                {/* ============================================================== */}
                {/* LEFT SIDE                                                      */}
                {/* ============================================================== */}

                <div className="flex h-fit w-fit items-center gap-x-2 lg:gap-x-6">
                    {/* Mobile logo */}
                    <IconRiveleStudio size={24} className="lg:hidden" onClick={goHome}/>

                    {/* Desktop logo */}
                    <IconRiveleStudio size={24} className="hidden lg:flex" onClick={goHome}/>

                    <VDivider className="hidden lg:flex" />

                    {/* ========================================================== */}
                    {/* DESKTOP NAVIGATION                                         */}
                    {/* ========================================================== */}

                    <nav className="hidden h-16 items-center gap-x-6 lg:flex font-normal">
                        {/* ====================================================== */}
                        {/* PRODUCTS                                               */}
                        {/* ====================================================== */}

                        <div className="relative flex h-16 items-center" onMouseEnter={() => setDesktopMenu("products")}>
                            <button type="button" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Products
                                <Chevron open={desktopMenu === "products"} />
                            </button>

                            {/* -------------------------------------------------- */}
                            {/* PRODUCTS MEGA MENU                                 */}
                            {/* -------------------------------------------------- */}

                            {desktopMenu === "products" && (
                                <div className="fixed left-0 top-16 z-40 hidden w-screen lg:block" onMouseEnter={() => setDesktopMenu("products")} onMouseLeave={() => setDesktopMenu(null)}>
                                    {/* Full-width dropdown background */}
                                    <div className="w-full border-b border-border bg-background">
                                        {/* Same alignment as header */}
                                        <div className="mx-auto w-full max-w-480 px-6 py-8 md:px-10">
                                            <div className="grid grid-cols-3 gap-16">
                                                {products.map((column) => (
                                                    <div key={column.title}>
                                                        <p className="mb-3 text-sm text-muted-foreground">
                                                            {column.title}
                                                        </p>
                                                        <div className="flex flex-col">
                                                            {column.items.map(
                                                                (item) => (
                                                                    <Link key={item.name} href={item.href} onClick={() => setDesktopMenu(null)} className="flex w-fit items-center py-0.5 text-2xl leading-relaxed tracking-tight text-muted-foreground hover:text-foreground transition-colors">
                                                                        {item.name}
                                                                        {item.external && (<span className="ml-1 text-lg">↗</span>)}
                                                                    </Link>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ====================================================== */}
                        {/* RESOURCES                                               */}
                        {/* ====================================================== */}

                        <div className="relative flex h-16 items-center" onMouseEnter={() => setDesktopMenu("resources")}>
                            <button type="button" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Resources
                                <Chevron open={desktopMenu === "resources" } />
                            </button>

                            {/* -------------------------------------------------- */}
                            {/* RESOURCES MENU                                     */}
                            {/* -------------------------------------------------- */}

                            {desktopMenu === "resources" && (
                                <div className="fixed left-0 top-16 z-40 hidden w-screen lg:block" onMouseEnter={() => setDesktopMenu("resources")} onMouseLeave={() => setDesktopMenu(null)}>
                                    <div className="w-full border-b border-border bg-background">
                                        <div className="mx-auto w-full max-w-480 px-6 py-8 md:px-10">
                                            <div className="grid grid-cols-4 gap-8">
                                                {resources.map(
                                                    (item) => (
                                                        <Link key={item.name} href={item.href} onClick={() => setDesktopMenu(null)}>
                                                            <span className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                                                                {item.name}
                                                            </span>
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ====================================================== */}
                        {/* ENTERPRISE                                             */}
                        {/* ====================================================== */}

                        <Link href="/enterprise" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onMouseEnter={() => setDesktopMenu(null)}>
                            Enterprise
                        </Link>

                        {/* ====================================================== */}
                        {/* PRICING                                                */}
                        {/* ====================================================== */}

                        <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onMouseEnter={() => setDesktopMenu(null)}>
                            Pricing
                        </Link>
                    </nav>
                </div>

                {/* ============================================================== */}
                {/* RIGHT SIDE                                                      */}
                {/* ============================================================== */}

                <div className="flex h-fit w-fit items-center gap-x-2.5">
                    {/* ========================================================== */}
                    {/* DESKTOP CONTROLS                                          */}
                    {/* ========================================================== */}

                    <div className="hidden flex-row items-center gap-x-3.5 lg:flex">
                        <Search />
                        <Notifications />
                        <ThemeToggle />
                        <VDivider />
                        <Button variant="outline" size="small" radius="medium" onClick={() => navigateTo("/login")} onMouseEnter={() => setDesktopMenu(null)}>
                            Login
                        </Button>
                        <Button variant="default" size="small" radius="medium" onClick={() => navigateTo("/signup")} onMouseEnter={() => setDesktopMenu(null)}>
                            Signup
                        </Button>
                        <VDivider />
                        <Avatar className="h-8 w-8 rounded-full border border-border">
                            <AvatarImage src="https://github.com/itsazizdotme.png" alt="alt" />
                            <AvatarFallback>
                                SA
                            </AvatarFallback>
                        </Avatar>
                    </div>

                    {/* ========================================================== */}
                    {/* MOBILE MENU BUTTON                                         */}
                    {/* ========================================================== */}

                    <div className="flex flex-row items-center gap-x-2 lg:hidden text-muted-foreground">
                        <Search />
                        <Notifications />
                        <Button variant="outline" size="medium" onClick={toggleMenu} aria-label="menu" asIcon aria-expanded={isMenuOpen} className={`menu-btn ${isMenuOpen ? "isOpen" : ""}`}>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <line className="line line-top" x1="4" y1="12" x2="20" y2="12" />
                                <line className="line line-bottom" x1="4" y1="12" x2="20" y2="12" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>

            {/* ================================================================== */}
            {/* MOBILE DRAWER                                                     */}
            {/* ================================================================== */}

            <div className={cn("relative inset-x-0 bottom-0 top-0 z-20 flex h-fit w-full flex-col gap-y-6 border-b border-border px-6 py-6 font-sans text-foreground transition-all duration-150 ease-in-out lg:hidden", isMenuOpen ? "flex" : "hidden")}>
                {/* CTA Content */}
                <div className="flex shrink-0 flex-col items-center justify-between gap-y-4">
                    <Button onClick={() => navigateTo("/signup")} variant="default" size="large" asWide radius="medium">
                        Signup
                    </Button>
                    <Button onClick={() => navigateTo("/login")} variant="outline" size="large" asWide radius="medium">
                        Login
                    </Button>
                </div>

                {/* Theme */}
                <div className="ml-auto h-fit w-fit">
                    <ThemeSwitcher />
                </div>

                {/* Navigation */}
                <nav className="flex grow flex-col gap-x-2 gap-y-2 overflow-y-auto">
                    {navLinks.map(
                        ({ label, href }, i) => (
                            <Link key={label} href={href} className={cn("flex items-center justify-between py-2 font-mono text-sm tracking-tighter text-muted-foreground transition-colors duration-200 hover:text-foreground active:text-foreground", i < navLinks.length - 1 && "border-b border-border")}>
                                {label}
                                <span>›</span>
                            </Link>
                        )
                    )}
                </nav>

                {/* Bottom Content */}
                <div className="mt-auto flex shrink-0 flex-row items-center justify-between gap-x-2 gap-y-2">
                    <span className="flex flex-row items-center justify-center gap-2 font-mono text-xs font-medium uppercase text-foreground">
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                        <span className="translate-y-px items-baseline md:translate-y-0">
                            All Systems Normal.
                        </span>
                    </span>

                    <span className="font-mono text-xs font-normal leading-none text-muted-foreground">
                        hello@rivele.studio
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
