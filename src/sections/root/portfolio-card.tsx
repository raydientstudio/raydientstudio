"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { type TablerIcon } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

type PortfolioCardProps = {
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

export const PortfolioCard = ({
    title,
    description,
    category,
    type,
    thumbnailUrl,
    brandUrl,
    caseStudyUrl
}: PortfolioCardProps) => {
    return (
        <Card className="group overflow-hidden bg-card border-border transition-all duration-300 px-4 py-4 hover:-translate-y-1">
            {thumbnailUrl && (
                <div className="relative aspect-[16/9] overflow-hidden bg-muted rounded-md border border-border">
                    <Image src={`${thumbnailUrl}`} alt={`${title}`} fill className="hidden object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg border border-border" />
                </div>
            )}
            <CardContent className="gap-y-4 p-0 mt-4">
                <div className="flex flex-row items-start gap-6 w-full">
                    {brandUrl && (
                        <div className="flex-shrink-0 w-6 h-6 md:w-12 md:h-12 relative">
                            <Avatar className="object-contain rounded-sm border border-border">
                                <AvatarImage src={brandUrl} alt={title} />
                                <AvatarFallback className="rounded-sm">DP</AvatarFallback>
                            </Avatar>
                        </div>
                    )}
                    <div className="flex flex-row items-end w-full">
                        <div className="flex flex-row items-end gap-2">
                            <Badge color={"blue"} type={"semi"} radius={"full"}>
                                {category.icon && <category.icon />}
                                {category.label}
                            </Badge>
                            <Badge type={"outline"} radius={"full"}>
                                {type.icon && <type.icon />}
                                {type.label}
                            </Badge>
                        </div>
                        <span className="shadow-none p-1 bg-accent rounded-xs ml-auto" onClick={() => window.open(caseStudyUrl, "_blank")}>
                            <ArrowRight size={18} className="transition-transform group-hover:-rotate-45 group-active:-rotate-45" />
                        </span>
                    </div>
                </div>
                <div className="">
                    <CardTitle className="text-lg font-semibold capitalize">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <Button className="hidden" variant={"outlined"} size={"wide"} radius={"small"} onClick={() => window.open(caseStudyUrl, "_blank")}>
                      View Details
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}