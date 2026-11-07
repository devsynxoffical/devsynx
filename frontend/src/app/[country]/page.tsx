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
  "germany",
  "canada",
  "australia",
];

interface CountryMetaConfig {
  title: string;
  description: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  keywords: string[];
}

const countryMetaMap: Record<string, CountryMetaConfig> = {
  usa: {
    title: "Software Development Company for US Businesses",
    description: "Offshore software, Next.js web development, and AI automation squads for US businesses. Senior engineers with 5+ hours daily EST/PST overlap and USD pricing.",
    heroTitle: (
      <>
        Offshore Software Development for{" "}
        <span className="text-gradient">US Startups &amp; Enterprises</span>
      </>
    ),
    heroSubtitle: "Senior full-stack engineering pods and AI specialists with 5+ hours daily US business hours overlap. 60% lower total cost than US onshore agencies with zero compromise on code quality.",
    keywords: [
      "offshore software development company usa",
      "software outsourcing pakistan",
      "hire offshore developers usa",
      "pakistan software house for us clients",
      "us software development outsourcing",
      "dedicated engineering squad us",
      "web development agency usa",
      "ai automation services usa",
    ],
  },
  uk: {
    title: "Software Development Company UK: Web, Mobile & AI",
    description: "UK-aligned offshore engineering squads, bespoke Next.js web applications, and AI automation for London, Manchester, and UK businesses. GDPR compliant.",
    heroTitle: (
      <>
        Offshore Software Development for{" "}
        <span className="text-gradient">UK &amp; European Businesses</span>
      </>
    ),
    heroSubtitle: "Dedicated engineering squads aligned with London & Manchester business hours. GDPR-compliant Next.js web platforms, native mobile apps, and enterprise AI automation.",
    keywords: [
      "software development company uk",
      "bespoke web development uk",
      "offshore software development london",
      "hire nextjs developers uk",
      "ai automation agency uk",
      "uk software outsourcing partner",
      "mobile app development uk",
    ],
  },
  uae: {
    title: "Software Development Company UAE: Dubai & Abu Dhabi",
    description: "High-performance web development, mobile apps, and autonomous AI automation for Dubai and UAE enterprises. 100% real-time GST timezone alignment.",
    heroTitle: (
      <>
        Software Engineering &amp; AI for{" "}
        <span className="text-gradient">UAE &amp; GCC Brands</span>
      </>
    ),
    heroSubtitle: "Bilingual English/Arabic digital experiences, enterprise ERPs, and sub-second voice AI agents engineered for Dubai, Abu Dhabi, and Gulf businesses with 100% real-time GST overlap.",
    keywords: [
      "software development company uae",
      "web development company dubai",
      "software house dubai",
      "ai automation services uae",
      "mobile app development dubai",
      "hire developers abu dhabi",
      "custom software development uae",
    ],
  },
  germany: {
    title: "Software Development Company Germany",
    description: "High-precision custom software, scalable web platforms, and AI automation for German businesses. CET time overlap, clean code architecture, GDPR compliant.",
    heroTitle: (
      <>
        High-Precision Software &amp; AI for{" "}
        <span className="text-gradient">German Enterprises</span>
      </>
    ),
    heroSubtitle: "Engineered for Mittelstand and high-growth European tech firms. Clean architecture, ISO standards, strict EU GDPR compliance, and 4+ hours synchronous CET working overlap.",
    keywords: [
      "software development company germany",
      "softwareentwicklung unternehmen deutschland",
      "custom software development berlin",
      "web development agency frankfurt",
      "ai automation services germany",
      "offshore software development deutschland",
      "hire react developers germany",
    ],
  },
  canada: {
    title: "Software Development Company Canada",
    description: "Offshore software development, custom web platforms, and AI workflow automation for Canadian companies across Toronto, Vancouver, and Montreal.",
    heroTitle: (
      <>
        Software Engineering &amp; Squads for{" "}
        <span className="text-gradient">Canadian Tech Teams</span>
      </>
    ),
    heroSubtitle: "Dedicated full-stack engineering pods and AI specialists with 100% Eastern and Pacific daytime overlap. 60% lower cost than domestic Canadian agencies with guaranteed velocity.",
    keywords: [
      "software development company canada",
      "offshore software development toronto",
      "web development company vancouver",
      "custom software development montreal",
      "ai automation services canada",
      "hire full stack developers canada",
    ],
  },
  australia: {
    title: "Software Development Company Australia",
    description: "Agile software engineering, Next.js web development, and AI automation for Australian startups and enterprises across Sydney, Melbourne, and Brisbane.",
    heroTitle: (
      <>
        Agile Software Engineering for{" "}
        <span className="text-gradient">Australian Businesses</span>
      </>
    ),
    heroSubtitle: "Turn time zones into an operational superpower. Features scoped during Australian business hours are engineered, tested, and staged overnight for immediate morning review.",
    keywords: [
      "software development company australia",
      "custom web development sydney",
      "offshore software development melbourne",
      "ai automation agency australia",
      "mobile app developers brisbane",
      "hire dedicated developers australia",
    ],
  },
};

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

  const metaConfig = countryMetaMap[country.slug];
  const title = metaConfig?.title || `Software Development Company in ${country.name}`;
  const description = metaConfig?.description || `DEVSYNX provides software development, web development, mobile apps, cloud, SaaS, and AI automation services for businesses in ${country.name}.`;
  const isPriority = isPriorityPath(`/${country.slug}/`);

  const customKeywords = metaConfig?.keywords || [
    `software development company ${country.name.toLowerCase()}`,
    `web development agency ${country.name.toLowerCase()}`,
    `ai development company ${country.name.toLowerCase()}`,
    `offshore software development ${country.name.toLowerCase()}`,
  ];

  return buildPageMetadata({
    title,
    description,
    path: `/${country.slug}/`,
    keywords: [
      ...customKeywords,
      ...quickWinKeywords.slice(0, 6),
      ...brandVariantKeywords,
    ],
    robots: isPriority
      ? { index: true, follow: true }
      : { index: false, follow: true },
    ogImageAlt: `Software development in ${country.name}`,
  });
}

interface CountryHighlight {
  timezoneLabel: string;
  timezoneTitle: string;
  timezoneDesc: string;
  portfolioLabel: string;
  portfolioTitle: string;
  portfolioDesc: React.ReactNode;
  actionLabel: string;
  actionTitle: string;
  actionDesc: string;
  actionBtn: string;
}

const countryHighlightMap: Record<string, CountryHighlight> = {
  usa: {
    timezoneLabel: "US Timezone Alignment",
    timezoneTitle: "Daily Real-Time Overlap",
    timezoneDesc: "Our engineering squads overlap with Eastern Time (EST 8:00 AM – 1:00 PM) and Pacific Time (PST) for real-time Slack messaging, daily standups, and bi-weekly sprint demos.",
    portfolioLabel: "US Client Portfolio",
    portfolioTitle: "Verified US Production Apps",
    portfolioDesc: (
      <>
        Trusted by North American teams for IoT hardware apps (<Link href="/clients/sigma-smart-tech/" style={{ color: "#06909D", fontWeight: 600 }}>Sigma Smart Tech</Link>), social platforms (<Link href="/clients/spicify-app/" style={{ color: "#06909D", fontWeight: 600 }}>Spicify</Link>), and lead engines (<Link href="/clients/contractor-leads/" style={{ color: "#06909D", fontWeight: 600 }}>Contractor Leads</Link>).
      </>
    ),
    actionLabel: "Schedule A Discovery Sprint",
    actionTitle: "Book a Consultation Call",
    actionDesc: "Speak directly with Syed Hassan Ali Shah (CEO & Lead Architect) to review your architecture or evaluate an MVP sprint.",
    actionBtn: "Schedule US Discovery Call →",
  },
  uk: {
    timezoneLabel: "UK & London Alignment",
    timezoneTitle: "5+ Hours Daily GMT Overlap",
    timezoneDesc: "Direct alignment with GMT / BST business hours. Conduct morning standups, coordinate Jira tickets, and test staging deployments in real-time with London and Manchester teams.",
    portfolioLabel: "UK & European Portfolio",
    portfolioTitle: "GDPR-Compliant Production Apps",
    portfolioDesc: (
      <>
        Engineered high-scale telehealth for <Link href="/clients/quickdoctor-ie/" style={{ color: "#06909D", fontWeight: 600 }}>QuickDoctor</Link>, financial analytics for <Link href="/clients/ballchart/" style={{ color: "#06909D", fontWeight: 600 }}>Ballchart</Link>, and digital pharmacy platforms for <Link href="/clients/acutepharmacy/" style={{ color: "#06909D", fontWeight: 600 }}>Acute Pharmacy</Link>.
      </>
    ),
    actionLabel: "UK Sprint Planning",
    actionTitle: "Book a Technical Discovery",
    actionDesc: "Connect with our lead architects to discuss GDPR compliance, fixed-price GBP milestones, and dedicated sprint pods.",
    actionBtn: "Schedule UK Discovery Call →",
  },
  uae: {
    timezoneLabel: "Gulf Standard Time (GST)",
    timezoneTitle: "1-Hour Time Difference (100% Day Overlap)",
    timezoneDesc: "Operating with only a 1-hour difference from Dubai and Abu Dhabi, our squads provide 100% synchronous working day collaboration with instant WhatsApp & Slack communication.",
    portfolioLabel: "UAE & GCC Portfolio",
    portfolioTitle: "FTA-Approved & Enterprise Systems",
    portfolioDesc: (
      <>
        Built corporate tax hubs for <Link href="/clients/rbo-accounting/" style={{ color: "#06909D", fontWeight: 600 }}>RBO Accounting FZE</Link>, education platforms for <Link href="/clients/ustaad-ae/" style={{ color: "#06909D", fontWeight: 600 }}>Ustaad.ae</Link>, and event ticketing apps for <Link href="/clients/zeparty/" style={{ color: "#06909D", fontWeight: 600 }}>ZeParty UAE</Link>.
      </>
    ),
    actionLabel: "Dubai & Abu Dhabi Consultation",
    actionTitle: "Schedule GCC Discovery Call",
    actionDesc: "Discuss bilingual Arabic/English interfaces, WhatsApp API automation, and tax-compliant cloud architectures.",
    actionBtn: "Schedule UAE Discovery Call →",
  },
  germany: {
    timezoneLabel: "Central European Time (CET)",
    timezoneTitle: "4 Hours Synchronous CET Overlap",
    timezoneDesc: "Direct afternoon overlap with Berlin, Frankfurt, and Munich. Clean architecture, ISO/IEC standards, and strict adherence to EU GDPR and data protection laws.",
    portfolioLabel: "German & EU Case Studies",
    portfolioTitle: "Enterprise ERP & Automation Systems",
    portfolioDesc: (
      <>
        Engineered enterprise modules for <Link href="/clients/odoo-service/" style={{ color: "#06909D", fontWeight: 600 }}>Odoo Service</Link>, medical support platforms for <Link href="/clients/zingo-assist/" style={{ color: "#06909D", fontWeight: 600 }}>Zingo Assist</Link>, and scalable SaaS architectures.
      </>
    ),
    actionLabel: "Mittelstand & Startup Inquiries",
    actionTitle: "Schedule Technical Evaluation",
    actionDesc: "Discuss EUR-denominated fixed milestones, modern Next.js/TypeScript migrations, and autonomous AI automation pipelines.",
    actionBtn: "Schedule Germany Discovery Call →",
  },
  canada: {
    timezoneLabel: "Canadian Timezone Coverage",
    timezoneTitle: "EST & PST Synchronous Collaboration",
    timezoneDesc: "Full working day overlap for teams in Toronto, Montreal, Vancouver, and Calgary. Senior engineering talent delivering at 60% lower cost than domestic Canadian agencies.",
    portfolioLabel: "Canadian Case Studies",
    portfolioTitle: "Industrial Systems & AI Engines",
    portfolioDesc: (
      <>
        Delivered enterprise control apps for <Link href="/clients/mdt-control/" style={{ color: "#06909D", fontWeight: 600 }}>MDT Control</Link>, smart infrastructure portals for <Link href="/clients/smart-links-cabling/" style={{ color: "#06909D", fontWeight: 600 }}>Smart-Links</Link>, and programmatic analytics for <Link href="/clients/rankmora/" style={{ color: "#06909D", fontWeight: 600 }}>Rankmora</Link>.
      </>
    ),
    actionLabel: "Canadian Tech Partnerships",
    actionTitle: "Book Engineering Discovery",
    actionDesc: "Review your architecture with our CEO & Lead Architect to evaluate MVP delivery timelines and dedicated squad setup.",
    actionBtn: "Schedule Canada Discovery Call →",
  },
  australia: {
    timezoneLabel: "Australian Eastern Time (AEST)",
    timezoneTitle: "Overnight Engineering Velocity",
    timezoneDesc: "Features planned and scoped during your Australian business day are engineered, tested, and staged by our squads overnight—ready on your desk first thing in the morning.",
    portfolioLabel: "Australian Client Success",
    portfolioTitle: "High-Converting Platforms & B2B Apps",
    portfolioDesc: (
      <>
        Built automated high-conversion lead engines for <Link href="/clients/contractor-leads/" style={{ color: "#06909D", fontWeight: 600 }}>Contractor Leads</Link>, financial analytics for <Link href="/clients/ballchart/" style={{ color: "#06909D", fontWeight: 600 }}>Ballchart</Link>, and SEO engines for <Link href="/clients/rankmora/" style={{ color: "#06909D", fontWeight: 600 }}>Rankmora</Link>.
      </>
    ),
    actionLabel: "Australia & APAC Discovery",
    actionTitle: "Schedule Australian Strategy Call",
    actionDesc: "Leverage the time-zone advantage for rapid sprint turnarounds, AUD fixed contracts, and dedicated engineering pods.",
    actionBtn: "Schedule Australia Discovery Call →",
  },
};

export default async function CountryLandingPage({ params }: Props) {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country || !countryLandingSlugs.includes(country.slug)) {
    notFound();
  }

  const content = getCountryPageContent(country);
  const isPriority = isPriorityPath(`/${country.slug}/`);
  const metaConfig = countryMetaMap[country.slug];
  const highlight = countryHighlightMap[country.slug];

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
          metaConfig?.heroTitle || (
            <>
              Offshore software development for{" "}
              <span className="text-gradient">{country.name}</span> businesses
            </>
          )
        }
        subtitle={metaConfig?.heroSubtitle || content.intro}
      />

      {highlight && (
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
                  {highlight.timezoneLabel}
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: "8px 0 12px", color: "var(--color-heading, #fff)" }}>
                  {highlight.timezoneTitle}
                </h3>
                <p style={{ fontSize: "0.938rem", color: "var(--color-text-secondary, #94a3b8)", lineHeight: 1.6 }}>
                  {highlight.timezoneDesc}
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
                  {highlight.portfolioLabel}
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: "8px 0 12px", color: "var(--color-heading, #fff)" }}>
                  {highlight.portfolioTitle}
                </h3>
                <p style={{ fontSize: "0.938rem", color: "var(--color-text-secondary, #94a3b8)", lineHeight: 1.6 }}>
                  {highlight.portfolioDesc}
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
                  {highlight.actionLabel}
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: "8px 0 12px", color: "var(--color-heading, #fff)" }}>
                  {highlight.actionTitle}
                </h3>
                <p style={{ fontSize: "0.938rem", color: "var(--color-text-secondary, #94a3b8)", lineHeight: 1.6, marginBottom: "16px" }}>
                  {highlight.actionDesc}
                </p>
                <Link href="/contact/" className="btn btn--primary" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                  {highlight.actionBtn}
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
