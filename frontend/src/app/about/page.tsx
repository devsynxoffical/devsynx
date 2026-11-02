"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FAQ } from "@/components/FAQ";
import { teamMembers } from "@/data/team";
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from "@/seo/metadata";

const aboutFaqs = [
  {
    question: "What is Devsynx?",
    answer:
      "Devsynx is a full-service software development, AI automation, and cloud engineering agency based in Islamabad, Pakistan. We partner with growth-focused businesses, startups, and global enterprises to design, build, and scale custom web applications, mobile apps, SaaS platforms, and intelligent AI agents.",
  },
  {
    question: "Who leads Devsynx executive leadership?",
    answer:
      "Devsynx is led by CEO & Founder Syed Hassan Ali Shah.",
  },
  {
    question: "Where is Devsynx located and what regions do you serve?",
    answer:
      "Devsynx is headquartered in Islamabad, Pakistan, and operates globally, providing dedicated software engineering and offshore development teams to clients across North America (USA, Canada), Europe (UK, Germany), the Middle East (UAE, Saudi Arabia), and Asia-Pacific.",
  },
  {
    question: "What core services does DEVSYNX specialize in?",
    answer:
      "We specialize in core software and AI engineering domains: Custom Web & SaaS Development, Mobile App Engineering (iOS & Android), AI Agents & Process Automation, Cloud Infrastructure & DevOps (CI/CD), and UI/UX Product Design.",
  },
  {
    question: "How does Devsynx ensure project quality and client security?",
    answer:
      "We enforce strict code reviews, CI/CD automated testing pipelines, non-disclosure agreements (NDAs), GDPR/HIPAA compliance standards, transparent milestone reporting, and timezone-aligned sprint meetings on every project.",
  },
  {
    question: "How can businesses hire a team or start a project with Devsynx?",
    answer:
      "You can reach out via our Contact page or book a free 30-minute consultation call. Our team will review your project requirements, provide initial technical recommendations, and deploy a dedicated engineering team within days.",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About", path: "/about/" },
]);

const pageSchema = buildWebPageSchema({
  title: "About Devsynx | Executive Leadership & Mission",
  description: "Devsynx is a software development and AI engineering agency led by CEO & Founder Syed Hassan Ali Shah.",
  path: "/about/",
});

export default function AboutPage() {
  const faqSchema = buildFaqSchema(aboutFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="page-hero__shape page-hero__shape--1"></div>
          <div className="page-hero__shape page-hero__shape--2"></div>
        </div>
        <div className="container">
          <AnimatedSection animation="fade-up" delay={100}>
            <span className="page-hero__label">About Devsynx</span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="page-hero__title">
              We Build Software That <span className="text-gradient">Businesses Rely On</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="page-hero__subtitle">
              DEVSYNX is a software development and AI engineering agency helping startups
              and global enterprises launch, automate, and scale with clarity, accountability, and measurable results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership Text Summary (No Pictures on About Page) */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header" style={{ marginBottom: "40px" }}>
              <span className="section__label">Leadership</span>
              <h2 className="section__title">
                Executive <span className="text-gradient">Leadership</span>
              </h2>
              <p className="section__subtitle">
                Devsynx is guided by experienced tech founders, engineering leaders, and domain specialists.
              </p>
            </div>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} animation="fade-up" delay={index * 80}>
                <div
                  className="about-card"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    {member.image && (
                      <div
                        style={{
                          width: "72px",
                          height: "72px",
                          borderRadius: "50%",
                          padding: "2px",
                          border: `2px solid ${member.accent}`,
                          marginBottom: "16px",
                          overflow: "hidden",
                          background: member.avatarBg ?? "#ffffff",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={72}
                          height={72}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: member.objectPosition ?? "center top",
                            transform: member.avatarScale ? `scale(${member.avatarScale})` : undefined,
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    )}
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: member.accent,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}
                    >
                      {member.role}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 800,
                        color: "var(--color-dark)",
                        marginBottom: "12px",
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.938rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {member.bio}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/team/" className="btn btn--outline btn--lg">
              View Official Team Photos &amp; Bios →
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section--alt">
        <div className="container">
          <div className="about-grid">
            <AnimatedSection animation="fade-right">
              <div className="about-card about-card--mission">
                <div className="about-card__accent-line"></div>
                <div className="about-card__icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <h2 className="about-card__title">Our Mission</h2>
                <p className="about-card__text">
                  To make world-class software development accessible to growth-focused businesses of
                  every size, delivered with clarity, accountability, and measurable business outcomes.
                </p>
                <div className="about-card__tags">
                  <span>Reliable</span>
                  <span>Scalable</span>
                  <span>Impactful</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={150}>
              <div className="about-card about-card--vision">
                <div className="about-card__accent-line"></div>
                <div className="about-card__icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                </div>
                <h2 className="about-card__title">Our Vision</h2>
                <p className="about-card__text">
                  To be the most trusted technology partner for growth-focused companies
                  worldwide, known for shipping on time, maintaining rigorous engineering standards, and building software that lasts.
                </p>
                <div className="about-card__tags">
                  <span>Innovative</span>
                  <span>Trusted</span>
                  <span>Global</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <AnimatedSection animation="fade-right" className="about-story__content">
              <span className="section__label" style={{ paddingLeft: 0 }}>Our Story</span>
              <h2 className="section__title" style={{ textAlign: "left" }}>
                From Islamabad to a <span className="text-gradient">Global Client Base</span>
              </h2>
              <p className="about-story__text">
                Devsynx was founded on a simple belief: businesses everywhere deserve
                reliable, high-performance software and AI systems, delivered with transparent communication and accountable execution.
                What began as a specialized software agency in Islamabad has grown into a
                full-service engineering partner serving clients across North America, Europe, the Middle East, and worldwide.
              </p>
              <p className="about-story__text">
                Led by CEO &amp; Founder Syed Hassan Ali Shah, we have shipped 100+ projects, built multi-tenant SaaS platforms, integrated custom AI calling agents, and automated complex business workflows for global clients.
              </p>
              <p className="about-story__text">
                Every engagement at Devsynx is anchored by two core principles: clarity before code, and results over activity.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={200} className="about-story__stats-wrapper">
              <div className="about-story__stats">
                <div className="about-stat">
                  <div className="about-stat__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <AnimatedCounter end={50} suffix="+" className="about-stat__number" />
                  <span className="about-stat__label">Clients Served</span>
                </div>
                <div className="about-stat">
                  <div className="about-stat__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </div>
                  <AnimatedCounter end={100} suffix="+" className="about-stat__number" />
                  <span className="about-stat__label">Projects Delivered</span>
                </div>
                <div className="about-stat">
                  <div className="about-stat__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <AnimatedCounter end={99} suffix="%" className="about-stat__number" />
                  <span className="about-stat__label">Client Satisfaction</span>
                </div>
                <div className="about-stat">
                  <div className="about-stat__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <AnimatedCounter end={5} suffix="+" className="about-stat__number" />
                  <span className="about-stat__label">Years of Growth</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">What Drives Us</span>
              <h2 className="section__title">
                Our Core <span className="text-gradient">Values</span>
              </h2>
              <p className="section__subtitle">
                These principles guide every architectural decision, line of code, and client interaction.
              </p>
            </div>
          </AnimatedSection>
          <div className="values-grid">
            {[
              {
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                title: "Reliability",
                desc: "We deliver what we commit to, on schedule. Transparent communication and predictable delivery cycles define our work ethic.",
                color: "#06909D",
              },
              {
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
                title: "Clarity",
                desc: "You always know where your project stands. We maintain clear documentation, milestone demos, and active daily updates.",
                color: "#1a73e8",
              },
              {
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
                title: "Engineering Excellence",
                desc: "We enforce strict code reviews, modern architecture patterns, and CI/CD pipelines to ensure software is secure, fast, and maintainable.",
                color: "#FDBD02",
              },
              {
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.32 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
                title: "Innovation & AI",
                desc: "We integrate generative AI, voice bots, and automated workflows into business operations so our clients stay ahead of competition.",
                color: "#7C3AED",
              },
            ].map((v, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div className="value-card">
                  <div className="value-card__icon" style={{ background: `${v.color}12`, color: v.color }}>{v.icon}</div>
                  <h3 className="value-card__title">{v.title}</h3>
                  <p className="value-card__desc">{v.desc}</p>
                  <div className="value-card__glow" style={{ background: v.color }}></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (About Devsynx) */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">Everything You Need to Know</span>
              <h2 className="section__title">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="section__subtitle">
                Common questions about Devsynx, our leadership team, company location, and project workflows.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="faq-wrapper">
              <FAQ items={aboutFaqs} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="cta__bg">
          <div className="cta__shape cta__shape--1"></div>
          <div className="cta__shape cta__shape--2"></div>
        </div>
        <div className="container">
          <AnimatedSection animation="zoom-in">
            <div className="cta__inner">
              <div className="cta__badge">🤝 Let&apos;s Collaborate</div>
              <h2 className="cta__title">Ready to Work With Devsynx?</h2>
              <p className="cta__subtitle">
                Partner with our engineering and leadership team to launch your software, build AI automation, or scale your operations.
              </p>
              <div className="cta__actions">
                <Link href="/contact/" className="btn btn--white btn--lg">
                  Start Your Project
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/team/" className="btn btn--outline-white btn--lg">
                  Meet Our Team
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
