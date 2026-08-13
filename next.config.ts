import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    // Allowed origins for development mode (e.g., for local development).
    // allowedDevOrigins: ["10.26.229.41"],
    allowedDevOrigins: ["10.216.97.41"],
    // Enable React Strict Mode for highlighting potential issues in the application.
    reactStrictMode: true,
    // Allow images from Vercel domains (e.g., for deployment previews).
    images: {
        // Configure remote patterns to allow images from Vercel domains.
        remotePatterns: [
            { protocol: "https", hostname: "*.vercel.app" },
            { protocol: "https", hostname: "github.com" },
        ],
    },
    // Enable source maps in production for better debugging of production issues.
    productionBrowserSourceMaps: true,
    typescript: {
        // !! WARN !!
        // This will allow production builds to successfully complete even if there are type errors.
        ignoreBuildErrors: false,
    },
    experimental: {
        serverActions: {
            // Set a body size limit for server actions to prevent excessively large payloads.
        },
        // Enable the use of Lightning CSS for faster and more efficient CSS processing.
        useLightningcss: true,
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig);