"use client";

import { Skeleton as DefaultSkeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React from "react";

interface SkeletonProps {
    isVisible?: boolean;
    children: React.ReactNode;
    className?: string;
}

export function Skeleton({ isVisible = false, children, className }: SkeletonProps) {
    return (
        <div className="relative w-fit h-fit">
            {/* Child remains in DOM but invisible when skeleton is active */}
            <div className={cn(isVisible && "invisible w-fit h-fit")}>
                {children}
            </div>

            {isVisible && (
                <DefaultSkeleton
                    className={cn(
                        "absolute inset-0 rounded-lg",
                        className
                    )}
                />
            )}
        </div>
    );
}