import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/seo/blogPosts";
import { brandVariantKeywords } from "@/seo/keywords";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
} from "@/seo/metadata";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqBlock } from "@/components/FaqBlock";

type Props = {
  params: Promise<{ slug: string }>;
};

function getMatchingService(slug: string): {
  label: string;
  href: string;
  description: string;
} {
  switch (slug) {
    case "how-much-does-software-development-cost":
      return {
        label: "Custom Web & Software Development",
        href: "/services/custom-web-development/",
        description: "Fixed-price discovery sprints and dedicated full-stack engineering pods with transparent pricing.",
      };
    case "nextjs-seo-optimization-guide":
      return {
        label: "Next.js Web Development Services",
        href: "/services/custom-web-development/",
        description: "Search-engine-first Next.js architectures with sub-100ms TTFB and automated App Router SEO.",
      };
    case "how-to-choose-a-software-development-company":
      return {
        label: "Verified Client Portfolio & Case Studies",
        href: "/clients/",
        description: "Inspect over 70 real-world production case studies across fintech, health, SaaS, and automation.",
      };
    case "cloud-migration-checklist":
      return {
        label: "Enterprise Cloud Migration Services",
        href: "/services/cloud-migration/",
        description: "Zero-downtime database replication, landing zone security, and AWS/GCP cloud modernizations.",
      };
    case "ai-calling-agents-for-business":
      return {
        label: "AI Calling Agent & Voice Bot Solutions",
        href: "/services/voice-ai-bots/",
        description: "Autonomous low-latency voice AI agents for lead qualification, booking, and 24/7 customer support.",
      };
    case "business-process-automation-guide":
      return {
        label: "Process Automation & BPA Services",
        href: "/services/process-automation/",
        description: "End-to-end operational workflow automation, ERP integrations, and custom internal tool development.",
      };
    case "saas-vs-custom-software":
      return {
        label: "SaaS Product Development Services",
        href: "/services/saas-product-development/",
        description: "From concept MVP to multi-tenant cloud architecture with Stripe billing and enterprise RBAC.",
      };
    case "how-to-build-an-mvp-in-30-days":
      return {
        label: "MVP & SaaS Engineering Services",
        href: "/services/saas-product-development/",
        description: "Rapid 30-day proof-of-concept sprints designed for venture-backed founders and scaling startups.",
      };
    case "why-outsource-software-development-to-pakistan":
      return {
        label: "Software House in Islamabad (Devsynx HQ)",
        href: "/software-house-islamabad/",
        description: "Headquartered in Islamabad with senior full-stack teams, US timezone overlap, English fluency, and 65% lower total project cost.",
      };
    default:
      return {
        label: "Explore All Devsynx Engineering Services",
        href: "/services/",
        description: "Full-cycle software engineering, AI automation, and cloud infrastructure for growing enterprises.",
      };
  }
}

function buildDeepDiveBlocks(title: string, keywords: string[]) {
  const primary = keywords[0] ?? "software development";
  const secondary = keywords[1] ?? "digital product delivery";
  const tertiary = keywords[2] ?? "technology strategy";

  return [
    {
      heading: "Strategic Business Context",
      content:
        `Most engineering and product leaders search for "${primary}" when they experience friction in velocity, architectural scalability, or delivery predictability. Rather than rushing into ad-hoc coding, high-performing organizations align technical milestones with measurable commercial KPIs: reducing customer acquisition cost, accelerating time-to-market, or stabilizing uptime. Defining baseline operational metrics first eliminates guesswork and aligns founders, investors, and developers on a shared roadmap.`,
    },
    {
      heading: "Execution & Agile Delivery Framework",
      content:
        `Consistent delivery requires strict scope boundaries and disciplined agile sprints. For ${secondary}, break requirements into 2-week sprint cycles with concrete pull request reviews, automated CI/CD builds, and explicit acceptance tests. Establishing documented integration contracts and OpenAPI specifications from sprint zero prevents regression debt and enables international engineering pods to collaborate asynchronously with zero delivery friction.`,
    },
    {
      heading: "Architecture, Scalability & Security Protocols",
      content:
        `Scalability must be engineered intentionally, even for early-stage MVPs. While premature over-engineering wastes capital, cutting corners on ${tertiary} creates catastrophic refactoring costs down the line. Isolate data persistence layers, decouple frontend presentation from backend microservices, and enforce zero-trust authentication (JWT/OAuth2) with automated TLS encryption. This modularity ensures your system smoothly scales from 1,000 to 1,000,000 concurrent users without rewrites.`,
    },
    {
      heading: "Common Industry Pitfalls to Avoid",
      content:
        "The most damaging mistakes we see in software projects are: (1) building monolithic architectures without modular domain boundaries, (2) postponing SEO, analytics, and security audits until after launch, and (3) hiring generic outsourcing firms that bait-and-switch senior leads for junior interns. Mitigate these risks by requiring test-driven acceptance criteria, weekly working software demos, and full Git repository ownership from day one.",
    },
    {
      heading: "Continuous Optimization & Post-Launch Growth",
      content:
        "Production deployment is the beginning of compounding value, not the finish line. Implement weekly telemetry reviews analyzing Largest Contentful Paint (LCP), Interaction to Next Paint (INP), API response latency, and user conversion funnels. Continuously refactoring based on real production telemetry turns your software platform into a high-margin business asset that outpaces competitors.",
    },
  ];
}

function buildFaqItems(title: string, keywords: string[]) {
  const primary = keywords[0] ?? "this service";
  const secondary = keywords[1] ?? "implementation";
  return [
    {
      q: `How long does ${primary} usually take to implement?`,
      a: "Timeline depends on scope complexity, third-party integrations, and compliance requirements. Typical MVP sprints launch in 4 to 8 weeks, while full enterprise platforms require 3 to 6 months with phased production milestones.",
    },
    {
      q: `What makes ${secondary} successful in real-world environments?`,
      a: "Success comes from disciplined sprint scoping, automated CI/CD testing, senior full-stack talent, and transparent weekly demos. Technical execution quality must directly serve core business outcomes.",
    },
    {
      q: `Should we start with an MVP or a full-scale build?`,
      a: "In 90% of cases, an MVP-first approach is superior. It validates product-market fit with real users, lowers upfront capital risk, and informs optimal long-term architecture before heavy capital investment.",
    },
    {
      q: `How do we track and measure ROI from this initiative?`,
      a: "Establish baseline operational metrics before development: conversion rate, server response latency, team velocity, or manual labor hours saved. Ongoing telemetry provides transparent ROI validation.",
    },
    {
      q: `How can Devsynx help deliver this project?`,
      a: "Devsynx provides senior full-stack engineering pods, dedicated solution architects, and proven design systems. We deliver complete source code ownership, automated testing, and US/EU timezone overlap.",
    },
  ];
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found", robots: { index: false, follow: false } };

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    keywords: [...post.keywords, ...brandVariantKeywords],
    ogType: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    ogImageAlt: post.title,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 4);
  const deepDiveBlocks = buildDeepDiveBlocks(post.title, post.keywords);
  const faqItems = buildFaqItems(post.title, post.keywords);
  const matchingService = getMatchingService(post.slug);

  const articleSchema = buildArticleSchema(post);
  const faqSchema = buildFaqSchema(
    faqItems.map((item) => ({ question: item.q, answer: item.a }))
  );
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: post.title, path: `/blog/${post.slug}/` },
  ]);

  const displayDate = post.updatedAt ? `Updated ${post.updatedAt}` : `Published ${post.publishedAt}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <PageHero
        label="Engineering Insights"
        title={post.h1}
        subtitle={post.intro}
      />

      {/* Author & Editorial Metadata Header */}
      <section className="section" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              padding: "18px 24px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #06909D",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                <Image
                  src="/team/Syedhassan.webp"
                  alt="Syed Hassan Ali Shah - CEO & Founder at Devsynx"
                  width={56}
                  height={56}
                  style={{ objectFit: "cover", objectPosition: "center 8%" }}
                />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Link
                    href="/about/"
                    style={{
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "var(--color-heading, #fff)",
                      textDecoration: "none",
                    }}
                  >
                    Syed Hassan Ali Shah
                  </Link>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      background: "rgba(6, 144, 157, 0.15)",
                      color: "#06909D",
                      fontWeight: 600,
                    }}
                  >
                    Verified Author
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-text-secondary, #94a3b8)",
                    marginTop: "2px",
                  }}
                >
                  CEO &amp; Founder, Devsynx • 8 min read • {displayDate}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <a
                href="https://www.linkedin.com/company/devsynx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
                style={{ fontSize: "0.85rem", padding: "8px 16px" }}
              >
                Follow on LinkedIn ↗
              </a>
              <Link
                href="/about/"
                className="btn btn--outline"
                style={{ fontSize: "0.85rem", padding: "8px 16px" }}
              >
                About Devsynx →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Matching Service Callout (First 300 Words Internal Link) */}
      <section className="section" style={{ paddingTop: "0px", paddingBottom: "32px" }}>
        <div className="container">
          <div
            style={{
              padding: "20px 24px",
              background: "linear-gradient(135deg, rgba(6, 144, 157, 0.08) 0%, rgba(26, 115, 232, 0.05) 100%)",
              border: "1px solid rgba(6, 144, 157, 0.25)",
              borderRadius: "14px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#06909D",
                  marginBottom: "4px",
                }}
              >
                Recommended Engineering Capability
              </div>
              <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-heading, #fff)" }}>
                {matchingService.label}
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-secondary, #94a3b8)",
                  margin: "4px 0 0",
                }}
              >
                {matchingService.description}
              </p>
            </div>
            <Link
              href={matchingService.href}
              className="btn btn--primary"
              style={{ fontSize: "0.875rem", padding: "10px 20px", whiteSpace: "nowrap" }}
            >
              Explore {matchingService.label} →
            </Link>
          </div>
        </div>
      </section>

      {/* Core Article Sections */}
      <section className="section section--alt">
        <div className="container">
          <div className="about-grid">
            {post.sections.map((section) => (
              <div key={section.heading} className="about-card">
                <h2 className="about-card__title">{section.heading}</h2>
                <p className="about-card__text" style={{ whiteSpace: "pre-line" }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Depth Technical Breakdown */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">In-Depth Execution Framework</h2>
            <p className="section__subtitle">
              Actionable engineering guidance to move from conceptual architecture to production delivery.
            </p>
          </div>
          <div className="about-grid">
            {deepDiveBlocks.map((block) => (
              <div key={block.heading} className="about-card">
                <h3 className="about-card__title">{block.heading}</h3>
                <p className="about-card__text">{block.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Actionable Checklist & Download Asset */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">2026 Production Checklist &amp; Implementation Gates</h2>
            <p className="section__subtitle">
              Verify these 5 production readiness gates before deploying to live users.
            </p>
          </div>
          <div className="services-grid">
            {[
              "Audit architecture contracts, API schemas (OpenAPI/Swagger), and zero-trust IAM boundaries.",
              "Enforce CI/CD automated test suites: unit, integration, and end-to-end regression testing.",
              "Optimize Core Web Vitals (sub-100ms TTFB, 95+ PageSpeed, zero Cumulative Layout Shift).",
              "Verify data backup redundancy, automated failover triggers, and encryption at rest.",
              "Activate telemetry alerts and track weekly business conversion against baseline metrics.",
            ].map((item, index) => (
              <div key={item} className="service-card">
                <div className="service-card__header">
                  <div className="service-card__number">G{index + 1}</div>
                </div>
                <p className="service-card__desc">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Keywords & Topic Coverage */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Target Technical Queries &amp; Concepts</h2>
          </div>
          <div className="services-grid">
            {post.keywords.map((keyword, index) => (
              <div key={keyword} className="service-card">
                <div className="service-card__header">
                  <div className="service-card__number">#{index + 1}</div>
                </div>
                <h3 className="service-card__title" style={{ fontSize: "1rem" }}>{keyword}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Bio Box */}
      <section className="section section--alt">
        <div className="container">
          <div
            style={{
              padding: "36px",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "20px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <div
              style={{
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #06909D",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src="/team/Syedhassan.webp"
                alt="Syed Hassan Ali Shah - CEO & Founder"
                width={96}
                height={96}
                style={{ objectFit: "cover", objectPosition: "center 8%" }}
              />
            </div>
            <div style={{ flex: "1 1 300px" }}>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#06909D",
                  marginBottom: "4px",
                }}
              >
                Written &amp; Curated by
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: "0 0 8px", color: "var(--color-heading, #fff)" }}>
                Syed Hassan Ali Shah
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-secondary, #94a3b8)",
                  lineHeight: 1.6,
                  margin: "0 0 16px",
                }}
              >
                CEO &amp; Founder at Devsynx. Oversees software engineering strategy, AI automation systems, and high-growth digital product delivery for clients across the United States, UK, Europe, and UAE. Passionate about clean architecture, Next.js performance, and pragmatic offshore delivery.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link href="/about/" className="btn btn--outline" style={{ fontSize: "0.85rem", padding: "6px 14px" }}>
                  About Devsynx Leadership →
                </Link>
                <Link href="/clients/" className="btn btn--outline" style={{ fontSize: "0.85rem", padding: "6px 14px" }}>
                  View 70+ Case Studies →
                </Link>
                <a
                  href="https://www.linkedin.com/company/devsynx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                  style={{ fontSize: "0.85rem", padding: "6px 14px" }}
                >
                  LinkedIn Profile ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Frequently Asked Questions</h2>
          </div>
          <FaqBlock
            items={faqItems.map((item) => ({
              question: item.q,
              answer: item.a,
            }))}
          />
        </div>
      </section>

      {/* Related Articles */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Related Engineering Articles</h2>
          </div>
          <div className="services-grid">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}/`} className="service-card">
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__desc">{item.description}</p>
                <span className="service-card__link">Read Article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Engineering Hubs & Commercial Services */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Primary Engineering Hubs &amp; Capabilities</h2>
            <p className="section__subtitle">
              Explore Devsynx specialized development offices and custom engineering solutions.
            </p>
          </div>
          <div className="services-grid">
            <Link href="/software-house-islamabad/" className="service-card">
              <h3 className="service-card__title">Software House Islamabad</h3>
              <p className="service-card__desc">
                Devsynx headquarters in Islamabad: custom web apps, mobile apps, ERP systems, and AI automation for regional and global clients.
              </p>
              <span className="service-card__link">Explore Islamabad HQ →</span>
            </Link>
            <Link href="/software-house-rawalpindi/" className="service-card">
              <h3 className="service-card__title">Software House Rawalpindi</h3>
              <p className="service-card__desc">
                Dedicated software development teams serving Rawalpindi businesses: Bahria Town, Saddar, and DHA tech deliveries.
              </p>
              <span className="service-card__link">Explore Rawalpindi Hub →</span>
            </Link>
            <Link href="/services/saas-product-development/" className="service-card">
              <h3 className="service-card__title">SaaS Product Development</h3>
              <p className="service-card__desc">
                Multi-tenant cloud architecture, Stripe billing, role-based access control, and 30-day MVP delivery sprints.
              </p>
              <span className="service-card__link">Explore SaaS Engineering →</span>
            </Link>
            <Link href="/seo-services-islamabad/" className="service-card">
              <h3 className="service-card__title">SEO Services Islamabad</h3>
              <p className="service-card__desc">
                Technical SEO, Next.js optimization, Google Maps ranking, and high-converting commercial search visibility.
              </p>
              <span className="service-card__link">Explore Local SEO →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* High-Converting Bottom CTA pointing to Matching Service */}
      <CtaSection
        badge="Enterprise Software Engineering"
        title="Ready to build or scale your digital product?"
        subtitle={post.ctaText}
        primaryHref={matchingService.href}
        primaryLabel={`Explore ${matchingService.label}`}
        secondaryHref="/contact/"
        secondaryLabel="Book an Architect Discovery Call"
      />
    </>
  );
}
