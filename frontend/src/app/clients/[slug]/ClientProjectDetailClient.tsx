"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/case-study.css";
import { AnimatedSection } from "@/components/AnimatedSection";
import type { ClientProject } from "@/data/clients";

interface ClientProjectDetailClientProps {
  project: ClientProject;
  relatedProjects: ClientProject[];
}

export function ClientProjectDetailClient({
  project,
  relatedProjects,
}: ClientProjectDetailClientProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <section className="cs-hero" id="overview">
        <div className="cs-hero__bg">
          <div className="cs-hero__glow"></div>
          <div className="cs-hero__grid"></div>
        </div>

        <div className="container">
          <div className="cs-hero__inner">
            <AnimatedSection animation="fade-up">
              <Link href="/clients/" className="cs-hero__nav">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to All Projects &amp; Clients
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={80}>
              <div className="cs-hero__badge-row">
                <span className="cs-hero__category">{project.category}</span>
                <span className="cs-hero__region" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {project.region}
                </span>
                {project.year && (
                  <span className="cs-hero__region" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Launched {project.year}
                  </span>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={140}>
              <h1 className="cs-hero__title">
                {project.clientName}: <span className="text-gradient">{project.projectTitle}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="cs-hero__tagline">{project.tagline}</p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={260}>
              <div className="cs-hero__actions">
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--lg btn--glow"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
                >
                  Visit Live Website
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <Link
                  href="/contact/"
                  className="btn btn--secondary btn--lg"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  Start a Similar Project
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BROWSER SHOWCASE MOCKUP
          ═══════════════════════════════════════ */}
      <section className="cs-mockup-section" id="live-platform-preview">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="cs-browser-frame">
              <div className="cs-browser-header">
                <div className="cs-browser-dots">
                  <span className="cs-browser-dot cs-browser-dot--red"></span>
                  <span className="cs-browser-dot cs-browser-dot--yellow"></span>
                  <span className="cs-browser-dot cs-browser-dot--green"></span>
                </div>

                {/* Desktop / Mobile Switcher */}
                {project.mobileImage && (
                  <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.06)", padding: "3px", borderRadius: "10px", gap: "4px" }}>
                    <button
                      type="button"
                      onClick={() => setViewMode("desktop")}
                      style={{
                        padding: "5px 14px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        background: viewMode === "desktop" ? "var(--color-primary)" : "transparent",
                        color: viewMode === "desktop" ? "#fff" : "var(--color-text-secondary)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      🖥️ Desktop View
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("mobile")}
                      style={{
                        padding: "5px 14px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        background: viewMode === "mobile" ? "var(--color-primary)" : "transparent",
                        color: viewMode === "mobile" ? "#fff" : "var(--color-text-secondary)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      📱 Mobile View
                    </button>
                  </div>
                )}

                <div className="cs-browser-bar">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>https://{project.domain}/</span>
                </div>
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-browser-live-btn"
                >
                  Visit Live Site ↗
                </a>
              </div>

              <div
                className="cs-browser-canvas"
                style={
                  viewMode === "mobile"
                    ? {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "48px 20px",
                        background: "radial-gradient(circle at center, #111e26 0%, #050b0e 100%)",
                        minHeight: "680px",
                        aspectRatio: "auto",
                      }
                    : {}
                }
              >
                {viewMode === "mobile" && project.mobileImage ? (
                  <div
                    style={{
                      width: "320px",
                      height: "640px",
                      position: "relative",
                      borderRadius: "38px",
                      border: "6px solid #1E293B",
                      boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 2px rgba(255,255,255,0.1)",
                      overflow: "hidden",
                      background: "#000",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "90px",
                        height: "18px",
                        borderRadius: "10px",
                        background: "#1E293B",
                        zIndex: 10,
                      }}
                    />
                    <Image
                      src={project.mobileImage}
                      alt={`${project.clientName} mobile responsive view`}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                ) : (
                  <Image
                    src={project.desktopImage || project.image}
                    alt={`${project.clientName} live website screenshot — Built by Devsynx`}
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                )}
              </div>

              <div className="cs-browser-caption">
                <span>
                  <strong>Official Live Production Platform:</strong> Engineered and supported by Devsynx
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#10B981", fontWeight: 700 }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981" }}></span>
                  Active &amp; Operational
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          QUICK FACTS & STATS
          ═══════════════════════════════════════ */}
      <section className="section" id="case-study-details" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Quick Facts Bento */}
          <AnimatedSection animation="fade-up">
            <div className="cs-facts-card">
              <div className="cs-fact-item">
                <span className="cs-fact-lbl">Client</span>
                <span className="cs-fact-val">{project.clientName}</span>
              </div>
              <div className="cs-fact-item">
                <span className="cs-fact-lbl">Category &amp; Industry</span>
                <span className="cs-fact-val">{project.category}</span>
              </div>
              <div className="cs-fact-item">
                <span className="cs-fact-lbl">Primary Region</span>
                <span className="cs-fact-val">{project.region}</span>
              </div>
              <div className="cs-fact-item">
                <span className="cs-fact-lbl">Live Website URL</span>
                <span className="cs-fact-val">
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                    {project.domain} ↗
                  </a>
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Key Result Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <AnimatedSection animation="fade-up">
              <div className="cs-metrics-grid">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="cs-metric-card">
                    <div className="cs-metric-card__glow"></div>
                    <div className="cs-metric-val">{m.value}</div>
                    <div className="cs-metric-lbl">{m.label}</div>
                    <p className="cs-metric-desc">{m.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* ═══════════════════════════════════════
              THE CHALLENGE & THE SOLUTION
              ═══════════════════════════════════════ */}
          <div className="cs-challenge-solution">
            <AnimatedSection animation="fade-up">
              <div className="cs-cs-card cs-cs-card--challenge">
                <div className="cs-cs-card__header">
                  <div className="cs-cs-card__icon" style={{ background: "rgba(239, 68, 68, 0.12)", color: "#EF4444" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <h2 className="cs-cs-card__title">The Challenge</h2>
                </div>
                <p className="cs-cs-card__text">{project.challenge}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={120}>
              <div className="cs-cs-card cs-cs-card--solution">
                <div className="cs-cs-card__header">
                  <div className="cs-cs-card__icon" style={{ background: "rgba(6, 144, 157, 0.12)", color: "var(--color-primary)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h2 className="cs-cs-card__title">What Devsynx Built</h2>
                </div>
                <p className="cs-cs-card__text">{project.solution}</p>
              </div>
            </AnimatedSection>
          </div>

          {/* ═══════════════════════════════════════
              WHAT WE DELIVERED CHECKLIST
              ═══════════════════════════════════════ */}
          {project.whatWeDelivered && project.whatWeDelivered.length > 0 && (
            <AnimatedSection animation="fade-up">
              <div className="cs-deliverables-box">
                <span className="section__label" style={{ paddingLeft: 0 }}>Engineering Scope</span>
                <h2 className="section__title" style={{ textAlign: "left", marginBottom: "8px" }}>
                  Key Engineering <span className="text-gradient">Deliverables</span>
                </h2>
                <p className="section__subtitle" style={{ textAlign: "left", marginBottom: "20px" }}>
                  Detailed breakdown of the architectural modules, custom integrations, and software features shipped by Devsynx for {project.clientName}.
                </p>

                <div className="cs-deliverables-grid">
                  {project.whatWeDelivered.map((item, idx) => (
                    <div key={idx} className="cs-deliv-item">
                      <svg className="cs-deliv-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* ═══════════════════════════════════════
              KEY SYSTEM CAPABILITIES
              ═══════════════════════════════════════ */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <>
              <AnimatedSection animation="fade-up">
                <div className="section__header" style={{ textAlign: "center", marginBottom: "36px" }}>
                  <span className="section__label">System Highlights</span>
                  <h2 className="section__title">
                    Core Capabilities &amp; <span className="text-gradient">Innovations</span>
                  </h2>
                  <p className="section__subtitle">
                    Purpose-built features tailored to {project.clientName}&apos;s specific operations and customers.
                  </p>
                </div>
              </AnimatedSection>

              <div className="cs-features-grid">
                {project.keyFeatures.map((feat, idx) => (
                  <AnimatedSection key={idx} animation="fade-up" delay={idx * 90}>
                    <div className="cs-feat-card">
                      <span className="cs-feat-card__num">0{idx + 1} // CAPABILITY</span>
                      <h3 className="cs-feat-card__title">{feat.title}</h3>
                      <p className="cs-feat-card__desc">{feat.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}

          {/* ═══════════════════════════════════════
              TECH STACK ARCHITECTURE
              ═══════════════════════════════════════ */}
          {project.techStack && project.techStack.length > 0 && (
            <>
              <AnimatedSection animation="fade-up">
                <div className="section__header" style={{ textAlign: "center", marginBottom: "36px" }}>
                  <span className="section__label">Under The Hood</span>
                  <h2 className="section__title">
                    Technology Stack &amp; <span className="text-gradient">Infrastructure</span>
                  </h2>
                  <p className="section__subtitle">
                    Modern frameworks, scalable databases, and secure APIs powering {project.domain}.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <div className="cs-tech-grid">
                  {project.techStack.map((stack, idx) => (
                    <div key={idx} className="cs-tech-col">
                      <div className="cs-tech-col__cat">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="16 18 22 12 16 6"></polyline>
                          <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                        {stack.category}
                      </div>
                      <div className="cs-tech-badges">
                        {stack.technologies.map((t, tIdx) => (
                          <span key={tIdx} className="cs-tech-badge">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </>
          )}

          {/* ═══════════════════════════════════════
              TESTIMONIAL
              ═══════════════════════════════════════ */}
          {project.testimonial && (
            <AnimatedSection animation="fade-up">
              <div className="cs-quote-card">
                <div className="cs-quote-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FDBD02" stroke="#FDBD02" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="cs-quote-text">&ldquo;{project.testimonial.quote}&rdquo;</p>
                <div className="cs-quote-author">
                  <div className="cs-quote-avatar">{project.testimonial.author.charAt(0)}</div>
                  <div>
                    <div className="cs-quote-name">{project.testimonial.author}</div>
                    <div className="cs-quote-role">{project.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* ═══════════════════════════════════════
              RELATED / MORE CASE STUDIES
              ═══════════════════════════════════════ */}
          {relatedProjects && relatedProjects.length > 0 && (
            <>
              <AnimatedSection animation="fade-up">
                <div className="section__header" style={{ textAlign: "center", marginTop: "40px", marginBottom: "32px" }}>
                  <span className="section__label">More Client Success</span>
                  <h2 className="section__title">
                    Explore Other <span className="text-gradient">Featured Projects</span>
                  </h2>
                </div>
              </AnimatedSection>

              <div className="cs-more-grid">
                {relatedProjects.map((rel, rIdx) => (
                  <AnimatedSection key={rel.id} animation="fade-up" delay={rIdx * 90}>
                    <article className="portfolio-card">
                      <div className="portfolio-card__image-wrap">
                        <Image
                          src={rel.image}
                          alt={rel.projectTitle}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                        <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(5, 11, 14, 0.75)", backdropFilter: "blur(8px)", padding: "4px 12px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: 700, color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}>
                          📍 {rel.region}
                        </div>
                      </div>
                      <div className="portfolio-card__content">
                        <h3 className="portfolio-card__title">{rel.clientName}</h3>
                        <span className="portfolio-card__category">{rel.category}</span>
                        <p className="portfolio-card__desc" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                          {rel.description}
                        </p>
                        <div className="portfolio-card__actions">
                          <Link href={`/clients/${rel.id}/`} className="btn btn--primary btn--sm" style={{ flex: 1, textDecoration: "none" }}>
                            Read Case Study
                          </Link>
                          <a href={rel.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm" style={{ flex: 1, textDecoration: "none" }}>
                            Visit Site ↗
                          </a>
                        </div>
                      </div>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONVERSION CTA SECTION
          ═══════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--color-bg-alt)", borderTop: "1px solid var(--color-border)", textAlign: "center" }}>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <h2 className="section__title" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", marginBottom: "16px" }}>
              Ready to Build a Platform Like <span className="text-gradient">{project.clientName}?</span>
            </h2>
            <p className="section__subtitle" style={{ maxWidth: "680px", margin: "0 auto 32px" }}>
              Devsynx turns complex software requirements into production-ready platforms delivered in under 30 days. Let&apos;s talk about your vision.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" className="btn btn--primary btn--lg btn--glow">
                Schedule a Free Strategy Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/clients/" className="btn btn--secondary btn--lg">
                View All 18 Projects
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
