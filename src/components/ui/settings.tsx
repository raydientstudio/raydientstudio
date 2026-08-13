import { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const ItemGroup = ({ className, ...props }: ComponentProps<"div">) => {
    return <div role="list" data-slot="item-group" className={cn("group/item-group flex flex-col", className)} {...props} />
}

const ItemSeparator = ({className, ...props}: ComponentProps<typeof Separator>) => {
    return (
        <Separator data-slot="item-separator" orientation="horizontal" className={cn("my-0", className)} {...props} />
    )
}

const itemVariants = cva(
    "group/item [a]:hover:bg-accent/50 [a]:focus-visible:border-ring [a]:focus-visible:ring-ring/50 [a]:transition-colors flex flex-wrap items-center rounded-md border border-transparent text-sm outline-none transition-colors duration-100 [a]:focus-visible:ring-[3px]",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                outline: "bg-surface border-border",
                muted: "bg-muted/50",
            },
            size: {
                default: "gap-4 p-4",
                sm: "gap-2.5 px-6 py-3",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

const Item = ({ className, variant = "default", size = "default", asChild = false, ...props }: ComponentProps<"div"> & VariantProps<typeof itemVariants> & { asChild?: boolean }) => {
    const Comp = asChild ? Slot : "div"
    return (
        <Comp data-slot="item" data-variant={variant} data-size={size} className={cn(itemVariants({ variant, size, className }))} {...props} />
    )
}

const itemMediaVariants = cva(
    "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                icon: "bg-muted size-10 rounded-sm [&_svg:not([class*=size-])]:size-6",
                image:
                    "size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const ItemMedia = ({ className, variant = "default", ...props }: ComponentProps<"span"> & VariantProps<typeof itemMediaVariants>) => {
    return (
        <span data-slot="item-media" data-variant={variant} className={cn(itemMediaVariants({ variant, className }))} {...props} />
    )
}

const ItemContent = ({ className, ...props }: ComponentProps<"div">) => {
    return (
        <div
            data-slot="item-content"
            className={cn("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", className)}
            {...props}
        />
    )
}

const ItemTitle = ({ className, ...props }: ComponentProps<"h3">) => {
    return (
        <h3
            data-slot="item-title"
            className={cn(
                "flex w-fit items-center gap-2 text-sm text-foreground font-medium leading-snug",
                className
            )}
            {...props}
        >
            {props.children}
        </h3>
    )
}

const ItemDescription = ({ className, ...props }: ComponentProps<"p">) => {
    return (
        <p
            data-slot="item-description"
            className={cn(
                "text-muted-foreground line-clamp-2 text-balance text-sm font-normal leading-normal",
                "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
                className
            )}
            {...props}
        />
    )
}

const ItemActions = ({ className, ...props }: ComponentProps<"div">) => {
    return (
        <div
            data-slot="item-actions"
            className={cn("flex items-center gap-2", className)}
            {...props}
        />
    )
}

const ItemHeader = ({ className, ...props }: ComponentProps<"div">) => {
    return (
        <div
            data-slot="item-header"
            className={cn(
                "flex basis-full items-center justify-between gap-2",
                className
            )}
            {...props}
        />
    )
}

const ItemFooter = ({ className, ...props }: ComponentProps<"div">) => {
    return (
        <div
            data-slot="item-footer"
            className={cn(
                "flex basis-full items-center justify-between gap-2",
                className
            )}
            {...props}
        />
    )
}

export {
    Item,
    ItemMedia,
    ItemContent,
    ItemActions,
    ItemGroup,
    ItemSeparator,
    ItemTitle,
    ItemDescription,
    ItemHeader,
    ItemFooter,
}