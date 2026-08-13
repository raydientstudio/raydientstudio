import "@/styles/globals.css";
import { ReactNode } from "react";
import { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SettingsProvider } from "@/hooks/use-settings";
import { Toaster } from "@/components/ui/toaster";
import {
    SITE_NAME,
    SITE_USERNAME,
    SITE_DESCRIPTION,
    SITE_URL,
    SITE_TITLE,
    KEYWORDS,
    CREATOR,
    PUBLISHER,
    MANIFEST,
    SITE_ICON,
    OG_IMAGES,
    SITE_LOCALE,
    OG_TYPE,
    OG_CARD,
    ROBOTS
} from "@/utils/metadata";
import VIEWPORT from "@/utils/viewport";
import ThemeProvider from "@/components/theme-provider";
import { CookieToast, MobileMenuProvider, Header, Footer } from "@/components";
import { GeistSans, GeistMono } from "@/fonts/local";
import LayoutProvider from "@/components/layout-provider";

const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    keywords: KEYWORDS,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: CREATOR,
    publisher: PUBLISHER,
    alternates: {
        canonical: SITE_URL,
    },
    manifest: MANIFEST,
    icons: SITE_ICON,
    openGraph: {
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        siteName: SITE_NAME,
        images: OG_IMAGES,
        locale: SITE_LOCALE,
        type: OG_TYPE,
    },
    twitter: {
        card: OG_CARD,
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        creator: SITE_USERNAME,
        site: SITE_USERNAME,
        images: OG_IMAGES,
    },
    robots: ROBOTS,
};

const viewport: Viewport = VIEWPORT;

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang={"en"} suppressHydrationWarning suppressContentEditableWarning>
            <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
                <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem disableTransitionOnChange>
                    <SettingsProvider>
                        <MobileMenuProvider>
                            <LayoutProvider>
                                <Analytics />
                                <SpeedInsights />
                                {children}
                                <Toaster />
                            </LayoutProvider>
                        </MobileMenuProvider>
                    </SettingsProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

export { Layout as default, metadata, viewport };