import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap transition-colors duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/90",
                outline: "border border-border bg-surface text-foreground hover:bg-secondary active:bg-secondary",
                tonal: "bg-accent text-accent-foreground hover:bg-accent/80 active:bg-accent/80",
                text: "bg-transparent text-secondary-foreground hover:bg-secondary active:bg-secondary",
                elevated: "bg-surface text-secondary-foreground shadow-xs hover:bg-secondary active:bg-secondary",
                underline: "bg-transparent text-primary underline-offset-4 hover:underline active:underline",
                error: "bg-destructive text-primary-foreground hover:bg-destructive/80 active:bg-destructive/80",
                alert: "bg-transparent text-destructive hover:bg-destructive/10 active:bg-destructive/10",
            },
            size: {
                small: "",
                medium: "",
                large: "",
            },
            asIcon: {
                true: "p-0",
                false: "",
            },
            radius: {
                none: "rounded-none",
                small: "rounded-sm",
                medium: "rounded-md",
                large: "rounded-lg",
                extraLarge: "rounded-xl",
                full: "rounded-full",
            },
        },
        compoundVariants: [
            {
                size: "large",
                asIcon: true,
                class: "h-10 w-10 [&_svg]:size-4",
            },
            {
                size: "large",
                asIcon: false,
                class: "h-10 px-4.5 text-button-16 gap-x-3 [&_svg]:size-4",
            },
            {
                size: "medium",
                asIcon: true,
                class: "h-9 w-9 [&_svg]:size-4",
            },
            {
                size: "medium",
                asIcon: false,
                class: "h-9 px-4.5 text-button-14 gap-x-2 [&_svg]:size-3.5",
            },
            {
                size: "small",
                asIcon: true,
                class: "h-8 w-8 [&_svg]:size-4",
            },
            {
                size: "small",
                asIcon: false,
                class: "h-8 px-3 text-button-14 gap-x-1.5 [&_svg]:size-3",
            },
        ],
        defaultVariants: {
            variant: "default",
            size: "medium",
            radius: "full",
            asIcon: false,
        },
    },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonBaseProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">, Pick<ButtonVariants, "variant" | "size" | "radius"> {
    asChild?: boolean;
    loading?: boolean;
    loadingText?: ReactNode;
    asWide?: boolean;
}

interface IconButtonProps extends ButtonBaseProps {
    asIcon: true;
    children: ReactNode;
    startIcon?: never;
    endIcon?: never;
    "aria-label": string;
}

interface TextButtonProps extends ButtonBaseProps {
    asIcon?: false;
    children?: ReactNode;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

export type ButtonProps = IconButtonProps | TextButtonProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            radius,
            asChild = false,
            asIcon = false,
            loading = false,
            loadingText,
            asWide = false,
            startIcon,
            endIcon,
            disabled,
            children,
            ...props
        },
        ref,
    ) => {
        const Comp = asChild ? Slot : "button";
        const isDisabled = disabled || loading;

        return (
            <Comp ref={ref} className={cn(buttonVariants({ variant, size, radius, asIcon }), asWide && "w-full", loading && "cursor-wait", className,)} disabled={!asChild ? isDisabled : undefined} aria-disabled={isDisabled || undefined} aria-busy={loading || undefined} {...props}>
                {asChild ? (children) : asIcon ? (
                    loading ? (
                        <Loader2 className="animate-spin" aria-hidden="true" />
                    ) : (children)) : loading ? (
                    <>
                        <Loader2 className="animate-spin" aria-hidden="true" />
                        <span className={cn(!loadingText && "invisible")}>
                            {loadingText ?? children}
                        </span>
                    </>
                ) : (
                    <>
                        {startIcon}
                        {children}
                        {endIcon}
                    </>
                )}
            </Comp>
        );
    },
);

Button.displayName = "Button";

export { Button as default, buttonVariants };