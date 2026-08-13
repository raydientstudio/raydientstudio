/*
"use client";

import React from "react";
import SectionHeader from "./(home)/section-header";
import { PortfolioCard } from "./(home)/portfolio-card";

const info = {
    title: "RECENT PROJECTS",
    subtitle: (
        <>
            Presenting our Recent Branding{" "}<br/>and Design Projects
        </>
    ),
};

const brandLogo = "https://rivele.vercel.app/android-chrome-512x512.png";
const imageUrl = "https://rivele.vercel.app/og-image.jpg";

export default function RecentProjects() {

    const portfolioProjects = [
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam vitae urna at erat cursus cursus.",
            category: "Tech",
            type: "Website",
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam vitae urna at erat cursus cursus.",
            category: "SaaS",
            type: "Website",
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam vitae urna at erat cursus cursus.",
            category: "E-commerce",
            type: "Website",
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam vitae urna at erat cursus cursus.",
            category: "Marketing",
            type: "Website",
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
    ]

    return (
        <section className="hidden w-full h-fit px-0 py-8">
            <div className="w-full h-fit px-6 py-0">
                <div className="flex flex-col justify-center items-start text-left gap-y-6 left-0 right-0 max-w-8xl mx-auto">
                    <SectionHeader info={info} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {portfolioProjects.map((project, index) => (
                            <PortfolioCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                category={project.category}
                                type={project.type}
                                thumbnailUrl={project.brandLogo}
                                brandUrl={project.brandLogo}
                                caseStudyUrl={project.caseStudyUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
*/