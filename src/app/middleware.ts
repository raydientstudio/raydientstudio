import type { MetadataRoute } from "next";

const SITE_NAME = 'Raydient Studio';
const SITE_SHORT_NAME = 'Raydient';
const SITE_DESCRIPTION = 'Premium Web Design Agency - Your Strategic Design Partner for AI, SaaS, Tech, and Startups.';
const SITE_START_URL = '/';
const SITE_DISPLAY = 'standalone';
const SITE_ICONS = [
    {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
    },
    {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
    },
    {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
    }
];

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_NAME,
        short_name: SITE_SHORT_NAME,
        description: SITE_DESCRIPTION,
        start_url: SITE_START_URL,
        display: SITE_DISPLAY,
        icons: [...SITE_ICONS]
    }
}