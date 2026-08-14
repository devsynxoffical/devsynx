export type ClientProject = {
  id: string;
  clientName: string;
  projectTitle: string;
  description: string;
  category: string;
  tags: string[];
  region: string;
  gradient: string;
};

/** Update this list with your real client projects as you add them */
export const clientProjects: ClientProject[] = [
  {
    id: "healthcare-rcm",
    clientName: "US Healthcare Provider",
    projectTitle: "Medical Billing & RCM Platform",
    description:
      "End-to-end revenue cycle management system with claims processing, denial tracking, and patient billing workflows for a multi-location practice.",
    category: "Healthcare",
    tags: ["Medical Billing", "Automation", "HIPAA"],
    region: "United States",
    gradient: "linear-gradient(135deg, #06909D, #1a73e8)",
  },
  {
    id: "ai-calling",
    clientName: "Growth-Stage SaaS",
    projectTitle: "AI Calling Agent for Lead Qualification",
    description:
      "Voice AI agent integrated with CRM to qualify inbound leads, book demos, and route hot prospects to sales — reducing response time from hours to seconds.",
    category: "AI & Automation",
    tags: ["AI Calling", "CRM Integration", "Voice AI"],
    region: "United Kingdom",
    gradient: "linear-gradient(135deg, #7C3AED, #06909D)",
  },
  {
    id: "saas-mvp",
    clientName: "Startup Founder",
    projectTitle: "SaaS MVP — Shipped in 30 Days",
    description:
      "Full-stack MVP with auth, subscription billing, admin dashboard, and analytics — launched on schedule for early user validation and investor demos.",
    category: "SaaS",
    tags: ["MVP", "Next.js", "Stripe"],
    region: "UAE",
    gradient: "linear-gradient(135deg, #FDBD02, #06909D)",
  },
  {
    id: "ecommerce",
    clientName: "Retail Brand",
    projectTitle: "Custom E-Commerce & Inventory System",
    description:
      "Headless storefront with real-time inventory sync, multi-warehouse fulfillment, and automated order workflows for a growing retail operation.",
    category: "E-Commerce",
    tags: ["Web App", "Inventory", "Integrations"],
    region: "Pakistan",
    gradient: "linear-gradient(135deg, #1a73e8, #7C3AED)",
  },
  {
    id: "mobile-field",
    clientName: "Logistics Company",
    projectTitle: "Mobile Field Operations App",
    description:
      "Cross-platform mobile app for dispatch, route tracking, proof-of-delivery, and offline-first sync for field teams operating across multiple cities.",
    category: "Mobile",
    tags: ["React Native", "GPS", "Offline Sync"],
    region: "Saudi Arabia",
    gradient: "linear-gradient(135deg, #06909D, #7C3AED)",
  },
  {
    id: "cloud-migration",
    clientName: "Enterprise Client",
    projectTitle: "Cloud Migration & DevOps Pipeline",
    description:
      "Migrated legacy infrastructure to AWS with CI/CD, monitoring, and zero-downtime deployment — cutting release cycles from weeks to hours.",
    category: "Cloud & DevOps",
    tags: ["AWS", "CI/CD", "Migration"],
    region: "Canada",
    gradient: "linear-gradient(135deg, #1a73e8, #06909D)",
  },
];
