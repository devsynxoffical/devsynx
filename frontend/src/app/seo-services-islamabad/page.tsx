import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Services in Islamabad | Local & Technical SEO",
  description: "SEO services in Islamabad and Rawalpindi: Google Maps rankings, technical audits, and high-converting content that drives qualified customer inquiries.",
  path: "/seo-services-islamabad/",
  keywords: [
    "seo services in islamabad",
    "seo company in islamabad",
    "seo expert islamabad",
    "seo services rawalpindi",
    "local seo services islamabad",
    "best seo company in islamabad",
  ],
});

export default function SeoServicesIslamabadPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Pakistan", path: "/pakistan/" },
    { name: "SEO Services Islamabad", path: "/seo-services-islamabad/" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Search Engine Optimization",
    name: "DEVSYNX - SEO Services in Islamabad",
    description: "Local SEO, Google Maps 3-pack rankings, technical SEO, and link building for businesses in Islamabad and Rawalpindi.",
    provider: {
      "@type": "ProfessionalService",
      "@id": "https://devsynx.com/#organization",
      name: "DEVSYNX Private Limited",
      telephone: "+923029462542",
      email: "info@devsynx.com",
    },
    areaServed: [
      { "@type": "City", name: "Islamabad" },
      { "@type": "City", name: "Rawalpindi" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much do SEO services cost in Islamabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local SEO for one twin-city location starts at PKR 45,000 to PKR 65,000 per month. Comprehensive business SEO with on-page technical fixes and content ranges from PKR 85,000 to PKR 120,000 per month. National or e-commerce SEO ranges from PKR 140,000+. We quote fixed monthly fees with zero hidden charges after a complimentary audit.",
        },
      },
      {
        "@type": "Question",
        name: "How long does SEO take to show results in Islamabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Maps 3-pack and localized long-tail keywords typically begin moving within 6 to 10 weeks. Highly competitive search terms usually require 4 to 6 months of steady authority building. We provide live monthly Google Search Console reports so you can track organic impressions and calls increasing every week.",
        },
      },
      {
        "@type": "Question",
        name: "Do you specialize in local SEO for Google Maps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Google Maps 3-pack dominance is the core of our local SEO service. We optimize your Google Business Profile (GBP), manage categories, implement geo-tagged photo workflows, build localized twin-city citations, and track ranking grids across specific Islamabad sectors (F-6 to F-11, Blue Area, I-8) and Rawalpindi.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer SEO services in Rawalpindi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We manage SEO for businesses in Saddar, Bahria Town, DHA, and Satellite Town. If your business is registered in Rawalpindi, your Google Map Pack visibility anchors around your address, and our localized strategy targets high-intent queries across Rawalpindi.",
        },
      },
      {
        "@type": "Question",
        name: "Can you guarantee number 1 ranking on Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No ethical agency can guarantee #1 rankings because Google algorithm updates and competitors evolve continuously. However, we guarantee our engineering work: comprehensive technical fixes, written task roadmaps, white-hat backlink outreach, and transparent monthly performance reporting.",
        },
      },
    ],
  };

  return (
    <div className="city-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="city-hero">
        <div className="container">
          <div className="city-badge">
            <span className="city-badge__dot"></span>
            Google Maps 3-Pack · Technical SEO · Islamabad &amp; Rawalpindi
          </div>

          <h1 className="city-title">
            SEO Services in <span>Islamabad</span> That Bring Calls, Not Just Traffic
          </h1>

          <div className="direct-answer-box">
            <div className="direct-answer-box__label">
              <span>⚡ Direct Answer</span>
            </div>
            <p className="direct-answer-box__text">
              <strong>DEVSYNX</strong> provides SEO services in Islamabad and Rawalpindi: Google Business Profile and map pack ranking, technical SEO, localized content, and high-DA backlinks. We start with a free audit, agree on target commercial keywords, and report rankings, phone calls, and qualified leads from Search Console and GA4 every month.
            </p>
          </div>

          <div className="city-cta-bar">
            <a
              href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20please%20audit%20my%20website%20for%20SEO%20in%20Islamabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp Free SEO Audit Request
            </a>
            <a href="tel:+923029462542" className="btn-phone">
              📞 Call SEO Team (+92 302 946 2542)
            </a>
            <Link href="/portfolio/seo-results/" className="btn btn--secondary" style={{ padding: "14px 24px", borderRadius: "12px" }}>
              View Verified SEO Case Studies →
            </Link>
          </div>

          <div className="city-stats">
            <div className="city-stat-item">
              <span className="city-stat-number">22.6K+</span>
              <span className="city-stat-label">Organic Clicks in 90 Days</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">+340%</span>
              <span className="city-stat-label">Impression Growth</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">Top 3</span>
              <span className="city-stat-label">Map Pack Rankings</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">100%</span>
              <span className="city-stat-label">White-Hat Outreach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Verified SEO Results */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Proof Over Promises</span>
            <h2 className="city-section__title">Verified Organic Results Shipped by DEVSYNX</h2>
            <p className="city-section__desc">
              We manage enterprise SEO with live Search Console verification. Real traffic and ranking growth for our clients:
            </p>
          </div>

          <div className="city-grid">
            <div className="city-card">
              <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase" }}>EdTech Ranking Push</span>
              <h3 className="city-card__title">ProGenius Students</h3>
              <p className="city-card__text">
                Scaled organic search from scratch to <strong>22,600+ clicks</strong> and <strong>139,000+ impressions</strong> with an average ranking position of 7.8 within 90 days.
              </p>
              <Link href="/clients/progenius-students-seo/" className="city-card__link">View Case Study →</Link>
            </div>

            <div className="city-card">
              <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase" }}>Corporate FinTech SEO</span>
              <h3 className="city-card__title">RBO Accounting</h3>
              <p className="city-card__text">
                Grew high-intent organic corporate accounting impressions by <strong>+340%</strong> in 90 days, capturing first-page rankings for commercial accounting queries.
              </p>
              <Link href="/clients/rbo-accounting/" className="city-card__link">View Case Study →</Link>
            </div>

            <div className="city-card">
              <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase" }}>Local Healthcare SEO</span>
              <h3 className="city-card__title">Acute Pharmacy</h3>
              <p className="city-card__text">
                Achieved <strong>#1 position</strong> in the local Google Map Pack for target pharmacy and prescription searches, generating daily walk-ins and phone calls.
              </p>
              <Link href="/clients/acutepharmacy/" className="city-card__link">View Case Study →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Islamabad SEO Services Include */}
      <section className="city-section">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">What We Deliver</span>
            <h2 className="city-section__title">Comprehensive SEO Services in Islamabad</h2>
            <p className="city-section__desc">
              Unlike traditional agencies that only write blog posts, DEVSYNX is an engineering firm. We optimize the underlying code, server response times, schema, and local citations.
            </p>
          </div>

          <div className="city-grid">
            <div className="city-card">
              <div className="city-card__icon">📍</div>
              <h3 className="city-card__title">Google Maps &amp; GBP 3-Pack</h3>
              <p className="city-card__text">
                Complete Google Business Profile optimization, category matching, localized twin-city citation audits, and geotagged updates to dominate map search.
              </p>
            </div>

            <div className="city-card">
              <div className="city-card__icon">⚙️</div>
              <h3 className="city-card__title">Developer-Level Technical SEO</h3>
              <p className="city-card__text">
                Fixing Core Web Vitals, server caching, schema markup (JSON-LD), crawl budgets, canonicalization, and mobile indexability directly in the codebase.
              </p>
            </div>

            <div className="city-card">
              <div className="city-card__icon">✍️</div>
              <h3 className="city-card__title">Commercial Keyword Strategy</h3>
              <p className="city-card__text">
                Targeting high-intent buyer searches in English, Roman Urdu, and Islamabad sector terms to attract actual purchasing customers, not empty clicks.
              </p>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🔗</div>
              <h3 className="city-card__title">High-DA Backlink Outreach</h3>
              <p className="city-card__text">
                White-hat editorial link acquisition from authentic Pakistani and global technology and industry platforms. Zero PBNs or spam link farms.
              </p>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🤖</div>
              <h3 className="city-card__title">AI Search Optimization (GEO/AEO)</h3>
              <p className="city-card__text">
                Optimizing your brand for inclusion in Google AI Overviews, ChatGPT Search, and Perplexity through entity schema, direct answer blocks, and citations.
              </p>
            </div>

            <div className="city-card">
              <div className="city-card__icon">📊</div>
              <h3 className="city-card__title">Transparent Monthly Reporting</h3>
              <p className="city-card__text">
                Direct Search Console and Google Analytics 4 reporting. Track organic ranking positions, phone call clicks, WhatsApp leads, and keyword progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Developers Do SEO Better */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">The DEVSYNX Advantage</span>
            <h2 className="city-section__title">Why Choose an SEO Company with In-House Developers?</h2>
            <p className="city-section__desc">
              Most marketing agencies cannot fix website code. They send 20-page PDF audit reports with lists of technical problems and tell you to find a developer to fix them.
            </p>
          </div>

          <div className="city-grid">
            <div className="city-card">
              <h3 className="city-card__title">We Fix the Code Ourselves</h3>
              <p className="city-card__text">
                At DEVSYNX, our software engineers modify the Next.js, WordPress, or Shopify code directly. We fix LCP, CLS, structured data, and robots.txt in hours, not weeks.
              </p>
            </div>

            <div className="city-card">
              <h3 className="city-card__title">Instant Indexing Automation</h3>
              <p className="city-card__text">
                We configure live IndexNow and Google Search Console APIs to push every new page update directly to Googlebot and Bing within minutes of publishing.
              </p>
            </div>

            <div className="city-card">
              <h3 className="city-card__title">Zero Third-Party Delays</h3>
              <p className="city-card__text">
                One accountable partner handles the entire funnel: from high-speed hosting and frontend code to keyword content and local Google Maps optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages Table */}
      <section className="city-section">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Monthly Retainers</span>
            <h2 className="city-section__title">SEO Plans &amp; Pricing in Islamabad</h2>
            <p className="city-section__desc">
              Transparent monthly retainer plans with no hidden agency markups. Fixed monthly deliverables:
            </p>
          </div>

          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Monthly Price (PKR)</th>
                  <th>Target Scope</th>
                  <th>Deliverables</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Local Map Pack SEO</strong></td>
                  <td><span className="price-tag">PKR 45,000 / mo</span></td>
                  <td>1 Location (Islamabad or Rawalpindi)</td>
                  <td>GBP optimization, citation building, review strategy, monthly ranking grid report</td>
                </tr>
                <tr>
                  <td><strong>Full Business SEO</strong></td>
                  <td><span className="price-tag">PKR 85,000 / mo</span></td>
                  <td>Up to 25 Target Keywords</td>
                  <td>Technical code fixes, 4 optimized content articles/mo, schema setup, authority links</td>
                </tr>
                <tr>
                  <td><strong>E-Commerce / Enterprise</strong></td>
                  <td><span className="price-tag">PKR 140,000 / mo</span></td>
                  <td>50+ Commercial Keywords</td>
                  <td>Collection &amp; product SEO, speed tuning, competitive gap blitz, high-DA outreach</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Got Questions?</span>
            <h2 className="city-section__title">Frequently Asked Questions</h2>
          </div>

          <div className="city-faq-list">
            <div className="city-faq-item">
              <h3 className="city-faq-question">How much do SEO services cost in Islamabad?</h3>
              <p className="city-faq-answer">
                Local SEO for one twin-city location starts at PKR 45,000 to PKR 65,000 per month. Comprehensive business SEO with on-page technical fixes and content ranges from PKR 85,000 to PKR 120,000 per month. National or e-commerce SEO ranges from PKR 140,000+. We quote fixed monthly fees with zero hidden charges after a complimentary audit.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">How long does SEO take to show results in Islamabad?</h3>
              <p className="city-faq-answer">
                Google Maps 3-pack and localized long-tail keywords typically begin moving within 6 to 10 weeks. Highly competitive search terms usually require 4 to 6 months of steady authority building. We provide live monthly Google Search Console reports so you can track organic impressions and calls increasing every week.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Do you specialize in local SEO for Google Maps?</h3>
              <p className="city-faq-answer">
                Yes. Google Maps 3-pack dominance is the core of our local SEO service. We optimize your Google Business Profile (GBP), manage categories, implement geo-tagged photo workflows, build localized twin-city citations, and track ranking grids across specific Islamabad sectors (F-6 to F-11, Blue Area, I-8) and Rawalpindi.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Do you offer SEO services in Rawalpindi?</h3>
              <p className="city-faq-answer">
                Yes. We manage SEO for businesses in Saddar, Bahria Town, DHA, and Satellite Town. If your business is registered in Rawalpindi, your Google Map Pack visibility anchors around your address, and our localized strategy targets high-intent queries across Rawalpindi.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Can you guarantee number 1 ranking on Google?</h3>
              <p className="city-faq-answer">
                No ethical agency can guarantee #1 rankings because Google algorithm updates and competitors evolve continuously. However, we guarantee our engineering work: comprehensive technical fixes, written task roadmaps, white-hat backlink outreach, and transparent monthly performance reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="city-section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="city-section__title">Claim Your Free Technical SEO Audit</h2>
          <p className="city-section__desc" style={{ maxWidth: "600px", margin: "0 auto 30px" }}>
            Send us your website URL. We will inspect your Google indexability, schema, and local map position, and deliver a clear action plan within 24 hours.
          </p>
          <div className="city-cta-bar" style={{ justifyContent: "center" }}>
            <a
              href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20please%20audit%20my%20website%20for%20SEO%20in%20Islamabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp Free Audit Request
            </a>
            <Link href="/contact/" className="btn btn--primary" style={{ padding: "14px 28px", borderRadius: "12px" }}>
              Request Full Audit →
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="city-sticky-bar">
        <a
          href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20please%20audit%20my%20website%20for%20SEO%20in%20Islamabad."
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "#25d366", color: "#000" }}
        >
          💬 WhatsApp
        </a>
        <a href="tel:+923029462542" style={{ background: "#06909d", color: "#fff" }}>
          📞 Call Now
        </a>
      </div>
    </div>
  );
}
