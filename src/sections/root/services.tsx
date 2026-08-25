"use client";

import Link from "next/link";
import SectionHeader from "./section-header";
import { cn } from "@/lib/utils";
import CrosshairCorner from "./crosshair-corners";
import { Grid, GridCell } from "@/components/ui/grid";
import { IconArrowRight } from "@/icons";

const info = {
    title: "/ 002 — Services",
    subtitle: (
        <>
            Serving With Integrity <br/>
            and Precision
        </>
    ),
};

interface CardProps {
    id?: string;
    title: string;
    description: string;
    tags: string[];
    url: string;
}

function Card({
    id,
    title,
    description,
    tags,
    url
}: CardProps) {
    return (
        <div className={cn("flex flex-col justify-start items-start rounded-none not-last:border-b border-border w-full h-full p-6 md:p-8 gap-4")}>
            <h4 className="text-label-14-mono text-muted">
                {id}
            </h4>
            <h5 className="text-heading-18 md:text-heading-24 font-semibold font-mono text-foreground">
                {title}
            </h5>
            <p className="text-copy-14 md:text-copy-18 text-muted-foreground">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 text-label-13-mono text-muted">
                <span>{tags[0]}</span>
                <span>·</span>
                <span>{tags[1]}</span>
            </div>
            <Link href={url ?? "/"} className="text-button-14 font-mono font-[450] inline-flex items-center gap-x-2 [&_svg]:size-3.5">
                Learn more
                <IconArrowRight />
            </Link>
        </div>
    )
}

export default function Services() {
    const services = [
        {
            id: "01",
            title: "Product Design",
            description: "Interfaces engineered for clarity. Wireframes, prototypes, and polished UI, grounded in real usage patterns.",
            tags: ["UI/UX", "Prototyping"],
            serviceUrl: "/",
        },
        {
            id: "02",
            title: "Frontend Engineering",
            description: "Interfaces built to hold up in production — reliable, well-tested, and easy for your team to build on.",
            tags: ["React", "TypeScript"],
            serviceUrl: "/",
        },
        {
            id: "03",
            title: "Performance",
            description: "Fast by default. Every build is checked for speed and smooth performance before it ships, not after.",
            tags: ["Speed Audits", "Optimization"],
            serviceUrl: "/",
        },
        {
            id: "04",
            title: "Design Systems",
            description: "Reusable components and consistent design rules that keep everything aligned as your product grows.",
            tags: ["Components", "Guidelines"],
            serviceUrl: "/",
        },
        {
            id: "05",
            title: "Technical Strategy",
            description: "A second set of expert eyes on your codebase, catching issues early and keeping decisions sound as you scale.",
            tags: ["Audits", "Advisory"],
            serviceUrl: "/",
        },
        {
            id: "06",
            title: "Ongoing Support",
            description: "Continued design and engineering support for teams that keep shipping well past launch day.",
            tags: ["Retainer", "Embedded"],
            serviceUrl: "/",
        },
    ];
    return (
        <section className="w-full h-fit px-6 md:px-10 py-16 border-b border-border">
            <div className="flex flex-col justify-center items-start text-left gap-y-12 left-0 right-0 max-w-8xl mx-auto">
                {/* Section header */}
                <SectionHeader info={info} />
                {/* Pillar grid */}
                <Grid columns={{ xs: 1, md: 2, lg: 3 }} rows={{ xs: 6, md: 3, lg: 2 }} >
                    <CrosshairCorner />
                    {/* Card */}
                    {services.map((service, idx) => (
                        <GridCell key={idx}>
                            <Card id={service.id} title={service.title} description={service.description} tags={service.tags} url={service.serviceUrl} />
                        </GridCell>
                    ))}
                </Grid>
            </div>
        </section>
    );
}