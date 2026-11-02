import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Marketing Agency Islamabad: Ads & SEO | DEVSYNX",
  description: "Digital marketing agency in Islamabad and Rawalpindi: Meta, TikTok and Google ads, SEO and sales tracking run by engineers. See packages. WhatsApp us.",
  path: "/digital-marketing-agency-islamabad/",
  keywords: [
    "digital marketing agency islamabad",
    "marketing agency in islamabad",
    "digital marketing agency rawalpindi",
    "social media marketing agency islamabad",
    "meta ads agency islamabad",
    "performance marketing agency pakistan",
  ],
});

export default function DigitalMarketingAgencyIslamabadPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Pakistan", path: "/pakistan/" },
    { name: "Digital Marketing Agency Islamabad", path: "/digital-marketing-agency-islamabad/" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing",
    name: "DEVSYNX - Digital Marketing Agency in Islamabad",
    description: "Performance marketing, Meta ads, TikTok ads, Google Search ads, SEO, and tracking for businesses in Islamabad and Rawalpindi.",
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
        name: "What does a digital marketing agency do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A digital marketing agency plans, executes, and measures online advertising across Meta (Facebook & Instagram), TikTok, and Google, paired with SEO and social media. At DEVSYNX, our developers also build high-converting landing pages and server-side tracking (CAPI) so every marketing rupee is tracked to an actual lead or confirmed sale.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a digital marketing agency in Islamabad charge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Management retainers start from PKR 50,000 to PKR 85,000 per month for local twin-city businesses, and PKR 120,000+ for high-growth e-commerce brands. Ad budgets are paid directly to Meta and Google with full client account ownership. We recommend a starting monthly ad spend of PKR 75,000+ to generate actionable statistical data.",
        },
      },
      {
        "@type": "Question",
        name: "Which ad platforms work best for businesses in Islamabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For consumer products, fashion, beauty, and retail brands, Meta and TikTok deliver the highest transaction volume, usually closed via WhatsApp Business. For service businesses, clinics, schools, and B2B exporters, Google Search and Google Maps capture higher-intent buyers actively searching for solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with businesses in Rawalpindi and Bahria Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We manage digital marketing campaigns for businesses across Rawalpindi, including Saddar, Bahria Town, DHA, and Satellite Town. We configure hyper-local geographic radius targeting to show your ads exclusively to nearby potential customers.",
        },
      },
      {
        "@type": "Question",
        name: "Do you produce the ad creatives, reels, and video ads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We script, design, and produce high-converting static creatives, UGC-style product videos, and reels in-house. You approve all creative assets before they go live, and we test new creative batches every 2 weeks to eliminate ad fatigue.",
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
            Performance Marketing · Meta &amp; TikTok Ads · Google Ads · Islamabad
          </div>

          <h1 className="city-title">
            Digital Marketing Agency in <span>Islamabad</span> Backed by Engineers
          </h1>

          <div className="direct-answer-box">
            <div className="direct-answer-box__label">
              <span>⚡ Direct Answer</span>
            </div>
            <p className="direct-answer-box__text">
              <strong>DEVSYNX</strong> is a performance digital marketing agency in Islamabad that runs Meta, TikTok, and Google Ads, SEO, and social media for businesses in Islamabad and Rawalpindi. Because the same team builds your landing pages and server-side tracking, every campaign is measured to real leads and confirmed sales, not empty vanity clicks.
            </p>
          </div>

          <div className="city-cta-bar">
            <a
              href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20want%20to%20run%20ads%20for%20my%20business%20in%20Islamabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp Us (+92 302 946 2542)
            </a>
            <a href="tel:+923029462542" className="btn-phone">
              📞 Call Marketing Team
            </a>
            <Link href="/contact/" className="btn btn--secondary" style={{ padding: "14px 24px", borderRadius: "12px" }}>
              Request Growth Strategy Call →
            </Link>
          </div>

          <div className="city-stats">
            <div className="city-stat-item">
              <span className="city-stat-number">4.8x</span>
              <span className="city-stat-label">Average Campaign ROAS</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">4,200+</span>
              <span className="city-stat-label">Launch Orders Handled</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">100%</span>
              <span className="city-stat-label">Client Ad Account Ownership</span>
            </div>
            <div className="city-stat-item">
              <span className="city-stat-number">CAPI</span>
              <span className="city-stat-label">Server-Side Tracking Setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Campaign Performance */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Proven Growth</span>
            <h2 className="city-section__title">Verified Results Shipped for Our Brands</h2>
            <p className="city-section__desc">
              We focus strictly on customer acquisition cost (CAC), return on ad spend (ROAS), and profit margins:
            </p>
          </div>

          <div className="city-grid">
            <div className="city-card">
              <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase" }}>Performance Scaling</span>
              <h3 className="city-card__title">Scale With Ads</h3>
              <p className="city-card__text">
                Generated a sustained <strong>4.8x average ROAS</strong> across agency-managed paid media campaigns using rapid video creative testing and automated retargeting funnels.
              </p>
              <Link href="/clients/scale-with-ads/" className="city-card__link">View Case Study →</Link>
            </div>

            <div className="city-card">
              <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase" }}>D2C E-Commerce Brand</span>
              <h3 className="city-card__title">Luxora Women</h3>
              <p className="city-card__text">
                Achieved a <strong>4.6% store conversion rate</strong> on cold Meta and TikTok traffic with 50% of orders confirmed and up-sold via automated WhatsApp flows.
              </p>
              <Link href="/clients/luxora-women/" className="city-card__link">View Case Study →</Link>
            </div>

            <div className="city-card">
              <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase" }}>Creative Testing Efficiency</span>
              <h3 className="city-card__title">AI Video Production</h3>
              <p className="city-card__text">
                Reduced production costs per tested video ad from <strong>$350 to $35</strong> using structured scripting frameworks and automated video rendering pipelines.
              </p>
              <Link href="/clients/ai-video-production/" className="city-card__link">View Case Study →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Channels We Manage */}
      <section className="city-section">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Paid &amp; Organic Media</span>
            <h2 className="city-section__title">Digital Marketing Services in Islamabad</h2>
            <p className="city-section__desc">
              We manage the entire user journey: from the first impression to the landing page and the final sales conversion.
            </p>
          </div>

          <div className="city-grid">
            <div className="city-card">
              <div className="city-card__icon">📱</div>
              <h3 className="city-card__title">Meta &amp; Instagram Ads</h3>
              <p className="city-card__text">
                Targeted prospecting and dynamic retargeting campaigns built for Pakistani buyers. Optimized for direct purchases, lead forms, and WhatsApp inquiries.
              </p>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🎵</div>
              <h3 className="city-card__title">TikTok Ads &amp; UGC Formats</h3>
              <p className="city-card__text">
                High-engagement short-form video ads tailored for Pakistani TikTok audiences. Rapid testing to identify winning creative hooks at low CPMs.
              </p>
            </div>

            <div className="city-card">
              <div className="city-card__icon">🔍</div>
              <h3 className="city-card__title">Google Search &amp; Maps Ads</h3>
              <p className="city-card__text">
                Capturing high-intent buyers actively searching for your services in Islamabad and Rawalpindi. Zero wasted spend on irrelevant search terms.
              </p>
            </div>

            <div className="city-card">
              <div className="city-card__icon">📈</div>
              <h3 className="city-card__title">Search Engine Optimization (SEO)</h3>
              <p className="city-card__text">
                Dominating organic Google search rankings in the twin cities. Code speed optimization, local citation building, and Google Maps 3-pack dominance.
              </p>
              <Link href="/seo-services-islamabad/" className="city-card__link">
                SEO Services Islamabad →
              </Link>
            </div>

            <div className="city-card">
              <div className="city-card__icon">⚙️</div>
              <h3 className="city-card__title">Server-Side Tracking &amp; CAPI</h3>
              <p className="city-card__text">
                Bypassing iOS ad-blockers with Meta Conversions API (CAPI), Google Analytics 4 server events, and WhatsApp click conversion tagging.
              </p>
            </div>

            <div className="city-card">
              <div className="city-card__icon">💬</div>
              <h3 className="city-card__title">WhatsApp Automated Selling</h3>
              <p className="city-card__text">
                Connecting ads directly into automated WhatsApp Business flows for instant lead qualification, order confirmation, and zero drop-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Table */}
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-section__header">
            <span className="city-section__tag">Transparent Retainers</span>
            <h2 className="city-section__title">Marketing Packages &amp; Budgets</h2>
            <p className="city-section__desc">
              All ad accounts belong 100% to you. We charge a flat management fee with zero percentage markups on ad spend:
            </p>
          </div>

          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Management Fee (PKR)</th>
                  <th>Recommended Ad Spend</th>
                  <th>Deliverables Included</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Local Business Starter</strong></td>
                  <td><span className="price-tag">PKR 50,000 / mo</span></td>
                  <td>PKR 60,000 – 120,000 / mo</td>
                  <td>Meta or Google Ads (1 platform), 6 custom creatives/mo, weekly optimization, WhatsApp tracking</td>
                </tr>
                <tr>
                  <td><strong>Growth Accelerator</strong></td>
                  <td><span className="price-tag">PKR 85,000 / mo</span></td>
                  <td>PKR 120,000 – 300,000 / mo</td>
                  <td>Meta + TikTok or Google, 12 ad creatives + reels/mo, landing page A/B tests, CAPI tracking</td>
                </tr>
                <tr>
                  <td><strong>Scale &amp; E-Commerce</strong></td>
                  <td><span className="price-tag">PKR 140,000 / mo</span></td>
                  <td>PKR 300,000+ / mo</td>
                  <td>Multi-channel media buying (Meta, TikTok, Google), daily optimization, custom CRO funnels, bi-weekly review</td>
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
              <h3 className="city-faq-question">What does a digital marketing agency do?</h3>
              <p className="city-faq-answer">
                A digital marketing agency plans, executes, and measures online advertising across Meta (Facebook &amp; Instagram), TikTok, and Google, paired with SEO and social media. At DEVSYNX, our developers also build high-converting landing pages and server-side tracking (CAPI) so every marketing rupee is tracked to an actual lead or confirmed sale.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">How much does a digital marketing agency in Islamabad charge?</h3>
              <p className="city-faq-answer">
                Management retainers start from PKR 50,000 to PKR 85,000 per month for local twin-city businesses, and PKR 120,000+ for high-growth e-commerce brands. Ad budgets are paid directly to Meta and Google with full client account ownership. We recommend a starting monthly ad spend of PKR 75,000+ to generate actionable statistical data.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Which ad platforms work best for businesses in Islamabad?</h3>
              <p className="city-faq-answer">
                For consumer products, fashion, beauty, and retail brands, Meta and TikTok deliver the highest transaction volume, usually closed via WhatsApp Business. For service businesses, clinics, schools, and B2B exporters, Google Search and Google Maps capture higher-intent buyers actively searching for solutions.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Do you work with businesses in Rawalpindi and Bahria Town?</h3>
              <p className="city-faq-answer">
                Yes. We manage digital marketing campaigns for businesses across Rawalpindi, including Saddar, Bahria Town, DHA, and Satellite Town. We configure hyper-local geographic radius targeting to show your ads exclusively to nearby potential customers.
              </p>
            </div>

            <div className="city-faq-item">
              <h3 className="city-faq-question">Do you produce the ad creatives, reels, and video ads?</h3>
              <p className="city-faq-answer">
                Yes. We script, design, and produce high-converting static creatives, UGC-style product videos, and reels in-house. You approve all creative assets before they go live, and we test new creative batches every 2 weeks to eliminate ad fatigue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="city-section city-section--alt" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="city-section__title">Ready to Scale Your Sales in Islamabad?</h2>
          <p className="city-section__desc" style={{ maxWidth: "600px", margin: "0 auto 30px" }}>
            Book a 30-minute growth strategy session with our performance team to review your current ad accounts and funnel.
          </p>
          <div className="city-cta-bar" style={{ justifyContent: "center" }}>
            <a
              href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20want%20to%20run%20ads%20for%20my%20business%20in%20Islamabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp Growth Call Request
            </a>
            <Link href="/contact/" className="btn btn--primary" style={{ padding: "14px 28px", borderRadius: "12px" }}>
              Book Marketing Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="city-sticky-bar">
        <a
          href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20want%20to%20run%20ads%20for%20my%20business%20in%20Islamabad."
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
