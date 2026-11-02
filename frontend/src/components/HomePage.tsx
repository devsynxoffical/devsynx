"use client";

import Image from "next/image";
import "@/styles/home.css";
import Link from "next/link";
import { services } from "@/data/services";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FAQ } from "@/components/FAQ";
import { priorityPageLinks } from "@/seo/priorityPages";
import { homeFaqs } from "@/seo/homeContent";
import { techLogos } from "@/components/TechLogos";

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__grid-pattern"></div>
          <div className="hero__gradient-orb hero__gradient-orb--1"></div>
          <div className="hero__gradient-orb hero__gradient-orb--2"></div>
          <div className="hero__gradient-orb hero__gradient-orb--3"></div>
        </div>
        <div className="hero__grain" aria-hidden="true"></div>

        <div className="container">
          <div className="hero__layout">
            <AnimatedSection animation="fade-up" delay={80} stagger className="hero__content-col">
              <div className="hero__content">
                <div className="hero__eyebrow stagger-item">
                  <span className="hero__badge-pulse"></span>
                  <span>Trusted by 300+ Businesses Worldwide</span>
                </div>

                <h1 className="hero__title stagger-item">
                  Custom Software <br />
                  &amp; AI Solutions <br />
                  <span style={{ color: '#FDBD02' }}>That Drive</span> <br />
                  <span style={{ color: '#FDBD02' }}>Business Growth</span>
                </h1>

                <p className="hero__subtitle stagger-item">
                  We help startups and businesses ship faster with custom
                  software development, intelligent automation, and AI systems
                  built to scale from day one.
                </p>

                <div className="hero__actions stagger-item">
                  <Link href="/contact/" className="btn btn--primary btn--lg btn--glow" style={{ background: '#06909D', border: 'none', color: '#fff' }}>
                    Start a Project
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/contact/" className="btn btn--secondary btn--lg hero__btn-secondary">
                    Schedule a Free Call
                  </Link>
                </div>

                <div className="hero__social-proof stagger-item" style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div className="trust-bar__avatars">
                    <div className="trust-bar__avatar" style={{ background: '#06909D', color: '#fff' }}>S</div>
                    <div className="trust-bar__avatar" style={{ background: '#1a73e8', color: '#fff' }}>M</div>
                    <div className="trust-bar__avatar" style={{ background: '#6C63FF', color: '#fff' }}>E</div>
                    <div className="trust-bar__avatar" style={{ background: '#E91E63', color: '#fff' }}>A</div>
                    <div className="trust-bar__avatar trust-bar__avatar--count">+300</div>
                  </div>
                  <div className="trust-bar__meta">
                    <div className="trust-bar__stars">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FDBD02" stroke="#FDBD02" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      ))}
                    </div>
                    <p className="trust-bar__text" style={{ fontSize: '0.75rem', marginTop: '2px' }}>Rated 5/5 by our clients</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="hero__visual hero__visual--enter" aria-hidden="true">
              <div className="hero__visual-glow"></div>
              <div className="hero__visual-ring"></div>
              <div className="hero__glass-main">
                <div className="hero__glass-header">
                  <div className="hero__glass-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span className="hero__glass-tab">devsynx.com</span>
                </div>
                <div className="hero__glass-body">
                  <div className="hero__glass-row">
                    <div className="hero__glass-stat">
                      <span className="hero__glass-stat-val">98%</span>
                      <span className="hero__glass-stat-lbl">On-Time</span>
                    </div>
                    <div className="hero__glass-stat">
                      <span className="hero__glass-stat-val">300+</span>
                      <span className="hero__glass-stat-lbl">Completed</span>
                    </div>
                    <div className="hero__glass-stat">
                      <span className="hero__glass-stat-val">4.9</span>
                      <span className="hero__glass-stat-lbl">Rating</span>
                    </div>
                  </div>
                  <div className="hero__glass-progress">
                    <div className="hero__glass-progress-info">
                      <span>Project Progress</span><span>92%</span>
                    </div>
                    <div className="hero__glass-progress-track">
                      <div className="hero__glass-progress-fill"></div>
                    </div>
                  </div>
                  <div className="hero__glass-code">
                    <code>
                      <span className="c-kw">const</span> growth = <span className="c-fn">deploy</span>(<span className="c-str">&apos;mvp&apos;</span>);
                    </code>
                  </div>
                </div>
              </div>
              <div className="hero__float hero__float--1">
                <div className="hero__float-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                </div>
                <div><span className="hero__float-label">Fast Delivery</span><span className="hero__float-value">MVP in &lt;30 Days</span></div>
              </div>
              <div className="hero__float hero__float--2">
                <div className="hero__float-icon hero__float-icon--green">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div><span className="hero__float-label">Security</span><span className="hero__float-value">Enterprise Grade</span></div>
              </div>
              <div className="hero__float hero__float--3">
                <div className="hero__float-icon hero__float-icon--accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
                <div><span className="hero__float-label">AI powered</span><span className="hero__float-value">Smart solutions</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll-indicator" style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 10 }}>
          <span style={{ fontSize: '0.625rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)' }}></div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS STRIP — Elevated with icons
          ═══════════════════════════════════════ */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            <div className="stats__item">
              <div className="stats__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <AnimatedCounter end={98} suffix="%" className="stats__number" />
              <span className="stats__label">On-Time Delivery</span>
            </div>
            <div className="stats__item">
              <div className="stats__icon stats__icon--accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div className="stats__number-row">
                <span className="stats__number">&lt;</span>
                <AnimatedCounter end={30} className="stats__number" />
              </div>
              <span className="stats__label">Days MVP to Launch</span>
            </div>
            <div className="stats__item">
              <div className="stats__icon stats__icon--purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
              </div>
              <AnimatedCounter end={50} suffix="+" className="stats__number" />
              <span className="stats__label">Businesses Served</span>
            </div>
            <div className="stats__item">
              <div className="stats__icon stats__icon--pink">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <span className="stats__number">4.9/5</span>
              <span className="stats__label">Client Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED VISUAL SHOWCASE — High-Tech Product Comps
          ═══════════════════════════════════════ */}
      <section className="section section--dark" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header section__header--light">
              <span className="section__label section__label--light">Our Engineering Capabilities</span>
              <h2 className="section__title section__title--light">
                High-Performance <span className="text-gradient">Software &amp; AI Products</span>
              </h2>
              <p className="section__subtitle section__subtitle--light">
                Explore real system architectures, intelligent interfaces, and mobile applications engineered for enterprise scale.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginTop: '40px' }}>
            {/* SaaS Card */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                  <Image src="/images/saas-dashboard.webp" alt="Custom SaaS & Web Platform Development" fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,11,14,0.95) 0%, transparent 60%)' }}></div>
                  <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(6,144,157,0.85)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: '0.75rem', fontWeight: 600, padding: '4px 12px', borderRadius: '12px' }}>SaaS Platforms</span>
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Custom Web Apps &amp; SaaS Dashboards</h3>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.938rem', lineHeight: '1.6', marginBottom: '20px' }}>
                      Scalable web platforms engineered with Next.js, real-time telemetry analytics, and multi-tenant cloud architecture.
                    </p>
                  </div>
                  <Link href="/services/saas-product-development/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#06909D', fontWeight: 600, fontSize: '0.938rem' }}>
                    Explore SaaS Development
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Mobile App Card */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                  <Image src="/images/mobile-app.webp" alt="Mobile App Development & iOS / Android" fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,11,14,0.95) 0%, transparent 60%)' }}></div>
                  <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(108,99,255,0.85)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: '0.75rem', fontWeight: 600, padding: '4px 12px', borderRadius: '12px' }}>Mobile Engineering</span>
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>iOS &amp; Android Native Mobile Apps</h3>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.938rem', lineHeight: '1.6', marginBottom: '20px' }}>
                      High-performance cross-platform mobile apps with fluid 60fps micro-animations, offline sync, and push notifications.
                    </p>
                  </div>
                  <Link href="/services/mobile-app-development/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#6C63FF', fontWeight: 600, fontSize: '0.938rem' }}>
                    Explore Mobile Solutions
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* AI Agents Card */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                  <Image src="/images/ai-automation.webp" alt="AI Agent Workflow & Autonomous Systems" fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,11,14,0.95) 0%, transparent 60%)' }}></div>
                  <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(253,189,2,0.85)', backdropFilter: 'blur(8px)', color: '#000', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '12px' }}>AI &amp; Automation</span>
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>AI Autonomous Agents &amp; Workflow Automation</h3>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.938rem', lineHeight: '1.6', marginBottom: '20px' }}>
                      Custom AI agents, voice calling bots, and automated LLM pipelines that cut operational overhead and accelerate business growth.
                    </p>
                  </div>
                  <Link href="/solutions/ai-automation-services/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#FDBD02', fontWeight: 600, fontSize: '0.938rem' }}>
                    Explore AI Systems
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES — Elevated Cards
          ═══════════════════════════════════════ */}
      <section className="section" id="services">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <h2 className="section__title">
                End-to-end <span className="text-gradient">software &amp; AI services</span>
              </h2>
              <p className="section__subtitle">
                From automation to AI, web apps to cloud, everything your business
                needs to build, scale, and compete.
              </p>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {services.slice(0, 6).map((service, index) => (
              <AnimatedSection key={service.slug} animation="fade-up" delay={index * 80}>
                <Link href={`/services/${service.slug}/`} className="service-img-card" style={{ position: 'relative', height: '300px', borderRadius: '20px', overflow: 'hidden', display: 'block', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 12px 32px rgba(0,0,0,0.3)', transition: 'all 0.3s ease' }}>
                  <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover', filter: 'brightness(0.75)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,11,14,0.92) 0%, rgba(5,11,14,0.35) 60%, transparent 100%)' }}></div>
                  <div style={{ position: 'absolute', inset: 0, padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 2 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.813rem', fontWeight: 800, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em' }}>0{index + 1}</span>
                      <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                      </div>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '8px', lineHeight: 1.15, textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>{service.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', lineHeight: '1.5', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{service.description}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fade-up">
            <div className="section__action">
              <Link href="/services/" className="btn btn--secondary btn--lg">
                Explore All 20 Services
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS — Connected Timeline
          ═══════════════════════════════════════ */}
      <section className="section section--dark">
        <div className="section__bg-pattern"></div>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header section__header--light">
              <span className="section__label section__label--light">How We Work</span>
              <h2 className="section__title section__title--light">
                Our Process - <span className="text-gradient">Clarity First, Code Second</span>
              </h2>
              <p className="section__subtitle section__subtitle--light">
                A proven four-step methodology that keeps projects on time, on budget,
                and aligned to your goals.
              </p>
            </div>
          </AnimatedSection>
          <div className="process">
            <div className="process__line"></div>
            {[
              { step: "01", title: "Discover", desc: "We dive deep into your goals, challenges, and requirements to understand the full picture.", color: "#06909D",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg> },
              { step: "02", title: "Design", desc: "Our team architects the solution and crafts intuitive user experiences.", color: "#FDBD02",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg> },
              { step: "03", title: "Build", desc: "We develop with clean, scalable code using modern frameworks and best practices.", color: "#6C63FF",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
              { step: "04", title: "Scale", desc: "We launch, monitor, and optimize for performance and growth.", color: "#E91E63",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
            ].map((item, index) => (
              <AnimatedSection key={item.step} animation="fade-up" delay={index * 150}>
                <div className="process__step">
                  <div className="process__icon-wrapper">
                    <div className="process__number-badge" style={{ background: item.color }}>{item.step}</div>
                    <div className="process__icon" style={{ boxShadow: `0 8px 24px ${item.color}40` }}>{item.icon}</div>
                  </div>
                  <h3 className="process__title">{item.title}</h3>
                  <p className="process__desc">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE US — Premium Cards
          ═══════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <h2 className="section__title">
                Why 300+ businesses <span className="text-gradient">choose Devsynx</span>
              </h2>
              <p className="section__subtitle">
                We combine deep technical expertise with genuine accountability so you
                always know where your project stands.
              </p>
            </div>
          </AnimatedSection>
          <div className="features-grid">
            {[
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                title: "Enterprise-Grade Reliability", desc: "Every solution we deliver is built with security-first architecture and monitored for 99.9% uptime.", accent: "#06909D", stat: "99.9%", statLabel: "Uptime" },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                title: "Ship Faster Than Competitors", desc: "We move fast without cutting corners. Most MVPs are in your hands within 30 days of kickoff.", accent: "#FDBD02", stat: "<30", statLabel: "Days MVP" },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: "Dedicated Senior Teams", desc: "You get skilled engineers, designers, and strategists fully focused on your success.", accent: "#6C63FF", stat: "20+", statLabel: "Experts" },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>,
                title: "Results You Can Measure", desc: "We track the metrics that matter and tie every engagement to real business outcomes.", accent: "#E91E63", stat: "40%", statLabel: "Avg. Gains" },
            ].map((feature, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div className="feature-card">
                  <div className="feature-card__accent" style={{ background: feature.accent }}></div>
                  <div className="feature-card__top">
                    <div className="feature-card__icon" style={{ background: `${feature.accent}12`, color: feature.accent }}>
                      {feature.icon}
                    </div>
                    <div className="feature-card__stat">
                      <span className="feature-card__stat-number" style={{ color: feature.accent }}>{feature.stat}</span>
                      <span className="feature-card__stat-label">{feature.statLabel}</span>
                    </div>
                  </div>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__desc">{feature.desc}</p>
                  <div className="feature-card__glow" style={{ background: feature.accent }}></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHAT DEVSYNX BUILDS & MANAGES — Enterprise Capabilities & SEO Details
          ═══════════════════════════════════════ */}
      <section className="section section--alt" id="capabilities">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">What We Build &amp; Manage</span>
              <h2 className="section__title">
                Full-Lifecycle Software &amp; AI <span className="text-gradient">System Management</span>
              </h2>
              <p className="section__subtitle">
                Devsynx architects, engineers, and operates high-performance digital products for startups, clinics, and global enterprises.
              </p>
            </div>
          </AnimatedSection>

          <div className="capabilities-grid">
            {[
              {
                title: "Custom Web & SaaS Platform Engineering",
                desc: "We design and build multi-tenant SaaS products, customer portals, and enterprise web applications engineered with Next.js, Node.js, and PostgreSQL for maximum performance and scalability.",
                managed: [
                  "Multi-Tenant Database Architecture",
                  "API Gateway & Microservices Design",
                  "Real-Time Telemetry & Dashboards",
                  "Role-Based Access Control (RBAC)",
                ],
                tags: ["SaaS Engineering", "Next.js & Node.js", "Multi-Tenant", "API Integration"],
                link: "/services/saas-product-development/",
                accent: "#06909D",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                ),
              },
              {
                title: "AI Autonomous Agents & Voice Calling Bots",
                desc: "We build custom LLM agents, vector search (RAG) pipelines, and real-time voice bots that automate inbound phone calls, customer support, and complex administrative workflows.",
                managed: [
                  "Autonomous LLM Task Agents",
                  "Twilio & Vapi Voice Bot Integration",
                  "Vector Search & Knowledge RAG",
                  "AI CRM & Lead Synchronization",
                ],
                tags: ["AI Voice Bots", "LLM Agents", "RAG Pipelines", "Workflow Automation"],
                link: "/solutions/ai-automation-services/",
                accent: "#FDBD02",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ),
              },
              {
                title: "Cross-Platform Mobile App Engineering",
                desc: "We engineer native-feel iOS and Android mobile applications using Flutter and React Native, delivering 60fps micro-animations, offline-first sync, and biometric authentication.",
                managed: [
                  "iOS & Android Native Build Release",
                  "App Store & Google Play Governance",
                  "Offline Data Synchronization",
                  "Push Notification Infrastructure",
                ],
                tags: ["iOS & Android", "Flutter & React Native", "App Store Publishing", "Push Notifications"],
                link: "/services/mobile-app-development/",
                accent: "#6C63FF",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                ),
              },
              {
                title: "Cloud Infrastructure, DevOps & 99.9% Uptime",
                desc: "We migrate, secure, and operate cloud environments across AWS, GCP, and Azure, setting up automated CI/CD pipelines, containerized microservices, and 24/7 server monitoring.",
                managed: [
                  "Kubernetes & Docker Orchestration",
                  "Zero-Downtime CI/CD Pipelines",
                  "Terraform Infrastructure as Code",
                  "24/7 Security & Performance Monitoring",
                ],
                tags: ["AWS & GCP Cloud", "DevOps & CI/CD", "Kubernetes", "99.9% Uptime"],
                link: "/services/devops-cicd/",
                accent: "#1a73e8",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
                ),
              },
              {
                title: "Healthcare & Medical Billing Operations",
                desc: "We assist clinics, medical practices, and billing companies with end-to-end revenue cycle management (RCM), insurance claims processing, patient billing, and HIPAA compliance.",
                managed: [
                  "Revenue Cycle Management (RCM)",
                  "Claims Submission & Denial Management",
                  "HIPAA-Compliant Patient Workflows",
                  "EHR/EMR System Data Sync",
                ],
                tags: ["Medical Billing", "Revenue Cycle RCM", "HIPAA Compliance", "Claims Processing"],
                link: "/services/",
                accent: "#7C3AED",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                ),
              },
              {
                title: "Dedicated Offshore Software Engineering Squads",
                desc: "We assemble and manage dedicated offshore software development teams tailored to your product roadmap, offering timezone-aligned communication, daily standups, and rapid delivery.",
                managed: [
                  "Timezone-Aligned Agile Delivery",
                  "Full-Stack Senior Developers & Designers",
                  "Continuous Integration & Quality Assurance",
                  "Transparent Weekly Sprint Reports",
                ],
                tags: ["Dedicated Teams", "Offshore Engineering", "Agile Sprints", "Full-Stack Devs"],
                link: "/team/",
                accent: "#E91E63",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                ),
              },
            ].map((cap, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 90}>
                <div className="capability-card" style={{ "--cap-accent": cap.accent } as React.CSSProperties}>
                  <div>
                    <div className="capability-card__header">
                      <div className="capability-card__icon" style={{ background: `${cap.accent}14`, color: cap.accent }}>
                        {cap.icon}
                      </div>
                      <h3 className="capability-card__title">{cap.title}</h3>
                    </div>

                    <p className="capability-card__desc">{cap.desc}</p>

                    <div className="capability-card__manage-box">
                      <div className="capability-card__manage-title">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        Systems &amp; Workflows Managed:
                      </div>
                      <ul className="capability-card__manage-list">
                        {cap.managed.map((item, idx) => (
                          <li key={idx} className="capability-card__manage-item">
                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: cap.accent }}></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="capability-card__tags">
                      {cap.tags.map((tag, idx) => (
                        <span key={idx} className="capability-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={cap.link} className="btn btn--secondary btn--sm" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Explore Capability
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS — Premium
          ═══════════════════════════════════════ */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <h2 className="section__title">
                What our <span className="text-gradient">clients say</span>
              </h2>
              <p className="section__subtitle">
                Real feedback from teams we have helped ship and scale.
              </p>
            </div>
          </AnimatedSection>
          <div className="testimonials">
            {[
              { quote: "Devsynx delivered exactly what we needed, on time and within budget. Their AI calling agent has transformed our lead generation.", name: "Sarah Johnson", role: "CEO, TechStart Inc.", rating: 5 },
              { quote: "The team's technical expertise and attention to detail is outstanding. Our mobile app launch was flawless.", name: "Michael Chen", role: "CTO, RetailTech", rating: 5 },
              { quote: "Working with Devsynx has been a game-changer. Their cloud solutions scaled perfectly with our growth.", name: "Emily Rodriguez", role: "Founder, HealthTech Solutions", rating: 5 },
            ].map((t, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 120}>
                <div className="testimonial">
                  <div className="testimonial__quote-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <div className="testimonial__stars">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <svg key={si} width="18" height="18" viewBox="0 0 24 24" fill="#FDBD02" stroke="#FDBD02" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    ))}
                  </div>
                  <p className="testimonial__text">&ldquo;{t.quote}&rdquo;</p>
                  <div className="testimonial__author">
                    <div className="testimonial__avatar">{t.name.charAt(0)}</div>
                    <div>
                      <div className="testimonial__name">{t.name}</div>
                      <div className="testimonial__role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TECH MARQUEE — Dual Row with Brand Logos
          ═══════════════════════════════════════ */}
      <section className="marquee-section">
        <div className="container">
          <p className="marquee-section__label">Modern tech stack &amp; frameworks we build with</p>
        </div>
        <div className="marquee">
          <div className="marquee__track">
            {techLogos.map((tech, i) => (
              <span key={i} className="marquee__item" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', background: 'var(--color-card-bg)', padding: '14px 28px', borderRadius: '36px', border: '1px solid var(--color-border)' }}>
                {tech.icon}
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-dark)' }}>{tech.name}</span>
              </span>
            ))}
            {techLogos.map((tech, i) => (
              <span key={`dup-${i}`} className="marquee__item" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', background: 'var(--color-card-bg)', padding: '14px 28px', borderRadius: '36px', border: '1px solid var(--color-border)' }}>
                {tech.icon}
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-dark)' }}>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════
          FAQ — Polished
          ═══════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="faq-layout">
            <AnimatedSection animation="fade-right" className="faq-layout__info">
              <span className="section__label">FAQ</span>
              <h2 className="section__title" style={{ textAlign: 'left' }}>
                Frequently Asked<br /><span className="text-gradient">Questions</span>
              </h2>
              <p className="section__subtitle" style={{ textAlign: 'left' }}>
                Got questions? We&apos;ve got answers. Here are some common questions about working with us.
              </p>
              <div className="faq-layout__cta">
                <p>Can&apos;t find what you&apos;re looking for?</p>
                <Link href="/contact/" className="btn btn--primary btn--sm">
                  Contact Us
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={150} className="faq-layout__content">
              <FAQ items={homeFaqs} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — Premium
          ═══════════════════════════════════════ */}
      <section className="cta">
        <div className="cta__bg">
          <div className="cta__shape cta__shape--1"></div>
          <div className="cta__shape cta__shape--2"></div>
          <div className="cta__particles">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="cta__particle" style={{ left: `${15 + i * 14}%`, animationDelay: `${i * 0.8}s` }}></div>
            ))}
          </div>
        </div>
        <div className="container">
          <AnimatedSection animation="zoom-in">
            <div className="cta__inner">
              <div className="cta__badge">Let&apos;s build together</div>
              <h2 className="cta__title">
                Ready to Build Something That Works?
              </h2>
              <p className="cta__subtitle">
                Share your idea and we&apos;ll help you define scope, validate the
                approach, and ship your MVP in weeks, not months.
              </p>
              <div className="cta__actions">
                <Link href="/contact/" className="btn btn--white btn--lg">
                  Start a Project
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/contact/" className="btn btn--outline-white btn--lg">
                  Schedule a Free Call
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
