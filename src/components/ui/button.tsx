import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Poppins } from "@/fonts/local";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(`${Poppins.className} antialiased inline-flex items-center justify-center text-center gap-x-2 whitespace-nowrap rounded-md text-sm font-normal leading-none tracking-normal transition-colors duration-250 ease-in-out focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
    {
        variants: {
            variant: {
                primary: "bg-primary/95 text-primary-foreground hover:bg-primary active:bg-primary hover:shadow-none active:shadow-none shadow-[inset_0_-3px_0_var(--primary)]",
                secondary: "bg-surface text-foreground hover:bg-secondary active:bg-secondary hover:text-secondary-foreground active:text-secondary-foreground border border-border border-solid hover:shadow-none active:shadow-none shadow-[inset_0_-3px_0_var(--secondary)]",
                alert: "bg-transparent text-destructive/80 hover:bg-destructive/10 hover:text-destructive active:bg-destructive/10 active:text-destructive",
                destructive: "bg-destructive text-primary-foreground hover:text-primary-foreground/90 active:text-primary-foreground/90 hover:bg-destructive/80 active:bg-destructive/80 shadow-xs",
                elevated: "bg-surface text-secondary-foreground shadow-xs hover:bg-secondary hover:text-secondary-foreground active:bg-secondary active:text-secondary-foreground",
                filled: "bg-primary text-primary-foreground hover:bg-primary/95 active:bg-primary/95 shadow-[0_2px_2px_rgba(0,0,0,0.03)]",
                linked: "bg-transparent text-primary underline-offset-4 hover:underline active:underline",
                outlined: "bg-surface text-foreground hover:bg-secondary active:bg-secondary hover:text-secondary-foreground active:text-secondary-foreground border border-border border-solid",
                text: "bg-transparent text-secondary-foreground/80 hover:bg-secondary hover:text-secondary-foreground active:bg-secondary active:text-secondary-foreground",
                tonal: "bg-accent hover:bg-accent/80 active:bg-accent/80 text-accent-foreground hover:text-accent-foreground active:text-accent-foreground",
            },
            size: {
                badge: "h-7 gap-1.5 px-3 py-1 text-xs font-display font-[700] items-center align-middle text- uppercase bg-surface/80 text-foreground/80 shadow-none",
                default: "h-8 md:h-9 text-xs md:text-sm px-4 py-1 md:py-2 gap-x-1.5 md:gap-x-2",
                natural: "h-9 px-4 py-2",
                small: "h-8 px-3 text-xs",
                large: "h-10 px-8",
                action: "h-8 px-2 py-2 text-xs shadow-none",
                icon: "h-8 w-8 px-2 py-2 shadow-none [&_svg]:text-muted-foreground [&_svg]:hover:text-foreground [&_svg]:active:text-foreground",
                social: "h-8 w-8 px-2 py-2 [&_svg]:text-muted-foreground [&_svg]:hover:text-foreground [&_svg]:active:text-foreground",
                route: "h-8 w-8 px-2 py-2 shadow-none [&_svg]:text-foreground [&_svg]:hover:text-muted-foreground [&_svg]:active:text-muted-foreground",
                wide: "h-9 w-full px-4 py-2",
            },
            radius: {
                none: "rounded-none",
                small: "rounded-sm",
                medium: "rounded-md",
                large: "rounded-lg",
                extraLarge: "rounded-xl",
                full: "rounded-full",
            },
            align: {
                left: "justify-start text-left",
                center: "justify-center text-center",
                right: "justify-end text-right",
            },
        },
        defaultVariants: {
            variant: "filled",
            size: "natural",
            radius: "medium",
            align: "center"
        },
    }
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, radius, align, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button"
    return <Component className={cn(buttonVariants({ className, variant, size, radius, align }))} ref={ref} {...props} />
})
Button.displayName = "Button";

export { Button, buttonVariants };