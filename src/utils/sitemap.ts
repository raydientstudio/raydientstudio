const SITE_URL = "https://raydientstudio.vercel.app"
const FREQUENCY = ["weekly", "monthly", "yearly"]
const PRIORITY = [1, 0.8, 0.5]
const SITEMAP = [
    {
        url: SITE_URL,
        lastModified: new Date(),
        changeFrequency: FREQUENCY[2],
        priority: PRIORITY[0]
    },
    {
        url: SITE_URL,
        lastModified: new Date(),
        changeFrequency: FREQUENCY[1],
        priority: PRIORITY[1]
    },
    {
        url: SITE_URL,
        lastModified: new Date(),
        changeFrequency: FREQUENCY[0],
        priority: PRIORITY[2]
    }
]
export default SITEMAP;