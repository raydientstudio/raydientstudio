"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedTabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/animated-tabs";
import SectionHeader from "./section-header";
import { Grid, GridCell } from "@/components/ui/grid";
import { IconMoveUpRight } from "@/icons";

const info = {
    title: "/ 003 — Featured Projects",
    subtitle: (
        <>
            Showcasing Our Design <br/>
            Excellence
        </>
    ),
};

const brandLogo = "https://github.com/itsazizdotme.png";
const imageUrl = "https://github.com/itsazizdotme.png";

const tabs = [
    { label: "Branding", value: "brand" },
    { label: "Websites", value: "web" },
    { label: "Mobile Apps", value: "mobile" },
    { label: "Product Design", value: "product" },
];

export default function FeaturedProjects() {
    
    const data = [
        {
            title: "Rune Technologies",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam vitae urna at erat cursus cursus.",
            category: {
                label: "Branding",
            },
            type: {
                label: "Website",
            },
            year: 2024,
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
        {
            title: "Rivele Studio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam vitae urna at erat cursus cursus.",
            category: {
                label: "Design",
            },
            type: {
                label: "Development",
            },
            year: 2025,
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
        {
            title: "Frozen UI",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam vitae urna at erat cursus cursus.",
            category: {
                label: "Product Design",
            },
            type: {
                label: "Mobile App",
            },
            year: 2023,
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
        {
            title: "Lumini Icons",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam vitae urna at erat cursus cursus.",
            category: {
                label: "Website",
            },
            type: {
                label: "UI/UX Design",
            },
            year: 2026,
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
    ];

    return (
        <section className="w-full h-fit px-6 md:px-10 py-16 border-b border-border">
            <div className="flex flex-col justify-center items-start text-left gap-y-12 left-0 right-0 max-w-8xl mx-auto">
                <SectionHeader info={info} />
                <AnimatedTabs tabs={tabs} defaultValue="web">
                    <div className="flex border border-border bg-accent p-1 mt-2 rounded-full w-full md:w-fit">
                        <TabsList>
                            {tabs.map((t) => (
                                <TabsTrigger key={t.value} value={t.value}>
                                    {t.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    {tabs.map((tab) => (
                        <TabsContent key={tab.value} value={tab.value}>
                            <Grid columns={{xs: 1, md: 2}} rows={{xs: 4, md: 2}}>
                                {data.map((project, idx) => (
                                    <GridCell key={idx}>
                                        <div className="flex flex-col group bg-surface p-6 sm:p-8 not-last:border-b border-border">
                                            <div className="thumbnail-decoration aspect-video w-full bg-accent border border-border">
                                                <Image src={project.imageUrl} height={12} width={6} alt={project.title} className="hidden" />
                                            </div>
                                            <div className="mt-6 flex items-center gap-2 font-mono uppercase text-xs text-muted">
                                                [{project.type.label}] · [{project.category.label}] · [{project.year}]
                                            </div>
                                            <h3 className="mt-3 text-lg font-semibold font-mono tracking-tighter text-foreground">
                                                {project.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                                                {project.description}
                                            </p>
                                            <Link href={project.caseStudyUrl} className="mt-6 inline-flex items-center gap-x-2 font-mono font-[450] text-sm text-foreground [&_svg]:size-3.5">
                                                View Case Study
                                                <IconMoveUpRight />
                                            </Link>
                                        </div>
                                    </GridCell>
                                ))}
                            </Grid>
                        </TabsContent>
                    ))}
                </AnimatedTabs>
            </div>
        </section>
    );
}