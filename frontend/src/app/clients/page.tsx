"use client";

import "@/styles/clients.css";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { clientProjects } from "@/data/clients";

export default function ClientsPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title={
          <>
            Client projects we&apos;re <span className="text-gradient">proud of</span>
          </>
        }
        subtitle="A selection of software, AI, and automation projects delivered for startups and businesses across healthcare, SaaS, retail, and more."
      />

      <section className="section section--alt">
        <div className="container">
          <div className="clients-stats">
            {[
              { value: "50+", label: "Clients served" },
              { value: "100+", label: "Projects delivered" },
              { value: "15+", label: "Countries" },
              { value: "98%", label: "On-time delivery" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} animation="fade-up" delay={index * 60}>
                <div className="clients-stat">
                  <span className="clients-stat__number">{stat.value}</span>
                  <span className="clients-stat__label">{stat.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">Portfolio</span>
              <h2 className="section__title">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="section__subtitle">
                Selected work across industries — healthcare, SaaS, AI, e-commerce, and cloud.
              </p>
            </div>
          </AnimatedSection>

          <div className="clients-grid" style={{ marginTop: "2rem" }}>
            {clientProjects.map((project, index) => (
              <AnimatedSection key={project.id} animation="fade-up" delay={(index % 4) * 70}>
                <article className="client-card">
                  <div
                    className="client-card__bar"
                    style={{ background: project.gradient }}
                  />
                  <div className="client-card__body">
                    <div className="client-card__meta">
                      <span className="client-card__category">{project.category}</span>
                      <span className="client-card__region">{project.region}</span>
                    </div>
                    <h3 className="client-card__title">{project.projectTitle}</h3>
                    <p className="client-card__client">{project.clientName}</p>
                    <p className="client-card__desc">{project.description}</p>
                    <div className="client-card__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="client-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        badge="Your project next"
        title="Ready to become our next success story?"
        subtitle="Tell us about your goals and we'll map a practical delivery plan — from MVP to enterprise scale."
        primaryLabel="Start a project"
        secondaryLabel="Meet the team"
        secondaryHref="/team/"
      />
    </>
  );
}
