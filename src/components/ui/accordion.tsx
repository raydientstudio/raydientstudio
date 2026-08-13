"use client"

import { ComponentPropsWithoutRef, forwardRef } from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/lib/utils"

const Accordion = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>>(
    function Accordion({ className, ...props }, ref) {
        return <AccordionPrimitive.Root ref={ref} data-slot="accordion" className={cn(className)} {...props} />
    }
)

const AccordionItem = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(
    function AccordionItem({ className, ...props }, ref) {
        return (
            <AccordionPrimitive.Item
                ref={ref}
                data-slot="accordion-item"
                className={cn("border-b border-border shadow-[0_0_0_rgba(0,0,0,0)] rounded-none", className)}
                {...props}
            />
        )
    }
)

const AccordionTrigger = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(
    function AccordionTrigger({ className, children, ...props }, ref) {
        return (
            <AccordionPrimitive.Header className="flex flex-row justify-start items-start">
                <AccordionPrimitive.Trigger
                    ref={ref}
                    data-slot="accordion-trigger"
                    className={cn(
                        "flex flex-1 items-start justify-between gap-6 py-6 text-left text-foreground text-base font-medium leading-relaxed outline-none ring-0 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-90",
                        className
                    )}
                    {...props}
                >
                    {children}
                    <span className="text-foreground pointer-events-none text-sm shrink-0 translate-y-0.5 transition-transform duration-250 ease-in-out">
                        +
                    </span>
                </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
        )
    }
)

const AccordionContent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(
    function AccordionContent({ className, children, ...props }, ref) {
        return (
            <AccordionPrimitive.Content
                ref={ref}
                data-slot="accordion-content"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down transition-transform duration-250 ease-in-out overflow-hidden text-base text-muted-foreground leading-relaxed font-normal"
                {...props}
            >
                <div className={cn("pb-4", className)}>{children}</div>
            </AccordionPrimitive.Content>
        )
    }
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }