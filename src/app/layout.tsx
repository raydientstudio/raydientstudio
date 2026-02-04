import "./style.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { JetBrains_Mono, Host_Grotesk } from "@/fonts/local";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SettingsProvider } from "@/hooks/use-settings";
import { MobileMenuProvider } from "@/components/mobile-menu";
import { LayoutProvider } from "@/components/layout-provider";
import { Toaster } from "@/components/ui/toaster";
import { CookieToast } from "@/components/cookie-toast";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    OG_IMAGE, 
    VIEWPORT, 
    ROBOTS 
} from "@/utils/metadata";

export const metadata: Metadata = {
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
        images: [OG_IMAGE],
    },
    viewport: VIEWPORT,
    robots: ROBOTS,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
            <body className={`${Host_Grotesk.variable} ${JetBrains_Mono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <SettingsProvider>
                        <MobileMenuProvider>
                            <LayoutProvider>
                                <Analytics />
                                <SpeedInsights />
                                {children}
                                <Toaster />
                                <CookieToast />
                            </LayoutProvider>
                        </MobileMenuProvider>
                    </SettingsProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}