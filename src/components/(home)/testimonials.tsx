import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import SectionHeader from "./section-header";

const info = {
    title: "TESTIMONIALS",
    subtitle: (
        <>
            Satisfaction Recognized{" "}<br className="md:hidden" />Internationally
        </>
    ),
};

const reviews = [
    {
        name: "Sheikh Abdul Aziz",
        username: "@sheikhabdulaziz",
        thread: "I've never seen anything like this before. It's amazing. I love it.",
        personalPicture: "https://github.com/sheikh-abdul-aziz.png",
        timeline: "2h ago",
        organisationPicture: "Vercel",
        isOrganisation: false,
        goldenTick: "https://vercel.com/favicon.ico",
        blueTick: "https://vercel.com/favicon.ico",
        platform: "web",
    },
    {
        name: "Sheikh Abdul Aziz",
        username: "@sheikhabdulaziz",
        thread: "I've never seen anything like this before. It's amazing. I love it.",
        personalPicture: "https://github.com/sheikh-abdul-aziz.png",
        timeline: "2h ago",
        organisationPicture: "Vercel",
        isOrganisation: false,
        goldenTick: "https://vercel.com/favicon.ico",
        blueTick: "https://vercel.com/favicon.ico",
        platform: "web",
    },
    {
        name: "Sheikh Abdul Aziz",
        username: "@sheikhabdulaziz",
        thread: "I've never seen anything like this before. It's amazing. I love it.",
        personalPicture: "https://github.com/sheikh-abdul-aziz.png",
        timeline: "2h ago",
        organisationPicture: "Vercel",
        isOrganisation: false,
        goldenTick: "https://vercel.com/favicon.ico",
        blueTick: "https://vercel.com/favicon.ico",
        platform: "web",
    },
    {
        name: "Sheikh Abdul Aziz",
        username: "@sheikhabdulaziz",
        thread: "I've never seen anything like this before. It's amazing. I love it.",
        personalPicture: "https://github.com/sheikh-abdul-aziz.png",
        timeline: "2h ago",
        organisationPicture: "Vercel",
        isOrganisation: false,
        goldenTick: "https://vercel.com/favicon.ico",
        blueTick: "https://vercel.com/favicon.ico",
        platform: "web",
    },
    {
        name: "Sheikh Abdul Aziz",
        username: "@sheikhabdulaziz",
        thread: "I've never seen anything like this before. It's amazing. I love it.",
        personalPicture: "https://github.com/sheikh-abdul-aziz.png",
        timeline: "2h ago",
        organisationPicture: "Vercel",
        isOrganisation: false,
        goldenTick: "https://vercel.com/favicon.ico",
        blueTick: "https://vercel.com/favicon.ico",
        platform: "web",
    },
    {
        name: "Sheikh Abdul Aziz",
        username: "@sheikhabdulaziz",
        thread: "I've never seen anything like this before. It's amazing. I love it.",
        personalPicture: "https://github.com/sheikh-abdul-aziz.png",
        timeline: "2h ago",
        organisationPicture: "Vercel",
        isOrganisation: false,
        goldenTick: "https://vercel.com/favicon.ico",
        blueTick: "https://vercel.com/favicon.ico",
        platform: "web",
    },
    {
        name: "Sheikh Abdul Aziz",
        username: "@sheikhabdulaziz",
        thread: "I've never seen anything like this before. It's amazing. I love it.",
        personalPicture: "https://github.com/sheikh-abdul-aziz.png",
        timeline: "2h ago",
        organisationPicture: "Vercel",
        isOrganisation: false,
        goldenTick: "https://vercel.com/favicon.ico",
        blueTick: "https://vercel.com/favicon.ico",
        platform: "web",
    },
    {
        name: "Sheikh Abdul Aziz",
        username: "@sheikhabdulaziz",
        thread: "I've never seen anything like this before. It's amazing. I love it.",
        personalPicture: "https://github.com/sheikh-abdul-aziz.png",
        timeline: "2h ago",
        organisationPicture: "Vercel",
        isOrganisation: false,
        goldenTick: "https://vercel.com/favicon.ico",
        blueTick: "https://vercel.com/favicon.ico",
        platform: "web",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    className,
    personalPicture,
    name,
    username,
    thread,
    isOrganisation,
    organisationPicture,
}: {
    className?: string;
    personalPicture: string;
    name: string;
    username: string;
    thread: string;
    isOrganisation?: boolean;
    organisationPicture?: string;
}) => {
    return (
        <div className={cn(
            "relative h-auto w-full max-w-xs px-4 mx-2 cursor-pointer overflow-hidden rounded-lg border border-border p-4",
            "bg-surface hover:bg-muted/80 active:bg-muted/80 transition-colors duration-170 ease-in-out cursor-pointer",
            className
        )}>
            <div className="flex flex-row items-center gap-2">
                <Image aria-label="avatar" className="rounded-full" width="32" height="32" alt="alt" src={(isOrganisation && organisationPicture) ? organisationPicture : personalPicture} />
                <div className="flex flex-col">
                    <h4 className="text-sm font-medium text-foreground">
                        {name}
                    </h4>
                    <p className="text-xs font-medium text-muted-foreground">{username}</p>
                </div>
            </div>
            <p className="mt-2 text-sm">{thread}</p>
        </div>
    );
};

export default function Testimonial() {
    return (
        <section className="flex flex-col justify-start items-start w-full h-auto overflow-hidden px-4 py-8 gap-y-6 max-w-7xl mx-auto">
            <SectionHeader info={info} />
            <div className="relative flex flex-col justify-start items-start w-full h-auto overflow-hidden max-w-7xl">
                <div className="relative w-full h-auto flex flex-col gap-y-4">
                    {/* First row marquee */}
                    <Marquee
                        orientation={"horizontal"}
                        duration={10000}
                        speed={"1x"}
                        repeat={0}
                        isDebugging={false}
                        isReverse={false}
                        isPauseOnHover={true}
                    >
                        {[...firstRow].map((review, idx) => (
                            <ReviewCard key={review.username + idx} {...review} />
                        ))}
                    </Marquee>
                    {/* Second row marquee (reverse) */}
                    <Marquee
                        orientation={"horizontal"}
                        duration={10000}
                        speed={"1x"}
                        repeat={0}
                        isDebugging={false}
                        isReverse={true}
                        isPauseOnHover={true}
                    >
                        {[...secondRow].map((review, idx) => (
                            <ReviewCard key={review.username + idx} {...review} />
                        ))}
                    </Marquee>
                </div>
                {/* Gradient overlays for the edges */}
                <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-background"/>
                <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-background"/>
            </div>
        </section>
    );
}