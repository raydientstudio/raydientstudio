"use client"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef, useCallback } from "react"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { IconDevices, IconMoonStars, IconSun } from "./mipmap/icons-theme";


const themes = ["system", "light", "dark"]

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    // Animation states - only for active, no hover
    const [activeIndex, setActiveIndex] = useState(0)
    const [activeStyle, setActiveStyle] = useState({ x: 0, width: 0 })
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([])
    const containerRef = useRef<HTMLDivElement>(null)
    const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const lastUpdateTimeRef = useRef<number>(0)

    // Throttling for mobile performance
    const THROTTLE_DELAY = 16 // ~60fps
    const ANIMATION_DURATION = 150

    // Handle mounting to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    // Update active index when theme changes
    useEffect(() => {
        if (mounted && theme) {
            const themeIndex = themes.indexOf(theme)
            if (themeIndex !== -1) {
                setActiveIndex(themeIndex)
            }
        }
    }, [theme, mounted])

    // Throttled animation update function with mobile optimizations
    const updateActiveStyle = useCallback(() => {
        if (!mounted) return

        const now = Date.now()
        if (now - lastUpdateTimeRef.current < THROTTLE_DELAY) {
            return
        }
        lastUpdateTimeRef.current = now

        // Clear any pending animation timeout
        if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current)
        }

        setIsAnimating(true)

        // Use intersection observer for better mobile performance
        const updateMeasurements = () => {
            const activeElement = itemRefs.current[activeIndex]
            const container = containerRef.current

            if (activeElement && container && activeElement.offsetParent) {
                // Force reflow for accurate measurements
                void container.offsetHeight

                // Use offsetLeft and offsetWidth for more accurate positioning relative to container
                const { offsetLeft, offsetWidth } = activeElement

                if (offsetLeft >= 0 && offsetWidth > 0) {
                    setActiveStyle({
                        x: offsetLeft,
                        width: offsetWidth,
                    })
                }
            }

            // Reset animation flag after animation completes
            animationTimeoutRef.current = setTimeout(() => {
                setIsAnimating(false)
            }, ANIMATION_DURATION)
        }

        // Use multiple RAF for mobile browser compatibility
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(updateMeasurements)
            })
        })
    }, [activeIndex, mounted])

    // Effect for the active indicator only
    useEffect(() => {
        // Debounce rapid updates
        const timeoutId = setTimeout(() => {
            updateActiveStyle()
        }, 10)

        return () => clearTimeout(timeoutId)
    }, [updateActiveStyle])

    // Add resize observer with mobile-specific handling
    useEffect(() => {
        if (!mounted || !containerRef.current) return

        let timeoutId: NodeJS.Timeout

        const resizeObserver = new ResizeObserver(() => {
            // Debounce resize events for mobile
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                updateActiveStyle()
            }, 50)
        })

        // Add orientation change listener for mobile
        const handleOrientationChange = () => {
            setTimeout(() => {
                updateActiveStyle()
            }, 100) // Delay to allow layout to settle
        }

        resizeObserver.observe(containerRef.current)
        window.addEventListener("orientationchange", handleOrientationChange)

        return () => {
            resizeObserver.disconnect()
            clearTimeout(timeoutId)
            window.removeEventListener("orientationchange", handleOrientationChange)
        }
    }, [mounted, updateActiveStyle])

    // Cleanup animation timeout on unmount
    useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current)
            }
        }
    }, [])

    const handleThemeChange = (newTheme: string) => {
        // Prevent rapid successive calls
        if (isAnimating) return

        const index = themes.indexOf(newTheme)
        if (index !== -1) {
            setTheme(newTheme)
            setActiveIndex(index)
        }
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
            className="flex flex-row items-center border border-border bg-surface rounded-md relative"
            style={{
                contain: "layout style", // Enhanced containment for mobile
                touchAction: "manipulation", // Optimize touch handling
            }}
        >
            {/* Active Highlight with mobile-optimized transitions */}
            <div
                className="absolute top-0 bottom-0 ease-out bg-secondary rounded-[5.5px] flex items-center"
                style={{
                    transform: `translate3d(${activeStyle.x}px, 0, 0)`, // Use translate3d for hardware acceleration
                    width: `${activeStyle.width}px`,
                    opacity: activeStyle.width > 0 ? 1 : 0,
                    transition: isAnimating ? "all 0.150s ease-out" : "none",
                    willChange: isAnimating ? "transform, width" : "auto", // Dynamic will-change
                    backfaceVisibility: "hidden", // Prevent flickering on mobile
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