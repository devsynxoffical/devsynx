import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { clientProjects } from "@/data/clients";
import { PortfolioCardThumbnail } from "@/components/PortfolioCardThumbnail";
import { PageHero } from "@/components/PageHero";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/seo/metadata";
import "@/styles/clients.css";

export const metadata: Metadata = {
  title: "Digital Marketing and Funnel Work | DEVSYNX",
  description:
    "Funnels, ads and social campaigns DEVSYNX built for clients, with the results and the stack behind each project.",
  keywords: [
    "performance marketing agency",
    "high roas meta ads agency",
    "direct response funnel development",
    "vsl sales funnel architecture",
    "b2b lead generation agency",
    "paid advertising agency usa",
    "conversion rate optimization cro",
    "klaviyo email sms automation",
  ],
  alternates: {
    canonical: "https://devsynx.com/portfolio/digital-marketing/",
  },
  openGraph: {
    title: "Digital Marketing & Funnel Scaling Portfolio | Devsynx",
    description: "Paid advertising architectures, direct-response VSL funnels, and high-ROAS marketing campaigns engineered by Devsynx.",
    url: "https://devsynx.com/portfolio/digital-marketing/",
    siteName: "Devsynx",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Funnels Portfolio | Devsynx",
    description: "Paid advertising architectures, direct-response VSL funnels, and high-ROAS marketing campaigns engineered by Devsynx.",
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/clients/" },
  { name: "Digital Marketing & Funnels", path: "/portfolio/digital-marketing/" },
]);

const pageSchema = buildWebPageSchema({
  title: "Digital Marketing & Funnels Portfolio | Devsynx",
  description:
    "Explore Devsynx's digital marketing and funnel engineering portfolio. High-converting VSL funnels, Meta/Google ad campaigns, and multi-million dollar client revenue case studies.",
  path: "/portfolio/digital-marketing/",
});

// Prioritize projects with high-quality real website & campaign screenshots first
const marketingProjectIds = [
  "scale-with-ads",
  "vaishali-media-productions",
  "alpha-ahead-llc",
  "alpha-ahead-real-estate",
  "million-dollar-funnels",
  "million-dollar-media",
  "funnels-that-print",
  "seven-figure-studio",
  "qualified-leads-x",
  "contractor-leads",
  "ai-video-production",
  "motion-graphic-explainers",
];

const marketingProjects = marketingProjectIds
  .map((id) => clientProjects.find((p) => p.id === id))
  .filter((p): p is (typeof clientProjects)[0] => Boolean(p));

// Marquee flagship project
const flagship = clientProjects.find((p) => p.id === "scale-with-ads") || marketingProjects[0];

export default function DigitalMarketingPortfolioPage() {
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
        label="Performance Digital Marketing & Conversion Funnels"
        title={
          <>
            Scaling Paid Media with <span className="text-gradient">Engineered High-ROAS Funnels</span>
          </>
        }
        subtitle="We build high-converting direct-response funnel architectures, automated VSL & webinar funnels, and omni-channel paid media campaigns engineered for scalable customer acquisition."
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
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>$45M+</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Paid Ad Spend Managed</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Across Meta, Google, TikTok &amp; YouTube Ads</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>4.8x</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Average Blended ROAS</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Across direct-to-consumer and B2B high-ticket</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>1.2M+</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Qualified Inbound Leads</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Multi-step intake &amp; automated phone verification</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>Server-Side</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>CAPI &amp; First-Party Tracking</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>100% iOS 14.5+ attribution recovery</div>
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
                Featured Direct Response Funnel
              </span>
              <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-dark)" }}>
                {flagship.clientName}: {flagship.projectTitle}
              </h2>
              <p style={{ maxWidth: "720px", margin: "12px auto 0", color: "var(--color-text-secondary)", fontSize: "1.063rem" }}>
                {flagship.tagline}
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
                  {flagship.category}
                </span>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--color-dark)", marginTop: "8px", marginBottom: "16px" }}>
                  {flagship.projectTitle}
                </h3>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
                  {flagship.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
                  {flagship.tags.map((tech) => (
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

      {/* Marketing Projects Showcase Grid */}
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
              Digital Marketing Campaigns &amp; Funnels
            </span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-dark)" }}>
              High-Converting Funnel &amp; Media Case Studies
            </h2>
            <p style={{ maxWidth: "680px", margin: "12px auto 0", color: "var(--color-text-secondary)", fontSize: "1.063rem" }}>
              Explore how we have engineered multi-million dollar direct-response acquisition pipelines for brands worldwide.
            </p>
          </div>

          <div className="portfolio-grid">
            {marketingProjects.map((project) => (
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
                    <span className="portfolio-card__services-label">Funnel Pillars &amp; Ads</span>
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

      {/* Marketing Architecture Principles Section */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-alt)", borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-dark)" }}>
              How We Engineer Predictable Paid Acquisition
            </h2>
            <p style={{ maxWidth: "640px", margin: "12px auto 0", color: "var(--color-text-secondary)" }}>
              Combining psychological direct-response copywriting with bulletproof server-side tracking and high-velocity ad creatives.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(236, 72, 153, 0.12)", color: "#EC4899" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Omnichannel Paid Traffic</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Meta Advantage+, Google Performance Max, TikTok Spark Ads, and YouTube In-Stream ads scaled with algorithmic budget optimization.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(6, 144, 157, 0.12)", color: "var(--color-primary)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Server-Side CAPI Tracking</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Direct server-to-server Conversions API routing via AWS and Google Cloud to feed accurate purchase events back into ad algorithms.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(245, 158, 11, 0.12)", color: "#F59E0B" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>High-Speed VSL Funnels</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Instant sub-second landing page load times, interactive survey intake, dynamic video progress tracking, and one-click order bumps.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(59, 130, 246, 0.12)", color: "#3B82F6" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Automated Lead Nurture</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Instant SMS and WhatsApp triggers upon form submission, qualification quizzes, automated calendar booking, and email drip sequences.
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
              Ready to Turn Clicks into High-ROAS Customers?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
              Book an acquisition funnel audit with Devsynx's growth engineers to analyze your conversion bottleneck and unlock scalable ad returns.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" className="btn btn--primary">
                Book Funnel Strategy Call
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
