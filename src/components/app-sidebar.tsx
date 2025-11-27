"use client"

import * as React from "react"
import {
    BookOpen,
    Bot,
    Frame,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { IconRaydientStudio } from "./mipmap/icon-raydientstudio";

// This is sample data.
const data = {
    user: {
        name: "Sheikh Abdul Aziz",
        email: "sheikhabdulaziz@gmail.com",
        avatar: "https://github.com/sheikh-abdul-aziz.png",
    },
    teams: [
        {
            name: "Raydient Studio",
            logo: IconRaydientStudio,
            plan: "Web Design Agency",
        },
        {
            name: "Raydient Studio",
            logo: IconRaydientStudio,
            plan: "Brand Design Agency",
        },
        {
            name: "Raydient Studio",
            logo: IconRaydientStudio,
            plan: "Creative Design Agency",
        },
    ],
    navMain: [
        {
            title: "Playground",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        {
            title: "Models",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Documentation",
            url: "/docs",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "/docs/introduction",
                },
                {
                    title: "Terms and Conditions (T&C)",
                    url: "/docs/terms-and-conditions",
                },
                {
                    title: "Privacy Policy",
                    url: "/docs/privacy-policy",
                },
                {
                    title: "Cookies Policy",
                    url: "/docs/cookie-policy",
                },
                {
                    title: "Refund & Replacement Policy",
                    url: "/docs/refund-and-replacement-policy",
                },
                {
                    title: "Shipping & Delivery Policy",
                    url: "/docs/shipping-and-delivery-policy",
                },
                {
                    title: "Cancellation Policy",
                    url: "/docs/cancellation-policy",
                },
                {
                    title: "Intellectual Property Policy",
                    url: "/docs/intellectual-property-policy",
                },
                {
                    title: "Partnership Policy",
                    url: "/docs/partnership-policy",
                },
                {
                    title: "Warranty & Guarantee Policy",
                    url: "/docs/warranty-and-guarantee-policy",
                },
                {
                    title: "End User License Agreement (EULA)",
                    url: "/docs/end-user-license-agreement",
                },
                {
                    title: "Non-Disclosure Agreement (NDA)",
                    url: "/docs/non-disclosure-agreement",
                },
                {
                    title: "Service Level Agreement (SLA)",
                    url: "/docs/service-level-agreement",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}