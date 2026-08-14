"use client";

import Link from "next/link";
import { blogPosts } from "@/seo/blogPosts";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";

export function BlogHubContent() {
  return (
    <>
      <PageHero
        label="Insights"
        title={
          <>
            Devsynx <span className="text-gradient">blog</span>
          </>
        }
        subtitle="Actionable articles on software development, AI, automation, cloud, and digital product strategy."
      />

      <section className="section">
        <div className="container">
          <div className="services-grid services-grid--full">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} animation="fade-up" delay={(index % 4) * 60}>
                <Link href={`/blog/${post.slug}/`} className="service-card service-card--detailed">
                  <div className="service-card__gradient-bar" style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))" }}></div>
                  <div className="service-card__header">
                    <div className="service-card__number">{String(index + 1).padStart(2, "0")}</div>
                    <div className="service-card__arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                    </div>
                  </div>
                  <h2 className="service-card__title">{post.title}</h2>
                  <p className="service-card__desc">{post.description}</p>
                  <span className="service-card__link">Read article</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Want guidance for your next build?"
        subtitle="Talk to our team about software, AI, and automation tailored to your goals."
        primaryLabel="Talk to Devsynx"
        secondaryLabel="View services"
      />
    </>
  );
}
