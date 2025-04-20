import type { MetadataRoute } from "next";

import { SITE_LINK } from "@/libs/data";

// Add these exports for static generation
export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_LINK,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
