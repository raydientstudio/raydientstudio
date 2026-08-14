"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { ScrambleCycleText } from "@/components/ui/scramble";

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
    primaryb: "↳ Get Started",
    secondaryb: "Learn More →",
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
        <section className="relative w-full h-fit px-8 py-20 border-b border-border">
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
                    <Button variant="default" size='large' onClick={() => navigateTo(BOOKINGS)}>
                        {items.primary}
                    </Button>
                    <Button variant="outline" size='large' onClick={() => navigateTo(PROJECTS)}>
                        {items.secondary}
                    </Button>
                </div>
                {/* Meta line */}
                <p className="text-[13px] text-muted font-mono font-normal uppercase leading-none tracking-wide">
                    {items.metaline}
                </p>
            </div>
            <div className="relative hidden flex-col justify-center items-center w-full h-fit mt-24 gap-y-6 max-w-7xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-wide text-muted">
                    Trusted by World-class teams
                </span>
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
                    <span className="text-xl font-semibold font-mono tracking-tight text-muted-foreground">Flowstate</span>
                    <span className="text-xl font-semibold font-mono tracking-tight text-muted-foreground">Orbital</span>
                    <span className="text-xl font-semibold font-mono tracking-tight text-muted-foreground">Ledger</span>
                    <span className="text-xl font-semibold font-mono tracking-tight text-muted-foreground">Atlas</span>
                    <span className="text-xl font-semibold font-mono tracking-tight text-muted-foreground">Pulse</span>
                    <span className="text-xl font-semibold font-mono tracking-tight text-muted-foreground">Nova</span>
                </div>
            </div>
        </section>
    );
}