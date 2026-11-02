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

  const title = country.slug === "usa"
    ? "Software Development Company for US Businesses"
    : `Software Development Company in ${country.name}`;
  const description = country.slug === "usa"
    ? "Offshore software, AI automation and app development for US companies. Senior engineers in Islamabad, 8 AM to 1 PM Eastern overlap, USD pricing."
    : `DEVSYNX provides software development, web development, mobile apps, cloud, SaaS, and AI automation services for businesses in ${country.name}.`;
  const isPriority = isPriorityPath(`/${country.slug}/`);

  const usaKeywords = [
    "offshore software development company usa",
    "software outsourcing pakistan",
    "hire offshore developers usa",
    "pakistan software house for us clients",
    "us software development outsourcing",
    "dedicated engineering squad us",
  ];

  return buildPageMetadata({
    title,
    description,
    path: `/${country.slug}/`,
    keywords: [
      ...(country.slug === "usa" ? usaKeywords : []),
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
          country.slug === "usa" ? (
            <>
              Offshore Software Development for{" "}
              <span className="text-gradient">US Startups &amp; Enterprises</span>
            </>
          ) : (
            <>
              Offshore software development for{" "}
              <span className="text-gradient">{country.name}</span> businesses
            </>
          )
        }
        subtitle={
          country.slug === "usa"
            ? "Senior full-stack engineering pods and AI specialists with 5+ hours daily US business hours overlap. 60% lower total cost than US onshore agencies with zero compromise on code quality."
            : content.intro
        }
      />

      {country.slug === "usa" && (
        <section className="section" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
                padding: "32px",
                background: "linear-gradient(135deg, rgba(6, 144, 157, 0.08) 0%, rgba(26, 115, 232, 0.05) 100%)",
                border: "1px solid rgba(6, 144, 157, 0.25)",
                borderRadius: "20px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#06909D",
                  }}
                >
                  US Timezone Alignment
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: "8px 0 12px", color: "var(--color-heading, #fff)" }}>
                  Daily Real-Time Overlap
                </h3>
                <p style={{ fontSize: "0.938rem", color: "var(--color-text-secondary, #94a3b8)", lineHeight: 1.6 }}>
                  Our engineering squads overlap with Eastern Time (EST 8:00 AM – 1:00 PM) and Pacific Time (PST) for real-time Slack messaging, daily standups, and bi-weekly sprint demos.
                </p>
              </div>

              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#06909D",
                  }}
                >
                  US Client Portfolio
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: "8px 0 12px", color: "var(--color-heading, #fff)" }}>
                  Verified US Production Apps
                </h3>
                <p style={{ fontSize: "0.938rem", color: "var(--color-text-secondary, #94a3b8)", lineHeight: 1.6 }}>
                  Trusted by North American teams for IoT hardware apps (<Link href="/clients/sigma-smart-tech/" style={{ color: "#06909D", fontWeight: 600 }}>Sigma Smart Tech</Link>), social platforms (<Link href="/clients/spicify-app/" style={{ color: "#06909D", fontWeight: 600 }}>Spicify</Link>), and web platforms.
                </p>
              </div>

              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#06909D",
                  }}
                >
                  Schedule A Discovery Sprint
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: "8px 0 12px", color: "var(--color-heading, #fff)" }}>
                  Book a Consultation Call
                </h3>
                <p style={{ fontSize: "0.938rem", color: "var(--color-text-secondary, #94a3b8)", lineHeight: 1.6, marginBottom: "16px" }}>
                  Speak directly with Syed Hassan Ali Shah (CEO &amp; Lead Architect) to review your architecture or evaluate an MVP sprint.
                </p>
                <Link href="/contact/" className="btn btn--primary" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                  Schedule Discovery Call →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

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
    "software-development": "saas-product-development",
    "ai-automation": "ai-automation",
    "mobile-app-development": "mobile-app-development",
    "cloud-solutions": "cloud-migration",
  };
  return map[landingSlug] ?? landingSlug;
}
