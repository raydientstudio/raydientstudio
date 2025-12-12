import { forwardRef, HTMLAttributes } from "react"
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
  "inline-flex items-center justify-center rounded-full font-medium px-2 py-0.5 text-xs capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
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

    compoundVariants: [
      // ----- Solid -----
      ...colorList.map((c) => ({
        type: "solid",
        color: c,
        className: `
          bg-[var(--${c})]
          text-[var(--${c}-foreground)]
          border border-transparent
        `,
      })),

      // ----- Semi -----
      ...colorList.map((c) => ({
        type: "semi",
        color: c,
        className: `
          bg-[var(--${c}-semi)]
          text-[var(--${c}-foreground)]
          border border-transparent
        `,
      })),

      // ----- Outline -----
      ...colorList.map((c) => ({
        type: "outline",
        color: c,
        className: `
          bg-[var(--${c}-semi)]
          text-[var(--${c}-foreground)]
          border border-[var(--${c}-outline)]
        `,
      })),
    ],

    defaultVariants: {
      color: "blue",
      type: "solid",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, color, type, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "span"

    return (
      <Component
        ref={ref}
        className={cn(badgeVariants({ color, type, size }), className)}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"