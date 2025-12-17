const SITE_NAME = "Raydient Studio";
const SITE_USERNAME = "@raydientstudio";
const SITE_DESCRIPTION = "Raydient Studio is a premium web design agency specializing in minimalism, branding, and digital experiences for AI, SaaS, Tech, and Startups.";
const SITE_URL = "https://raydientstudio.vercel.app";
const SITE_TITLE = {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
};
const SITE_ICON = {
    icon: [
        { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
};
const SITE_LOCALE = "en_US";
const CREATOR = "Raydient Studio";
const PUBLISHER = "Raydient Studio";
const KEYWORDS = [
    "raydient",
    "raydient studio",
    "raydientstudio",
    "web design",
    "branding",
    "minimalism",
    "digital agency",
    "UI/UX design",
    "SaaS design",
    "startup design",
    "AI design",
    "tech design",
]
const MANIFEST = "/manifest.ts";
const OG_CARD = "summary_large_image";
const OG_TYPE = "website";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const OG_IMAGES = [{
    url: OG_IMAGE,
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: `${SITE_NAME} - Premium Web Design Agency`,
}]
const VIEWPORT = {
    width: "device-width",
    initialScale: 1,
};
const ROBOTS = {
    index: true,
    follow: true,
};

export { 
    SITE_NAME, 
    SITE_USERNAME, 
    SITE_DESCRIPTION, 
    SITE_URL, 
    SITE_TITLE, 
    SITE_ICON, 
    SITE_LOCALE, 
    CREATOR, 
    PUBLISHER, 
    KEYWORDS, 
    MANIFEST, 
    OG_CARD, 
    OG_TYPE, 
    OG_IMAGE, 
    OG_IMAGES, 
    VIEWPORT, 
    ROBOTS 
};