import type { MetadataRoute } from "next";

import { SITE_LINK } from "@/libs/data";

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
