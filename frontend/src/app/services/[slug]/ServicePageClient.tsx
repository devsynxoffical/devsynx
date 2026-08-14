"use client";

import "@/styles/service-detail.css";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQ } from "@/components/FAQ";
import type { Service } from "@/data/services";

interface ServicePageClientProps {
  service: Service;
  relatedServices: Service[];
}

export function ServicePageClient({ service, relatedServices }: ServicePageClientProps) {
  return (
    <>
      {/* Service Hero */}
      <section className="service-hero" style={{ background: service.gradient }}>
        <div className="service-hero__bg">
          <div className="service-hero__pattern"></div>
          <div className="service-hero__shape service-hero__shape--1"></div>
          <div className="service-hero__shape service-hero__shape--2"></div>
        </div>
        <div className="container">
          <AnimatedSection animation="fade-up" delay={100}>
            <Link href="/services/" className="service-hero__back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              All Services
            </Link>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="service-hero__title">{service.title}</h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="service-hero__subtitle">{service.description}</p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="service-hero__actions">
              <Link href="/contact/" className="btn btn--white btn--lg">
                Get Free Quote
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/contact/" className="btn btn--outline-white btn--lg">
                Schedule a Call
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="service-overview">
            <AnimatedSection animation="fade-right" className="service-overview__content">
              <span className="section__label" style={{ paddingLeft: 0 }}>Overview</span>
              <h2 className="section__title" style={{ textAlign: 'left' }}>
                What is <span className="text-gradient">{service.shortTitle}</span>?
              </h2>
              <p className="service-overview__text">{service.longDescription}</p>
              <div className="service-overview__highlights">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="service-overview__highlight">
                    <div className="service-overview__highlight-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={200} className="service-overview__visual">
              <div className="service-overview__card-stack">
                <div className="service-overview__floating-card service-overview__floating-card--1">
                  <div className="service-overview__floating-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span>{service.benefits[0]}</span>
                </div>
                <div className="service-overview__floating-card service-overview__floating-card--2">
                  <div className="service-overview__floating-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                  </div>
                  <span>{service.benefits[1]}</span>
                </div>
                <div className="service-overview__floating-card service-overview__floating-card--3">
                  <div className="service-overview__floating-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <span>{service.benefits[2]}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Features - Bento Grid */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">Features</span>
              <h2 className="section__title">
                Key Features & <span className="text-gradient">Capabilities</span>
              </h2>
              <p className="section__subtitle">
                Everything you need for a complete {service.shortTitle.toLowerCase()} solution.
              </p>
            </div>
          </AnimatedSection>
          <div className="bento-grid">
            {service.features.map((feature, index) => (
              <AnimatedSection key={feature} animation="fade-up" delay={index * 80}>
                <div className={`bento-card ${index === 0 ? 'bento-card--large' : ''}`}>
                  <div className="bento-card__number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="bento-card__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="bento-card__title">{feature}</h3>
                  <div className="bento-card__line" style={{ background: service.gradient }}></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">Applications</span>
              <h2 className="section__title">
                Use Cases & <span className="text-gradient">Applications</span>
              </h2>
              <p className="section__subtitle">
                See how businesses leverage {service.shortTitle.toLowerCase()} to drive results.
              </p>
            </div>
          </AnimatedSection>
          <div className="usecase-grid">
            {service.useCases.map((useCase, index) => (
              <AnimatedSection key={useCase} animation="fade-up" delay={index * 100}>
                <div className="usecase-card">
                  <div className="usecase-card__icon-wrapper" style={{ background: service.gradient }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h3 className="usecase-card__title">{useCase}</h3>
                  <p className="usecase-card__desc">
                    Tailored {service.shortTitle.toLowerCase()} solutions designed specifically for {useCase.toLowerCase()} workflows and requirements.
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--dark">
        <div className="section__bg-pattern"></div>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header section__header--light">
              <span className="section__label section__label--light">Our Approach</span>
              <h2 className="section__title section__title--light">
                How We Deliver <span className="text-gradient">{service.shortTitle}</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="timeline">
            {[
              { step: "01", title: "Discovery & Planning", desc: `We analyze your current state, define objectives, and create a detailed roadmap for your ${service.shortTitle.toLowerCase()} project.` },
              { step: "02", title: "Design & Architecture", desc: `Our team designs the solution architecture, creates prototypes, and validates the approach with your stakeholders.` },
              { step: "03", title: "Development & Implementation", desc: `We build your solution using best practices, with regular demos and iterative feedback cycles to ensure quality.` },
              { step: "04", title: "Testing & Quality Assurance", desc: `Rigorous testing including functional, performance, security, and user acceptance testing before launch.` },
              { step: "05", title: "Launch & Optimization", desc: `We deploy your solution, monitor performance, and continuously optimize based on real-world data and feedback.` },
            ].map((item, index) => (
              <AnimatedSection key={item.step} animation="fade-up" delay={index * 120}>
                <div className="timeline__item">
                  <div className="timeline__marker">
                    <span>{item.step}</span>
                  </div>
                  <div className="timeline__content">
                    <h3 className="timeline__title">{item.title}</h3>
                    <p className="timeline__desc">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">FAQ</span>
              <h2 className="section__title">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="section__subtitle">
                Common questions about our {service.shortTitle.toLowerCase()} services.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="faq-wrapper">
              <FAQ items={service.faqs} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Services */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">Explore More</span>
              <h2 className="section__title">
                Related <span className="text-gradient">Services</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="services-grid services-grid--related">
            {relatedServices.map((s, index) => (
              <AnimatedSection key={s.slug} animation="fade-up" delay={index * 100}>
                <Link href={`/services/${s.slug}/`} className="service-card">
                  <div className="service-card__gradient-bar" style={{ background: s.gradient }}></div>
                  <div className="service-card__header">
                    <div className="service-card__number">{String(index + 1).padStart(2, "0")}</div>
                    <div className="service-card__arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                    </div>
                  </div>
                  <h3 className="service-card__title">{s.shortTitle}</h3>
                  <p className="service-card__desc">{s.description}</p>
                  <span className="service-card__link">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
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
              <div className="cta__badge">🚀 Get Started Today</div>
              <h2 className="cta__title">Ready to Get Started with {service.shortTitle}?</h2>
              <p className="cta__subtitle">
                Let&apos;s discuss how {service.shortTitle.toLowerCase()} can transform your business.
              </p>
              <div className="cta__actions">
                <Link href="/contact/" className="btn btn--white btn--lg">
                  Get Free Quote
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/contact/" className="btn btn--outline-white btn--lg">
                  Schedule a Call
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
