import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

const variants = cva(`flex flex-col justify-center items-center font-sans bg-background min-h-screen`,)

interface MainProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof variants> {
    asChild?: boolean
}

const Main = forwardRef<HTMLElement, MainProps>(({ className, asChild = false, ...props }, ref) => {
    const Semantic = asChild ? Slot : "main"
    return <Semantic className={cn(variants({ className }))} ref={ref} {...props} />
})
Main.displayName = "Main";

export { Main as default };