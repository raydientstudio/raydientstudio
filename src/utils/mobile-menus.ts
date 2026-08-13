import { IconLayoutGrid, IconShape } from "@tabler/icons-react";

const menus = {
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

export default menus;