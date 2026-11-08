/**
 * Site navigation (header menus). Kept separate from the page-content data
 * files so the header's client bundle stays small. When you add a location or
 * industry page, add it here too.
 */

export type NavLink = { label: string; href: string; desc?: string };
export type NavColumn = { title: string; links: NavLink[] };
export type NavMenu = {
  id: string;
  label: string;
  href: string;
  columns: NavColumn[];
  footerLink?: NavLink;
};

export const navMenus: NavMenu[] = [
  {
    id: "services",
    label: "Services",
    href: "/services/",
    columns: [
      {
        title: "Build",
        links: [
          { label: "Custom Software Development", href: "/custom-software-development-company/", desc: "SaaS, portals, CRM & ERP" },
          { label: "Web Development", href: "/services/custom-web-development/", desc: "Next.js, WordPress, Shopify" },
          { label: "Mobile App Development", href: "/services/mobile-app-development/", desc: "iOS & Android, Flutter" },
          { label: "MVP Development", href: "/mvp-development-company/", desc: "Launch in about 30 days" },
          { label: "SaaS Product Development", href: "/services/saas-product-development/" },
          { label: "UI/UX Design", href: "/services/ui-ux-design/" },
        ],
      },
      {
        title: "AI & Automation",
        links: [
          { label: "AI Automation Agency", href: "/ai-automation-agency/", desc: "Agents, chatbots, workflows" },
          { label: "AI Voice Agents", href: "/services/voice-ai-bots/", desc: "Answer & book calls 24/7" },
          { label: "Process Automation", href: "/services/process-automation/" },
          { label: "Predictive Analytics", href: "/services/predictive-analytics/" },
          { label: "API Development & Integration", href: "/services/api-development-integration/" },
        ],
      },
      {
        title: "Grow & Scale",
        links: [
          { label: "SEO Services", href: "/services/seo-services/", desc: "Technical, local & e-commerce" },
          { label: "E-commerce Development", href: "/services/ecommerce-solutions/" },
          { label: "Hire Dedicated Developers", href: "/hire-dedicated-developers/", desc: "Full-time engineers, monthly" },
          { label: "DevOps & CI/CD", href: "/services/devops-cicd/" },
          { label: "Cloud Migration", href: "/services/cloud-migration/" },
        ],
      },
    ],
    footerLink: { label: "All services", href: "/services/" },
  },
  {
    id: "industries",
    label: "Industries",
    href: "/healthcare-software-development/",
    columns: [
      {
        title: "Industries",
        links: [
          { label: "Healthcare", href: "/healthcare-software-development/", desc: "Telehealth, clinics, pharmacy" },
          { label: "Real Estate", href: "/real-estate-software-development/", desc: "Portals, CRMs, booking" },
          { label: "Fintech", href: "/fintech-software-development/", desc: "Payments, lending, accounting" },
          { label: "EdTech & E-Learning", href: "/edtech-software-development/", desc: "Courses, LMS, schools" },
          { label: "Field Service & Contractors", href: "/field-service-app-development/", desc: "Leads, dispatch, job apps" },
        ],
      },
    ],
  },
  {
    id: "locations",
    label: "Locations",
    href: "/locations/",
    columns: [
      {
        title: "Pakistan",
        links: [
          { label: "Islamabad (HQ)", href: "/software-house-islamabad/" },
          { label: "Rawalpindi", href: "/software-house-rawalpindi/" },
          { label: "Lahore", href: "/software-house-lahore/" },
          { label: "Karachi", href: "/software-house-karachi/" },
          { label: "Faisalabad", href: "/software-house-faisalabad/" },
          { label: "Multan", href: "/software-house-multan/" },
          { label: "Peshawar", href: "/software-house-peshawar/" },
          { label: "Gujranwala", href: "/software-house-gujranwala/" },
          { label: "Sialkot", href: "/software-house-sialkot/" },
          { label: "Bahawalpur", href: "/software-house-bahawalpur/" },
          { label: "Sargodha", href: "/software-house-sargodha/" },
          { label: "All of Pakistan", href: "/software-house-pakistan/" },
        ],
      },
      {
        title: "Middle East",
        links: [
          { label: "Dubai, UAE", href: "/software-development-company-dubai/" },
          { label: "Riyadh, Saudi Arabia", href: "/software-development-company-riyadh/" },
          { label: "Doha, Qatar", href: "/software-development-company-doha/" },
          { label: "UAE", href: "/uae/" },
        ],
      },
      {
        title: "North America",
        links: [
          { label: "New York", href: "/software-development-company-new-york/" },
          { label: "Chicago", href: "/software-development-company-chicago/" },
          { label: "Dallas", href: "/app-development-company-dallas/" },
          { label: "Houston", href: "/app-development-company-houston/" },
          { label: "Austin", href: "/app-development-company-austin/" },
          { label: "Miami", href: "/app-development-company-miami/" },
          { label: "Toronto", href: "/software-development-company-toronto/" },
          { label: "Calgary", href: "/app-development-company-calgary/" },
        ],
      },
      {
        title: "UK, Europe & Australia",
        links: [
          { label: "London", href: "/software-development-company-london/" },
          { label: "Germany", href: "/germany/" },
          { label: "Sydney", href: "/software-development-company-sydney/" },
          { label: "Melbourne", href: "/app-development-company-melbourne/" },
        ],
      },
    ],
    footerLink: { label: "All locations", href: "/locations/" },
  },
  {
    id: "portfolio",
    label: "Portfolio",
    href: "/clients/",
    columns: [
      {
        title: "Our Work",
        links: [
          { label: "All Case Studies", href: "/clients/", desc: "70+ client projects" },
          { label: "Mobile Applications", href: "/portfolio/mobile-applications/" },
          { label: "Custom Software & SaaS", href: "/portfolio/software/" },
          { label: "SEO Results", href: "/portfolio/seo-results/" },
          { label: "Digital Marketing", href: "/portfolio/digital-marketing/" },
          { label: "UI/UX Design", href: "/portfolio/ui-ux/" },
        ],
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    href: "/blog/",
    columns: [
      {
        title: "Free Tools",
        links: [
          { label: "App Development Cost Calculator", href: "/tools/app-development-cost-calculator/" },
          { label: "Website Cost Calculator", href: "/tools/website-cost-calculator/" },
        ],
      },
      {
        title: "Guides",
        links: [
          { label: "Blog", href: "/blog/" },
          { label: "How to Choose a Dev Company", href: "/blog/how-to-choose-a-software-development-company/" },
          { label: "Software Development Cost", href: "/blog/how-much-does-software-development-cost/" },
          { label: "Build an MVP in 30 Days", href: "/blog/how-to-build-an-mvp-in-30-days/" },
        ],
      },
    ],
  },
  {
    id: "company",
    label: "About",
    href: "/about/",
    columns: [
      {
        title: "Company",
        links: [
          { label: "About DEVSYNX", href: "/about/" },
          { label: "Our Team", href: "/team/" },
          { label: "Contact", href: "/contact/" },
        ],
      },
    ],
  },
];
