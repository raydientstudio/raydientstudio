import { ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    `inline-flex justify-center items-center text-center gap-x-2 whitespace-nowrap font-[450] font-mono tracking-tighter transition-colors duration-250 ease-in-out focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
    {
        variants: {
            kind: {
                // Text buttons get their shape entirely from `size` + `radius` — nothing
                // structural is shared across every variant, so this is intentionally empty.
                default: "",
                // Icon-only buttons share a real set of rules: no padding (the fixed
                // height + aspect-square defines the box), a forced 1:1 box, and a
                // muted-to-foreground hover color. Previously these were copy-pasted
                // into every icon size tier — now they live in exactly one place.
                icon: "shadow-none aspect-square p-0 [&_svg]:text-muted-foreground [&_svg]:hover:text-foreground [&_svg]:active:text-foreground",
            },
            variant: {
                primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/90",
                secondary: "bg-accent text-foreground hover:bg-secondary active:bg-secondary hover:text-secondary-foreground active:text-secondary-foreground",
                alert: "bg-transparent text-destructive/80 hover:bg-destructive/10 hover:text-destructive active:bg-destructive/10 active:text-destructive",
                destructive: "bg-destructive text-primary-foreground hover:text-primary-foreground/90 active:text-primary-foreground/90 hover:bg-destructive/80 active:bg-destructive/80",
                elevated: "bg-surface text-secondary-foreground shadow-xs hover:bg-secondary hover:text-secondary-foreground active:bg-secondary active:text-secondary-foreground",
                filled: "bg-primary text-primary-foreground hover:bg-primary/80 active:bg-primary/80",
                linked: "bg-transparent text-primary underline-offset-4 hover:underline active:underline",
                outlined: "bg-surface text-foreground hover:bg-secondary active:bg-secondary hover:text-secondary-foreground active:text-secondary-foreground border border-border border-solid",
                text: "bg-transparent text-secondary-foreground/80 hover:bg-secondary hover:text-secondary-foreground active:bg-secondary active:text-secondary-foreground",
                tonal: "bg-accent hover:bg-accent/80 active:bg-accent/80 text-accent-foreground hover:text-accent-foreground active:text-accent-foreground",
            },
            size: {
                large: "h-10 px-4.5 text-button-16 [&_svg]:size-4 gap-x-3",
                medium: "h-9 px-4.5 text-button-14 [&_svg]:size-3.5 gap-x-2",
                small: "h-8 px-3 text-button-14 [&_svg]:size-3 gap-x-1.5",
                action: "h-8 w-8 px-2 py-2 text-xs shadow-none",
                wide: "h-10 w-full px-4 py-2",
                // Icon tiers only need a height and an svg size now — width and box
                // shape come from `kind: "icon"`'s `aspect-square`, so it's never
                // possible for the two to drift out of sync.
                iconTiny: "h-6 w-6 [&_svg]:size-3.5",
                icon: "h-8 w-8 [&_svg]:size-4",
                iconLarge: "h-10 w-10 [&_svg]:size-5",
                social: "h-8 w-8 [&_svg]:size-4",
                route: "h-8 w-8 [&_svg]:size-4",
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
                // `route` is the one icon tier with inverted hover color (starts
                // foreground, dims on hover) — everything else about it comes from
                // `kind: "icon"`, so only the color delta is overridden here.
                kind: "icon",
                size: "route",
                class: "[&_svg]:text-foreground [&_svg]:hover:text-muted-foreground [&_svg]:active:text-muted-foreground",
            },
        ],
        // No defaultVariants: `size`'s default depends on `asIcon` (icon vs text
        // scale), which cva can't express — a static default here would just be
        // wrong for one of the two modes. Every default is resolved once, explicitly,
        // in BUTTON_DEFAULTS below instead of split across cva config and JS fallbacks.
    }
)

/** Single source of truth for every default this component and LinkButton use. */
export const BUTTON_DEFAULTS = {
    variant: "filled",
    radius: "full",
    textSize: "medium",
    iconSize: "icon",
} as const;

type ButtonVariants = VariantProps<typeof buttonVariants>;

/** Square icon-only tiers — used when `asIcon` is set. Reuse `radius="full"` (default) for a circle, or `radius="medium"`/`"none"` for a square button; there's no separate `shape` prop, since `radius` already owns that. */
type IconSize = Extract<NonNullable<ButtonVariants["size"]>, "iconTiny" | "icon" | "iconLarge" | "social" | "route">;
type TextSize = Exclude<NonNullable<ButtonVariants["size"]>, IconSize>;

interface ButtonSharedProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">, Pick<ButtonVariants, "kind" | "variant" | "radius"> {
    /** Render as the single child element (e.g. a Next.js Link) instead of a <button>. */
    asChild?: boolean;
    /** Shows a spinner and puts the button in a busy, non-interactive state. */
    loading?: boolean;
    /** Optional copy to show next to the spinner while loading. Defaults to the button's own children so width doesn't jump. */
    loadingText?: ReactNode;
    /** Stretches the button to the width of its container, independent of `size`. */
    fullWidth?: boolean;
}

interface ButtonIconOnlyProps extends ButtonSharedProps {
    /** Icon-only button: `children` is the icon itself, sized to fill a square button. */
    asIcon: true;
    size?: IconSize;
    children: ReactNode;
    startIcon?: never;
    endIcon?: never;
    /** Required — an icon-only button has no visible label for assistive tech. */
    "aria-label": string;
}

interface ButtonWithLabelProps extends ButtonSharedProps {
    asIcon?: false;
    size?: TextSize;
    children?: ReactNode;
    /** Icon rendered before the label. */
    startIcon?: ReactNode;
    /** Icon rendered after the label. */
    endIcon?: ReactNode;
}

type ButtonProps = ButtonIconOnlyProps | ButtonWithLabelProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    function Button(
        {
            className,
            kind,
            variant,
            size,
            radius,
            asChild = false,
            asIcon = false,
            loading = false,
            loadingText,
            fullWidth = false,
            startIcon,
            endIcon,
            disabled,
            children,
            ...props
        },
        ref
    ) {
        const Comp = asChild ? Slot : "button";
        const isDisabled = disabled || loading;

        // Every default resolved here, explicitly, from BUTTON_DEFAULTS — nothing
        // implicit left for cva to fill in.
        const resolvedVariant = variant ?? BUTTON_DEFAULTS.variant;
        const resolvedRadius = radius ?? BUTTON_DEFAULTS.radius;
        const resolvedSize = size ?? (asIcon ? BUTTON_DEFAULTS.iconSize : BUTTON_DEFAULTS.textSize);
        const resolvedKind = kind ?? (asIcon ? "icon" : "default");

        return (
            <Comp
                className={cn(
                    buttonVariants({ className, kind: resolvedKind, variant: resolvedVariant, size: resolvedSize, radius: resolvedRadius }),
                    fullWidth && "w-full",
                    loading && "cursor-wait"
                )}
                ref={ref}
                // Native `disabled` only has meaning on a real <button>; asChild targets
                // (e.g. an <a>) fall back to aria-disabled, which the base styles above
                // already pair with pointer-events-none.
                disabled={!asChild ? isDisabled : undefined}
                aria-disabled={isDisabled || undefined}
                aria-busy={loading || undefined}
                {...props}
            >
                {asChild ? (
                    // Slot requires exactly one child to clone props onto, so icon/loading
                    // composition below is skipped here — compose those inside the child itself.
                    children
                ) : asIcon ? (
                    // Icon-only: swap the icon itself for the spinner rather than
                    // appending one — there's no room, and no label to keep visible.
                    loading ? <Loader2 className="animate-spin" aria-hidden="true" /> : children
                ) : loading ? (
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
    }
)
Button.displayName = "Button";

export { Button as default, buttonVariants, type ButtonProps, type ButtonVariants };