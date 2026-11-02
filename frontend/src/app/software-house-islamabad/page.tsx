import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Software House in Islamabad | DEVSYNX",
  description: "Software house in Islamabad: custom web apps, mobile apps, ERP and AI automation for businesses in Islamabad and Rawalpindi. Visit our office or WhatsApp.",
  path: "/software-house-islamabad/",
  keywords: [
    "software house in islamabad",
    "software companies in islamabad",
    "best software house in islamabad",
    "it companies in islamabad",
    "top 10 software houses in islamabad",
    "software house rawalpindi islamabad",
  ],
});

export default function SoftwareHouseIslamabadPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Pakistan", path: "/pakistan/" },
    { name: "Software House Islamabad", path: "/software-house-islamabad/" },
  ]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://devsynx.com/#organization",
    name: "DEVSYNX Private Limited",
    url: "https://devsynx.com/software-house-islamabad/",
    logo: "https://devsynx.com/icon.png",
    image: "https://devsynx.com/icon.png",
    description: "DEVSYNX is a premier software house in Islamabad building custom web apps, mobile apps, ERP systems, and AI automation.",
    telephone: "+923029462542",
    email: "info@devsynx.com",
    priceRange: "PKR 80,000 - 2,500,000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "33.6844",
      longitude: "73.0479",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/devsynx-offial",
      "https://www.instagram.com/devsynx.official",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is DEVSYNX located in Islamabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DEVSYNX Private Limited is based in Islamabad, serving clients across Blue Area, F-sectors, I-sectors, and DHA. You can visit us during business hours (Monday to Saturday, 9 AM to 7 PM). Please call or WhatsApp +92 302 946 2542 before visiting so the relevant tech lead is available.",
        },
      },
      {
        "@type": "Question",
        name: "What does a software house in Islamabad do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A software house designs, engineers, and maintains custom digital products: Next.js websites, mobile apps (Flutter and React Native), ERP and inventory systems, and AI workflow automation. At DEVSYNX, our in-house engineering team handles everything from UX design to cloud deployment and ongoing maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to hire a software house in Islamabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing depends on project scope. A high-converting business website typically ranges from PKR 80,000 to PKR 250,000; a custom web app or mobile app MVP starts from PKR 350,000 to PKR 1,200,000; and enterprise ERP setup ranges from PKR 500,000+. We provide fixed-price proposals with full source code ownership.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer internships for fresh graduates in Islamabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. DEVSYNX regularly recruits engineering interns from top universities in Islamabad and Rawalpindi (FAST, NUST, COMSATS, GIKI). We post openings on our LinkedIn page. For job applications, please email your resume to info@devsynx.com with 'Internship' or 'Career' in the subject line.",
        },
      },
      {
        "@type": "Question",
        name: "Does DEVSYNX work with businesses in Rawalpindi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Rawalpindi is part of our daily service area. We regularly meet clients in Saddar, Bahria Town, DHA, and Satellite Town. Day-to-day sprint communication happens via WhatsApp and Google Meet, with on-site milestone reviews.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="city-hero">
        <div className="container">
          <div className="city-badge">
            <span className="city-badge__dot"></span>
            Islamabad Headquarters · Serving Twin Cities &amp; Global Export
          </div>

          <h1 className="city-title">
            Software House in <span>Islamabad</span> Building Custom Software &amp; AI
          </h1>

          {/* Direct Answer Box for AI Overviews & Featured Snippets */}
          <div className="direct-answer-box">
            <div className="direct-answer-box__label">
              <span>⚡ Quick Answer</span>
            </div>
            <p className="direct-answer-box__text">
              <strong>DEVSYNX</strong> is a full-service software house in Islamabad. We engineer custom web applications, cross-platform mobile apps, ERP and HR systems, and AI automation for businesses across Islamabad and Rawalpindi. Founded by senior engineers, we deliver 100% in-house with guaranteed source code ownership. Visit our office in Islamabad or WhatsApp us directly at +92 302 946 2542.
            </p>
          </div>

          <div className="city-cta-bar">
            <a
              href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20am%20in%20Islamabad%20and%20need%20software%20built."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp Us (+92 302 946 2542)
            </a>
            <a href="tel:+923029462542" className="btn-phone">
              📞 Call Islamabad Office
            </a>
            <Link href="/contact/" className="btn btn--secondary" style={{ padding: "14px 24px", borderRadius: "12px" }}>
              Book an In-Person Meeting →
            </Link>
          </div>

          {/* Proof Stats Ribbon */}
          <div className="city-stats">
            <div className="city-stat-item">
              <span className="city-stat-number">300+</span>
              <span className="city-stat-label">Projects Shipped</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">45,000+</span>
              <span className="city-stat-label">Live App Users</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">100%</span>
              <span className="city-stat-label">In-House Engineers</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">30 Days</span>
              <span className="city-stat-label">MVP Launch Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Core Capabilities</span>
            <h2 className="city-section__title">Software Engineering Services in Islamabad</h2>
            <p className="city-section__desc">
              We do not outsource or cut corners. Every product is built by dedicated engineers using modern cloud, mobile, and AI architectures.
            </p>
          </div>

          <div className="city-grid">
            <div className="city-card">
              <div className="city-card__icon">💻</div>
              <h3 className="city-card__title">Custom Web Applications</h3>
              <p className="city-card__text">
                High-performance web apps built in Next.js, React, and Node.js. Sub-second load speeds, modern UI/UX, and robust relational database schemas.
              </p>
              <Link href="/web-development-islamabad/" className="city-card__link">
                Web Development Islamabad →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">📱</div>
              <h3 className="city-card__title">Mobile App Development</h3>
              <p className="city-card__text">
                Native-grade iOS and Android apps using Flutter and React Native. Clean state management, offline sync, push notifications, and App Store approval.
              </p>
              <Link href="/services/mobile-app-development/" className="city-card__link">
                Mobile App Services →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🤖</div>
              <h3 className="city-card__title">AI Automation &amp; Agents</h3>
              <p className="city-card__text">
                Autonomous workflow agents, WhatsApp Business API bots, and LLM integrations that automate customer inquiries and business operations.
              </p>
              <Link href="/services/ai-automation/" className="city-card__link">
                AI Automation Services →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🏢</div>
              <h3 className="city-card__title">ERP &amp; Inventory Systems</h3>
              <p className="city-card__text">
                Custom ERP and Odoo implementations for Pakistani SMEs, manufacturers, and retailers. Unified stock, invoicing, accounts, and FBR-compliant POS.
              </p>
              <Link href="/services/custom-web-development/" className="city-card__link">
                ERP Solutions →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">📈</div>
              <h3 className="city-card__title">Local &amp; Map Pack SEO</h3>
              <p className="city-card__text">
                Dominating Google Maps 3-pack rankings across Islamabad and Rawalpindi. Technical SEO, schema markup, and high-DA backlink strategies.
              </p>
              <Link href="/seo-services-islamabad/" className="city-card__link">
                SEO Services Islamabad →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🎯</div>
              <h3 className="city-card__title">Digital Marketing &amp; Ads</h3>
              <p className="city-card__text">
                Meta, TikTok, and Google Ads managed with server-side CAPI tracking. Built and run directly by developers to measure every rupee to real sales.
              </p>
              <Link href="/digital-marketing-agency-islamabad/" className="city-card__link">
                Digital Marketing Islamabad →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shipped Work Showcase */}
      <section className="city-section">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Verified Results</span>
            <h2 className="city-section__title">Real Software Shipped by Our Islamabad Team</h2>
            <p className="city-section__desc">
              We judge software houses by live systems, not concept slides. Explore real platforms engineered by DEVSYNX:
            </p>
          </div>

          <div className="city-grid">
            <div className="city-card">
              <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase" }}>E-Commerce Launch</span>
              <h3 className="city-card__title">Silayi Pret</h3>
              <p className="city-card__text">
                Built an enterprise Shopify architecture with headless landing elements handling 4,200+ orders during flash festive launches with 99.99% uptime.
              </p>
              <Link href="/clients/silayi-pret/" className="city-card__link">View Case Study →</Link>
            </div>

            <div className="city-card">
              <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase" }}>Export Portal</span>
              <h3 className="city-card__title">NW Canvas Industry</h3>
              <p className="city-card__text">
                Engineered an international export catalog and dynamic RFQ system, increasing wholesale export inquiries by 210% from North American buyers.
              </p>
              <Link href="/clients/nw-canvas/" className="city-card__link">View Case Study →</Link>
            </div>

            <div className="city-card">
              <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase" }}>High-Scale Mobile App</span>
              <h3 className="city-card__title">ZeParty Live</h3>
              <p className="city-card__text">
                Engineered real-time audio rooms and live interactive microtransactions supporting 45,000+ simultaneous listeners with sub-100ms latency.
              </p>
              <Link href="/clients/zeparty/" className="city-card__link">View Case Study →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Point Checklist */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Buyer&apos;s Guide</span>
            <h2 className="city-section__title">How to Choose the Best Software House in Islamabad</h2>
            <p className="city-section__desc">
              Islamabad has hundreds of development shops. Use this 6-point checklist before signing any contract:
            </p>
          </div>

          <div className="city-grid">
            <div className="city-card">
              <h3 className="city-card__title">1. Test Live Production Code</h3>
              <p className="city-card__text">
                Do not accept static mockup images. Demand URLs to live web apps and links to Google Play and App Store apps currently running in production.
              </p>
            </div>
            <div className="city-card">
              <h3 className="city-card__title">2. 100% Source Code Ownership</h3>
              <p className="city-card__text">
                Ensure your contract states that you own all intellectual property, Git repositories, and database schemas upon milestone completion with zero vendor lock-in.
              </p>
            </div>
            <div className="city-card">
              <h3 className="city-card__title">3. Fixed Scope &amp; Milestones</h3>
              <p className="city-card__text">
                Never pay 100% upfront. Work with teams that split projects into structured 2-week sprints with verifiable demo builds before milestone payments.
              </p>
            </div>
            <div className="city-card">
              <h3 className="city-card__title">4. Meet the Senior Engineers</h3>
              <p className="city-card__text">
                Confirm whether senior full-stack architects are actually writing your code, or if your project is being handed down to junior trainees.
              </p>
            </div>
            <div className="city-card">
              <h3 className="city-card__title">5. Post-Launch Warranty (SLA)</h3>
              <p className="city-card__text">
                A reputable software company backs their code with at least 30 days of complimentary bug fixes and production monitoring post-deployment.
              </p>
            </div>
            <div className="city-card">
              <h3 className="city-card__title">6. SECP Registered Entity</h3>
              <p className="city-card__text">
                Verify legal corporate status. DEVSYNX is a registered entity: <strong>DEVSYNX Private Limited</strong>, providing transparent corporate billing and tax compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Table */}
      <section className="city-section">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Clear Estimates</span>
            <h2 className="city-section__title">Software Development Prices in Islamabad</h2>
            <p className="city-section__desc">
              Every project receives a binding, fixed-price proposal in PKR with zero hidden costs.
            </p>
          </div>

          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Project Type</th>
                  <th>Typical Timeline</th>
                  <th>Price Range (PKR)</th>
                  <th>What&apos;s Included</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Business Website</strong></td>
                  <td>2 – 3 Weeks</td>
                  <td><span className="price-tag">PKR 80,000 – 250,000</span></td>
                  <td>Next.js/WordPress, custom UI, technical SEO, mobile responsive, domain &amp; SSL</td>
                </tr>
                <tr>
                  <td><strong>Custom Web App / MVP</strong></td>
                  <td>4 – 8 Weeks</td>
                  <td><span className="price-tag">PKR 350,000 – 1,200,000</span></td>
                  <td>React/Next.js frontend, Node.js API, PostgreSQL/MongoDB, auth, payments, role access</td>
                </tr>
                <tr>
                  <td><strong>Mobile App (iOS &amp; Android)</strong></td>
                  <td>6 – 12 Weeks</td>
                  <td><span className="price-tag">PKR 450,000 – 1,500,000</span></td>
                  <td>Flutter single-codebase app, push notifications, offline cache, App Store submission</td>
                </tr>
                <tr>
                  <td><strong>ERP &amp; Odoo Implementation</strong></td>
                  <td>6 – 16 Weeks</td>
                  <td><span className="price-tag">PKR 500,000 – 2,500,000</span></td>
                  <td>Inventory, accounting, sales, HR modules, data migration, staff training &amp; FBR POS</td>
                </tr>
                <tr>
                  <td><strong>Monthly Maintenance &amp; SLA</strong></td>
                  <td>Ongoing</td>
                  <td><span className="price-tag">From PKR 60,000 / mo</span></td>
                  <td>Server monitoring, security patches, bug fixes, automated backups, feature tweaks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Islamabad & Rawalpindi Service Areas */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Local Coverage</span>
            <h2 className="city-section__title">Areas We Serve Across Islamabad &amp; Rawalpindi</h2>
            <p className="city-section__desc">
              We hold in-person kickoff meetings at your office or ours, followed by weekly demo reviews:
            </p>
            <div className="area-tags" style={{ justifyContent: "center" }}>
              <span className="area-tag">Blue Area</span>
              <span className="area-tag">F-6 &amp; F-7 Markaz</span>
              <span className="area-tag">F-8 &amp; F-10</span>
              <span className="area-tag">F-11 &amp; E-11</span>
              <span className="area-tag">I-8 &amp; I-9 Industrial</span>
              <span className="area-tag">G-8 &amp; G-9</span>
              <span className="area-tag">Gulberg Greens</span>
              <span className="area-tag">DHA Islamabad (Phases 1-5)</span>
              <span className="area-tag">Bahria Town (Phases 1-8)</span>
              <span className="area-tag">Saddar Rawalpindi</span>
              <span className="area-tag">6th Road &amp; Satellite Town</span>
            </div>
            <div style={{ marginTop: "24px" }}>
              <Link href="/software-house-rawalpindi/" style={{ color: "#38bdf8", fontWeight: 600 }}>
                Looking specifically for Rawalpindi? See our Rawalpindi Software House page →
              </Link>
            </div>
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
              <h3 className="city-faq-question">Where is DEVSYNX located in Islamabad?</h3>
              <p className="city-faq-answer">
                DEVSYNX Private Limited is based in Islamabad, serving businesses across Blue Area, F-sectors, I-sectors, and DHA. You can visit us during business hours (Monday to Saturday, 9 AM to 7 PM). Please WhatsApp +92 302 946 2542 first so the relevant project architect is on-site to review your requirements.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">What does a software house in Islamabad do?</h3>
              <p className="city-faq-answer">
                A software house designs, engineers, and maintains custom digital products: Next.js websites, mobile apps (Flutter and React Native), ERP and inventory systems, and AI workflow automation. At DEVSYNX, our in-house engineering team handles everything from UX design to cloud deployment and ongoing maintenance.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">How much does it cost to hire a software house in Islamabad?</h3>
              <p className="city-faq-answer">
                Pricing depends on project scope. A business website typically ranges from PKR 80,000 to PKR 250,000; a custom web app or mobile app MVP starts from PKR 350,000 to PKR 1,200,000; and enterprise ERP setup ranges from PKR 500,000+. We provide fixed-price proposals with full source code ownership.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Do you offer internships for fresh graduates in Islamabad?</h3>
              <p className="city-faq-answer">
                Yes. DEVSYNX regularly recruits engineering interns from top universities in Islamabad and Rawalpindi (FAST, NUST, COMSATS, GIKI). We post openings on our LinkedIn page. For job applications, please email your resume to info@devsynx.com with &quot;Internship&quot; in the subject line.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Does DEVSYNX work with businesses in Rawalpindi?</h3>
              <p className="city-faq-answer">
                Yes. Rawalpindi is part of our daily service area. We regularly meet clients in Saddar, Bahria Town, DHA, and Satellite Town. Day-to-day sprint communication happens via WhatsApp and Google Meet, with on-site milestone reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action Section */}
      <section className="city-section city-section--alt" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="city-section__title">Ready to Build Your Software in Islamabad?</h2>
          <p className="city-section__desc" style={{ maxWidth: "600px", margin: "0 auto 30px" }}>
            Speak directly with senior software architects. Get a clear scope, timeline, and fixed-price quote within 48 hours.
          </p>
          <div className="city-cta-bar" style={{ justifyContent: "center" }}>
            <a
              href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20am%20in%20Islamabad%20and%20need%20software%20built."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp Us (+92 302 946 2542)
            </a>
            <Link href="/contact/" className="btn btn--primary" style={{ padding: "14px 28px", borderRadius: "12px" }}>
              Request In-Person Meeting →
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Contact Bar */}
      <div className="city-sticky-bar">
        <a
          href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20am%20in%20Islamabad%20and%20need%20software%20built."
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
