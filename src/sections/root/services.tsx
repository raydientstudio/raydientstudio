"use client";

import Link from "next/link";
import SectionHeader from "./section-header";
import { cn } from "@/lib/utils";
import CrosshairCorner from "./crosshair-corners";

const info = {
    title: "/ 002 — Services",
    subtitle: (
        <>
            Serving With Integrity <br/>
            and Precision
        </>
    ),
};

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
        <section className="w-full h-fit py-16 px-10 border-b border-border">
            <div className="flex flex-col justify-center items-start text-left gap-y-12 left-0 right-0 max-w-8xl mx-auto">
                {/* Section header */}
                <SectionHeader info={info} />
                {/* Pillar grid */}
                <div className="relative isolate grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-surface border border-border">
                    {/* True crosshair corners */}
                    <CrosshairCorner />
                    {/* Card */}
                    {services.map((service, index) => (
                        <div key={index} className={cn("flex flex-col justify-start items-start rounded-none not-last:border-b border-border w-full h-full p-6 gap-4")}>
                            <h4 className="text-label-14-mono text-muted">
                                {service.id}
                            </h4>
                            <h5 className="text-heading-18 md:text-heading-20 font-semibold font-mono text-foreground">
                                {service.title}
                            </h5>
                            <p className="text-copy-14 md:text-copy-16 text-muted-foreground">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2 font-mono text-xs text-muted">
                                <span>{service.tags[0]}</span>
                                <span>·</span>
                                <span>{service.tags[1]}</span>
                            </div>
                            <Link href={service.serviceUrl ?? "/"} className="text-button-16 font-mono font-[450] inline-flex items-center gap-x-2 [&_svg]:size-3.5">
                                Learn more <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 11H2V13H3V12V11ZM3 12V13H21V12V11H3V12Z" fill="currentColor"/>
                                <path d="M14 5L21 12L14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}