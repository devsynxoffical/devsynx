import { ReactNode } from "react";

interface PageHeroProps {
  label?: string;
  title: ReactNode;
  subtitle?: string;
}

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg">
        <div className="page-hero__shape page-hero__shape--1"></div>
        <div className="page-hero__shape page-hero__shape--2"></div>
      </div>
      <div className="container">
        {label && <span className="page-hero__label">{label}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
