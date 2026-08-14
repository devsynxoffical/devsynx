"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FAQ } from "@/components/FAQ";

const aboutFaqs = [
  { question: "Where is Devsynx located?", answer: "We are headquartered in Islamabad, Pakistan, and work with clients globally across North America, Europe, the Middle East, and Asia-Pacific." },
  { question: "How large is your team?", answer: "We have 20+ full-time engineers, designers, and strategists. For larger initiatives, we scale dedicated teams around your product and goals." },
  { question: "What is your experience with enterprise projects?", answer: "We have delivered multi-phase automation systems, multi-tenant SaaS platforms, and cloud infrastructure migrations for mid-market and enterprise clients." },
  { question: "Do you offer dedicated development teams?", answer: "Yes. You can engage a dedicated team of 2 to 8+ people integrated into your workflow with transparent communication and regular delivery cycles." },
  { question: "How do you ensure project quality?", answer: "We follow rigorous quality standards including code reviews, automated testing, CI/CD pipelines, regular demos, and client feedback loops. Our 98% on-time delivery rate speaks to our commitment to quality." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="page-hero__shape page-hero__shape--1"></div>
          <div className="page-hero__shape page-hero__shape--2"></div>
        </div>
        <div className="container">
          <AnimatedSection animation="fade-up" delay={100}>
            <span className="page-hero__label">Who We Are</span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="page-hero__title">
              We Build Software That <span className="text-gradient">Businesses Rely On</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="page-hero__subtitle">
              We are a software and AI agency helping startups and enterprises launch,
              automate, and scale with clarity, accountability, and measurable results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
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
                  To make world-class software development accessible to businesses of
                  every size, delivered with clarity, accountability, and measurable outcomes.
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
                  To be the most trusted technology partner for growth-focused businesses
                  worldwide, known for shipping on time and building software that lasts.
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
      <section className="section section--alt">
        <div className="container">
          <div className="about-story">
            <AnimatedSection animation="fade-right" className="about-story__content">
              <span className="section__label" style={{ paddingLeft: 0 }}>Our Story</span>
              <h2 className="section__title" style={{ textAlign: 'left' }}>
                From Islamabad to a <span className="text-gradient">Global Client Base</span>
              </h2>
              <p className="about-story__text">
                Devsynx was founded on a simple belief: businesses everywhere deserve
                reliable, high-quality software, not just companies with enterprise budgets.
                What began as a small engineering team in Islamabad has grown into a
                full-service technology company serving clients globally.
              </p>
              <p className="about-story__text">
                We&apos;ve helped founders launch MVPs in under 30 days, supported mid-market
                teams in automating high-friction operations, and built AI systems that
                handle thousands of customer interactions daily.
              </p>
              <p className="about-story__text">
                Every project is guided by two principles: clarity before code, and
                results over activity. That is how we build long-term client trust.
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
                  <AnimatedCounter end={20} suffix="+" className="about-stat__number" />
                  <span className="about-stat__label">Expert Team Members</span>
                </div>
                <div className="about-stat">
                  <div className="about-stat__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <AnimatedCounter end={5} suffix="+" className="about-stat__number" />
                  <span className="about-stat__label">Years of Experience</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">What Drives Us</span>
              <h2 className="section__title">
                Our Core <span className="text-gradient">Values</span>
              </h2>
              <p className="section__subtitle">
                These principles guide every decision we make and every line of code we write.
              </p>
            </div>
          </AnimatedSection>
          <div className="values-grid">
            {[
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                title: "Reliability", desc: "We deliver what we commit to, when we commit to it. A 98% on-time record reflects how we operate.", color: "#06909D" },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
                title: "Clarity", desc: "You always know where your project stands. We communicate proactively and keep decisions documented.", color: "#1a73e8" },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
                title: "Excellence", desc: "We hold engineering, design, and communication to a high standard because outcomes matter.", color: "#FDBD02" },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.32 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
                title: "Innovation", desc: "We stay current with AI, cloud, and engineering best practices so you get future-ready solutions.", color: "#7C3AED" },
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

      {/* FAQ */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">FAQ</span>
              <h2 className="section__title">
                Questions About <span className="text-gradient">Us</span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="faq-wrapper">
              <FAQ items={aboutFaqs} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta__bg">
          <div className="cta__shape cta__shape--1"></div>
          <div className="cta__shape cta__shape--2"></div>
        </div>
        <div className="container">
          <AnimatedSection animation="zoom-in">
            <div className="cta__inner">
              <div className="cta__badge">🤝 Let&apos;s Collaborate</div>
              <h2 className="cta__title">Want to Work With Us?</h2>
              <p className="cta__subtitle">
                We&apos;re always looking for exciting projects and great people to collaborate with.
              </p>
              <div className="cta__actions">
                <Link href="/contact/" className="btn btn--white btn--lg">
                  Get In Touch
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/services/" className="btn btn--outline-white btn--lg">
                  See Our Services
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
