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
  const faqItems = post.faqs ?? [];
  const matchingService = getMatchingService(post.slug);
  const wordCount = [post.intro, ...post.sections.map((s) => s.content), ...faqItems.map((f) => f.answer)]
    .join(" ")
    .split(/\s+/).length;
  const readMinutes = Math.max(2, Math.round(wordCount / 220));

  const articleSchema = buildArticleSchema(post);
  const faqSchema = faqItems.length ? buildFaqSchema(faqItems) : null;
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
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
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
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-text-secondary, #94a3b8)",
                    marginTop: "2px",
                  }}
                >
                  CEO &amp; Founder, Devsynx • {readMinutes} min read • {displayDate}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <a
                href="https://www.linkedin.com/company/devsynx-offial/"
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

      {post.takeaways?.length ? (
        <section className="section" style={{ paddingTop: "0px", paddingBottom: "24px" }}>
          <div className="container">
            <div className="direct-answer-box" style={{ maxWidth: "none" }}>
              <h2 className="direct-answer-box__label" style={{ margin: 0 }}>
                <span>Key Takeaways</span>
              </h2>
              <ul className="direct-answer-box__text" style={{ margin: "8px 0 0", paddingLeft: "1.2em", display: "grid", gap: "6px" }}>
                {post.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

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
                  href="https://www.linkedin.com/company/devsynx-offial/"
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
      {faqItems.length ? (
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Frequently Asked Questions</h2>
          </div>
          <FaqBlock items={faqItems} />
        </div>
      </section>
      ) : null}

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
