import Link from "next/link";
import { clientProjects } from "@/data/clients";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/seo/metadata";
import { pathToAbsoluteUrl } from "@/seo/priorityPages";
import type { LocalPage } from "@/seo/localPages";

const PHONE_DISPLAY = "+92 302 946 2542";
const PHONE_TEL = "+923029462542";

export function LocalLandingPage({ page }: { page: LocalPage }) {
  const whatsappHref = `https://wa.me/923029462542?text=${encodeURIComponent(page.whatsappText)}`;
  const caseStudies = page.caseStudyIds
    .map((id) => clientProjects.find((p) => p.id === id))
    .filter((p): p is (typeof clientProjects)[number] => Boolean(p));

  const breadcrumbSchema = buildBreadcrumbSchema(page.breadcrumbs);
  const faqSchema = buildFaqSchema(page.faqs);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${pathToAbsoluteUrl(page.path)}#service`,
    name: `DEVSYNX: ${page.serviceName} ${page.placeLabel}`,
    url: pathToAbsoluteUrl(page.path),
    logo: "https://devsynx.com/icon.png",
    image: "https://devsynx.com/icon.png",
    description: page.metaDescription,
    telephone: PHONE_TEL,
    email: "info@devsynx.com",
    ...(page.priceRange ? { priceRange: page.priceRange } : {}),
    parentOrganization: { "@id": "https://devsynx.com/#organization" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Old Airport Road, Chaklala Cantt.",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      postalCode: "46000",
      addressCountry: "PK",
    },
    areaServed: page.areaServed.map((name) => ({ "@type": page.areaType, name })),
    serviceType: page.serviceName,
  };

  return (
    <div className="city-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="city-hero">
        <div className="container">
          <div className="city-badge">
            <span className="city-badge__dot"></span>
            {page.badge}
          </div>
          <h1 className="city-title">
            {page.h1Before} <span>{page.h1Highlight}</span>
            {page.h1After ? ` ${page.h1After}` : ""}
          </h1>
          <div className="direct-answer-box">
            <div className="direct-answer-box__label">
              <span>⚡ Quick Answer</span>
            </div>
            <p className="direct-answer-box__text">{page.quickAnswer}</p>
          </div>
          <div className="city-cta-bar">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              💬 WhatsApp Us ({PHONE_DISPLAY})
            </a>
            <a href={`tel:${PHONE_TEL}`} className="btn-phone">
              📞 Call {PHONE_DISPLAY}
            </a>
            <Link href="/contact/" className="btn btn--secondary" style={{ padding: "14px 24px", borderRadius: "12px" }}>
              Get a Fixed-Price Quote →
            </Link>
          </div>
          <div className="city-stats">
            {page.stats.map((s) => (
              <div className="city-stat-item" key={s.label}>
                <span className="city-stat-number">{s.value}</span>
                <span className="city-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / market context */}
      <section className="city-section">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">{page.introTag}</span>
            <h2 className="city-section__title">{page.introTitle}</h2>
          </div>
          <div style={{ maxWidth: "820px", margin: "0 auto", display: "grid", gap: "16px" }}>
            {page.intro.map((p, i) => (
              <p className="city-section__desc" style={{ textAlign: "left", maxWidth: "none" }} key={i}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Local highlights (page-specific) */}
      {page.highlights ? (
        <section className="city-section city-section--alt">
          <div className="container">
            <div className="city-section__header">
              <span className="city-section__tag">{page.highlights.tag}</span>
              <h2 className="city-section__title">{page.highlights.title}</h2>
            </div>
            <div className="city-grid">
              {page.highlights.cards.map((c) => (
                <div className="city-card" key={c.title}>
                  <div className="city-card__icon">{c.icon}</div>
                  <h3 className="city-card__title">{c.title}</h3>
                  <p className="city-card__text">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Services */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">What We Build</span>
            <h2 className="city-section__title">{page.servicesTitle}</h2>
          </div>
          <div className="city-grid">
            {page.services.map((s) => (
              <div className="city-card" key={s.title}>
                <div className="city-card__icon">{s.icon}</div>
                <h3 className="city-card__title">{s.title}</h3>
                <p className="city-card__text">{s.text}</p>
                {s.href ? (
                  <Link href={s.href} className="city-card__link">
                    {s.linkLabel ?? "Learn more"} →
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form guide (page-specific) */}
      {page.guide?.length ? (
        <section className="city-section">
          <div className="container">
            <div className="city-section__header">
              <span className="city-section__tag">Guide</span>
              <h2 className="city-section__title">{page.guideTitle ?? "What You Need to Know"}</h2>
            </div>
            <div className="guide">
              {page.guide.map((g) => (
                <div className="guide__item" key={g.heading}>
                  <h3>{g.heading}</h3>
                  <p>{g.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Case studies */}
      {caseStudies.length > 0 ? (
        <section className="city-section">
          <div className="container">
            <div className="city-section__header">
              <span className="city-section__tag">Verified Results</span>
              <h2 className="city-section__title">{page.caseStudiesTitle}</h2>
              <p className="city-section__desc">Live projects you can open and test, each with a full case study.</p>
            </div>
            <div className="city-grid">
              {caseStudies.map((c) => (
                <div className="city-card" key={c.id}>
                  <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase" }}>
                    {c.region}
                  </span>
                  <h3 className="city-card__title">{c.clientName}</h3>
                  <p className="city-card__text">{c.tagline}</p>
                  <Link href={`/clients/${c.id}/`} className="city-card__link">
                    View Case Study →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Pricing / engagement */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Clear Estimates</span>
            <h2 className="city-section__title">{page.pricingTitle}</h2>
            <p className="city-section__desc">{page.pricingNote}</p>
          </div>
          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>{page.pricingColumns[0]}</th>
                  <th>{page.pricingColumns[1]}</th>
                  <th>{page.pricingColumns[2]}</th>
                  <th>{page.pricingColumns[3]}</th>
                </tr>
              </thead>
              <tbody>
                {page.pricing.map((r) => (
                  <tr key={r[0]}>
                    <td><strong>{r[0]}</strong></td>
                    <td>{r[1]}</td>
                    <td><span className="price-tag">{r[2]}</span></td>
                    <td>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Areas + related */}
      <section className="city-section">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Coverage</span>
            <h2 className="city-section__title">{page.areasTitle}</h2>
            <p className="city-section__desc">{page.areasNote}</p>
            <div className="area-tags" style={{ justifyContent: "center" }}>
              {page.areas.map((a) => (
                <span className="area-tag" key={a}>{a}</span>
              ))}
            </div>
          </div>
          <div className="city-grid" style={{ marginTop: "32px" }}>
            {page.related.map((r) => (
              <Link href={r.href} className="city-card city-card__link" key={r.href} style={{ textDecoration: "none" }}>
                {r.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Got Questions?</span>
            <h2 className="city-section__title">Frequently Asked Questions</h2>
          </div>
          <div className="city-faq-list">
            {page.faqs.map((f) => (
              <div className="city-faq-item" key={f.question}>
                <h3 className="city-faq-question">{f.question}</h3>
                <p className="city-faq-answer">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="city-section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="city-section__title">{page.ctaTitle}</h2>
          <p className="city-section__desc" style={{ maxWidth: "600px", margin: "0 auto 30px" }}>
            Speak directly with a senior engineer. Get a clear scope, timeline and fixed-price quote within 48 hours.
          </p>
          <div className="city-cta-bar" style={{ justifyContent: "center" }}>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              💬 WhatsApp Us ({PHONE_DISPLAY})
            </a>
            <Link href="/contact/" className="btn btn--primary" style={{ padding: "14px 28px", borderRadius: "12px" }}>
              Request a Proposal →
            </Link>
          </div>
        </div>
      </section>

      <div className="city-sticky-bar">
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" style={{ background: "#25d366", color: "#000" }}>
          💬 WhatsApp
        </a>
        <a href={`tel:${PHONE_TEL}`} style={{ background: "#06909d", color: "#fff" }}>
          📞 Call Now
        </a>
      </div>
    </div>
  );
}
