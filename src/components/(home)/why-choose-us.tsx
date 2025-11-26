import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { IconWriting, IconTeam, IconMotion, IconMagic } from "../mipmap/icons-whychooseus";
import SectionHeader from "./section-header";

const info = {
    title: "WHY CHOOSE US?",
    subtitle: (
        <>
            The Design Partner You’ve{" "}<br className="md:hidden" />Been Looking For
        </>
    ),
};

export default function WhyChooseUs() {

    const items = [
        {
            id: 1,
            title: "Conversion-Driven Copywriting",
            description: "Every word we design is intentional—crafted to influence decisions, spark action, and drive measurable growth for your business.",
            icon: <IconWriting size={28} />
        },
        {
            id: 2,
            title: "A Team Fully Dedicated to You",
            description: "No outsourcing, no juggling. A focused team works exclusively on your project, giving you peace of mind and complete accountability.",
            icon: <IconTeam size={28} />
        },
        {
            id: 3,
            title: " Engaging Motion & Interaction Design",
            description: "We create purposeful animations that guide users, reduce friction, and build emotional connections throughout the journey.",
            icon: <IconMotion size={28} />
        },
        {
            id: 4,
            title: "Pixel-Perfect Craftsmanship",
            description: "Trust is built in details. We obsess over alignment, precision, and brand consistency so your design feels flawless across every screen.",
            icon: <IconMagic size={28} />
        }
    ];

    return (
        <section className="w-full h-auto px-0 py-8">
            <div className="w-full h-auto px-4 py-0">
                <div className="flex flex-col justify-center items-start text-left gap-y-6 left-0 right-0 max-w-7xl mx-auto">
                    <SectionHeader info={info} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 lg:gap-6 w-full h-auto">
                        {items.map((item) => (
                            <Card key={item.id} className="flex flex-col justify-start items-center hover:bg-muted/80 active:bg-muted/80 transition-colors duration-270 ease-in-out cursor-pointer">
                                <CardContent>
                                    {item.icon}
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};