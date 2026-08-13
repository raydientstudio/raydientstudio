import localFont from "next/font/local"

const GeistSans = localFont({
    src: [
        { path: "./Geist[wght].woff2", style: "normal", weight: "100 900" },
        { path: "./Geist-Italic[wght].woff2", style: "italic", weight: "100 900" },
    ],
    variable: "--font-geist-sans",
    display: "swap",
    preload: true,
    fallback: ["system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
    adjustFontFallback: "Arial",
})

const GeistMono = localFont({
    src: [
        { path: "./GeistMono[wght].woff2", style: "normal", weight: "100 900" },
        { path: "./GeistMono-Italic[wght].woff2", style: "italic", weight: "100 900" },
    ],
    variable: "--font-geist-mono",
    display: "swap",
    preload: true,
    fallback: ["system-ui", "Segoe UI", "Roboto", "Arial", "monospace"],
    adjustFontFallback: "Arial",
})

export { GeistSans, GeistMono }