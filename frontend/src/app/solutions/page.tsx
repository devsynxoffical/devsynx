import type { Metadata } from "next";
import { SolutionsHubContent } from "@/components/SolutionsHubContent";
import { brandVariantKeywords, coreIntentKeywords } from "@/seo/keywords";
import { buildPageMetadata, buildWebPageSchema } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Software, Web Development & AI Solutions Library",
  description:
    "Explore Devsynx solution pages for software development, web development, AI automation, cloud, SaaS, and product engineering services.",
  path: "/solutions/",
  keywords: [
    "software solutions",
    "web development solutions",
    "ai automation services",
    "mvp development company",
    ...coreIntentKeywords.slice(0, 10),
    ...brandVariantKeywords,
  ],
  ogImageAlt: "Devsynx Solutions",
});

export default function SolutionsHubPage() {
  const webPageSchema = buildWebPageSchema({
    title: "Software, Web Development & AI Solutions Library",
    description:
      "Explore Devsynx solution pages for software development, web development, AI automation, cloud, SaaS, and product engineering services.",
    path: "/solutions/",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <SolutionsHubContent />
    </>
  );
}
