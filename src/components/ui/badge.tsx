import { forwardRef, HTMLAttributes, CSSProperties } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// List of available colors
const colorList = [
    "red", "green", "blue", "yellow", "purple", "pink",
    "orange", "teal", "cyan", "indigo", "violet", "gray", "slate"
] as const

const colorMap = Object.fromEntries(colorList.map((c) => [c, c]))

export const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-full font-[450] px-2 py-0.5 gap-x-1 text-xs whitespace-nowrap capitalize leading-none tracking-normal transition-colors duration-250 ease-in-out focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
    {
        variants: {
            type: {
                solid: "",
                semi: "",
                outline: "",
            },
            color: colorMap,
            size: {
                sm: "h-5 text-xs px-1.5",
                md: "h-6 text-xs px-2",
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
            colorStyles.backgroundColor = "transparent"
            colorStyles.color = `var(--muted-foreground)`
            colorStyles.borderColor = `var(--border)`
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