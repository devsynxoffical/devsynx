import type { Metadata } from "next";
import "@/styles/contact.css";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { CareerForm } from "@/components/CareerForm";
import { CAREER_ROLES } from "@/seo/careers";
import { FAQ } from "@/components/FAQ";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata, buildWebPageSchema } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers at DEVSYNX: Jobs & Internships",
  description:
    "Apply to DEVSYNX, a software house in Rawalpindi–Islamabad. Roles for developers, designers, AI engineers, SEO and marketing specialists, sales and interns.",
  path: "/careers/",
  keywords: ["devsynx careers", "software house jobs rawalpindi", "software house jobs islamabad", "developer jobs islamabad", "internship software house islamabad"],
});

const faqs = [
  { question: "Do you have open positions right now?", answer: "We hire when projects need new people, so openings change often. Apply for the role that fits you; we keep every application and contact you when a matching position opens." },
  { question: "Where is the office?", answer: "Our office is on Old Airport Road, Chaklala Cantt., Rawalpindi, close to Islamabad. Some roles can be remote; mention your preference in your application." },
  { question: "Do you offer internships?", answer: "Yes. Students and fresh graduates can apply for an internship in development, design, SEO or marketing. Choose \"Internship\" in the form and tell us what you want to learn." },
  { question: "What does the hiring process look like?", answer: "We review your application and CV, then invite shortlisted candidates to a short call, followed by a practical round related to the role and a final interview." },
  { question: "Can I apply without a CV?", answer: "Yes. Share a LinkedIn, GitHub or portfolio link instead and tell us about your work in the form." },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers/" },
]);
const pageSchema = buildWebPageSchema({
  title: "Careers at DEVSYNX: Jobs & Internships",
  description: "Apply for developer, designer, AI, SEO, marketing, sales and internship roles at DEVSYNX in Rawalpindi–Islamabad.",
  path: "/careers/",
});
const faqSchema = buildFaqSchema(faqs);

const perks = [
  { icon: "🚀", title: "Real client projects", text: "Work on software, apps, AI and SEO projects for clients in Pakistan, the Gulf, the US and Europe." },
  { icon: "🧠", title: "Modern stack", text: "Next.js, React, Node.js, Flutter, Python, cloud services and AI tools in everyday work." },
  { icon: "📈", title: "Learn and grow", text: "Code reviews, senior guidance and room to take on more responsibility as you prove yourself." },
  { icon: "🤝", title: "Small, close team", text: "Your work is visible and your ideas reach the people who make decisions." },
];

export default function CareersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        label="Careers"
        title={
          <>
            Build Your Career at <span className="text-gradient">DEVSYNX</span>
          </>
        }
        subtitle="Join a growing software house in Rawalpindi–Islamabad building web apps, mobile apps, AI automation and SEO for clients worldwide."
      />

      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header" style={{ marginBottom: "40px" }}>
              <h2 className="section__title">Why Work With <span className="text-gradient">Us</span></h2>
            </div>
          </AnimatedSection>
          <div className="city-grid">
            {perks.map((p) => (
              <div className="city-card" key={p.title}>
                <div className="city-card__icon" aria-hidden="true">{p.icon}</div>
                <h3 className="city-card__title">{p.title}</h3>
                <p className="city-card__text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="city-section city-section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header" style={{ marginBottom: "24px" }}>
              <h2 className="section__title">Roles We <span className="text-gradient">Hire For</span></h2>
              <p className="section__subtitle">
                Openings change as projects grow. Pick the role that fits you best; we keep every application and
                reach out when a matching position opens.
              </p>
            </div>
          </AnimatedSection>
          <div className="area-tags" style={{ justifyContent: "center" }}>
            {CAREER_ROLES.filter((r) => r !== "Other").map((r) => (
              <span className="area-tag" key={r}>{r}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="apply">
        <div className="container">
          <div className="contact-layout">
            <AnimatedSection animation="fade-right" className="contact-form-wrapper">
              <div className="contact-form__header">
                <h2 className="contact-form__title">Apply Now</h2>
                <p className="contact-form__subtitle">
                  Fill in the form and attach your CV. It takes about two minutes.
                </p>
              </div>
              <CareerForm />
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="contact-info">
                <div className="contact-info__card">
                  <div className="contact-info__card-badge">How hiring works</div>
                  <h3 className="contact-info__title">Our Process</h3>
                  <ol className="contact-info__text" style={{ paddingLeft: "20px", display: "grid", gap: "10px", listStyle: "decimal" }}>
                    <li>Send your application and CV.</li>
                    <li>We review it and shortlist candidates for each role.</li>
                    <li>A short introductory call.</li>
                    <li>A practical round related to the role.</li>
                    <li>Final interview and offer.</li>
                  </ol>
                  <p className="contact-info__text" style={{ marginTop: "16px" }}>
                    Office: Old Airport Road, Chaklala Cantt., Rawalpindi. Questions? Email{" "}
                    <a href="mailto:info@devsynx.com" style={{ textDecoration: "underline" }}>info@devsynx.com</a>.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="city-section city-section--alt">
        <div className="container">
          <FAQ items={faqs} title="Careers FAQ" />
        </div>
      </section>
    </>
  );
}
