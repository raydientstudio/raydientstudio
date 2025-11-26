import { FC, forwardRef, HTMLAttributes, SVGProps } from 'react';
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva(
    "relative overflow-hidden flex justify-center items-center border border-border rounded-md",
    {
        variants: {
            size: {
                32: "w-8 h-8",
                36: "w-9 h-9",
            },
        },
        defaultVariants: {
            size: 32,
        },
    }
);

interface GlyphProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}

const Background: FC<GlyphProps> = ({ size = 24, className = '', ...props }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 1.5 1.5" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M0.03 0.03h1.44v1.44H0.03z" fill="currentColor" />
        </svg>
    );
};

const Foreground: FC<GlyphProps> = ({ size = 24, className = '', ...props }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M256 512H0L256 256V512Z" fill="currentColor" />
            <path d="M512 512L256 256L512 0V512Z" fill="currentColor" />
            <path d="M256 256L0 0H256V256Z" fill="currentColor" />
        </svg>
    );
};

interface IconProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof iconVariants> {
    asChild?: boolean;
    size?: 32 | 36;
}

const IconRaydientStudio = forwardRef<HTMLElement, IconProps>(
    ({ className, asChild = false, size = 32, ...props }) => {

        const Icon = asChild ? Slot : "span";
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