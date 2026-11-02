"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { services, Service } from "@/data/services";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQ } from "@/components/FAQ";

import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from "@/seo/metadata";

const servicesFaqs = [
  { question: "How do I know which service is right for my business?", answer: "Book a free 30-minute consultation. We will understand your goals and constraints, then recommend only the services that will move the needle for your business." },
  { question: "Can I combine multiple services?", answer: "Yes. Most clients engage us across two to four service areas. We build one unified team around your project so you avoid coordination overhead." },
  { question: "Do you work with startups or only enterprises?", answer: "Both. We help founders launch first MVPs and support established companies with enterprise-scale automation and product modernization." },
  { question: "What is your pricing model?", answer: "We offer fixed-price projects for defined scopes and flexible monthly retainers for ongoing development. Pricing is transparent with no surprise invoices." },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Capabilities", path: "/services/" },
]);

const pageSchema = buildWebPageSchema({
  title: "End-to-End Software & AI Services | Devsynx",
  description: "Explore 20 specialized engineering & AI services offered by Devsynx.",
  path: "/services/",
});

const faqSchema = buildFaqSchema(servicesFaqs);

const categories = [
  "All Capabilities",
  "Digital Transformation",
  "Cloud & Infrastructure",
  "AI & Automation",
  "Enterprise Engineering",
];

// Custom unique SVG icons for each service category
const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'web':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
    case 'mobile':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
    case 'saas':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
    case 'design':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>;
    case 'cart':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>;
    case 'pwa':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
    case 'devops':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
    case 'cloud':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
    case 'ai':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><circle cx="12" cy="12" r="3"/></svg>;
    case 'phone':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
    default:
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>;
  }
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Capabilities");

  const filteredServices = activeCategory === "All Capabilities"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Page Header */}
      <section className="page-hero">
        <div className="container">
          <AnimatedSection animation="fade-up" delay={100}>
            <span className="page-hero__label">End-To-End Capabilities</span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="page-hero__title">
              20 Specialized Technology &amp; <span className="text-gradient">AI Services</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="page-hero__subtitle">
              Explore our 20 domain-specific engineering services, designed for fast delivery, high scalability, and clear business outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section with Category Tabs */}
      <section className="section">
        <div className="container">
          {/* Category Filter Tabs */}
          <AnimatedSection animation="fade-up">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '48px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '30px',
                    fontSize: '0.938rem',
                    fontWeight: 700,
                    border: '1px solid',
                    borderColor: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-border)',
                    background: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-card-bg)',
                    color: activeCategory === cat ? '#ffffff' : 'var(--color-dark)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: activeCategory === cat ? '0 6px 20px rgba(6,144,157,0.3)' : 'none',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Services Grid with Unique Visual Card Design for each service */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
            {filteredServices.map((service, index) => (
              <AnimatedSection key={service.slug} animation="fade-up" delay={(index % 3) * 60}>
                <Link
                  href={`/services/${service.slug}/`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    background: 'var(--color-card-bg)',
                    border: '1px solid var(--color-border)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Top Unique Banner with Gradient & Icon */}
                  <div
                    style={{
                      height: '120px',
                      background: service.gradient,
                      padding: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                      }}
                    >
                      {getServiceIcon(service.icon)}
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        background: 'rgba(0, 0, 0, 0.3)',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '10px', lineHeight: 1.2 }}>
                      {service.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.938rem', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                      {service.features.slice(0, 3).map((feat) => (
                        <span
                          key={feat}
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: 'var(--color-primary)',
                            background: 'var(--color-primary-light)',
                            padding: '4px 10px',
                            borderRadius: '6px',
                          }}
                        >
                          ✓ {feat}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.938rem' }}>
                      <span>Explore Capability</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
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
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
