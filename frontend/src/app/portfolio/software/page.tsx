import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { clientProjects } from "@/data/clients";
import { PortfolioCardThumbnail } from "@/components/PortfolioCardThumbnail";
import { PageHero } from "@/components/PageHero";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/seo/metadata";
import "@/styles/clients.css";

export const metadata: Metadata = {
  title: "Custom Software & SaaS Development Portfolio",
  description:
    "Explore Devsynx's enterprise software and SaaS portfolio featuring multi-tenant cloud platforms, automated CRM engines, HRMS systems, SCADA IoT telemetry, and SecOps portals.",
  keywords: [
    "custom software development company",
    "enterprise saas development",
    "cloud software architecture",
    "multi tenant saas platform",
    "custom crm development",
    "scada telemetry iot software",
    "ai voice agent telephony platform",
    "nextjs full stack web app",
    "fintech installment payment software",
  ],
  alternates: {
    canonical: "https://devsynx.com/portfolio/software/",
  },
  openGraph: {
    title: "Enterprise Software & SaaS Portfolio | Devsynx",
    description: "Mission-critical cloud software, automated CRM engines, multi-tenant SaaS, and industrial IoT platforms engineered by Devsynx.",
    url: "https://devsynx.com/portfolio/software/",
    siteName: "Devsynx",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software & SaaS Development Portfolio | Devsynx",
    description: "Mission-critical cloud software, automated CRM engines, multi-tenant SaaS, and industrial IoT platforms engineered by Devsynx.",
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/clients/" },
  { name: "Custom Software & SaaS", path: "/portfolio/software/" },
]);

const pageSchema = buildWebPageSchema({
  title: "Custom Software & SaaS Development Portfolio | Devsynx",
  description:
    "Explore Devsynx's enterprise software and SaaS portfolio featuring multi-tenant cloud platforms, automated CRM engines, HRMS systems, SCADA IoT telemetry, and SecOps portals.",
  path: "/portfolio/software/",
});

// Prioritize projects with high-quality real website & dashboard screenshots first
const softwareProjectIds = [
  "zingo-assist",
  "entiix",
  "odoo-service",
  "alphamedi-assist",
  "purrchase-ai",
  "installmentguard",
  "mdt-control",
  "rankmora",
  "contractor-leads",
  "horizone-invest",
  "smart-links-cabling",
  "devsynx-platform",
  "devsynx-attendance-hr",
  "employee-security-crm",
  "google-review-removal",
  "whatsapp-business-api",
  "google-workspace-security",
  "ai-calling-agent",
];

// Maintain exact priority sequence: real screenshots first, dark silhouette mockups last
const softwareProjects = softwareProjectIds
  .map((id) => clientProjects.find((p) => p.id === id))
  .filter((p): p is (typeof clientProjects)[0] => Boolean(p));

// Marquee flagship project
const flagship = clientProjects.find((p) => p.id === "entiix") || softwareProjects[0];

export default function SoftwarePortfolioPage() {
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
        label="Custom Software Engineering & Cloud Platforms"
        title={
          <>
            Building Mission-Critical <span className="text-gradient">Custom Software &amp; SaaS</span>
          </>
        }
        subtitle="We design, engineer, and scale high-concurrency cloud architectures, multi-tenant SaaS products, enterprise HRMS platforms, and industrial SCADA automation engines built for fault tolerance."
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
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>99.99%</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>System Uptime SLA</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Redundant multi-region cloud clustering</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>10M+</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Background Jobs Handled</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Asynchronous BullMQ &amp; Redis queues</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>SOC2-Ready</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Security &amp; Encryption</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>AES-256 at rest, TLS 1.3 in transit</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>25+</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>SaaS Platforms Deployed</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>From zero to revenue across 7 countries</div>
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
                Featured Flagship SaaS Platform
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

      {/* Software Projects Showcase Grid */}
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
              Enterprise Software &amp; SaaS Systems
            </span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-dark)" }}>
              Live Cloud Platforms &amp; Internal Software
            </h2>
            <p style={{ maxWidth: "680px", margin: "12px auto 0", color: "var(--color-text-secondary)", fontSize: "1.063rem" }}>
              Explore production enterprise systems engineered for security, high volume transaction processing, and business automation.
            </p>
          </div>

          <div className="portfolio-grid">
            {softwareProjects.map((project) => (
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
              Enterprise Software Architecture Principles
            </h2>
            <p style={{ maxWidth: "640px", margin: "12px auto 0", color: "var(--color-text-secondary)" }}>
              How we construct resilient backends, secure multi-tenant data schemas, and high-velocity systems.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(16, 185, 129, 0.12)", color: "#10B981" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Multi-Tenant SaaS Isolation</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Row-level security (RLS), tenant-specific schema routing, subdomains with automated wildcard SSL, and automated billing tier enforcement.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(6, 144, 157, 0.12)", color: "var(--color-primary)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>SCADA &amp; IoT Real-Time Pipelines</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Modbus, MQTT, and OPC-UA industrial protocol integration, sub-second telemetry dashboards, threshold alerts, and automated valve actuation.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(59, 130, 246, 0.12)", color: "#3B82F6" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>RBAC &amp; Audit Logs</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Granular permissions, SAML/SSO Okta integration, tamper-evident immutable audit logs, and SOC2/HIPAA compliance controls.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(139, 92, 246, 0.12)", color: "#8B5CF6" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>AI Agents &amp; Automation</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Autonomous voice calling bots, document OCR extraction, intelligent dispute letter generation, and automated CRM webhook orchestrations.
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
              Have a Custom Software or SaaS Vision?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
              Our senior software architects review your functional spec, database design, and scaling targets to deliver an actionable technical implementation scope.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" className="btn btn--primary">
                Request Software Architecture Review
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
