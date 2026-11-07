import Link from "next/link";
import { CostCalculator } from "@/components/CostCalculator";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/seo/metadata";
import { pathToAbsoluteUrl } from "@/seo/priorityPages";
import type { ToolPage } from "@/seo/toolPages";

export function ToolPageView({ page }: { page: ToolPage }) {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Free Tools", path: "/tools/" },
    { name: page.navLabel, path: page.path },
  ]);
  const app = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: page.h1,
    url: pathToAbsoluteUrl(page.path),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (web browser)",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: page.metaDescription,
    publisher: { "@id": "https://devsynx.com/#organization" },
  };
  const faq = buildFaqSchema(page.faqs);

  return (
    <div className="city-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <section className="city-hero">
        <div className="container">
          <div className="city-badge">
            <span className="city-badge__dot"></span>
            Free tool · No sign-up
          </div>
          <h1 className="city-title">{page.h1}</h1>
          <div className="direct-answer-box">
            <div className="direct-answer-box__label">
              <span>⚡ Quick Answer</span>
            </div>
            <p className="direct-answer-box__text">{page.quickAnswer}</p>
          </div>
        </div>
      </section>

      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Calculator</span>
            <h2 className="city-section__title">{page.calcTitle}</h2>
          </div>
          <CostCalculator config={page.config} ariaLabel={page.h1} />
        </div>
      </section>

      <section className="city-section">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Guide</span>
            <h2 className="city-section__title">{page.guideTitle}</h2>
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

      <section className="city-section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="city-section__title">Want an exact number?</h2>
          <p className="city-section__desc" style={{ maxWidth: "620px", margin: "0 auto 24px" }}>
            Send us your feature list and get a written fixed-price proposal within 48 hours.
          </p>
          <div className="city-cta-bar" style={{ justifyContent: "center" }}>
            <Link href="/contact/" className="btn btn--primary" style={{ padding: "14px 28px", borderRadius: "12px" }}>
              Get a Fixed-Price Quote →
            </Link>
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
    </div>
  );
}
