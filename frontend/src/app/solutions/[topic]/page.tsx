import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brandVariantKeywords, coreIntentKeywords } from "@/seo/keywords";
import { getSolutionTopicBySlug, solutionTopics } from "@/seo/solutionPages";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  buildWebPageSchema,
} from "@/seo/metadata";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";

type Props = {
  params: Promise<{ topic: string }>;
};

export function generateStaticParams() {
  return solutionTopics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: topicSlug } = await params;
  const topic = getSolutionTopicBySlug(topicSlug);

  if (!topic) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = topic.title;
  const description = topic.description;

  return buildPageMetadata({
    title,
    description,
    path: `/solutions/${topic.slug}/`,
    keywords: [...topic.focusKeywords, ...coreIntentKeywords.slice(0, 8), ...brandVariantKeywords],
    ogImageAlt: title,
  });
}

export default async function SolutionDetailPage({ params }: Props) {
  const { topic: topicSlug } = await params;
  const topic = getSolutionTopicBySlug(topicSlug);

  if (!topic) {
    notFound();
  }

  const relatedTopics = solutionTopics.filter((item) => item.slug !== topic.slug).slice(0, 4);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions/" },
    { name: topic.title, path: `/solutions/${topic.slug}/` },
  ]);
  const webPageSchema = buildWebPageSchema({
    title: topic.title,
    description: topic.description,
    path: `/solutions/${topic.slug}/`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <PageHero
        label="Solution"
        title={topic.title}
        subtitle={topic.description}
      />

      <section className="section section--alt">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <h2 className="about-card__title">Scope &amp; delivery</h2>
              <p className="about-card__text">
                Devsynx plans, builds, and ships solutions with a practical roadmap,
                milestone-based execution, and transparent communication throughout delivery.
              </p>
            </div>
            <div className="about-card">
              <h2 className="about-card__title">Business impact</h2>
              <p className="about-card__text">
                Each engagement is aligned to measurable outcomes: faster releases,
                better reliability, lower manual workload, and stronger conversion potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Keyword focus</h2>
            <p className="section__subtitle">
              This page targets the following search themes:
            </p>
          </div>
          <div className="services-grid">
            {topic.focusKeywords.map((keyword, index) => (
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

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Related solution pages</h2>
          </div>
          <div className="services-grid">
            {relatedTopics.map((related) => (
              <Link
                key={related.slug}
                href={`/solutions/${related.slug}/`}
                className="service-card service-card--detailed"
              >
                <div className="service-card__gradient-bar" style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))" }}></div>
                <h3 className="service-card__title">{related.title}</h3>
                <p className="service-card__desc">{related.description}</p>
                <span className="service-card__link">View page</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={`Ready to start your ${topic.title.toLowerCase()} project?`}
        subtitle="Share your goals and we will recommend a practical delivery plan."
        primaryLabel="Start a project"
        secondaryLabel="Explore services"
      />
    </>
  );
}
