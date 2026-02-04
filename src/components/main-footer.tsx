"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
    IconBrandBehance,
    IconBrandDribbble,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandMedium,
    IconBrandThreads,
    IconBrandX,
    IconCornerDownRight,
    IconMail,
    IconSquareFilled,
    IconUser
} from "@tabler/icons-react";
import { JetBrains_Mono } from "@/fonts/local";
import { Input } from "./ui/input";
import IconLettertype from "./mipmap/icon-lettertype";

export default function MainFooter() {

    const footerLinks = useMemo(() => [
        {
            title: "Solutions",
            links: [
                { name: "Professional", href: "/", external: false, icon: null },
                { name: "Educational", href: "/", external: false, icon: null },
                { name: "Nonprofit", href: "/", external: false, icon: null },
                { name: "Philosophies", href: "/", external: false, icon: null },
                { name: "Prototype", href: "/", external: false, icon: null },
                { name: "Typography", href: "/", external: false, icon: null },
                { name: "Wireframing", href: "/", external: false, icon: null }
            ],
        },
        {
            title: "Company",
            links: [
                { name: "Architecture", href: "/architecture", external: false, icon: null },
                { name: "Studio", href: "/docs/studio", external: false, icon: null },
                { name: "Foundation", href: "/docs/foundation", external: false, icon: null },
                { name: "Brands", href: "/docs/brand-assets", external: false, icon: null },
                { name: "Partnership", href: "/docs/partnership-policy", external: false, icon: null },
                { name: "Portfolio", href: "/portfolio", external: false, icon: null },
                { name: "Testimonials", href: "/", external: false, icon: null },
            ],
        },
        {
            title: "Community",
            links: [
                { name: "Community", href: "https://medium.com/@raydientstudio", external: true, icon: null },
                { name: "Events", href: "/events", external: false, icon: null },
                { name: "Updates", href: "https://x.com/raydientstudio", external: true, icon: null },
                { name: "FAQ's", href: "/", external: false, icon: null },
                { name: "Advisory", href: "/docs/support", external: false, icon: null },
                { name: "Careers", href: "/docs/careers", external: false, icon: null },
                { name: "Get in touch", href: "/docs/contact-us", external: false, icon: null }
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "References", href: "/docs/references", external: false, icon: null },
                { name: "Docs", href: "/docs", external: false, icon: null },
                { name: "Guides", href: "/docs/guide", external: false, icon: null },
                { name: "Help", href: "/docs/help", external: false, icon: null },
                { name: "Licensing", href: "/docs/end-user-license-agreement", external: false, icon: null },
                { name: "Blog", href: "https://medium.com/@raydientstudio", external: true, icon: null },
                { name: "Case Studies", href: "/docs/case-studies", external: false, icon: null }
            ],
        },
    ], []);

    const quickLinks = useMemo(() => [
        {
            title: "Quick Links",
            links: [
                { name: "Privacy & Security", href: "/docs/privacy-and-policy", external: false },
                { name: "Terms & Conditions", href: "/docs/terms-and-conditions", external: false },
                { name: "Attributions", href: "/docs/attributions", external: false },
                { name: "Legal", href: "/docs/legal", external: false },
                { name: "Opt-Out", href: "/docs/opt-out", external: false },
            ]
        }
    ], []);

    const socialLinks = useMemo(() => [
        { href: "https://www.instagram.com/raydientstudio", icon: <IconBrandInstagram />, label: "instagram" },
        { href: "https://www.threads.net/@raydientstudio", icon: <IconBrandThreads />, label: "threads" },
        { href: "https://x.com/raydientstudio", icon: <IconBrandX />, label: "x" },
        { href: "https://www.linkedin.com/company/raydientstudio", icon: <IconBrandLinkedin />, label: "linkedin" },
        { href: "https://medium.com/@raydientstudio", icon: <IconBrandMedium />, label: "medium" },
        { href: "https://dribbble.com/raydientstudio", icon: <IconBrandDribbble />, label: "dribbble" },
        { href: "https://www.behance.net/raydientstudio", icon: <IconBrandBehance />, label: "behance" },
        { href: "mailto:hello@raydientstudio.com", icon: <IconMail />, label: "email" }
    ], []);

    return (
        <footer className="bg-surface bottom-0 left-0 right-0 py-5 rounded-t-lg border-t border-border border-solid">
            <div className="px-5">
                <div className="flex flex-col gap-y-4 max-w-7xl mx-auto">

                    {/* Banner Section */}
                    <div className="flex flex-col items-center justify-center text-center bg-foreground text-primary-foreground p-8 gap-y-1.5 rounded-lg">
                        <IconLettertype width={197.63} height={18} />
                    </div>

                    {/* Footer Links Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {footerLinks.map((section) => (
                            <div key={section.title} className="border border-border border-solid px-4 py-4 rounded-lg">
                                <div className="flex flex-row items-center justify-start gap-x-1 mb-2">
                                    <IconSquareFilled size={14} className="text-foreground" />
                                    <h3 className={`${JetBrains_Mono.className} antialiased translate-y-px md:translate-y-0 text-base tracking-tight leading-none font-bold uppercase text-foreground`}>
                                        {section.title}
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-sm normal">
                                    {section.links.map(({ name, href, external, icon }) => (
                                        <li key={name}>
                                            {external ? (
                                                <Link href={href} className="antialiased flex items-center justify-start text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
                                                    {name} {icon}
                                                </Link>
                                            ) : (
                                                <Link href={href} className="antialiased flex items-center justify-start text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
                                                    {name} {icon}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div className="hidden border border-border border-solid px-4 py-4 rounded-lg space-y-4 w-full">
                        <div className="flex flex-col items-start justify-start space-y-4">
                            <div className="flex flex-row items-center justify-start gap-x-1 mb-2 w-full">
                                <IconSquareFilled size={14} className="text-foreground" />
                                <h3 className={`${JetBrains_Mono.className} antialiased translate-y-px md:translate-y-0 text-base tracking-tight leading-none font-bold uppercase text-foreground`}>
                                    Newsletter
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Sign up to be the first to know about our exclusive
                                offers and upcoming events at
                                {" "}
                                <Link href="https://raydientstudio.com" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
                                    Raydient Studio
                                </Link>
                                .
                            </p>
                        </div>
                        <form className="flex flex-col space-y-4 w-full">
                            <Input type="text" startIcon={IconUser} placeholder="Enter your name" />
                            <Input type="email" startIcon={IconMail} placeholder="Enter your email address" />
                            <Button variant="filled" radius={"medium"}>
                                <IconCornerDownRight />
                                Join the newsletter
                            </Button>
                        </form>
                    </div>

                    {/* Social Media & Quick Links */}
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 text-sm border border-border border-solid p-4 rounded-lg">
                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {socialLinks.map(({ href, icon, label }) => (
                                    <Link key={href} href={href}>
                                        <Button aria-label={label} variant="outlined" size="social" radius={"medium"}>
                                            {icon}
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-end text-xs sm:text-sm gap-2">
                                {quickLinks[0].links.map(({ name, href, external }) => (
                                    <p key={name}>
                                        {external ? (
                                            <Link href={href} className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
                                                {name}
                                            </Link>
                                        ) : (
                                            <Link href={href} className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
                                                {name}
                                            </Link>
                                        )}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Copyright & Attributions */}
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-xs sm:text-sm gap-2 border border-border border-solid p-4 rounded-lg">
                            <p className="text-muted-foreground text-center md:text-left">
                                Copyright © 2026
                                {" "}
                                <Link href="https://raydientstudio.com" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
                                    Raydient Studio
                                </Link>
                                {" "}
                                | All rights reserved.
                            </p>
                            <p className="text-muted-foreground text-center md:text-right">
                                Developed with
                                {" "}
                                <Link href="https://nextjs.org" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
                                    NextJS
                                </Link>
                                {" "}
                                | Powered by
                                {" "}
                                <Link href="https://vercel.com" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
                                    Vercel
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}