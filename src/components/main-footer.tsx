"use client";

import Link from "next/link";
import { useMemo } from "react";
import Button from "./ui/button";
import { Input } from "./ui/input";
import {
    IconBrandBehance,
    IconBrandDribbble,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandThreads,
    IconBrandX,
    IconCornerDownRight,
    IconMail,
} from "@tabler/icons-react";
import IconLettertype from "../icons/icon-lettertype";

const MainFooter = () => {

    const footerLinks = useMemo(() => [
        {
            title: "Products",
            links: [
                { name: "Design Systems", href: "/", external: false, icon: null },
                { name: "Layout Kits", href: "/", external: false, icon: null },
                { name: "Philosophies", href: "/", external: false, icon: null },
                { name: "Prototypes", href: "/", external: false, icon: null },
                { name: "Typography", href: "/", external: false, icon: null },
                { name: "Wireframing", href: "/", external: false, icon: null },
                { name: "Educational Kits", href: "/", external: false, icon: null }
            ],
        },
        {
            title: "Enterprise",
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
                { name: "Publications", href: "https://medium.com/@rivelestudio", external: true, icon: null },
                { name: "Events", href: "/events", external: false, icon: null },
                { name: "Updates", href: "https://x.com/rivelestudio", external: true, icon: null },
                { name: "FAQ's", href: "/", external: false, icon: null },
                { name: "Advisory", href: "/docs/support", external: false, icon: null },
                { name: "Careers", href: "/docs/careers", external: false, icon: null },
                { name: "Reach out", href: "/docs/contact-us", external: false, icon: null }
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
                { name: "Blog", href: "https://medium.com/@rivelestudio", external: true, icon: null },
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
        { href: "https://www.instagram.com/rivelestudio", icon: <IconBrandInstagram />, label: "instagram" },
        { href: "https://www.facebook.com/rivelestudio", icon: <IconBrandFacebook />, label: "facebook" },
        { href: "https://www.threads.net/@rivelestudio", icon: <IconBrandThreads />, label: "threads" },
        { href: "https://www.x.com/rivelestudio", icon: <IconBrandX />, label: "x" },
        { href: "https://www.linkedin.com/company/rivelestudio", icon: <IconBrandLinkedin />, label: "linkedin" },
        { href: "https://www.dribbble.com/rivelestudio", icon: <IconBrandDribbble />, label: "dribbble" },
        { href: "https://www.behance.net/rivelestudio", icon: <IconBrandBehance />, label: "behance" },
        { href: "mailto:hello@rivele.studio", icon: <IconMail />, label: "email" }
    ], []);

    return (
        <footer className="font-sans bg-surface bottom-0 left-0 right-0 py-5 rounded-t-lg border-t border-border border-solid">
            <div className="px-5">
                <div className="flex flex-col gap-y-4 max-w-7xl mx-auto">

                    {/* Banner Section */}
                    <div className="flex flex-col items-center justify-center text-center bg-foreground text-primary-foreground p-8 gap-y-1.5 rounded-md">
                        <IconLettertype width={197.63} height={18} />
                    </div>

                    {/* Footer Links Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {footerLinks.map((section) => (
                            <div key={section.title} className="border border-border border-solid px-4 py-4 rounded-md">
                                <div className="flex flex-row items-center justify-start gap-x-1 mb-3">
                                    <span className="hidden w-2.5 h-2.5 rounded-xs bg-primary" />
                                    <h3 className="font-mono text-sm tracking-tight leading-none font-semibold uppercase text-foreground">
                                        {section.title}
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-sm">
                                    {section.links.map(({ name, href, external, icon }) => (
                                        <li key={name}>
                                            {external ? (
                                                <Link href={href} target="_blank" rel="noopener noreferrer" className="antialiased flex items-center justify-start text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
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

                    {/* Subscription */}
                    <div className="flex-row border border-border border-solid px-4 py-4 rounded-md space-y-4 w-full">
                        <form className="flex flex-row space-x-4 w-full">
                            <Input type="email" startIcon={IconMail} placeholder="you@domain.com" />
                            <Button type="submit" variant="default" radius={"small"}>
                                <IconCornerDownRight />
                                Subscribe
                            </Button>
                        </form>
                    </div>

                    {/* Social Media & Quick Links */}
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 text-sm border border-border border-solid p-4 rounded-md">
                            <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                                {socialLinks.map(({ href, icon, label }) => (
                                    <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
                                        <Button aria-label={label} asIcon variant="outline" size="medium">
                                            {icon}
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-end text-xs sm:text-sm gap-2">
                                {quickLinks[0].links.map(({ name, href, external }) => (
                                    <p key={name}>
                                        {external ? (
                                            <Link href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
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
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-xs sm:text-sm gap-2 border border-border border-solid p-4 rounded-md">
                            <p className="text-muted-foreground text-center md:text-left">
                                © 2026
                                {" "}
                                <Link href="/" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
                                    Rivele Studio
                                </Link>
                                {" "}
                                | All rights reserved.
                            </p>
                            <p className="text-muted-foreground text-center md:text-right">
                                Developed with
                                {" "}
                                <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
                                    NextJS
                                </Link>
                                {" "}
                                | Powered by
                                {" "}
                                <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out">
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

export default MainFooter;