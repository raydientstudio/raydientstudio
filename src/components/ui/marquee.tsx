"use client"

import { Children, Fragment, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type MarqueeProps = {
  children: ReactNode
  className?: string
  isReverse?: boolean
  isPauseOnHover?: boolean
  orientation?: "horizontal" | "vertical"

  /** Base duration of one full cycle (ms) */
  duration?: number

  /** Speed multiplier */
  speed?: "default" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x"

  /** Animation iterations (0 = infinite) */
  repeat?: number

  /** Number of times content is duplicated inside each set */
  multiply?: number
}

export function Marquee({
  children,
  className,
  isReverse = false,
  isPauseOnHover = false,
  orientation = "horizontal",
  duration = 30000,
  repeat = 0,
  multiply = 4,
  speed = "default",
}: MarqueeProps) {

  const speedMultiplier = speed === "default" ? 1 : Number(speed.replace("x", ""))
  
  const actualDuration = duration / speedMultiplier
  
  const childrenArray = Children.toArray(children)
  
  const repeatedChildren = Array.from({ length: multiply }).flatMap(() => childrenArray)

  type MarqueeStyle = React.CSSProperties & {
    ["--marquee-duration"]: string
  }
  
  const animationStyle: MarqueeStyle = {
    ["--marquee-duration"]: `${actualDuration}s`,
    animationIterationCount: repeat === 0 ? "infinite" : repeat,
  }

  return (
    <div className={cn("group overflow-hidden relative", orientation === "horizontal" ? "w-full" : "h-full", className)}>
        <div className={cn("flex will-change-transform", orientation === "horizontal" ? "w-max flex-row animate-marquee-horizontal" : "h-max flex-col animate-marquee-vertical", isReverse && "reverse", isPauseOnHover && "pause-on-hover")} style={animationStyle}>
            {[0, 1].map((set) => (
                <div key={set} className={cn("flex shrink-0", orientation === "horizontal" ? "flex-row" : "flex-col")} aria-hidden={set === 1}>
                    {repeatedChildren.map((child, index) => (
                        <Fragment key={`${set}-${index}`}>
                            {child}
                        </Fragment>
                    ))}
                </div>
            ))}
        </div>
    </div>
)}