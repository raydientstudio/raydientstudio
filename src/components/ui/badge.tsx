import { forwardRef, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

const badgeVariants = cva(
    "inline-flex justify-center items-center rounded-full border align-middle gap-1 px-2 py-0.5 text-xs font-regular capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                outline: "border border-border text-muted-foreground shadow-none",
            },
            color: {
                solid: {
                    red: "bg-red text-red-foreground",
                    green: "bg-green text-green-foreground",
                    blue: "bg-blue text-blue-foreground",
                    yellow: "bg-yellow text-yellow-foreground",
                    purple: "bg-purple text-purple-foreground",
                    pink: "bg-pink text-pink-foreground",
                    orange: "bg-orange text-orange-foreground",
                    teal: "bg-teal text-teal-foreground",
                    cyan: "bg-cyan text-cyan-foreground",
                    indigo: "bg-indigo text-indigo-foreground",
                    violet: "bg-violet text-violet-foreground",
                    gray: "bg-gray text-gray-foreground",
                    slate: "bg-slate text-slate-foreground",
                },
                semi: {
                    red: "bg-red-semi text-red",
                    green: "bg-green-semi text-green",
                    blue: "bg-blue-semi text-blue",
                    yellow: "bg-yellow-semi text-yellow",
                    purple: "bg-purple-semi text-purple",
                    pink: "bg-pink-semi text-pink",
                    orange: "bg-orange-semi text-orange",
                    teal: "bg-teal-semi text-teal",
                    cyan: "bg-cyan-semi text-cyan",
                    indigo: "bg-indigo-semi text-indigo",
                    violet: "bg-violet-semi text-violet",
                    gray: "bg-gray-semi text-gray",
                    slate: "bg-slate-semi text-slate",
                },
            },
            semi: {
                red: "bg-red-semi text-red",
                green: "bg-green-semi text-green",
                blue: "bg-blue-semi text-blue",
                yellow: "bg-yellow-semi text-yellow",
                purple: "bg-purple-semi text-purple",
                pink: "bg-pink-semi text-pink",
                orange: "bg-orange-semi text-orange",
                teal: "bg-teal-semi text-teal",
                cyan: "bg-cyan-semi text-cyan",
                indigo: "bg-indigo-semi text-indigo",
                violet: "bg-violet-semi text-violet",
                gray: "bg-gray-semi text-gray",
                slate: "bg-slate-semi text-slate",
            },
            size: {
                sm: "h-5 text-xs px-2",
                md: "h-6 text-xs px-3",
            },
        },
        defaultVariants: {
            variant: "default",
            color: "semi",
            size: "md",
        },
    }
)

export interface BadgeProps extends Omit<HTMLAttributes<HTMLDivElement>, "color">, VariantProps<typeof badgeVariants> {
    asChild?: boolean
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ className, variant, color, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "span"
    return (
        <Component className={cn(badgeVariants({ variant, color, size }), className)} ref={ref} {...props} />
    )
})
Badge.displayName = "Badge"

export { Badge, badgeVariants }