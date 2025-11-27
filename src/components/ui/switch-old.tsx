"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react"

const Switch = forwardRef<ComponentRef<typeof SwitchPrimitives.Root>, ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(
			"inline-flex h-5 w-9 shrink-0 cursor-pointer justify-normal items-center rounded-full border-0 border-transparent shadow-[0_0_0_rgba(0,0,0,0)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
			className
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cn(
				"pointer-events-none h-4 w-4 rounded-full bg-background shadow-[0_0_0_rgba(0,0,0,0)] ring-0 transition-transform data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-[0px]"
			)}
		/>
	</SwitchPrimitives.Root>
))

Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }