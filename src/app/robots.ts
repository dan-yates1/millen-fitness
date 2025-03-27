import { MetadataRoute } from "next";

// Replace with your actual domain
const URL = "https://millen-fitness.vercel.app/";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Applies to all crawlers
      allow: "/", // Allow crawling of all content by default
      // disallow: '/private/', // Example: Disallow crawling of a specific directory
    },
    sitemap: `${URL}/sitemap.xml`, // Location of the sitemap
  };
}
