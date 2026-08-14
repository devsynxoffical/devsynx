"use client";

import Link from "next/link";
import { solutionTopics } from "@/seo/solutionPages";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";

export function SolutionsHubContent() {
  return (
    <>
      <PageHero
        label="Solutions"
        title={
          <>
            Solution pages for <span className="text-gradient">real buyer intent</span>
          </>
        }
        subtitle="Detailed pages for software development, web development, AI automation, cloud, and SaaS services."
      />

      <section className="section">
        <div className="container">
          <div className="services-grid services-grid--full">
            {solutionTopics.map((topic, index) => (
              <AnimatedSection key={topic.slug} animation="fade-up" delay={(index % 4) * 60}>
                <Link href={`/solutions/${topic.slug}/`} className="service-card service-card--detailed">
                  <div className="service-card__gradient-bar" style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))" }}></div>
                  <div className="service-card__header">
                    <div className="service-card__number">{String(index + 1).padStart(2, "0")}</div>
                    <div className="service-card__arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                    </div>
                  </div>
                  <h2 className="service-card__title">{topic.title}</h2>
                  <p className="service-card__desc">{topic.description}</p>
                  <span className="service-card__link">Read more</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Need a solution built for your market?"
        subtitle="We plan, build, and ship with clear milestones and measurable outcomes."
      />
    </>
  );
}
