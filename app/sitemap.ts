import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wearmill.com";
  const now = new Date().toISOString();

  const blogPosts = [
    "screen-printing-vs-embroidery-vs-dtg",
    "how-to-order-custom-t-shirts",
    "promotional-products-for-trade-shows",
    "custom-t-shirt-pricing-2026",
    "screen-printing-houston-tx",
  ];

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: "2026-06-02",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
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
