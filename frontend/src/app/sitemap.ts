import type { MetadataRoute } from "next";
import { getAllClientSlugs } from "@/data/clients";
import { getAllServiceSlugs } from "@/data/services";
import { blogPosts } from "@/seo/blogPosts";
import { pathToAbsoluteUrl } from "@/seo/priorityPages";

export const dynamic = "force-static";

function toSitemapEntry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "weekly",
  lastModified?: string
): MetadataRoute.Sitemap[0] {
  return {
    url: pathToAbsoluteUrl(path),
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    changeFrequency,
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  // Core High-Priority Main Pages
  entries.push(toSitemapEntry("/", 1.0, "weekly"));
  entries.push(toSitemapEntry("/team/", 0.95, "weekly"));
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
