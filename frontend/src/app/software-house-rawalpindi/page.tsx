import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Software House in Rawalpindi | DEVSYNX",
  description: "Software house serving Rawalpindi: web apps, mobile apps, ERP and Shopify from DEVSYNX. In-person meetings in Saddar, Bahria Town and DHA. WhatsApp us.",
  path: "/software-house-rawalpindi/",
  keywords: [
    "software house in rawalpindi",
    "software company in rawalpindi",
    "software house rawalpindi saddar",
    "software house bahria town rawalpindi",
    "software house 6th road rawalpindi",
    "web development company rawalpindi",
  ],
});

export default function SoftwareHouseRawalpindiPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Pakistan", path: "/pakistan/" },
    { name: "Software House Rawalpindi", path: "/software-house-rawalpindi/" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development",
    name: "DEVSYNX - Software House Serving Rawalpindi",
    description: "Custom software, mobile apps, web development, ERP, and POS systems for businesses in Rawalpindi.",
    provider: {
      "@type": "ProfessionalService",
      "@id": "https://devsynx.com/#organization",
      name: "DEVSYNX Private Limited",
      telephone: "+923029462542",
      email: "info@devsynx.com",
    },
    areaServed: {
      "@type": "City",
      name: "Rawalpindi",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you have an office in Rawalpindi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our headquarters is located in Islamabad, approximately 20 minutes from Saddar, Rawalpindi. We actively serve Rawalpindi businesses every week: our senior team comes directly to your office for kickoff meetings and sprint reviews, while day-to-day coordination runs on WhatsApp and Google Meet.",
        },
      },
      {
        "@type": "Question",
        name: "Can you meet us in Saddar, Bahria Town, or DHA Rawalpindi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We frequently conduct on-site meetings across Rawalpindi, including Saddar, 6th Road, Satellite Town, Bahria Town (Phases 1-8), and DHA. Most clients meet us 2 to 3 times per project: kickoff, UI/UX sign-off, and final deployment.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of software do Rawalpindi businesses order most?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common requests from Rawalpindi clients are retail and wholesale POS & ERP systems, custom Shopify e-commerce stores, real estate property portals for Bahria Town agencies, and medical clinic / school management software.",
        },
      },
      {
        "@type": "Question",
        name: "Is a software company in Rawalpindi cheaper than Islamabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Development costs depend on scope and engineering expertise, not the city. We offer transparent, competitive PKR pricing for all twin-city projects with 100% source code ownership and guaranteed post-launch maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "How do we get started with DEVSYNX in Rawalpindi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply WhatsApp us at +92 302 946 2542 or call our office. We will schedule a free discovery session at your office in Rawalpindi or online, and provide a detailed written proposal within 48 hours.",
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
            Serving Saddar, Bahria Town, DHA &amp; Rawalpindi Districts
          </div>

          <h1 className="city-title">
            Software House in <span>Rawalpindi</span>: Your Twin-City Development Team
          </h1>

          <div className="direct-answer-box">
            <div className="direct-answer-box__label">
              <span>⚡ Direct Answer</span>
            </div>
            <p className="direct-answer-box__text">
              <strong>DEVSYNX</strong> is a software house serving Rawalpindi from our Islamabad headquarters, just 20 minutes from Saddar. We build custom websites, iOS &amp; Android apps, ERP, POS, and HR software for Rawalpindi businesses. We meet you at your office or ours, and manage your project day-to-day on WhatsApp with 100% source code ownership.
            </p>
          </div>

          <div className="city-cta-bar">
            <a
              href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20am%20in%20Rawalpindi%20and%20need%20software%20built."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp Us (+92 302 946 2542)
            </a>
            <a href="tel:+923029462542" className="btn-phone">
              📞 Call Office (+92 302 946 2542)
            </a>
            <Link href="/contact/" className="btn btn--secondary" style={{ padding: "14px 24px", borderRadius: "12px" }}>
              Request On-Site Meeting in Rawalpindi →
            </Link>
          </div>

          <div className="city-stats">
            <div className="city-stat-item">
              <span className="city-stat-number">20 Min</span>
              <span className="city-stat-label">From Saddar Rawalpindi</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">300+</span>
              <span className="city-stat-label">Shipped Projects</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">100%</span>
              <span className="city-stat-label">Code Ownership</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">30 Days</span>
              <span className="city-stat-label">Post-Launch Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rawalpindi businesses choose us */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Twin-City Synergy</span>
            <h2 className="city-section__title">Why Rawalpindi Businesses Work With DEVSYNX</h2>
            <p className="city-section__desc">
              Transparent, professional engineering without excuses. We provide senior engineering capability right across the IJP and Islamabad Expressway corridor.
            </p>
          </div>

          <div className="city-grid">
            <div className="city-card">
              <div className="city-card__icon">🤝</div>
              <h3 className="city-card__title">In-Person at Your Premises</h3>
              <p className="city-card__text">
                No need to navigate remote freelancing risks. Our project architects meet with you in Saddar, Bahria Town, or Satellite Town to understand your exact business workflow.
              </p>
            </div>

            <div className="city-card">
              <div className="city-card__icon">📦</div>
              <h3 className="city-card__title">Retail POS &amp; Inventory Systems</h3>
              <p className="city-card__text">
                Engineered for Rawalpindi wholesalers, retailers, and distributors. Multi-branch inventory tracking, barcode scanning, sales tax receipts, and FBR integration.
              </p>
              <Link href="/services/custom-web-development/" className="city-card__link">
                ERP &amp; POS Systems →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🛍️</div>
              <h3 className="city-card__title">Shopify &amp; E-Commerce Stores</h3>
              <p className="city-card__text">
                Custom Shopify stores with local courier integration (TCS, Trax, CallCourier, Leopard), automated WhatsApp order confirmation, and low return-to-origin (RTO) rates.
              </p>
              <Link href="/services/custom-web-development/" className="city-card__link">
                E-Commerce Stores →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🏢</div>
              <h3 className="city-card__title">Real Estate Portals</h3>
              <p className="city-card__text">
                Custom property portals for Bahria Town, DHA, and Rawalpindi real estate agencies. Interactive floor plans, WhatsApp lead routing, and dynamic agent listings.
              </p>
              <Link href="/clients/alpha-ahead-real-estate/" className="city-card__link">
                Real Estate Case Study →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">📲</div>
              <h3 className="city-card__title">Mobile Apps (Flutter &amp; React Native)</h3>
              <p className="city-card__text">
                Cross-platform iOS and Android mobile apps for delivery, booking, education, and healthcare. Fast UI, push notifications, and App Store submission.
              </p>
              <Link href="/services/mobile-app-development/" className="city-card__link">
                Mobile App Services →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">📊</div>
              <h3 className="city-card__title">Attendance &amp; Payroll Software</h3>
              <p className="city-card__text">
                Built on DEVSYNX HRMS: biometric and face-verified attendance, leave approvals, and 1-click salary slip generation for Rawalpindi companies.
              </p>
              <Link href="/clients/devsynx-attendance-hr/" className="city-card__link">
                HRMS Platform Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rawalpindi Areas Covered */}
      <section className="city-section">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Coverage Map</span>
            <h2 className="city-section__title">Areas We Serve Across Rawalpindi</h2>
            <p className="city-section__desc">
              We travel directly to your office or retail location for discovery and milestone meetings:
            </p>
            <div className="area-tags" style={{ justifyContent: "center" }}>
              <span className="area-tag">Saddar Rawalpindi</span>
              <span className="area-tag">6th Road &amp; Murree Road</span>
              <span className="area-tag">Satellite Town (Blocks A, B, C, D)</span>
              <span className="area-tag">Bahria Town (Phases 1 through 8)</span>
              <span className="area-tag">DHA Rawalpindi (Phases 1 &amp; 2)</span>
              <span className="area-tag">Chaklala Scheme III</span>
              <span className="area-tag">Westridge &amp; Peshawar Road</span>
              <span className="area-tag">Askari Housing Schemes</span>
              <span className="area-tag">Commercial Market</span>
              <span className="area-tag">Raja Bazar Wholesale Hub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Table */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Clear Pricing</span>
            <h2 className="city-section__title">Software Development Prices for Rawalpindi Clients</h2>
            <p className="city-section__desc">
              Same competitive PKR rates across the twin cities. Fixed milestone contracts with zero surprises.
            </p>
          </div>

          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Project Solution</th>
                  <th>Delivery Time</th>
                  <th>Price Range (PKR)</th>
                  <th>Key Inclusions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Retail / Business Website</strong></td>
                  <td>2 – 3 Weeks</td>
                  <td><span className="price-tag">PKR 80,000 – 250,000</span></td>
                  <td>Custom responsive design, SEO setup, WhatsApp integration, hosting setup</td>
                </tr>
                <tr>
                  <td><strong>Shopify / Ecommerce Store</strong></td>
                  <td>3 – 5 Weeks</td>
                  <td><span className="price-tag">PKR 120,000 – 350,000</span></td>
                  <td>Courier API integration (TCS/Trax), COD verification, payment gateway</td>
                </tr>
                <tr>
                  <td><strong>Custom Web App / Portal</strong></td>
                  <td>4 – 8 Weeks</td>
                  <td><span className="price-tag">PKR 350,000 – 1,200,000</span></td>
                  <td>Full-stack Next.js/React &amp; Node.js, database architecture, auth, role management</td>
                </tr>
                <tr>
                  <td><strong>Mobile App (iOS + Android)</strong></td>
                  <td>6 – 12 Weeks</td>
                  <td><span className="price-tag">PKR 450,000 – 1,500,000</span></td>
                  <td>Flutter single-codebase app, push notifications, offline cache, App Store deployment</td>
                </tr>
                <tr>
                  <td><strong>POS / Inventory / ERP</strong></td>
                  <td>6 – 16 Weeks</td>
                  <td><span className="price-tag">PKR 500,000 – 2,500,000</span></td>
                  <td>Stock management, barcode billing, multi-store sync, accounts, FBR integration</td>
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
            <span className="city-section__tag">Common Questions</span>
            <h2 className="city-section__title">Frequently Asked Questions</h2>
          </div>

          <div className="city-faq-list">
            <div className="city-faq-item">
              <h3 className="city-faq-question">Do you have an office in Rawalpindi?</h3>
              <p className="city-faq-answer">
                Our main office is located in Islamabad, approximately 20 minutes from Saddar, Rawalpindi. We serve Rawalpindi clients on-site every week: our senior technical team comes to your office for kickoff meetings and sprint demos, while daily coordination runs on WhatsApp.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Can you meet us in Saddar, Bahria Town, or DHA Rawalpindi?</h3>
              <p className="city-faq-answer">
                Yes. We schedule regular on-site meetings across Rawalpindi, including Saddar, 6th Road, Satellite Town, Bahria Town (Phases 1-8), and DHA. Most clients meet us 2 to 3 times during a project: kickoff, UI/UX sign-off, and final deployment.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">What kind of software do Rawalpindi businesses order most?</h3>
              <p className="city-faq-answer">
                The most frequent requests from Rawalpindi businesses are retail/wholesale POS and inventory systems, custom Shopify e-commerce stores, real estate property portals for Bahria Town agencies, and medical clinic and school management software.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Is a software company in Rawalpindi cheaper than Islamabad?</h3>
              <p className="city-faq-answer">
                Software pricing is determined by technical complexity and team seniority, not city borders. We offer transparent, competitive PKR pricing for all twin-city projects with 100% source code ownership and guaranteed post-launch maintenance.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">How do we get started with DEVSYNX in Rawalpindi?</h3>
              <p className="city-faq-answer">
                Simply WhatsApp us at +92 302 946 2542 or call our office. We will schedule a free discovery session at your office in Rawalpindi or online, and provide a detailed written proposal within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="city-section city-section--alt" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="city-section__title">Ready to Start Your Project in Rawalpindi?</h2>
          <p className="city-section__desc" style={{ maxWidth: "600px", margin: "0 auto 30px" }}>
            Book an on-site consultation at your Rawalpindi premises or visit our Islamabad office.
          </p>
          <div className="city-cta-bar" style={{ justifyContent: "center" }}>
            <a
              href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20am%20in%20Rawalpindi%20and%20need%20software%20built."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp Us (+92 302 946 2542)
            </a>
            <Link href="/contact/" className="btn btn--primary" style={{ padding: "14px 28px", borderRadius: "12px" }}>
              Schedule On-Site Meeting →
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="city-sticky-bar">
        <a
          href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20am%20in%20Rawalpindi%20and%20need%20software%20built."
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
