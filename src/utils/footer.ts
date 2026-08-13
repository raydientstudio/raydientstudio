import {
    IconBrandBehance,
    IconBrandDribbble,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandThreads,
    IconBrandX,
    IconMail,
} from "@tabler/icons-react";

const footerLinks = () => [
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
];

const quickLinks = () => [
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
];

const socialLinks = () => [
    { href: "https://www.instagram.com/rivelestudio", icon: IconBrandInstagram, label: "instagram" },
    { href: "https://www.threads.net/@rivelestudio", icon: IconBrandThreads, label: "threads" },
    { href: "https://x.com/rivelestudio", icon: IconBrandX, label: "x" },
    { href: "https://www.linkedin.com/company/rivelestudio", icon: IconBrandLinkedin, label: "linkedin" },
    { href: "https://www.facebook.com/rivelestudio", icon: IconBrandFacebook, label: "facebook" },
    { href: "https://dribbble.com/rivelestudio", icon: IconBrandDribbble, label: "dribbble" },
    { href: "https://www.behance.net/rivelestudio", icon: IconBrandBehance, label: "behance" },
    { href: "mailto:hello@rivele.studio", icon: IconMail, label: "email" }
];

export { footerLinks, quickLinks, socialLinks };