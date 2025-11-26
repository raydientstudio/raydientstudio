import React, { forwardRef, HTMLAttributes } from 'react';
import Background from './background';
import Foreground from './foreground';
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva(
    "relative overflow-hidden flex justify-center items-center border border-border rounded-md",
    {
        variants: {
            size: {
                32: "w-8 h-8", // Default size
                36: "w-9 h-9", // Larger size
            },
        },
        defaultVariants: {
            size: 32,
        },
    }
);

export interface IconProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof iconVariants> {
    asChild?: boolean;
    size?: 32 | 36;
}

const IconRaydientStudio = forwardRef<HTMLElement, IconProps>(
    ({ className, asChild = false, size = 32, ...props }) => {
        const Icon = asChild ? Slot : "div";

        const backgroundSize = size === 32 ? 32 : 36;
        const foregroundSize = size === 32 ? 16 : 18;

        return (
            <Icon className={cn(iconVariants({ size, className }))} {...props}>
                <Background
                    width={backgroundSize.toString()}
                    height={backgroundSize.toString()}
                    className="absolute text-icon-background"
                />
                <Foreground
                    width={foregroundSize.toString()}
                    height={foregroundSize.toString()}
                    className="absolute text-icon-foreground"
                />
            </Icon>
        );
    }
);

IconRaydientStudio.displayName = "IconRaydientStudio";

export { IconRaydientStudio, iconVariants };