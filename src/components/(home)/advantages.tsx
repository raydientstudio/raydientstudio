import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { IconShield, IconPartnership, IconDesign, IconFuture } from "../miracle-ui/icons-advantages";
import SectionHeader from "./section-header";

const info = {
    title: "ADVANTAGES",
    subtitle: (
        <>
            Your Success Beyond{" "}<br className="md:hidden" />Launch
        </>
    ),
};

export default function Advantages() {

    const items = [
        {
            id: 1,
            title: "Proven Results You Can Trust",
            description: "We don’t rely on promises—our portfolio is backed by real outcomes: higher conversions, stronger engagement, and brand growth.",
            icon: <IconShield size={28} />
        },
        {
            id: 2,
            title: "End-to-End Creative Partnership",
            description: "From strategy to launch, you get everything under one roof. No scattered vendors, just one reliable partner who understands your vision.",
            icon: <IconPartnership size={28} />
        },
        {
            id: 3,
            title: "Human-Centered Design Thinking",
            description: "We design with empathy, putting your audience first. This ensures every interaction resonates, builds trust, and turns visitors into loyal customers.",
            icon: <IconDesign size={28} />
        },
        {
            id: 4,
            title: "Future-Ready & Scalable Solutions",
            description: "Our work isn’t just for today. We build designs and systems that grow with your business, ensuring long-term relevance and success.",
            icon: <IconFuture size={28} />
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