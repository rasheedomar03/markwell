import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wearmill.com";
  const now = new Date().toISOString();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/privacy`,
      lastModified: "2026-05-23",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: "2026-05-23",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
