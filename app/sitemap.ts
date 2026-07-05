import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ramdhani.dev";

// Single-page site — one canonical URL. lastModified is intentionally omitted
// so the build stays deterministic (no Date.now() at build time).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
