"use client";

import { cn } from "@/lib/utils";
import { Children, Fragment, ReactNode, useCallback, useEffect, useRef, useState } from "react";

type MarqueeProps = {
    children: ReactNode;
    className?: string;
};

const Marquee = ({ children, className }: MarqueeProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [multiplier, setMultiplier] = useState(1);

    const calculateWidth = useCallback(() => {
        const containerRect = containerRef.current?.getBoundingClientRect();
        const marqueeRect = marqueeRef.current?.getBoundingClientRect();
        const containerWidth = containerRect?.width;
        const marqueeWidth = marqueeRect?.width;

        if (containerWidth && marqueeWidth) {
            setMultiplier(marqueeWidth < containerWidth ? Math.ceil(containerWidth / marqueeWidth) : 1);
        }
    }, []);

    useEffect(() => {
        if (!isMounted) return;
        calculateWidth();
        if (marqueeRef.current && containerRef.current) {
            const resizeObserver = new ResizeObserver(() => calculateWidth());
            resizeObserver.observe(marqueeRef.current);
            resizeObserver.observe(containerRef.current);
            return () => {
                resizeObserver.disconnect();
            };
        }
    }, [calculateWidth, isMounted]);

    useEffect(() => {
        calculateWidth();
    }, [children, calculateWidth]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const multiplyChildren = useCallback(
        (multiplier: number) => {
            const arraySize = multiplier >= 0 ? multiplier : 0;
            return [...Array(arraySize)].map((_, i) => (
                <Fragment key={i}>
                    {Children.map(children, (child) => (
                        <>
                            {child}
                        </>
                    ))}
                </Fragment>
            ));
        },
        [children]
    );

    if (!isMounted) return null;

    return (
        <div ref={containerRef} className={cn("overflow-x-hidden flex flex-row relative w-full", className)}>
            <div className="animate-marquee flex-shrink-0 flex-grow-0 basis-auto min-w-full flex flex-row items-center">
                <div ref={marqueeRef} className="flex-shrink-0 flex-grow-0 basis-auto flex min-w-fit flex-row items-center">
                    {Children.map(children, (child) => (
                        <>
                            {child}
                        </>
                    ))}
                </div>
                {multiplyChildren(multiplier - 1)}
            </div>
            <div className="animate-marquee flex-shrink-0 flex-grow-0 basis-auto min-w-full flex flex-row items-center">
                {multiplyChildren(multiplier)}
            </div>
        </div>
    );
};

export { Marquee };