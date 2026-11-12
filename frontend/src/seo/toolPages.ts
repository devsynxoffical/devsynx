import type { CalcConfig } from "@/components/CostCalculator";

export type ToolPage = {
  slug: string;
  path: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  quickAnswer: string;
  calcTitle: string;
  config: CalcConfig;
  guideTitle: string;
  guide: { heading: string; content: string }[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

export const toolPages: ToolPage[] = [
  {
    slug: "app-development-cost-calculator",
    path: "/tools/app-development-cost-calculator/",
    navLabel: "App Development Cost Calculator",
    metaTitle: "App Development Cost Calculator (Free Estimate)",
    metaDescription:
      "Free app cost calculator: pick platforms, app size and features to get a DEVSYNX fixed-price estimate in USD and PKR, plus a timeline. Most apps cost $600–2,500.",
    keywords: ["app development cost calculator", "app development cost", "how much does it cost to build an app", "mobile app cost estimator", "app cost calculator"],
    h1: "App Development Cost Calculator",
    quickAnswer:
      "At DEVSYNX, most mobile apps cost between about $600 and $2,500 (PKR 175,000–700,000). A simple app with login and a few screens costs about $600–850, a medium app with payments, notifications and an admin panel about $850–1,300, and a complex marketplace or on-demand app about $1,450–2,500. US and UK agencies often quote $10,000–250,000+ for similar apps because their hourly rates are $80–160. Use the calculator below for an estimate based on your features.",
    calcTitle: "Estimate your app",
    config: {
      teamSize: 3,
      weeklyHours: 35,
      price: { base: 500, perHour: 0.5, cap: 4000 },
      groups: [
        {
          id: "platform",
          label: "Which platforms?",
          kind: "single",
          defaultIds: ["cross"],
          options: [
            { id: "ios", label: "iOS only", multiplier: 1 },
            { id: "android", label: "Android only", multiplier: 1 },
            { id: "cross", label: "iOS + Android (Flutter / React Native)", multiplier: 1.25 },
            { id: "native", label: "iOS + Android (two native apps)", multiplier: 1.8 },
          ],
        },
        {
          id: "size",
          label: "How big is the app?",
          kind: "single",
          defaultIds: ["medium"],
          options: [
            { id: "simple", label: "Simple (5–10 screens)", hours: 300 },
            { id: "medium", label: "Medium (10–25 screens)", hours: 650 },
            { id: "complex", label: "Complex (25+ screens)", hours: 1300 },
          ],
        },
        {
          id: "design",
          label: "Design level",
          kind: "single",
          defaultIds: ["custom"],
          options: [
            { id: "template", label: "UI kit / template", multiplier: 0.9 },
            { id: "custom", label: "Custom design", multiplier: 1 },
            { id: "premium", label: "Premium with animations", multiplier: 1.15 },
          ],
        },
        {
          id: "features",
          label: "Features (select all that apply)",
          kind: "multi",
          defaultIds: ["auth", "push", "admin"],
          options: [
            { id: "auth", label: "Login & user profiles", hours: 40 },
            { id: "social", label: "Social login", hours: 20 },
            { id: "payments", label: "Payments / subscriptions", hours: 80 },
            { id: "chat", label: "In-app chat", hours: 120 },
            { id: "maps", label: "Maps & location tracking", hours: 80 },
            { id: "push", label: "Push notifications", hours: 30 },
            { id: "admin", label: "Web admin panel", hours: 120 },
            { id: "offline", label: "Offline mode & sync", hours: 80 },
            { id: "media", label: "Video / audio streaming", hours: 160 },
            { id: "ai", label: "AI features (chat, recommendations)", hours: 120 },
            { id: "integrations", label: "Third-party integrations (CRM, ERP)", hours: 60 },
            { id: "i18n", label: "Multiple languages / RTL", hours: 40 },
          ],
        },
      ],
    },
    guideTitle: "How App Development Cost Is Calculated",
    guide: [
      {
        heading: "The formula: hours × hourly rate",
        content:
          "Every app estimate comes down to two numbers: how many hours of design, development, testing and project management the app needs, and the hourly rate of the team doing the work. The hours depend on the number of screens, the features behind them, the platforms and the design quality. The rate depends mostly on where the team is based and how senior it is. That is why the same app can be quoted at $30,000 by one company and $150,000 by another, and both can be honest.",
      },
      {
        heading: "Typical cost ranges by app size",
        content:
          "Simple app (5–10 screens, login, basic content, no payments): roughly 300–500 hours.\nMedium app (10–25 screens, payments, notifications, an admin panel): roughly 800–1,500 hours.\nComplex app (marketplaces, on-demand delivery, streaming, real-time features): 2,000 hours and up.\nAn agency charging $120/hour would bill about $120,000 for a 1,000-hour app. DEVSYNX quotes a fixed price instead, and most apps stay between $600 and $2,500.",
      },
      {
        heading: "What drives the cost up",
        content:
          "• Platforms: building two separate native apps nearly doubles the frontend work. A cross-platform framework such as Flutter or React Native usually adds 20–30% over a single platform instead.\n• Real-time features: chat, live tracking, streaming and multiplayer require extra backend infrastructure and testing.\n• Integrations: every external system (payment gateway, CRM, ERP, logistics API) adds setup, error handling and testing.\n• Roles: an app with customers, vendors, drivers and admins is effectively several apps.\n• Compliance: healthcare, finance and children's apps need extra security, data handling and review work.\n• Design: custom illustrations, animations and micro-interactions add design and frontend time.",
      },
      {
        heading: "Costs people forget",
        content:
          "The build is not the only cost. Plan for: backend hosting and databases; third-party services such as maps, SMS, email and AI APIs, usually billed monthly; the Apple Developer Program ($99/year) and a one-time Google Play registration fee; app store commission on in-app purchases; and ongoing maintenance for OS updates, security patches and bug fixes, often budgeted at 15–20% of the build cost per year.",
      },
      {
        heading: "How to reduce the cost without cutting quality",
        content:
          "1. Start with an MVP: build the one workflow that proves the idea, then add features users actually ask for.\n2. Use cross-platform development unless you need deep native features.\n3. Use proven services for login, payments and notifications instead of building them.\n4. Write a clear feature list with acceptance criteria before development starts; unclear scope is the biggest source of cost overruns.\n5. Compare teams on the same written scope, and weigh seniority and process, not only the hourly rate.",
      },
      {
        heading: "Fixed price or hourly?",
        content:
          "A fixed price works when the feature list is clear and unlikely to change: you know the total in advance and pay by milestone. Hourly or dedicated-team pricing works better for products that will evolve as you learn from users, because changes don't require renegotiating a contract. Many teams combine them: a fixed-price MVP, then a monthly team for ongoing development.",
      },
      {
        heading: "How accurate is this calculator?",
        content:
          "The calculator adds up typical effort for each platform, screen count, design level and feature, and converts it into a DEVSYNX price range in USD and PKR. It is useful for budgeting before you talk to anyone. A final price needs your actual screens, user flows and integrations; DEVSYNX provides a written fixed-price proposal after a free scoping call, and most apps stay under $2,500.",
      },
    ],
    faqs: [
      { question: "How much does it cost to build an app?", answer: "With DEVSYNX, most apps cost about $600–2,500 (roughly PKR 175,000–700,000), depending on the number of screens and features, whether you build for one or both platforms and the design level. US and UK agencies often charge $10,000–250,000+ for similar apps because of higher hourly rates." },
      { question: "How long does it take to build an app?", answer: "A simple app usually takes 6–10 weeks, a medium app 3–5 months and a complex app 6 months or more, depending on team size and how quickly decisions are made." },
      { question: "Is it cheaper to build for iOS and Android with Flutter or React Native?", answer: "Usually yes. A cross-platform framework lets one codebase run on both platforms, typically adding 20–30% to the cost of a single-platform app instead of nearly doubling it with two native apps." },
      { question: "What are the ongoing costs of an app?", answer: "Hosting, third-party services (maps, SMS, email, AI APIs), app store developer fees, and maintenance for OS updates and bug fixes. A common planning figure is 15–20% of the build cost per year." },
      { question: "Why do app development quotes vary so much?", answer: "Companies quote different scopes, seniority levels and hourly rates. Give every company the same written feature list and compare the hours and team they propose, not only the total price." },
    ],
    related: [
      { href: "/tools/website-cost-calculator/", label: "Website Cost Calculator" },
      { href: "/app-development-company-pakistan/", label: "Mobile App Development" },
      { href: "/mvp-development-company/", label: "MVP Development" },
      { href: "/blog/how-much-does-software-development-cost/", label: "Software Development Cost Guide" },
    ],
  },
  {
    slug: "website-cost-calculator",
    path: "/tools/website-cost-calculator/",
    navLabel: "Website Cost Calculator",
    metaTitle: "Website Cost Calculator: Website Development Cost",
    metaDescription:
      "Free website cost calculator: choose the type of site, design level and features to get a DEVSYNX fixed-price estimate in USD and PKR, from $100 landing pages to about $2,000 web apps.",
    keywords: ["website cost calculator", "website development cost", "how much does a website cost", "web design cost calculator", "ecommerce website cost"],
    h1: "Website Cost Calculator",
    quickAnswer:
      "At DEVSYNX, a landing page costs about $100–150, a small business website (5–10 pages) about $200–250, a business site with a CMS about $300–450 (PKR 35,000–120,000 for static and business sites), an e-commerce store about $500–700 and a custom web application about $1,000–2,000. Western agencies often charge $1,500–15,000 for a small site and $5,000–60,000 for an online store. Use the calculator for an estimate based on your site.",
    calcTitle: "Estimate your website",
    config: {
      teamSize: 2,
      weeklyHours: 35,
      price: { base: 100, perHour: 1.6, cap: 4000 },
      groups: [
        {
          id: "type",
          label: "What kind of website?",
          kind: "single",
          defaultIds: ["business"],
          options: [
            { id: "landing", label: "Landing page (1–3 pages)", hours: 30 },
            { id: "brochure", label: "Small business (5–10 pages)", hours: 60 },
            { id: "business", label: "Business site with CMS (10–25 pages)", hours: 140 },
            { id: "ecommerce", label: "E-commerce store", hours: 260 },
            { id: "webapp", label: "Custom web application", hours: 600 },
          ],
        },
        {
          id: "design",
          label: "Design level",
          kind: "single",
          defaultIds: ["custom"],
          options: [
            { id: "template", label: "Theme / template", multiplier: 0.75 },
            { id: "custom", label: "Custom design", multiplier: 1 },
            { id: "premium", label: "Premium with animations", multiplier: 1.25 },
          ],
        },
        {
          id: "features",
          label: "Features (select all that apply)",
          kind: "multi",
          defaultIds: ["blog", "seo"],
          options: [
            { id: "blog", label: "Blog / news", hours: 20 },
            { id: "booking", label: "Online booking", hours: 40 },
            { id: "payments", label: "Online payments", hours: 40 },
            { id: "members", label: "User accounts / members area", hours: 50 },
            { id: "multilang", label: "Multiple languages", hours: 30 },
            { id: "crm", label: "CRM / email marketing integration", hours: 30 },
            { id: "search", label: "Advanced search & filters", hours: 40 },
            { id: "seo", label: "Technical SEO setup", hours: 15 },
            { id: "copy", label: "Copywriting", hours: 30 },
            { id: "migration", label: "Content migration from old site", hours: 30 },
          ],
        },
      ],
    },
    guideTitle: "What Determines Website Development Cost",
    guide: [
      {
        heading: "Type of website is the biggest factor",
        content:
          "A landing page and a custom web application are different projects. A landing page or small brochure site is mostly design and content. A business site with a CMS adds templates your team can edit. An e-commerce store adds products, cart, checkout, payments, shipping and order emails. A web application, such as a portal, booking system or SaaS product, adds user accounts, business logic, a database and an admin panel, which multiplies the work.",
      },
      {
        heading: "Typical price ranges",
        content:
          "Landing page: about 20–40 hours.\nSmall business website (5–10 pages): about 50–100 hours.\nBusiness site with CMS (10–25 pages): about 120–200 hours.\nE-commerce store: about 200–400 hours, more for large catalogues or custom checkout.\nCustom web application: 500 hours and up.\nAgencies multiply these hours by their hourly rate: at $120/hour a 150-hour business site costs about $18,000. DEVSYNX quotes a fixed price instead, from about $100 for a landing page to about $2,000 for a custom web application.",
      },
      {
        heading: "Template or custom design?",
        content:
          "A premium theme can cut design and frontend time by a quarter or more, and is a sensible choice for a first website or a tight budget. Custom design pays off when the site must stand out, convert visitors into leads, or match an existing brand system. Whichever you choose, make sure the site is fast on mobile, because page speed affects both Google rankings and conversion rates.",
      },
      {
        heading: "WordPress, Shopify or custom code?",
        content:
          "WordPress suits content-heavy business sites that your team wants to edit easily. Shopify suits most online stores, because hosting, payments and security are handled for you. Custom frameworks such as Next.js suit sites that need top performance, complex features or integrations with your own systems. The platform changes the cost structure: Shopify has monthly fees but less development; custom code has no licence fees but more build time.",
      },
      {
        heading: "Ongoing costs after launch",
        content:
          "Budget for a domain, hosting, SSL (often included), premium plugins or apps, email services, and maintenance for updates, backups and security monitoring. For e-commerce, add payment processing fees and any marketplace or app subscriptions. Many businesses also budget monthly for SEO and content, since a website that is not updated tends to lose rankings over time.",
      },
      {
        heading: "How to get an accurate quote",
        content:
          "List the pages you need, the features (booking, payments, accounts), who will write the content, and two or three websites you like. Ask each company for a quote against the same list, the platform they recommend and why, the timeline, and what is not included. Compare the hours and deliverables, not just the total.",
      },
      {
        heading: "Website prices in Pakistan",
        content:
          "For businesses in Pakistan, DEVSYNX publishes fixed PKR price ranges: business websites from about PKR 35,000, e-commerce stores from about PKR 60,000 and custom web applications from about PKR 150,000. See the web development pages for Islamabad, Lahore and Karachi for details.",
      },
    ],
    faqs: [
      { question: "How much does a website cost?", answer: "With DEVSYNX, a small business website costs about $200–250, a business site with a CMS about $300–450, an e-commerce store about $500–700 and a custom web application about $1,000–2,000. Western agencies typically charge several times more for the same scope." },
      { question: "How long does it take to build a website?", answer: "A landing page takes about 1–2 weeks, a small business website 2–4 weeks, an e-commerce store 4–8 weeks and a custom web application 2–6 months." },
      { question: "Is WordPress cheaper than a custom website?", answer: "Usually yes for content-focused sites, because themes and plugins cover common features. A custom build costs more upfront but can be faster, more secure and better for complex features." },
      { question: "What are the monthly costs of running a website?", answer: "Hosting, domain renewal, premium plugins or apps, email services and maintenance. For a small business site this is often modest; e-commerce and web apps cost more because of payment fees, apps and higher hosting needs." },
      { question: "How much does a website cost in Pakistan?", answer: "At DEVSYNX, business websites start at about PKR 35,000, e-commerce stores at about PKR 60,000 and custom web applications at about PKR 150,000, with fixed quotes in writing." },
    ],
    related: [
      { href: "/tools/app-development-cost-calculator/", label: "App Development Cost Calculator" },
      { href: "/web-development-islamabad/", label: "Web Development Islamabad" },
      { href: "/web-design-company-dubai/", label: "Web Design Company Dubai" },
      { href: "/services/custom-web-development/", label: "Custom Web Development" },
    ],
  },
];

export function getToolPage(slug: string): ToolPage {
  const t = toolPages.find((p) => p.slug === slug);
  if (!t) throw new Error(`Unknown tool page: ${slug}`);
  return t;
}
