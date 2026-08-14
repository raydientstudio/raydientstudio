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
    2: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18 15h4v6h-4z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 20h5"
        ></path>
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 20v-4"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 11V3H2v13h12"
        ></path>
    </svg>
    ,
    3: <IconDesignPointer/>
    ,
    4: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12V13H4V12H3H2ZM12 3L12.0038 2H12V3ZM18.74 5.74L19.4471 5.03289C19.4431 5.02891 19.4391 5.02495 19.435 5.02103L18.74 5.74ZM20.2929 8.70711C20.6834 9.09763 21.3166 9.09763 21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L21 8L20.2929 8.70711ZM3 12H4C4 9.87827 4.84285 7.84344 6.34315 6.34315L5.63604 5.63604L4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12H3ZM5.63604 5.63604L6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4V3V2C9.34784 2 6.8043 3.05357 4.92893 4.92893L5.63604 5.63604ZM12 3L11.9962 3.99999C14.2542 4.00849 16.4215 4.88955 18.045 6.45897L18.74 5.74L19.435 5.02103C17.4405 3.09289 14.7779 2.01044 12.0038 2.00001L12 3ZM18.74 5.74L18.0329 6.44711L20.2929 8.70711L21 8L21.7071 7.29289L19.4471 5.03289L18.74 5.74Z" fill="currentColor" />
      <path d="M21 3V8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
      <path d="M22 12V11H20V12L21 12L22 12ZM12 21L11.9962 22H12V21ZM5.26 18.26L4.55289 18.9671C4.55688 18.9711 4.5609 18.975 4.56496 18.979L5.26 18.26ZM3.70711 15.2929C3.31658 14.9024 2.68342 14.9024 2.29289 15.2929C1.90237 15.6834 1.90237 16.3166 2.29289 16.7071L3 16L3.70711 15.2929ZM21 12L20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569L18.364 18.364L19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12L21 12ZM18.364 18.364L17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20V21V22C14.6522 22 17.1957 20.9464 19.0711 19.0711L18.364 18.364ZM12 21L12.0038 20C9.74577 19.9915 7.57848 19.1104 5.95504 17.541L5.26 18.26L4.56496 18.979C6.55946 20.9071 9.22213 21.9896 11.9962 22L12 21ZM5.26 18.26L5.96711 17.5529L3.70711 15.2929L3 16L2.29289 16.7071L4.55289 18.9671L5.26 18.26Z" fill="currentColor" />
      <path d="M8 16H3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
    </svg>
    ,
    5: <svg className="shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2.5h7l3 3v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z" /><path d="M11 2.5v3h3" /></svg>,
    6: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V12L14.5 13.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
    </svg>
    ,
    7: <svg className="shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1" /><rect x="11" y="2.5" width="4.5" height="4.5" rx="1" /><rect x="2.5" y="11" width="4.5" height="4.5" rx="1" /><rect x="11" y="11" width="4.5" height="4.5" rx="1" /></svg>,
    8: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12L6 15L9 12L6 9L3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 12L18 15L21 12L18 9L15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 6L12 9L15 6L12 3L9 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 18L12 21L15 18L12 15L9 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    ,
    9: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_78_519)">
    <path d="M13 3V10H19L11 21V14H5L13 3Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="3.99933"/>
    </g>
    <defs>
    <clipPath id="clip0_78_519">
    <rect width="24" height="24" fill="none"/>
    </clipPath>
    </defs>
    </svg>
,
    10: <IconGauge />,
    11: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12V13H4V12H3H2ZM12 3L12.0038 2H12V3ZM18.74 5.74L19.4471 5.03289C19.4431 5.02891 19.4391 5.02495 19.435 5.02103L18.74 5.74ZM20.2929 8.70711C20.6834 9.09763 21.3166 9.09763 21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L21 8L20.2929 8.70711ZM3 12H4C4 9.87827 4.84285 7.84344 6.34315 6.34315L5.63604 5.63604L4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12H3ZM5.63604 5.63604L6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4V3V2C9.34784 2 6.8043 3.05357 4.92893 4.92893L5.63604 5.63604ZM12 3L11.9962 3.99999C14.2542 4.00849 16.4215 4.88955 18.045 6.45897L18.74 5.74L19.435 5.02103C17.4405 3.09289 14.7779 2.01044 12.0038 2.00001L12 3ZM18.74 5.74L18.0329 6.44711L20.2929 8.70711L21 8L21.7071 7.29289L19.4471 5.03289L18.74 5.74Z" fill="currentColor" />
      <path d="M21 3V8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
      <path d="M22 12V11H20V12L21 12L22 12ZM12 21L11.9962 22H12V21ZM5.26 18.26L4.55289 18.9671C4.55688 18.9711 4.5609 18.975 4.56496 18.979L5.26 18.26ZM3.70711 15.2929C3.31658 14.9024 2.68342 14.9024 2.29289 15.2929C1.90237 15.6834 1.90237 16.3166 2.29289 16.7071L3 16L3.70711 15.2929ZM21 12L20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569L18.364 18.364L19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12L21 12ZM18.364 18.364L17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20V21V22C14.6522 22 17.1957 20.9464 19.0711 19.0711L18.364 18.364ZM12 21L12.0038 20C9.74577 19.9915 7.57848 19.1104 5.95504 17.541L5.26 18.26L4.56496 18.979C6.55946 20.9071 9.22213 21.9896 11.9962 22L12 21ZM5.26 18.26L5.96711 17.5529L3.70711 15.2929L3 16L2.29289 16.7071L4.55289 18.9671L5.26 18.26Z" fill="currentColor" />
      <path d="M8 16H3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
    </svg>,
    12: <svg className="shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="6.5" /><path d="M9 3v1.5M9 13.5V15M3 9h1.5M13.5 9H15" /></svg>,
    13: <svg className="shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2.5" width="8" height="13" rx="1.5"/><path d="M7.5 5.5h3M7.5 8.5h3M7.5 11.5h1.5"/></svg>,
    14: <svg className="shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="6.5"/><path d="M2.5 9h13M9 2.5c1.8 1.8 2.8 4.1 2.8 6.5S10.8 13.7 9 15.5c-1.8-1.8-2.8-4.1-2.8-6.5S7.2 4.3 9 2.5Z"/></svg>,
    15: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L12.3971 2.08223L12 1.9104L11.6029 2.08223L12 3ZM4 6.46154L3.60289 5.54377L3 5.80463V6.46154H4ZM12 21L11.876 21.9923L12 22.0078L12.124 21.9923L12 21ZM20 6.46154H21V5.80463L20.3971 5.54377L20 6.46154ZM12 3L11.6029 2.08223L3.60289 5.54377L4 6.46154L4.39711 7.37931L12.3971 3.91777L12 3ZM4 6.46154H3V12H4H5V6.46154H4ZM4 12H3C3 17.5768 7.45098 21.4391 11.876 21.9923L12 21L12.124 20.0077C8.54902 19.5608 5 16.4232 5 12H4ZM12 21L12.124 21.9923C16.549 21.4391 21 17.5768 21 12H20H19C19 16.4232 15.451 19.5608 11.876 20.0077L12 21ZM20 12H21V6.46154H20H19V12H20ZM20 6.46154L20.3971 5.54377L12.3971 2.08223L12 3L11.6029 3.91777L19.6029 7.37931L20 6.46154Z" fill="currentColor"/>
    <path d="M9.5 13.5L10.5 14.5L14.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
    </svg>
    ,
    16: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V12L14.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
    </svg>
    ,
    17: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 21H10V22H11V21ZM11 18.5V17.5C10.4477 17.5 10 17.9477 10 18.5H11ZM13 18.5H14C14 17.9477 13.5523 17.5 13 17.5V18.5ZM12 19.5V20.5H14V19.5H13H12ZM21 15H20V17H21H22V15H21ZM17 21V20H11V21V22H17V21ZM11 21H12V18.5H11H10V21H11ZM11 18.5V19.5H13V18.5V17.5H11V18.5ZM13 18.5H12V19.5H13H14V18.5H13ZM21 17H20C20 18.6569 18.6569 20 17 20V21V22C19.7614 22 22 19.7614 22 17H21Z" fill="currentColor"/>
    <path d="M3 16H2V17H3V16ZM21 16V17H22V16H21ZM3 11.3571V12.3571H7V11.3571V10.3571H3V11.3571ZM8 12.3571H7V15H8H9V12.3571H8ZM7 16V15H3V16V17H7V16ZM11.3571 3V4H12.6429V3V2H11.3571V3ZM21 16V15H17V16V17H21V16ZM16 15H17V12.3571H16H15V15H16ZM21 11.3571H20V16H21H22V11.3571H21ZM17 11.3571V12.3571H21V11.3571V10.3571H17V11.3571ZM3 16H4V11.3571H3H2V16H3ZM16 12.3571H17V12.3571V11.3571V10.3571C15.8954 10.3571 15 11.2526 15 12.3571H16ZM12.6429 3V4C16.7061 4 20 7.2939 20 11.3571H21H22C22 6.18933 17.8107 2 12.6429 2V3ZM11.3571 3V2C6.18934 2 2 6.18933 2 11.3571H3H4C4 7.2939 7.29391 4 11.3571 4V3ZM17 16V15V15H16H15C15 16.1046 15.8954 17 17 17V16ZM8 15H7V15V16V17C8.10457 17 9 16.1046 9 15H8ZM7 11.3571V12.3571V12.3571H8H9C9 11.2526 8.10457 10.3571 7 10.3571V11.3571Z" fill="currentColor"/>
    </svg>
    ,
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
