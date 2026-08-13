"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeader from "./section-header";
import CrosshairCorner from "./crosshair-corners";

const info = {
    title: "/ 008 — Testimonials",
    subtitle: (
        <>
            Satisfaction Recognized <br/>
            Internationally
        </>
    ),
};

interface Review {
    quote: string;
    initials: string;
    name: string;
    title: string;
    image?: string;
}

const reviews: Review[] = [
    {
        quote: "Rivele Studio completely overhauled our frontend architecture. The attention to detail in the UI components is unmatched.",
        initials: "SM",
        name: "Sarah Mitchell",
        title: "CTO, FLOWSTATE",
    },
    {
        quote: "They rebuilt our dashboard from the ground up and cut load times in half. It still feels fast under real production load.",
        initials: "DK",
        name: "David Kim",
        title: "DIRECTOR OF ENGINEERING",
    },
    {
        quote: "Every screen shipped matched the design file exactly. No back-and-forth, no pixel-chasing — just clean handoff.",
        initials: "AR",
        name: "Amara Reyes",
        title: "HEAD OF PRODUCT, ORBITAL",
    },
    {
        quote: "Our component library finally has rules everyone follows. Design and engineering are no longer arguing about spacing.",
        initials: "JT",
        name: "James Turner",
        title: "VP ENGINEERING, LEDGER",
    },
    {
        quote: "Responsive, sharp, and completely unbothered by scope changes. Exactly what we needed for a fast-moving launch.",
        initials: "PL",
        name: "Priya Lall",
        title: "FOUNDER, ATLAS COMMERCE",
    },
    {
        quote: "Best technical partner we've worked with. Communicative, precise, and the code quality speaks for itself.",
        initials: "MC",
        name: "Marcus Chen",
        title: "CTO, PULSE HEALTH",
    },
];

interface AvatarProps {
    image?: string;
    initials: string;
}

function Avatar({ image, initials }: AvatarProps) {
    const [failed, setFailed] = useState(false);

    if (!image || failed) {
        return (
            <div className="w-9 h-9 shrink-0 rounded-sm bg-primary flex items-center justify-center">
                <span className="font-medium font-mono text-xs text-primary-foreground">{initials}</span>
            </div>
        );
    }

    return (
        <Image
            src={image}
            alt={initials}
            width={36}
            height={36}
            className="w-9 h-9 shrink-0 rounded-sm object-cover"
            onError={() => setFailed(true)}
        />
    );
}

function ReviewCard({ quote, initials, name, title, image }: Review) {
    return (
        <div className="bg-surface p-8 sm:p-10 flex flex-col not-last:border-b border-border w-full h-fit">
            <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                <span className="font-mono text-muted">“</span>
                {quote}
                <span className="font-mono text-muted">”</span>
            </p>
            <div className="mt-8 flex items-center gap-3">
                <Avatar image={image} initials={initials} />
                <div className="flex flex-col justify-between">
                    <span className="text-sm font-medium text-foreground">{name}</span>
                    <span className="font-mono text-xs tracking-wide text-muted">[{title}]</span>
                </div>
            </div>
        </div>
    );
}

export default function Testimonial() {
    return (
        <section className="w-full h-fit px-10 py-16 border-b border-border">
            <div className="flex flex-col justify-start items-start w-full h-fit gap-y-6 max-w-8xl mx-auto">
                <SectionHeader info={info} />
                <div className="relative isolate flex flex-col justify-start items-start w-full h-fit max-w-8xl border border-border">
                    {/* True crosshair corners */}
                    <CrosshairCorner />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-surface">
                        {reviews.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}