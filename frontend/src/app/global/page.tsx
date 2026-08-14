import type { Metadata } from "next";
import { GlobalHubContent } from "@/components/GlobalHubContent";
import { brandVariantKeywords, quickWinKeywords } from "@/seo/keywords";
import { buildPageMetadata, buildWebPageSchema } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Global Software, Web Development & AI Automation Services",
  description:
    "Explore Devsynx services by region. Discover web development, software development, and AI automation solutions for global businesses.",
  path: "/global/",
  keywords: [
    "global software development",
    "offshore development services",
    "international web development",
    ...quickWinKeywords.slice(0, 8),
    ...brandVariantKeywords,
  ],
  ogImageAlt: "Devsynx Global Services",
});

export default function GlobalPagesHub() {
  const webPageSchema = buildWebPageSchema({
    title: "Global Software, Web Development & AI Automation Services",
    description:
      "Explore Devsynx services by region. Discover web development, software development, and AI automation solutions for global businesses.",
    path: "/global/",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <GlobalHubContent />
    </>
  );
}
