import type { MetadataRoute } from "next";
import { getAllClientSlugs } from "@/data/clients";
import { getAllServiceSlugs } from "@/data/services";
import { blogPosts } from "@/seo/blogPosts";
import { pathToAbsoluteUrl } from "@/seo/priorityPages";
import { localPages } from "@/seo/localPages";
import { toolPages } from "@/seo/toolPages";

export const dynamic = "force-static";

/**
 * Date of the last meaningful site-wide content change. Update it when page
 * content actually changes; do not use the build time, because a lastmod that
 * changes on every deploy teaches search engines to ignore it.
 */
const SITE_CONTENT_UPDATED = "2026-11-07";

function toSitemapEntry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "weekly",
  lastModified?: string
): MetadataRoute.Sitemap[0] {
  return {
    url: pathToAbsoluteUrl(path),
    lastModified: new Date(lastModified ?? SITE_CONTENT_UPDATED),
    changeFrequency,
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  // Core High-Priority Main Pages
  entries.push(toSitemapEntry("/", 1.0, "weekly"));
  entries.push(toSitemapEntry("/team/", 0.95, "weekly"));
  entries.push(toSitemapEntry("/careers/", 0.7, "weekly"));
  entries.push(toSitemapEntry("/clients/", 0.95, "weekly"));
  entries.push(toSitemapEntry("/portfolio/", 0.95, "weekly"));
  entries.push(toSitemapEntry("/portfolio/mobile-applications/", 0.92, "weekly"));
  entries.push(toSitemapEntry("/portfolio/software/", 0.92, "weekly"));
  entries.push(toSitemapEntry("/portfolio/seo-results/", 0.92, "weekly"));
  entries.push(toSitemapEntry("/portfolio/digital-marketing/", 0.92, "weekly"));
  entries.push(toSitemapEntry("/portfolio/ui-ux/", 0.92, "weekly"));
  entries.push(toSitemapEntry("/services/", 0.95, "weekly"));
  entries.push(toSitemapEntry("/about/", 0.95, "weekly"));
  entries.push(toSitemapEntry("/contact/", 0.95, "weekly"));
  entries.push(toSitemapEntry("/blog/", 0.90, "weekly"));

  // Top-Tier International Country Hubs
  entries.push(toSitemapEntry("/usa/", 0.95, "weekly"));
  entries.push(toSitemapEntry("/uk/", 0.95, "weekly"));
  entries.push(toSitemapEntry("/uae/", 0.95, "weekly"));
  entries.push(toSitemapEntry("/germany/", 0.95, "weekly"));
  entries.push(toSitemapEntry("/canada/", 0.95, "weekly"));
  entries.push(toSitemapEntry("/australia/", 0.95, "weekly"));

  // Regional Pakistan Hubs
  entries.push(toSitemapEntry("/software-house-islamabad/", 0.90, "weekly"));
  entries.push(toSitemapEntry("/software-house-rawalpindi/", 0.90, "weekly"));
  entries.push(toSitemapEntry("/web-development-islamabad/", 0.90, "weekly"));
  entries.push(toSitemapEntry("/seo-services-islamabad/", 0.90, "weekly"));
  entries.push(toSitemapEntry("/digital-marketing-agency-islamabad/", 0.90, "weekly"));

  // City, international and global service landing pages (seo/localPages.ts)
  entries.push(toSitemapEntry("/tools/", 0.85, "monthly"));
  entries.push(toSitemapEntry("/locations/", 0.85, "weekly"));
  for (const tool of toolPages) {
    entries.push(toSitemapEntry(tool.path, 0.92, "monthly"));
  }
  for (const page of localPages) {
    entries.push(toSitemapEntry(page.path, page.group === "global" ? 0.92 : 0.9, "weekly"));
  }

  // 71 Client Case Study Pages (High SEO priority for client name / domain discovery)
  for (const slug of getAllClientSlugs()) {
    entries.push(toSitemapEntry(`/clients/${slug}/`, 0.88, "monthly"));
  }

  // 20 Specialized Service Pages
  const addedServices = new Set<string>();
  for (const slug of getAllServiceSlugs()) {
    if (addedServices.has(slug)) continue;
    addedServices.add(slug);
    entries.push(toSitemapEntry(`/services/${slug}/`, 0.85, "monthly"));
  }

  // Blog Posts
  for (const post of blogPosts) {
    entries.push(
      toSitemapEntry(
        `/blog/${post.slug}/`,
        0.80,
        "monthly",
        post.updatedAt ?? post.publishedAt
      )
    );
  }

  return entries;
}
