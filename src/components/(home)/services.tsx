"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { IconContract, IconDevelopment, IconPaint, IconVector } from "../mipmap/icons-services";
import SectionHeader from "./section-header";
import { ItemMedia } from "../ui/item";

const info = {
    title: "SERVICES",
    subtitle: (
        <>
            Serving Clients With Integrity{" "}<br className="md:hidden" />and Precision
        </>
    ),
};

export default function Services() {

    const router = useRouter();

    const handleNavigation = (url: string) => router.push(url);

    const services = [
        {
            id: 1,
            icon: <IconPaint size={28} />,
            title: "Branding & Visual Identity",
            description: "Creating memorable brands with a focus on visual identity.",
            serviceUrl: "/",
        },
        {
            id: 2,
            icon: <IconVector size={28} />,
            title: "Website & Product Design",
            description: "Designing clean user-friendly websites and products.",
            serviceUrl: "/",
        },
        {
            id: 3,
            icon: <IconDevelopment size={28} />,
            title: "Frontend Development",
            description: "Developing responsive, fast, and optimized solutions.",
            serviceUrl: "/",
        },
        {
            id: 4,
            icon: <IconContract size={28} />,
            title: "Smart Contract Solutions",
            description: "Building smart, secure, reliable, and efficient contracts.",
            serviceUrl: "/",
        },
    ];

    return (
        <section className="w-full h-auto px-0 py-8">
            <div className="w-full h-auto px-4 py-0">
                <div className="flex flex-col justify-center items-start text-left gap-y-6 left-0 right-0 max-w-7xl mx-auto">
                    <SectionHeader info={info} />
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 w-full h-auto">
                        {services.map((service) => (
                            <Card key={service.id} onClick={() => handleNavigation(service.serviceUrl ?? "/")} className="flex flex-col justify-start items-start hover:bg-muted/80 active:bg-muted/80 transition-colors duration-270 ease-in-out cursor-pointer">
                                <CardContent>
                                    <ItemMedia variant="icon">
                                        {service.icon}
                                    </ItemMedia>
                                    <CardTitle>{service.title}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};