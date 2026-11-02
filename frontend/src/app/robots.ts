import type { MetadataRoute } from "next";
import { pathToAbsoluteUrl } from "@/seo/priorityPages";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://devsynx.com/sitemap.xml",
  };
}
