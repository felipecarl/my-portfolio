import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

// Required for `output: "export"` — see app/robots.ts for why.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.domain,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.domain}/projects/pr-tracker`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
