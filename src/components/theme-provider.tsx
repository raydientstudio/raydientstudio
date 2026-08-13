"use client"

import { ComponentProps } from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"

const ThemeProvider = ({ children, ...props }: ComponentProps<typeof NextThemeProvider>) => {
    return (
        <NextThemeProvider {...props}>
            {children}
        </NextThemeProvider>
    )
}
ThemeProvider.displayName = "Theme Provider";

export { ThemeProvider as default }