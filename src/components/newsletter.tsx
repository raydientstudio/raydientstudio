import React from "react";
import { IconCornerDownRight, IconSquareFilled } from "@tabler/icons-react";
import SectionHeader from "./(home)/section-header";
import { JetBrains_Mono } from "@/fonts/local";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const info = {
    title: "NEWSLETTER?",
    subtitle: (
        <>
            The Design Partner You&apos;ve{" "}<br className="md:hidden" />Been Looking For
        </>
    ),
};

export default function Newsletter() {
    return (
        <div className="w-full h-auto px-0 py-8 hidden backdrop-blur supports-[backdrop-filter]:bg-surface/80">
            <div className="w-full h-auto px-4 py-0">
                <div className="flex flex-col justify-center items-start text-left gap-y-6 left-0 right-0 max-w-7xl mx-auto w-full">
                    <SectionHeader info={info} />
                    <div className="flex flex-col relative overflow-hidden px-4 py-4 rounded-lg bg-surface text-card-foreground justify-start items-start shadow-none w-full">
                        <div className="border border-border border-solid px-4 py-4 rounded-lg space-y-4 w-full">
                            <div className="flex flex-col items-center justify-start space-y-4">
                                <div className="flex flex-row items-center justify-start gap-x-1 mb-2 w-full">
                                    <IconSquareFilled size={14} className="text-foreground" />
                                    <h3 className={`${JetBrains_Mono.className} antialiased translate-y-px md:translate-y-0 text-base tracking-tight leading-none font-bold uppercase text-foreground`}>
                                        Newsletter
                                    </h3>
                                </div>
                                <p className="text-sm text-muted-foreground">Sign-up to be the first to know about the latest trends & events in the business world.</p>
                            </div>
                            <form className="flex flex-col space-y-4 w-full">
                                <Input type="text" placeholder="Your Name..." />
                                <Input type="email" placeholder="Your Email..." />
                                <Button variant="filled" radius="medium">
                                    <IconCornerDownRight />
                                    Join the newsletter
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}