"use client";

import React, { CSSProperties } from "react";
import "@/styles/team.css";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { teamMembers } from "@/data/team";
import Image from "next/image";
import Link from "next/link";

import { buildBreadcrumbSchema, buildWebPageSchema } from "@/seo/metadata";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Team", path: "/team/" },
]);

const pageSchema = buildWebPageSchema({
  title: "Executive Leadership & Engineering Team | Devsynx",
  description: "Meet the executive members, engineers, and specialists at Devsynx led by CEO Syed Hassan Ali Shah.",
  path: "/team/",
});

export default function TeamPage() {
  const executiveMembers = teamMembers.filter((m) => m.isLeadership);
  const specialists = teamMembers.filter((m) => !m.isLeadership);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {/* Hero Banner matching reference Image 2 */}
      <PageHero
        label="Our People"
        title={
          <>
            Meet Our <span className="text-gradient">Team</span>
          </>
        }
        subtitle="The leaders driving innovation, strategy, and growth at Devsynx."
      />

      {/* Executive Members Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header" style={{ marginBottom: "48px" }}>
              <h2 className="section__title" style={{ fontSize: "2.25rem" }}>
                Executive <span className="text-gradient">Members</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="executive-grid--leadership">
            {executiveMembers.map((member, index) => (
              <AnimatedSection key={member.id} animation="fade-up" delay={index * 80}>
                <div className="exec-card" style={{ "--exec-accent": member.accent } as CSSProperties}>
                  <div className="exec-card__avatar-frame">
                    <div className="exec-card__avatar-inner" style={member.avatarBg ? { background: member.avatarBg } : undefined}>
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={130}
                          height={130}
                          className="exec-card__avatar-img"
                          style={{
                            objectPosition: member.objectPosition ?? "center top",
                            transform: member.avatarScale ? `scale(${member.avatarScale})` : undefined,
                          }}
                        />
                      ) : (
                        member.initials
                      )}
                    </div>
                  </div>
                  <h3 className="exec-card__name">{member.name}</h3>
                  <span className="exec-card__role">{member.role}</span>
                  <p className="exec-card__bio">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Specialists Section (rendered only if specialists exist) */}
      {specialists.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <AnimatedSection animation="fade-up">
              <div className="section__header" style={{ marginBottom: "48px" }}>
                <h2 className="section__title" style={{ fontSize: "2.25rem" }}>
                  Domain <span className="text-gradient">Specialists</span>
                </h2>
                <p className="section__subtitle">
                  Engineers, architects, and specialists delivering client excellence worldwide.
                </p>
              </div>
            </AnimatedSection>

            <div className="executive-grid">
              {specialists.map((member, index) => (
                <AnimatedSection key={member.id} animation="fade-up" delay={index * 80}>
                  <div className="exec-card" style={{ "--exec-accent": member.accent } as CSSProperties}>
                    <div className="exec-card__avatar-frame">
                      <div className="exec-card__avatar-inner" style={member.avatarBg ? { background: member.avatarBg } : undefined}>
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={130}
                            height={130}
                            className="exec-card__avatar-img"
                            style={{
                              objectPosition: member.objectPosition ?? "center top",
                              transform: member.avatarScale ? `scale(${member.avatarScale})` : undefined,
                            }}
                          />
                        ) : (
                          member.initials
                        )}
                      </div>
                    </div>
                    <h3 className="exec-card__name">{member.name}</h3>
                    <span className="exec-card__role">{member.role}</span>
                    <p className="exec-card__bio">{member.bio}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join Our Team Banner matching reference Image 2 */}
      <section className="section" style={{ background: "var(--color-bg-alt)", textAlign: "center", borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <h2 className="section__title" style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
              Join Our <span className="text-gradient">Team</span>
            </h2>
            <p className="section__subtitle" style={{ maxWidth: "600px", margin: "0 auto 32px" }}>
              Ready to be part of our innovative team? Explore career opportunities and grow with us.
            </p>
            <Link href="/contact/" className="btn btn--primary btn--lg">
              View Careers &amp; Open Roles
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
