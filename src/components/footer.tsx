"use client";

import Link from "next/link";
import { useMemo } from "react";
import Button from "./ui/button";
import { Input } from "./ui/input";
import {
    IconArrowDownRight,
    IconBehance,
    IconDribbble,
    IconEmail,
    IconFacebook,
    IconGithub,
    IconInstagram,
    IconLettertype,
    IconLinkedin,
    IconMail,
    IconX,
} from "../icons";

const linkClass = "text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-250 ease-in-out";

type FooterLinkItem = { name: string; href: string; external?: boolean };

const FooterLink = ({ name, href, external, className = "" }: FooterLinkItem & { className?: string }) => (
    <Link href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })} className={`${linkClass} ${className}`}>
        {name}
    </Link>
);

const footerLinksData: { title: string; links: FooterLinkItem[] }[] = [
    {
        title: "Products",
        links: [
            { name: "Design Systems", href: "/" },
            { name: "Layout Kits", href: "/" },
            { name: "Philosophies", href: "/" },
            { name: "Prototypes", href: "/" },
            { name: "Typography", href: "/" },
            { name: "Wireframing", href: "/" },
            { name: "Educational Kits", href: "/" },
        ],
    },
    {
        title: "Enterprise",
        links: [
            { name: "Architecture", href: "/architecture" },
            { name: "Studio", href: "/docs/studio" },
            { name: "Foundation", href: "/docs/foundation" },
            { name: "Brands", href: "/docs/brand-assets" },
            { name: "Partnership", href: "/docs/partnership-policy" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Testimonials", href: "/" },
        ],
    },
    {
        title: "Community",
        links: [
            { name: "Publications", href: "https://medium.com/@rivelestudio", external: true },
            { name: "Events", href: "/events" },
            { name: "Updates", href: "https://x.com/rivelestudio", external: true },
            { name: "FAQ's", href: "/" },
            { name: "Advisory", href: "/docs/support" },
            { name: "Careers", href: "/docs/careers" },
            { name: "Reach out", href: "/docs/contact-us" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "References", href: "/docs/references" },
            { name: "Docs", href: "/docs" },
            { name: "Guides", href: "/docs/guide" },
            { name: "Help", href: "/docs/help" },
            { name: "Licensing", href: "/docs/end-user-license-agreement" },
            { name: "Blog", href: "https://medium.com/@rivelestudio", external: true },
            { name: "Case Studies", href: "/docs/case-studies" },
        ],
    },
];

const quickLinksData: FooterLinkItem[] = [
    { name: "Privacy & Security", href: "/docs/privacy-and-policy" },
    { name: "Terms & Conditions", href: "/docs/terms-and-conditions" },
    { name: "Attributions", href: "/docs/attributions" },
    { name: "Legal", href: "/docs/legal" },
    { name: "Opt-Out", href: "/docs/opt-out" },
];

const socialLinksData = [
    { href: "https://www.instagram.com/rivelestudio", icon: <IconInstagram />, label: "instagram" },
    { href: "https://www.facebook.com/rivelestudio", icon: <IconFacebook />, label: "facebook" },
    { href: "https://x.com/rivelestudio", icon: <IconX />, label: "x" },
    { href: "https://www.linkedin.com/company/rivelestudio", icon: <IconLinkedin />, label: "linkedin" },
    { href: "https://www.github.com/rivelestudio", icon: <IconGithub />, label: "github" },
    { href: "https://dribbble.com/rivelestudio", icon: <IconDribbble />, label: "dribbble" },
    { href: "https://www.behance.net/rivelestudio", icon: <IconBehance />, label: "behance" },
    { href: "mailto:hello@rivele.studio", icon: <IconMail />, label: "email" },
];

const Footer = () => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);
    const footerLinks = useMemo(() => footerLinksData, []);
    const quickLinks = useMemo(() => quickLinksData, []);
    const socialLinks = useMemo(() => socialLinksData, []);

    return (
        <footer className="font-sans bg-surface bottom-0 left-0 right-0 w-full py-5 rounded-t-lg border-t border-border border-solid">
            <div className="flex flex-col w-full h-full px-6 md:px-10 gap-y-0 max-w-8xl mx-auto">
                {/* Banner Section */}
                <div className="flex flex-col items-center justify-center text-center bg-foreground text-primary-foreground p-8 gap-y-1.5 rounded-t-md">
                    <IconLettertype width={197.63} height={18} />
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 border border-border">
                    {footerLinks.map((section) => (
                        <div key={section.title} className="not-last:border-r not-last:border-b md:not-last:border-r border-border border-solid px-4 py-4 rounded-none">
                            <div className="flex flex-row items-center justify-start gap-x-1 mb-3">
                                <span className="hidden w-2.5 h-2.5 rounded-xs bg-primary" />
                                <p className="font-mono text-sm tracking-tight leading-none font-semibold uppercase text-foreground">
                                    {section.title}
                                </p>
                            </div>
                            <ul className="space-y-2 text-sm">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <FooterLink {...link} className="antialiased flex items-center justify-start" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Subscription */}
                <div className="flex-row border border-border border-solid px-4 py-4 rounded-none space-y-4 w-full">
                    <form className="flex flex-row space-x-4 w-full">
                        <Input type="email" leadingIcon={<IconEmail />} placeholder="you@domain.com" />
                        <Button type="submit" variant="default" size="medium">
                            <IconArrowDownRight />
                            Subscribe
                        </Button>
                    </form>
                </div>

                {/* Social Media & Quick Links */}
                <div className="flex flex-col gap-y-0">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 text-sm border border-border border-solid p-4 rounded-none">
                        <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                            {socialLinks.map(({ href, icon, label }) => (
                                <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
                                    <Button aria-label={label} asIcon variant="outline" size="medium">
                                        {icon}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end text-sm gap-2">
                            {quickLinks.map((link) => (
                                <p key={link.name}>
                                    <FooterLink {...link} />
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Copyright & Attributions */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-sm gap-2 border border-border border-solid p-4 rounded-b-md">
                        <p className="text-muted-foreground text-center md:text-left">
                            © {currentYear} <Link href="/" className={linkClass}>Rivele Studio</Link> | All rights reserved.
                        </p>
                        <p className="text-muted-foreground text-center md:text-right">
                            Developed with{" "}
                            <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className={linkClass}>
                                NextJS
                            </Link>{" "}
                            | Powered by{" "}
                            <Link href="https://vercel.com/home" target="_blank" rel="noopener noreferrer" className={linkClass}>
                                Vercel
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;