import type { Metadata } from "next";
import Link from "next/link";
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

function buildDeepDiveBlocks(title: string, keywords: string[]) {
  const primary = keywords[0] ?? "software development";
  const secondary = keywords[1] ?? "digital product delivery";
  const tertiary = keywords[2] ?? "technology strategy";

  return [
    {
      heading: "Strategic Context",
      content:
        `Most teams search for "${primary}" when they already feel friction in delivery, growth, or operations. The right response is not just a faster implementation cycle, but a clear strategy that links technical choices to measurable business outcomes. In practice, successful teams define baseline metrics first, then map architecture, scope, and release sequencing to those metrics. This reduces random execution and helps stakeholders see why each decision matters. A strategic approach also improves alignment between founders, product managers, engineering teams, and operations leaders by using shared outcomes instead of assumptions.`,
    },
    {
      heading: "Execution Framework",
      content:
        `A strong execution model starts with clear scope boundaries and milestone-based delivery. For ${secondary}, break work into short cycles with visible outputs, fixed acceptance criteria, and weekly retrospectives. This keeps quality stable while preserving speed. Teams that ship consistently also implement lightweight documentation standards: architecture notes, integration contracts, and test coverage expectations. Those artifacts reduce hidden risk and make onboarding easier for new developers. If execution quality is inconsistent, the issue is often process clarity rather than developer capability.`,
    },
    {
      heading: "Architecture and Scalability",
      content:
        `Scalability decisions should be intentional from day one, even for MVPs. You do not need enterprise complexity immediately, but you should avoid architecture that blocks growth. For ${tertiary}, define boundaries for data access, service responsibilities, and API contracts early. This makes future feature expansion predictable and lowers rework cost. The goal is progressive hardening: start lean, then add resilience through monitoring, caching, and infrastructure automation as usage grows. A staged architecture plan gives both technical teams and business teams confidence in long-term viability.`,
    },
    {
      heading: "Common Mistakes to Avoid",
      content:
        "Teams frequently overbuild in early stages, delay user validation, or rely on vague success metrics. Another common mistake is treating SEO, analytics, and tracking as post-launch tasks, which causes weak learning loops later. From an execution perspective, poor handoffs between product, design, and engineering create quality gaps that accumulate release after release. You can avoid this by writing explicit user flow acceptance criteria and validating edge cases before development starts. Finally, avoid dependency lock-in without clear trade-off analysis; early convenience can become expensive technical debt.",
    },
    {
      heading: "Measurement and Optimization",
      content:
        "High-performing teams treat launch as the beginning of optimization, not the finish line. Define a monthly improvement cycle that reviews user behavior, funnel drop-offs, feature adoption, and operational reliability. Prioritize changes that produce measurable gains in conversion, retention, or delivery efficiency. Over time, this turns the product into a compounding asset. Optimization should include both product-level and engineering-level metrics, such as release lead time, bug escape rate, and infrastructure costs. This dual lens ensures business growth and technical quality improve together.",
    },
  ];
}

function buildFaqItems(title: string, keywords: string[]) {
  const primary = keywords[0] ?? "this service";
  const secondary = keywords[1] ?? "implementation";
  return [
    {
      q: `How long does ${primary} usually take to implement?`,
      a: "Timeline depends on scope complexity, integrations, and compliance needs. Most teams should plan phased delivery with an initial release, then iterative optimization based on usage data.",
    },
    {
      q: `What makes ${secondary} successful in real projects?`,
      a: "Success comes from clear requirements, measurable milestones, disciplined QA, and consistent stakeholder communication. Technical execution quality must match business priorities.",
    },
    {
      q: `Should we start with an MVP or a full build?`,
      a: "In most cases, an MVP-first approach is lower risk. It allows faster validation, better prioritization, and stronger long-term architecture decisions based on real user behavior.",
    },
    {
      q: `How do we know if the project is delivering ROI?`,
      a: "Define baseline metrics before delivery, then track conversion, retention, operational savings, and release velocity after launch. Improvement trends are the clearest ROI signal.",
    },
    {
      q: `Can Devsynx support both strategy and implementation?`,
      a: "Yes. Devsynx supports roadmap planning, architecture, development, QA, deployment, and optimization so teams can move from idea to measurable outcomes with one partner.",
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

  const articleSchema = buildArticleSchema(post);
  const faqSchema = buildFaqSchema(
    faqItems.map((item) => ({ question: item.q, answer: item.a }))
  );
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: post.title, path: `/blog/${post.slug}/` },
  ]);

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
        label="Blog"
        title={post.h1}
        subtitle={post.intro}
      />

      <section className="section section--alt">
        <div className="container">
          <div className="about-grid">
            {post.sections.map((section) => (
              <div key={section.heading} className="about-card">
                <h2 className="about-card__title">{section.heading}</h2>
                <p className="about-card__text">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">In-Depth Breakdown</h2>
            <p className="section__subtitle">
              Detailed execution guidance to help teams move from strategy to delivery.
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

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Implementation Checklist</h2>
          </div>
          <div className="services-grid">
            {[
              "Define business goals and baseline metrics before development.",
              "Create a phased roadmap with clear release milestones.",
              "Set architecture boundaries for scalability and maintainability.",
              "Implement QA gates and regression checks in every sprint.",
              "Track post-launch KPIs and optimize based on real usage.",
            ].map((item, index) => (
              <div key={item} className="service-card">
                <div className="service-card__header">
                  <div className="service-card__number">S{index + 1}</div>
                </div>
                <p className="service-card__desc">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Keywords Covered</h2>
          </div>
          <div className="services-grid">
            {post.keywords.map((keyword, index) => (
              <div key={keyword} className="service-card">
                <div className="service-card__header">
                  <div className="service-card__number">K{index + 1}</div>
                </div>
                <h3 className="service-card__title">{keyword}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Frequently asked questions</h2>
          </div>
          <FaqBlock
            items={faqItems.map((item) => ({
              question: item.q,
              answer: item.a,
            }))}
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Related Articles</h2>
          </div>
          <div className="services-grid">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}/`} className="service-card">
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__desc">{item.description}</p>
                <span className="service-card__link">Read More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to put this into practice?"
        subtitle={post.ctaText}
        primaryLabel="Talk to Devsynx"
        secondaryLabel="Explore services"
      />
    </>
  );
}
