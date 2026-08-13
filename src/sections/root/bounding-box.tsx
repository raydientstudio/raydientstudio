import * as React from "react"

import { cn } from "@/lib/utils"

const CornerIcon = ({ className }: { className?: string; delay?: number; }) => {
    return (
        <div className={cn(`pointer-events-none h-2 w-2 border-2 border-border rounded-none bg-surface`, className)} />
    );
};

const BoundingCard = ({ children }: { children: React.ReactNode }) => (
    <div className="items-center justify-center relative overflow-visible">
        {children}
        <CornerIcon className="absolute -right-0.75 -top-0.75" />
        <CornerIcon className="absolute -bottom-0.75 -right-0.75" />
        <CornerIcon className="absolute -left-0.75 -top-0.75" />
        <CornerIcon className="absolute -bottom-0.75 -left-0.75 " />
    </div>
);

const BoundingBox = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <BoundingCard>
        <div ref={ref} className={cn("relative overflow-visible rounded-full border-2  h-8 items-center border-border bg-surface text-card-foreground shadow-xs", className)} {...props} />
    </BoundingCard>
))
BoundingBox.displayName = "Bounding-Box";

export { BoundingBox }