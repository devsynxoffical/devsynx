"use client";

import Link from "next/link";
import { countryTargets, serviceTargets } from "@/seo/landingPages";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";

export function GlobalHubContent() {
  const links = countryTargets.flatMap((country) =>
    serviceTargets.map((service) => ({ country, service }))
  );

  return (
    <>
      <PageHero
        label="Global"
        title={
          <>
            Devsynx services by <span className="text-gradient">country &amp; use case</span>
          </>
        }
        subtitle="Browse software development, web development, and AI automation services in major global markets."
      />

      <section className="section">
        <div className="container">
          <div className="services-grid services-grid--full">
            {links.map(({ country, service }, index) => (
              <AnimatedSection
                key={`${country.slug}-${service.slug}`}
                animation="fade-up"
                delay={(index % 4) * 50}
              >
                <Link
                  href={`/global/${country.slug}/${service.slug}/`}
                  className="service-card service-card--detailed"
                >
                  <div className="service-card__gradient-bar" style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))" }}></div>
                  <div className="service-card__header">
                    <div className="service-card__number">{String(index + 1).padStart(2, "0")}</div>
                    <div className="service-card__arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                    </div>
                  </div>
                  <h2 className="service-card__title">
                    {service.name} in {country.name}
                  </h2>
                  <p className="service-card__desc">{service.shortDescription}</p>
                  <span className="service-card__link">View page</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Serving teams worldwide"
        subtitle="Get a dedicated delivery team aligned to your timezone and business goals."
        primaryLabel="Start a project"
      />
    </>
  );
}
