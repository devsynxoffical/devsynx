import { services, getServiceBySlug } from "@/data/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageClient } from "./ServicePageClient";
import {
  blogIntentKeywords,
  brandVariantKeywords,
  coreIntentKeywords,
  highIntentLongTailKeywords,
  quickWinKeywords,
  topCountryKeywords,
} from "@/seo/keywords";
import { buildBreadcrumbSchema, buildPageMetadata, buildServiceSchema } from "@/seo/metadata";

// Required for static export
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found", robots: { index: false, follow: false } };

  return buildPageMetadata({
    title: service.title,
    description: service.longDescription.slice(0, 160),
    path: `/services/${service.slug}/`,
    keywords: [
      service.title,
      `${service.shortTitle} services`,
      "custom software development",
      "AI solutions",
      ...brandVariantKeywords,
      ...coreIntentKeywords.slice(0, 8),
      ...highIntentLongTailKeywords.slice(0, 6),
      ...quickWinKeywords.slice(0, 6),
      ...blogIntentKeywords.slice(0, 6),
      ...topCountryKeywords.slice(0, 8),
    ],
    ogImageAlt: `${service.title} — Devsynx`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const relatedServices = services
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: service.title, path: `/services/${service.slug}/` },
  ]);

  const serviceSchema = buildServiceSchema({
    title: service.title,
    description: service.description,
    slug: service.slug,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageClient service={service} relatedServices={relatedServices} />
    </>
  );
}
