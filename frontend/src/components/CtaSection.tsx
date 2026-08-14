import Link from "next/link";
import { ReactNode } from "react";

interface CtaSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  children?: ReactNode;
}

export function CtaSection({
  badge = "Let's build together",
  title,
  subtitle,
  primaryHref = "/contact/",
  primaryLabel = "Start a project",
  secondaryHref = "/services/",
  secondaryLabel = "Explore services",
  children,
}: CtaSectionProps) {
  return (
    <section className="cta">
      <div className="cta__bg">
        <div className="cta__shape cta__shape--1"></div>
        <div className="cta__shape cta__shape--2"></div>
      </div>
      <div className="container">
        <div className="cta__inner">
          {badge && <div className="cta__badge">{badge}</div>}
          <h2 className="cta__title">{title}</h2>
          <p className="cta__subtitle">{subtitle}</p>
          {children ?? (
            <div className="cta__actions">
              <Link href={primaryHref} className="btn btn--white btn--lg">
                {primaryLabel}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href={secondaryHref} className="btn btn--outline-white btn--lg">
                {secondaryLabel}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
