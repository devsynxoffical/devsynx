"use client";

import type { CSSProperties } from "react";
import "@/styles/team.css";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { teamMembers } from "@/data/team";

export default function TeamPage() {
  const leadership = teamMembers.filter((m) => m.isLeadership);
  const specialists = teamMembers.filter((m) => !m.isLeadership);

  return (
    <>
      <PageHero
        label="Our People"
        title={
          <>
            The team behind <span className="text-gradient">Devsynx</span>
          </>
        }
        subtitle="Founders and specialists working together to design, build, and deliver software and AI solutions clients rely on."
      />

      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">Leadership</span>
              <h2 className="section__title">
                Founders &amp; <span className="text-gradient">Vision</span>
              </h2>
              <p className="team-leadership-note">
                Syed Hassan and Sana founded Devsynx with a clear goal — make
                world-class engineering accessible, accountable, and outcome-driven.
              </p>
            </div>
          </AnimatedSection>
          <div className="team-grid" style={{ marginTop: "2.5rem" }}>
            {leadership.map((member, index) => (
              <AnimatedSection key={member.id} animation="fade-up" delay={index * 80}>
                <article
                  className="team-card team-card--leadership"
                  style={{ "--team-accent": member.accent } as CSSProperties}
                >
                  <div className="team-card__avatar" aria-hidden="true">
                    {member.initials}
                  </div>
                  <h3 className="team-card__name">{member.name}</h3>
                  <span className="team-card__role">{member.role}</span>
                  <p className="team-card__bio">{member.bio}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">Specialists</span>
              <h2 className="section__title">
                Domain <span className="text-gradient">Experts</span>
              </h2>
              <p className="section__subtitle">
                Specialists who bring deep industry knowledge to every engagement.
              </p>
            </div>
          </AnimatedSection>
          <div className="team-grid" style={{ marginTop: "2rem" }}>
            {specialists.map((member, index) => (
              <AnimatedSection key={member.id} animation="fade-up" delay={index * 80}>
                <article
                  className="team-card"
                  style={{ "--team-accent": member.accent } as CSSProperties}
                >
                  <div className="team-card__avatar" aria-hidden="true">
                    {member.initials}
                  </div>
                  <h3 className="team-card__name">{member.name}</h3>
                  <span className="team-card__role">{member.role}</span>
                  <p className="team-card__bio">{member.bio}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        badge="Work with us"
        title="Want to join forces with our team?"
        subtitle="Whether you need a product built or a specialist on your project — let's talk about how Devsynx can help."
        primaryLabel="Start a project"
        secondaryLabel="View our work"
        secondaryHref="/clients/"
      />
    </>
  );
}
