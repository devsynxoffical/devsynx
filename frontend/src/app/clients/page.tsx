"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/clients.css";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { clientProjects } from "@/data/clients";
import { PortfolioCardThumbnail } from "@/components/PortfolioCardThumbnail";

import { buildBreadcrumbSchema, buildWebPageSchema } from "@/seo/metadata";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/clients/" },
]);

const pageSchema = buildWebPageSchema({
  title: "Client Portfolio & Live Software Showcase | Devsynx",
  description: "Explore all live websites, e-commerce stores, mobile apps, SaaS platforms, and SEO architectures engineered by Devsynx worldwide.",
  path: "/clients/",
});


export default function ClientsPage() {
  const [filter, setFilter] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Projects",
    "Web Development",
    "E-Commerce & Retail",
    "Mobile & Social Apps",
    "SaaS & Systems",
    "SEO & Growth",
    "AI & Automation",
  ];

  const filteredProjects = useMemo(() => {
    return clientProjects.filter((p) => {
      // Category match
      let matchesCategory = true;
      if (filter !== "All Projects") {
        const cat = p.category.toLowerCase();
        if (filter === "Web Development") {
          matchesCategory = cat.includes("web") || cat.includes("corporate") || cat.includes("construction") || cat.includes("contracting");
        } else if (filter === "E-Commerce & Retail") {
          matchesCategory = cat.includes("commerce") || cat.includes("retail") || cat.includes("store") || cat.includes("agritech");
        } else if (filter === "Mobile & Social Apps") {
          matchesCategory = cat.includes("mobile") || cat.includes("social") || cat.includes("android") || cat.includes("ios") || cat.includes("streaming");
        } else if (filter === "SaaS & Systems") {
          matchesCategory = cat.includes("saas") || cat.includes("systems") || cat.includes("internal") || cat.includes("crm") || cat.includes("security") || cat.includes("scada") || cat.includes("integration");
        } else if (filter === "SEO & Growth") {
          matchesCategory = cat.includes("seo") || cat.includes("growth") || cat.includes("content") || cat.includes("telehealth") || cat.includes("marketing");
        } else if (filter === "AI & Automation") {
          matchesCategory = cat.includes("ai") || cat.includes("voice") || cat.includes("automation") || cat.includes("video") || cat.includes("motion");
        }
      }

      // Search match
      if (!matchesCategory) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        p.clientName.toLowerCase().includes(q) ||
        p.projectTitle.toLowerCase().includes(q) ||
        p.domain.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.region.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }).sort((a, b) => {
      // Prioritize mobile order if in Mobile & Social Apps
      const mobilePriority: Record<string, number> = {
        "sigma-smart-tech": 1,
        "spicify-app": 2,
        "zeparty": 3,
        "superhuman-mail": 4,
        "glitchy-digital-marketing": 5,
        "ballchart": 6,
        "quickdoctor-ie": 7,
        "suuvo": 8,
      };

      if (filter === "Mobile & Social Apps") {
        const prioA = mobilePriority[a.id] || 99;
        const prioB = mobilePriority[b.id] || 99;
        if (prioA !== prioB) return prioA - prioB;
      }

      // Prioritize real screenshot projects over dark silhouette mockups
      const darkMockupIds = new Set([
        "whatsapp-business-api",
        "google-workspace-security",
        "ai-calling-agent",
        "devsynx-attendance-hr",
        "employee-security-crm",
        "google-review-removal",
        "ai-video-production",
        "motion-graphic-explainers",
      ]);

      const aDark = darkMockupIds.has(a.id) ? 1 : 0;
      const bDark = darkMockupIds.has(b.id) ? 1 : 0;
      return aDark - bDark;
    });
  }, [filter, searchQuery]);

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

      {/* Hero Banner */}
      <PageHero
        label="Proven Track Record & Global Portfolio"
        title={
          <>
            Engineering Excellence for <span className="text-gradient">Global Clients</span>
          </>
        }
        subtitle="Explore our live software platforms, high-converting e-commerce flagships, mobile applications, and SEO architectures engineered across 15+ countries."
      />

      {/* Verified Stats Showcase Banner */}
      <section style={{ background: "var(--color-bg)", padding: "20px 0 40px", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              background: "var(--color-card-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: "20px",
              padding: "24px 32px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--color-primary)", lineHeight: 1.1 }}>500+</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", fontWeight: 700, marginTop: "4px" }}>Businesses Served</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: "#10B981", lineHeight: 1.1 }}>200+</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", fontWeight: 700, marginTop: "4px" }}>Websites Delivered</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: "#3B82F6", lineHeight: 1.1 }}>30+</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", fontWeight: 700, marginTop: "4px" }}>Apps &amp; Software Systems</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: "#EC4899", lineHeight: 1.1 }}>70+</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", fontWeight: 700, marginTop: "4px" }}>E-Commerce Stores</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: "#F59E0B", lineHeight: 1.1 }}>15+</div>
              <div style={{ fontSize: "0.813rem", color: "var(--color-text-secondary)", fontWeight: 700, marginTop: "4px" }}>Global Markets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Projects Grid */}
      <section className="section section--alt">
        <div className="container">
          {/* Controls Bar: Search & Category Filters */}
          <AnimatedSection animation="fade-up">
            <div style={{ maxWidth: "800px", margin: "0 auto 32px" }}>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Search all projects by client name, industry, tech stack, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "16px 24px 16px 52px",
                    borderRadius: "32px",
                    background: "var(--color-card-bg)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-dark)",
                    fontSize: "0.938rem",
                    outline: "none",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", color: "var(--color-text-secondary)" }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    style={{
                      position: "absolute",
                      right: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent",
                      border: "none",
                      color: "var(--color-text-secondary)",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "30px",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    border: "1px solid",
                    borderColor: filter === cat ? "var(--color-primary)" : "var(--color-border)",
                    background: filter === cat ? "var(--color-primary)" : "var(--color-card-bg)",
                    color: filter === cat ? "#ffffff" : "var(--color-dark)",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    boxShadow: filter === cat ? "0 6px 20px rgba(6,144,157,0.3)" : "none",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div style={{ textAlign: "center", marginBottom: "40px", fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
              Showing <strong>{filteredProjects.length}</strong> of <strong>{clientProjects.length}</strong> verified portfolio projects
            </div>
          </AnimatedSection>

          {/* Grid */}
          {filteredProjects.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", background: "var(--color-card-bg)", borderRadius: "20px", border: "1px solid var(--color-border)" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🔍</div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--color-dark)", marginBottom: "8px" }}>No projects matched your search</h3>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "20px" }}>
                Try searching for a different keyword like &quot;Shopify&quot;, &quot;SEO&quot;, &quot;Next.js&quot;, or &quot;Dubai&quot;.
              </p>
              <button
                onClick={() => { setFilter("All Projects"); setSearchQuery(""); }}
                className="btn btn--secondary btn--sm"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="portfolio-grid">
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} animation="fade-up" delay={(index % 3) * 60}>
                  <article className="portfolio-card">
                    {/* Top Preview Screenshot Image with auto-fallback */}
                    <PortfolioCardThumbnail project={project} />

                    <div className="portfolio-card__content">
                      <h3 className="portfolio-card__title">
                        <Link href={`/clients/${project.id}/`} style={{ color: "inherit", textDecoration: "none" }}>
                          {project.clientName}
                        </Link>
                      </h3>
                      <span className="portfolio-card__category">{project.category}</span>
                      <p className="portfolio-card__desc">{project.description}</p>

                      <div className="portfolio-card__services">
                        <span className="portfolio-card__services-label">Focus Areas:</span>
                        <div className="portfolio-card__tags">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className="portfolio-card__tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="portfolio-card__actions">
                        <Link
                          href={`/clients/${project.id}/`}
                          className="btn btn--primary btn--sm"
                          style={{ flex: 1, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
                        >
                          Case Study
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </Link>
                        {project.websiteUrl && project.websiteUrl.startsWith("http") ? (
                          <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--outline btn--sm"
                            style={{ flex: 1, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
                          >
                            Live Site
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                          </a>
                        ) : (
                          <Link
                            href={`/clients/${project.id}/`}
                            className="btn btn--outline btn--sm"
                            style={{ flex: 1, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
                          >
                            Overview
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Ready to Join Our Success Stories Banner */}
      <section className="section" style={{ background: "var(--color-bg-alt)", textAlign: "center", borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <h2 className="section__title" style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
              Ready to Join Our <span className="text-gradient">70+ Success Stories?</span>
            </h2>
            <p className="section__subtitle" style={{ maxWidth: "640px", margin: "0 auto 32px" }}>
              Whether you need an enterprise web application, high-converting e-commerce flagship, mobile app, or search engine dominance — our engineering team is ready to deliver.
            </p>
            <Link href="/contact/" className="btn btn--primary btn--lg btn--glow">
              Start Your Project With Devsynx
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
