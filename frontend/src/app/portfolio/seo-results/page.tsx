import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { clientProjects } from "@/data/clients";
import { PortfolioCardThumbnail } from "@/components/PortfolioCardThumbnail";
import { PageHero } from "@/components/PageHero";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/seo/metadata";
import "@/styles/clients.css";

export const metadata: Metadata = {
  title: "SEO Results and Case Studies | DEVSYNX",
  description:
    "SEO results DEVSYNX delivered for clients in the US, UAE and Pakistan: rankings, clicks and leads, with the work behind each one.",
  keywords: [
    "technical seo agency",
    "programmatic seo services",
    "ecommerce seo agency",
    "google search ranking case study",
    "faceted navigation crawl optimization",
    "b2b wholesale seo services",
    "core web vitals optimization company",
    "organic traffic growth agency",
  ],
  alternates: {
    canonical: "https://devsynx.com/portfolio/seo-results/",
  },
  openGraph: {
    title: "SEO Results & Organic Ranking Showcase | Devsynx",
    description: "Real organic search ranking results, 300%+ impression growth, and revenue-focused technical SEO engineering.",
    url: "https://devsynx.com/portfolio/seo-results/",
    siteName: "Devsynx",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Results & Case Studies Portfolio | Devsynx",
    description: "Real organic search ranking results, 300%+ impression growth, and revenue-focused technical SEO engineering.",
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/clients/" },
  { name: "SEO Results & Organic Growth", path: "/portfolio/seo-results/" },
]);

const pageSchema = buildWebPageSchema({
  title: "SEO Results & Case Studies Portfolio | Devsynx",
  description:
    "Explore Devsynx's proven SEO results, technical audits, and organic revenue scaling case studies across e-commerce, healthcare, B2B wholesale, and international local markets.",
  path: "/portfolio/seo-results/",
});

// Prioritize SEO projects with high-quality real case study screenshots first
const seoProjectIds = [
  "productboxeswholesale",
  "topcustomboxes",
  "gamingwise",
  "acutepharmacy",
  "ustaad-ae",
  "rbo-accounting",
  "progenius-students-seo",
  "roofing-systems",
  "ag-plumbing-murah",
  "rankmora",
];

const seoProjects = seoProjectIds
  .map((id) => clientProjects.find((p) => p.id === id))
  .filter((p): p is (typeof clientProjects)[0] => Boolean(p));

// Marquee flagship project
const flagship = clientProjects.find((p) => p.id === "productboxeswholesale") || seoProjects[0];

export default function SeoResultsPortfolioPage() {
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
        label="Data-Driven SEO Results & Ranking Architecture"
        title={
          <>
            Generating Millions in <span className="text-gradient">Organic Search Revenue</span>
          </>
        }
        subtitle="We engineer deep technical SEO, programmatic landing hubs, Core Web Vitals optimization, and high-intent commercial keyword rankings that outrank established industry competitors."
      />

      {/* KPI Stats Bar */}
      <section style={{ background: "var(--color-bg)", padding: "30px 0 45px", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
            }}
          >
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>+420%</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Average Organic Lift</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Measured across 6-12 month campaigns</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>3,000+</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Top 3 Keyword Rankings</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>High commercial intent transactional terms</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>100/100</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Core Web Vitals</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>LCP &lt; 1.2s, CLS = 0, INP &lt; 50ms</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>$18M+</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Attributed Pipeline Value</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Verified via Google Analytics 4 &amp; CRM tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Spotlight Case Study */}
      {flagship && (
        <section style={{ padding: "80px 0 60px", background: "var(--color-bg-alt)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
                  marginBottom: "12px",
                }}
              >
                Featured SEO Case Study
              </span>
              <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-dark)" }}>
                Product Boxes Wholesale: Commercial SEO Dominance
              </h2>
              <p style={{ maxWidth: "720px", margin: "12px auto 0", color: "var(--color-text-secondary)", fontSize: "1.063rem" }}>
                How Devsynx engineered programmatic category hubs, solved faceted navigation crawl bloat, and drove a 340% increase in Google search impressions for custom wholesale packaging.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "40px",
                alignItems: "center",
                background: "var(--color-card-bg)",
                borderRadius: "24px",
                padding: "40px",
                border: "1px solid var(--color-border)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
              }}
            >
              <div>
                <span style={{ fontSize: "0.813rem", fontWeight: 800, color: "var(--color-primary)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  E-Commerce &amp; B2B Wholesale SEO
                </span>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--color-dark)", marginTop: "8px", marginBottom: "16px" }}>
                  +340% Impressions &amp; 120+ Top-3 Rankings
                </h3>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
                  {flagship.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
                  {["Technical Crawl Optimization", "Schema.org Product Graph", "Faceted Navigation Control", "Programmatic Category Silos", "Core Web Vitals 99+"].map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "6px 12px",
                        background: "var(--color-bg-alt)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "8px",
                        fontSize: "0.813rem",
                        fontWeight: 600,
                        color: "var(--color-dark)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <Link href={`/clients/${flagship.id}/`} className="btn btn--primary">
                    View Full Case Study
                  </Link>
                  {flagship.websiteUrl && (
                    <a href={flagship.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                      Visit Platform ↗
                    </a>
                  )}
                </div>
              </div>

              <div style={{ position: "relative", minHeight: "360px", borderRadius: "18px", overflow: "hidden" }}>
                <PortfolioCardThumbnail project={flagship} aspectRatio="380px" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SEO Projects Showcase Grid */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ marginBottom: "50px", textAlign: "center" }}>
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
                marginBottom: "12px",
              }}
            >
              SEO Campaigns &amp; Ranking Architecture
            </span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-dark)" }}>
              Live Ranking &amp; Organic Growth Case Studies
            </h2>
            <p style={{ maxWidth: "680px", margin: "12px auto 0", color: "var(--color-text-secondary)", fontSize: "1.063rem" }}>
              Explore how we have engineered organic dominance for businesses across the US, UK, UAE, and international markets.
            </p>
          </div>

          <div className="portfolio-grid">
            {seoProjects.map((project) => (
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
                    <span className="portfolio-card__services-label">SEO Tactics &amp; Deliverables</span>
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
        </div>
      </section>

      {/* SEO Engineering Principles Section */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-alt)", borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-dark)" }}>
              Our 4-Pillar Technical SEO Methodology
            </h2>
            <p style={{ maxWidth: "640px", margin: "12px auto 0", color: "var(--color-text-secondary)" }}>
              We treat SEO as a software engineering discipline rather than a superficial guessing game.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(6, 144, 157, 0.12)", color: "var(--color-primary)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Crawl Budget &amp; Architecture</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Pruning thin content, fixing redirect chains, canonicalizing faceted parameters, and organizing clean hierarchical URL silos for Googlebot.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(245, 158, 11, 0.12)", color: "#F59E0B" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Schema.org Knowledge Graph</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Custom JSON-LD schema injection for Products, Organizations, FAQPage, BreadcrumbList, MedicalWebPage, and LocalBusiness for rich Google SERP features.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(16, 185, 129, 0.12)", color: "#10B981" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Sub-Second Core Web Vitals</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Modern Next.js SSG/ISR rendering, edge caching via Cloudflare Enterprise, AVIF/WebP image compression, and zero CLS layout shifts.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(236, 72, 153, 0.12)", color: "#EC4899" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Commercial Intent Keyword Silos</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Targeting transactional buyer queries with dedicated high-converting landing hubs, granular FAQ matrices, and internal contextual linking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Claim the Top Google Rankings in Your Industry?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
              Get a comprehensive 35-point Technical SEO and Keyword Competitor Audit from our principal organic growth engineers.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" className="btn btn--primary">
                Claim Free SEO Audit
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
