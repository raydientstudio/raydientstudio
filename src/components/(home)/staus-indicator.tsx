"use client";

import { cn } from "@/lib/utils";
import { IconCircleFilled } from "@tabler/icons-react";
import React, { memo } from "react";

const PointerIcon = memo(({ className }: { className?: string }) => {
    return (
        <div className={cn(`pointer-events-none disabled:opacity-50 absolute bg-background border-[2px] border-border rounded-full w-2 h-2`, className)} />
    );
});
PointerIcon.displayName = "Pointer Icon";

const StatusIndicator = memo(({ className = "" }: { className?: string; }) => (
    <div className={`pointer-events-none disabled:opacity-50 overflow-visible relative justify-center items-center ${className}`}>
        <div className="pointer-events-none disabled:opacity-50 inline-flex flex-row overflow-visible relative justify-center items-center gap-x-1.5 px-2 py-1.5 border-[2px] border-border rounded-none bg-background shadow-none">
            {/* Pointer Icons */}
            <PointerIcon className="-right-[4.5px] -top-[4.5px]" />
            <PointerIcon className="-bottom-[4.5px] -right-[4.5px]" />
            <PointerIcon className="-left-[4.5px] -top-[4.5px]" />
            <PointerIcon className="-bottom-[4.5px] -left-[4.5px]" />

            {/* Content */}
            <IconCircleFilled size={10} className="text-available bg-available animate-pulsar disabled:pointer-events-none disabled:text-unavailable" />
            <span className="antialiased font-semibold whitespace-nowrap text-foreground/70 text-xs leading-none items-center uppercase translate-y-[0.5px] md:translate-y-0">
                Open for Projects
            </span>
        </div>
    </div>
));

StatusIndicator.displayName = "Status Indicator";

export { StatusIndicator };