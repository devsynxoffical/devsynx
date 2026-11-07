import type { Metadata } from "next";
import Link from "next/link";
import { toolPages } from "@/seo/toolPages";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Free Software & Website Cost Calculators",
  description: "Free calculators to estimate app and website development cost, hours and timeline by team location. No sign-up required.",
  path: "/tools/",
});

export default function ToolsHubPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Free Tools", path: "/tools/" },
  ]);
  return (
    <div className="city-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="city-hero">
        <div className="container">
          <h1 className="city-title">
            Free <span>Cost Calculators</span>
          </h1>
          <p className="city-section__desc" style={{ textAlign: "left", maxWidth: "720px" }}>
            Estimate what your app or website will cost before you talk to anyone. Each calculator shows hours,
            timeline and cost ranges for teams in different regions.
          </p>
        </div>
      </section>
      <section className="city-section city-section--alt">
        <div className="container">
          <div className="city-grid">
            {toolPages.map((t) => (
              <div className="city-card" key={t.slug}>
                <h2 className="city-card__title">{t.h1}</h2>
                <p className="city-card__text">{t.metaDescription}</p>
                <Link href={t.path} className="city-card__link">
                  Open calculator →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
