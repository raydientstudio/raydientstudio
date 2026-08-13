import { FC, forwardRef, HTMLAttributes, SVGProps } from 'react';
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva(
    "relative overflow-visible flex justify-center items-center rounded-none",
);

interface GlyphProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}

const Foreground: FC<GlyphProps> = ({ size = 24, className = "", ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" fill="none" className={className} {...props}>
            <path d="M0 256C141.385 256 256 141.385 256 0H0V256Z" fill="currentColor"/>
            <path d="M0 512L256 256H0V512Z" fill="currentColor" />
            <path d="M256 0V256H384C454.692 256 512 198.692 512 128C512 57.3076 454.692 0 384 0H256Z" fill="currentColor" />
            <path d="M256 512V256C397.385 256 512 370.615 512 512H256Z" fill="currentColor" />
        </svg>
    );
};

interface IconProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof iconVariants> {
    asChild?: boolean;
    size?: number | string;
}

const IconRiveleStudio = forwardRef<HTMLSpanElement, IconProps>(
    ({ className, asChild = false, size = 36, ...props }, ref) => {

        const Icon = asChild ? Slot : "span";

        return (
            <Icon ref={ref} className={cn(iconVariants({ className }))} {...props}>
                <Foreground
                    width={size.toString()}
                    height={size.toString()}
                    className="relative text-primary"
                />
            </Icon>
        );
    }
);

IconRiveleStudio.displayName = "IconRiveleStudio";

export { IconRiveleStudio as default, iconVariants };