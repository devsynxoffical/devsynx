/** Canonical base URL — always non-www */
export const BASE_URL = "https://devsynx.com";

/** Core hub pages */
export const priorityHubPaths = [
  "/",
  "/team/",
  "/clients/",
  "/services/",
  "/about/",
  "/contact/",
  "/blog/",
  "/software-house-islamabad/",
  "/software-house-rawalpindi/",
  "/web-development-islamabad/",
  "/seo-services-islamabad/",
  "/digital-marketing-agency-islamabad/",
] as const;

/** High-intent service pages */
export const priorityServiceSlugs = [
  "custom-web-development",
  "mobile-app-development",
  "saas-product-development",
  "ai-automation",
  "seo-services",
  "ui-ux-design",
  "devops-cicd",
] as const;

/** Target market country landings */
export const priorityCountrySlugs = [
  "usa",
  "uk",
  "uae",
  "germany",
  "canada",
  "australia",
] as const;

/** Solution intent pages */
export const prioritySolutionSlugs = [
  "web-development-company-services",
  "ai-automation-services",
] as const;

/** Blog posts with strongest commercial intent */
export const priorityBlogSlugs = [
  "how-to-build-an-mvp-in-30-days",
  "how-much-does-software-development-cost",
  "how-to-choose-a-software-development-company",
  "why-outsource-software-development-to-pakistan",
  "ai-calling-agents-for-business",
  "cloud-migration-checklist",
  "business-process-automation-guide",
  "nextjs-seo-optimization-guide",
  "saas-vs-custom-software",
] as const;

export type PriorityLink = {
  href: string;
  label: string;
};

/** Human-readable labels for footer / homepage internal linking */
export const priorityPageLinks: PriorityLink[] = [
  { href: "/", label: "Home" },
  { href: "/team/", label: "Our Team" },
  { href: "/clients/", label: "Portfolio" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/blog/", label: "Blog" },
  { href: "/services/custom-web-development/", label: "Web Development" },
  { href: "/services/mobile-app-development/", label: "Mobile Apps" },
  { href: "/services/saas-product-development/", label: "SaaS Development" },
  { href: "/services/ai-automation/", label: "AI Automation Services" },
  { href: "/services/ui-ux-design/", label: "UI/UX Design" },
  { href: "/services/devops-cicd/", label: "DevOps & CI/CD" },
  { href: "/services/seo-services/", label: "Technical SEO Services" },
  { href: "/usa/", label: "Software Development USA" },
  { href: "/uk/", label: "Software Development UK" },
  { href: "/uae/", label: "Software & AI UAE" },
  { href: "/germany/", label: "Software Development Germany" },
  { href: "/canada/", label: "Software Development Canada" },
  { href: "/australia/", label: "Software Development Australia" },
  { href: "/software-house-islamabad/", label: "Software House Islamabad" },
  { href: "/software-house-rawalpindi/", label: "Software House Rawalpindi" },
  { href: "/web-development-islamabad/", label: "Web Development Islamabad" },
  { href: "/seo-services-islamabad/", label: "SEO Services Islamabad" },
  { href: "/digital-marketing-agency-islamabad/", label: "Digital Marketing Islamabad" },
  { href: "/hire-dedicated-developers/", label: "Hire Dedicated Developers" },
  { href: "/custom-software-development-company/", label: "Custom Software Development" },
  { href: "/mvp-development-company/", label: "MVP Development" },
  { href: "/ai-automation-agency/", label: "AI Automation Agency" },
  { href: "/app-development-company-dubai/", label: "App Development Dubai" },
  { href: "/web-design-company-dubai/", label: "Web Design Dubai" },
  { href: "/app-development-company-dallas/", label: "App Development Dallas" },
  { href: "/software-development-company-sydney/", label: "Software Development Sydney" },
  { href: "/app-development-company-melbourne/", label: "App Development Melbourne" },
  { href: "/software-development-company-toronto/", label: "Software Development Toronto" },
  { href: "/app-development-company-calgary/", label: "App Development Calgary" },
  { href: "/software-development-company-doha/", label: "Software Development Qatar" },
  { href: "/app-development-company-doha/", label: "App Development Doha" },
  { href: "/seo-services-lahore/", label: "SEO Services Lahore" },
  { href: "/seo-services-karachi/", label: "SEO Services Karachi" },
  { href: "/digital-marketing-agency-lahore/", label: "Digital Marketing Lahore" },
  { href: "/digital-marketing-agency-karachi/", label: "Digital Marketing Karachi" },
  { href: "/web-development-lahore/", label: "Web Development Lahore" },
  { href: "/web-development-karachi/", label: "Web Development Karachi" },
  {
    href: "/blog/how-to-build-an-mvp-in-30-days/",
    label: "Build an MVP in 30 Days",
  },
  {
    href: "/blog/how-much-does-software-development-cost/",
    label: "Software Development Cost",
  },
  {
    href: "/blog/how-to-choose-a-software-development-company/",
    label: "Choose a Dev Company",
  },
  {
    href: "/blog/why-outsource-software-development-to-pakistan/",
    label: "Outsource to Pakistan",
  },
  {
    href: "/blog/ai-calling-agents-for-business/",
    label: "AI Calling Agents",
  },
  {
    href: "/blog/cloud-migration-checklist/",
    label: "Cloud Migration",
  },
  {
    href: "/blog/business-process-automation-guide/",
    label: "Business Automation",
  },
  {
    href: "/blog/nextjs-seo-optimization-guide/",
    label: "Next.js SEO",
  },
  {
    href: "/blog/saas-vs-custom-software/",
    label: "SaaS vs Custom",
  },
];

const priorityPathSet = new Set(
  priorityPageLinks.map((link) => normalizePath(link.href))
);

/** Normalize to trailing-slash pathname for comparison */
export function normalizePath(path: string): string {
  if (path === "/" || path === "") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

export function pathToAbsoluteUrl(path: string): string {
  const normalized = normalizePath(path);
  return normalized === "/" ? `${BASE_URL}/` : `${BASE_URL}${normalized}`;
}

export function isPriorityPath(path: string): boolean {
  return priorityPathSet.has(normalizePath(path));
}
