"use client"

import { useEffect, useState, useRef, useCallback, ReactNode, createContext, useContext } from "react"

interface TabItem {
    value: string
    label: string
}

interface TabsContextType {
    activeTab: string
    onTabChange: (value: string) => void
}

const TabsContext = createContext<TabsContextType | null>(null)

export function useActiveTab() {
    const context = useContext(TabsContext)
    if (!context) {
        throw new Error("useActiveTab must be used within AnimatedTabs")
    }
    return context
}

interface AnimatedTabsProps {
    tabs: TabItem[]
    defaultValue?: string
    onValueChange?: (value: string) => void
    children: ReactNode
}

export function AnimatedTabs({
    tabs,
    defaultValue,
    onValueChange,
    children,
}: AnimatedTabsProps) {
    // Initialize with the proper value right away
    const initialValue = defaultValue || tabs?.[0]?.value || ""
    const [activeTab, setActiveTab] = useState<string>(initialValue)
    const [activeStyle, setActiveStyle] = useState({ x: 0, width: 0 })
    const [isAnimating, setIsAnimating] = useState(false)
    const [hoveredTab, setHoveredTab] = useState<string | null>(null)
    const [mounted, setMounted] = useState(false)

    const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({})
    const containerRef = useRef<HTMLDivElement>(null)
    const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const lastUpdateTimeRef = useRef<number>(0)

    const THROTTLE_DELAY = 16
    const ANIMATION_DURATION = 150

    // Handle mounting to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    // Update activeTab if defaultValue changes
    useEffect(() => {
        if (defaultValue && defaultValue !== activeTab) {
            setActiveTab(defaultValue)
        }
    }, [defaultValue])

    // Update active style when active tab changes
    const updateActiveStyle = useCallback(() => {
        if (!mounted) return

        const now = Date.now()
        if (now - lastUpdateTimeRef.current < THROTTLE_DELAY) {
            return
        }
        lastUpdateTimeRef.current = now

        if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current)
        }

        setIsAnimating(true)

        const updateMeasurements = () => {
            const activeElement = itemRefs.current[activeTab]
            const container = containerRef.current

            if (activeElement && container && activeElement.offsetParent) {
                void container.offsetHeight

                const { offsetLeft, offsetWidth } = activeElement

                if (offsetLeft >= 0 && offsetWidth > 0) {
                    setActiveStyle({
                        x: offsetLeft,
                        width: offsetWidth,
                    })
                }
            }

            animationTimeoutRef.current = setTimeout(() => {
                setIsAnimating(false)
            }, ANIMATION_DURATION)
        }

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(updateMeasurements)
            })
        })
    }, [activeTab, mounted])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            updateActiveStyle()
        }, 10)

        return () => clearTimeout(timeoutId)
    }, [updateActiveStyle])

    // Handle resize observer
    useEffect(() => {
        if (!mounted || !containerRef.current) return

        let timeoutId: NodeJS.Timeout

        const resizeObserver = new ResizeObserver(() => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                updateActiveStyle()
            }, 50)
        })

        resizeObserver.observe(containerRef.current)
        window.addEventListener("orientationchange", () => {
            setTimeout(() => {
                updateActiveStyle()
            }, 100)
        })

        return () => {
            resizeObserver.disconnect()
            clearTimeout(timeoutId)
        }
    }, [mounted, updateActiveStyle])

    useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current)
            }
        }
    }, [])

    const handleTabChange = (value: string) => {
        console.log("[v0] handleTabChange called with value:", value)
        setActiveTab(value)
        onValueChange?.(value)
    }

    if (!mounted) {
        return (
            <div className="w-full">
                <div className="flex border-b border-border opacity-0" />
            </div>
        )
    }

    return (
        <TabsContext.Provider value={{ activeTab, onTabChange: handleTabChange }}>
            {children}
        </TabsContext.Provider>
    )
}

interface TabsListProps {
    className?: string
    children: ReactNode
}

const TabsListContext = createContext<{
    activeTab: string
    registerButton: (value: string, element: HTMLButtonElement) => void
    unregisterButton: (value: string) => void
} | null>(null)

export function TabsList({ className, children }: TabsListProps) {
    const context = useContext(TabsContext)
    if (!context) {
        throw new Error("TabsList must be used within AnimatedTabs")
    }

    const { activeTab } = context
    const [activeStyle, setActiveStyle] = useState({ x: 0, width: 0 })
    const [isAnimating, setIsAnimating] = useState(false)
    const [mounted, setMounted] = useState(false)

    const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({})
    const containerRef = useRef<HTMLDivElement>(null)
    const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const lastUpdateTimeRef = useRef<number>(0)

    const THROTTLE_DELAY = 16
    const ANIMATION_DURATION = 150

    useEffect(() => {
        setMounted(true)
    }, [])

    const updateActiveStyle = useCallback(() => {
        if (!mounted) return

        const now = Date.now()
        if (now - lastUpdateTimeRef.current < THROTTLE_DELAY) {
            return
        }
        lastUpdateTimeRef.current = now

        if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current)
        }

        setIsAnimating(true)

        const updateMeasurements = () => {
            const activeElement = itemRefs.current[activeTab]
            const container = containerRef.current

            if (activeElement && container && activeElement.offsetParent) {
                void container.offsetHeight

                const { offsetLeft, offsetWidth } = activeElement

                if (offsetLeft >= 0 && offsetWidth > 0) {
                    setActiveStyle({
                        x: offsetLeft,
                        width: offsetWidth,
                    })
                }
            }

            animationTimeoutRef.current = setTimeout(() => {
                setIsAnimating(false)
            }, ANIMATION_DURATION)
        }

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(updateMeasurements)
            })
        })
    }, [activeTab, mounted])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            updateActiveStyle()
        }, 10)

        return () => clearTimeout(timeoutId)
    }, [updateActiveStyle])

    useEffect(() => {
        if (!mounted || !containerRef.current) return

        let timeoutId: NodeJS.Timeout

        const resizeObserver = new ResizeObserver(() => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                updateActiveStyle()
            }, 50)
        })

        resizeObserver.observe(containerRef.current)
        window.addEventListener("orientationchange", () => {
            setTimeout(() => {
                updateActiveStyle()
            }, 100)
        })

        return () => {
            resizeObserver.disconnect()
            clearTimeout(timeoutId)
        }
    }, [mounted, updateActiveStyle])

    useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current)
            }
        }
    }, [])

    if (!mounted) {
        return <div className="w-full opacity-0" />
    }

    const registerButton = (value: string, element: HTMLButtonElement) => {
        itemRefs.current[value] = element
    }

    const unregisterButton = (value: string) => {
        delete itemRefs.current[value]
    }

    return (
        <TabsListContext.Provider value={{ activeTab, registerButton, unregisterButton }}>
            <div
                ref={containerRef}
                // full width on mobile, shrink-to-fit on md+ (inline-flex so children layout correctly)
                className={`relative w-full md:w-auto md:inline-flex ${className || ""}`}
                 style={{
                     contain: "layout style",
                 }}
             >
                 {/* Active background indicator */}
                 <div
                     className="absolute top-0 h-full bg-muted rounded-sm"
                     style={{
                         transform: `translate3d(${activeStyle.x}px, 0, 0)`,
                         width: `${activeStyle.width}px`,
                         opacity: activeStyle.width > 0 ? 1 : 0,
                         transition: isAnimating ? "all 0.150s ease-out" : "none",
                         willChange: isAnimating ? "transform, width" : "auto",
                         backfaceVisibility: "hidden",
                         WebkitBackfaceVisibility: "hidden",
                         pointerEvents: "none",
                     }}
                 />
 
                 {/* Tab buttons */}
                 {/* make the group full-width on mobile so children can stretch; on md+ allow natural width */}
                 <div className="flex w-full md:w-auto gap-4">{children}</div>
             </div>
         </TabsListContext.Provider>
     )
}

interface TabsTriggerProps {
    value: string
    children: ReactNode
    className?: string
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
    const context = useContext(TabsContext)
    const listContext = useContext(TabsListContext)
    if (!context) {
        throw new Error("TabsTrigger must be used within AnimatedTabs")
    }

    console.log("[v0] TabsTrigger rendering - value:", value)
    const { activeTab, onTabChange } = context
    const [hoveredTab, setHoveredTab] = useState<string | null>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (buttonRef.current && listContext) {
            listContext.registerButton(value, buttonRef.current)
            return () => {
                listContext.unregisterButton(value)
            }
        }
    }, [value, listContext])

    return (
        <button
            ref={buttonRef}
            onClick={() => onTabChange(value)}
            onMouseEnter={() => setHoveredTab(value)}
            onMouseLeave={() => setHoveredTab(null)}
            // flex-1 on mobile so tabs evenly stretch; md:flex-none to size to content on larger screens
            className={`relative flex-1 md:flex-none px-2 py-1.5 text-sm font-medium whitespace-nowrap break-normal overflow-hidden text-ellipsis transition-colors duration-200 rounded-xs ${activeTab === value
                 ? "text-foreground"
                 : hoveredTab === value
                     ? "text-foreground/80"
                     : "text-foreground/60 hover:text-foreground/80"
                 } ${className || ""}`}
         >
             {children}
         </button>
     )
}

interface TabsContentProps {
    value: string
    children: ReactNode
    className?: string
}

export function TabsContent({ value, children, className }: TabsContentProps) {
    const context = useContext(TabsContext)
    if (!context) {
        throw new Error("TabsContent must be used within AnimatedTabs")
    }

    const { activeTab } = context

    console.log("[v0] TabsContent - value:", value, "activeTab:", activeTab, "match:", activeTab === value)

    // Show content only if activeTab matches this tab's value
    if (activeTab !== value) {
        return null
    }

    return (
        <div className={`transition-all duration-200 ${className || ""}`}>
            {children}
        </div>
    )
}

// Export Tabs as an alias for AnimatedTabs for common shadcn pattern
export const Tabs = AnimatedTabs