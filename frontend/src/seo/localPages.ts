/**
 * Data for city, country and global service landing pages.
 * Each entry renders through components/LocalLandingPage.tsx and is mounted by a
 * one-line app/<slug>/page.tsx. Target keywords and monthly volumes come from the
 * Nov 2026 OpenSEO research in /seo-research (keyword-volumes-2026-11.csv).
 */

import { localPageOverrides } from "./localPageOverrides";
import { industryConfigs } from "./industryPages";
import { usCityConfigs } from "./usCityPages";
import { pkCitiesBatch2 } from "./pkCitiesBatch2";
import { gulfPages } from "./gulfPages";

export type LocalPage = {
  slug: string;
  path: string;
  group: "pakistan" | "international" | "global";
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  serviceName: string;
  placeLabel: string;
  areaType: "City" | "Country" | "AdministrativeArea";
  areaServed: string[];
  priceRange?: string;
  breadcrumbs: { name: string; path: string }[];
  badge: string;
  h1Before: string;
  h1Highlight: string;
  h1After?: string;
  quickAnswer: string;
  whatsappText: string;
  stats: { value: string; label: string }[];
  introTag: string;
  introTitle: string;
  intro: string[];
  highlights?: { tag: string; title: string; cards: { icon: string; title: string; text: string }[] };
  guideTitle?: string;
  guide?: { heading: string; content: string }[];
  servicesTitle: string;
  services: { icon: string; title: string; text: string; href?: string; linkLabel?: string }[];
  caseStudiesTitle: string;
  caseStudyIds: string[];
  pricingTitle: string;
  pricingNote: string;
  pricingColumns: [string, string, string, string];
  pricing: [string, string, string, string][];
  areasTitle: string;
  areasNote: string;
  areas: string[];
  related: { href: string; label: string }[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
};

/* ------------------------------------------------------------------ */
/* Shared building blocks                                              */
/* ------------------------------------------------------------------ */

const PK_STATS = [
  { value: "300+", label: "Projects Shipped" },
  { value: "70+", label: "Public Case Studies" },
  { value: "100%", label: "In-House Engineers" },
  { value: "30 Days", label: "Typical MVP Launch" },
];

const GLOBAL_STATS = [
  { value: "300+", label: "Projects Shipped" },
  { value: "15+", label: "Countries Served" },
  { value: "100%", label: "Code Ownership" },
  { value: "30 Days", label: "Typical MVP Launch" },
];

const PK_PAKISTAN_CASES = ["silayi-pret", "nw-canvas", "zahh-beverages", "luxora-women", "mizn-abayas", "devsynx-attendance-hr"];

const PK_SOFTWARE_PRICING: [string, string, string, string][] = [
  ["Business Website", "2 – 3 Weeks", "PKR 80,000 – 250,000", "Next.js or WordPress, custom UI, technical SEO, mobile responsive, domain & SSL"],
  ["Custom Web App / MVP", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "React/Next.js frontend, Node.js API, PostgreSQL, auth, payments, role-based access"],
  ["Mobile App (iOS & Android)", "6 – 12 Weeks", "PKR 450,000 – 1,500,000", "Flutter single codebase, push notifications, offline cache, store submission"],
  ["ERP & Odoo Implementation", "6 – 16 Weeks", "PKR 500,000 – 2,500,000", "Inventory, accounting, sales and HR modules, data migration, FBR-integrated POS"],
  ["Monthly Maintenance & SLA", "Ongoing", "From PKR 60,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
];

const PK_SEO_PRICING: [string, string, string, string][] = [
  ["Local SEO (1 location)", "3 – 6 Months", "PKR 45,000 / mo", "Google Business Profile, local citations, on-page fixes, 4 location pages, monthly report"],
  ["Business SEO", "4 – 9 Months", "PKR 85,000 / mo", "Technical audit & fixes, keyword map, 4 articles / mo, digital PR backlinks"],
  ["E-commerce / National SEO", "6 – 12 Months", "PKR 140,000 / mo", "Category & product optimisation, schema, internal linking, 8 articles / mo, link building"],
];

const PK_DM_PRICING: [string, string, string, string][] = [
  ["Starter (1 platform)", "Monthly", "PKR 50,000 / mo", "Meta or Google Ads, pixel & CAPI setup, 8 creatives / mo, weekly reporting"],
  ["Growth (2–3 platforms)", "Monthly", "PKR 85,000 / mo", "Meta, Google and TikTok Ads, landing page tests, 16 creatives / mo, call tracking"],
  ["Scale (e-commerce)", "Monthly", "PKR 140,000 / mo", "Full-funnel ads, catalogue & Shopping campaigns, server-side tracking, CRO, retention flows"],
];

const PK_WEB_PRICING: [string, string, string, string][] = [
  ["Business Website (5–10 pages)", "2 – 3 Weeks", "PKR 80,000 – 140,000", "Custom design, Next.js or WordPress, on-page SEO, WhatsApp & contact forms"],
  ["E-commerce Store", "3 – 5 Weeks", "PKR 120,000 – 350,000", "Shopify or WooCommerce, JazzCash / Easypaisa / card payments, courier integration"],
  ["Custom Web Application", "4 – 10 Weeks", "PKR 350,000 – 1,200,000", "Portals, dashboards, booking and SaaS products with admin panel and API"],
  ["Website Care Plan", "Ongoing", "From PKR 15,000 / mo", "Hosting management, updates, backups, uptime monitoring, content edits"],
];

const INTL_ENGAGEMENT_COLUMNS: [string, string, string, string] = ["Engagement", "Typical Timeline", "How It's Priced", "Best For"];

function intlEngagement(currency: string): [string, string, string, string][] {
  return [
    ["Fixed-Scope Project", "3 – 12 Weeks", `Fixed price in ${currency}, paid per milestone`, "Websites, MVPs and apps with a clear feature list"],
    ["Dedicated Developer", "Monthly, min. 1 month", `Flat monthly rate in ${currency}`, "Adding a full-time engineer to your existing team"],
    ["Dedicated Squad", "Monthly, min. 3 months", `Monthly team rate in ${currency}`, "PM + designers + engineers for a product roadmap"],
    ["Support & SLA", "Ongoing", `Monthly retainer in ${currency}`, "Monitoring, security patches, bug fixes and small features"],
  ];
}

const softwareServices = (city: string, links: { web?: string; seo?: string; dm?: string }) => [
  { icon: "💻", title: "Custom Web Applications", text: `Portals, dashboards, booking systems and SaaS products for ${city} businesses, built in Next.js, Node.js and PostgreSQL.`, href: links.web ?? "/services/custom-web-development/", linkLabel: links.web ? `Web Development ${city}` : "Web Development" },
  { icon: "📱", title: "Mobile App Development", text: "iOS and Android apps from one Flutter or React Native codebase, with payments, push notifications and offline mode.", href: "/app-development-company-pakistan/", linkLabel: "App Development Pakistan" },
  { icon: "🏢", title: "ERP & Inventory Systems", text: "Odoo and custom ERP for manufacturers, distributors and retailers: stock, invoicing, accounts, HR and FBR-integrated POS.", href: "/services/legacy-system-modernization/", linkLabel: "ERP & Modernisation" },
  { icon: "🤖", title: "AI Automation & Agents", text: "WhatsApp Business API bots, AI voice agents and LLM workflows that answer customers and process orders automatically.", href: "/ai-automation-agency/", linkLabel: "AI Automation" },
  { icon: "🛒", title: "E-commerce Development", text: "Shopify and WooCommerce stores with JazzCash, Easypaisa, card payments and courier integrations (TCS, Leopards, PostEx).", href: "/services/ecommerce-solutions/", linkLabel: "E-commerce Solutions" },
  { icon: "📈", title: "SEO & Digital Marketing", text: "Technical SEO, Google Maps ranking and performance ads run by the same team that builds your site.", href: links.seo ?? links.dm ?? "/seo-services-pakistan/", linkLabel: links.seo ? `SEO Services ${city}` : "SEO Services Pakistan" },
];

const seoServices = (city: string) => [
  { icon: "📍", title: "Local SEO & Google Maps", text: `Google Business Profile optimisation, local citations and review strategy so you appear in the ${city} map pack.` },
  { icon: "🛠️", title: "Technical SEO", text: "Core Web Vitals, crawl errors, indexing, schema markup and site architecture fixed by developers, not just reported." },
  { icon: "🗝️", title: "Keyword & Content Strategy", text: "Keyword research with real search volumes, a page-by-page keyword map and articles written to rank and convert." },
  { icon: "🔗", title: "Link Building & Digital PR", text: "Backlinks from relevant Pakistani and international publications, directories and partner sites. No PBNs." },
  { icon: "🛒", title: "E-commerce SEO", text: "Category and product page optimisation, product schema and internal linking for Shopify and WooCommerce stores." },
  { icon: "🤖", title: "AI Search (AEO / GEO)", text: "Structured answers, FAQ schema and llms.txt so your brand is cited in Google AI Overviews and ChatGPT answers." },
];

const dmServices = (city: string) => [
  { icon: "🎯", title: "Meta & Instagram Ads", text: `Campaigns built for leads and sales in ${city}, with Conversions API so iOS tracking losses don't hide your real results.` },
  { icon: "🔍", title: "Google Ads", text: "Search, Performance Max and Shopping campaigns with call and WhatsApp conversion tracking." },
  { icon: "🎵", title: "TikTok Ads & Content", text: "Short-form creative and TikTok campaigns for fashion, food and consumer brands." },
  { icon: "📈", title: "SEO", text: "Organic rankings that keep bringing leads after the ad budget stops." },
  { icon: "🖥️", title: "Landing Pages & CRO", text: "Fast landing pages built by our developers and A/B tested to lower your cost per lead." },
  { icon: "💬", title: "WhatsApp Automation", text: "WhatsApp Business API flows that reply to ad leads instantly and hand hot leads to your sales team." },
];

const webServices = (city: string) => [
  { icon: "🌐", title: "Business Websites", text: `Fast, mobile-first websites for ${city} companies, built in Next.js or WordPress with SEO set up from day one.` },
  { icon: "🛒", title: "E-commerce Stores", text: "Shopify and WooCommerce stores with local payment gateways, COD and courier integrations." },
  { icon: "⚙️", title: "Web Applications", text: "Custom portals, dashboards, booking and management systems with secure admin panels." },
  { icon: "🎨", title: "UI/UX Design", text: "Figma design systems and conversion-focused layouts tested on real users before development.", href: "/services/ui-ux-design/", linkLabel: "UI/UX Design" },
  { icon: "⚡", title: "Speed & Core Web Vitals", text: "Slow WordPress sites rebuilt or optimised to load in under two seconds on mobile data." },
  { icon: "🔌", title: "API & Integrations", text: "Payment gateways, ERPs, CRMs, WhatsApp and courier APIs connected to your website.", href: "/services/api-development-integration/", linkLabel: "API Integration" },
];

const intlSoftwareServices = [
  { icon: "🚀", title: "MVP Development", text: "A working, production-ready product in about 30 days so you can raise money or start selling.", href: "/mvp-development-company/", linkLabel: "MVP Development" },
  { icon: "💻", title: "Custom Software & SaaS", text: "Multi-tenant SaaS, portals and internal tools built in Next.js, Node.js, Python and PostgreSQL.", href: "/custom-software-development-company/", linkLabel: "Custom Software" },
  { icon: "📱", title: "Mobile Apps", text: "iOS and Android apps from one Flutter or React Native codebase, through App Store approval.", href: "/services/mobile-app-development/", linkLabel: "Mobile Apps" },
  { icon: "🤖", title: "AI Automation & Voice Agents", text: "AI calling agents, chatbots and workflow automation that cut support and admin hours.", href: "/ai-automation-agency/", linkLabel: "AI Automation" },
  { icon: "👩‍💻", title: "Dedicated Developers", text: "Full-time senior engineers who join your stand-ups, repos and Slack.", href: "/hire-dedicated-developers/", linkLabel: "Hire Developers" },
  { icon: "☁️", title: "Cloud & DevOps", text: "AWS, GCP and Vercel infrastructure, CI/CD pipelines and monitoring.", href: "/services/devops-cicd/", linkLabel: "DevOps" },
];

const pkRelated = [
  { href: "/software-house-islamabad/", label: "Software House Islamabad" },
  { href: "/software-house-lahore/", label: "Software House Lahore" },
  { href: "/software-house-karachi/", label: "Software House Karachi" },
  { href: "/software-house-pakistan/", label: "Software House Pakistan" },
];

/* ------------------------------------------------------------------ */
/* Pakistan: software house city pages                                 */
/* ------------------------------------------------------------------ */

export type PkCity = {
  key: string;
  name: string;
  province: string;
  areas: string[];
  economy: string;
  extra: string;
  localFaq: { question: string; answer: string };
  links: { web?: string; seo?: string; dm?: string };
  keywords: string[];
};

function softwareHousePage(c: PkCity): LocalPage {
  const path = `/software-house-${c.key}/`;
  return {
    slug: `software-house-${c.key}`,
    path,
    group: "pakistan",
    navLabel: `Software House ${c.name}`,
    metaTitle: `Software House in ${c.name}`,
    metaDescription: `Software house serving ${c.name}: custom web apps, mobile apps, ERP and AI automation with fixed PKR pricing and full code ownership. Quote in 48 hours.`,
    keywords: c.keywords,
    serviceName: "Software Development",
    placeLabel: c.name,
    areaType: "City",
    areaServed: [c.name, c.province, "Pakistan"],
    priceRange: "PKR 80,000 - 2,500,000",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Pakistan", path: "/software-house-pakistan/" },
      { name: `Software House ${c.name}`, path },
    ],
    badge: `Serving ${c.name} · Remote-first delivery from Islamabad`,
    h1Before: "Software House in",
    h1Highlight: c.name,
    h1After: "for Web, App & AI",
    quickAnswer: `DEVSYNX is a software house serving businesses in ${c.name}. We build custom web applications, iOS and Android apps, ERP systems and AI automation with fixed PKR pricing and full source code ownership. Our engineering team is based in Islamabad and works with ${c.name} clients over WhatsApp and Google Meet, with on-site visits for project kickoff when needed. WhatsApp +92 302 946 2542 for a quote within 48 hours.`,
    whatsappText: `Hi DEVSYNX, I am in ${c.name} and need software built.`,
    stats: PK_STATS,
    introTag: `Why ${c.name} Businesses Work With Us`,
    introTitle: `Building Software for ${c.name}'s Businesses`,
    intro: [c.economy, c.extra],
    servicesTitle: `Software Development Services in ${c.name}`,
    services: softwareServices(c.name, c.links),
    caseStudiesTitle: "Software We Have Shipped for Pakistani Brands",
    caseStudyIds: PK_PAKISTAN_CASES,
    pricingTitle: `Software Development Prices in ${c.name}`,
    pricingNote: "Every project gets a written fixed-price proposal in PKR. No hidden costs.",
    pricingColumns: ["Project Type", "Typical Timeline", "Price Range (PKR)", "What's Included"],
    pricing: PK_SOFTWARE_PRICING,
    areasTitle: `Areas We Serve in ${c.name}`,
    areasNote: "Kickoff meetings on-site or online, then weekly demo calls.",
    areas: c.areas,
    related: pkRelated.filter((r) => r.href !== path).concat(c.links.seo ? [{ href: c.links.seo, label: `SEO Services ${c.name}` }] : []),
    faqs: [
      { question: `Does DEVSYNX have an office in ${c.name}?`, answer: `Our engineering office is in Islamabad. We serve ${c.name} clients remotely through WhatsApp, Google Meet and a shared project board, and we travel to ${c.name} for kickoff or milestone meetings on larger projects.` },
      { question: `How much does a software house in ${c.name} charge?`, answer: "A business website typically costs PKR 80,000 to 250,000, a custom web app or MVP PKR 350,000 to 1,200,000, a mobile app PKR 450,000 to 1,500,000 and an ERP rollout PKR 500,000 to 2,500,000. You get a fixed-price proposal before any work starts." },
      { question: "Who owns the source code?", answer: "You do. The Git repository, database and all design files are transferred to you at each paid milestone, with no lock-in." },
      c.localFaq,
      { question: "How long does it take to launch an app or web app?", answer: "A focused MVP usually goes live in 4 to 8 weeks. A business website takes 2 to 3 weeks. We agree the timeline in writing in the proposal." },
    ],
    ctaTitle: `Ready to Build Your Software in ${c.name}?`,
  };
}

const lahore: PkCity = {
  key: "lahore",
  name: "Lahore",
  province: "Punjab",
  areas: ["Gulberg", "DHA Lahore", "Johar Town", "Model Town", "Arfa Software Technology Park", "Bahria Town Lahore", "Garden Town", "Lahore Cantt", "Faisal Town", "Wapda Town", "Township", "Sundar Industrial Estate"],
  economy: "Lahore has more people searching for software, SEO and digital marketing services than any other city in Pakistan. Its fashion and textile brands, restaurants, real-estate developers and fast-growing D2C stores need software that handles real order volume: online stores that survive Eid sales, ERPs that track stock across outlets, and apps that their customers actually keep.",
  extra: "We have built exactly that for Pakistani fashion and consumer brands such as Silayi Pret and Luxora Women: Shopify stores that handled thousands of orders during festive launches, courier and payment integrations, and the tracking needed to see which ads produce sales.",
  localFaq: { question: "Do you work with Lahore fashion and e-commerce brands?", answer: "Yes. A large share of our Pakistani work is fashion and consumer e-commerce, including Shopify builds, COD and courier automation, and Meta and TikTok ad tracking. See the Silayi Pret and Luxora Women case studies." },
  links: { web: "/web-development-lahore/", seo: "/seo-services-lahore/", dm: "/digital-marketing-agency-lahore/" },
  keywords: ["software house in lahore", "software house lahore", "software company in lahore", "software companies in lahore", "best software house in lahore", "it company lahore"],
};

const karachi: PkCity = {
  key: "karachi",
  name: "Karachi",
  province: "Sindh",
  areas: ["Clifton", "DHA Karachi", "PECHS", "Shahrah-e-Faisal", "I.I. Chundrigar Road", "Gulshan-e-Iqbal", "North Nazimabad", "Bahadurabad", "Tariq Road", "Saddar", "Korangi Industrial Area", "SITE Area"],
  economy: "Karachi is Pakistan's commercial capital: the port, the banks, the importers and the distributors are here. Businesses in Karachi typically need software that connects operations: inventory and distribution systems, B2B ordering portals, logistics tracking and customer apps that integrate with existing accounting and ERP tools.",
  extra: "Our export and B2B work translates directly. For NW Canvas Industry we built an international catalogue and RFQ system that grew wholesale inquiries from North American buyers by 210%, and our HRMS product runs attendance and payroll for multi-site teams.",
  localFaq: { question: "Can you integrate with our existing ERP or accounting software?", answer: "Yes. We regularly connect web apps and stores to Odoo, QuickBooks, Xero, custom SQL databases and courier APIs. If your current system has no API, we can build a sync layer or migrate the data to a modern ERP." },
  links: { web: "/web-development-karachi/", seo: "/seo-services-karachi/", dm: "/digital-marketing-agency-karachi/" },
  keywords: ["software house in karachi", "software house karachi", "software company in karachi", "software companies in karachi", "best software house in karachi", "it company karachi"],
};

const faisalabad: PkCity = {
  key: "faisalabad",
  name: "Faisalabad",
  province: "Punjab",
  areas: ["D Ground", "Susan Road", "Madina Town", "Peoples Colony", "Kohinoor City", "Gulberg Faisalabad", "Satiana Road", "Jaranwala Road", "Canal Road", "M-3 Industrial City (FIEDMC)"],
  economy: "Faisalabad is the centre of Pakistan's textile industry, and its mills, exporters and garment units run on tight margins and complex supply chains. The software they need is practical: production and inventory tracking, order management for export buyers, costing sheets turned into real systems, and websites that win international RFQs.",
  extra: "We have built export catalogues and RFQ portals for Pakistani manufacturers and ERP modules for stock, production and accounts. We can digitise a paper or Excel process step by step instead of forcing a big-bang ERP switch.",
  localFaq: { question: "Can you build software for a textile mill or export house?", answer: "Yes. Typical projects are production and inventory tracking, export order management, buyer-facing catalogue and RFQ websites, and Odoo ERP setups with manufacturing and accounting modules." },
  links: {},
  keywords: ["software house in faisalabad", "software house faisalabad", "software company in faisalabad", "software companies in faisalabad", "it company faisalabad"],
};

const multan: PkCity = {
  key: "multan",
  name: "Multan",
  province: "Punjab",
  areas: ["Bosan Road", "Gulgasht Colony", "Multan Cantt", "Shah Rukn-e-Alam Colony", "DHA Multan", "Wapda Town Multan", "Nishtar Road", "Model Town Multan", "Bahauddin Zakariya University area"],
  economy: "Multan's economy runs on agriculture, agri-trading, textiles, education and healthcare. Businesses here are moving from registers and Excel to proper systems: dealer and distributor management, school and clinic management software, and online stores that sell beyond south Punjab.",
  extra: "We build these systems remotely with weekly video demos, so a Multan business gets the same engineering team as our international clients without paying Lahore or Karachi office overheads.",
  localFaq: { question: "Do you build school, clinic or distributor management systems?", answer: "Yes. We build custom management systems with role-based access, SMS and WhatsApp notifications, fee or invoice tracking and reporting dashboards. We start with the workflows you already use and digitise them in stages." },
  links: {},
  keywords: ["software house in multan", "software house multan", "software company in multan", "software companies in multan", "it company multan"],
};

const peshawar: PkCity = {
  key: "peshawar",
  name: "Peshawar",
  province: "Khyber Pakhtunkhwa",
  areas: ["University Town", "Hayatabad", "Saddar Peshawar", "Peshawar Cantt", "Gulbahar", "Ring Road", "Board Bazaar", "Warsak Road", "Dalazak Road"],
  economy: "Peshawar is the commercial hub of Khyber Pakhtunkhwa and a gateway for trade with Afghanistan and Central Asia. Traders, wholesalers, hospitals, colleges and a growing number of startups here need reliable software: inventory and trading systems, Urdu and Pashto-friendly customer apps, and websites that rank on Google.",
  extra: "Being two hours away in Islamabad, we can be on-site in Peshawar for workshops and kickoff meetings, then run the build remotely with weekly demos.",
  localFaq: { question: "Can you build apps in Urdu or Pashto?", answer: "Yes. We build right-to-left Urdu interfaces and multilingual apps that switch between English, Urdu and Pashto, including correct fonts and number formatting." },
  links: {},
  keywords: ["software house in peshawar", "software house peshawar", "software company in peshawar", "it company peshawar"],
};

/* ------------------------------------------------------------------ */
/* Pakistan: SEO, digital marketing and web development city pages      */
/* ------------------------------------------------------------------ */

function seoCityPage(city: string, key: string, areas: string[], context: string, keywords: string[]): LocalPage {
  const path = `/seo-services-${key}/`;
  return {
    slug: `seo-services-${key}`,
    path,
    group: "pakistan",
    navLabel: `SEO Services ${city}`,
    metaTitle: `SEO Services in ${city} | SEO Company & Expert`,
    metaDescription: `SEO services in ${city}: technical SEO, Google Maps ranking, content and link building run by developers. From PKR 45,000/month with monthly reports.`,
    keywords,
    serviceName: "SEO Services",
    placeLabel: city,
    areaType: "City",
    areaServed: [city, "Pakistan"],
    priceRange: "PKR 45,000 - 140,000 per month",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "SEO Services Pakistan", path: "/seo-services-pakistan/" },
      { name: `SEO Services ${city}`, path },
    ],
    badge: `SEO for ${city} businesses · Reports with real ranking data`,
    h1Before: "SEO Services in",
    h1Highlight: city,
    h1After: "That Bring Calls, Not Just Traffic",
    quickAnswer: `DEVSYNX is an SEO company serving ${city}. We rank businesses on Google Search and Google Maps through technical fixes, keyword-mapped content, local citations and quality backlinks. Because our SEO team works alongside our developers, site speed and technical issues are fixed directly instead of being listed in a report. Packages start at PKR 45,000 per month.`,
    whatsappText: `Hi DEVSYNX, I need SEO services for my business in ${city}.`,
    stats: [
      { value: "PKR 45k", label: "Packages From / mo" },
      { value: "3 – 6 Mo", label: "Typical Time to Page 1 (Local)" },
      { value: "Monthly", label: "Ranking Reports" },
      { value: "0", label: "Long Lock-In Contracts" },
    ],
    introTag: `SEO in ${city}`,
    introTitle: `What It Takes to Rank in ${city}`,
    intro: [
      context,
      "Our process starts with keyword research using real Google search volumes, then a page-by-page keyword map, then technical fixes. Only after that do we write content and build links. Every month you get a report showing rankings, Google Search Console clicks and leads, not vanity metrics.",
    ],
    servicesTitle: `SEO Services We Offer in ${city}`,
    services: seoServices(city),
    caseStudiesTitle: "SEO & Growth Results",
    caseStudyIds: ["ustaad-ae", "productboxeswholesale", "topcustomboxes", "acutepharmacy", "progenius-students-seo", "rankmora"],
    pricingTitle: `SEO Packages & Prices in ${city}`,
    pricingNote: "Month-to-month after the first 3 months. Ad spend and paid PR placements are not included.",
    pricingColumns: ["Package", "Typical Timeframe", "Monthly Price (PKR)", "What's Included"],
    pricing: PK_SEO_PRICING,
    areasTitle: `Areas We Serve in ${city}`,
    areasNote: "Local SEO campaigns for businesses across the city and nationwide campaigns for e-commerce brands.",
    areas,
    related: [
      { href: "/seo-services-islamabad/", label: "SEO Services Islamabad" },
      { href: "/seo-services-pakistan/", label: "SEO Services Pakistan" },
      { href: `/digital-marketing-agency-${key}/`, label: `Digital Marketing Agency ${city}` },
      { href: `/software-house-${key}/`, label: `Software House ${city}` },
    ].filter((r) => r.href !== path),
    faqs: [
      { question: `How much do SEO services cost in ${city}?`, answer: "Local SEO for one location starts at PKR 45,000 per month. Business SEO with technical fixes, content and link building is around PKR 85,000 per month, and national or e-commerce SEO from PKR 140,000 per month." },
      { question: "How long does SEO take to show results?", answer: "Local and low-competition keywords usually move within 3 to 6 months. Competitive national keywords take 6 to 12 months. You will see ranking movement in the monthly reports well before leads peak." },
      { question: "Do you guarantee first position on Google?", answer: "No honest agency can guarantee a position, because Google controls the rankings. We commit to the work: a published keyword map, monthly deliverables and transparent ranking data." },
      { question: `Can you rank my business on Google Maps in ${city}?`, answer: "Yes. Map pack ranking depends on your Google Business Profile, reviews, local citations and your distance from the searcher. We optimise all of these and help you collect reviews consistently." },
      { question: "Will you fix my website's speed and technical problems?", answer: "Yes. Our developers fix Core Web Vitals, indexing and schema issues directly on WordPress, Shopify and custom sites as part of the SEO work." },
    ],
    ctaTitle: `Get a Free SEO Audit for Your ${city} Business`,
  };
}

function dmCityPage(city: string, key: string, areas: string[], context: string, keywords: string[]): LocalPage {
  const path = `/digital-marketing-agency-${key}/`;
  return {
    slug: `digital-marketing-agency-${key}`,
    path,
    group: "pakistan",
    navLabel: `Digital Marketing Agency ${city}`,
    metaTitle: `Digital Marketing Agency in ${city}`,
    metaDescription: `Digital marketing agency in ${city}: Meta, Google and TikTok ads with server-side tracking, SEO and landing pages. Retainers from PKR 50,000/month.`,
    keywords,
    serviceName: "Digital Marketing",
    placeLabel: city,
    areaType: "City",
    areaServed: [city, "Pakistan"],
    priceRange: "PKR 50,000 - 140,000 per month",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Digital Marketing Agency Islamabad", path: "/digital-marketing-agency-islamabad/" },
      { name: `Digital Marketing Agency ${city}`, path },
    ],
    badge: `Performance marketing for ${city} brands`,
    h1Before: "Digital Marketing Agency in",
    h1Highlight: city,
    h1After: "Measured in Sales",
    quickAnswer: `DEVSYNX is a digital marketing agency serving ${city}. We run Meta, Instagram, Google and TikTok ads, SEO and landing pages, with server-side conversion tracking set up by our own developers so you can see which campaign produced each sale or lead. Management retainers start at PKR 50,000 per month.`,
    whatsappText: `Hi DEVSYNX, I need digital marketing for my business in ${city}.`,
    stats: [
      { value: "PKR 50k", label: "Retainers From / mo" },
      { value: "CAPI", label: "Server-Side Tracking" },
      { value: "Weekly", label: "Performance Reports" },
      { value: "In-House", label: "Developers & Designers" },
    ],
    introTag: `Marketing in ${city}`,
    introTitle: `Ads and SEO That Pay for Themselves in ${city}`,
    intro: [
      context,
      "Most agencies stop at boosting posts. We start by fixing tracking: Meta Conversions API, Google enhanced conversions and WhatsApp lead tracking. Then every rupee of ad spend can be traced to an order or a qualified lead, and the budget goes to the campaigns that actually sell.",
    ],
    servicesTitle: `Digital Marketing Services in ${city}`,
    services: dmServices(city),
    caseStudiesTitle: "Marketing & E-commerce Results",
    caseStudyIds: ["silayi-pret", "luxora-women", "scale-with-ads", "seven-figure-studio", "rebecca-minkoff", "ustaad-ae"],
    pricingTitle: `Digital Marketing Packages in ${city}`,
    pricingNote: "Management fee only. Ad spend is paid directly to Meta, Google or TikTok from your own account.",
    pricingColumns: ["Package", "Billing", "Management Fee (PKR)", "What's Included"],
    pricing: PK_DM_PRICING,
    areasTitle: `Areas We Serve in ${city}`,
    areasNote: "Campaigns targeting the whole city, specific neighbourhoods or nationwide delivery.",
    areas,
    related: [
      { href: "/digital-marketing-agency-islamabad/", label: "Digital Marketing Agency Islamabad" },
      { href: `/seo-services-${key}/`, label: `SEO Services ${city}` },
      { href: `/software-house-${key}/`, label: `Software House ${city}` },
      { href: "/seo-services-pakistan/", label: "SEO Services Pakistan" },
    ],
    faqs: [
      { question: `How much does a digital marketing agency charge in ${city}?`, answer: "Our management retainers are PKR 50,000 per month for one platform, PKR 85,000 for two to three platforms and PKR 140,000 for full-funnel e-commerce. Ad spend is separate and paid directly to the platforms." },
      { question: "What ad budget do I need to start?", answer: "For lead generation in one city, PKR 60,000 to 120,000 per month in ad spend is a practical starting point. E-commerce brands scaling nationally usually spend PKR 300,000 or more." },
      { question: "Do I keep my ad accounts and data?", answer: "Yes. Campaigns run in your own Business Manager and Google Ads accounts. We get partner access, and you keep everything if we stop working together." },
      { question: "Do you make the ad creatives?", answer: "Yes. Our designers produce static, carousel and short-form video creatives every month, and we test them against each other to find winners." },
    ],
    ctaTitle: `Grow Your ${city} Business With Measurable Marketing`,
  };
}

function webCityPage(city: string, key: string, areas: string[], context: string, keywords: string[]): LocalPage {
  const path = `/web-development-${key}/`;
  return {
    slug: `web-development-${key}`,
    path,
    group: "pakistan",
    navLabel: `Web Development ${city}`,
    metaTitle: `Web Development Company in ${city} | Website Design`,
    metaDescription: `Web development company serving ${city}: fast business websites, Shopify stores and custom web apps with SEO built in. Fixed PKR quotes from PKR 80,000.`,
    keywords,
    serviceName: "Web Development",
    placeLabel: city,
    areaType: "City",
    areaServed: [city, "Pakistan"],
    priceRange: "PKR 80,000 - 1,200,000",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: `Software House ${city}`, path: `/software-house-${key}/` },
      { name: `Web Development ${city}`, path },
    ],
    badge: `Websites & web apps for ${city} businesses`,
    h1Before: "Web Development Company in",
    h1Highlight: city,
    quickAnswer: `DEVSYNX is a web development company serving ${city}. We design and build business websites, e-commerce stores and custom web applications in Next.js, WordPress and Shopify, with on-page SEO, speed optimisation and local payment gateways included. Business websites start at PKR 80,000 with a fixed quote in writing.`,
    whatsappText: `Hi DEVSYNX, I need a website for my business in ${city}.`,
    stats: PK_STATS,
    introTag: `Websites in ${city}`,
    introTitle: `Websites Built to Rank and Sell in ${city}`,
    intro: [
      context,
      "Every website we deliver is mobile-first, loads in under two seconds, has its titles, schema and sitemap set up for Google, and connects to WhatsApp so enquiries reach you instantly. You own the domain, hosting account and code.",
    ],
    servicesTitle: `Web Development Services in ${city}`,
    services: webServices(city),
    caseStudiesTitle: "Websites We Have Built",
    caseStudyIds: ["silayi-pret", "nw-canvas", "zahh-beverages", "rbo-accounting", "doughi", "orvex-booths"],
    pricingTitle: `Website Development Prices in ${city}`,
    pricingNote: "Fixed quotes in PKR with domain, SSL, mobile responsiveness and on-page SEO included.",
    pricingColumns: ["Project", "Timeline", "Price Range (PKR)", "What's Included"],
    pricing: PK_WEB_PRICING,
    areasTitle: `Areas We Serve in ${city}`,
    areasNote: "Discovery calls online or in person, then weekly preview links while we build.",
    areas,
    related: [
      { href: "/web-development-islamabad/", label: "Web Development Islamabad" },
      { href: `/software-house-${key}/`, label: `Software House ${city}` },
      { href: `/seo-services-${key}/`, label: `SEO Services ${city}` },
      { href: "/services/custom-web-development/", label: "Custom Web Development" },
    ],
    faqs: [
      { question: `How much does a website cost in ${city}?`, answer: "A 5 to 10-page business website costs PKR 80,000 to 140,000, an e-commerce store PKR 120,000 to 350,000, and a custom web application PKR 350,000 to 1,200,000 depending on features." },
      { question: "How long does it take to build a website?", answer: "A business website takes 2 to 3 weeks and an e-commerce store 3 to 5 weeks, assuming content and product data are ready." },
      { question: "Do you use WordPress or custom code?", answer: "Both. WordPress is right when your team wants to edit content easily. Next.js is right when speed, SEO and custom features matter. We recommend one in the proposal and explain why." },
      { question: "Can you add JazzCash, Easypaisa and COD to my store?", answer: "Yes. We integrate JazzCash, Easypaisa, bank card gateways, cash on delivery and courier booking with TCS, Leopards, PostEx and others." },
    ],
    ctaTitle: `Get a Fixed Website Quote for Your ${city} Business`,
  };
}

const lahoreAreas = lahore.areas;
const karachiAreas = karachi.areas;

/* ------------------------------------------------------------------ */
/* Pakistan: national pages                                            */
/* ------------------------------------------------------------------ */

const pakistanCities = ["Islamabad", "Rawalpindi", "Lahore", "Karachi", "Faisalabad", "Multan", "Peshawar", "Sialkot", "Gujranwala", "Hyderabad", "Quetta", "Abbottabad"];

const softwareHousePakistan: LocalPage = {
  slug: "software-house-pakistan",
  path: "/software-house-pakistan/",
  group: "pakistan",
  navLabel: "Software House Pakistan",
  metaTitle: "Software House in Pakistan",
  metaDescription: "DEVSYNX is a software house in Pakistan building web apps, mobile apps, ERP and AI automation for Pakistani and international clients. 70+ public case studies.",
  keywords: ["software house in pakistan", "software house pakistan", "software development company in pakistan", "software company in pakistan", "best software house in pakistan", "top software companies in pakistan"],
  serviceName: "Software Development",
  placeLabel: "Pakistan",
  areaType: "Country",
  areaServed: ["Pakistan"],
  priceRange: "PKR 80,000 - 2,500,000",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Software House Pakistan", path: "/software-house-pakistan/" },
  ],
  badge: "SECP-registered · DEVSYNX Private Limited",
  h1Before: "Software House in",
  h1Highlight: "Pakistan",
  h1After: "Trusted at Home and Abroad",
  quickAnswer: "DEVSYNX Private Limited is a software house in Pakistan, headquartered in Islamabad. We build custom web applications, mobile apps, ERP systems, SaaS products and AI automation for businesses in every major Pakistani city and for clients in the US, UK, UAE and Europe. Every project has a fixed-price proposal and full source code ownership.",
  whatsappText: "Hi DEVSYNX, I need software built for my business in Pakistan.",
  stats: PK_STATS,
  introTag: "About DEVSYNX",
  introTitle: "A Pakistani Software House Built to Export Standards",
  intro: [
    "Most of our revenue comes from international clients in the United States, the UAE and Europe, and they expect production-grade code, written documentation and on-time delivery. Pakistani clients get the same engineering process, priced in rupees.",
    "We work with businesses in Islamabad and Rawalpindi in person, and with clients in Lahore, Karachi, Faisalabad, Multan, Peshawar and other cities remotely through weekly demo calls and a shared WhatsApp group with the engineers building their product.",
  ],
  servicesTitle: "Software Development Services Across Pakistan",
  services: softwareServices("Pakistan", { seo: "/seo-services-pakistan/" }),
  caseStudiesTitle: "Software We Have Shipped",
  caseStudyIds: ["silayi-pret", "nw-canvas", "zeparty", "devsynx-attendance-hr", "ai-calling-agent", "rbo-accounting"],
  pricingTitle: "Software Development Prices in Pakistan",
  pricingNote: "Typical ranges. Every project gets a fixed-price proposal in PKR before work starts.",
  pricingColumns: ["Project Type", "Typical Timeline", "Price Range (PKR)", "What's Included"],
  pricing: PK_SOFTWARE_PRICING,
  areasTitle: "Cities We Serve in Pakistan",
  areasNote: "In-person in the twin cities, remote everywhere else.",
  areas: pakistanCities,
  related: [
    { href: "/software-house-islamabad/", label: "Software House Islamabad" },
    { href: "/software-house-rawalpindi/", label: "Software House Rawalpindi" },
    { href: "/software-house-lahore/", label: "Software House Lahore" },
    { href: "/software-house-karachi/", label: "Software House Karachi" },
    { href: "/software-house-faisalabad/", label: "Software House Faisalabad" },
    { href: "/software-house-multan/", label: "Software House Multan" },
    { href: "/software-house-peshawar/", label: "Software House Peshawar" },
    { href: "/app-development-company-pakistan/", label: "App Development Pakistan" },
  ],
  faqs: [
    { question: "Is DEVSYNX a registered company?", answer: "Yes. DEVSYNX Private Limited is registered with the SECP, so we provide proper invoices and contracts for corporate and government clients." },
    { question: "Which cities in Pakistan do you serve?", answer: "We are based in Islamabad and serve Rawalpindi in person. We work remotely with clients in Lahore, Karachi, Faisalabad, Multan, Peshawar, Sialkot and other cities." },
    { question: "How much does software development cost in Pakistan?", answer: "A business website costs PKR 80,000 to 250,000, a custom web app PKR 350,000 to 1,200,000, a mobile app PKR 450,000 to 1,500,000 and an ERP rollout PKR 500,000 to 2,500,000." },
    { question: "Do you work with international clients from Pakistan?", answer: "Yes. Most of our clients are in the US, UK, UAE and Europe. We overlap 4 to 6 hours with US and UK business days and fully with the Gulf." },
  ],
  ctaTitle: "Start Your Software Project With DEVSYNX",
};

const seoServicesPakistan: LocalPage = {
  ...seoCityPage("Pakistan", "pakistan", pakistanCities, "", []),
  slug: "seo-services-pakistan",
  path: "/seo-services-pakistan/",
  navLabel: "SEO Services Pakistan",
  metaTitle: "SEO Services in Pakistan | SEO Company & SEO Expert",
  metaDescription: "SEO services in Pakistan: technical SEO, local SEO for every major city, e-commerce SEO and link building by a developer-led team. Packages from PKR 45,000/month.",
  keywords: ["seo services in pakistan", "seo services pakistan", "seo company in pakistan", "seo expert in pakistan", "seo agency pakistan", "best seo company in pakistan"],
  areaType: "Country",
  areaServed: ["Pakistan"],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "SEO Services Pakistan", path: "/seo-services-pakistan/" },
  ],
  badge: "Nationwide SEO · Local campaigns in every major city",
  h1Before: "SEO Services in",
  h1Highlight: "Pakistan",
  h1After: "Run by Developers",
  quickAnswer: "DEVSYNX is an SEO company in Pakistan that ranks businesses on Google Search, Google Maps and AI answers. We combine technical SEO done by developers with keyword-mapped content and link building, and we run local campaigns in Islamabad, Lahore, Karachi and every other major city. Packages start at PKR 45,000 per month.",
  whatsappText: "Hi DEVSYNX, I need SEO services for my business in Pakistan.",
  introTag: "SEO in Pakistan",
  introTitle: "How We Rank Pakistani Businesses",
  intro: [
    "Search demand in Pakistan is concentrated in city keywords. Our own research shows Lahore alone gets more searches for SEO, software and marketing services than Islamabad and Rawalpindi combined. A good SEO plan covers the national terms and the city terms your customers actually type.",
    "Our process starts with keyword research using real Google search volumes, then a page-by-page keyword map, then technical fixes. After that we write content and build links, and every month you get a report with rankings, Search Console clicks and leads.",
  ],
  servicesTitle: "SEO Services We Offer Across Pakistan",
  pricingTitle: "SEO Packages & Prices in Pakistan",
  areasTitle: "Cities We Run SEO Campaigns In",
  related: [
    { href: "/seo-services-islamabad/", label: "SEO Services Islamabad" },
    { href: "/seo-services-lahore/", label: "SEO Services Lahore" },
    { href: "/seo-services-karachi/", label: "SEO Services Karachi" },
    { href: "/software-house-pakistan/", label: "Software House Pakistan" },
  ],
  faqs: [
    { question: "How much do SEO services cost in Pakistan?", answer: "Local SEO for one location starts at PKR 45,000 per month, business SEO is around PKR 85,000 per month and national or e-commerce SEO starts at PKR 140,000 per month." },
    { question: "Can you rank my business in several cities?", answer: "Yes. We build a dedicated, genuinely useful landing page for each city you serve and support it with local citations, reviews and Google Business Profile work where you have a physical location." },
    { question: "How long does SEO take in Pakistan?", answer: "Local keywords usually move within 3 to 6 months. Competitive national keywords take 6 to 12 months." },
    { question: "Do you guarantee rankings?", answer: "No honest agency can. We commit to transparent work: a published keyword map, monthly deliverables and real ranking data from Google Search Console." },
  ],
  ctaTitle: "Get a Free SEO Audit for Your Business",
};

const appDevelopmentPakistan: LocalPage = {
  slug: "app-development-company-pakistan",
  path: "/app-development-company-pakistan/",
  group: "pakistan",
  navLabel: "App Development Pakistan",
  metaTitle: "Mobile App Development Company in Pakistan",
  metaDescription: "Mobile app development company in Pakistan: iOS and Android apps in Flutter and React Native, from MVP to App Store launch. Fixed PKR or USD pricing.",
  keywords: ["mobile app development pakistan", "app development company in pakistan", "mobile app development company pakistan", "app developers in pakistan", "android app development pakistan", "ios app development pakistan"],
  serviceName: "Mobile App Development",
  placeLabel: "Pakistan",
  areaType: "Country",
  areaServed: ["Pakistan"],
  priceRange: "PKR 450,000 - 1,500,000",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "App Development Pakistan", path: "/app-development-company-pakistan/" },
  ],
  badge: "iOS & Android · Flutter & React Native",
  h1Before: "Mobile App Development Company in",
  h1Highlight: "Pakistan",
  quickAnswer: "DEVSYNX is a mobile app development company in Pakistan. We design and build iOS and Android apps from a single Flutter or React Native codebase, including the backend, admin panel, payments and App Store and Google Play submission. A typical MVP app costs PKR 450,000 to 1,500,000 and launches in 6 to 12 weeks.",
  whatsappText: "Hi DEVSYNX, I want to build a mobile app.",
  stats: [
    { value: "45,000+", label: "Concurrent Users on ZeParty" },
    { value: "2", label: "Stores, One Codebase" },
    { value: "6 – 12 Wk", label: "Typical Launch" },
    { value: "100%", label: "Code Ownership" },
  ],
  introTag: "Apps That Scale",
  introTitle: "From Idea to App Store",
  intro: [
    "Building an app is more than screens. It needs a backend that stays fast under load, an admin panel your team can use, payments that work with JazzCash, Easypaisa and cards, and a release process that passes Apple and Google review the first time.",
    "Our live-audio app ZeParty handles 45,000+ simultaneous listeners with sub-100ms latency, and our Suuvo and Spicify apps run social feeds and video at scale. That experience goes into every app we build, whether it is a delivery app for one city or a SaaS product for global users.",
  ],
  servicesTitle: "App Development Services",
  services: [
    { icon: "📱", title: "Flutter & React Native Apps", text: "One codebase for iOS and Android, with native performance and a single team to maintain it." },
    { icon: "🧩", title: "Backend & Admin Panel", text: "APIs, databases and a web admin panel to manage users, orders and content." },
    { icon: "💳", title: "Payments & Wallets", text: "JazzCash, Easypaisa, Stripe, Apple Pay and Google Pay, plus in-app subscriptions." },
    { icon: "🛵", title: "Delivery & Booking Apps", text: "Customer, rider and vendor apps with live tracking, dispatch and notifications." },
    { icon: "🤖", title: "AI Features", text: "Chat assistants, voice input, recommendations and image recognition inside your app.", href: "/ai-automation-agency/", linkLabel: "AI Automation" },
    { icon: "🚀", title: "Store Launch & ASO", text: "App Store and Google Play submission, store listing optimisation and crash monitoring." },
  ],
  caseStudiesTitle: "Apps We Have Built",
  caseStudyIds: ["zeparty", "suuvo", "spicify-app", "superhuman-mail", "devsynx-attendance-hr", "sigma-smart-tech"],
  pricingTitle: "App Development Cost in Pakistan",
  pricingNote: "Fixed-price proposals in PKR for Pakistani clients and USD for international clients.",
  pricingColumns: ["App Type", "Typical Timeline", "Price Range (PKR)", "What's Included"],
  pricing: [
    ["Simple App / MVP", "6 – 8 Weeks", "PKR 450,000 – 800,000", "Up to 15 screens, login, backend API, admin panel, store submission"],
    ["E-commerce or Booking App", "8 – 12 Weeks", "PKR 700,000 – 1,500,000", "Catalogue, cart, payments, order tracking, push notifications, admin panel"],
    ["On-Demand / Marketplace", "12 – 20 Weeks", "From PKR 1,500,000", "Customer, vendor and rider apps, live tracking, dispatch, commissions"],
    ["App Maintenance", "Ongoing", "From PKR 60,000 / mo", "OS updates, bug fixes, monitoring, small features"],
  ],
  areasTitle: "Cities We Build Apps For",
  areasNote: "Clients across Pakistan and abroad.",
  areas: pakistanCities,
  related: [
    { href: "/services/mobile-app-development/", label: "Mobile App Development Services" },
    { href: "/software-house-pakistan/", label: "Software House Pakistan" },
    { href: "/mvp-development-company/", label: "MVP Development" },
    { href: "/app-development-company-dubai/", label: "App Development Dubai" },
  ],
  faqs: [
    { question: "How much does it cost to make an app in Pakistan?", answer: "A simple app or MVP costs PKR 450,000 to 800,000, an e-commerce or booking app PKR 700,000 to 1,500,000, and a multi-sided marketplace from PKR 1,500,000." },
    { question: "Flutter or React Native: which is better?", answer: "Both produce one codebase for iOS and Android. We usually choose Flutter for design-heavy consumer apps and React Native when your team already uses React for the web. We explain the choice in the proposal." },
    { question: "Do you publish the app on the App Store and Google Play?", answer: "Yes. We handle developer accounts, store listings, review guidelines and the release itself. The apps are published under your own accounts." },
    { question: "Can you take over an app built by another company?", answer: "Yes. We start with a code audit, fix critical issues and then continue development. You get a written report on the code quality first." },
  ],
  ctaTitle: "Get a Fixed Quote for Your App",
};

/* ------------------------------------------------------------------ */
/* International city pages                                            */
/* ------------------------------------------------------------------ */

export type IntlConfig = {
  slug: string;
  service: "app" | "software" | "web";
  city: string;
  country: string;
  countryHub: string;
  currency: string;
  areas: string[];
  caseStudyIds: string[];
  keywords: string[];
  intro: string[];
  quickAnswerExtra: string;
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
  highlights?: LocalPage["highlights"];
  guideTitle?: string;
  guide?: LocalPage["guide"];
};

const intlServiceLabel = {
  app: { name: "Mobile App Development", h1: "App Development Company in", nav: "App Development" },
  software: { name: "Software Development", h1: "Software Development Company in", nav: "Software Development" },
  web: { name: "Web Design & Development", h1: "Web Design Company in", nav: "Web Design" },
};

function intlPage(c: IntlConfig): LocalPage {
  const s = intlServiceLabel[c.service];
  const path = `/${c.slug}/`;
  return {
    slug: c.slug,
    path,
    group: "international",
    navLabel: `${s.nav} ${c.city}`,
    metaTitle: `${s.h1} ${c.city}`,
    metaDescription: `${s.name} for ${c.city} businesses: senior engineers, fixed ${c.currency} pricing and full code ownership. See case studies; get a proposal in 48 hours.`,
    keywords: c.keywords,
    serviceName: s.name,
    placeLabel: c.city,
    areaType: "City",
    areaServed: [c.city, c.country],
    breadcrumbs: [
      { name: "Home", path: "/" },
      ...(c.countryHub ? [{ name: c.country, path: c.countryHub }] : []),
      { name: `${s.nav} ${c.city}`, path },
    ],
    badge: `Serving ${c.city} · ${c.country}`,
    h1Before: s.h1,
    h1Highlight: c.city,
    quickAnswer: `DEVSYNX is a ${s.name.toLowerCase()} company serving ${c.city}. ${c.quickAnswerExtra} Every project has a fixed ${c.currency} price or a flat monthly rate, milestone payments and full source code ownership.`,
    whatsappText: `Hi DEVSYNX, I am in ${c.city} and need ${s.name.toLowerCase()}.`,
    stats: GLOBAL_STATS,
    introTag: `${c.city} Projects`,
    introTitle: `How We Work With ${c.city} Companies`,
    intro: c.intro,
    servicesTitle: `What We Build for ${c.city} Businesses`,
    services: intlSoftwareServices,
    caseStudiesTitle: `Work for Clients in ${c.country} and Beyond`,
    caseStudyIds: c.caseStudyIds,
    pricingTitle: "Ways to Work With Us",
    pricingNote: `Every engagement is quoted in ${c.currency} after a free scoping call. You receive a written proposal within 48 hours.`,
    pricingColumns: INTL_ENGAGEMENT_COLUMNS,
    pricing: intlEngagement(c.currency),
    areasTitle: `Areas We Serve in and Around ${c.city}`,
    areasNote: "Remote delivery with scheduled overlap hours and video demos every sprint.",
    areas: c.areas,
    related: c.related,
    faqs: c.faqs,
    ctaTitle: `Start Your ${c.city} Project`,
    highlights: c.highlights,
    guideTitle: c.guideTitle,
    guide: c.guide,
  };
}

const uaeCases = ["rbo-accounting", "ustaad-ae", "smart-links-cabling", "alpha-ahead-real-estate", "ygi-holiday-homes", "horizone-invest"];
const usCases = ["contractor-leads", "ai-calling-agent", "ballchart", "rebecca-minkoff", "qualified-leads-x", "saviored"];
const dubaiAreas = ["Business Bay", "Dubai Marina", "DIFC", "Downtown Dubai", "JLT", "Dubai Internet City", "Dubai Silicon Oasis", "Al Quoz", "Deira", "Abu Dhabi", "Sharjah", "Ajman"];

const intlPages: LocalPage[] = [
  intlPage({
    slug: "app-development-company-dubai",
    service: "app",
    city: "Dubai",
    country: "UAE",
    countryHub: "/uae/",
    currency: "AED or USD",
    areas: dubaiAreas,
    caseStudyIds: ["zeparty", "ustaad-ae", "ygi-holiday-homes", "horizone-invest", "suuvo", "spicify-app"],
    keywords: ["app development company dubai", "app development company uae", "mobile app development company dubai", "mobile app developers dubai", "app developers dubai", "mobile app development uae"],
    quickAnswerExtra: "We build iOS and Android apps in Flutter and React Native, with Arabic and English interfaces, UAE payment gateways and the backend and admin panel included.",
    intro: [
      "Dubai businesses expect apps that work in Arabic and English, take payments through local gateways and Apple Pay, and launch fast. Our team works on Gulf time with only one hour of difference, so your product owner gets same-day answers.",
      "We have built marketplaces and booking platforms for UAE clients such as Ustaad.ae and YGI Holiday Homes, and our live-audio app ZeParty serves 45,000+ concurrent users across the Middle East and Southeast Asia.",
      "Because our engineers are based in Pakistan, a Dubai company typically pays significantly less than local agency rates for the same senior team, without the communication problems of far-off time zones.",
    ],
    faqs: [
      { question: "How much does app development cost in Dubai?", answer: "It depends on scope. After a free scoping call we send a fixed price in AED or USD. Because our team is offshore, the cost is typically well below local Dubai agency rates for the same features." },
      { question: "Can you build Arabic (RTL) apps?", answer: "Yes. We build bilingual Arabic and English apps with correct right-to-left layouts, Arabic fonts and localised number and date formats." },
      { question: "Which payment gateways do you integrate in the UAE?", answer: "We regularly integrate Stripe, Checkout.com, Telr, PayTabs, Network International, Tabby and Tamara, plus Apple Pay and Google Pay." },
      { question: "Do you work on UAE time?", answer: "Yes. Pakistan is one hour ahead of the UAE, so our working day fully overlaps with yours." },
      { question: "Who owns the app and the code?", answer: "You do. The app is published under your own App Store and Google Play accounts, and the code repository is transferred to you." },
    ],
    related: [
      { href: "/uae/", label: "Software Development UAE" },
      { href: "/web-design-company-dubai/", label: "Web Design Company Dubai" },
      { href: "/software-development-company-dubai/", label: "Software Development Dubai" },
      { href: "/app-development-company-pakistan/", label: "App Development Pakistan" },
    ],
  }),
  intlPage({
    slug: "web-design-company-dubai",
    service: "web",
    city: "Dubai",
    country: "UAE",
    countryHub: "/uae/",
    currency: "AED or USD",
    areas: dubaiAreas,
    caseStudyIds: ["rbo-accounting", "smart-links-cabling", "alpha-ahead-real-estate", "ygi-holiday-homes", "fix-it-bilal", "ustaad-ae"],
    keywords: ["web design company dubai", "web development company dubai", "web design company uae", "website design dubai", "web design company sharjah", "web design company abu dhabi"],
    quickAnswerExtra: "We design and develop fast, bilingual (Arabic and English) websites and e-commerce stores in Next.js, WordPress and Shopify, with SEO, Google Business Profile setup and WhatsApp lead capture built in.",
    intro: [
      "Most of our UAE work is for service companies, real-estate firms and trading businesses that need a website which ranks on Google and turns visitors into WhatsApp enquiries. Examples include RBO Accounting Services, Smart-Links Cabling Solutions, Alpha Ahead Real Estate and YGI Holiday Homes.",
      "We build the website and handle the SEO in the same team, so the site launches with clean structure, fast mobile load times and the schema Google needs for map and rich results in Dubai, Abu Dhabi and Sharjah.",
    ],
    faqs: [
      { question: "How much does a website cost in Dubai?", answer: "We quote a fixed price in AED or USD after a short call. Because our design and development team is offshore, our prices are typically well below local Dubai agency rates for comparable work." },
      { question: "Can you build Arabic and English websites?", answer: "Yes. We build bilingual sites with proper right-to-left Arabic layouts, hreflang tags and separate SEO for each language." },
      { question: "Do you also do SEO for Dubai businesses?", answer: "Yes. Every site launches with on-page SEO, and we offer ongoing SEO and Google Business Profile management. See our work for Ustaad.ae." },
      { question: "How long does a website take?", answer: "A business website takes 2 to 4 weeks and an e-commerce store 3 to 6 weeks, depending on content and integrations." },
    ],
    related: [
      { href: "/uae/", label: "Software Development UAE" },
      { href: "/app-development-company-dubai/", label: "App Development Dubai" },
      { href: "/software-development-company-dubai/", label: "Software Development Dubai" },
      { href: "/services/seo-services/", label: "SEO Services" },
    ],
  }),
  intlPage({
    slug: "software-development-company-dubai",
    service: "software",
    city: "Dubai",
    country: "UAE",
    countryHub: "/uae/",
    currency: "AED or USD",
    areas: dubaiAreas,
    caseStudyIds: uaeCases,
    keywords: ["software development company dubai", "software development company uae", "software company dubai", "custom software development dubai", "software house dubai", "ai development company dubai"],
    quickAnswerExtra: "We build custom software, SaaS platforms, ERP and CRM systems and AI automation for UAE companies, working fully within Gulf business hours.",
    intro: [
      "UAE companies come to us for systems that local off-the-shelf tools don't cover: real-estate investment portals, booking and property management, accounting workflows and custom CRMs. We have shipped these for Horizone Invest, YGI Holiday Homes and RBO Accounting.",
      "We also build AI automation for Gulf businesses: WhatsApp Business API assistants, Arabic and English chatbots and AI calling agents that qualify leads before your sales team calls back.",
    ],
    faqs: [
      { question: "Why hire a software company outside Dubai?", answer: "You get senior engineers at offshore rates with full working-hour overlap. Pakistan is one hour ahead of the UAE, and we run weekly video demos and milestone payments so you always see progress before paying." },
      { question: "Can you sign an NDA and a UAE-compliant contract?", answer: "Yes. We sign NDAs before scoping and contract through DEVSYNX Private Limited, with IP assignment to your UAE entity." },
      { question: "Do you build AI chatbots in Arabic?", answer: "Yes. We build Arabic and English chatbots and voice agents on WhatsApp, websites and phone lines, connected to your CRM." },
      { question: "Can you maintain software built by another vendor?", answer: "Yes. We start with a code audit and written report, then take over maintenance and new development." },
    ],
    related: [
      { href: "/uae/", label: "Software Development UAE" },
      { href: "/app-development-company-dubai/", label: "App Development Dubai" },
      { href: "/web-design-company-dubai/", label: "Web Design Dubai" },
      { href: "/ai-automation-agency/", label: "AI Automation Agency" },
    ],
  }),
  intlPage({
    slug: "software-development-company-riyadh",
    service: "software",
    city: "Riyadh",
    country: "Saudi Arabia",
    countryHub: "",
    currency: "SAR or USD",
    areas: ["Riyadh", "Jeddah", "Dammam", "Khobar", "Mecca", "Medina", "King Abdullah Financial District", "Olaya"],
    caseStudyIds: ["mizn-abayas", "top-performance", "horizone-invest", "zeparty", "ai-calling-agent", "whatsapp-business-api"],
    keywords: ["software development company riyadh", "software company in saudi arabia", "app development company riyadh", "software house saudi arabia", "mobile app development saudi arabia"],
    quickAnswerExtra: "We build Arabic and English web platforms, mobile apps and AI automation for Saudi businesses, with the payment gateways and e-invoicing integrations the Saudi market requires.",
    intro: [
      "Saudi Arabia's Vision 2030 has pushed companies in retail, real estate, healthcare and logistics to digitise quickly. They need bilingual apps, Mada and Apple Pay payments, and systems that connect to ZATCA e-invoicing.",
      "We already work across the Gulf, including e-commerce for MIZN Abayas and Top Performance Qatar, and our team works only two hours ahead of Riyadh time.",
    ],
    faqs: [
      { question: "Do you integrate Mada, STC Pay and Tabby?", answer: "Yes. We integrate Saudi payment methods through gateways such as HyperPay, Moyasar, PayTabs and Checkout.com, plus Tabby and Tamara instalments." },
      { question: "Can you build Arabic-first apps?", answer: "Yes. We design Arabic-first right-to-left interfaces with English as a second language, including localised dates, numbers and fonts." },
      { question: "Can your software connect to ZATCA e-invoicing?", answer: "Yes. We build ZATCA-compliant invoice generation or integrate your platform with an approved e-invoicing provider." },
      { question: "What time zone do you work in?", answer: "Pakistan is two hours ahead of Saudi Arabia, so our working day overlaps almost completely with yours." },
    ],
    related: [
      { href: "/software-development-company-dubai/", label: "Software Development Dubai" },
      { href: "/app-development-company-dubai/", label: "App Development Dubai" },
      { href: "/ai-automation-agency/", label: "AI Automation Agency" },
      { href: "/hire-dedicated-developers/", label: "Hire Dedicated Developers" },
    ],
  }),
  intlPage({
    slug: "software-development-company-london",
    service: "software",
    city: "London",
    country: "United Kingdom",
    countryHub: "/uk/",
    currency: "GBP",
    areas: ["City of London", "Shoreditch", "Canary Wharf", "Westminster", "Camden", "King's Cross", "Manchester", "Birmingham", "Leeds", "Bristol", "Glasgow"],
    caseStudyIds: ["doughi", "spicify-app", "quickdoctor-ie", "mdt-control", "rankmora", "entiix"],
    keywords: ["software development company london", "app development company london", "custom software development company uk", "software development company uk", "mobile app developers london", "outsource software development uk"],
    quickAnswerExtra: "We build custom software, SaaS products, mobile apps and AI automation for UK startups and SMEs, with 4 to 5 hours of daily overlap with UK working hours.",
    intro: [
      "London startups and agencies use us as their engineering team: we build MVPs, extend existing SaaS products and provide dedicated developers who join their stand-ups. Recent UK and European work includes Doughi Cookies UK, the Spicify recipe app and the QuickDoctor telehealth platform in Ireland.",
      "UK clients get GDPR-aware architecture, data hosted in UK or EU regions, contracts with full IP assignment and a fixed GBP price or monthly rate.",
    ],
    faqs: [
      { question: "How many hours do you overlap with UK time?", answer: "Pakistan is 4 hours ahead of the UK in summer and 5 in winter. Our engineers work into the UK afternoon, giving 4 to 5 hours of live overlap every day." },
      { question: "Is my data handled under GDPR?", answer: "Yes. We host data in UK or EU cloud regions, sign a data processing agreement and follow GDPR-aware practices for access control and retention." },
      { question: "Can I hire a dedicated developer instead of a fixed project?", answer: "Yes. Dedicated developers work full-time on your product at a flat monthly GBP rate, with a one-month minimum." },
      { question: "Do you work with UK agencies as a white-label partner?", answer: "Yes. We build under NDA for UK digital agencies, and our name never appears on the work." },
    ],
    related: [
      { href: "/uk/", label: "Software Development UK" },
      { href: "/hire-dedicated-developers/", label: "Hire Dedicated Developers" },
      { href: "/mvp-development-company/", label: "MVP Development Company" },
      { href: "/custom-software-development-company/", label: "Custom Software Development" },
    ],
  }),
  intlPage({
    slug: "app-development-company-dallas",
    service: "app",
    city: "Dallas",
    country: "United States",
    countryHub: "/usa/",
    currency: "USD",
    areas: ["Dallas", "Fort Worth", "Plano", "Frisco", "Irving", "Arlington", "Richardson", "Austin", "Houston", "San Antonio"],
    caseStudyIds: ["contractor-leads", "roofing-systems", "ballchart", "sigma-smart-tech", "ai-calling-agent", "egg-produce"],
    keywords: ["app development company dallas", "mobile app developers dallas", "app developers dallas", "mobile app development dallas", "app development company texas", "app development company houston"],
    quickAnswerExtra: "We build iOS and Android apps, web platforms and AI automation for Dallas–Fort Worth startups and service businesses, with daily overlap with Central Time.",
    intro: [
      "Many of our US clients are service and field businesses: contractors, roofers, home services and B2B sales teams. For them we have built lead-generation platforms, dispatch apps and AI calling agents that answer and qualify leads 24/7, including Contractor Leads US and Roofing Systems Co.",
      "Dallas companies pay US-agency rates for local teams. Our senior engineers deliver the same stack (Flutter, React Native, Node.js, AWS) at offshore rates, with a fixed USD price, milestone payments and morning-Central-Time overlap for daily calls.",
    ],
    faqs: [
      { question: "How much does app development cost for a Dallas business?", answer: "We give a fixed USD quote after a free scoping call. Because our team is offshore, the cost is typically a fraction of Dallas agency rates for the same scope." },
      { question: "What hours do you overlap with Central Time?", answer: "Our engineers cover the US morning, which gives 3 to 4 hours of live overlap with Central Time each weekday, plus async updates in Slack." },
      { question: "Can you build field-service and dispatch apps?", answer: "Yes. We build apps for job scheduling, technician dispatch, live tracking, quotes, invoicing and customer notifications." },
      { question: "Do you sign NDAs and US contracts?", answer: "Yes. We sign NDAs before scoping and assign all IP to your US entity in the contract." },
    ],
    related: [
      { href: "/usa/", label: "Software Development USA" },
      { href: "/software-development-company-new-york/", label: "Software Development New York" },
      { href: "/hire-dedicated-developers/", label: "Hire Dedicated Developers" },
      { href: "/ai-automation-agency/", label: "AI Automation Agency" },
    ],
  }),
  intlPage({
    slug: "software-development-company-new-york",
    service: "software",
    city: "New York",
    country: "United States",
    countryHub: "/usa/",
    currency: "USD",
    areas: ["Manhattan", "Brooklyn", "Queens", "Jersey City", "Long Island", "Westchester", "Boston", "Philadelphia", "Chicago", "Miami"],
    caseStudyIds: ["rebecca-minkoff", "qualified-leads-x", "seven-figure-studio", "thestarmint", "employee-security-crm", "saviored"],
    keywords: ["software development company new york", "custom software development company", "software development company nyc", "app development company new york", "software development company chicago", "outsource software development"],
    quickAnswerExtra: "We build custom software, SaaS products, e-commerce platforms and AI automation for New York startups, brands and agencies, with daily overlap with Eastern Time.",
    intro: [
      "New York clients range from fashion brands like Rebecca Minkoff to B2B sales platforms like Qualified Leads X and agencies like Seven Figure Studio. What they share is a need for senior engineers who ship quickly without the NYC price tag.",
      "We work as an extension of your team: Slack, Jira or Linear, your GitHub, and a live overlap every Eastern Time morning. Projects are fixed-price per milestone, or you can hire dedicated developers at a flat monthly USD rate.",
    ],
    faqs: [
      { question: "How do you compare with New York agencies on cost?", answer: "Our senior engineers are based in Pakistan, so the same scope typically costs a fraction of a New York agency quote. You still get a US-style process: written specs, sprint demos and milestone billing." },
      { question: "What overlap do you have with Eastern Time?", answer: "Our team covers the Eastern Time morning, giving 3 to 4 hours of live overlap each weekday, and we answer Slack messages through the rest of your day." },
      { question: "Can you work inside our existing codebase?", answer: "Yes. Most New York engagements start inside an existing React, Next.js, Node.js or Python codebase. We begin with a short audit and then pick up tickets from your backlog." },
      { question: "Who owns the IP?", answer: "You do. Our contract assigns all IP and code to your company, and work happens in your own repositories." },
    ],
    related: [
      { href: "/usa/", label: "Software Development USA" },
      { href: "/app-development-company-dallas/", label: "App Development Dallas" },
      { href: "/custom-software-development-company/", label: "Custom Software Development" },
      { href: "/hire-dedicated-developers/", label: "Hire Dedicated Developers" },
    ],
  }),

  /* ---------------- Australia ---------------- */
  intlPage({
    slug: "software-development-company-sydney",
    service: "software",
    city: "Sydney",
    country: "Australia",
    countryHub: "/australia/",
    currency: "AUD",
    areas: ["Sydney CBD", "North Sydney", "Parramatta", "Surry Hills", "Macquarie Park", "Chatswood", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra", "Gold Coast"],
    caseStudyIds: ["quickdoctor-ie", "contractor-leads", "rankmora", "ai-calling-agent", "entiix", "employee-security-crm"],
    keywords: ["software development company sydney", "software development company australia", "custom software development sydney", "software developers sydney", "offshore software development australia", "app development company sydney"],
    quickAnswerExtra: "We build custom software, SaaS platforms, mobile apps and AI automation for Australian startups and SMEs, with 3 to 4 hours of live overlap in the Sydney afternoon.",
    intro: [
      "Australian companies face some of the highest developer salaries in the world, and local agency quotes reflect that. Sydney startups and SMEs use us to build MVPs, extend existing products and add dedicated engineers at offshore rates, while keeping senior-level quality and a clear process.",
      "Our team starts early, so our working day covers the Sydney afternoon. You get daily stand-ups at a sensible local time, a demo every sprint and milestone payments only after you have tested the work.",
      "For Australian clients we host data in the AWS Sydney region by default and follow the Australian Privacy Principles under the Privacy Act 1988. Telehealth and regulated-industry experience, such as our QuickDoctor platform in Ireland, carries over directly.",
    ],
    faqs: [
      { question: "What hours do you overlap with Sydney time?", answer: "Sydney is 5 to 6 hours ahead of Pakistan depending on daylight saving. Our team starts early, giving 3 to 4 hours of live overlap every Sydney afternoon, plus async updates in Slack." },
      { question: "Where is our data hosted?", answer: "By default in the AWS or Google Cloud Sydney region. We follow the Australian Privacy Principles and sign a data processing agreement on request." },
      { question: "How do your prices compare with Sydney agencies?", answer: "Our engineers are offshore, so the same scope typically costs a fraction of a Sydney agency quote. We quote a fixed price in AUD per milestone, or a flat monthly AUD rate for dedicated developers." },
      { question: "Which payment and business tools do you integrate in Australia?", answer: "Stripe, PayPal, Afterpay, Zip and Square for payments, and Xero, MYOB, HubSpot and Salesforce on the business side." },
    ],
    related: [
      { href: "/australia/", label: "Software Development Australia" },
      { href: "/app-development-company-melbourne/", label: "App Development Melbourne" },
      { href: "/hire-dedicated-developers/", label: "Hire Dedicated Developers" },
      { href: "/mvp-development-company/", label: "MVP Development" },
    ],
  }),
  intlPage({
    slug: "app-development-company-melbourne",
    service: "app",
    city: "Melbourne",
    country: "Australia",
    countryHub: "/australia/",
    currency: "AUD",
    areas: ["Melbourne CBD", "Southbank", "Docklands", "Richmond", "Cremorne", "St Kilda", "Box Hill", "Geelong", "Sydney", "Brisbane", "Adelaide", "Hobart"],
    caseStudyIds: ["zeparty", "suuvo", "spicify-app", "superhuman-mail", "sigma-smart-tech", "saviored"],
    keywords: ["app development company melbourne", "mobile app developers melbourne", "app developers melbourne", "app development company australia", "mobile app development australia", "flutter developers australia"],
    quickAnswerExtra: "We build iOS and Android apps in Flutter and React Native for Melbourne startups and businesses, including the backend, admin panel and App Store launch.",
    intro: [
      "Melbourne has a strong startup scene around Cremorne and the CBD, and a lot of those startups need a mobile app shipped before their runway runs out. We build production-ready apps from one Flutter or React Native codebase, so you launch on iOS and Android together.",
      "Our apps run at real scale: ZeParty serves 45,000+ concurrent listeners with sub-100ms audio latency, and Suuvo and Spicify handle social video and recipe feeds. You get that experience at an offshore price, with demos every sprint in the Melbourne afternoon.",
    ],
    faqs: [
      { question: "How much does app development cost in Melbourne?", answer: "We send a fixed AUD price after a free scoping call. Because our team is offshore, the cost is typically well below Melbourne agency rates for the same features." },
      { question: "Do you publish to the App Store and Google Play?", answer: "Yes. We handle the store listings, review guidelines and the release, all under your own developer accounts." },
      { question: "What time overlap do you have with Melbourne?", answer: "Melbourne is 5 to 6 hours ahead of Pakistan. Our early start gives 3 to 4 hours of live overlap each Melbourne afternoon." },
      { question: "Can you add AI features to our app?", answer: "Yes. We build chat assistants, voice input, recommendations and image recognition into apps, using models such as OpenAI, Claude and on-device ML." },
    ],
    related: [
      { href: "/australia/", label: "Software Development Australia" },
      { href: "/software-development-company-sydney/", label: "Software Development Sydney" },
      { href: "/app-development-company-pakistan/", label: "Mobile App Development" },
      { href: "/mvp-development-company/", label: "MVP Development" },
    ],
  }),

  /* ---------------- Canada ---------------- */
  intlPage({
    slug: "software-development-company-toronto",
    service: "software",
    city: "Toronto",
    country: "Canada",
    countryHub: "/canada/",
    currency: "CAD",
    areas: ["Downtown Toronto", "Financial District", "Liberty Village", "North York", "Mississauga", "Markham", "Waterloo", "Ottawa", "Montreal", "Vancouver", "Calgary"],
    caseStudyIds: ["qualified-leads-x", "contractor-leads", "rankmora", "employee-security-crm", "quickdoctor-ie", "ai-calling-agent"],
    keywords: ["software development company toronto", "software development company canada", "custom software development company canada", "software developers toronto", "app development company toronto", "outsource software development canada"],
    quickAnswerExtra: "We build custom software, SaaS products, mobile apps and AI automation for Toronto startups and businesses, with daily overlap with Eastern Time.",
    intro: [
      "Toronto is Canada's biggest tech market, and senior developers there are expensive and hard to hire. Companies use us to ship MVPs, extend existing SaaS products and add dedicated engineers without a months-long hiring process.",
      "We work Eastern Time mornings, the same way we support our New York clients: shared Slack, your Jira or Linear board, your GitHub, and a fixed CAD price per milestone or a flat monthly rate.",
      "For Canadian clients we host in the AWS or Google Cloud Canada regions on request and design data handling around PIPEDA, and Quebec's Law 25 where it applies.",
    ],
    faqs: [
      { question: "What overlap do you have with Toronto time?", answer: "Our team covers the Eastern Time morning, giving 3 to 4 hours of live overlap each weekday, and we answer Slack through the rest of your day." },
      { question: "Can you keep our data in Canada?", answer: "Yes. We deploy to the AWS Canada (Central) or Google Cloud Toronto and Montreal regions and follow PIPEDA requirements for personal data." },
      { question: "How do you price Canadian projects?", answer: "Fixed CAD prices per milestone for defined projects, or a flat monthly CAD rate for dedicated developers. You get a written proposal within 48 hours of a scoping call." },
      { question: "Which payment tools do you integrate in Canada?", answer: "Stripe, Moneris, PayPal and Square, plus QuickBooks, Xero, HubSpot and Salesforce integrations." },
    ],
    related: [
      { href: "/canada/", label: "Software Development Canada" },
      { href: "/app-development-company-calgary/", label: "App Development Calgary" },
      { href: "/software-development-company-new-york/", label: "Software Development New York" },
      { href: "/hire-dedicated-developers/", label: "Hire Dedicated Developers" },
    ],
  }),
  intlPage({
    slug: "app-development-company-calgary",
    service: "app",
    city: "Calgary",
    country: "Canada",
    countryHub: "/canada/",
    currency: "CAD",
    areas: ["Downtown Calgary", "Beltline", "Kensington", "Inglewood", "Airdrie", "Cochrane", "Edmonton", "Red Deer", "Lethbridge", "Vancouver", "Toronto"],
    caseStudyIds: ["roofing-systems", "contractor-leads", "sigma-smart-tech", "egg-produce", "ballchart", "zeparty"],
    keywords: ["app development company calgary", "mobile app developers calgary", "web development company calgary", "app developers calgary", "software development company calgary", "app development company edmonton"],
    quickAnswerExtra: "We build iOS and Android apps and web applications for Calgary and Alberta businesses, from field-service and energy-sector tools to consumer apps.",
    intro: [
      "Calgary's economy is built on energy, construction, agriculture and logistics, and those businesses need practical software: field-service and inspection apps, dispatch and job tracking, customer portals and dashboards that pull data from the field.",
      "That is close to the work we already do for US field businesses such as Roofing Systems Co and Contractor Leads US, and for supply-chain platforms like Egg Produce. We build the mobile app, the web admin and the backend as one project, with a fixed CAD price.",
    ],
    faqs: [
      { question: "What time overlap do you have with Calgary?", answer: "Calgary is on Mountain Time, 12 hours behind Pakistan in winter. We schedule live calls in your early morning or our late evening, and post daily written updates so work never waits for a meeting." },
      { question: "Can you build apps that work offline in the field?", answer: "Yes. We build offline-first apps that store inspections, photos and forms on the device and sync when a connection returns." },
      { question: "Do you also build the web dashboard?", answer: "Yes. Most Calgary projects include a web admin or customer portal alongside the mobile app, sharing one backend." },
      { question: "How do you price projects?", answer: "Fixed CAD prices per milestone after a free scoping call, or a flat monthly CAD rate for dedicated developers." },
    ],
    related: [
      { href: "/canada/", label: "Software Development Canada" },
      { href: "/software-development-company-toronto/", label: "Software Development Toronto" },
      { href: "/app-development-company-dallas/", label: "App Development Dallas" },
      { href: "/mvp-development-company/", label: "MVP Development" },
    ],
  }),

  /* ---------------- Qatar ---------------- */
  intlPage({
    slug: "software-development-company-doha",
    service: "software",
    city: "Doha",
    country: "Qatar",
    countryHub: "",
    currency: "QAR or USD",
    areas: ["West Bay", "Lusail", "The Pearl", "Msheireb", "Al Sadd", "Al Waab", "Education City", "Al Wakrah", "Al Rayyan", "Industrial Area"],
    caseStudyIds: ["top-performance", "mizn-abayas", "horizone-invest", "rbo-accounting", "zeparty", "whatsapp-business-api"],
    keywords: ["software development company doha", "software company in qatar", "software development company qatar", "software house qatar", "it company doha", "custom software development qatar"],
    quickAnswerExtra: "We build Arabic and English web platforms, e-commerce, ERP and CRM systems and AI automation for Qatari businesses, working almost entirely within Doha business hours.",
    intro: [
      "Qatar's businesses are digitising fast under Qatar National Vision 2030, from retail and real estate to logistics and hospitality. They need bilingual systems, local payment options and software that connects to the ERP and accounting tools they already use.",
      "We already deliver in Qatar: for Top Performance Qatar we built the e-commerce platform, and we work with retail, real-estate and service businesses across the UAE and the wider Gulf.",
      "Doha is two hours behind Pakistan, so our working day overlaps almost completely with yours, and we can join on-site in Doha for kickoff workshops on larger projects.",
    ],
    faqs: [
      { question: "Do you have clients in Qatar?", answer: "Yes. We built the e-commerce platform for Top Performance Qatar, and we work with several businesses across the UAE and the Gulf. See the case studies on this page." },
      { question: "Can you build Arabic and English systems?", answer: "Yes. We build bilingual platforms with correct right-to-left Arabic layouts, Arabic fonts and localised dates and numbers." },
      { question: "Which payment gateways do you integrate in Qatar?", answer: "We integrate gateways commonly used in Qatar such as Tap Payments, SkipCash and Checkout.com, card payments through local bank gateways, and Apple Pay." },
      { question: "How do you handle data protection in Qatar?", answer: "We design data handling around Qatar's Personal Data Privacy Protection Law (Law No. 13 of 2016) and can host in Gulf cloud regions on request." },
    ],
    related: [
      { href: "/app-development-company-doha/", label: "App Development Doha" },
      { href: "/software-development-company-dubai/", label: "Software Development Dubai" },
      { href: "/software-development-company-riyadh/", label: "Software Development Riyadh" },
      { href: "/ai-automation-agency/", label: "AI Automation Agency" },
    ],
  }),
  intlPage({
    slug: "app-development-company-doha",
    service: "app",
    city: "Doha",
    country: "Qatar",
    countryHub: "",
    currency: "QAR or USD",
    areas: ["West Bay", "Lusail", "The Pearl", "Msheireb", "Al Sadd", "Al Waab", "Education City", "Al Wakrah", "Al Rayyan", "Al Khor"],
    caseStudyIds: ["zeparty", "top-performance", "mizn-abayas", "ustaad-ae", "ygi-holiday-homes", "spicify-app"],
    keywords: ["app development company doha", "app development company qatar", "mobile app development qatar", "mobile app developers doha", "app developers qatar"],
    quickAnswerExtra: "We build bilingual Arabic and English iOS and Android apps in Flutter and React Native, with Qatari payment options, the backend and an admin panel included.",
    intro: [
      "Customers in Qatar expect polished, bilingual apps: Arabic right-to-left layouts, fast checkout and reliable delivery tracking. We build these from one Flutter or React Native codebase so you launch on both stores at once.",
      "Our ZeParty live-audio app serves listeners across the Middle East with sub-100ms latency, and we have built booking and marketplace platforms for Gulf clients such as Ustaad.ae and YGI Holiday Homes.",
    ],
    faqs: [
      { question: "How much does app development cost in Qatar?", answer: "We send a fixed price in QAR or USD after a free scoping call. Because our team is offshore, the cost is typically well below local Doha agency rates." },
      { question: "Can the app be Arabic-first?", answer: "Yes. We design Arabic-first right-to-left apps with English as a second language, or the other way round." },
      { question: "Do you build delivery and booking apps?", answer: "Yes. We build customer, driver and vendor apps with live tracking, scheduling, payments and push notifications." },
      { question: "What time overlap do you have with Doha?", answer: "Doha is two hours behind Pakistan, so our working hours overlap almost completely with yours." },
    ],
    related: [
      { href: "/software-development-company-doha/", label: "Software Development Doha" },
      { href: "/app-development-company-dubai/", label: "App Development Dubai" },
      { href: "/app-development-company-pakistan/", label: "Mobile App Development" },
      { href: "/mvp-development-company/", label: "MVP Development" },
    ],
  }),
];

/* ------------------------------------------------------------------ */
/* Global service pages (no city)                                       */
/* ------------------------------------------------------------------ */

type GlobalConfig = Omit<LocalPage, "group" | "areaType" | "areaServed" | "breadcrumbs" | "placeLabel" | "stats" | "pricingColumns" | "areasTitle" | "areasNote" | "areas"> & {
  stats?: LocalPage["stats"];
  pricingColumns?: LocalPage["pricingColumns"];
};

const globalCountries = ["United States", "United Kingdom", "United Arab Emirates", "Saudi Arabia", "Qatar", "Canada", "Australia", "Germany", "Ireland", "Malaysia", "Pakistan"];

function globalPage(c: GlobalConfig): LocalPage {
  return {
    ...c,
    group: "global",
    placeLabel: "",
    areaType: "Country",
    areaServed: globalCountries,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: c.navLabel, path: c.path },
    ],
    stats: c.stats ?? GLOBAL_STATS,
    pricingColumns: c.pricingColumns ?? INTL_ENGAGEMENT_COLUMNS,
    areasTitle: "Countries We Work With",
    areasNote: "Remote delivery with scheduled overlap for US, UK, Gulf, European and Australian time zones.",
    areas: globalCountries,
  };
}

const globalPages: LocalPage[] = [
  globalPage({
    slug: "hire-dedicated-developers",
    path: "/hire-dedicated-developers/",
    navLabel: "Hire Dedicated Developers",
    metaTitle: "Hire Dedicated Developers: App, Web & AI Engineers",
    metaDescription: "Hire dedicated React, Next.js, Node.js, Flutter, Python and AI developers who join your team full-time at a flat monthly rate. Start within 5 business days.",
    keywords: ["hire dedicated developers", "hire app developers", "hire web developers", "hire remote developers", "dedicated development team", "hire flutter developers", "hire react developers"],
    serviceName: "Dedicated Developers",
    badge: "Senior engineers · Start in 5 business days",
    h1Before: "Hire",
    h1Highlight: "Dedicated Developers",
    h1After: "Who Ship From Week One",
    quickAnswer: "DEVSYNX provides dedicated developers who work full-time on your product: React and Next.js, Node.js, Python, Flutter, React Native and AI engineers. They join your Slack, stand-ups and repositories, work 4+ hours in your time zone, and are billed at a flat monthly rate with a one-month minimum and a free replacement if the fit isn't right.",
    whatsappText: "Hi DEVSYNX, I want to hire dedicated developers.",
    introTag: "How It Works",
    introTitle: "Your Developer, Our Management",
    intro: [
      "You interview the engineer, they join your team, and you direct their work. We handle payroll, equipment, backups if someone is sick, and a tech lead who reviews their code every week.",
      "Clients in the US, UK, UAE and Europe use our developers to add capacity without a long hiring process. Typical setups are one senior full-stack developer for a startup, or a squad of three to five with a project manager for a larger product.",
    ],
    servicesTitle: "Developers You Can Hire",
    services: [
      { icon: "⚛️", title: "React & Next.js Developers", text: "Frontend and full-stack engineers for SaaS dashboards, marketing sites and web apps." },
      { icon: "🟢", title: "Node.js & Python Developers", text: "API, backend and data engineers for Express, NestJS, Django and FastAPI." },
      { icon: "📱", title: "Flutter & React Native Developers", text: "Mobile engineers who ship to the App Store and Google Play." },
      { icon: "🤖", title: "AI & LLM Engineers", text: "Engineers who build RAG pipelines, AI agents, voice bots and LLM integrations.", href: "/ai-automation-agency/", linkLabel: "AI Automation" },
      { icon: "🛍️", title: "Shopify & WordPress Developers", text: "Theme, app and headless commerce developers for e-commerce brands." },
      { icon: "☁️", title: "DevOps Engineers", text: "AWS, GCP, Docker, Kubernetes and CI/CD specialists.", href: "/services/devops-cicd/", linkLabel: "DevOps" },
    ],
    caseStudiesTitle: "Products Our Developers Have Built",
    caseStudyIds: ["contractor-leads", "zeparty", "rankmora", "quickdoctor-ie", "ai-calling-agent", "horizone-invest"],
    pricingTitle: "Engagement Options",
    pricingNote: "Flat monthly rates in USD, GBP or AED. No recruitment fees and no long contracts.",
    pricing: [
      ["Part-Time Developer", "Monthly, min. 1 month", "Flat monthly rate (80 hrs)", "Maintenance, small features, second pair of hands"],
      ["Full-Time Developer", "Monthly, min. 1 month", "Flat monthly rate (160 hrs)", "Startups adding one senior engineer"],
      ["Dedicated Squad", "Monthly, min. 3 months", "Monthly team rate", "PM + designer + 2–4 engineers on a roadmap"],
      ["Trial Week", "1 week", "Paid at the weekly rate", "Testing fit before committing"],
    ],
    related: [
      { href: "/custom-software-development-company/", label: "Custom Software Development" },
      { href: "/mvp-development-company/", label: "MVP Development" },
      { href: "/usa/", label: "Developers for US Companies" },
      { href: "/uk/", label: "Developers for UK Companies" },
    ],
    faqs: [
      { question: "How quickly can a developer start?", answer: "Usually within 5 business days of the interview. For a full squad, allow about two weeks." },
      { question: "What if the developer isn't a good fit?", answer: "Tell us and we replace them at no extra cost. You can also end the engagement with one month's notice." },
      { question: "Which time zones do you cover?", answer: "We guarantee at least 4 hours of overlap with US Eastern, UK and Gulf business hours, and full overlap with the UAE and Saudi Arabia." },
      { question: "Who owns the code they write?", answer: "You do. All work happens in your repositories and the contract assigns all IP to your company." },
      { question: "Are the developers your employees?", answer: "Yes. They are full-time DEVSYNX engineers, not freelancers, with a tech lead reviewing their work." },
    ],
    ctaTitle: "Interview a Developer This Week",
  }),
  globalPage({
    slug: "custom-software-development-company",
    path: "/custom-software-development-company/",
    navLabel: "Custom Software Development",
    metaTitle: "Custom Software Development Company",
    metaDescription: "Custom software development for SaaS platforms, portals, CRMs, ERPs and AI tools. Clients in the US, UK, UAE and Europe. Fixed pricing, full code ownership.",
    keywords: ["custom software development company", "custom software development", "custom software development services", "bespoke software development", "software development company", "custom software development company usa"],
    serviceName: "Custom Software Development",
    badge: "SaaS · Portals · CRM & ERP · AI tools",
    h1Before: "Custom Software Development",
    h1Highlight: "Company",
    h1After: "for Growing Businesses",
    quickAnswer: "DEVSYNX is a custom software development company that builds SaaS platforms, customer portals, CRMs, ERPs and AI-powered internal tools. We work with clients in the US, UK, UAE, Europe and Pakistan on fixed-price milestones, deliver MVPs in about 30 days and transfer full source code ownership.",
    whatsappText: "Hi DEVSYNX, I need custom software built.",
    introTag: "Why Custom Software",
    introTitle: "When Off-the-Shelf Tools Stop Fitting",
    intro: [
      "Businesses come to us when they have outgrown spreadsheets and SaaS subscriptions that almost fit: a CRM that doesn't match their sales process, a booking tool without the rules they need, or ten tools that don't talk to each other.",
      "We map the workflow first, build the smallest version that removes the biggest bottleneck, and then extend it. Our 70+ public case studies cover lead-generation platforms, telehealth, real-estate investment portals, industrial control dashboards and SaaS products.",
    ],
    servicesTitle: "What We Build",
    services: [
      { icon: "☁️", title: "SaaS Products", text: "Multi-tenant platforms with subscriptions, roles, billing and analytics.", href: "/services/saas-product-development/", linkLabel: "SaaS Development" },
      { icon: "🧾", title: "CRM & ERP Systems", text: "Sales pipelines, inventory, invoicing and HR built around your process." },
      { icon: "🚪", title: "Customer & Partner Portals", text: "Self-service portals for orders, bookings, documents and support." },
      { icon: "🤖", title: "AI-Powered Tools", text: "Document processing, AI agents, chatbots and voice automation.", href: "/ai-automation-agency/", linkLabel: "AI Automation" },
      { icon: "🔌", title: "Integrations & APIs", text: "Connect Stripe, QuickBooks, HubSpot, Salesforce and legacy systems.", href: "/services/api-development-integration/", linkLabel: "API Integration" },
      { icon: "🏚️", title: "Legacy Modernisation", text: "Rebuild old PHP, .NET or desktop systems on a modern cloud stack.", href: "/services/legacy-system-modernization/", linkLabel: "Modernisation" },
    ],
    caseStudiesTitle: "Custom Software in Production",
    caseStudyIds: ["contractor-leads", "quickdoctor-ie", "horizone-invest", "mdt-control", "employee-security-crm", "installmentguard"],
    pricingTitle: "Ways to Work With Us",
    pricingNote: "Fixed quotes in USD, GBP, AED or PKR after a free scoping call.",
    pricing: intlEngagement("your currency"),
    related: [
      { href: "/mvp-development-company/", label: "MVP Development" },
      { href: "/hire-dedicated-developers/", label: "Hire Dedicated Developers" },
      { href: "/software-development-company-new-york/", label: "Software Development New York" },
      { href: "/software-development-company-london/", label: "Software Development London" },
    ],
    faqs: [
      { question: "How much does custom software cost?", answer: "It depends on scope. A focused MVP is a few weeks of work; a full platform is several months. After a free scoping call we send a fixed price per milestone." },
      { question: "How long does custom software take to build?", answer: "A first usable version typically takes 4 to 8 weeks. We release in two-week sprints so you can use and test the software early." },
      { question: "Do we own the software?", answer: "Yes. Code, database and designs are yours, in your own repositories, with no licence fees to us." },
      { question: "Can you support the software after launch?", answer: "Yes. We offer monthly support plans covering monitoring, security updates, bug fixes and new features." },
    ],
    ctaTitle: "Scope Your Custom Software Project",
  }),
  globalPage({
    slug: "mvp-development-company",
    path: "/mvp-development-company/",
    navLabel: "MVP Development",
    metaTitle: "MVP Development Company | Launch in 30 Days",
    metaDescription: "MVP development for startups: we scope, design and build a production-ready web or mobile MVP in about 30 days, at a fixed price with full code ownership.",
    keywords: ["mvp development company", "mvp development", "mvp development services", "startup mvp development", "mvp app development", "saas mvp development"],
    serviceName: "MVP Development",
    badge: "Fixed scope · Fixed price · ~30 days",
    h1Before: "MVP Development",
    h1Highlight: "Company",
    h1After: "That Launches in 30 Days",
    quickAnswer: "DEVSYNX is an MVP development company that takes startups from idea to a live, production-ready web or mobile app in about 30 days. We run a one-week scoping sprint, cut the feature list to what proves your idea, then build, test and launch at a fixed price with full code ownership.",
    whatsappText: "Hi DEVSYNX, I want to build an MVP.",
    stats: [
      { value: "~30 Days", label: "Typical MVP Launch" },
      { value: "1 Week", label: "Scoping Sprint" },
      { value: "Fixed", label: "Price & Scope" },
      { value: "100%", label: "Code Ownership" },
    ],
    introTag: "The 30-Day Process",
    introTitle: "How We Ship an MVP in About a Month",
    intro: [
      "Week 1 is scoping: user flows, a clickable Figma prototype and a written feature list with a fixed price. Weeks 2 to 4 are building in sprints with a demo every few days. The final days are testing, analytics setup and launch to production and the app stores.",
      "We use a proven stack (Next.js, Node.js, PostgreSQL, Flutter, Stripe, Vercel or AWS), so the MVP doesn't need a rewrite when you raise money or get traction. It is the foundation, not a throwaway prototype.",
    ],
    servicesTitle: "MVPs We Build",
    services: [
      { icon: "☁️", title: "SaaS MVPs", text: "Sign-up, onboarding, core workflow, Stripe billing and an admin dashboard." },
      { icon: "📱", title: "Mobile App MVPs", text: "iOS and Android from one Flutter codebase, published to both stores." },
      { icon: "🛒", title: "Marketplace MVPs", text: "Two-sided listings, search, bookings or orders, payments and reviews." },
      { icon: "🤖", title: "AI Product MVPs", text: "LLM-powered assistants, document tools and voice agents with usage tracking." },
      { icon: "📊", title: "Analytics & Feedback", text: "Product analytics, session recording and feedback widgets from day one." },
      { icon: "🔁", title: "Post-Launch Iteration", text: "A monthly sprint plan to act on what your first users do." },
    ],
    caseStudiesTitle: "Products We Took From Idea to Launch",
    caseStudyIds: ["rankmora", "suuvo", "purrchase-ai", "zingo-assist", "entiix", "saviored"],
    pricingTitle: "MVP Packages",
    pricingNote: "Quoted at a fixed price after the scoping sprint. Payments split by milestone.",
    pricing: [
      ["Scoping Sprint", "1 Week", "Fixed fee, credited to the build", "Flows, Figma prototype, feature list, fixed quote"],
      ["Web / SaaS MVP", "3 – 5 Weeks", "Fixed price", "Core features, auth, payments, admin, deployment"],
      ["Mobile App MVP", "4 – 6 Weeks", "Fixed price", "iOS & Android, backend, store submission"],
      ["Post-Launch Sprints", "Monthly", "Monthly rate", "New features, fixes and experiments"],
    ],
    related: [
      { href: "/custom-software-development-company/", label: "Custom Software Development" },
      { href: "/services/saas-product-development/", label: "SaaS Product Development" },
      { href: "/hire-dedicated-developers/", label: "Hire Dedicated Developers" },
      { href: "/app-development-company-dallas/", label: "App Development Dallas" },
    ],
    faqs: [
      { question: "Can you really build an MVP in 30 days?", answer: "For a focused scope, yes. The scoping sprint exists to cut the feature list to what tests your core idea. Larger MVPs with several user roles take 6 to 8 weeks, and we tell you that upfront." },
      { question: "How much does MVP development cost?", answer: "We give a fixed price after the one-week scoping sprint, and the scoping fee is credited to the build. Because our team is offshore, the cost is typically well below US or UK agency quotes." },
      { question: "Will I need to rebuild the MVP later?", answer: "No. We build on the same production stack you would use at scale, with tests and documentation, so you extend it instead of starting over." },
      { question: "Do you sign an NDA?", answer: "Yes, before the first detailed call." },
    ],
    ctaTitle: "Book Your MVP Scoping Call",
  }),
  globalPage({
    slug: "ai-automation-agency",
    path: "/ai-automation-agency/",
    navLabel: "AI Automation Agency",
    metaTitle: "AI Automation Agency: Voice Agents & Chatbots",
    metaDescription: "AI automation agency building AI voice agents, WhatsApp and web chatbots, and workflow automation that cut support and admin hours, with live deployments.",
    keywords: ["ai automation agency", "ai automation services", "ai agent development", "ai voice agent", "ai chatbot development", "ai automation company", "ai development company"],
    serviceName: "AI Automation",
    badge: "Voice agents · Chatbots · Workflow automation",
    h1Before: "AI Automation",
    h1Highlight: "Agency",
    h1After: "for Real Business Workflows",
    quickAnswer: "DEVSYNX is an AI automation agency that builds AI voice agents, WhatsApp and website chatbots, and back-office automation connected to your CRM, calendar and databases. We scope one workflow, build and test it against real conversations, then deploy it to production with monitoring and a human hand-off.",
    whatsappText: "Hi DEVSYNX, I want to automate a workflow with AI.",
    introTag: "What We Automate",
    introTitle: "AI That Does a Job, Not a Demo",
    intro: [
      "The best first AI project is a repetitive, high-volume task: answering inbound calls, qualifying leads, booking appointments, replying to WhatsApp enquiries or extracting data from documents. We pick one, measure the hours it costs today, and build an agent that handles it.",
      "Our own AI calling agent answers and qualifies leads for US service businesses around the clock, and our WhatsApp Business API automations handle customer conversations for Gulf and Pakistani brands.",
    ],
    servicesTitle: "AI Automation Services",
    services: [
      { icon: "📞", title: "AI Voice Agents", text: "Inbound and outbound calling agents that answer, qualify, book and transfer to a human.", href: "/services/voice-ai-bots/", linkLabel: "Voice AI Bots" },
      { icon: "💬", title: "WhatsApp & Web Chatbots", text: "Multilingual assistants trained on your products, prices and policies.", href: "/clients/whatsapp-business-api/", linkLabel: "WhatsApp API Case Study" },
      { icon: "⚙️", title: "Workflow Automation", text: "n8n, Make and custom pipelines that move data between your tools.", href: "/services/process-automation/", linkLabel: "Process Automation" },
      { icon: "📄", title: "Document AI", text: "Extract data from invoices, contracts and forms into your systems." },
      { icon: "🧠", title: "Custom AI Agents", text: "LLM agents with tools, memory and guardrails for research, support or sales tasks." },
      { icon: "📊", title: "Predictive Analytics", text: "Forecasting and scoring models on your own data.", href: "/services/predictive-analytics/", linkLabel: "Predictive Analytics" },
    ],
    caseStudiesTitle: "AI Automation in Production",
    caseStudyIds: ["ai-calling-agent", "whatsapp-business-api", "ai-video-production", "purrchase-ai", "qualified-leads-x", "contractor-leads"],
    pricingTitle: "Ways to Start",
    pricingNote: "Every AI project starts with one measurable workflow. Quoted in USD, GBP, AED or PKR.",
    pricing: [
      ["Automation Audit", "1 Week", "Fixed fee", "Map workflows, estimate hours saved, pick the first agent"],
      ["Single Agent Build", "2 – 4 Weeks", "Fixed price", "One voice or chat agent, integrations, testing, launch"],
      ["Automation Retainer", "Monthly", "Monthly rate", "New automations, prompt tuning, monitoring and reporting"],
      ["Usage Costs", "Ongoing", "Paid to providers at cost", "LLM, telephony and WhatsApp fees billed by OpenAI, Twilio, Meta etc."],
    ],
    related: [
      { href: "/services/ai-automation/", label: "AI Automation Services" },
      { href: "/blog/ai-calling-agents-for-business/", label: "Guide: AI Calling Agents" },
      { href: "/custom-software-development-company/", label: "Custom Software Development" },
      { href: "/software-development-company-dubai/", label: "Software Development Dubai" },
    ],
    faqs: [
      { question: "What does an AI automation agency do?", answer: "It designs, builds and maintains AI systems that handle business tasks: answering calls and chats, qualifying leads, booking appointments, processing documents and moving data between tools." },
      { question: "How much does an AI voice agent cost?", answer: "There is a one-time build cost for the agent and its integrations, plus usage costs for the AI model and phone minutes, which are usually a fraction of a human agent's hourly cost. We quote both after a short audit." },
      { question: "Will the AI say something wrong to my customers?", answer: "We limit agents to your approved knowledge, add guardrails and confirmation steps, test them against real conversation transcripts and hand off to a human whenever the agent is unsure." },
      { question: "Which tools can the agents connect to?", answer: "Common integrations include HubSpot, GoHighLevel, Salesforce, Google Calendar, Calendly, Shopify, WhatsApp Business API, Twilio and custom databases." },
    ],
    ctaTitle: "Find Your First AI Automation",
  }),
];

/* ------------------------------------------------------------------ */
/* Export                                                              */
/* ------------------------------------------------------------------ */

const rawLocalPages: LocalPage[] = [
  softwareHousePage(lahore),
  softwareHousePage(karachi),
  softwareHousePage(faisalabad),
  softwareHousePage(multan),
  softwareHousePage(peshawar),
  ...pkCitiesBatch2.map(softwareHousePage),
  softwareHousePakistan,
  seoCityPage(
    "Lahore",
    "lahore",
    lahoreAreas,
    "Lahore is the most competitive SEO market in Pakistan: 'seo company lahore' and 'seo services in lahore' are each searched around 3,600 times a month, more than in any other city. Fashion brands, clinics, real-estate projects, schools and restaurants all compete for the same first page, so generic packages that only add keywords to a page don't move rankings.",
    ["seo services in lahore", "seo company in lahore", "seo company lahore", "seo expert in lahore", "seo agency lahore", "best seo company in lahore"],
  ),
  seoCityPage(
    "Karachi",
    "karachi",
    karachiAreas,
    "Karachi businesses compete for customers across a huge city, so local SEO is about more than one keyword. A clinic in Clifton, a showroom on Tariq Road and a distributor in SITE each need to rank for their own neighbourhood and service terms, and Google Maps visibility often matters more than the website ranking itself.",
    ["seo services in karachi", "seo services karachi", "seo company karachi", "seo expert in karachi", "seo agency karachi"],
  ),
  seoServicesPakistan,
  dmCityPage(
    "Lahore",
    "lahore",
    lahoreAreas,
    "Lahore's fashion, food and real-estate brands spend heavily on Meta and TikTok, and the cost per lead keeps rising. The brands that win are the ones that measure accurately, test creatives every week and send traffic to landing pages that load fast on mobile data.",
    ["digital marketing agency in lahore", "digital marketing agency lahore", "digital marketing company lahore", "social media marketing agency lahore"],
  ),
  dmCityPage(
    "Karachi",
    "karachi",
    karachiAreas,
    "Karachi is Pakistan's largest consumer market and home to many national brands, which makes ad auctions expensive. Campaigns need tight geographic and audience targeting, strong creative and conversion tracking that connects ad clicks to real orders and calls.",
    ["digital marketing agency in karachi", "digital marketing agency karachi", "digital marketing company karachi", "social media marketing agency karachi"],
  ),
  webCityPage(
    "Lahore",
    "lahore",
    lahoreAreas,
    "Lahore businesses lose customers to slow, outdated websites every day. A typical WordPress theme loads in six seconds or more on mobile data, and visitors leave before the page finishes. We build websites that load in under two seconds and are structured so Google understands exactly which services you offer in Lahore.",
    ["web development company in lahore", "web development lahore", "website development in lahore", "web design lahore", "website design company in lahore"],
  ),
  webCityPage(
    "Karachi",
    "karachi",
    karachiAreas,
    "From trading companies on I.I. Chundrigar Road to restaurants in DHA, Karachi businesses increasingly win customers on Google and WhatsApp before anyone visits in person. Your website needs to load fast, show up for the right searches and turn visitors into WhatsApp conversations.",
    ["web development company in karachi", "web development karachi", "website development karachi", "web design karachi", "web design in karachi"],
  ),
  appDevelopmentPakistan,
  ...intlPages,
  ...usCityConfigs.map(intlPage),
  ...gulfPages,
  ...globalPages,
  ...industryConfigs.map((c) =>
    globalPage({
      ...c,
      pricingTitle: "Ways to Work With Us",
      pricingNote: "Quoted in USD, GBP, AED or PKR after a free scoping call. You receive a written proposal within 48 hours.",
      pricing: intlEngagement("your currency"),
    })
  ),
];

export const localPages: LocalPage[] = rawLocalPages.map((page) => {
  const o = localPageOverrides[page.slug];
  if (!o) return page;
  const kept = o.keepFaqs ? o.keepFaqs.map((i) => page.faqs[i]).filter(Boolean) : page.faqs;
  return {
    ...page,
    metaTitle: o.metaTitle ?? page.metaTitle,
    metaDescription: o.metaDescription ?? page.metaDescription,
    h1Before: o.h1Before ?? page.h1Before,
    keywords: [...(o.extraKeywords ?? []), ...page.keywords],
    highlights: o.highlights ?? page.highlights,
    caseStudyIds: o.caseStudyIds ?? page.caseStudyIds,
    faqs: [...kept, ...(o.faqs ?? [])],
  };
});

export function getLocalPage(slug: string): LocalPage {
  const page = localPages.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown local page: ${slug}`);
  return page;
}
