import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

// Required for `output: "export"` — these routes have no per-request data,
// so they can be generated once at build time like any other static file.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.domain}/sitemap.xml`,
  };
}
