"use client"

import type { ReactNode, CSSProperties } from "react"
import { Children, Fragment, useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type MarqueeProps = {
    /** Elements to display inside the marquee */
    children: ReactNode
    /** Additional custom CSS classes */
    className?: string
    /** Whether debugging is on or off */
    isDebugging?: boolean
    /** Whether to reverse the scroll direction */
    isReverse?: boolean
    /** Pause scrolling when hovered */
    isPauseOnHover?: boolean
    /** Orientation of marquee movement */
    orientation?: "vertical" | "horizontal"
    /** Duration of one full scroll cycle (ms) */
    duration: number
    /** Speed multiplier for scroll */
    speed: "default" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x"
    /** Number of times the marquee should repeat (0 = infinite) */
    repeat: number
}

const Marquee = (props: MarqueeProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const marqueeRef = useRef<HTMLDivElement>(null)
    const [isMounted, setIsMounted] = useState(false)
    const [multiplier, setMultiplier] = useState(1)
    const [error, setError] = useState<string | null>(null)

    const {
        children,
        className,
        isDebugging,
        isReverse,
        isPauseOnHover,
        orientation = "horizontal",
        duration,
        speed,
        repeat,
    } = props

    // Validate props
    useEffect(() => {
        if (!props.children) { setError("Marquee requires children"); return }
        if (!props.duration || props.duration <= 0) { setError("Marquee requires a positive duration"); return }
        if (props.repeat == null) { setError("Marquee requires a repeat value"); return }
        setError(null)
    }, [props])

    // Mount guard — prevents SSR mismatch
    useEffect(() => { setIsMounted(true) }, [])

    /**
     * Calculates how many times children must be cloned to fill the container.
     * No `multiplier` in deps — avoids infinite recalc loop.
     */
    const calculateWidth = useCallback(() => {
        if (!containerRef.current || !marqueeRef.current) return
        const containerRect = containerRef.current.getBoundingClientRect()
        const marqueeRect = marqueeRef.current.getBoundingClientRect()

        const containerSize = orientation === "horizontal" ? containerRect.width : containerRect.height
        const marqueeSize = orientation === "horizontal" ? marqueeRect.width : marqueeRect.height

        if (containerSize && marqueeSize) {
            setMultiplier(
                marqueeSize < containerSize ? Math.ceil(containerSize / marqueeSize) : 1
            )
        }

        if (isDebugging) {
            console.log("[Marquee] calculateWidth", { containerSize, marqueeSize })
        }
    }, [orientation, isDebugging])

    // Recalculate on mount and container/marquee resize
    useEffect(() => {
        if (!isMounted) return
        calculateWidth()
        if (!marqueeRef.current || !containerRef.current) return
        const ro = new ResizeObserver(() => calculateWidth())
        ro.observe(containerRef.current)
        ro.observe(marqueeRef.current)
        return () => ro.disconnect()
    }, [calculateWidth, isMounted])

    // Recalculate when children change
    useEffect(() => { calculateWidth() }, [children, calculateWidth])

    /**
     * Clones children `count` times.
     * Same pattern as react-fast-marquee's multiplyChildren.
     */
    const multiplyChildren = useCallback(
        (count: number) => {
            if (count <= 0) return []
            return [...Array(count)].map((_, i) => (
                <Fragment key={i}>
                    {Children.map(children, (child, j) => (
                        <Fragment key={`${i}-${j}`}>{child}</Fragment>
                    ))}
                </Fragment>
            ))
        },
        [children],
    )

    if (error) {
        return (
            <div className="p-4 border border-red-500 bg-red-50 text-red-700 rounded">
                <p className="font-semibold">Marquee Error</p>
                <p className="text-sm">{error}</p>
            </div>
        )
    }

    if (!isMounted) return null

    const speedMultiplier = Number(speed.replace("x", "")) || 1
    const actualDuration = duration / speedMultiplier

    /**
     * Both tracks share IDENTICAL animation style — no animationDelay on the second.
     *
     * Why this works (same as react-fast-marquee):
     * The container is display:flex. Track 2 sits physically at 100% offset in the
     * flex row. Both tracks animate translateX(0) → translateX(-100%) in sync.
     * As track 1 exits left, track 2 — which started one full width to the right —
     * arrives at position 0. Pure CSS, no JS timing, works on every reload.
     */
    const animationStyle: CSSProperties & { "--marquee-duration": string } = {
        "--marquee-duration": `${actualDuration}ms`,
        animationIterationCount: repeat > 0 ? repeat : "infinite",
    }

    if (isDebugging) {
        console.log("[Marquee] render", { multiplier, actualDuration, orientation, isReverse, isPauseOnHover })
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                className,
                "group overflow-hidden flex relative w-full",
                orientation === "horizontal" ? "flex-row" : "flex-col",
            )}
        >
            {/* Track 1 — contains the ref'd measurement div + fill clones */}
            <div
                className={cn(
                    "flex shrink-0 grow-0 basis-auto min-w-full items-center",
                    orientation === "horizontal"
                        ? "animate-marquee-horizontal flex-row"
                        : "animate-marquee-vertical flex-col",
                    {
                        "pause-on-hover": isPauseOnHover,
                        "reverse": isReverse,
                    },
                )}
                style={animationStyle}
            >
                {/* Measurement div — only here, in track 1 */}
                <div
                    ref={marqueeRef}
                    className={cn(
                        "shrink-0 grow-0 basis-auto flex min-w-fit items-center",
                        orientation === "horizontal" ? "flex-row" : "flex-col",
                    )}
                >
                    {Children.map(children, (child, i) => (
                        <Fragment key={i}>{child}</Fragment>
                    ))}
                </div>
                {/* Fill remaining width of track 1 with clones */}
                {multiplyChildren(multiplier - 1)}
            </div>

            {/* Track 2 — identical animation, no delay.
                Sits at 100% offset in the flex row, slides in as track 1 exits. */}
            <div
                className={cn(
                    "flex shrink-0 grow-0 basis-auto min-w-full items-center",
                    orientation === "horizontal"
                        ? "animate-marquee-horizontal flex-row"
                        : "animate-marquee-vertical flex-col",
                    {
                        "pause-on-hover": isPauseOnHover,
                        "reverse": isReverse,
                    },
                )}
                style={animationStyle}
            >
                {multiplyChildren(multiplier)}
            </div>
        </div>
    )
}

export { Marquee }