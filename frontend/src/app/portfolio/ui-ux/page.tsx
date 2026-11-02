import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { clientProjects } from "@/data/clients";
import { PortfolioCardThumbnail } from "@/components/PortfolioCardThumbnail";
import { PageHero } from "@/components/PageHero";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/seo/metadata";
import "@/styles/clients.css";

export const metadata: Metadata = {
  title: "UI and UX Design Portfolio | DEVSYNX",
  description:
    "UI and UX design work by DEVSYNX: design systems, product flows and 3D visuals for SaaS, ecommerce and mobile apps.",
  keywords: [
    "ui ux design agency",
    "figma design systems agency",
    "3d webgl website development",
    "threejs interactive web experiences",
    "luxury ecommerce design",
    "product design and prototyping",
    "design tokens and micro interactions",
  ],
  alternates: {
    canonical: "https://devsynx.com/portfolio/ui-ux/",
  },
  openGraph: {
    title: "UI/UX Design & 3D Web Showcase | Devsynx",
    description: "Awwwards-level UI/UX design systems, interactive 3D WebGL experiences, and conversion-engineered interfaces.",
    url: "https://devsynx.com/portfolio/ui-ux/",
    siteName: "Devsynx",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design & 3D Web Portfolio | Devsynx",
    description: "Awwwards-level UI/UX design systems, interactive 3D WebGL experiences, and conversion-engineered interfaces.",
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/clients/" },
  { name: "UI/UX Design & 3D", path: "/portfolio/ui-ux/" },
]);

const pageSchema = buildWebPageSchema({
  title: "UI/UX Design & 3D Web Portfolio | Devsynx",
  description:
    "Explore Devsynx's award-caliber UI/UX design and 3D web portfolio. Bespoke design systems, Figma tokens, interactive Three.js 3D visualizers, and luxury e-commerce interfaces.",
  path: "/portfolio/ui-ux/",
});

// Prioritize UI/UX & 3D projects with high-quality real visual screenshots first
const uiuxProjectIds = [
  "subdiv",
  "rebecca-minkoff",
  "mizn-abayas",
  "doughi",
  "signature-design-by-ashley",
  "silayi-pret",
  "luxora-women",
  "studio-pink-designs",
  "nw-canvas",
  "zahh-beverages",
  "thestarmint",
  "ui-ux-design-portfolio",
];

const uiuxProjects = uiuxProjectIds
  .map((id) => clientProjects.find((p) => p.id === id))
  .filter((p): p is (typeof clientProjects)[0] => Boolean(p));

// Marquee flagship project
const flagship = clientProjects.find((p) => p.id === "subdiv") || uiuxProjects[0];

export default function UiUxPortfolioPage() {
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
        label="Award-Caliber UI/UX Design & 3D Interactive Experiences"
        title={
          <>
            Engineering Interfaces That Feel <span className="text-gradient">Fluid, Haptic &amp; Alive</span>
          </>
        }
        subtitle="We build mathematically calibrated Figma design systems, hardware-accelerated 3D WebGL showrooms, and tactile micro-interactions that elevate brand perception and double conversions."
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
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>40+</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Enterprise Design Systems</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Figma tokens, atomic components &amp; docs</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>+68%</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Avg. Conversion Uplift</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Measured across e-commerce &amp; SaaS redesigns</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>60 FPS</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>Interactive 3D Performance</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>Three.js shaders &amp; WebGL acceleration</div>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--color-border)", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "6px" }}>100%</div>
              <div style={{ fontSize: "0.938rem", fontWeight: 700, color: "var(--color-dark)" }}>WCAG AAA Compliant</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", marginTop: "4px" }}>High contrast, keyboard navigation &amp; a11y</div>
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
                Featured Design System Showcase
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

      {/* UI/UX Projects Showcase Grid */}
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
              UI/UX &amp; 3D Interactive Portfolio
            </span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-dark)" }}>
              Award-Caliber Interfaces &amp; 3D Visualizers
            </h2>
            <p style={{ maxWidth: "680px", margin: "12px auto 0", color: "var(--color-text-secondary)", fontSize: "1.063rem" }}>
              Explore how we fuse aesthetic visual storytelling with tactile usability across luxury retail, 3D industrial manufacturing, and SaaS.
            </p>
          </div>

          <div className="portfolio-grid">
            {uiuxProjects.map((project) => (
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
                    <span className="portfolio-card__services-label">Design &amp; 3D Pillars</span>
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

      {/* Design Engineering Principles Section */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-alt)", borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-dark)" }}>
              The Devsynx Design Engineering Standard
            </h2>
            <p style={{ maxWidth: "640px", margin: "12px auto 0", color: "var(--color-text-secondary)" }}>
              We reject bland template aesthetics in favor of bespoke typographic rhythm, haptic feedback, and interactive depth.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(139, 92, 246, 0.12)", color: "#8B5CF6" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-5V6.9L12 2z"/><path d="M12 22V12"/><path d="M21 6.9l-9 5.1-9-5.1"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Figma Token Systems</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Shared design tokens mapped 1-to-1 with CSS variables and Tailwind classes. Zero developer handoff friction and instant theme consistency.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(6, 144, 157, 0.12)", color: "var(--color-primary)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Interactive 3D WebGL</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                360-degree product visualizers, Ray-marched glass effects, real-time lighting shaders, and elevation models powered by Three.js and Blender.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(245, 158, 11, 0.12)", color: "#F59E0B" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Micro-Interactions &amp; Motion</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Fluid spring physics, GSAP scroll triggers, magnetic cursor interactions, and responsive gestures that make software feel tangible.
              </p>
            </div>
            <div style={{ background: "var(--color-card-bg)", padding: "32px", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(16, 185, 129, 0.12)", color: "#10B981" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                </span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px" }}>Conversion-Rate Architecture</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.938rem", lineHeight: 1.6 }}>
                Fitts's Law button placement, visual hierarchy designed to guide the eye directly to the checkout or lead form, and zero cognitive friction.
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
              Ready for an Awwwards-Level Digital Redesign?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
              Consult directly with Devsynx's principal UI/UX architects. We audit your existing interface and share interactive Figma prototypes tailored for your market.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" className="btn btn--primary">
                Request UI/UX Strategy Review
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
