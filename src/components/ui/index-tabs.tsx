"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type TabItem = {
    id: string
    name: string
    href: string
}

interface IndexTabProps {
    tabs: TabItem[]
}

export default function IndexTab({ tabs }: IndexTabProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(undefined)
    const [activeIndex, setActiveIndex] = useState(0)
    const [hoverStyle, setHoverStyle] = useState({})
    const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" })
    const tabRefs = useRef<(HTMLAnchorElement | null)[]>([])


    useEffect(() => {
        if (hoveredIndex !== undefined) {
            const hoveredElement = tabRefs.current[hoveredIndex]
            if (hoveredElement) {
                const { offsetLeft, offsetWidth } = hoveredElement
                setHoverStyle({
                    left: `${offsetLeft}px`,
                    width: `${offsetWidth}px`,
                })
            }
        }
    }, [hoveredIndex])

    useEffect(() => {
        const activeElement = tabRefs.current[activeIndex]
        if (activeElement) {
            const { offsetLeft, offsetWidth } = activeElement
            setActiveStyle({
                left: `${offsetLeft}px`,
                width: `${offsetWidth}px`,
            })
        }
    }, [activeIndex])

    useEffect(() => {
        requestAnimationFrame(() => {
            const overviewElement = tabRefs.current[0]
            if (overviewElement) {
                const { offsetLeft, offsetWidth } = overviewElement
                setActiveStyle({
                    left: `${offsetLeft}px`,
                    width: `${offsetWidth}px`,
                })
            }
        })
    }, [])

    return (
        <div className="relative">
            {/* Hover Highlight */}
            <div
                className="absolute h-[30px] transition-all duration-300 ease-out bg-muted rounded-[6px] flex items-center"
                style={{
                    ...hoverStyle,
                    opacity: hoveredIndex !== undefined ? 1 : 0,
                }}
            />

            {/* Active Indicator */}
            <div
                className="absolute bottom-[-6px] h-[2px] bg-primary transition-all duration-300 ease-out"
                style={activeStyle}
            />

            {/* Tabs */}
            <div className="relative flex space-x-[6px] items-center">
                {tabs.map((tab, index) => (
                    <Link
                        key={tab.id}
                        href={tab.href}
                        ref={(el) => {
                            tabRefs.current[index] = el
                        }}
                        className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${index === activeIndex
                            ? "text-foreground"
                            : "text-muted-foreground"
                            }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(undefined)}
                        onClick={(e) => {
                            e.preventDefault()
                            setActiveIndex(index)
                        }}
                    >
                        <div className="text-sm leading-5 whitespace-nowrap flex items-center justify-center h-full">
                            {tab.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}