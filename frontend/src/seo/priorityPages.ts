/** Canonical base URL — always non-www */
export const BASE_URL = "https://devsynx.com";

/** Core hub pages (7) */
export const priorityHubPaths = [
  "/",
  "/services/",
  "/clients/",
  "/team/",
  "/about/",
  "/contact/",
  "/blog/",
  "/solutions/",
  "/global/",
] as const;

/** High-intent service pages (10) */
export const priorityServiceSlugs = [
  "custom-web-development",
  "mobile-app-development",
  "ai-machine-learning",
  "ai-calling-agent",
  "saas-product-development",
  "cloud-solutions",
  "business-process-automation",
  "ui-ux-design",
  "devops-cicd",
  "api-development-integration",
] as const;

/** Target market country landings (4) */
export const priorityCountrySlugs = ["usa", "uk", "uae", "dubai"] as const;

/** Solution intent pages (5) */
export const prioritySolutionSlugs = [
  "custom-software-development-company",
  "web-development-company-services",
  "ai-automation-services",
  "mvp-development-company",
  "software-development-company-pakistan",
] as const;

/** Blog posts with strongest commercial intent (4) */
export const priorityBlogSlugs = [
  "how-to-build-an-mvp-in-30-days",
  "how-much-does-software-development-cost",
  "how-to-choose-a-software-development-company",
  "why-outsource-software-development-to-pakistan",
] as const;

export type PriorityLink = {
  href: string;
  label: string;
};

/** Human-readable labels for footer / homepage internal linking */
export const priorityPageLinks: PriorityLink[] = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/clients/", label: "Client Projects" },
  { href: "/team/", label: "Our Team" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/blog/", label: "Blog" },
  { href: "/solutions/", label: "Solutions" },
  { href: "/global/", label: "Global Services" },
  { href: "/services/custom-web-development/", label: "Web Development" },
  { href: "/services/mobile-app-development/", label: "Mobile Apps" },
  { href: "/services/ai-machine-learning/", label: "AI & ML" },
  { href: "/services/ai-calling-agent/", label: "AI Calling Agent" },
  { href: "/services/saas-product-development/", label: "SaaS Development" },
  { href: "/services/cloud-solutions/", label: "Cloud Solutions" },
  { href: "/services/business-process-automation/", label: "Automation" },
  { href: "/services/ui-ux-design/", label: "UI/UX Design" },
  { href: "/services/devops-cicd/", label: "DevOps & CI/CD" },
  { href: "/services/api-development-integration/", label: "API Development" },
  { href: "/usa/", label: "Software Development USA" },
  { href: "/uk/", label: "Software Development UK" },
  { href: "/uae/", label: "Software Development UAE" },
  { href: "/dubai/", label: "Software Development Dubai" },
  {
    href: "/solutions/custom-software-development-company/",
    label: "Custom Software Company",
  },
  {
    href: "/solutions/web-development-company-services/",
    label: "Web Development Company",
  },
  { href: "/solutions/ai-automation-services/", label: "AI Automation Services" },
  { href: "/solutions/mvp-development-company/", label: "MVP Development" },
  {
    href: "/solutions/software-development-company-pakistan/",
    label: "Software Company Pakistan",
  },
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

/** All 30 priority URLs for sitemap id=priority */
export function getPrioritySitemapEntries(): { path: string; priority: number }[] {
  const hubs = priorityHubPaths.map((path) => ({
    path,
    priority: path === "/" ? 1 : 0.95,
  }));

  const services = priorityServiceSlugs.map((slug) => ({
    path: `/services/${slug}/`,
    priority: 0.9,
  }));

  const countries = priorityCountrySlugs.map((slug) => ({
    path: `/${slug}/`,
    priority: 0.88,
  }));

  const solutions = prioritySolutionSlugs.map((slug) => ({
    path: `/solutions/${slug}/`,
    priority: 0.87,
  }));

  const blogs = priorityBlogSlugs.map((slug) => ({
    path: `/blog/${slug}/`,
    priority: 0.85,
  }));

  return [...hubs, ...services, ...countries, ...solutions, ...blogs];
}
