import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { buildFaqSchema } from "@/seo/metadata";
import { homeFaqs } from "@/seo/homeContent";
import { pathToAbsoluteUrl, priorityPageLinks } from "@/seo/priorityPages";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Software Development & AI Solutions | Devsynx",
  },
  description:
    "Devsynx builds custom software, AI systems, and SaaS products that drive real business growth. MVP delivered in under 30 days. Trusted by 50+ clients worldwide.",
  alternates: {
    canonical: pathToAbsoluteUrl("/"),
  },
};

const faqSchema = buildFaqSchema(homeFaqs);

const priorityPagesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Devsynx priority pages",
  numberOfItems: priorityPageLinks.length,
  itemListElement: priorityPageLinks.map((link, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: link.label,
    url: pathToAbsoluteUrl(link.href),
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priorityPagesSchema) }}
      />
      <HomePage />
    </>
  );
}
