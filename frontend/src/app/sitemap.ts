import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/data/services";
import { blogPosts } from "@/seo/blogPosts";
import { solutionTopics } from "@/seo/solutionPages";
import {
  getPrioritySitemapEntries,
  pathToAbsoluteUrl,
  priorityBlogSlugs,
  priorityServiceSlugs,
  prioritySolutionSlugs,
} from "@/seo/priorityPages";

export const dynamic = "force-static";

const priorityServiceSet = new Set<string>(priorityServiceSlugs);
const prioritySolutionSet = new Set<string>(prioritySolutionSlugs);
const priorityBlogSet = new Set<string>(priorityBlogSlugs);

export async function generateSitemaps() {
  return [{ id: "priority" }, { id: "secondary" }];
}

function toSitemapEntry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "monthly",
  lastModified?: string
): MetadataRoute.Sitemap[0] {
  return {
    url: pathToAbsoluteUrl(path),
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    changeFrequency,
    priority,
  };
}

export default async function sitemap(props: {
  id: Promise<string> | string;
}): Promise<MetadataRoute.Sitemap> {
  const id = typeof props.id === "string" ? props.id : await props.id;

  if (id === "priority") {
    return getPrioritySitemapEntries().map(({ path, priority }) =>
      toSitemapEntry(path, priority, path === "/" ? "weekly" : "weekly")
    );
  }

  const secondary: MetadataRoute.Sitemap = [];

  for (const slug of getAllServiceSlugs()) {
    if (priorityServiceSet.has(slug)) continue;
    secondary.push(toSitemapEntry(`/services/${slug}/`, 0.55));
  }

  for (const topic of solutionTopics) {
    if (prioritySolutionSet.has(topic.slug)) continue;
    secondary.push(toSitemapEntry(`/solutions/${topic.slug}/`, 0.5));
  }

  for (const post of blogPosts) {
    if (priorityBlogSet.has(post.slug)) continue;
    secondary.push(
      toSitemapEntry(
        `/blog/${post.slug}/`,
        0.5,
        "monthly",
        post.updatedAt ?? post.publishedAt
      )
    );
  }

  return secondary;
}
