import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/seo/metadata";
import { homeFaqs } from "@/seo/homeContent";
import { pathToAbsoluteUrl, priorityPageLinks } from "@/seo/priorityPages";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Software Development Company and AI | DEVSYNX",
  },
  description:
    "DEVSYNX builds custom software, AI automation, web and mobile apps for startups and growing companies in the US, UK and Pakistan. Book a free call.",
  alternates: {
    canonical: pathToAbsoluteUrl("/"),
  },
};

const faqSchema = buildFaqSchema(homeFaqs);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
]);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priorityPagesSchema) }}
      />
      <HomePage />
    </>
  );
}
