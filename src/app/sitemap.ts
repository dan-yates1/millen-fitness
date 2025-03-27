import { MetadataRoute } from "next";

// Replace with your actual domain
const URL = "https://millen-fitness.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${URL}/programs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly", // Assuming blog updates more often
      priority: 0.7,
    },
    // Add other static pages here if needed
    // e.g., { url: `${URL}/about`, lastModified: new Date(), ... }

    // Dynamic routes (like blog posts) would need to be fetched and added here
  ];
}
