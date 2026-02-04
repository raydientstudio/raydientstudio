"use client";

import Link from "next/link";
import { useState } from "react";
import { IconChevronRight, type TablerIcon } from "@tabler/icons-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    MobileMenuGroup,
    MobileMenuGroupLabel,
    MobileMenu,
    MobileMenuButton,
    MobileMenuItem,
    MobileMenuSub,
    MobileMenuSubButton,
    MobileMenuProvider,
} from "@/components/ui/mobile-menu";
import { Separator } from "./ui/separator";

export function MobileNavigation({
    itemFirst,
    itemSecond,
}: {
    itemFirst: {
        title: string;
        url: string;
    }[];
    itemSecond: {
        title: string;
        url: string;
        icon?: TablerIcon;
        isActive?: boolean;
        items?: {
            title: string;
            id: string;
            url: string;
        }[];
    }[];
}) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMenuToggle = (title: string) => {
        setActiveMenu((prev) => (prev === title ? null : title));
    };

    return (
        <MobileMenuProvider>
            <MobileMenuGroup>
                {/* General Section */}
                <MobileMenuGroupLabel>General</MobileMenuGroupLabel>
                <MobileMenu className="group-data-[collapsible=icon]:hidden">
                    {itemFirst.map((item) => (
                        <MobileMenuItem key={item.title}>
                            <MobileMenuButton asChild>
                                <Link href={item.url}>
                                    <span className="text-sm font-normal text-foreground/80 leading-none">{item.title}</span>
                                </Link>
                            </MobileMenuButton>
                        </MobileMenuItem>
                    ))}
                </MobileMenu>

                <Separator orientation="horizontal" className="my-3" />

                {/* Resources Section */}
                <MobileMenuGroupLabel>Resources</MobileMenuGroupLabel>
                <MobileMenu>
                    {itemSecond.map((item) => (
                        <Collapsible key={item.title} asChild open={activeMenu === item.title} className="group/collapsible">
                            <MobileMenuItem>
                                <CollapsibleTrigger asChild>
                                    <MobileMenuButton tooltip={item.title} onClick={() => handleMenuToggle(item.title)}>
                                        {item.icon && <item.icon />}
                                        <span className="text-sm font-normal text-foreground leading-none">{item.title}</span>
                                        <IconChevronRight
                                            className={`ml-auto transition-transform duration-200 ${
                                                activeMenu === item.title
                                                    ? "rotate-90"
                                                    : ""
                                            }`}
                                        />
                                    </MobileMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <MobileMenuSub>
                                        {item.items?.map((subItem) => (
                                            <MobileMenuSubButton asChild key={subItem.id}>
                                                <Link href={subItem.url}>
                                                    <span className="text-sm font-normal text-foreground/80 leading-none">{subItem.title}</span>
                                                </Link>
                                            </MobileMenuSubButton>
                                        ))}
                                    </MobileMenuSub>
                                </CollapsibleContent>
                            </MobileMenuItem>
                        </Collapsible>
                    ))}
                </MobileMenu>
            </MobileMenuGroup>
        </MobileMenuProvider>
    );
}