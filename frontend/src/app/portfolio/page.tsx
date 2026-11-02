import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { clientProjects } from "@/data/clients";
import { PortfolioCardThumbnail } from "@/components/PortfolioCardThumbnail";
import { PageHero } from "@/components/PageHero";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/seo/metadata";
import "@/styles/clients.css";

export const metadata: Metadata = {
  title: "Global Client Portfolio & Engineering Showcase",
  description:
    "Explore Devsynx's global portfolio across Mobile Applications, Custom Software & SaaS, SEO Results, Digital Marketing, and UI/UX Design. Production case studies across 15+ countries.",
  keywords: [
    "custom software development company",
    "mobile app development company",
    "enterprise saas engineering",
    "technical seo case studies",
    "performance digital marketing",
    "ui ux design agency",
    "global software engineering portfolio",
    "hire software developers",
  ],
  alternates: {
    canonical: "https://devsynx.com/portfolio/",
  },
  openGraph: {
    title: "Global Client Portfolio & Engineering Showcase | Devsynx",
    description: "Production software platforms, high-converting stores, mobile apps, and SEO architectures engineered worldwide.",
    url: "https://devsynx.com/portfolio/",
    siteName: "Devsynx",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Client Portfolio & Engineering Showcase | Devsynx",
    description: "Production software platforms, high-converting stores, mobile apps, and SEO architectures engineered worldwide.",
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio/" },
]);

const pageSchema = buildWebPageSchema({
  title: "Global Client Portfolio & Engineering Showcase | Devsynx",
  description:
    "Explore Devsynx's global portfolio across Mobile Applications, Custom Software & SaaS, SEO Results, Digital Marketing, and UI/UX Design.",
  path: "/portfolio/",
});

const categories = [
  {
    title: "Mobile Applications",
    href: "/portfolio/mobile-applications/",
    count: "8+ Apps",
    description: "iOS, Android, React Native & Flutter apps built for high retention, short-form video streaming, and 60fps UX.",
    tags: ["React Native", "Flutter", "iOS & Android", "Short-Form Video", "Telehealth"],
    iconColor: "#3B82F6",
    iconBg: "rgba(59, 130, 246, 0.12)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Custom Software & SaaS",
    href: "/portfolio/software/",
    count: "25+ Systems",
    description: "Multi-tenant cloud platforms, automated CRM lead engines, biometrics HRMS, and industrial SCADA automation.",
    tags: ["Multi-Tenant SaaS", "Lead CRMs", "Industrial IoT", "Enterprise SecOps", "Next.js"],
    iconColor: "#10B981",
    iconBg: "rgba(16, 185, 129, 0.12)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8l3 3-3 3" />
        <path d="M13 14h4" />
      </svg>
    ),
  },
  {
    title: "SEO Results & Growth",
    href: "/portfolio/seo-results/",
    count: "15+ Campaigns",
    description: "Technical SEO audits, programmatic keyword hubs, and Google ranking dominance driving millions in organic revenue.",
    tags: ["+340% Impressions", "Schema.org", "Core Web Vitals", "Programmatic SEO", "E-Commerce"],
    iconColor: "#F59E0B",
    iconBg: "rgba(245, 158, 11, 0.12)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing & Funnels",
    href: "/portfolio/digital-marketing/",
    count: "$45M+ Spend",
    description: "Direct-response VSL funnels, server-side CAPI tracking, and multi-channel paid acquisition with 4.8x average ROAS.",
    tags: ["VSL Funnels", "Meta & Google Ads", "Server-Side CAPI", "High-ROAS", "Lead Nurture"],
    iconColor: "#EC4899",
    iconBg: "rgba(236, 72, 153, 0.12)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "UI / UX Design & 3D",
    href: "/portfolio/ui-ux/",
    count: "40+ Systems",
    description: "Awwwards-caliber design systems, mathematical Figma tokens, and interactive Three.js 3D WebGL product visualizers.",
    tags: ["Figma Tokens", "Three.js WebGL", "Micro-Interactions", "WCAG AAA", "Design Systems"],
    iconColor: "#8B5CF6",
    iconBg: "rgba(139, 92, 246, 0.12)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l9 4.9V17L12 22l-9-5V6.9L12 2z" />
        <path d="M12 22V12" />
        <path d="M21 6.9l-9 5.1-9-5.1" />
      </svg>
    ),
  },
];

export default function PortfolioHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero Section */}
      <PageHero
        label="Verified Engineering Track Record & Global Portfolio"
        title={
          <>
            Engineering Excellence for <span className="text-gradient">Global Clients</span>
          </>
        }
        subtitle="Explore our specialized portfolio domains below or browse our full showcase of live websites, mobile apps, SaaS platforms, and SEO architectures across 15+ countries."
      />

      {/* Domain Navigation Cards */}
      <section style={{ padding: "40px 0 60px", background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "6px 16px",
                borderRadius: "999px",
                background: "rgba(6, 144, 157, 0.12)",
                color: "var(--color-primary)",
                fontSize: "0.813rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "10px",
              }}
            >
              Specialized Disciplines
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-dark)" }}>
              Explore Dedicated Practice Areas
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--color-card-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "20px",
                  padding: "32px",
                  textDecoration: "none",
                  transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                className="hover-elevate"
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: cat.iconBg,
                      color: cat.iconColor,
                      border: `1px solid ${cat.iconColor}33`,
                    }}
                  >
                    {cat.icon}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--color-primary)",
                      background: "rgba(6, 144, 157, 0.12)",
                      padding: "4px 10px",
                      borderRadius: "12px",
                    }}
                  >
                    {cat.count}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-dark)", marginBottom: "8px" }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: "0.938rem", color: "var(--color-text-secondary)", lineHeight: 1.6, flex: 1, marginBottom: "16px" }}>
                  {cat.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {cat.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "var(--color-text-secondary)",
                        background: "var(--color-bg-alt)",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Explore Showcase &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full Catalog Spotlight */}
      <section style={{ padding: "60px 0 80px", background: "var(--color-bg-alt)", borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <span
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  borderRadius: "999px",
                  background: "rgba(6, 144, 157, 0.12)",
                  color: "var(--color-primary)",
                  fontSize: "0.813rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "10px",
                }}
              >
                Full Engineering Roster
              </span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-dark)" }}>
                Selected Projects Across All Categories
              </h2>
            </div>
            <Link href="/clients/" className="btn btn--secondary">
              View All Projects with Search &amp; Filters &rarr;
            </Link>
          </div>

          <div className="portfolio-grid">
            {clientProjects.slice(0, 12).map((project) => (
              <div key={project.id} className="portfolio-card">
                <PortfolioCardThumbnail project={project} />

                <div className="portfolio-card__content">
                  <span className="portfolio-card__category">{project.category}</span>
                  <h3 className="portfolio-card__title">{project.clientName}</h3>
                  <div style={{ fontSize: "0.813rem", color: "var(--color-primary)", fontWeight: 700, marginBottom: "10px" }}>
                    {project.domain}
                  </div>
                  <p className="portfolio-card__desc">{project.description}</p>

                  <div className="portfolio-card__services">
                    <span className="portfolio-card__services-label">Tech &amp; Capabilities</span>
                    <div className="portfolio-card__tags">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="portfolio-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="portfolio-card__actions">
                    <Link href={`/clients/${project.id}/`} className="btn btn--sm btn--primary" style={{ flex: 1, textAlign: "center" }}>
                      Deep Case Study
                    </Link>
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--sm btn--secondary"
                      >
                        Visit ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Link href="/clients/" className="btn btn--primary btn--lg">
              Explore All Projects in Full Catalog &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section style={{ padding: "90px 0", textAlign: "center", background: "var(--color-bg)" }}>
        <div className="container">
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              background: "linear-gradient(135deg, rgba(6, 144, 157, 0.1), rgba(11, 21, 28, 0.6))",
              border: "1px solid var(--color-border)",
              borderRadius: "28px",
              padding: "60px 40px",
            }}
          >
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-dark)", marginBottom: "16px" }}>
              Start Your Next Project with Devsynx
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
              Whether you need a high-retention mobile app, an enterprise SaaS platform, national SEO dominance, or an Awwwards-level UI redesign, our engineers deliver.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" className="btn btn--primary">
                Book Free Consultation
              </Link>
              <a
                href="https://wa.me/923029462542"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                Chat on WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
