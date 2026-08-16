"use client";

import { useMemo } from "react";
import SectionHeader from "./section-header";
import {
    AnimatedTabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/animated-tabs";
import Button from "@/components/ui/button";
import pricingByCategory from "@/utils/pricing-plans";
import {
    IconClockDollar,
    IconSparklesFilled,
    IconHourglassFilled,
    IconRosetteDiscountCheckFilled,
    IconSparkles,
    IconTopologyRing,
    IconTopologyStar,
    IconTopologyStar2,
    IconTopologyStar3,
} from "@tabler/icons-react";
import IconDesignPointer from "@/icons/icon-design-pointer";
import IconClock from "@/icons/icon-clock";
import IconGauge from "@/icons/icon-gauge";
import IconArrowCircleDown from "@/icons/icon-arrow-circle-down";
import IconHeadset from "@/icons/icon-headset";
import IconStopWatchFast from "@/icons/icon-stopwatch-fast";
import IconLayers from "@/icons/icon-layers";
import IconDesktopError from "@/icons/icon-desktop-error";
import IconDeviceResponsive from "@/icons/icon-device-responsive";
import IconShieldCheck from "@/icons/icon-shield-check";
import IconGlobe from "@/icons/icon-globe";
import IconLayoutGrid from "@/icons/icon-layout-grid";
import IconComponent from "@/icons/icon-component";
import IconRefresh from "@/icons/icon-refresh";
import IconZap from "@/icons/icon-zap";

const info = {
    title: "/ 009 — Pricing Plans",
    subtitle: (
        <>
            Pricing Transparency, <br/>
            No Surprises
        </>
    ),
};

// Define the icon map for dynamic icon rendering
const iconMap = {
    tag: <IconRosetteDiscountCheckFilled size={14} className="text-primary" />,
    main: <IconRosetteDiscountCheckFilled size={16} className="text-primary" />,
    topology: <IconTopologyRing size={16} />,
    topologyStar1: <IconTopologyStar size={16} />,
    topologyStar2: <IconTopologyStar2 size={16} />,
    topologyStar3: <IconTopologyStar3 size={16} />,
    sparkles: <IconSparkles size={12} />,
    flame: <IconSparklesFilled size={12} />,
    clockDollar: <IconClockDollar size={12} />,
    hourglass: <IconHourglassFilled size={12} />,
    clock: <IconClock />,
    headset: <IconHeadset />,
    // Add more icons as needed
    1: <IconArrowCircleDown />,
    2: <IconDeviceResponsive />,
    3: <IconDesignPointer />,
    4: <IconRefresh />,
    5: <IconDesktopError />,
    6: <IconLayers />,
    7: <IconLayoutGrid />,
    8: <IconComponent />,
    9: <IconZap />,
    10: <IconGauge />,
    11: <IconRefresh />,
    12: <IconStopWatchFast />,
    13: <svg className="shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2.5" width="8" height="13" rx="1.5" /><path d="M7.5 5.5h3M7.5 8.5h3M7.5 11.5h1.5" /></svg>,
    14: <IconGlobe />,
    15: <IconShieldCheck />,
    16: <IconClock />,
    17: <IconHeadset />,
    18: <svg className="shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2.5v3M9 12.5v3M3.5 9h11" /><circle cx="9" cy="9" r="2.2" /></svg>,
};

type PricingCardProps = {
    card: {
        id: string | number;
        isVisible?: string;
        surface?: string;
        tagicon?: keyof typeof iconMap;
        tagline?: string;
        icon?: keyof typeof iconMap;
        title: string;
        price: string | number;
        validity?: string;
        description?: string;
        buttonVariant?: string | any;
        buttonLabel: string;
        benefits?: string[];
        benefitIcons?: (keyof typeof iconMap)[];
        listTitle: string;
        features: string[];
        featuresIcons?: (keyof typeof iconMap)[];
    };
}

const PricingCard = ({ card }: PricingCardProps) => {
    return (
        <div key={card.id} className={`${card.surface} flex flex-col overflow-hidden not-last:border-b border-border justify-center items-center w-full`}>
            <div className="flex flex-col relative border-b md:border-r border-border justify-start items-start w-full h-full">
                <div className="flex flex-row justify-between items-center p-6 w-full h-fit">
                    <h4 className="font-medium leading-none whitespace-nowrap text-sm capitalize">
                        {card.title}
                    </h4>
                    {card.tagline && (
                        <div className={`${card.isVisible ?? ""} flex-row justify-start items-center w-fit h-5 gap-x-1 px-2 py-2 border border-border rounded-sm text-muted-foreground`}>
                            <span className="hidden">
                                {card.tagicon && iconMap[card.tagicon]}
                            </span>
                            <h5 className="font-mono text-[10px] font-medium tracking-normal leading-none uppercase">
                                {card.tagline}
                            </h5>
                        </div>
                    )}
                </div>
                <div className="flex flex-col justify-start items-start px-6 gap-y-4 pb-4 w-full h-fit">
                    <div className="flex flex-row justify-start items-baseline gap-x-2 w-fit h-fit">
                        <p className="text-4xl font-medium">
                            {card.price}
                        </p>
                        {card.validity && (
                            <p className="font-mono text-xs text-muted align-text-bottom font-medium">
                                {card.validity}
                            </p>
                        )}
                    </div>
                    {card.description && (
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {card.description}
                        </p>
                    )}
                </div>
                <div className="flex flex-col justify-center items-center w-full h-fit gap-y-4 px-6 pb-6">
                    {card.benefits && card.benefitIcons && (
                        <ul className="flex flex-col w-full list-none space-y-2">
                            {card.benefits.map((benefit, idx) => (
                                <li key={idx} className="inline-flex gap-x-2 items-center text-sm text-foreground font-mono font-normal tracking-tighter whitespace-nowrap [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                                    {card.benefitIcons &&
                                        card.benefitIcons[idx] &&
                                        iconMap[card.benefitIcons[idx]]}
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="flex flex-col relativen text-foreground justify-start items-start w-full h-full">
                <div className="flex flex-col justify-start items-start w-full h-fit p-6 gap-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {card.listTitle}
                    </p>
                    <ul className="flex flex-col w-full list-none space-y-4">
                        {card.features.map((feature, idx) => (
                            <li key={idx} className="inline-flex gap-x-2 items-center text-sm text-foreground font-normal whitespace-nowrap [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                                {card.featuresIcons &&
                                    card.featuresIcons[idx] &&
                                    iconMap[card.featuresIcons[idx]]}
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="px-6 pb-6 w-full h-fit justify-start items-center">
                <Button variant={card.buttonVariant} size="medium">
                    {card.buttonLabel}
                </Button>
            </div>
        </div>
    );
}

const tabs = [
    { value: "0", label: "Branding" },
    { value: "1", label: "Website" },
    { value: "2", label: "Mobile App" },
    { value: "3", label: "Product Design" },
] as const;

const PricingPlans = () => {
    const data = useMemo(() => pricingByCategory, []);
    return (
        <section className="w-full h-fit px-6 md:px-10 py-16 border-b border-border">
            <div className="flex flex-col justify-center items-start text-left gap-y-12 w-full max-w-8xl mx-auto">
                <SectionHeader info={info} />
                <AnimatedTabs tabs={tabs} defaultValue={String(1)}>
                    <div className="flex border border-border bg-accent p-1 mt-2 rounded-full w-full md:w-fit">
                        <TabsList>
                            {tabs.map((tab, idx) => (
                                <TabsTrigger key={idx} value={tab.value}>
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    {tabs.map((tab, idx) => (
                        <TabsContent key={idx} value={tab.value}>
                            <div className="overflow-hidden grid grid-cols-1 md:grid-cols-3 rounded-md not-first:rounded-t-none not-last:rounded-b-none border border-border w-full h-fit">
                                {data[tab.value].map((plan: any) => (
                                    <PricingCard key={plan.id} card={plan} />
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </AnimatedTabs>
            </div>
        </section>
    );
};

export default PricingPlans;
