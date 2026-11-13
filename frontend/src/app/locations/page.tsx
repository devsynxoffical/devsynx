import type { Metadata } from "next";
import Link from "next/link";
import { localPages } from "@/seo/localPages";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Locations We Serve: Pakistan, Gulf, US, UK & More",
  description:
    "DEVSYNX serves clients from Islamabad–Rawalpindi across Pakistan, the UAE, Saudi Arabia, Qatar, the US, Canada, the UK, Europe and Australia. Find your city's page.",
  path: "/locations/",
});

type Group = { title: string; intro: string; match: (path: string) => boolean; extra?: { href: string; label: string }[] };

const groups: Group[] = [
  {
    title: "Pakistan",
    intro: "Headquartered in Islamabad, with in-person meetings in the twin cities and remote delivery everywhere else.",
    match: (p) => /software-house-|seo-services-|digital-marketing-agency-|web-development-(lahore|karachi)|app-development-company-pakistan/.test(p),
    extra: [
      { href: "/software-house-islamabad/", label: "Software House Islamabad" },
      { href: "/software-house-rawalpindi/", label: "Software House Rawalpindi" },
      { href: "/web-development-islamabad/", label: "Web Development Islamabad" },
      { href: "/seo-services-islamabad/", label: "SEO Services Islamabad" },
      { href: "/digital-marketing-agency-islamabad/", label: "Digital Marketing Islamabad" },
    ],
  },
  {
    title: "Middle East",
    intro: "Full working-hour overlap with the Gulf, bilingual Arabic and English products.",
    match: (p) => /dubai|riyadh|doha|qatar|oman|muscat|kuwait|bahrain|jeddah|abu-dhabi|sharjah/.test(p),
    extra: [{ href: "/uae/", label: "Software Development UAE" }],
  },
  {
    title: "North America",
    intro: "Live overlap every US and Canadian morning, fixed USD and CAD pricing.",
    match: (p) => /new-york|chicago|dallas|houston|austin|miami|toronto|calgary|vancouver/.test(p),
    extra: [
      { href: "/usa/", label: "Software Development USA" },
      { href: "/canada/", label: "Software Development Canada" },
    ],
  },
  {
    title: "UK, Europe & Australia",
    intro: "4–6 hours of overlap with UK and European business days; Sydney afternoon overlap.",
    match: (p) => /london|manchester|sydney|melbourne/.test(p),
    extra: [
      { href: "/uk/", label: "Software Development UK" },
      { href: "/germany/", label: "Software Development Germany" },
      { href: "/australia/", label: "Software Development Australia" },
    ],
  },
];

export default function LocationsPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
  ]);
  const pages = localPages.filter((p) => p.group !== "global");
  return (
    <div className="city-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="city-hero">
        <div className="container">
          <h1 className="city-title">
            Locations We <span>Serve</span>
          </h1>
          <p className="city-section__desc" style={{ textAlign: "left", maxWidth: "760px" }}>
            DEVSYNX is based in Islamabad–Rawalpindi, Pakistan, and builds software, apps and AI automation for clients across
            Pakistan and in more than 15 countries. Choose your city or country to see local details, pricing and
            relevant case studies.
          </p>
        </div>
      </section>
      {groups.map((g, i) => {
        const items = [
          ...(g.extra ?? []),
          ...pages.filter((p) => g.match(p.path)).map((p) => ({ href: p.path, label: p.navLabel })),
        ].filter((v, idx, arr) => arr.findIndex((x) => x.href === v.href) === idx);
        return (
          <section key={g.title} className={`city-section${i % 2 ? "" : " city-section--alt"}`}>
            <div className="container">
              <div className="city-section__header">
                <h2 className="city-section__title">{g.title}</h2>
                <p className="city-section__desc">{g.intro}</p>
              </div>
              <div className="area-tags" style={{ justifyContent: "center" }}>
                {items.map((it) => (
                  <Link key={it.href} href={it.href} className="area-tag" style={{ textDecoration: "none" }}>
                    {it.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
