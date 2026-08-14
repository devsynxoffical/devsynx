import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceTargets, getCountryBySlug } from "@/seo/landingPages";
import { brandVariantKeywords, quickWinKeywords } from "@/seo/keywords";
import { getCountryPageContent } from "@/seo/countryPageContent";
import { isPriorityPath } from "@/seo/priorityPages";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  buildProfessionalServiceSchema,
} from "@/seo/metadata";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";

const countryLandingSlugs = [
  "usa",
  "uk",
  "uae",
  "dubai",
  "saudi-arabia",
  "canada",
  "australia",
  "germany",
  "france",
  "singapore",
];

type Props = {
  params: Promise<{ country: string }>;
};

export function generateStaticParams() {
  return countryLandingSlugs.map((country) => ({ country }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country || !countryLandingSlugs.includes(country.slug)) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `Software Development Company in ${country.name}`;
  const description = `Devsynx provides software development, web development, mobile apps, cloud, SaaS, and AI automation services for businesses in ${country.name}.`;
  const isPriority = isPriorityPath(`/${country.slug}/`);

  return buildPageMetadata({
    title,
    description,
    path: `/${country.slug}/`,
    keywords: [
      `software development company ${country.name.toLowerCase()}`,
      `web development agency ${country.name.toLowerCase()}`,
      `ai development company ${country.name.toLowerCase()}`,
      `offshore software development ${country.name.toLowerCase()}`,
      ...quickWinKeywords.slice(0, 8),
      ...brandVariantKeywords,
    ],
    robots: isPriority
      ? { index: true, follow: true }
      : { index: false, follow: true },
    ogImageAlt: `Software development in ${country.name}`,
  });
}

export default async function CountryLandingPage({ params }: Props) {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country || !countryLandingSlugs.includes(country.slug)) {
    notFound();
  }

  const content = getCountryPageContent(country);
  const isPriority = isPriorityPath(`/${country.slug}/`);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: country.name, path: `/${country.slug}/` },
  ]);

  const serviceSchema = buildProfessionalServiceSchema({
    name: `Devsynx - Software Development in ${country.name}`,
    description: content.intro,
    path: `/${country.slug}/`,
    areaServed: country.name,
  });

  return (
    <>
      {isPriority && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          />
        </>
      )}

      <PageHero
        label={country.name}
        title={
          <>
            Offshore software development for{" "}
            <span className="text-gradient">{country.name}</span> businesses
          </>
        }
        subtitle={content.intro}
      />

      <section className="section section--alt">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <h2 className="about-card__title">Why teams in {country.name} choose Devsynx</h2>
              <p className="about-card__text">{content.whyOffshore}</p>
            </div>
            <div className="about-card">
              <h2 className="about-card__title">How we deliver</h2>
              <p className="about-card__text">{content.delivery}</p>
            </div>
          </div>
        </div>
      </section>

      {isPriority && (
        <section className="section">
          <div className="container">
            <div className="section__header">
              <h2 className="section__title">Industries we support in {country.name}</h2>
            </div>
            <div className="services-grid services-grid--full">
              {content.industries.map((industry) => (
                <div key={industry} className="about-card">
                  <h3 className="about-card__title">{industry}</h3>
                  <p className="about-card__text">
                    Custom software, integrations, and AI workflows tailored to{" "}
                    {industry.toLowerCase()} operators in {country.name}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Services for {country.name}</h2>
            <p className="section__subtitle">
              Explore our core offerings or contact us for a tailored proposal.
            </p>
          </div>
          <div className="services-grid services-grid--full">
            {serviceTargets.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${mapServiceSlug(service.slug)}/`}
                className="service-card service-card--detailed"
              >
                <div className="service-card__gradient-bar" style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))" }}></div>
                <h2 className="service-card__title">
                  {service.name} for {country.name}
                </h2>
                <p className="service-card__desc">{service.shortDescription}</p>
                <span className="service-card__link">View service</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={`Start a project in ${country.name}`}
        subtitle="Get a dedicated team aligned to your timezone, goals, and delivery timeline."
        primaryLabel={`Start a project in ${country.name}`}
        secondaryLabel="Explore all services"
      />
    </>
  );
}

function mapServiceSlug(landingSlug: string): string {
  const map: Record<string, string> = {
    "web-development": "custom-web-development",
    "software-development": "custom-web-development",
    "ai-automation": "ai-machine-learning",
    "mobile-app-development": "mobile-app-development",
    "cloud-solutions": "cloud-solutions",
  };
  return map[landingSlug] ?? landingSlug;
}
