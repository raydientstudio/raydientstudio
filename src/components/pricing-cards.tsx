"use client";

import React, { useMemo } from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
    IconClockDollar,
    IconClockHour4,
    IconCornerDownRight,
    IconFlameFilled,
    IconHeadset,
    IconHourglassFilled,
    IconRosetteDiscountCheckFilled,
    IconSparkles,
    IconSquareFilled,
    IconTopologyRing,
    IconTopologyStar,
    IconTopologyStar2,
    IconTopologyStar3,
} from "@tabler/icons-react";
import SectionHeader from "./section-header";
import { Poppins } from "@/fonts/local";

const info = {
    title: "PRICING PLANS",
    subtitle: (
        <>
            Pricing Transparency,{" "}
            <br className="md:hidden" />
            No Surprises
        </>
    ),
};

const iconMap = {
    topology: <IconTopologyRing size={16} />,
    topologyStar1: <IconTopologyStar size={16} />,
    topologyStar2: <IconTopologyStar2 size={16} />,
    topologyStar3: <IconTopologyStar3 size={16} />,
    sparkles: <IconSparkles size={12} />,
    flame: <IconFlameFilled size={12} />,
    clockDollar: <IconClockDollar size={12} />,
    hourglass: <IconHourglassFilled size={12} />,
    clock: <IconClockHour4 size={16} />,
    headset: <IconHeadset size={16} />,
};

const pricingData = [
    {
        id: 1,
        icon: "topology",
        title: "Basic Plan",
        squares: [
            { size: 14, className: "text-foreground" },
            { size: 12, className: "text-ring/30" },
            { size: 12, className: "text-ring/30" },
            { size: 12, className: "text-ring/30" },
        ],
        description: "Best for individuals and small teams seeking professional design services to establish a strong online presence.",
        tagicon: "sparkles",
        tagline: "Starter",
        isVisible: "flex",
        price: "$299",
        validity: "/One time",
        buttonLabel: "Start Your Project",
        benefitIcons: ["clock", "headset"],
        benefits: [
            "Project timeline: 1-2 weeks",
            "Priority Support",
        ],
        listTitle: "What you will get?",
        features: [
            "Single-page website design",
            "UI/UX design with responsive layouts",
            "Responsive design across all devices",
            "1 round of revisions included",
            "Delivered in Figma file",
            "Development available at additional cost",
        ],
    },
    {
        id: 2,
        icon: "topologyStar1",
        title: "Standard Plan",
        squares: [
            { size: 12, className: "text-ring/30" },
            { size: 14, className: "text-foreground" },
            { size: 12, className: "text-ring/30" },
            { size: 12, className: "text-ring/30" },
        ],
        description: "Best for medium-sized teams or startups looking to enhance their online presence and achieve their business goals.",
        tagicon: "flame",
        tagline: "Popular",
        isVisible: "flex",
        price: "$599",
        validity: "/One time",
        buttonLabel: "Start Your Project",
        benefitIcons: ["clock", "headset"],
        benefits: [
            "Project timeline: 3-4 weeks",
            "Priority Support",
        ],
        listTitle: "What you will get?",
        features: [
            "Up to 5 custom pages designed",
            "UI/UX design with modern layouts",
            "Responsive design across all devices",
            "2 rounds of revisions included",
            "Design handoff with prototype",
            "Development available at additional cost",
        ],
    },
    {
        id: 3,
        icon: "topologyStar2",
        title: "Premium Plan",
        squares: [
            { size: 12, className: "text-ring/30" },
            { size: 12, className: "text-ring/30" },
            { size: 14, className: "text-foreground" },
            { size: 12, className: "text-ring/30" },
        ],
        description: "Best for large teams and corporations seeking comprehensive, enterprise-level design solutions, and advanced features.",
        tagicon: "clockDollar",
        tagline: "Valuable",
        isVisible: "flex",
        price: "$1,199",
        validity: "/One time",
        buttonLabel: "Start Your Project",
        benefitIcons: ["clock", "headset"],
        benefits: [
            "Project timeline: 5-6 weeks",
            "Priority Support",
        ],
        listTitle: "What you will get?",
        features: [
            "Up to 10 uniquely designed pages",
            "UI/UX strategy with wireframing",
            "Responsive design across all devices",
            "Unlimited revisions (within agreed scope)",
            "Basic on-page SEO implementation",
            "Development available at additional cost",
        ],
    },
    {
        id: 4,
        icon: "topologyStar3",
        title: "Partnership Plan",
        squares: [
            { size: 12, className: "text-ring/30" },
            { size: 12, className: "text-ring/30" },
            { size: 12, className: "text-ring/30" },
            { size: 14, className: "text-foreground" },
        ],
        description: "Best for those who need ongoing support, handle multiple projects, or have a flexible or undefined scope of work.",
        tagicon: "hourglass",
        tagline: "Limited",
        isVisible: "flex",
        price: "$5,199",
        validity: "/Per month",
        buttonLabel: "Start Your Project",
        benefitIcons: ["clock", "headset"],
        benefits: [
            "Project timeline: 6-12 months",
            "Priority Support",
        ],
        listTitle: "What you will get?",
        features: [
            "Dedicated Design Leadership",
            "Senior UI/UX designer on-demand",
            "Full-scope project management",
            "Unlimited requests & refinements",
            "Regular Updates and maintenance",
            "Focused Workflow with weekly Syncs",
        ],
    },
];

export default function PricingCards() {
    // Memoize static data
    const plans = useMemo(() => pricingData, []);

    return (
        <section className="w-full h-auto px-0 py-8">
            <div className="w-full h-auto px-4 py-0">
                <div className="flex flex-col justify-center items-start text-left gap-y-6 left-0 right-0 max-w-7xl mx-auto">
                    <SectionHeader info={info} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-full h-auto gap-6 lg:gap-8">
                        {plans.map((plan) => (
                            <div key={plan.id} className="flex flex-col relative overflow-hidden rounded-lg border border-border bg-surface text-card-foreground justify-start items-start shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.03)] w-full">
                                <div className={`${plan.isVisible} flex-row justify-start items-center w-auto h-5 absolute top-0 right-0 gap-x-1 px-2 py-2 rounded-bl-lg bg-primary text-primary-foreground`}>
                                    {iconMap[plan.tagicon as keyof typeof iconMap]}
                                    <h4 className="text-[10px] font-medium tracking-tight leading-none uppercase">{plan.tagline}</h4>
                                </div>
                                <div className="flex flex-row justify-between items-start p-6 mt-4 w-full">
                                    <div className="flex flex-row justify-start items-center gap-x-1.5 w-auto h-6">
                                        <div className="flex justify-center items-center bg-foreground text-surface rounded-sm h-full px-1">{iconMap[plan.icon as keyof typeof iconMap]}</div>
                                        <div className="flex justify-center items-center border border-border rounded-sm h-full px-1.5">
                                            <h5 className="font-bold leading-[1.3] whitespace-nowrap tracking-tight text-xs uppercase translate-y-[0.5px] md:translate-y-0">{plan.title}</h5>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center gap-x-1">
                                        {plan.squares.map((square, idx) => (
                                            <IconSquareFilled key={idx} size={square.size} className={square.className} />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start items-start px-6 gap-y-4 pb-4 w-full h-auto">
                                    <div className="flex flex-row justify-start items-center gap-x-2">
                                        <p className="text-4xl font-semibold">{plan.price}</p>
                                        <p className="text-xs text-muted-foreground font-medium translate-y-2">
                                            {plan.validity}
                                        </p>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-[1.4]">{plan.description}</p>
                                    <Button variant={"filled"} size={"wide"} radius={"medium"}>
                                        <IconCornerDownRight />
                                        {plan.buttonLabel}
                                    </Button>
                                </div>
                                <div className="flex flex-col justify-center items-center w-full h-auto gap-y-4 px-6">
                                    {plan.benefits && (
                                        <ul className="w-full list-none space-y-2">
                                            {plan.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex flex-row gap-x-2 text-foreground items-center">
                                                    {iconMap[plan.benefitIcons[idx] as keyof typeof iconMap]}
                                                    <span className="text-sm whitespace-nowrap">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <Separator orientation="horizontal" className="mt-2.5 h-[0.5px]" />
                                </div>
                                <div className="flex flex-col justify-start items-start w-full h-auto p-6 gap-y-4">
                                    <h6 className={`${Poppins.className} text-base font-medium tracking-tight text-foreground`}>{plan.listTitle}</h6>
                                    <ul className="w-full list-none px-0 mb-0">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex flex-row gap-x-2 items-center mb-4 last:mb-0">
                                                <IconRosetteDiscountCheckFilled size={18} className="text-success" />
                                                <span className="text-sm text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}