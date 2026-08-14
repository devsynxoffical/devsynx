import type { MetadataRoute } from "next";
import { pathToAbsoluteUrl } from "@/seo/priorityPages";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/*.txt", "/_next/"],
      },
    ],
    sitemap: [
      `${pathToAbsoluteUrl("/")}sitemap/priority.xml`,
      `${pathToAbsoluteUrl("/")}sitemap/secondary.xml`,
    ],
    host: pathToAbsoluteUrl("/").replace(/\/$/, ""),
  };
}
