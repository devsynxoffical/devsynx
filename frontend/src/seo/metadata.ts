import type { Metadata } from "next";
import { pathToAbsoluteUrl } from "./priorityPages";

export const SITE_NAME = "DEVSYNX";
export const TWITTER_HANDLE = "@devsynx";

export const DEFAULT_OG_IMAGE = {
  url: "/logo.png",
  width: 512,
  height: 512,
  alt: "DEVSYNX | Custom Software & AI Solutions",
  type: "image/png",
} as const;

export const ORGANIZATION_SAME_AS = [
  "https://www.instagram.com/devsynx.official/",
  "https://www.linkedin.com/company/devsynx-offial/",
] as const;

export const ORGANIZATION_AREA_SERVED = [
  { "@type": "Country" as const, name: "United States" },
  { "@type": "Country" as const, name: "United Kingdom" },
  { "@type": "Country" as const, name: "United Arab Emirates" },
  { "@type": "Country" as const, name: "Canada" },
  { "@type": "Country" as const, name: "Australia" },
  { "@type": "Country" as const, name: "Germany" },
  { "@type": "Country" as const, name: "France" },
  { "@type": "Country" as const, name: "Singapore" },
  { "@type": "Country" as const, name: "Saudi Arabia" },
  { "@type": "Country" as const, name: "Pakistan" },
];

type BuildPageMetadataOptions = {
  /** Page title without the site suffix — root template appends " | Devsynx" */
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  robots?: Metadata["robots"];
  ogType?: "website" | "article";
  ogImageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  includeCanonical?: boolean;
};

/** Consistent canonical, Open Graph, and Twitter metadata for every route */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  robots = { index: true, follow: true },
  ogType = "website",
  ogImageAlt,
  publishedTime,
  modifiedTime,
  includeCanonical = true,
}: BuildPageMetadataOptions): Metadata {
  const canonical = pathToAbsoluteUrl(path);
  const cleanTitle = title.replace(/\s*\|\s*Devsynx\s*$/i, "").trim();
  const fullTitle = `${cleanTitle} | ${SITE_NAME}`;
  const imageAlt = ogImageAlt ?? fullTitle;

  const openGraph = {
    title: fullTitle,
    description,
    url: canonical,
    siteName: SITE_NAME,
    locale: "en_US",
    type: ogType,
    images: [{ ...DEFAULT_OG_IMAGE, alt: imageAlt }],
    ...(ogType === "article" && publishedTime
      ? {
          publishedTime,
          ...(modifiedTime ? { modifiedTime } : {}),
        }
      : {}),
  } satisfies Metadata["openGraph"];

  return {
    title: cleanTitle,
    description,
    ...(keywords?.length ? { keywords } : {}),
    robots,
    ...(includeCanonical ? { alternates: { canonical } } : {}),
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
      creator: TWITTER_HANDLE,
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pathToAbsoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildArticleSchema(post: {
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
}) {
  const pageUrl = pathToAbsoluteUrl(`/blog/${post.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: pageUrl,
    url: pageUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    image: pathToAbsoluteUrl("/logo.png"),
    author: {
      "@type": "Person",
      name: "Syed Hassan Ali Shah",
      jobTitle: "CEO & Founder",
      url: pathToAbsoluteUrl("/about/"),
      worksFor: {
        "@type": "Organization",
        name: SITE_NAME,
        url: pathToAbsoluteUrl("/"),
      },
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: pathToAbsoluteUrl("/logo.png"),
      },
    },
    keywords: post.keywords.join(", "),
    inLanguage: "en-US",
  };
}

export function buildServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: pathToAbsoluteUrl(`/services/${service.slug}/`),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: pathToAbsoluteUrl("/"),
    },
    areaServed: ORGANIZATION_AREA_SERVED,
  };
}

export function buildWebPageSchema(page: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: pathToAbsoluteUrl(page.path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: pathToAbsoluteUrl("/"),
    },
    inLanguage: "en-US",
  };
}

export function buildProfessionalServiceSchema(page: {
  name: string;
  description: string;
  path: string;
  areaServed: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: page.name,
    url: pathToAbsoluteUrl(page.path),
    description: page.description,
    areaServed: page.areaServed,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: pathToAbsoluteUrl("/"),
    },
  };
}

export function buildCaseStudySchema(project: {
  title: string;
  clientName: string;
  description: string;
  path: string;
  image: string;
  websiteUrl: string;
  category: string;
}) {
  const pageUrl = pathToAbsoluteUrl(project.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${project.clientName} Case Study — ${project.title}`,
    description: project.description,
    mainEntityOfPage: pageUrl,
    url: pageUrl,
    image: pathToAbsoluteUrl(project.image),
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: pathToAbsoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: pathToAbsoluteUrl("/logo.png"),
      },
    },
    about: {
      "@type": "SoftwareApplication",
      name: project.clientName,
      applicationCategory: project.category,
      operatingSystem: "All",
      sameAs: project.websiteUrl,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: pathToAbsoluteUrl("/"),
      },
    },
    inLanguage: "en-US",
  };
}

