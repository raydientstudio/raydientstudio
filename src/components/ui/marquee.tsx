"use client"

import type { ReactNode } from "react"
import { Children, Fragment, type CSSProperties, useCallback, useEffect, useRef, useState } from "react"
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
    /** Orientation of marquee movement (future-proofing: horizontal/vertical) */
    orientation?: "vertical" | "horizontal"
    /** Direction of scroll relative to orientation */
    direction?: "forward" | "backward"
    /** Duration of one full scroll cycle (ms) */
    duration: number
    /** Speed multiplier for scroll */
    speed: "default" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x"
    /** Number of times the marquee should repeat */
    repeat: number
}

/**
 * Marquee component
 * A reusable animated marquee (scrolling content) implementation.
 *
 * Key features:
 * - Auto-clones children to ensure continuous scrolling (no blank gaps).
 * - Dynamically calculates how many copies of children are needed
 *   to fill the available width.
 * - Supports resize handling via ResizeObserver.
 * - Allows customizing duration, speed multiplier, and repeat count
 *   for flexible timing control.
 */
const Marquee = (props: MarqueeProps) => {
    /** Container ref (visible viewport for marquee) */
    const containerRef = useRef<HTMLDivElement>(null)
    /** Marquee content ref (measured width of children) */
    const marqueeRef = useRef<HTMLDivElement>(null)
    /** Track if component is mounted to prevent SSR issues */
    const [isMounted, setIsMounted] = useState(false)
    /** How many copies of children are required to fill container */
    const [multiplier, setMultiplier] = useState(1)
    /** Error state for component */
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        try {
            console.log("[v0] Marquee: Component initialization started", { props })

            // Validate required props
            if (!props.children) {
                console.error("[v0] Marquee: ERROR - No children provided")
                setError("Marquee component requires children")
                return
            }

            if (!props.duration || props.duration <= 0) {
                console.error("[v0] Marquee: ERROR - Invalid duration", { duration: props.duration })
                setError("Marquee component requires a positive duration")
                return
            }

            if (!props.repeat && props.repeat !== 0) {
                console.error("[v0] Marquee: ERROR - Invalid repeat value", { repeat: props.repeat })
                setError("Marquee component requires a valid repeat value")
                return
            }

            console.log("[v0] Marquee: Props validated successfully", {
                orientation: props.orientation,
                duration: props.duration,
                speed: props.speed,
                isReverse: props.isReverse,
                isPauseOnHover: props.isPauseOnHover,
                repeat: props.repeat,
                childrenCount: Children.count(props.children),
            })

            // Clear any previous errors
            setError(null)
        } catch (err) {
            console.error("[v0] Marquee: CRITICAL ERROR in component validation", err)
            setError(err instanceof Error ? err.message : "Unknown validation error")
        }
    }, [props])

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

    /**
     * Calculate how many times the child elements need to repeat
     * so that the marquee has no empty spaces while scrolling.
     */
    const calculateWidth = useCallback(() => {
        try {
            console.log("[v0] Marquee: calculateWidth started")

            if (!containerRef.current || !marqueeRef.current) {
                console.warn("[v0] Marquee: calculateWidth - refs not available yet")
                return
            }

            const containerRect = containerRef.current.getBoundingClientRect()
            const marqueeRect = marqueeRef.current.getBoundingClientRect()

            console.log("[v0] Marquee: calculateWidth - dimensions", {
                containerWidth: containerRect.width,
                marqueeWidth: marqueeRect.width,
            })

            if (containerRect?.width && marqueeRect?.width) {
                const newMultiplier =
                    marqueeRect.width < containerRect.width ? Math.ceil(containerRect.width / marqueeRect.width) : 1

                console.log("[v0] Marquee: calculateWidth - setting multiplier", {
                    oldMultiplier: multiplier,
                    newMultiplier,
                })

                setMultiplier(newMultiplier)
            } else {
                console.warn("[v0] Marquee: calculateWidth - invalid dimensions", {
                    containerWidth: containerRect?.width,
                    marqueeWidth: marqueeRect?.width,
                })
            }
        } catch (error) {
            console.error("[v0] Marquee: ERROR in calculateWidth", error)
            // Fallback to default multiplier
            setMultiplier(1)
        }
    }, [multiplier])

    /**
     * Attach ResizeObserver to recalc widths when container or marquee resizes.
     */
    useEffect(() => {
        try {
            console.log("[v0] Marquee: ResizeObserver effect started", { isMounted })

            if (!isMounted) {
                console.log("[v0] Marquee: ResizeObserver - component not mounted yet")
                return
            }

            calculateWidth()

            if (marqueeRef.current && containerRef.current) {
                console.log("[v0] Marquee: Setting up ResizeObserver")

                const resizeObserver = new ResizeObserver((entries) => {
                    try {
                        console.log("[v0] Marquee: ResizeObserver triggered", {
                            entriesCount: entries.length,
                        })
                        calculateWidth()
                    } catch (error) {
                        console.error("[v0] Marquee: ERROR in ResizeObserver callback", error)
                    }
                })

                resizeObserver.observe(marqueeRef.current)
                resizeObserver.observe(containerRef.current)

                return () => {
                    try {
                        console.log("[v0] Marquee: Cleaning up ResizeObserver")
                        resizeObserver.disconnect()
                    } catch (error) {
                        console.error("[v0] Marquee: ERROR cleaning up ResizeObserver", error)
                    }
                }
            } else {
                console.warn("[v0] Marquee: ResizeObserver - refs not available")
            }
        } catch (error) {
            console.error("[v0] Marquee: ERROR in ResizeObserver effect", error)
        }
    }, [calculateWidth, isMounted])

    /**
     * Recalculate when children change
     */
    useEffect(() => {
        try {
            console.log("[v0] Marquee: Children change effect triggered")
            calculateWidth()
        } catch (error) {
            console.error("[v0] Marquee: ERROR in children change effect", error)
        }
    }, [children, calculateWidth])

    /**
     * Ensure we only render on client (avoids SSR mismatch issues)
     */
    useEffect(() => {
        try {
            console.log("[v0] Marquee: Setting mounted to true")
            setIsMounted(true)
        } catch (error) {
            console.error("[v0] Marquee: ERROR setting mounted state", error)
        }
    }, [])

    /**
     * Helper to multiply (clone) children based on multiplier.
     * This creates seamless, continuous scrolling.
     */
    const multiplyChildren = useCallback(
        (count: number) => {
            try {
                console.log("[v0] Marquee: multiplyChildren called", { count, multiplier })

                if (count <= 0) {
                    console.log("[v0] Marquee: multiplyChildren - count is 0 or negative")
                    return []
                }

                return [...Array(Math.max(0, count))].map((_, i) => (
                    <Fragment key={i}>
                        {Children.map(children, (child, childIndex) => {
                            try {
                                return <Fragment key={`${i}-${childIndex}`}>{child}</Fragment>
                            } catch (error) {
                                console.error("[v0] Marquee: ERROR rendering child", { i, childIndex, error })
                                return null
                            }
                        })}
                    </Fragment>
                ))
            } catch (error) {
                console.error("[v0] Marquee: ERROR in multiplyChildren", error)
                return []
            }
        },
        [children],
    )

    // Handle error state
    if (error) {
        return (
            <div className="p-4 border border-red-500 bg-red-50 text-red-700 rounded">
                <p className="font-semibold">Marquee Error</p>
                <p className="text-sm">{error}</p>
            </div>
        )
    }

    // Don't render anything on SSR until mounted
    if (!isMounted) {
        console.log("[v0] Marquee: Component not mounted yet, returning null")
        return null
    }

    try {
        /**
         * Build inline animation style from props (duration, speed, repeat)
         */
        console.log("[v0] Marquee: Building animation style", { duration, speed, repeat })

        const animationStyle: CSSProperties & { "--marquee-duration": string } = {
            "--marquee-duration": `${duration}ms`,
            animationIterationCount: repeat > 0 ? repeat : "infinite",
        }

        // Optional speed scaling (e.g., 2x = half duration)
        const speedMultiplier = Number(speed.replace("x", "")) || 1
        if (speedMultiplier > 1) {
            animationStyle["--marquee-duration"] = `${duration / speedMultiplier}ms`
            console.log("[v0] Marquee: Applied speed multiplier", {
                speedMultiplier,
                newDuration: duration / speedMultiplier,
            })
        }

        if (isDebugging) {
            console.log("[v0] Marquee props:", { orientation, duration, speed, isReverse, isPauseOnHover })
        }

        console.log("[v0] Marquee: Rendering component", {
            multiplier,
            animationStyle,
            orientation,
            className,
        })

        return (
            <div
                ref={containerRef}
                className={cn(
                    className,
                    "group gap-0 overflow-hidden flex relative w-full",
                    orientation === "horizontal" ? "flex-row" : "flex-col",
                )}
                onMouseEnter={() => {
                    try {
                        if (isDebugging && isPauseOnHover) {
                            console.log("[v0] Marquee hover enter - pausing animation")
                        }
                    } catch (error) {
                        console.error("[v0] Marquee: ERROR in onMouseEnter", error)
                    }
                }}
                onMouseLeave={() => {
                    try {
                        if (isDebugging && isPauseOnHover) {
                            console.log("[v0] Marquee hover leave - resuming animation")
                        }
                    } catch (error) {
                        console.error("[v0] Marquee: ERROR in onMouseLeave", error)
                    }
                }}
            >
                {/* First track */}
                <div
                    className={cn(
                        "flex flex-shrink-0 flex-grow-0 basis-auto min-w-full items-center",
                        orientation === "horizontal" ? "animate-marquee-horizontal flex-row" : "animate-marquee-vertical flex-col",
                        {
                            "pause-on-hover": isPauseOnHover,
                            reverse: isReverse,
                        },
                    )}
                    style={animationStyle}
                >
                    <div
                        ref={marqueeRef}
                        className={cn(
                            "flex-shrink-0 flex-grow-0 basis-auto flex min-w-fit items-center",
                            orientation === "horizontal" ? "flex-row" : "flex-col",
                        )}
                    >
                        {/* Original children */}
                        {Children.map(children, (child, i) => {
                            try {
                                return <Fragment key={i}>{child}</Fragment>
                            } catch (error) {
                                console.error("[v0] Marquee: ERROR rendering original child", { i, error })
                                return null
                            }
                        })}
                    </div>
                    {/* Fill remaining space with clones */}
                    {multiplyChildren(multiplier - 1)}
                </div>

                {/* Second track (offset for seamless loop) */}
                <div
                    className={cn(
                        "flex-shrink-0 flex-grow-0 basis-auto min-w-full flex items-center",
                        orientation === "horizontal" ? "animate-marquee-horizontal flex-row" : "animate-marquee-vertical flex-col",
                        {
                            "pause-on-hover": isPauseOnHover,
                            reverse: isReverse,
                        },
                    )}
                    style={animationStyle}
                >
                    {multiplyChildren(multiplier)}
                </div>
            </div>
        )
    } catch (error) {
        console.error("[v0] Marquee: ERROR in render phase", error)
        return (
            <div className="p-4 border border-red-500 bg-red-50 text-red-700 rounded">
                <p className="font-semibold">Marquee Render Error</p>
                <p className="text-sm">Failed to render marquee component. Check console for details.</p>
            </div>
        )
    }
}

export { Marquee }