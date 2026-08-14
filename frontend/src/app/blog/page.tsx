import type { Metadata } from "next";
import { BlogHubContent } from "@/components/BlogHubContent";
import { blogIntentKeywords, brandVariantKeywords } from "@/seo/keywords";
import { buildPageMetadata, buildWebPageSchema } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Software, AI & Automation Blog",
  description:
    "Read practical guides from Devsynx on software development, AI automation, cloud migration, MVPs, and growth-focused product engineering.",
  path: "/blog/",
  keywords: [
    "software development blog",
    "ai automation guides",
    "mvp development tips",
    ...blogIntentKeywords.slice(0, 12),
    ...brandVariantKeywords,
  ],
  ogImageAlt: "Devsynx Blog",
});

export default function BlogPage() {
  const webPageSchema = buildWebPageSchema({
    title: "Software, AI & Automation Blog",
    description:
      "Read practical guides from Devsynx on software development, AI automation, cloud migration, MVPs, and growth-focused product engineering.",
    path: "/blog/",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <BlogHubContent />
    </>
  );
}
