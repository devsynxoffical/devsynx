import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCountryBySlug,
  getLandingPageParams,
  getServiceBySlug,
} from "@/seo/landingPages";
import { brandVariantKeywords } from "@/seo/keywords";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  buildWebPageSchema,
} from "@/seo/metadata";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqBlock } from "@/components/FaqBlock";

const GLOBAL_PAGE_ROBOTS = { index: false as const, follow: true as const };

type Props = {
  params: Promise<{ country: string; service: string }>;
};

export function generateStaticParams() {
  return getLandingPageParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countrySlug, service: serviceSlug } = await params;
  const country = getCountryBySlug(countrySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!country || !service) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${service.name} Services in ${country.name}`;
  const description = `Devsynx provides ${service.name.toLowerCase()} services in ${country.name}. Build faster with custom engineering, clear delivery, and measurable business outcomes.`;

  return buildPageMetadata({
    title,
    description,
    path: `/global/${country.slug}/${service.slug}/`,
    keywords: [
      `${service.name.toLowerCase()} ${country.name.toLowerCase()}`,
      `${service.name.toLowerCase()} company ${country.name.toLowerCase()}`,
      `${service.name.toLowerCase()} agency ${country.name.toLowerCase()}`,
      `custom software development ${country.name.toLowerCase()}`,
      "devsynx",
      ...brandVariantKeywords,
    ],
    robots: GLOBAL_PAGE_ROBOTS,
    ogImageAlt: `${service.name} in ${country.name}`,
  });
}

export default async function GlobalServiceLandingPage({ params }: Props) {
  const { country: countrySlug, service: serviceSlug } = await params;
  const country = getCountryBySlug(countrySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!country || !service) {
    notFound();
  }

  const faqItems = [
    {
      question: `Do you provide ${service.name.toLowerCase()} for ${country.name}-based businesses?`,
      answer: `Yes. Devsynx works with startups and established businesses in ${country.name} through remote-first collaboration and timezone-aligned planning.`,
    },
    {
      question: "Can we start with an MVP first?",
      answer:
        "Yes. We can define a focused MVP scope and ship quickly, then iterate based on performance data and user feedback.",
    },
    {
      question: "How do we get started?",
      answer:
        "Share your goals and constraints with our team. We will suggest the best approach and provide a clear delivery roadmap.",
    },
  ];

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Global", path: "/global/" },
    { name: `${service.name} in ${country.name}`, path: `/global/${country.slug}/${service.slug}/` },
  ]);

  const webPageSchema = buildWebPageSchema({
    title: `${service.name} in ${country.name}`,
    description: `${service.shortDescription} Devsynx supports global teams in ${country.name} with outcome-focused product engineering.`,
    path: `/global/${country.slug}/${service.slug}/`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <PageHero
        label={`${service.name} · ${country.name}`}
        title={
          <>
            {service.name} in <span className="text-gradient">{country.name}</span>
          </>
        }
        subtitle={`${service.shortDescription} Devsynx supports global teams in ${country.name} with outcome-focused product engineering and transparent delivery.`}
      />

      <section className="section section--alt">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <h2 className="about-card__title">What we deliver</h2>
              <p className="about-card__text">
                We deliver scalable architecture, modern development workflows, and
                quality-focused releases for teams operating in {country.name}.
              </p>
            </div>
            <div className="about-card">
              <h2 className="about-card__title">Why Devsynx</h2>
              <p className="about-card__text">
                You get a senior delivery team, clear scope alignment, and practical
                execution from planning to production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Frequently asked questions</h2>
          </div>
          <FaqBlock items={faqItems} />
        </div>
      </section>

      <CtaSection
        title={`Start ${service.name.toLowerCase()} in ${country.name}`}
        subtitle="Tell us about your project and we will map the right delivery approach."
        primaryLabel="Start a project"
        secondaryLabel="Explore core services"
        secondaryHref="/services/"
      />
    </>
  );
}
