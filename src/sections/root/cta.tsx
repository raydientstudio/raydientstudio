"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

const items = {
    title: "/ 011 — Let's Build",
    heading: (
        <>
            Ready to deploy your <br/>
            next vision?
        </>
    ),
    description: "Tell us what you're building. We'll follow up within 24 hours with next steps.",
    button: "↳ Initiate Project",
};

export default function CTA() {
    // --- Constants ---
    const SHOP = "/shop";

    // --- Hooks ---
    const router = useRouter();

    // --- Handlers ---
    const navigateTo = useCallback(
        (path: string) => {
            router.push(path);
        },
        [router],
    );

    // --- Render ---
    return (
        <section className="w-full h-fit px-6 md:px-10 py-16 border-t border-border">
            
            {/* Container */}
            <div className="relative flex flex-col justify-center items-center w-full h-fit max-w-8xl gap-y-6 mx-auto">
                
                {/* Title */}
                <div className="inline-flex items-center">
                    <h2 className="text-[13px] text-muted font-mono font-normal uppercase leading-none tracking-normal">
                        {items.title}
                    </h2>
                </div>
                
                {/* Heading & Description */}
                <div className="flex flex-col justify-center items-center max-w-md md:max-w-3xl gap-y-4 mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-center text-primary leading-none">
                        {items.heading}
                    </h1>
                    <p className="font-sans text-sm sm:text-sm md:text-base lg:text-base font-normal text-center text-muted-foreground leading-relaxed py-1 max-w-md">
                        {items.description}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="justify-center items-center">
                    <Button variant="default" size="large" onClick={() => navigateTo(SHOP)}>
                        {items.button}
                    </Button>
                </div>
            </div>
        </section>
    );
}