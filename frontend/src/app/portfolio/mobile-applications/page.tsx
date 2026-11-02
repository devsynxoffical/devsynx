import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { clientProjects } from "@/data/clients";
import { PortfolioCardThumbnail } from "@/components/PortfolioCardThumbnail";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/seo/metadata";
import "@/styles/clients.css";

export const metadata: Metadata = {
  title: "Mobile App Portfolio | DEVSYNX",
  description:
    "Mobile apps DEVSYNX shipped for iOS and Android: social, sports, ecommerce and fintech, with features and results for each.",
  keywords: [
    "mobile app development company",
    "ios app development services",
    "android app development company",
    "react native development agency",
    "flutter cross platform apps",
    "swiftui mobile apps",
    "kotlin android development",
    "smart home iot mobile app",
    "webrtc live audio video streaming app",
    "social entertainment mobile app",
  ],
  alternates: {
    canonical: "https://devsynx.com/portfolio/mobile-applications/",
  },
  openGraph: {
    title: "Mobile App Engineering Showcase | Devsynx",
    description: "Production-grade native iOS, Android, and Flutter applications engineered for hyper-scale and silky 60fps UX.",
    url: "https://devsynx.com/portfolio/mobile-applications/",
    siteName: "Devsynx",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Portfolio | Devsynx",
    description: "Production-grade native iOS, Android, and Flutter applications engineered for hyper-scale and silky 60fps UX.",
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/clients/" },
  { name: "Mobile Applications", path: "/portfolio/mobile-applications/" },
]);

const pageSchema = buildWebPageSchema({
  title: "Mobile Application Engineering & App Showcase | Devsynx",
  description:
    "Explore Devsynx's mobile application portfolio featuring live iOS, Android, and cross-platform apps including social video networks, email clients, telehealth, and sports platforms.",
  path: "/portfolio/mobile-applications/",
});

// Prioritize projects with high-quality real device screenshots first
const orderedMobileIds = [
  "sigma-smart-tech",
  "spicify-app",
  "zeparty",
  "superhuman-mail",
  "glitchy-digital-marketing",
  "ballchart",
  "quickdoctor-ie",
  "suuvo",
];

const mobileProjects = orderedMobileIds
  .map((id) => clientProjects.find((p) => p.id === id))
  .filter((p): p is (typeof clientProjects)[0] => Boolean(p));

// Marquee flagship project
const flagship = clientProjects.find((p) => p.id === "sigma-smart-tech") || mobileProjects[0];

export default function MobileApplicationsPortfolioPage() {
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
        label="Mobile Application Engineering & Native Architectures"
        title={
          <>
            Engineering High-Retention <span className="text-gradient">Mobile Apps</span> for iOS &amp; Android
          </>
        }
        subtitle="From viral short-form social video platforms and real-time streaming engines to HIPAA-compliant telehealth and ad management apps, we engineer apps users love returning to every day."
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
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>4.8 ★</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Average Store Rating</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Across App Store &amp; Google Play</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>&lt; 100ms</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Feed Rendering Latency</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Ultra-optimized lazy streaming</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>99.9%</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Crash-Free Sessions</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Hardened CI/CD &amp; Sentry telemetry</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>100%</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Store Approval Success</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Apple Review &amp; Google Policy compliant</div>
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
                Featured Flagship Mobile App
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

      {/* Mobile Projects Showcase Grid */}
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
              Curated Mobile Portfolio
            </span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-dark)" }}>
              iOS, Android &amp; Cross-Platform Showcase
            </h2>
            <p style={{ maxWidth: "680px", margin: "12px auto 0", color: "var(--color-text-secondary)", fontSize: "1.063rem" }}>
              Explore production applications built with React Native, Flutter, Swift, and Kotlin, engineered for high concurrency and fluid touch gestures.
            </p>
          </div>

          <div className="portfolio-grid">
            {mobileProjects.map((project) => (
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
        </div>
      </section>

      {/* Capabilities & Tech Stack Section */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-alt)", borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-dark)" }}>
              How We Build Industry-Leading Mobile Apps
            </h2>
            <p style={{ maxWidth: "640px", margin: "12px auto 0", color: "var(--color-text-secondary)" }}>
              End-to-end engineering from system architecture to store submission and lifecycle maintenance.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(59, 130, 246, 0.12)", color: "#3B82F6" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>React Native &amp; Flutter</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Ship single-codebase iOS and Android apps with 90%+ code sharing while maintaining true 60fps native UI performance and platform-native touch gestures.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(6, 144, 157, 0.12)", color: "var(--color-primary)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Video Feeds &amp; Media Pipelines</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Custom HLS/DASH video players with smart chunk pre-fetching, GPU camera filters, micro-creator video uploads, and zero-stutter vertical swiping.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(16, 185, 129, 0.12)", color: "#10B981" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Biometrics &amp; Enterprise Security</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                FaceID, TouchID, encrypted SQLite/WatermelonDB offline storage, OAuth2 PKCE token rotation, and end-to-end encrypted messaging.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(245, 158, 11, 0.12)", color: "#F59E0B" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>App Store Launch &amp; ASO</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Complete App Store &amp; Google Play submission management, guideline compliance appeals, automated Fastlane CI/CD, and App Store Optimization.
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
              Ready to Build Your Next Breakthrough Mobile App?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
              Book an architecture discovery session with Devsynx's lead mobile engineers. We analyze your requirements and provide a full technical roadmap within 48 hours.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" className="btn btn--primary">
                Schedule Technical Discovery
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
