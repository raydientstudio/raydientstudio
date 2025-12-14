import { forwardRef, HTMLAttributes, CSSProperties } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

// List of available colors
const colorList = [
    "red", "green", "blue", "yellow", "purple", "pink",
    "orange", "teal", "cyan", "indigo", "violet", "gray", "slate"
] as const

const colorMap = Object.fromEntries(colorList.map((c) => [c, c]))

export const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-full font-regular px-2 py-0.5 text-xs capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            type: {
                solid: "",
                semi: "",
                outline: "",
            },
            color: colorMap,
            size: {
                sm: "h-5 text-xs px-2",
                md: "h-6 text-xs px-3",
            },
        },
        defaultVariants: {
            color: "blue",
            type: "solid",
            size: "md",
        },
    }
)

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color">, VariantProps<typeof badgeVariants> {
    asChild?: boolean
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ className, color = "blue", type = "solid", size, asChild = false, style, ...props }, ref) => {

        const Component = asChild ? Slot : "span"

        const colorStyles: CSSProperties = {}

        if (type === "solid") {
            colorStyles.backgroundColor = `var(--${color})`
            colorStyles.color = `var(--foreground)`
            colorStyles.borderColor = "transparent"
        } else if (type === "semi") {
            colorStyles.backgroundColor = `color-mix(in srgb, var(--${color}) 13%, transparent)`
            colorStyles.color = `var(--${color})`
            colorStyles.borderColor = "transparent"
        } else if (type === "outline") {
            colorStyles.backgroundColor = `color-mix(in srgb, var(--${color}) 13%, transparent)`
            colorStyles.color = `var(--${color})`
            colorStyles.borderColor = `color-mix(in srgb, var(--${color}) 18%, transparent)`
        }

        return (
            <Component
                ref={ref}
                className={cn(badgeVariants({ type, size }), "border", className)}
                style={{ ...colorStyles, ...style }}
                {...props}
            />
        )
    }
)

Badge.displayName = "Badge";