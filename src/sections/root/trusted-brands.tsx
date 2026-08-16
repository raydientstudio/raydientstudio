"use client";

import Image from "next/image";
import { useMemo } from "react";
import { Marquee } from "@/components/ui/marquee";

export default function TrustedBrands() {
    const brands = useMemo(() => ["2", "3", "4", "5", "6"], []);
    return (
        <section className="w-full h-fit px-0 py-6">
            <div className="w-full h-fit px-6 py-0">
                <div className="flex flex-col relative rounded-lg py-4 justify-center items-start text-left left-0 right-0 max-w-8xl mx-auto">
                    {/* Marquee component */}
                    <Marquee orientation={"horizontal"} duration={28} speed={"1x"} repeat={0} multiply={2} isReverse={false} isPauseOnHover={false}>
                        {brands.map((brand) => (
                            <Image loading={"eager"} preload key={brand} alt={brand} src={`/trusted-brands/${brand}.svg`} width={128} height={56} className="px-4" />
                        ))}
                    </Marquee>
                    {/* Gradient overlays for the edges */}
                    <span className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-linear-to-r from-background" />
                    <span className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-linear-to-l from-background" />
                </div>
            </div>
        </section>
    );
}