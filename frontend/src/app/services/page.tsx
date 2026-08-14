"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQ } from "@/components/FAQ";

const servicesFaqs = [
  { question: "How do I know which service is right for my business?", answer: "Book a free 30-minute consultation. We will understand your goals and constraints, then recommend only the services that will move the needle for your business." },
  { question: "Can I combine multiple services?", answer: "Yes. Most clients engage us across two to four service areas. We build one unified team around your project so you avoid coordination overhead." },
  { question: "Do you work with startups or only enterprises?", answer: "Both. We help founders launch first MVPs and support established companies with enterprise-scale automation and product modernization." },
  { question: "What is your pricing model?", answer: "We offer fixed-price projects for defined scopes and flexible monthly retainers for ongoing development. Pricing is transparent with no surprise invoices." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="page-hero__shape page-hero__shape--1"></div>
          <div className="page-hero__shape page-hero__shape--2"></div>
        </div>
        <div className="container">
          <AnimatedSection animation="fade-up" delay={100}>
            <span className="page-hero__label">What We Do</span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="page-hero__title">
              Technology Services Built Around Your <span className="text-gradient">Business Goals</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="page-hero__subtitle">
              From intelligent automation to enterprise cloud migration, we offer
              end-to-end technology solutions designed to help businesses grow,
              move faster, and operate smarter.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* All Services */}
      <section className="section">
        <div className="container">
          <div className="services-grid services-grid--full">
            {services.map((service, index) => (
              <AnimatedSection key={service.slug} animation="fade-up" delay={(index % 4) * 80}>
                <Link
                  href={`/services/${service.slug}/`}
                  className="service-card service-card--detailed"
                >
                  <div className="service-card__gradient-bar" style={{ background: service.gradient }}></div>
                  <div className="service-card__header">
                    <div className="service-card__number">{String(index + 1).padStart(2, "0")}</div>
                    <div className="service-card__arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                    </div>
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                  <ul className="service-card__features">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="service-card__link">
                    View Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">FAQ</span>
              <h2 className="section__title">
                Common Questions About Our <span className="text-gradient">Services</span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="faq-wrapper">
              <FAQ items={servicesFaqs} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta__bg">
          <div className="cta__shape cta__shape--1"></div>
          <div className="cta__shape cta__shape--2"></div>
        </div>
        <div className="container">
          <AnimatedSection animation="zoom-in">
            <div className="cta__inner">
              <div className="cta__badge">Free consultation</div>
              <h2 className="cta__title">Not sure which services fit best?</h2>
              <p className="cta__subtitle">
                Book a free consultation and we&apos;ll build a practical service plan
                tailored to your goals, timeline, and budget.
              </p>
              <div className="cta__actions">
                <Link href="/contact/" className="btn btn--white btn--lg">
                  Get Free Consultation
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/global/" className="btn btn--outline-white btn--lg">
                  Explore Global Pages
                </Link>
                <Link href="/solutions/" className="btn btn--outline-white btn--lg">
                  Explore Solution Library
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
