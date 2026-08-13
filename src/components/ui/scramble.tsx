"use client"

import { useRef, useState, useEffect, useCallback } from "react"

// ---------------------------------------------------------------------------
// ScrambleCycleText
// Content-only: no colors, fonts, or sizes are set here — style it entirely
// from the outside via `className` (e.g. Tailwind classes, or a CSS module)
// exactly the way you'd style any other text node.
//
// Behavior: cycles through `texts` in order. Each string sits still for
// `pauseDuration`, then every character starts scrambling at the same time
// (no left-to-right sweep) and each one locks onto its final character at
// its own randomized moment during the transition — that per-character
// stagger is what makes the settle read as smooth instead of a single
// abrupt snap. Loops back to texts[0] at the end (optional).
// ---------------------------------------------------------------------------

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?~"
const rand = () => CHARSET[Math.floor(Math.random() * CHARSET.length)]

interface ScrambleCycleTextProps {
    /** Strings to cycle through, in order. */
    texts: string[]
    /** How long (ms) each finished string stays fully visible before scrambling to the next. */
    pauseDuration?: number
    /** Delay (ms) before the first transition after mount. */
    initialDelay?: number
    /** Loop back to texts[0] after the last string, or stop there. */
    loop?: boolean
    /** How many random flickers happen (all characters at once) before settling on the next text. */
    scrambleTicks?: number
    /** Delay (ms) between each flicker. */
    tickSpeed?: number

    className?: string
    style?: React.CSSProperties
}

function ScrambleCycleText({
    texts,
    pauseDuration = 2200,
    initialDelay = 300,
    loop = true,
    scrambleTicks = 20,
    tickSpeed = 30,
    className,
    style,
}: ScrambleCycleTextProps) {
    const safeTexts = texts && texts.length > 0 ? texts : [""]

    const scrambleTimer = useRef<ReturnType<typeof setInterval> | null>(null)
    const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const indexRef = useRef(0)
    const mountedRef = useRef(true)
    const scheduleNextRef = useRef<() => void>(() => {})

    const [display, setDisplay] = useState(() => safeTexts[0])

    const clearAllTimers = useCallback(() => {
        if (scrambleTimer.current) clearInterval(scrambleTimer.current)
        if (pauseTimer.current) clearTimeout(pauseTimer.current)
        if (settleTimer.current) clearTimeout(settleTimer.current)
    }, [])

    const runScramble = useCallback(
        (nextPadded: string[], nextRaw: string) => {
            // Every character starts scrambling on tick 1 (no directional
            // sweep), but each gets its own random tick — somewhere in the
            // back half of the run — at which it locks onto its final
            // character. Random order, staggered timing = smooth cascading
            // resolve instead of everything flipping together and snapping
            // at once.
            const minSettle = Math.max(1, Math.floor(scrambleTicks * 0.4))
            const settleAt = nextPadded.map(() =>
                minSettle + Math.floor(Math.random() * (scrambleTicks - minSettle + 1))
            )

            let tick = 0
            scrambleTimer.current = setInterval(() => {
                tick++
                if (!mountedRef.current) return

                const frame = nextPadded
                    .map((target, i) => {
                        if (target === " ") return " "
                        return tick >= settleAt[i] ? target : rand()
                    })
                    .join("")
                // The leading/trailing positions here are always literal
                // padding spaces (they're never randomized, since their
                // target is " "), so trimming them is safe — it removes the
                // invisible box-width, not real content, so the parent's
                // centering always acts on the true visible width.
                setDisplay(frame.trim())

                if (tick >= scrambleTicks) {
                    if (scrambleTimer.current) clearInterval(scrambleTimer.current)
                    settleTimer.current = setTimeout(() => {
                        if (!mountedRef.current) return
                        setDisplay(nextRaw) // trim padding back to the real string
                        scheduleNextRef.current()
                    }, 60)
                }
            }, tickSpeed)
        },
        [scrambleTicks, tickSpeed]
    )

    const scheduleNext = useCallback(() => {
        pauseTimer.current = setTimeout(() => {
            if (!mountedRef.current) return

            const curIndex = indexRef.current
            const isLast = curIndex === safeTexts.length - 1
            if (isLast && !loop) return // stop, stay on last text

            const nextIndex = isLast ? 0 : curIndex + 1
            const currentText = safeTexts[curIndex]
            const nextText = safeTexts[nextIndex]
            const maxLen = Math.max(currentText.length, nextText.length)
            const paddedNext = nextText.padEnd(maxLen, " ").split("")

            indexRef.current = nextIndex
            runScramble(paddedNext, nextText)
        }, pauseDuration)
    }, [safeTexts, loop, pauseDuration, runScramble])

    useEffect(() => {
        scheduleNextRef.current = scheduleNext
    }, [scheduleNext])

    useEffect(() => {
        mountedRef.current = true
        indexRef.current = 0
        setDisplay(safeTexts[0])

        const startTimer = setTimeout(() => {
            if (safeTexts.length > 1) scheduleNext()
        }, initialDelay)

        return () => {
            mountedRef.current = false
            clearTimeout(startTimer)
            clearAllTimers()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [safeTexts.join("\u0000"), loop, pauseDuration, initialDelay])

    return (
        <span className={className} style={{ whiteSpace: "pre", ...style }}>
            {display}
        </span>
    )
}

export { ScrambleCycleText, type ScrambleCycleTextProps }