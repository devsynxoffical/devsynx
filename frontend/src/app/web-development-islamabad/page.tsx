import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development in Islamabad: Next.js & WordPress | DEVSYNX",
  description: "Web development in Islamabad and Rawalpindi: custom Next.js websites, web apps and Shopify stores built for speed and Google ranking. Fixed prices in PKR.",
  path: "/web-development-islamabad/",
  keywords: [
    "web development in islamabad",
    "website development company in islamabad",
    "web development company in rawalpindi",
    "nextjs development company islamabad",
    "wordpress web development islamabad",
    "shopify development agency islamabad",
  ],
});

export default function WebDevelopmentIslamabadPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Pakistan", path: "/pakistan/" },
    { name: "Web Development Islamabad", path: "/web-development-islamabad/" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    name: "DEVSYNX - Web Development in Islamabad",
    description: "Custom Next.js, React, WordPress, and Shopify web development services in Islamabad and Rawalpindi.",
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
        name: "How much does a website cost in Islamabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 5 to 10-page business website in Islamabad usually costs PKR 80,000 to PKR 250,000; an e-commerce store costs PKR 120,000 to PKR 350,000; and custom web applications start from PKR 350,000+. Price depends on custom features and API integrations. We provide fixed-price quotes in writing.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard business website takes 2 to 3 weeks from kickoff to launch. An e-commerce store takes 3 to 5 weeks, and a custom Next.js web application takes 4 to 8 weeks. You see weekly interactive demos and test progress directly.",
        },
      },
      {
        "@type": "Question",
        name: "Should I choose WordPress, Shopify, or a custom Next.js website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WordPress suits marketing and content sites where you want easy text editing. Shopify suits e-commerce stores requiring courier APIs, inventory tracking, and payments. Next.js suits brands and startups that require sub-second speeds, custom web apps, or top-tier Google SEO performance.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide domain and hosting in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can register .com or .pk domains in your name and host your website on managed cloud servers (Vercel, AWS, or local LiteSpeed). You maintain 100% ownership and full administrative logins.",
        },
      },
      {
        "@type": "Question",
        name: "Will my website show up on Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every website built by DEVSYNX includes built-in technical SEO: schema markup, XML sitemap, mobile optimization, fast Core Web Vitals, and direct Search Console submission to ensure swift indexing and ranking.",
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
            Next.js · React · Shopify · WordPress · Islamabad &amp; Rawalpindi
          </div>

          <h1 className="city-title">
            Web Development in <span>Islamabad</span> Built to Rank &amp; Convert
          </h1>

          <div className="direct-answer-box">
            <div className="direct-answer-box__label">
              <span>⚡ Direct Answer</span>
            </div>
            <p className="direct-answer-box__text">
              <strong>DEVSYNX</strong> provides web development in Islamabad and Rawalpindi. We build custom Next.js websites, React web apps, WordPress business sites, and Shopify ecommerce stores. Every site includes technical SEO, sub-second load speeds, and clean code that you own 100%. Speak with our Islamabad engineering team or WhatsApp us at +92 302 946 2542.
            </p>
          </div>

          <div className="city-cta-bar">
            <a
              href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20need%20a%20website%20for%20my%20business%20in%20Islamabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp Us (+92 302 946 2542)
            </a>
            <a href="tel:+923029462542" className="btn-phone">
              📞 Call Office
            </a>
            <Link href="/contact/" className="btn btn--secondary" style={{ padding: "14px 24px", borderRadius: "12px" }}>
              Get a Fixed-Price Quote →
            </Link>
          </div>

          <div className="city-stats">
            <div className="city-stat-item">
              <span className="city-stat-number">&lt;1.0s</span>
              <span className="city-stat-label">Page Load Speed</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">100%</span>
              <span className="city-stat-label">Core Web Vitals Pass</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">150+</span>
              <span className="city-stat-label">Websites Launched</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">30 Days</span>
              <span className="city-stat-label">Post-Launch Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">What We Build</span>
            <h2 className="city-section__title">Web Development Services for Twin-City Businesses</h2>
            <p className="city-section__desc">
              From corporate authority sites to custom multi-tenant SaaS portals, we engineer websites that turn visitors into paying clients.
            </p>
          </div>

          <div className="city-grid">
            <div className="city-card">
              <div className="city-card__icon">⚡</div>
              <h3 className="city-card__title">Next.js &amp; React Web Apps</h3>
              <p className="city-card__text">
                Modern full-stack web applications with server-side rendering (SSR), dynamic dashboards, database integration, and high security.
              </p>
              <Link href="/services/custom-web-development/" className="city-card__link">
                Custom Web Development →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🛍️</div>
              <h3 className="city-card__title">Shopify E-Commerce Stores</h3>
              <p className="city-card__text">
                Custom liquid and headless Shopify storefronts. Local payment gateways, courier tracking integrations (Trax/TCS), and fast mobile checkout.
              </p>
              <Link href="/clients/silayi-pret/" className="city-card__link">
                Shopify Case Study →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🌐</div>
              <h3 className="city-card__title">Corporate &amp; B2B Websites</h3>
              <p className="city-card__text">
                Brand-defining websites for exporters, consultancies, and institutions. Engineered to showcase portfolio assets, certifications, and capture leads.
              </p>
              <Link href="/clients/nw-canvas/" className="city-card__link">
                B2B Portal Case Study →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🚀</div>
              <h3 className="city-card__title">Landing Pages &amp; Funnels</h3>
              <p className="city-card__text">
                High-converting sales funnels with built-in Meta Conversions API (CAPI) and WhatsApp click tracking to maximize return on ad spend.
              </p>
              <Link href="/digital-marketing-agency-islamabad/" className="city-card__link">
                Digital Marketing Islamabad →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🔍</div>
              <h3 className="city-card__title">SEO-First Architecture</h3>
              <p className="city-card__text">
                Schema.org structured data, semantic HTML5, localized OpenGraph tags, and automatic XML sitemaps to rank on Google from day one.
              </p>
              <Link href="/seo-services-islamabad/" className="city-card__link">
                SEO Services Islamabad →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🛡️</div>
              <h3 className="city-card__title">Website Redesign &amp; Speed Fixes</h3>
              <p className="city-card__text">
                Rebuilding slow, outdated websites into blazing-fast modern platforms with zero downtime and preserved SEO link rankings.
              </p>
              <Link href="/contact/" className="city-card__link">
                Request Free Website Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="city-section">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Technology Guide</span>
            <h2 className="city-section__title">Next.js vs. WordPress vs. Shopify</h2>
            <p className="city-section__desc">
              We recommend the right tech stack based on your business model, not agency bias:
            </p>
          </div>

          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Technology</th>
                  <th>Best For</th>
                  <th>Load Speed</th>
                  <th>Customizability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Next.js / React</strong></td>
                  <td>Web apps, high-traffic portals, SaaS, modern brand sites</td>
                  <td><span className="price-tag">Ultra Fast (&lt;0.8s)</span></td>
                  <td>100% Total Freedom</td>
                </tr>
                <tr>
                  <td><strong>Shopify</strong></td>
                  <td>Online stores, physical product brands, apparel, retail</td>
                  <td>Fast (1.5s – 2.5s)</td>
                  <td>High (Custom Liquid &amp; Headless)</td>
                </tr>
                <tr>
                  <td><strong>WordPress</strong></td>
                  <td>Blogs, content-heavy news sites, simple marketing pages</td>
                  <td>Moderate (1.8s – 3.2s)</td>
                  <td>Medium (Plugin Ecosystem)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Transparent Rates</span>
            <h2 className="city-section__title">Website Development Packages in Islamabad</h2>
            <p className="city-section__desc">
              Fixed quotes in PKR with domain, SSL, mobile responsiveness, and technical SEO included:
            </p>
          </div>

          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Scope</th>
                  <th>Price Range (PKR)</th>
                  <th>Delivery</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Starter Business Website</strong></td>
                  <td>Up to 5 pages, mobile responsive, WhatsApp CTA, contact form, SEO setup</td>
                  <td><span className="price-tag">PKR 80,000 – 140,000</span></td>
                  <td>10 – 14 Days</td>
                </tr>
                <tr>
                  <td><strong>Growth Corporate Website</strong></td>
                  <td>8 – 15 pages, custom UI/UX in Figma, CMS integration, portfolio showcase</td>
                  <td><span className="price-tag">PKR 150,000 – 250,000</span></td>
                  <td>2 – 3 Weeks</td>
                </tr>
                <tr>
                  <td><strong>E-Commerce Store</strong></td>
                  <td>Custom Shopify/WooCommerce, courier APIs, COD verification, product sync</td>
                  <td><span className="price-tag">PKR 120,000 – 350,000</span></td>
                  <td>3 – 4 Weeks</td>
                </tr>
                <tr>
                  <td><strong>Custom Web App / Portal</strong></td>
                  <td>Next.js frontend, backend API, database, authentication, role dashboards</td>
                  <td><span className="price-tag">PKR 350,000 – 1,200,000</span></td>
                  <td>4 – 8 Weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="city-section">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Got Questions?</span>
            <h2 className="city-section__title">Frequently Asked Questions</h2>
          </div>

          <div className="city-faq-list">
            <div className="city-faq-item">
              <h3 className="city-faq-question">How much does a website cost in Islamabad?</h3>
              <p className="city-faq-answer">
                A 5 to 10-page business website in Islamabad usually costs PKR 80,000 to PKR 250,000; an e-commerce store costs PKR 120,000 to PKR 350,000; and custom web applications start from PKR 350,000+. Price depends on custom features and API integrations. We provide fixed-price quotes in writing.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">How long does it take to build a website?</h3>
              <p className="city-faq-answer">
                A standard business website takes 2 to 3 weeks from kickoff to launch. An e-commerce store takes 3 to 5 weeks, and a custom Next.js web application takes 4 to 8 weeks. You see weekly interactive demos and test progress directly.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Should I choose WordPress, Shopify, or a custom Next.js website?</h3>
              <p className="city-faq-answer">
                WordPress suits marketing and content sites where you want easy text editing. Shopify suits e-commerce stores requiring courier APIs, inventory tracking, and payments. Next.js suits brands and startups that require sub-second speeds, custom web apps, or top-tier Google SEO performance.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Do you provide domain and hosting in Pakistan?</h3>
              <p className="city-faq-answer">
                Yes. We can register .com or .pk domains in your name and host your website on managed cloud servers (Vercel, AWS, or local LiteSpeed). You maintain 100% ownership and full administrative logins.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Will my website show up on Google?</h3>
              <p className="city-faq-answer">
                Every website built by DEVSYNX includes built-in technical SEO: schema markup, XML sitemap, mobile optimization, fast Core Web Vitals, and direct Search Console submission to ensure swift indexing and ranking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="city-section city-section--alt" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="city-section__title">Get Your Website Built in Islamabad</h2>
          <p className="city-section__desc" style={{ maxWidth: "600px", margin: "0 auto 30px" }}>
            Share your project requirements with our engineering team for a free wireframe consultation and fixed proposal.
          </p>
          <div className="city-cta-bar" style={{ justifyContent: "center" }}>
            <a
              href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20need%20a%20website%20for%20my%20business%20in%20Islamabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp Us (+92 302 946 2542)
            </a>
            <Link href="/contact/" className="btn btn--primary" style={{ padding: "14px 28px", borderRadius: "12px" }}>
              Request Proposal →
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="city-sticky-bar">
        <a
          href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20need%20a%20website%20for%20my%20business%20in%20Islamabad."
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
