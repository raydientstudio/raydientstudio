import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_DISPLAY, SITE_ICONS, SITE_NAME, SITE_SHORT_NAME, SITE_START_URL } from "@/utils/manifest";

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