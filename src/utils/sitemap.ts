import { MetadataRoute } from "next";

const SITE_URL = "https://rivele.vercel.app";
const APP_ROUTE = [
    "/",
    "/docs",
    "/studio",
    "/architecture",
    "/portfolio",
] as const;
const FREQUENCY = [
    "always",
    "hourly",
    "daily",
    "weekly",
    "monthly",
    "yearly",
    "never",
] as const;
const PRIORITY = [1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1] as const;
const SITEMAP: MetadataRoute.Sitemap = [
    {
        url: `${SITE_URL}${APP_ROUTE[0]}`,
        lastModified: new Date(),
        changeFrequency: FREQUENCY[0],
        priority: PRIORITY[0],
    },
    {
        url: `${SITE_URL}${APP_ROUTE[1]}`,
        lastModified: new Date(),
        changeFrequency: FREQUENCY[1],
        priority: PRIORITY[1],
    },
    {
        url: `${SITE_URL}${APP_ROUTE[2]}`,
        lastModified: new Date(),
        changeFrequency: FREQUENCY[2],
        priority: PRIORITY[2],
    },
    {
        url: `${SITE_URL}${APP_ROUTE[3]}`,
        lastModified: new Date(),
        changeFrequency: FREQUENCY[3],
        priority: PRIORITY[3],
    },
    {
        url: `${SITE_URL}${APP_ROUTE[4]}`,
        lastModified: new Date(),
        changeFrequency: FREQUENCY[4],
        priority: PRIORITY[4],
    },
];

export default SITEMAP;
