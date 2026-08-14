import type { CountryTarget } from "@/seo/landingPages";

type CountryContent = {
  intro: string;
  whyOffshore: string;
  delivery: string;
  industries: string[];
};

const contentBySlug: Record<string, CountryContent> = {
  usa: {
    intro:
      "US startups and enterprises partner with Devsynx for fast MVP delivery, product engineering, and AI automation without the overhead of a large in-house team.",
    whyOffshore:
      "Teams across California, Texas, New York, and the Midwest use our Islamabad-based engineers for timezone overlap, senior technical leadership, and predictable sprint delivery.",
    delivery:
      "Typical engagements include discovery workshops, fixed-scope MVPs in 4–8 weeks, and long-term product squads with weekly demos and shared Jira boards.",
    industries: ["SaaS", "Healthcare", "Fintech", "E-commerce", "Real Estate"],
  },
  uk: {
    intro:
      "UK businesses choose Devsynx for GDPR-aware software development, modern web platforms, and AI integrations aligned with European data expectations.",
    whyOffshore:
      "We support founders and CTOs in London, Manchester, and Edinburgh with documentation-heavy delivery, clear SLAs, and English-first communication.",
    delivery:
      "Projects often start with a technical audit or MVP scope, followed by iterative releases with staging environments and production monitoring.",
    industries: ["Fintech", "EdTech", "PropTech", "Professional Services", "Retail"],
  },
  uae: {
    intro:
      "UAE companies work with Devsynx to launch customer-facing apps, internal automation, and cloud-native platforms for the Gulf market.",
    whyOffshore:
      "Our remote model fits Dubai and Abu Dhabi teams that need speed, bilingual-ready UX, and integration with regional payment and CRM tools.",
    delivery:
      "We align milestones to GST-friendly reporting, provide Arabic-ready UI foundations when needed, and ship mobile-first experiences for high mobile usage.",
    industries: ["Real Estate", "Logistics", "Hospitality", "Retail", "Government Tech"],
  },
  dubai: {
    intro:
      "Dubai-based brands rely on Devsynx for premium web experiences, mobile apps, and AI calling workflows that match local customer expectations.",
    whyOffshore:
      "From DIFC startups to established trading groups, clients value our product mindset, transparent pricing, and ability to scale teams quickly.",
    delivery:
      "Engagements include WhatsApp-ready support flows, performance-optimized Next.js sites, and integrations with HubSpot, Zoho, and custom ERPs.",
    industries: ["E-commerce", "Travel", "FMCG", "Proptech", "B2B Services"],
  },
};

const defaultContent = (country: CountryTarget): CountryContent => ({
  intro: `Businesses in ${country.name} partner with Devsynx for custom software, web applications, mobile products, and AI automation.`,
  whyOffshore:
    `Our Pakistan-based engineering hub offers cost-efficient delivery, senior architects, and overlap with ${country.name} business hours where possible.`,
  delivery:
    "We run agile sprints, share weekly progress, and deploy to AWS, Azure, or Google Cloud with security best practices.",
  industries: ["SaaS", "Healthcare", "Retail", "Logistics", "Professional Services"],
});

export function getCountryPageContent(country: CountryTarget): CountryContent {
  return contentBySlug[country.slug] ?? defaultContent(country);
}
