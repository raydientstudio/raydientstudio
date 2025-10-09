import * as React from "react"

import { cn } from "@/lib/utils"

const CornerIcon = ({ className }: { className?: string; delay?: number; }) => {
    return (
        <div className={cn(`pointer-events-none h-2 w-2 border-[2px] border-border rounded-none bg-surface`, className)} />
    );
};

const BoundingCard = ({ children }: { children: React.ReactNode }) => (
    <div className="items-center justify-center relative overflow-visible">
        {children}
        <CornerIcon className="absolute -right-[3px] -top-[3px]" />
        <CornerIcon className="absolute -bottom-[3px] -right-[3px]" />
        <CornerIcon className="absolute -left-[3px] -top-[3px]" />
        <CornerIcon className="absolute -bottom-[3px] -left-[3px] " />
    </div>
);

const BoundingBox = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <BoundingCard>
        <div ref={ref} className={cn("relative overflow-visible rounded-full border-[2px]  h-8 items-center border-border bg-surface text-card-foreground shadow-xs", className)} {...props} />
    </BoundingCard>
))
BoundingBox.displayName = "Bounding-Box";

export { BoundingBox }
