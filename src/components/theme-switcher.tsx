"use client"
import { useTheme } from "next-themes"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { IconDevices, IconMoonStars, IconSun } from "../icons/icons-theme"

const themes = ["system", "light", "dark"]
const ANIMATION_DURATION = 150

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [activeStyle, setActiveStyle] = useState({ x: 0, width: 0 })

    const itemRefs = useRef<(HTMLButtonElement | null)[]>([])
    const containerRef = useRef<HTMLDivElement>(null)
    const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const firstMeasureRef = useRef(true)

    // Handle mounting to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    const activeIndex = mounted && theme ? themes.indexOf(theme) : -1

    function measure() {
        const activeElement = itemRefs.current[activeIndex]
        const container = containerRef.current
        if (!activeElement || !container) return

        const { offsetLeft, offsetWidth } = activeElement
        if (offsetWidth <= 0) return

        setActiveStyle({ x: offsetLeft, width: offsetWidth })
    }

    // Re-measure the highlight whenever the active theme changes.
    // useLayoutEffect (not a debounced effect) so the measurement happens
    // synchronously before paint - no throttling needed for a once-per-click update.
    useLayoutEffect(() => {
        if (!mounted || activeIndex === -1) return

        // Skip the transition on the very first measurement so the pill
        // doesn't animate in from the corner on initial mount.
        setIsAnimating(!firstMeasureRef.current)
        firstMeasureRef.current = false

        measure()

        if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current)
        animationTimeoutRef.current = setTimeout(() => setIsAnimating(false), ANIMATION_DURATION)

        return () => {
            if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex, mounted])

    // Re-measure on container resize. ResizeObserver already fires on
    // orientation change (the container's box changes size), so a separate
    // orientationchange listener isn't needed.
    useEffect(() => {
        if (!mounted || !containerRef.current) return

        const resizeObserver = new ResizeObserver(() => measure())
        resizeObserver.observe(containerRef.current)

        return () => resizeObserver.disconnect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted, activeIndex])

    function handleThemeChange(newTheme: string) {
        if (!newTheme || newTheme === theme) return
        setTheme(newTheme)
    }

    // Don't render until mounted to avoid hydration issues
    if (!mounted) {
        return (
            <div className="flex flex-row items-center border border-border bg-surface rounded-md">
                <div className="flex opacity-0" />
            </div>
        )
    }

    return (
        <div
            ref={containerRef}
            className="flex flex-row items-center border border-border bg-surface rounded-sm relative"
            style={{
                contain: "layout style",
                touchAction: "manipulation",
            }}
        >
            {/* Active highlight */}
            <div
                className="absolute top-0 bottom-0 bg-secondary rounded-[3.5px] flex items-center"
                style={{
                    transform: `translate3d(${activeStyle.x}px, 0, 0)`,
                    width: `${activeStyle.width}px`,
                    opacity: activeStyle.width > 0 ? 1 : 0,
                    transition: isAnimating
                        ? "transform 0.150s ease-out, width 0.150s ease-out"
                        : "none",
                    willChange: isAnimating ? "transform, width" : "auto",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                }}
            />

            <ToggleGroup
                type="single"
                size="sm"
                value={theme}
                onValueChange={handleThemeChange}
                className="m-0 relative"
            >
                <ToggleGroupItem
                    ref={(el) => {
                        itemRefs.current[0] = el
                    }}
                    value="system"
                    aria-label="System"
                    className="bg-transparent data-[state=on]:bg-transparent hover:bg-transparent rounded-[5.5px] relative z-10 touch-manipulation"
                >
                    <IconDevices />
                </ToggleGroupItem>
                <ToggleGroupItem
                    ref={(el) => {
                        itemRefs.current[1] = el
                    }}
                    value="light"
                    aria-label="Light"
                    className="bg-transparent data-[state=on]:bg-transparent hover:bg-transparent rounded-[5.5px] relative z-10 touch-manipulation"
                >
                    <IconSun />
                </ToggleGroupItem>
                <ToggleGroupItem
                    ref={(el) => {
                        itemRefs.current[2] = el
                    }}
                    value="dark"
                    aria-label="Dark"
                    className="bg-transparent data-[state=on]:bg-transparent hover:bg-transparent rounded-[5.5px] relative z-10 touch-manipulation"
                >
                    <IconMoonStars />
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    )
}
