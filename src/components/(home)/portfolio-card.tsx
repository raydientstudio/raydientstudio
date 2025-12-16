"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Host_Grotesk } from "@/fonts/local";
import { type TablerIcon } from "@tabler/icons-react";

interface PortfolioCardProps {
    title: string
    description: string
    category: {
        label: string
        icon?: TablerIcon
    }
    type: {
        label: string
        icon?: TablerIcon
    }
    thumbnailUrl?: string
    brandUrl?: string
    caseStudyUrl?: string
}

export function PortfolioCard({
    title,
    description,
    category,
    type,
    thumbnailUrl,
    brandUrl,
    caseStudyUrl
}: PortfolioCardProps) {
    return (
        <Card className="group overflow-hidden bg-card border-border transition-all duration-300 px-4 py-4 hover:-translate-y-1">
            {thumbnailUrl && (
                <div className="relative aspect-[16/9] overflow-hidden bg-muted rounded-lg border border-border">
                    <Image src={thumbnailUrl} alt={`${title}`} fill className="hidden object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg border border-border" />
                </div>
            )}
            <CardContent className="gap-3 p-0 mt-4">
                <div className="flex items-end gap-2 w-full">
                    {brandUrl && (
                        <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 relative">
                            <Image src={brandUrl} alt={`${title}`} fill className="object-contain rounded-sm border border-border" />
                        </div>
                    )}
                    <div className="flex flex-row items-end w-full">
                        <div className="flex flex-row items-end gap-2">
                            <Badge color={"blue"} type={"semi"} className={`${Host_Grotesk.className}`}>
                                {category.icon && <category.icon />}
                                {category.label}
                            </Badge>
                            <Badge type={"outline"} className={`${Host_Grotesk.className}`}>
                                {type.icon && <type.icon />}
                                {type.label}
                            </Badge>
                        </div>
                        <span className="bg-background gap-4 shadow-none rounded-sm transition-transform group-hover:rotate-45 group-active:rotate-45 ml-auto" onClick={() => window.open(caseStudyUrl, "_blank")}>
                            <ArrowRight size={18} />
                        </span>
                    </div>
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <Button variant={"outlined"} size={"wide"} onClick={() => window.open(caseStudyUrl, "_blank")}>
                    View Details
                </Button>
            </CardContent>
        </Card>
    )
}