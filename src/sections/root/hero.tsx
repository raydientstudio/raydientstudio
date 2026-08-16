"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { ScrambleCycleText } from "@/components/ui/scramble";
import { Marquee } from "@/components/ui/marquee";

const items = {
    status: "Now booking Q4 engagements",
    heading: (
        <>
            Brand <br/>
            Infrastructure
        </>
    ),
    description: ["Brands that leave an impression", "For AI & Startups", "For Founders & Owners"],
    primary: "Get Started",
    secondary: "Learn More",
    metaline: "No Long-Term Contracts — Response within 24h"
};

export default function Hero() {
    // --- Constants ---
    const BOOKINGS = "/bookings";
    const PROJECTS = "/docs";

    // --- Hooks ---
    const router = useRouter();

    // --- Handlers ---
    const navigateTo = useCallback((path: string) => router.push(path), [router]);

    // --- Render ---
    return (
        <section className="relative w-full h-fit px-8 md:px-10 py-20 border-b border-border">
            {/* Grid element */}
            <span className="absolute inset-0 mt-16 left-1/2 -translate-x-1/2 pointer-events-none" />
            {/* Container */}
            <div className="relative flex flex-col justify-center items-center w-full h-fit gap-y-6 max-w-8xl mx-auto">
                {/* Status Indicator */}
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface pl-1.5 pr-3.5 py-1.5 ">
                    <span className="flex items-center justify-center h-4.5 px-2 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase leading-none tracking-wide">
                        New
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                        {items.status}
                    </span>
                </div>
                {/* Heading & Description */}
                <div className="flex flex-col justify-center items-center w-full max-w-8xl gap-y-4 mx-auto">
                    <h1 className="text-6xl md:text-7xl lg:text-7xl text-foreground leading-none tracking-tighter text-center">
                        {items.heading}
                    </h1>
                    <p className="text-base lg:text-lg text-muted-foreground font-mono leading-relaxed tracking-tight text-center max-w-xl md:max-w-2xl">
                        <ScrambleCycleText texts={items.description}/>
                    </p>
                </div>
                {/* Call-to-Action Buttons */}
                <div className="flex flex-row justify-center items-center gap-4">
                    <Button size="large" onClick={() => navigateTo(BOOKINGS)}>
                        {items.primary}
                    </Button>
                    <Button variant="outline" size="large" onClick={() => navigateTo(PROJECTS)}>
                        {items.secondary}
                    </Button>
                </div>
                {/* Meta line */}
                <p className="text-[13px] text-muted text-center font-mono font-normal uppercase leading-relaxed tracking-wide">
                    {items.metaline}
                </p>
            </div>
            <div className="hidden relative flex-col justify-center items-center w-full h-fit mt-24 gap-y-8 max-w-8xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-wide text-muted">
                    Trusted by World-class teams
                </span>

                {/* Marquee */}
                <Marquee orientation="horizontal" duration={24} isPauseOnHover multiply={4} speed={"default"} repeat={0}>
                    {mqItems.map((item) => (
                        <div key={item.name} className="inline-flex items-center gap-3 pr-12 text-muted-foreground">
                            {item.logo}
                            <span className="font-mono text-lg font-semibold tracking-tight">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}

const mqItems = [
  {
    name: "Flowstate",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      </svg>
    ),
  },
  {
    name: "Orbital",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="7" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    name: "Ledger",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="5" width="14" height="14" rx="2" />
      </svg>
    ),
  },
  {
    name: "Atlas",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    name: "Pulse",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l2-4 4 8 2-4h6" />
      </svg>
    ),
  },
  {
    name: "Nova",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 3v18M3 12h18" />
        <path d="M5 5l14 14M19 5L5 19" />
      </svg>
    ),
  },
];