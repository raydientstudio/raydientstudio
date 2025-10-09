"use client";

import React, { JSX, useMemo } from "react";
import Image from "next/image";
import { Marquee } from "../ui/marquee";

export default function TrustedBrands(): JSX.Element {

    const brands = useMemo(
        () => ["2", "3", "4", "5", "6"],
        []
    );

    return (
        <section className="w-full h-fit px-0 py-6">
            <div className="w-full h-fit px-4 py-0">
                <div className="flex flex-col relative bg-surface rounded-lg py-4 justify-center items-start text-left left-0 right-0 max-w-7xl mx-auto">
                    {/* Marquee component */}
                    <Marquee
                        orientation={"horizontal"}
                        duration={10000}
                        speed={"1x"}
                        repeat={0}
                        isDebugging={false}
                        isReverse={false}
                        isPauseOnHover={false}
                    >
                        {brands.map((brand) => (
                            <Image key={brand} alt={brand} src={`/trusted-brands/${brand}.svg`} width={128} height={56} className="px-4" />
                        ))}
                    </Marquee>

                    {/* Gradient overlays for the edges */}
                    <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-background" />
                    <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-background" />
                </div>
            </div>
        </section>
    );
}