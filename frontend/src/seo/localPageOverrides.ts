/**
 * City-specific content for Pakistani city pages, so that pages for different
 * cities are not near-duplicates of each other. Applied in seo/localPages.ts.
 *
 * keepFaqs: indexes of the page's generated FAQs to keep (the rest are shared
 * boilerplate across cities and are dropped in favour of `faqs`).
 */
import type { LocalPage } from "./localPages";

export type LocalPageOverride = {
  metaTitle?: string;
  metaDescription?: string;
  h1Before?: string;
  extraKeywords?: string[];
  highlights?: LocalPage["highlights"];
  caseStudyIds?: string[];
  keepFaqs?: number[];
  faqs?: { question: string; answer: string }[];
  servicesTitle?: string;
  services?: LocalPage["services"];
  pricing?: LocalPage["pricing"];
};

export const localPageOverrides: Record<string, LocalPageOverride> = {
  /* ---------------- Software house pages ---------------- */
  "software-house-lahore": {
    caseStudyIds: ["silayi-pret", "luxora-women", "mizn-abayas", "ai-calling-agent", "alpha-ahead-real-estate", "superhuman-mail"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Fashion Store (Shopify or custom)", "2 – 3 Weeks", "PKR 35,000 – 120,000", "Catalogue, size charts, COD confirmation, courier booking, sale-day caching"],
      ["Restaurant Ordering App", "6 – 12 Weeks", "PKR 200,000 – 700,000", "Menu, delivery zones across Lahore, rider app, kitchen screen, WhatsApp updates"],
      ["Housing Society Portal", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Plot inventory, file transfers, installments, member logins and dealer leads"],
      ["School ERP", "6 – 16 Weeks", "PKR 250,000 – 1,100,000", "Admissions, fee vouchers, results, attendance and parent app"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 25,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
    ],
    servicesTitle: "Services for Lahore Brands and Businesses",
    services: [
          {
                icon: "🛍️",
                title: "Shopify & Custom Stores",
                text: "Stores for Lahore labels with COD confirmation, courier booking with TCS, Leopards or PostEx, and sale-day load planning.",
                href: "/services/ecommerce-solutions/",
                linkLabel: "E-commerce"
          },
          {
                icon: "📲",
                title: "Customer Apps",
                text: "Loyalty, ordering and booking apps for restaurants, salons and gyms across Gulberg, DHA and Johar Town.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "🏘️",
                title: "Housing Society Software",
                text: "Plot inventory, file transfers, installment schedules and member portals for developers on Raiwind Road and Bahria Town."
          },
          {
                icon: "🏫",
                title: "School & Academy Portals",
                text: "Admissions, fee vouchers, results and parent apps for schools and tuition academies."
          },
          {
                icon: "🌐",
                title: "Business Websites",
                text: "Fast Next.js or WordPress sites for Lahore firms that need enquiries, not just a brochure.",
                href: "/services/custom-web-development/",
                linkLabel: "Web Development"
          },
          {
                icon: "🤖",
                title: "WhatsApp Order Automation",
                text: "Automatic order confirmations, abandoned-cart reminders and delivery updates on WhatsApp.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          }
    ],
    highlights: {
      tag: "Lahore Industries",
      title: "What Lahore Businesses Ask Us to Build",
      cards: [
        { icon: "👗", title: "Fashion & Apparel E-commerce", text: "Shopify and headless stores for Lahore clothing brands, built to stay online during sale launches, with size charts, COD confirmation calls and courier booking." },
        { icon: "🍽️", title: "Restaurants & Food Delivery", text: "Ordering websites and apps with menu management, delivery zones across Lahore, kitchen order screens and WhatsApp order updates." },
        { icon: "🏗️", title: "Real Estate & Housing Projects", text: "Project websites, plot inventory and booking portals, installment tracking and lead management for developers and dealers." },
        { icon: "🎓", title: "Schools, Academies & Clinics", text: "Admission and fee management, online classes, appointment booking and patient records with role-based access for staff." },
      ],
    },
    faqs: [
      { question: "Can you handle high traffic during a Lahore brand's sale launch?", answer: "Yes. We plan for launch-day load with caching, a CDN, queue-based order processing and load testing before the sale. Silayi Pret's store handled thousands of orders during festive launches on infrastructure we set up." },
      { question: "Can we meet in person in Lahore?", answer: "For larger projects we travel to Lahore for the kickoff workshop and key milestone reviews. Day-to-day work runs over WhatsApp, Google Meet and a shared project board." },
    ],
  },
  "software-house-karachi": {
    metaTitle: "Software House in Karachi from PKR 35,000",
    metaDescription: "Software house serving Karachi: websites from PKR 35,000, apps, ERP and AI automation. Fixed PKR price, full code ownership. Free quote in 48 hours.",
    caseStudyIds: ["installmentguard", "rbo-accounting", "employee-security-crm", "top-performance", "whatsapp-business-api", "nw-canvas"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Import & Distribution System", "6 – 16 Weeks", "PKR 250,000 – 1,100,000", "Shipments, landed cost, godown stock, distributor orders and credit"],
      ["Delivery & Fleet App", "6 – 12 Weeks", "PKR 200,000 – 700,000", "Rider and driver apps, proof of delivery, routes and live tracking"],
      ["Lending / Installment Platform", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Applications, KYC documents, schedules, repayments and recovery reports"],
      ["B2B Ordering Website", "2 – 3 Weeks", "PKR 35,000 – 120,000", "Wholesale price lists, online orders and WhatsApp enquiry buttons"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 25,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
    ],
    servicesTitle: "Services for Karachi Traders, Importers and Lenders",
    services: [
          {
                icon: "📦",
                title: "Import & Distribution Systems",
                text: "Shipments, landed cost, godown stock and distributor orders in one system for Saddar, SITE and Korangi traders."
          },
          {
                icon: "🚚",
                title: "Fleet & Delivery Apps",
                text: "Rider and driver apps with proof of delivery, route planning and live tracking across the city.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "💳",
                title: "Lending & Installment Platforms",
                text: "Loan and installment origination, KYC, repayment schedules and recovery dashboards."
          },
          {
                icon: "🏬",
                title: "Multi-Branch POS",
                text: "Point of sale with central stock, transfers and branch-wise profit for retail chains."
          },
          {
                icon: "🛒",
                title: "B2B Ordering Portals",
                text: "Wholesale buyers order online at their own price lists and credit terms.",
                href: "/services/ecommerce-solutions/",
                linkLabel: "E-commerce"
          },
          {
                icon: "🤖",
                title: "Finance & Ops Automation",
                text: "Bank reconciliation, invoice reading and daily reports produced automatically.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          }
    ],
    highlights: {
      tag: "Karachi Industries",
      title: "Software for Karachi's Trading, Logistics and Finance Businesses",
      cards: [
        { icon: "🚢", title: "Import, Export & Distribution", text: "Order management, landed-cost calculation, warehouse stock and dealer portals for importers and distributors working out of the port and SITE." },
        { icon: "🚚", title: "Logistics & Fleet", text: "Dispatch, route and proof-of-delivery apps for drivers, with live tracking and customer notifications." },
        { icon: "💳", title: "Finance & Installments", text: "Installment and credit tracking, payment reminders and customer portals, like our InstallmentGuard platform." },
        { icon: "🏬", title: "Retail Chains", text: "Multi-branch POS, central inventory and loyalty programs for retail chains across Karachi." },
      ],
    },
    faqs: [
      { question: "Do you build B2B ordering portals for distributors?", answer: "Yes. Dealers log in, see their own prices and credit limits, place orders and track deliveries, while your team approves orders and syncs them with inventory and accounts." },
      { question: "Can you connect our WhatsApp to our order system?", answer: "Yes. Through the WhatsApp Business API we send order confirmations, delivery updates and payment reminders automatically, and can let customers place or track orders by chat." },
    ],
  },
  "software-house-faisalabad": {
    caseStudyIds: ["odoo-service", "mdt-control", "devsynx-attendance-hr", "ra-enterprise-contractor", "entiix", "signature-design-by-ashley"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Mill Production ERP", "6 – 16 Weeks", "PKR 250,000 – 1,100,000", "Lots, stages, wastage, efficiency per shift and dispatch"],
      ["Export Order & LC Tracker", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Buyer POs, samples, LC terms, shipment status and documents"],
      ["Exporter Website", "2 – 3 Weeks", "PKR 35,000 – 120,000", "Product range, capacity, certifications and RFQ form for foreign buyers"],
      ["Owner Dashboard App", "6 – 12 Weeks", "PKR 200,000 – 700,000", "Production, dispatch and receivables on the owner's phone"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 25,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
    ],
    servicesTitle: "Services for Faisalabad Mills and Exporters",
    services: [
          {
                icon: "🧵",
                title: "Mill Production Software",
                text: "Spinning, weaving and processing stages tracked by lot, with wastage and efficiency per shift."
          },
          {
                icon: "📑",
                title: "Export Order & LC Tracking",
                text: "Buyer POs, samples, LC terms and shipment status visible to merchandisers and owners."
          },
          {
                icon: "🌍",
                title: "Buyer-Facing B2B Websites",
                text: "Product and capability sites that bring enquiries from importers in Europe and the US.",
                href: "/services/custom-web-development/",
                linkLabel: "Web Development"
          },
          {
                icon: "👷",
                title: "Payroll for Piece-Rate Workers",
                text: "Piece-rate, overtime and attendance for large workforces, with biometric integration."
          },
          {
                icon: "📱",
                title: "Owner Dashboards",
                text: "Daily production, dispatch and receivables on the owner's phone.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "🤖",
                title: "Document Automation",
                text: "Commercial invoices, packing lists and certificates generated from order data.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          }
    ],
    highlights: {
      tag: "Faisalabad Industries",
      title: "Systems Built for Textile Mills and Exporters",
      cards: [
        { icon: "🧵", title: "Production Tracking", text: "Track lots from yarn to finished fabric or garments, with machine-wise output, wastage and shift reports instead of paper registers." },
        { icon: "📦", title: "Export Order Management", text: "Buyer orders, sampling, approvals, shipment schedules and document checklists in one place, with status visible to merchandisers." },
        { icon: "🌍", title: "Buyer-Facing Websites", text: "Product catalogues and RFQ forms that help international buyers find you and request quotes in their own terms." },
        { icon: "👷", title: "Workforce & Payroll", text: "Attendance, piece-rate wages and payroll for large factory teams using our HRMS." },
      ],
    },
    faqs: [
      { question: "Can you replace our Excel costing sheets with a system?", answer: "Yes. We turn your existing costing logic into a web app with approvals, version history and reports, starting with the sheets your team uses most." },
      { question: "Do you set up Odoo for manufacturers?", answer: "Yes. We implement Odoo manufacturing, inventory and accounting modules and build custom add-ons where your process differs from the standard." },
    ],
  },
  "software-house-multan": {
    metaTitle: "Software House in Multan from PKR 35,000",
    metaDescription: "Software house serving Multan: websites from PKR 35,000, apps, ERP and AI automation. Fixed PKR price, full code ownership. Free quote in 48 hours.",
    caseStudyIds: ["egg-produce", "saviored", "quickdoctor-ie", "google-workspace-security", "zahh-beverages", "ag-plumbing-murah"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Commission Agent System", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Grower and buyer ledgers, daily mandi rates, bilties and SMS statements"],
      ["Mango Export Tracking", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Orchard purchases, grading, packing and consignments to buyers"],
      ["College Management System", "6 – 16 Weeks", "PKR 250,000 – 1,100,000", "Admissions, fees, exams, attendance and parent alerts"],
      ["Clinic or Lab Website", "2 – 3 Weeks", "PKR 35,000 – 120,000", "Doctor profiles, online reports and appointment booking"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 25,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
    ],
    servicesTitle: "Services for Multan and South Punjab",
    services: [
          {
                icon: "🌾",
                title: "Commission Agent Software",
                text: "Grower and buyer accounts, daily mandi rates, bilties and settlement statements."
          },
          {
                icon: "🥭",
                title: "Mango & Produce Supply Chain",
                text: "Orchard purchases, grading, packing and export orders tracked by consignment."
          },
          {
                icon: "🎓",
                title: "College & School Management",
                text: "Admissions, fee collection, exams and attendance with parent SMS alerts."
          },
          {
                icon: "🩺",
                title: "Clinic & Lab Systems",
                text: "Patient registration, lab reports online and appointment booking for Nishtar Road practices."
          },
          {
                icon: "🌐",
                title: "Websites for Local Businesses",
                text: "Sites that rank for Multan searches and send enquiries to WhatsApp.",
                href: "/services/custom-web-development/",
                linkLabel: "Web Development"
          },
          {
                icon: "📱",
                title: "Field Staff Apps",
                text: "Apps for sales and collection staff working across south Punjab districts.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          }
    ],
    highlights: {
      tag: "Multan Industries",
      title: "Software for South Punjab's Agri, Education and Healthcare Sectors",
      cards: [
        { icon: "🌾", title: "Agri-Trading & Commission Agents", text: "Purchase and sale records, grower and buyer ledgers, daily rate updates and SMS or WhatsApp statements." },
        { icon: "🥭", title: "Produce Supply Chains", text: "Order, grading and dispatch tracking for produce businesses, similar to the supply-chain platform we built for Egg Produce." },
        { icon: "🎓", title: "Schools & Colleges", text: "Admissions, fee collection, attendance, results and parent communication in one system." },
        { icon: "🩺", title: "Clinics & Labs", text: "Appointments, patient records, lab reports and billing with secure access for doctors and staff." },
      ],
    },
    faqs: [
      { question: "Can the system send statements by SMS or WhatsApp?", answer: "Yes. We integrate SMS gateways and the WhatsApp Business API to send ledgers, fee reminders, reports and appointment confirmations automatically." },
      { question: "Will it work with slow internet connections?", answer: "We design lightweight interfaces and, where needed, offline-capable mobile apps that save data locally and sync when the connection returns." },
    ],
  },
  "software-house-peshawar": {
    caseStudyIds: ["zeparty", "purrchase-ai", "rankmora", "ai-video-production", "installmentguard", "quickdoctor-ie"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Wholesale Trading Software", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Stock, credit customers, supplier ledgers and daily cash"],
      ["Hospital Information System", "6 – 16 Weeks", "PKR 250,000 – 1,100,000", "OPD, admissions, pharmacy, lab and billing"],
      ["Startup MVP", "4 – 8 Weeks", "PKR 150,000 – 500,000", "First product version with logins, payments and an admin panel"],
      ["Bilingual Business Website", "2 – 3 Weeks", "PKR 35,000 – 120,000", "English and Urdu pages, WhatsApp enquiries and local SEO"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 25,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
    ],
    servicesTitle: "Services for Peshawar Businesses",
    services: [
          {
                icon: "🏪",
                title: "Wholesale Trading Software",
                text: "Stock, credit customers and supplier ledgers for traders in Karkhano and the city markets."
          },
          {
                icon: "🏥",
                title: "Hospital Information Systems",
                text: "OPD, admissions, pharmacy and billing for hospitals and diagnostic centres on University Road."
          },
          {
                icon: "🎓",
                title: "University & College Portals",
                text: "Student portals, online fee payment and exam results."
          },
          {
                icon: "🚀",
                title: "Startup MVPs",
                text: "A first version of a product in about 30 days for founders from local incubators.",
                href: "/mvp-development-company/",
                linkLabel: "MVP Development"
          },
          {
                icon: "🌐",
                title: "Bilingual Websites",
                text: "English and Urdu websites that reach customers in Khyber Pakhtunkhwa and beyond.",
                href: "/services/custom-web-development/",
                linkLabel: "Web Development"
          },
          {
                icon: "🚛",
                title: "Cross-Border Logistics Tools",
                text: "Consignment, customs document and transporter tracking for traders shipping to Afghanistan and Central Asia."
          }
    ],
    highlights: {
      tag: "Peshawar Industries",
      title: "Software for Peshawar's Traders, Hospitals and Startups",
      cards: [
        { icon: "🏪", title: "Wholesale & Trading", text: "Inventory, credit ledgers and multi-currency invoicing for wholesalers and traders dealing across the region." },
        { icon: "🏥", title: "Hospitals & Diagnostic Centres", text: "Patient registration, OPD queues, lab reports and billing, with Urdu and English interfaces for staff." },
        { icon: "🎓", title: "Universities & Colleges", text: "Student portals, fee management and online learning for institutions in University Town and beyond." },
        { icon: "🚀", title: "Startups", text: "MVPs for founders from Peshawar's incubators, built to launch quickly and scale without a rewrite." },
      ],
    },
    faqs: [
      { question: "Can you visit Peshawar for project meetings?", answer: "Yes. Peshawar is about two hours from our Rawalpindi office by motorway, so we can hold kickoff workshops and milestone reviews on-site." },
      { question: "Do you build multi-currency invoicing?", answer: "Yes. We build invoicing and ledgers that handle multiple currencies with exchange rates recorded per transaction." },
    ],
  },


  "software-house-gujranwala": {
    caseStudyIds: ["rizki-akbar-enterprise", "whatsapp-business-api", "installmentguard", "smart-links-cabling", "zahh-beverages", "odoo-service"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Factory ERP", "6 – 16 Weeks", "PKR 250,000 – 1,100,000", "Purchase, production, finished goods, dispatch and costing"],
      ["Dealer Ordering App", "6 – 12 Weeks", "PKR 200,000 – 700,000", "Dealers check stock and prices and order from their phones"],
      ["Dealer Credit & Warranty System", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Credit limits, recoveries, statements and warranty claims"],
      ["Product Catalogue Website", "2 – 3 Weeks", "PKR 35,000 – 120,000", "Full product range with specifications and dealer enquiry forms"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 25,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
    ],
    servicesTitle: "Services for Gujranwala Manufacturers",
    services: [
          {
                icon: "🏭",
                title: "Factory ERP",
                text: "Purchase, production, finished goods and dispatch for fan, steel and ceramics units."
          },
          {
                icon: "🧾",
                title: "Dealer Credit Ledgers",
                text: "Credit limits, recoveries and statements for hundreds of dealers, sent on WhatsApp."
          },
          {
                icon: "📦",
                title: "Dealer Ordering App",
                text: "Dealers check stock and prices and order from their phones.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "📚",
                title: "Product Catalogue Websites",
                text: "Full catalogues with specifications and dealer enquiry forms.",
                href: "/services/custom-web-development/",
                linkLabel: "Web Development"
          },
          {
                icon: "🔧",
                title: "After-Sales & Warranty",
                text: "Warranty registration, complaints and technician visits tracked to closure."
          },
          {
                icon: "📊",
                title: "Costing & Margin Reports",
                text: "Raw material prices, production cost and margin per product, updated daily."
          }
    ],
    highlights: {
      tag: "Gujranwala Industries",
      title: "Software for Gujranwala's Manufacturers and Traders",
      cards: [
        { icon: "🌀", title: "Fans & Electrical Goods", text: "Dealer portals, seasonal production planning and warranty registration for fan and appliance makers." },
        { icon: "🚿", title: "Sanitary Ware & Ceramics", text: "Product catalogues with finishes and sizes, showroom enquiries and dealer pricing." },
        { icon: "🔪", title: "Cutlery & Steel", text: "Order tracking for domestic and export buyers, with costing per batch." },
        { icon: "🧾", title: "Dealer Credit & Ledgers", text: "Credit limits, payment reminders on WhatsApp and dealer statements." },
      ],
    },
    faqs: [
      { question: "Do you visit Gujranwala for meetings?", answer: "Gujranwala is within easy reach of our Rawalpindi office by motorway, so we can hold kickoff workshops on-site for larger projects. Day-to-day work runs on WhatsApp and video calls." },
      { question: "Can you set up Odoo for a manufacturing company?", answer: "Yes. We implement Odoo manufacturing, inventory, sales and accounting modules and build custom add-ons where your process differs." },
    ],
  },
  "software-house-bahawalpur": {
    caseStudyIds: ["luxora-women", "saviored", "fix-it-bilal", "scale-with-ads", "google-review-removal", "whatsapp-business-api"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Cotton & Grain Trading Software", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Grower purchases, ginning, bales, buyer sales and daily rates"],
      ["School Fee & Results System", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Fee collection, attendance and results on low-cost phones"],
      ["First Online Store", "2 – 3 Weeks", "PKR 35,000 – 120,000", "Products, COD, courier booking and WhatsApp orders"],
      ["Offline-Ready Mobile App", "6 – 12 Weeks", "PKR 200,000 – 700,000", "Works on slow connections and syncs when signal returns"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 25,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
    ],
    servicesTitle: "Services for Bahawalpur and Cholistan Businesses",
    services: [
          {
                icon: "🌱",
                title: "Cotton & Grain Trading Software",
                text: "Purchases from growers, ginning, bales and buyer sales with daily rates."
          },
          {
                icon: "🏫",
                title: "Simple School Software",
                text: "Fee collection, attendance and results that work on cheap Android phones."
          },
          {
                icon: "🩺",
                title: "Clinic Booking & Records",
                text: "Appointments, prescriptions and patient history for small clinics."
          },
          {
                icon: "🛍️",
                title: "First Online Store",
                text: "A low-cost store with COD and courier booking for shops selling online for the first time.",
                href: "/services/ecommerce-solutions/",
                linkLabel: "E-commerce"
          },
          {
                icon: "🌐",
                title: "Local Business Websites",
                text: "Websites that show up for Bahawalpur searches and link to WhatsApp.",
                href: "/services/custom-web-development/",
                linkLabel: "Web Development"
          },
          {
                icon: "📱",
                title: "Mobile-First Apps",
                text: "Apps designed for slow connections and offline use in rural areas.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          }
    ],
    highlights: {
      tag: "Bahawalpur Industries",
      title: "What Bahawalpur Businesses Ask Us to Build",
      cards: [
        { icon: "🌱", title: "Agri-Trading & Cotton", text: "Purchase records, ginning and stock tracking, buyer and grower ledgers." },
        { icon: "🎓", title: "Schools & Academies", text: "Admissions, fee collection, attendance and results with SMS and WhatsApp alerts." },
        { icon: "🩺", title: "Clinics & Labs", text: "Appointments, patient records, lab reports and billing." },
        { icon: "🛍️", title: "Online Stores", text: "Shopify and WooCommerce stores with COD, courier booking and order confirmation." },
      ],
    },
    faqs: [
      { question: "Is custom software affordable for a small business in Bahawalpur?", answer: "We start with the one workflow that costs you the most time and build it as a small, fixed-price project. You can add modules later as the business grows." },
      { question: "Will the system work on mobile phones?", answer: "Yes. We design mobile-first, and where staff work in the field we build apps that keep working offline." },
    ],
  },
  "software-house-sialkot": {
    caseStudyIds: ["nw-canvas", "doughi", "rebecca-minkoff", "solettos", "horizon-sole", "million-dollar-funnels"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Export Catalogue & RFQ Website", "2 – 3 Weeks", "PKR 35,000 – 120,000", "Specifications, certifications and RFQ forms for importers"],
      ["Sample & Order Tracker", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Samples, approvals, bulk orders and buyer deadlines"],
      ["Export ERP with Documentation", "6 – 16 Weeks", "PKR 250,000 – 1,100,000", "Orders, production, QC records, invoices and packing lists"],
      ["Wholesale B2B Store", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Buyer logins, price tiers, repeat orders and online payments"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 25,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
    ],
    servicesTitle: "Services for Sialkot Exporters",
    services: [
          {
                icon: "⚽",
                title: "Export Catalogue & RFQ",
                text: "Product catalogues with specifications and RFQ forms that reach importers abroad.",
                href: "/services/custom-web-development/",
                linkLabel: "Web Development"
          },
          {
                icon: "🧪",
                title: "Sample & Order Tracking",
                text: "Every sample, approval and bulk order tracked against buyer deadlines."
          },
          {
                icon: "🛃",
                title: "Shipment Documentation",
                text: "Invoices, packing lists and certificates of origin generated per shipment."
          },
          {
                icon: "✅",
                title: "Quality & Compliance Records",
                text: "Inspection results, batch traceability and audit files for surgical and sports goods buyers."
          },
          {
                icon: "🛒",
                title: "B2B Store for Wholesale",
                text: "Online wholesale ordering for repeat buyers with their own price tiers.",
                href: "/services/ecommerce-solutions/",
                linkLabel: "E-commerce"
          },
          {
                icon: "🤖",
                title: "Buyer Email Automation",
                text: "Enquiry replies, follow-ups and quotation drafts handled with AI.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          }
    ],
    highlights: {
      tag: "Sialkot Exporters",
      title: "Software for Sialkot's Export Industries",
      cards: [
        { icon: "⚽", title: "Sports Goods", text: "Catalogues for balls, gloves and teamwear with custom-order and branding requests." },
        { icon: "🩺", title: "Surgical & Dental Instruments", text: "Product catalogues with specifications, certifications and distributor enquiries." },
        { icon: "👜", title: "Leather & Apparel", text: "Sample tracking, buyer approvals and production status for every order." },
        { icon: "📦", title: "Shipment Documentation", text: "Order, invoice and shipping document management so nothing is missed at dispatch." },
      ],
    },
    faqs: [
      { question: "Can international buyers place orders through the website?", answer: "Yes. We build RFQ and custom-order forms, distributor logins with their own prices, and order status pages buyers can check themselves." },
      { question: "Do you also handle SEO for export websites?", answer: "Yes. We optimise product and category pages for the searches buyers in Europe and North America make, and build the site to load fast worldwide." },
    ],
  },
  "software-house-sargodha": {
    caseStudyIds: ["egg-produce", "subdiv", "zingo-assist", "motion-graphic-explainers", "top-performance", "devsynx-platform"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Kinnow Factory System", "6 – 16 Weeks", "PKR 250,000 – 1,100,000", "Fruit intake, grading lines, cartons, containers and margins per lot"],
      ["Cold Storage Management", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Chambers, client stock, rent and release slips"],
      ["Farm & Packing Staff App", "6 – 12 Weeks", "PKR 200,000 – 700,000", "Offline data entry for farm and packing teams"],
      ["Exporter Website", "2 – 3 Weeks", "PKR 35,000 – 120,000", "Orchards, capacity and certifications for foreign buyers"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 25,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
    ],
    servicesTitle: "Services for Sargodha's Kinnow and Agri Businesses",
    services: [
          {
                icon: "🍊",
                title: "Kinnow Factory Software",
                text: "Fruit intake, waxing and grading lines, carton stock and export containers per season."
          },
          {
                icon: "❄️",
                title: "Cold Storage Management",
                text: "Chamber occupancy, client stock, rent and release slips."
          },
          {
                icon: "🚛",
                title: "Season Dispatch Tracking",
                text: "Trucks, drivers and deliveries to Karachi port and domestic buyers."
          },
          {
                icon: "📱",
                title: "Offline Farm Apps",
                text: "Data entry apps for farm and packing staff that sync when signal returns.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "🎓",
                title: "Academy Management",
                text: "Admissions, fees and attendance for colleges and academies around University Road."
          },
          {
                icon: "🌐",
                title: "Exporter Websites",
                text: "Websites that present your orchards, capacity and certifications to foreign buyers.",
                href: "/services/custom-web-development/",
                linkLabel: "Web Development"
          }
    ],
    highlights: {
      tag: "Sargodha Industries",
      title: "Software for Sargodha's Citrus, Agri and Education Sectors",
      cards: [
        { icon: "🍊", title: "Kinnow Processing & Export", text: "Grower purchases, grading, packing lines, cold storage and export orders in one system." },
        { icon: "🚚", title: "Season Logistics", text: "Truck dispatch, delivery tracking and buyer updates during the peak season." },
        { icon: "🎓", title: "Colleges & Academies", text: "Admissions, fees, attendance and parent communication." },
        { icon: "🏪", title: "Retail & Wholesale", text: "POS, stock across branches and credit customer ledgers." },
      ],
    },
    faqs: [
      { question: "Can the system handle the busy season?", answer: "Yes. We design for peak weeks: fast data entry screens, offline mobile apps for packing and farm staff, and daily summary reports for owners." },
      { question: "Can you track profit per lot or per buyer?", answer: "Yes. We record costs from purchase through packing and freight so you can see margins per lot, per buyer and per season." },
    ],
  },

  "software-house-gujrat": {
    caseStudyIds: ["alpha-ahead-real-estate", "entiix", "employee-security-crm", "ai-calling-agent", "rbo-accounting", "google-workspace-security"],
    servicesTitle: "What We Build for Gujrat Companies",
    services: [
      { icon: "📦", title: "Dealer & Distributor Portals", text: "Dealers in other cities see their prices, credit limit and stock, place orders and track dispatch from a phone." },
      { icon: "🏭", title: "Production & Inventory", text: "Raw material, work-in-progress and finished goods for fan, furniture and ceramics units, with seasonal planning." },
      { icon: "🛋️", title: "Catalogue & Showroom Websites", text: "Product catalogues with sizes, finishes and prices that bring enquiries from Lahore, Islamabad and abroad.", href: "/services/custom-web-development/", linkLabel: "Web Development" },
      { icon: "📱", title: "Owner Apps for Overseas Families", text: "Android and iOS apps that show sales, rent, expenses and site photos to owners living in Europe or the Gulf.", href: "/services/mobile-app-development/", linkLabel: "Mobile Apps" },
      { icon: "🏠", title: "Installment & Rent Management", text: "Property installments, tenant rent, receipts and automatic reminders by SMS or WhatsApp." },
      { icon: "🤖", title: "WhatsApp & AI Automation", text: "Order confirmations, payment reminders and enquiry replies handled automatically.", href: "/ai-automation-agency/", linkLabel: "AI Automation" },
    ],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Dealer & Distributor Portal", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Dealer logins, prices, credit, orders and dispatch tracking"],
      ["Fan or Furniture Factory ERP", "6 – 16 Weeks", "PKR 250,000 – 1,100,000", "Production, inventory, warranty claims and costing"],
      ["Overseas Owner App", "6 – 12 Weeks", "PKR 200,000 – 700,000", "Sales, rent, expenses and site photos for owners abroad"],
      ["Showroom Catalogue Website", "2 – 3 Weeks", "PKR 35,000 – 120,000", "Products, finishes and prices with WhatsApp enquiries"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 25,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
    ],
    highlights: {
      tag: "Gujrat Industries",
      title: "Software for Gujrat's Fan, Furniture and Overseas-Owned Businesses",
      cards: [
        { icon: "🌀", title: "Fan Manufacturers", text: "Dealer ordering, seasonal production planning, warranty claims and spare-parts stock." },
        { icon: "🪑", title: "Furniture & Ceramics", text: "Online catalogues with finishes and sizes, custom order tracking and showroom stock." },
        { icon: "✈️", title: "Overseas Owners", text: "Phone dashboards for sales, rent, expenses and construction progress, with WhatsApp alerts." },
        { icon: "🏘️", title: "Property & Installments", text: "Plot and house installment plans, receipts, reminders and buyer statements." },
      ],
    },
    faqs: [
      { question: "Can you manage warranty claims for a fan manufacturer?", answer: "Yes. Dealers or customers register a claim with the serial number and photos, your service team tracks it to repair or replacement, and you see which models and batches cause the most claims." },
      { question: "Can buyers abroad pay installments for a property in Gujrat?", answer: "Yes. We build installment systems with payment schedules, online or bank receipts, automatic reminders and statements that buyers living abroad can check at any time." },
    ],
  },

  "software-house-abbottabad": {
    caseStudyIds: ["ygi-holiday-homes", "saviored", "quickdoctor-ie", "alphamedi-assist", "devsynx-attendance-hr", "google-review-removal"],
    keepFaqs: [0, 2, 3],
    pricing: [
      ["Hotel & Guest House Booking", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Live availability, seasonal rates, advance payments and WhatsApp confirmations"],
      ["School or College Portal", "6 – 16 Weeks", "PKR 250,000 – 1,100,000", "Admissions, hostel, fees, results and parent app"],
      ["Clinic Appointment System", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Online booking, patient records, prescriptions and reminders"],
      ["Tourism or Business Website", "2 – 3 Weeks", "PKR 35,000 – 120,000", "Photo galleries, maps, reviews and WhatsApp enquiries"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 25,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
    ],
    servicesTitle: "Services for Abbottabad and Hazara",
    services: [
      { icon: "🏔️", title: "Hotel & Guest House Booking", text: "Direct bookings for properties in Nathia Gali, Thandiani and Abbottabad, so you pay less commission to booking sites." },
      { icon: "🎓", title: "School, College & Hostel Systems", text: "Admissions, hostel allocation, fees and results for institutions that take students from across Pakistan." },
      { icon: "🩺", title: "Hospital & Clinic Software", text: "OPD queues, appointments, lab reports and billing for hospitals and clinics serving Hazara." },
      { icon: "🗺️", title: "Tourism Websites", text: "Tour operator and resort sites with packages, galleries and enquiry forms that rank for travel searches.", href: "/services/custom-web-development/", linkLabel: "Web Development" },
      { icon: "📱", title: "Mobile Apps", text: "Booking, student and patient apps for Android and iOS built in Flutter.", href: "/services/mobile-app-development/", linkLabel: "Mobile Apps" },
      { icon: "⭐", title: "Reviews & Reputation", text: "Automatic review requests after a stay or visit, and alerts when a new review appears." },
    ],
    highlights: {
      tag: "Abbottabad Sectors",
      title: "Software for Abbottabad's Tourism, Education and Healthcare",
      cards: [
        { icon: "🏨", title: "Seasonal Tourism", text: "Handle summer and snowfall peaks with online bookings, deposits and channel calendars." },
        { icon: "🏫", title: "Education Hub", text: "Portals for schools, colleges and academies, including hostel and transport fees." },
        { icon: "🏥", title: "Regional Healthcare", text: "Systems for hospitals and clinics that see patients from across Hazara." },
        { icon: "🛍️", title: "Local Retail", text: "POS and stock for shops in Supply Bazaar and Mandian, with online orders." },
      ],
    },
    faqs: [
      { question: "Can a school or college take admission forms and fees online?", answer: "Yes. Students apply online, upload documents and pay fees through bank or mobile wallet payments, and your office reviews applications and issues fee vouchers from one dashboard." },
      { question: "Do you visit Abbottabad for meetings?", answer: "Yes. Abbottabad is about two hours from our Islamabad team, so we can hold the kickoff and key reviews in person. Weekly progress calls happen online." },
    ],
  },

  "software-house-hyderabad": {
    caseStudyIds: ["egg-produce", "employee-security-crm", "installmentguard", "saviored", "top-performance", "whatsapp-business-api"],
    keepFaqs: [0, 2, 3],
    pricing: [
      ["Wholesale & Salesman Order System", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Route order booking app, warehouse dispatch, shop balances and recoveries"],
      ["Factory Stock & Orders (SITE / Kotri)", "6 – 16 Weeks", "PKR 250,000 – 1,100,000", "Raw material, production, finished goods and buyer orders"],
      ["Student & Fee Portal", "4 – 8 Weeks", "PKR 150,000 – 500,000", "Admissions, fee vouchers, results and parent SMS"],
      ["Business Website", "2 – 3 Weeks", "PKR 35,000 – 120,000", "Products or services, Sindhi/Urdu/English text, WhatsApp enquiries"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 25,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
    ],
    servicesTitle: "Services for Hyderabad and Interior Sindh",
    services: [
      { icon: "🚚", title: "Salesman Route Apps", text: "Order booking, shop visits and cash recovery on Android phones for distributors covering interior Sindh.", href: "/services/mobile-app-development/", linkLabel: "Mobile Apps" },
      { icon: "🏬", title: "Wholesale & Dealer Ledgers", text: "Credit limits, daily rates and statements for grain, cotton and general traders." },
      { icon: "💍", title: "Bangle & Handicraft Sellers", text: "Online catalogues and stores that let Hyderabad makers sell bangles and crafts across Pakistan and abroad.", href: "/services/ecommerce-solutions/", linkLabel: "E-commerce" },
      { icon: "🏭", title: "Factory Systems for SITE & Kotri", text: "Stock, production and buyer orders for textile, food and packaging units." },
      { icon: "🎓", title: "Student & Fee Portals", text: "Admissions, fee collection and results for colleges and academies near Jamshoro." },
      { icon: "🌐", title: "Multilingual Websites", text: "Sites in English, Urdu and Sindhi that reach customers across the province.", href: "/services/custom-web-development/", linkLabel: "Web Development" },
    ],
    highlights: {
      tag: "Hyderabad Sectors",
      title: "Software for Hyderabad's Trade, Industry and Education",
      cards: [
        { icon: "🌾", title: "Grain & Produce Trade", text: "Purchase, storage and sale records with daily market rates." },
        { icon: "🛣️", title: "Karachi Supply Chains", text: "Order and dispatch tracking for suppliers delivering to Karachi buyers." },
        { icon: "🏫", title: "Education Sector", text: "Systems for colleges, academies and hostels serving Jamshoro's students." },
        { icon: "🛍️", title: "Retail & Online Sales", text: "POS for shops in Saddar and Latifabad, plus online stores." },
      ],
    },
    faqs: [
      { question: "Can a factory in Kotri or the SITE area track stock and buyer orders online?", answer: "Yes. We build systems that record raw material, production and finished goods, link them to buyer orders and show owners what is ready, pending and late, on a computer or a phone." },
    ],
  },

  "app-development-company-dallas": {
    caseStudyIds: ["contractor-leads", "roofing-systems", "ai-calling-agent", "ballchart", "zingo-assist", "qualified-leads-x"],
    highlights: { tag: "DFW Apps", title: "Apps Dallas\u2013Fort Worth Businesses Ask Us For", cards: [
            {
                  icon: "🛠️",
                  title: "Contractors & Roofers",
                  text: "Lead capture, estimates and job tracking from the first call to the final invoice."
            },
            {
                  icon: "🏥",
                  title: "Healthcare Practices",
                  text: "Patient booking, reminders and secure messaging for clinics across the metroplex."
            },
            {
                  icon: "🏢",
                  title: "Corporate Teams",
                  text: "Internal apps for sales, inspections and approvals at Dallas headquarters."
            },
            {
                  icon: "🛍️",
                  title: "Retail & Restaurants",
                  text: "Ordering, loyalty and push campaigns for local and franchise brands."
            }
      ] },
    servicesTitle: "App Development Services in Dallas",
    services: [
          {
                icon: "🧰",
                title: "Field Service & Dispatch Apps",
                text: "Job scheduling, technician routing, photos, signatures and invoices for DFW contractors and home-service firms.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "📞",
                title: "AI Call Answering",
                text: "Voice agents that answer, qualify and book callers after hours, so leads from your app and ads are never missed.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          },
          {
                icon: "🏈",
                title: "Sports & Fan Apps",
                text: "Stats, schedules, live scores and team management, like the BallChart platform we built."
          },
          {
                icon: "🏪",
                title: "Franchise & Multi-Location Apps",
                text: "Ordering, loyalty and location finders shared across many DFW branches."
          },
          {
                icon: "🚀",
                title: "Startup MVPs",
                text: "A first iOS and Android release in about 30 days for founders in Dallas and Plano.",
                href: "/mvp-development-company/",
                linkLabel: "MVP Development"
          },
          {
                icon: "🎨",
                title: "App UX Design",
                text: "Clickable prototypes tested with real users before a line of code is written.",
                href: "/services/ui-ux-design/",
                linkLabel: "UI/UX Design"
          }
    ],
    pricing: [
      ["App MVP (iOS + Android)", "4 – 8 Weeks", "Fixed price in USD, paid per milestone", "Core features, admin panel, store submission"],
      ["Field Service App", "8 – 14 Weeks", "Fixed price in USD, paid per milestone", "Scheduling, dispatch, offline mode, invoicing"],
      ["Dedicated App Developer", "Monthly, min. 1 month", "Flat monthly rate in USD", "Flutter or React Native engineer in your team"],
      ["App Support & Updates", "Ongoing", "Monthly retainer in USD", "OS updates, crash fixes, store compliance"],
    ],
    faqs: [{ question: "Can the app send leads straight into our CRM?", answer: "Yes. Quote requests, bookings and calls captured in the app can go directly into HubSpot, Salesforce, GoHighLevel or your own CRM, with notifications to your sales team." }, { question: "Do you publish the app to the App Store and Google Play for us?", answer: "Yes. We prepare store listings, screenshots and privacy details, submit the app under your own developer accounts and handle reviewer questions until it is approved." }, { question: "Can my app work for technicians without signal on a job site?", answer: "Yes. We build offline-first apps that save job notes, photos and signatures on the phone and sync them automatically when the technician is back in coverage." }],
  },

  "app-development-company-houston": {
    caseStudyIds: ["sigma-smart-tech", "egg-produce", "alphamedi-assist", "quickdoctor-ie", "employee-security-crm", "roofing-systems"],
    highlights: { tag: "Houston Apps", title: "Apps for Houston's Energy, Medical and Logistics Sectors", cards: [
            {
                  icon: "⛑️",
                  title: "Safety & Compliance",
                  text: "Digital permits, toolbox talks and incident reports instead of paper."
            },
            {
                  icon: "🩺",
                  title: "Patient Experience",
                  text: "Booking, reminders and secure messaging for clinics and specialists."
            },
            {
                  icon: "📦",
                  title: "Distribution",
                  text: "Route planning, delivery photos and customer notifications."
            },
            {
                  icon: "🔌",
                  title: "Connected Devices",
                  text: "Bluetooth and Wi-Fi device apps for equipment and smart homes."
            }
      ] },
    servicesTitle: "App Development Services in Houston",
    services: [
          {
                icon: "🛢️",
                title: "Industrial Field Apps",
                text: "Inspections, safety checklists and asset logs for energy and industrial crews, with offline mode.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "🏥",
                title: "Healthcare & Telehealth Apps",
                text: "Appointment, telehealth and patient apps for practices around the Texas Medical Center."
          },
          {
                icon: "🚢",
                title: "Logistics & Delivery Apps",
                text: "Driver apps, proof of delivery and shipment tracking for Houston's port and distribution businesses."
          },
          {
                icon: "🏠",
                title: "Smart Home & IoT Apps",
                text: "Device control and monitoring apps like the one we built for Sigma Smart Tech."
          },
          {
                icon: "🌾",
                title: "Supply Chain Apps",
                text: "Ordering and delivery tracking for food and produce suppliers, as in our Egg Produce project."
          },
          {
                icon: "🤖",
                title: "AI Assistants",
                text: "Chat and voice assistants that handle bookings and common questions.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          }
    ],
    pricing: [
      ["App MVP (iOS + Android)", "4 – 8 Weeks", "Fixed price in USD, paid per milestone", "Core features, admin panel, store submission"],
      ["Offline Field / Inspection App", "8 – 14 Weeks", "Fixed price in USD, paid per milestone", "Forms, photos, GPS, sync and PDF reports"],
      ["Telehealth or Booking App", "8 – 16 Weeks", "Fixed price in USD, paid per milestone", "Appointments, video, payments and reminders"],
      ["App Support & Updates", "Ongoing", "Monthly retainer in USD", "OS updates, crash fixes, store compliance"],
    ],
    faqs: [{ question: "Can you build HIPAA-ready healthcare apps?", answer: "We build healthcare apps with encrypted data, access controls, audit logs and hosting on HIPAA-eligible cloud services, and we sign a Business Associate Agreement where the project requires it." }],
  },

  "app-development-company-calgary": {
    caseStudyIds: ["installmentguard", "devsynx-attendance-hr", "superhuman-mail", "saviored", "mdt-control", "contractor-leads"],
    highlights: { tag: "Calgary Apps", title: "Apps for Alberta's Energy, Agri and Trades Businesses", cards: [
            {
                  icon: "⚡",
                  title: "Energy Services",
                  text: "Inspection, maintenance and safety apps for field technicians."
            },
            {
                  icon: "🌾",
                  title: "Agriculture",
                  text: "Farm records, equipment logs and grain delivery tracking."
            },
            {
                  icon: "🏗️",
                  title: "Construction & Trades",
                  text: "Daily reports, photos, timesheets and change orders."
            },
            {
                  icon: "🏙️",
                  title: "Local Startups",
                  text: "MVPs for founders building in Calgary's tech community."
            }
      ] },
    servicesTitle: "App Development Services in Calgary",
    services: [
          {
                icon: "❄️",
                title: "Rugged Field Apps",
                text: "Apps that work in the cold, with gloves and without signal, for energy, construction and agriculture crews.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "⏱️",
                title: "Workforce & Timesheet Apps",
                text: "Clock-in, job costing and payroll exports, based on the attendance system we built."
          },
          {
                icon: "🏭",
                title: "Industrial Monitoring",
                text: "Dashboards and alerts for equipment and sensors, drawing on our MDT Control SCADA work."
          },
          {
                icon: "🎓",
                title: "Learning Apps",
                text: "Course and training apps, like the Saviored e-learning platform."
          },
          {
                icon: "💳",
                title: "Payments & Installments",
                text: "Recurring billing and installment tracking apps."
          },
          {
                icon: "🚀",
                title: "Startup MVPs",
                text: "Launch-ready iOS and Android apps for Calgary founders in about 30 days.",
                href: "/mvp-development-company/",
                linkLabel: "MVP Development"
          }
    ],
    pricing: [
      ["App MVP (iOS + Android)", "4 – 8 Weeks", "Fixed price in CAD, paid per milestone", "Core features, admin panel, store submission"],
      ["Offline Field App", "8 – 14 Weeks", "Fixed price in CAD, paid per milestone", "Forms, photos, GPS, offline sync"],
      ["Dedicated App Developer", "Monthly, min. 1 month", "Flat monthly rate in CAD", "Engineer working in Mountain Time mornings"],
      ["App Support & Updates", "Ongoing", "Monthly retainer in CAD", "OS updates, crash fixes, store compliance"],
    ],
    faqs: [{ question: "How long does a field app take to build?", answer: "A focused field app with forms, photos and offline sync usually takes 8 to 14 weeks. We release a first version to a small crew early, collect feedback from the field and then roll it out to everyone." }, { question: "Do you build apps that work in very cold weather?", answer: "Yes. We design for field conditions: large buttons that work with gloves, high-contrast screens for bright snow, and offline storage so crews can keep working where there is no signal, with data syncing later." }, { question: "Can the app connect to our existing accounting or payroll system?", answer: "Yes. We connect timesheets, job costs and invoices to tools such as QuickBooks or Xero, or to your own system through an API, so the office does not re-enter data." }, { question: "Can you invoice a Canadian company in CAD?", answer: "Yes. We quote and invoice in CAD, sign Canadian-law contracts on request and assign all IP to your company." }],
  },

  "app-development-company-melbourne": {
    caseStudyIds: ["suuvo", "spicify-app", "glitchy-digital-marketing", "purrchase-ai", "quickdoctor-ie", "zingo-assist"],
    highlights: { tag: "Melbourne Apps", title: "Apps for Melbourne's Consumer, Health and Hospitality Brands", cards: [
            {
                  icon: "🍽️",
                  title: "Food & Venues",
                  text: "Ordering and loyalty for cafés and restaurants."
            },
            {
                  icon: "🏃",
                  title: "Sport & Fitness",
                  text: "Bookings, memberships and training apps."
            },
            {
                  icon: "🎓",
                  title: "Education",
                  text: "Student, course and campus apps."
            },
            {
                  icon: "🧑‍💻",
                  title: "Startups",
                  text: "MVPs and second versions for funded teams."
            }
      ] },
    servicesTitle: "App Development Services in Melbourne",
    services: [
          {
                icon: "📱",
                title: "Consumer & Social Apps",
                text: "Feeds, profiles, chat and creator tools, like Suuvo and Spicify.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "☕",
                title: "Hospitality Apps",
                text: "Ordering, loyalty and table booking for cafés, restaurants and venues."
          },
          {
                icon: "🩺",
                title: "Health & Telehealth",
                text: "Booking and consultation apps, drawing on our QuickDoctor work."
          },
          {
                icon: "🛍️",
                title: "Shopping Apps",
                text: "AI-assisted shopping and e-commerce apps such as Purrchase AI."
          },
          {
                icon: "🎨",
                title: "App UX Design",
                text: "Research, prototypes and design systems before development.",
                href: "/services/ui-ux-design/",
                linkLabel: "UI/UX Design"
          },
          {
                icon: "🚀",
                title: "Startup MVPs",
                text: "A first release in about 30 days for Melbourne founders.",
                href: "/mvp-development-company/",
                linkLabel: "MVP Development"
          }
    ],
    pricing: [
      ["App MVP (iOS + Android)", "4 – 8 Weeks", "Fixed price in AUD, paid per milestone", "Core features, admin panel, store submission"],
      ["Consumer / Social App", "10 – 16 Weeks", "Fixed price in AUD, paid per milestone", "Profiles, feeds, chat, notifications, analytics"],
      ["Dedicated App Developer", "Monthly, min. 1 month", "Flat monthly rate in AUD", "Engineer overlapping the AEST afternoon"],
      ["App Support & Updates", "Ongoing", "Monthly retainer in AUD", "OS updates, crash fixes, store compliance"],
    ],
    faqs: [{ question: "Do you sign NDAs and Australian contracts?", answer: "Yes. We sign an NDA before discussing your idea and can work under an Australian-law services agreement that assigns all intellectual property to your company." }, { question: "Do you work with Australian startups after launch?", answer: "Yes. Many founders keep us on a monthly retainer after launch to ship new features, fix issues and keep the app updated for each new iOS and Android release." }, { question: "Can you take over an app another agency started?", answer: "Yes. We review the existing code, fix urgent issues, document what is there and then continue development, or recommend a rebuild only if the code cannot be maintained." }, { question: "How do you work across the time difference with Melbourne?", answer: "Pakistan is 5 to 6 hours behind Melbourne, so our morning overlaps your afternoon for live calls, and you wake up to finished work and a written update." }],
  },

  "app-development-company-dubai": {
    caseStudyIds: ["zeparty", "horizone-invest", "ygi-holiday-homes", "ustaad-ae", "whatsapp-business-api", "fix-it-bilal"],
    highlights: { tag: "Dubai Apps", title: "Apps Dubai Businesses Ask Us For", cards: [
            {
                  icon: "🏢",
                  title: "Property",
                  text: "Listings, investor portals and short-term rental bookings."
            },
            {
                  icon: "🛠️",
                  title: "Home Services",
                  text: "Technician booking, live tracking and payments."
            },
            {
                  icon: "🛍️",
                  title: "Retail",
                  text: "Shopping apps with loyalty and delivery."
            },
            {
                  icon: "🎟️",
                  title: "Events & Lifestyle",
                  text: "Tickets, guest lists and social features."
            }
      ] },
    servicesTitle: "App Development Services in Dubai",
    services: [
          {
                icon: "🌐",
                title: "Arabic & English Apps",
                text: "Right-to-left Arabic layouts and bilingual content built in from the first screen.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "🏙️",
                title: "Real Estate & Holiday Home Apps",
                text: "Listings, viewings and booking apps, like our YGI Holiday Homes and Horizone Invest projects."
          },
          {
                icon: "🔧",
                title: "On-Demand Service Apps",
                text: "Booking, tracking and payments for home services, as in Fix It Bilal."
          },
          {
                icon: "🎉",
                title: "Social & Events Apps",
                text: "Event discovery, tickets and social features, like Zeparty."
          },
          {
                icon: "💬",
                title: "WhatsApp Integration",
                text: "Bookings, confirmations and support over the WhatsApp Business API."
          },
          {
                icon: "💳",
                title: "Payments & BNPL",
                text: "Card, Apple Pay and buy-now-pay-later options such as Tabby or Tamara."
          }
    ],
    pricing: [
      ["App MVP (iOS + Android)", "4 – 8 Weeks", "Fixed price in AED, paid per milestone", "Core features, Arabic/English, store submission"],
      ["Booking / On-Demand App", "8 – 14 Weeks", "Fixed price in AED, paid per milestone", "Customer + provider apps, tracking, payments"],
      ["Dedicated App Developer", "Monthly, min. 1 month", "Flat monthly rate in AED", "Engineer overlapping Gulf working hours"],
      ["App Support & Updates", "Ongoing", "Monthly retainer in AED", "OS updates, crash fixes, store compliance"],
    ],
    faqs: [{ question: "Who owns the app and the code?", answer: "You do. The source code, design files and App Store and Google Play accounts belong to your company, and we transfer everything at each paid milestone." }, { question: "Do you build apps in Arabic?", answer: "Yes. We design right-to-left Arabic layouts alongside English, handle Arabic fonts and numbers correctly, and test both languages on iOS and Android." }],
  },

  "app-development-company-doha": {
    caseStudyIds: ["top-performance", "spicify-app", "superhuman-mail", "glitchy-digital-marketing", "devsynx-attendance-hr", "ai-calling-agent"],
    highlights: { tag: "Doha Apps", title: "Apps for Qatar's Retail, Services and Enterprise Teams", cards: [
            {
                  icon: "🛍️",
                  title: "Retail Brands",
                  text: "Catalogue, loyalty and delivery apps."
            },
            {
                  icon: "🏗️",
                  title: "Contractors",
                  text: "Workforce, attendance and site reporting apps."
            },
            {
                  icon: "🏨",
                  title: "Hospitality",
                  text: "Booking and guest service apps."
            },
            {
                  icon: "🏛️",
                  title: "Enterprises",
                  text: "Internal apps for approvals, requests and reporting."
            }
      ] },
    servicesTitle: "App Development Services in Doha",
    services: [
          {
                icon: "🛒",
                title: "Retail & Shopping Apps",
                text: "Shopping apps for Qatari retailers, building on our Top Performance e-commerce work.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "🌐",
                title: "Arabic & English Apps",
                text: "Bilingual apps with right-to-left Arabic layouts."
          },
          {
                icon: "👥",
                title: "Staff & HR Apps",
                text: "Attendance, leave and field staff apps for companies with large teams."
          },
          {
                icon: "📧",
                title: "Productivity Apps",
                text: "Email, messaging and task apps, like Superhuman Mail."
          },
          {
                icon: "🤖",
                title: "AI Voice & Chat",
                text: "Assistants that answer customers in Arabic or English.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          },
          {
                icon: "🚀",
                title: "Startup MVPs",
                text: "First releases for Qatari founders in about 30 days.",
                href: "/mvp-development-company/",
                linkLabel: "MVP Development"
          }
    ],
    pricing: [
      ["App MVP (iOS + Android)", "4 – 8 Weeks", "Fixed price in QAR, paid per milestone", "Core features, Arabic/English, store submission"],
      ["Retail / Loyalty App", "8 – 14 Weeks", "Fixed price in QAR, paid per milestone", "Catalogue, cart, loyalty, push campaigns"],
      ["Workforce App", "6 – 12 Weeks", "Fixed price in QAR, paid per milestone", "Attendance, leave, tasks, manager dashboard"],
      ["App Support & Updates", "Ongoing", "Monthly retainer in QAR", "OS updates, crash fixes, store compliance"],
    ],
    faqs: [{ question: "Do you provide designs before development starts?", answer: "Yes. We start with wireframes and a clickable prototype in both Arabic and English, review it with your team and only begin development once the screens are approved." }, { question: "Can you support the app after it launches?", answer: "Yes. Our monthly support plan covers crash monitoring, fixes, security updates and changes needed for each new iOS and Android version, plus small improvements." }, { question: "Can the app accept payments from customers in Qatar?", answer: "Yes. We integrate card payments and Apple Pay through payment gateways that operate in Qatar, and can add cash on delivery for retail orders." }, { question: "Can staff and managers use the same app?", answer: "Yes. We build role-based apps where staff see their own tasks, attendance and requests, and managers see team dashboards, approvals and reports." }, { question: "Can you build an attendance app for a Qatar company with many sites?", answer: "Yes. Staff clock in with GPS or QR codes at each site, managers approve leave and overtime in the app, and HR exports reports for payroll." }],
  },

  "software-development-company-riyadh": {
    caseStudyIds: ["zeparty", "purrchase-ai", "superhuman-mail", "mizn-abayas", "ai-calling-agent", "whatsapp-business-api"],
    highlights: { tag: "Saudi Software", title: "What Saudi Businesses Ask Us to Build", cards: [
            {
                  icon: "🛒",
                  title: "Retail & Fashion",
                  text: "Online stores, loyalty and delivery for Saudi brands."
            },
            {
                  icon: "🏢",
                  title: "Enterprises",
                  text: "Portals, approvals and reporting for growing companies."
            },
            {
                  icon: "🚚",
                  title: "Logistics",
                  text: "Fleet, delivery and warehouse tools across Riyadh, Jeddah and Dammam."
            },
            {
                  icon: "🎓",
                  title: "Training & Education",
                  text: "Course, booking and certification platforms."
            }
      ] },
    servicesTitle: "Software We Build for Saudi Companies",
    services: [
          {
                icon: "🧾",
                title: "ZATCA E-Invoicing Integration",
                text: "Invoicing systems connected to ZATCA's FATOORA requirements, with QR codes and compliant tax invoices.",
                href: "/custom-software-development-company/",
                linkLabel: "Custom Software"
          },
          {
                icon: "🛍️",
                title: "E-commerce for Saudi Brands",
                text: "Stores with Mada, Apple Pay and buy-now-pay-later options, in Arabic and English.",
                href: "/services/ecommerce-solutions/",
                linkLabel: "E-commerce"
          },
          {
                icon: "📱",
                title: "Arabic-First Apps",
                text: "Mobile and web apps designed right-to-left from the first screen.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "🤖",
                title: "Arabic AI Agents",
                text: "Voice and chat agents that answer and qualify customers in Arabic.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          },
          {
                icon: "🎉",
                title: "Consumer & Social Platforms",
                text: "Events, communities and content apps, like our Zeparty platform."
          },
          {
                icon: "👩‍💻",
                title: "Dedicated Developers",
                text: "Engineers working Saudi business hours, billed monthly in SAR or USD.",
                href: "/hire-dedicated-developers/",
                linkLabel: "Hire Developers"
          }
    ],
    pricing: [
      ["Fixed-Scope Software Project", "3 – 12 Weeks", "Fixed price in SAR, paid per milestone", "Portals, internal tools, MVPs and integrations with a clear feature list"],
      ["Dedicated Developer", "Monthly, min. 1 month", "Flat monthly rate in SAR", "A full-time engineer working inside your team and tools"],
      ["Product Team", "Monthly, min. 3 months", "Monthly team rate in SAR", "Project manager, designer and engineers for an ongoing roadmap"],
      ["Support & Maintenance", "Ongoing", "Monthly retainer in SAR", "Monitoring, security updates, fixes and small improvements"],
    ],
    faqs: [{ question: "Can you work with teams in Jeddah and Dammam as well?", answer: "Yes. We work remotely with companies across Saudi Arabia, holding video calls during Saudi business hours and sharing progress in a weekly demo and a shared project board." }, { question: "Can you make our invoicing compliant with ZATCA e-invoicing?", answer: "Yes. We build or update invoicing systems to produce compliant e-invoices with the required QR code and integrate them with ZATCA's platform, or configure an ERP that supports it." }, { question: "Do you build fully Arabic interfaces?", answer: "Yes. We design right-to-left layouts, use proper Arabic fonts and numbers, and test every screen in Arabic and English." }],
  },
  "software-development-company-toronto": {
    caseStudyIds: ["qualified-leads-x", "employee-security-crm", "rankmora", "entiix", "installmentguard", "ai-calling-agent"],
    highlights: { tag: "Toronto Software", title: "Software for Toronto Startups and Growing Companies", cards: [
            {
                  icon: "💼",
                  title: "B2B SaaS",
                  text: "Products for sales, operations and finance teams."
            },
            {
                  icon: "🏦",
                  title: "Fintech Tools",
                  text: "Dashboards, payments and reporting for financial services."
            },
            {
                  icon: "🏥",
                  title: "Health Services",
                  text: "Booking and patient tools built with privacy in mind."
            },
            {
                  icon: "🏗️",
                  title: "Trades & Field Services",
                  text: "Scheduling, quotes and invoicing for service businesses."
            }
      ] },
    servicesTitle: "Software We Build for Toronto Companies",
    services: [
          {
                icon: "☁️",
                title: "SaaS Products",
                text: "Multi-tenant SaaS with subscriptions, roles and analytics, like our Rankmora platform.",
                href: "/custom-software-development-company/",
                linkLabel: "Custom Software"
          },
          {
                icon: "📇",
                title: "CRM & Sales Tools",
                text: "Lead management, pipelines and sales intelligence tools, building on our Qualified Leads X work."
          },
          {
                icon: "💳",
                title: "Payments & Billing",
                text: "Recurring billing, installment plans and payment reconciliation."
          },
          {
                icon: "🤖",
                title: "AI Call & Chat Agents",
                text: "Agents that answer, qualify and book customers around the clock.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          },
          {
                icon: "🚀",
                title: "Startup MVPs",
                text: "A first production release in about 30 days for Toronto founders.",
                href: "/mvp-development-company/",
                linkLabel: "MVP Development"
          },
          {
                icon: "👩‍💻",
                title: "Dedicated Developers",
                text: "Engineers overlapping the Eastern Time morning, billed monthly in CAD.",
                href: "/hire-dedicated-developers/",
                linkLabel: "Hire Developers"
          }
    ],
    pricing: [
      ["Fixed-Scope Software Project", "3 – 12 Weeks", "Fixed price in CAD, paid per milestone", "Portals, internal tools, MVPs and integrations with a clear feature list"],
      ["Dedicated Developer", "Monthly, min. 1 month", "Flat monthly rate in CAD", "A full-time engineer working inside your team and tools"],
      ["Product Team", "Monthly, min. 3 months", "Monthly team rate in CAD", "Project manager, designer and engineers for an ongoing roadmap"],
      ["Support & Maintenance", "Ongoing", "Monthly retainer in CAD", "Monitoring, security updates, fixes and small improvements"],
    ],
    faqs: [{ question: "Do you handle personal data in line with Canadian privacy law?", answer: "We build with privacy by design: encrypted data, access controls, audit logs and hosting in Canadian cloud regions when needed, so you can meet your obligations under PIPEDA." }, { question: "What time overlap do you have with Toronto?", answer: "Our team covers the Eastern Time morning for live calls and stand-ups, with written updates waiting when your day starts." }],
  },
  "software-development-company-sydney": {
    caseStudyIds: ["quickdoctor-ie", "contractor-leads", "roofing-systems", "saviored", "zingo-assist", "entiix"],
    highlights: { tag: "Sydney Software", title: "What Sydney Businesses Ask Us to Build", cards: [
            {
                  icon: "🔧",
                  title: "Trades",
                  text: "Lead capture, quoting and job management."
            },
            {
                  icon: "🏥",
                  title: "Healthcare",
                  text: "Bookings, reminders and secure patient communication."
            },
            {
                  icon: "🎓",
                  title: "Training",
                  text: "Online courses and certification tracking."
            },
            {
                  icon: "🛒",
                  title: "Retail",
                  text: "Online stores and stock systems."
            }
      ] },
    servicesTitle: "Software We Build for Sydney Companies",
    services: [
          {
                icon: "🛠️",
                title: "Trades & Field Service Software",
                text: "Quotes, scheduling, job photos and invoicing for tradies and service companies.",
                href: "/custom-software-development-company/",
                linkLabel: "Custom Software"
          },
          {
                icon: "🩺",
                title: "Telehealth & Booking",
                text: "Consultation booking and patient tools, drawing on our QuickDoctor platform."
          },
          {
                icon: "🎓",
                title: "Education Platforms",
                text: "Course, student and training platforms, like Saviored."
          },
          {
                icon: "📞",
                title: "AI Receptionists",
                text: "Voice agents that answer calls and book jobs after hours.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          },
          {
                icon: "📱",
                title: "Mobile Apps",
                text: "iOS and Android apps for customers and field staff.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "👩‍💻",
                title: "Dedicated Developers",
                text: "Engineers overlapping the Sydney afternoon, billed monthly in AUD.",
                href: "/hire-dedicated-developers/",
                linkLabel: "Hire Developers"
          }
    ],
    pricing: [
      ["Fixed-Scope Software Project", "3 – 12 Weeks", "Fixed price in AUD, paid per milestone", "Portals, internal tools, MVPs and integrations with a clear feature list"],
      ["Dedicated Developer", "Monthly, min. 1 month", "Flat monthly rate in AUD", "A full-time engineer working inside your team and tools"],
      ["Product Team", "Monthly, min. 3 months", "Monthly team rate in AUD", "Project manager, designer and engineers for an ongoing roadmap"],
      ["Support & Maintenance", "Ongoing", "Monthly retainer in AUD", "Monitoring, security updates, fixes and small improvements"],
    ],
    faqs: [{ question: "How do you work across the time difference with Sydney?", answer: "Pakistan is 5 to 6 hours behind Sydney, so our morning overlaps your afternoon for live calls, and you start each day with completed work and a written update." }, { question: "Can you build software that respects Australian privacy rules?", answer: "Yes. We design with privacy in mind, keep personal data encrypted and access-controlled, and can host in Australian cloud regions to support your obligations under the Privacy Act." }],
  },
  "software-development-company-new-york": {
    caseStudyIds: ["rebecca-minkoff", "seven-figure-studio", "thestarmint", "scale-with-ads", "million-dollar-media", "saviored"],
    highlights: { tag: "New York Software", title: "Software for New York Brands, Agencies and Startups", cards: [
            {
                  icon: "👗",
                  title: "Fashion & Consumer",
                  text: "Commerce, product drops and customer accounts."
            },
            {
                  icon: "📣",
                  title: "Agencies & Media",
                  text: "Client reporting, funnels and content tools."
            },
            {
                  icon: "🏦",
                  title: "Finance & Digital Assets",
                  text: "Dashboards, payments and investor portals."
            },
            {
                  icon: "🎓",
                  title: "Education",
                  text: "Learning platforms and student portals."
            }
      ] },
    servicesTitle: "Software We Build for New York Companies",
    services: [
          {
                icon: "🚀",
                title: "Startup MVPs & SaaS",
                text: "Production-ready MVPs and SaaS platforms for New York founders, launched in weeks.",
                href: "/mvp-development-company/",
                linkLabel: "MVP Development"
          },
          {
                icon: "🛍️",
                title: "Commerce Platforms",
                text: "Custom and headless commerce for fashion and consumer brands, drawing on our Rebecca Minkoff work.",
                href: "/services/ecommerce-solutions/",
                linkLabel: "E-commerce"
          },
          {
                icon: "📈",
                title: "Agency & Marketing Tools",
                text: "Dashboards, funnels and client portals for agencies, like Seven Figure Studio and Scale With Ads."
          },
          {
                icon: "💎",
                title: "Web3 & Digital Assets",
                text: "Dashboards and platforms for digital asset projects, as with The Starmint."
          },
          {
                icon: "🤖",
                title: "AI Automation",
                text: "Agents and workflows that cut manual work in sales, support and operations.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          },
          {
                icon: "👩‍💻",
                title: "Dedicated Developers",
                text: "Engineers overlapping the Eastern Time morning, billed monthly in USD.",
                href: "/hire-dedicated-developers/",
                linkLabel: "Hire Developers"
          }
    ],
    pricing: [
      ["Fixed-Scope Software Project", "3 – 12 Weeks", "Fixed price in USD, paid per milestone", "Portals, internal tools, MVPs and integrations with a clear feature list"],
      ["Dedicated Developer", "Monthly, min. 1 month", "Flat monthly rate in USD", "A full-time engineer working inside your team and tools"],
      ["Product Team", "Monthly, min. 3 months", "Monthly team rate in USD", "Project manager, designer and engineers for an ongoing roadmap"],
      ["Support & Maintenance", "Ongoing", "Monthly retainer in USD", "Monitoring, security updates, fixes and small improvements"],
    ],
    faqs: [{ question: "Do you sign US contracts and NDAs?", answer: "Yes. We sign an NDA before scoping and work under a US-law services agreement that assigns all code and intellectual property to your company." }, { question: "What overlap do you have with New York hours?", answer: "Our engineers cover the Eastern Time morning for stand-ups and live calls, and post written updates in Slack before your day starts." }],
  },
  "software-development-company-london": {
    caseStudyIds: ["doughi", "spicify-app", "mdt-control", "odoo-service", "rankmora", "quickdoctor-ie"],
    highlights: { tag: "London Software", title: "What London Businesses Ask Us to Build", cards: [
            {
                  icon: "🚀",
                  title: "Startups",
                  text: "MVPs and second versions for funded teams."
            },
            {
                  icon: "🛒",
                  title: "Retail & Food",
                  text: "Online ordering, stores and loyalty."
            },
            {
                  icon: "🏭",
                  title: "Industry",
                  text: "Monitoring, ERP and operations software."
            },
            {
                  icon: "🩺",
                  title: "Health",
                  text: "Booking and consultation platforms."
            }
      ] },
    servicesTitle: "Software We Build for London Companies",
    services: [
          {
                icon: "☁️",
                title: "SaaS & Platforms",
                text: "Subscription products with roles, billing and analytics for London startups.",
                href: "/custom-software-development-company/",
                linkLabel: "Custom Software"
          },
          {
                icon: "🛍️",
                title: "E-commerce",
                text: "Stores and ordering systems for UK brands, like our work for Doughi.",
                href: "/services/ecommerce-solutions/",
                linkLabel: "E-commerce"
          },
          {
                icon: "🧾",
                title: "Odoo ERP",
                text: "Odoo setups and custom modules for inventory, sales and accounting, as with Odoo Service."
          },
          {
                icon: "🏭",
                title: "IoT & Industrial Dashboards",
                text: "Monitoring and control dashboards, drawing on our MDT Control SCADA project."
          },
          {
                icon: "📱",
                title: "Mobile Apps",
                text: "Social and consumer apps for iOS and Android, like Spicify.",
                href: "/services/mobile-app-development/",
                linkLabel: "Mobile Apps"
          },
          {
                icon: "👩‍💻",
                title: "Dedicated Developers",
                text: "Engineers overlapping the UK working day, billed monthly in GBP.",
                href: "/hire-dedicated-developers/",
                linkLabel: "Hire Developers"
          }
    ],
    pricing: [
      ["Fixed-Scope Software Project", "3 – 12 Weeks", "Fixed price in GBP, paid per milestone", "Portals, internal tools, MVPs and integrations with a clear feature list"],
      ["Dedicated Developer", "Monthly, min. 1 month", "Flat monthly rate in GBP", "A full-time engineer working inside your team and tools"],
      ["Product Team", "Monthly, min. 3 months", "Monthly team rate in GBP", "Project manager, designer and engineers for an ongoing roadmap"],
      ["Support & Maintenance", "Ongoing", "Monthly retainer in GBP", "Monitoring, security updates, fixes and small improvements"],
    ],
    faqs: [{ question: "Can you take over a project from another agency?", answer: "Yes. We review the existing code and infrastructure, fix urgent issues, write down how everything works and then continue development, recommending a rebuild only if the code cannot reasonably be maintained." }, { question: "Do you build software that complies with UK GDPR?", answer: "We build with data protection by design: minimal data collection, encryption, access controls, audit logs and UK or EU hosting where required, and we sign a data processing agreement." }, { question: "What overlap do you have with UK hours?", answer: "Pakistan is 4 to 5 hours ahead of the UK, so our afternoon overlaps your whole morning for calls, and most of the build work is done before your day starts." }],
  },
  "software-house-pakistan": {
    metaTitle: "Software House in Pakistan from PKR 35,000",
    metaDescription: "Software house in Pakistan: websites from PKR 35,000, mobile apps from PKR 200,000, ERP and AI automation. Fixed prices, 70+ case studies, quote in 48 hours.",
    faqs: [
      { question: "How do you work with clients in other Pakistani cities?", answer: "Most projects run remotely: a kickoff call, a written fixed-price proposal, weekly demo calls and a WhatsApp group with the team. For larger projects we travel for the kickoff and key milestones, and you can always visit our office in Rawalpindi." },
    ],
  },
  "web-design-company-dubai": {
    faqs: [
      { question: "Can you build a website in Arabic and English?", answer: "Yes. We build bilingual websites with separate Arabic and English pages, right-to-left layouts and proper Arabic fonts, so each language can rank on Google for its own searches." },
      { question: "Can my Dubai website take bookings or payments?", answer: "Yes. We connect booking calendars, WhatsApp enquiries and online payments through gateways that work in the UAE, so customers can book or pay without leaving your site." },
    ],
  },
  "app-development-company-pakistan": {
    faqs: [
      { question: "Can my app accept JazzCash, Easypaisa and card payments?", answer: "Yes. We integrate JazzCash, Easypaisa and card payments through local payment gateways, plus cash on delivery where it suits your business, and send payment confirmations by SMS or WhatsApp." },
      { question: "Do you publish the app on Google Play and the App Store?", answer: "Yes. We prepare the store listings, screenshots and privacy details, publish under your own developer accounts and handle reviewer questions until the app is approved." },
      { question: "What happens after the app launches?", answer: "We offer a monthly support plan for fixes, updates for new Android and iOS versions and small improvements, so the app keeps working as phones and stores change." },
    ],
  },

  /* ---------------- Retargeted international pages ---------------- */
  "software-development-company-dubai": {
    metaTitle: "IT & Software Development Company in Dubai",
    metaDescription: "IT and software development company for Dubai and UAE businesses: custom software, web and mobile apps, ERP/CRM and AI automation. Fixed AED or USD pricing.",
    h1Before: "IT & Software Development Company in",
    extraKeywords: ["it company dubai", "it company uae", "it company in dubai", "it companies in dubai", "it services company dubai"],
    caseStudyIds: ["horizone-invest", "installmentguard", "whatsapp-business-api", "odoo-service", "employee-security-crm", "ai-calling-agent"],
    highlights: { tag: "Dubai Software", title: "What Dubai Businesses Ask Us to Build", cards: [
            {
                  icon: "🏗️",
                  title: "Trading & Distribution",
                  text: "Stock, orders and customer credit across branches and free zones."
            },
            {
                  icon: "🏘️",
                  title: "Property",
                  text: "CRM, listings and investor reporting for brokers and developers."
            },
            {
                  icon: "🛎️",
                  title: "Services",
                  text: "Booking, dispatch and payments for home-service and facilities companies."
            },
            {
                  icon: "🛍️",
                  title: "Retail",
                  text: "POS, loyalty and online stores connected to stock."
            }
      ] },
    servicesTitle: "Software We Build for Dubai Companies",
    services: [
          {
                icon: "🧾",
                title: "ERP & VAT-Ready Invoicing",
                text: "Inventory, sales and accounting systems with UAE VAT on every invoice, including Odoo setups.",
                href: "/custom-software-development-company/",
                linkLabel: "Custom Software"
          },
          {
                icon: "🏢",
                title: "Real Estate & Investor Portals",
                text: "Listings, investor dashboards and payment-plan tracking, as in our Horizone Invest platform."
          },
          {
                icon: "💳",
                title: "Installment & Collections",
                text: "Payment schedules, reminders and collection dashboards, building on our InstallmentGuard product."
          },
          {
                icon: "💬",
                title: "WhatsApp Business Automation",
                text: "Orders, bookings and support handled on the WhatsApp Business API, in Arabic and English.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          },
          {
                icon: "🚚",
                title: "Logistics & Trading Systems",
                text: "Shipment, warehouse and distributor tools for trading companies in Jebel Ali, Deira and Al Quoz."
          },
          {
                icon: "👩‍💻",
                title: "Dedicated Developers",
                text: "Engineers who work Gulf hours inside your team, billed monthly in AED or USD.",
                href: "/hire-dedicated-developers/",
                linkLabel: "Hire Developers"
          }
    ],
    pricing: [
      ["Fixed-Scope Software Project", "3 – 12 Weeks", "Fixed price in AED, paid per milestone", "Portals, internal tools, MVPs and integrations with a clear feature list"],
      ["Dedicated Developer", "Monthly, min. 1 month", "Flat monthly rate in AED", "A full-time engineer working inside your team and tools"],
      ["Product Team", "Monthly, min. 3 months", "Monthly team rate in AED", "Project manager, designer and engineers for an ongoing roadmap"],
      ["Support & Maintenance", "Ongoing", "Monthly retainer in AED", "Monitoring, security updates, fixes and small improvements"],
    ],
    faqs: [{ question: "Can your software handle UAE VAT?", answer: "Yes. We build invoicing and accounting modules that apply UAE VAT, produce tax invoices with your TRN and export the reports your accountant needs, or we configure Odoo to do the same." }, { question: "Do you work with free zone companies?", answer: "Yes. We work with mainland and free zone companies across Dubai, invoice in AED or USD and sign contracts that assign all intellectual property to your company." }],
  },
  "software-development-company-doha": {
    metaTitle: "IT & Software Company in Qatar | Doha",
    metaDescription: "IT and software company serving Doha and Qatar: custom software, web and mobile apps, e-commerce and AI automation, in Arabic and English. Fixed QAR or USD pricing.",
    h1Before: "IT & Software Company in",
    extraKeywords: ["it company qatar", "it company in qatar", "software company qatar", "software company in qatar", "it company doha"],
    caseStudyIds: ["top-performance", "rbo-accounting", "devsynx-attendance-hr", "google-workspace-security", "entiix", "mizn-abayas"],
    highlights: { tag: "Qatar Software", title: "Software for Qatar's Contractors, Retailers and Service Firms", cards: [
            {
                  icon: "🏗️",
                  title: "Contractors",
                  text: "Workforce, site reports and equipment tracking."
            },
            {
                  icon: "🛍️",
                  title: "Retailers",
                  text: "Online stores, loyalty and stock across branches."
            },
            {
                  icon: "💼",
                  title: "Professional Services",
                  text: "Client portals, document handling and billing."
            },
            {
                  icon: "🏨",
                  title: "Hospitality",
                  text: "Booking, guest services and staff scheduling."
            }
      ] },
    servicesTitle: "Software We Build for Qatar Companies",
    services: [
          {
                icon: "👥",
                title: "HR, Attendance & Payroll",
                text: "Attendance by site, leave, overtime and payroll exports for contractors with large teams.",
                href: "/custom-software-development-company/",
                linkLabel: "Custom Software"
          },
          {
                icon: "🛒",
                title: "Retail & E-commerce Systems",
                text: "Stores, stock and order systems for Qatari retailers, building on our Top Performance work.",
                href: "/services/ecommerce-solutions/",
                linkLabel: "E-commerce"
          },
          {
                icon: "📊",
                title: "Accounting & Reporting",
                text: "Finance dashboards and client portals for accounting and consulting firms."
          },
          {
                icon: "🔐",
                title: "Workspace Security",
                text: "Google Workspace and cloud security setups that protect company email and data."
          },
          {
                icon: "🌐",
                title: "Arabic & English Portals",
                text: "Customer and employee portals with right-to-left Arabic built in."
          },
          {
                icon: "🤖",
                title: "AI Assistants",
                text: "Chat and voice assistants that answer customers and staff in Arabic or English.",
                href: "/ai-automation-agency/",
                linkLabel: "AI Automation"
          }
    ],
    pricing: [
      ["Fixed-Scope Software Project", "3 – 12 Weeks", "Fixed price in QAR, paid per milestone", "Portals, internal tools, MVPs and integrations with a clear feature list"],
      ["Dedicated Developer", "Monthly, min. 1 month", "Flat monthly rate in QAR", "A full-time engineer working inside your team and tools"],
      ["Product Team", "Monthly, min. 3 months", "Monthly team rate in QAR", "Project manager, designer and engineers for an ongoing roadmap"],
      ["Support & Maintenance", "Ongoing", "Monthly retainer in QAR", "Monitoring, security updates, fixes and small improvements"],
    ],
    faqs: [{ question: "Can you build an attendance system for many work sites?", answer: "Yes. Staff check in with GPS or QR codes at each site, supervisors approve overtime and leave, and HR exports payroll-ready reports every month." }, { question: "Can you invoice a Qatari company in QAR?", answer: "Yes. We quote and invoice in QAR or USD, with milestone payments and full transfer of code and intellectual property." }],
  },

  /* ---------------- SEO pages ---------------- */
  "seo-services-lahore": {
    metaTitle: "SEO Expert & SEO Services in Lahore",
    h1Before: "SEO Expert & SEO Services in",
    extraKeywords: ["seo expert in lahore", "seo expert lahore", "best seo expert in lahore", "seo specialist lahore"],
    caseStudyIds: ["progenius-students-seo", "topcustomboxes", "rankmora", "silayi-pret", "google-review-removal", "ustaad-ae"],
    keepFaqs: [0, 3],
    servicesTitle: "SEO Services for Lahore Businesses",
    services: [
          {
                icon: "👗",
                title: "Fashion Store SEO",
                text: "Collection and product pages for Lahore clothing brands that rank for searches like lawn suits and bridal wear, not only the brand name.",
                href: "/services/ecommerce-solutions/",
                linkLabel: "E-commerce"
          },
          {
                icon: "📍",
                title: "Google Maps for Lahore Areas",
                text: "Google Business Profile, reviews and area pages so you appear in the map for Gulberg, DHA, Johar Town and Model Town searches."
          },
          {
                icon: "🏘️",
                title: "Real Estate & Housing SEO",
                text: "Project, plot and area guide pages for developers and dealers competing for property searches."
          },
          {
                icon: "🎓",
                title: "Schools & Academies",
                text: "Admission, course and campus pages that rank for parents and students searching in Lahore."
          },
          {
                icon: "✍️",
                title: "Urdu & English Content",
                text: "Articles and landing pages written for how people in Lahore actually search, in both languages."
          },
          {
                icon: "🤖",
                title: "AI Search Visibility",
                text: "Structure and schema so your business is named in ChatGPT and Google AI Overviews answers.",
                href: "/ai-seo-agency/",
                linkLabel: "AI SEO"
          }
    ],
    pricing: [
      ["Local Maps SEO (one Lahore branch)", "3 – 6 Months", "PKR 25,000 / mo", "Google Business Profile, reviews system, area pages for your part of Lahore, monthly ranking report"],
      ["Fashion & E-commerce SEO", "6 – 12 Months", "PKR 75,000 / mo", "Collection and product optimisation, schema, seasonal landing pages, 8 articles / mo"],
      ["Real Estate or Education SEO", "4 – 9 Months", "PKR 45,000 / mo", "Project or campus pages, technical fixes, 4 articles / mo, local backlinks"],
    ],
    highlights: {
      tag: "Lahore SEO Strategy",
      title: "How We Approach SEO for Lahore Businesses",
      cards: [
        { icon: "📍", title: "Neighbourhood-Level Targeting", text: "People search 'near me' and by area, such as Gulberg, DHA or Johar Town. We build location pages and Google Business Profile signals for the areas you actually serve." },
        { icon: "👗", title: "Fashion & E-commerce SEO", text: "Collection pages that rank for product searches like 'lawn suits' or 'bridal dresses', with product schema and fast mobile loading during sales." },
        { icon: "⭐", title: "Reviews That Rank", text: "A simple review-request process after every sale or visit, because review count and recency strongly affect map rankings." },
      ],
    },
    faqs: [
      { question: "Will an SEO expert work on my account?", answer: "Yes. Your campaign is planned and reviewed by an experienced SEO specialist, technical fixes are made by our developers, and you speak directly with the person working on your account rather than a sales manager." },
      { question: "Why is SEO in Lahore so competitive?", answer: "Lahore has more searches for SEO and marketing services than any other Pakistani city, and many established agencies compete for them. Ranking needs a technically sound site, strong local signals and consistent content and links over several months." },
      { question: "Do you work with Lahore e-commerce stores?", answer: "Yes. We optimise category and product pages, fix technical issues on Shopify and WooCommerce, and build content that targets the product searches your customers use." },
    ],
  },
  "seo-services-karachi": {
    metaTitle: "SEO Expert & SEO Services in Karachi",
    h1Before: "SEO Expert & SEO Services in",
    extraKeywords: ["seo expert in karachi", "seo expert karachi", "seo specialist karachi"],
    caseStudyIds: ["productboxeswholesale", "acutepharmacy", "ustaad-ae", "rankmora", "google-review-removal", "scale-with-ads"],
    keepFaqs: [0, 1],
    servicesTitle: "SEO Services for Karachi Companies",
    services: [
          {
                icon: "🏭",
                title: "B2B & Industrial SEO",
                text: "Product and capability pages for manufacturers and suppliers in SITE, Korangi and Port Qasim that buyers find on Google."
          },
          {
                icon: "🏥",
                title: "Healthcare SEO",
                text: "Doctor, service and branch pages for hospitals, clinics and labs, written with care for medical searches."
          },
          {
                icon: "🗺️",
                title: "Area Pages for a Huge City",
                text: "Useful pages for Clifton, DHA, Gulshan, North Nazimabad and PECHS so you rank where your customers live."
          },
          {
                icon: "🚢",
                title: "Import, Export & Logistics",
                text: "Pages that rank for freight, clearing and wholesale supply searches from inside and outside Pakistan."
          },
          {
                icon: "⚙️",
                title: "Technical SEO",
                text: "Speed, crawlability, schema and site structure fixes for large sites with thousands of pages.",
                href: "/services/seo-services/",
                linkLabel: "SEO Services"
          },
          {
                icon: "🤖",
                title: "AI Search Visibility",
                text: "Make your company the answer when buyers ask ChatGPT or Google for suppliers in Karachi.",
                href: "/ai-seo-agency/",
                linkLabel: "AI SEO"
          }
    ],
    pricing: [
      ["Clinic or Branch Local SEO", "3 – 6 Months", "PKR 25,000 / mo", "Google Business Profile per branch, reviews, area pages, monthly calls and ranking report"],
      ["B2B Supplier SEO", "4 – 9 Months", "PKR 45,000 / mo", "Product and capability pages, technical audit, 4 articles / mo, industry backlinks"],
      ["National E-commerce SEO", "6 – 12 Months", "PKR 75,000 / mo", "Category and product optimisation, schema, internal linking, 8 articles / mo, link building"],
    ],
    highlights: {
      tag: "Karachi SEO Strategy",
      title: "How We Approach SEO for Karachi Businesses",
      cards: [
        { icon: "🗺️", title: "A Big City Needs Area Pages", text: "Customers in Clifton rarely travel to North Nazimabad. We map which areas you serve and give each a useful page and Google Business Profile support." },
        { icon: "🏭", title: "B2B & Industrial SEO", text: "Suppliers, manufacturers and distributors rank for product and specification searches that bring trade enquiries, not just retail traffic." },
        { icon: "🩺", title: "Healthcare & Professional Services", text: "Clinics, labs and firms rank for service-plus-area searches, with accurate contact details everywhere online." },
      ],
    },
    faqs: [
      { question: "Will an SEO expert work on my account?", answer: "Yes. Your campaign is planned and reviewed by an experienced SEO specialist, technical fixes are made by our developers, and you speak directly with the person working on your account rather than a sales manager." },
      { question: "Can you help a B2B company in Karachi get enquiries from Google?", answer: "Yes. We target product, specification and supplier searches, build detailed product pages and add enquiry forms and WhatsApp contact so trade buyers can reach you quickly." },
      { question: "My business has several branches in Karachi. How do you handle that?", answer: "Each branch gets its own Google Business Profile and its own location page with accurate address, hours and phone number, all linked from a branch directory." },
    ],
  },

  "seo-services-pakistan": {
    metaTitle: "SEO Expert & SEO Services in Pakistan",
    h1Before: "SEO Expert & SEO Services in",
    extraKeywords: ["seo expert in pakistan", "seo expert pakistan", "best seo expert in pakistan", "seo specialist pakistan"],
    faqs: [
      { question: "Will an SEO expert work on my account?", answer: "Yes. Your campaign is planned and reviewed by an experienced SEO specialist, technical fixes are made by our developers, and you speak directly with the person working on your account rather than a sales manager." },
    ],
  },

  /* ---------------- Digital marketing pages ---------------- */
  "digital-marketing-agency-lahore": {
    caseStudyIds: ["silayi-pret", "luxora-women", "mizn-abayas", "glitchy-digital-marketing", "motion-graphic-explainers", "ai-video-production"],
    keepFaqs: [0, 2],
    servicesTitle: "Digital Marketing for Lahore Brands",
    services: [
          {
                icon: "🛍️",
                title: "Sale & Launch Ads",
                text: "Meta and TikTok campaigns planned around Eid, wedding season and 11.11 sales, with budgets that scale on launch day."
          },
          {
                icon: "📦",
                title: "COD Order Quality",
                text: "Pixel and server-side tracking that optimises for confirmed, delivered orders instead of fake COD orders."
          },
          {
                icon: "🎬",
                title: "Reels & TikTok Creatives",
                text: "Short videos and UGC-style ads made for Lahore audiences, refreshed every week."
          },
          {
                icon: "🧑‍🤝‍🧑",
                title: "Influencer Campaigns",
                text: "Matching brands with Lahore creators, tracking codes and measuring the sales each one brings."
          },
          {
                icon: "💬",
                title: "WhatsApp Marketing",
                text: "Broadcasts, abandoned-cart reminders and order confirmations through the WhatsApp Business API."
          },
          {
                icon: "🛒",
                title: "Catalogue & Shopping Ads",
                text: "Product feeds for Meta catalogue and Google Shopping campaigns from your Shopify store.",
                href: "/services/ecommerce-solutions/",
                linkLabel: "E-commerce"
          }
    ],
    pricing: [
      ["Starter: Meta Ads for a Lahore brand", "Monthly", "PKR 25,000 / mo", "Meta Ads, pixel & CAPI setup, 8 creatives / mo, weekly report"],
      ["Growth: Meta + TikTok + Google", "Monthly", "PKR 45,000 / mo", "Three platforms, Reels and TikTok creatives, landing page tests, 16 creatives / mo"],
      ["Scale: fashion & e-commerce", "Monthly", "PKR 75,000 / mo", "Catalogue and Shopping campaigns, COD quality tracking, retention flows, CRO"],
    ],
    highlights: {
      tag: "Lahore Campaigns",
      title: "Campaigns That Work for Lahore Brands",
      cards: [
        { icon: "🛍️", title: "Sale & Launch Campaigns", text: "Teaser, launch and last-chance phases for Eid, wedding season and new collections, with creatives prepared in advance." },
        { icon: "📦", title: "COD Order Quality", text: "Optimising for confirmed and delivered orders, not just checkouts, so you stop paying for fake or returned COD orders." },
        { icon: "🎥", title: "Short-Form Video", text: "Reels and TikTok creatives filmed and edited for Lahore audiences, tested in small batches before scaling spend." },
      ],
    },
    faqs: [
      { question: "How much ad budget does a Lahore clothing brand need to start?", answer: "We usually suggest starting with PKR 3,000 to 10,000 a day in ad spend, paid to Meta or TikTok directly, on top of our management fee. We begin with a two-week test of creatives and audiences, then move budget to the ads that bring delivered orders, not just clicks." },
      { question: "How do you reduce fake COD orders from ads?", answer: "We send confirmed and delivered orders back to Meta through the Conversions API so the algorithm learns from real buyers, and we add order confirmation by WhatsApp or call before dispatch." },
      { question: "Can you run campaigns for a sale starting next week?", answer: "Usually yes, if tracking is already in place. We need access to your ad accounts, the product feed and the offer details; creatives can be produced within a few days." },
    ],
  },
  "digital-marketing-agency-karachi": {
    metaTitle: "Digital Marketing Agency Karachi from PKR 25k/mo",
    caseStudyIds: ["scale-with-ads", "seven-figure-studio", "zahh-beverages", "rebecca-minkoff", "million-dollar-funnels", "qualified-leads-x"],
    keepFaqs: [0, 2],
    servicesTitle: "Digital Marketing for Karachi Businesses",
    services: [
          {
                icon: "🎯",
                title: "Area-Targeted Lead Generation",
                text: "Google and Meta ads aimed at the Karachi areas you actually serve, with call tracking for every lead."
          },
          {
                icon: "🥤",
                title: "FMCG & Food Brand Campaigns",
                text: "Awareness and trial campaigns for food, beverage and consumer brands across Sindh and Pakistan."
          },
          {
                icon: "💼",
                title: "B2B & LinkedIn Ads",
                text: "Lead generation for suppliers, logistics and service companies selling to other businesses."
          },
          {
                icon: "🔎",
                title: "Google Search Ads",
                text: "High-intent search campaigns for clinics, schools, real estate and professional services."
          },
          {
                icon: "📊",
                title: "Tracking & Reporting",
                text: "GA4, conversion tracking and a weekly report that shows cost per lead and per sale."
          },
          {
                icon: "📝",
                title: "Landing Pages",
                text: "Fast pages built for each campaign, tested to raise the share of visitors who enquire.",
                href: "/services/custom-web-development/",
                linkLabel: "Web Development"
          }
    ],
    pricing: [
      ["Starter: Google Search leads", "Monthly", "PKR 25,000 / mo", "Google Search Ads for your Karachi areas, call tracking, 8 ad variations / mo, weekly report"],
      ["Growth: Google + Meta + LinkedIn", "Monthly", "PKR 45,000 / mo", "Three platforms, landing page tests, 16 creatives / mo, CRM lead sync"],
      ["Scale: brand & e-commerce", "Monthly", "PKR 75,000 / mo", "Full-funnel ads, Shopping campaigns, server-side tracking, CRO, retention"],
    ],
    highlights: {
      tag: "Karachi Campaigns",
      title: "Campaigns That Work for Karachi Businesses",
      cards: [
        { icon: "🎯", title: "Area-Targeted Lead Generation", text: "Radius and area targeting so clinics, showrooms and service businesses only pay for leads they can actually serve." },
        { icon: "🥤", title: "FMCG & Food Brands", text: "Awareness and trial campaigns for consumer brands, like our work for ZAHH Beverages, measured against store and online sales." },
        { icon: "🏢", title: "B2B Lead Generation", text: "LinkedIn and Google Search campaigns for suppliers and service firms selling to other businesses." },
      ],
    },
    faqs: [
      { question: "Can you track which ads bring phone calls?", answer: "Yes. We set up call tracking numbers and WhatsApp click tracking for each campaign, so you can see which ad, keyword and Karachi area produced each call or chat, and stop paying for the ones that do not." },
      { question: "Do you run ads for B2B companies in Karachi?", answer: "Yes. For suppliers, logistics and service firms we combine Google Search ads for high-intent searches with LinkedIn ads aimed at job titles and industries, and send leads straight into your CRM or email." },
      { question: "Do you run B2B campaigns on LinkedIn?", answer: "Yes. For B2B companies we run LinkedIn and Google Search campaigns aimed at decision-makers, with lead forms connected to your CRM." },
      { question: "Can you target specific areas of Karachi?", answer: "Yes. Meta and Google both allow radius and location targeting, so campaigns can focus on the neighbourhoods you deliver to or serve." },
    ],
  },

  /* ---------------- Web development pages ---------------- */
  "web-development-lahore": {
    metaTitle: "Web Designer & Web Development in Lahore",
    extraKeywords: ["web designer in lahore", "web designer lahore", "website designer lahore"],
    caseStudyIds: ["silayi-pret", "luxora-women", "mizn-abayas", "zahh-beverages", "doughi", "studio-pink-designs"],
    keepFaqs: [0, 3],
    servicesTitle: "Web Development for Lahore Businesses",
    services: [
          {
                icon: "👗",
                title: "Fashion & Lawn Stores",
                text: "Shopify stores with size guides, lookbooks, COD confirmation and courier booking for Lahore labels.",
                href: "/services/ecommerce-solutions/",
                linkLabel: "E-commerce"
          },
          {
                icon: "🍽️",
                title: "Restaurant & Café Websites",
                text: "Menus, online ordering, table booking and delivery zones across Lahore."
          },
          {
                icon: "🏘️",
                title: "Real Estate Project Sites",
                text: "Project pages, payment plans, plot maps and lead forms for developers and dealers."
          },
          {
                icon: "🏫",
                title: "School & Academy Websites",
                text: "Admissions, fee information, results and notices in English and Urdu."
          },
          {
                icon: "⚡",
                title: "Speed for Pakistani Networks",
                text: "Pages that load fast on 4G with image compression and caching."
          },
          {
                icon: "🔧",
                title: "Website Care",
                text: "Updates, backups, security and content edits every month."
          }
    ],
    pricing: [
      ["Restaurant or Clinic Website", "2 – 3 Weeks", "PKR 35,000 – 70,000", "Custom design, menu or services, booking, WhatsApp and Google Maps"],
      ["Fashion Store (Shopify)", "3 – 5 Weeks", "PKR 60,000 – 200,000", "Collections, size charts, JazzCash / Easypaisa / cards, courier integration"],
      ["Real Estate or School Portal", "4 – 10 Weeks", "PKR 150,000 – 500,000", "Project or student portal, admin panel, leads or admissions, payments"],
      ["Website Care Plan", "Ongoing", "From PKR 8,000 / mo", "Hosting management, updates, backups, uptime monitoring, content edits"],
    ],
    highlights: {
      tag: "Lahore Websites",
      title: "Websites We Build for Lahore Businesses",
      cards: [
        { icon: "🛍️", title: "Fashion Stores", text: "Lookbook-style collection pages, size guides, wishlist and fast checkout with COD and card payments." },
        { icon: "🍽️", title: "Restaurant & Café Sites", text: "Menus that are easy to update, table reservations, delivery ordering and Google Maps integration." },
        { icon: "🏢", title: "Corporate & Real Estate Sites", text: "Project pages, brochure downloads, lead forms connected to your CRM and fast loading on mobile data." },
      ],
    },
    faqs: [
      { question: "Can my website take orders on WhatsApp?", answer: "Yes. We add WhatsApp order and enquiry buttons that send the product, size and customer details as a ready-made message, and we can connect the WhatsApp Business API for automatic confirmations." },
      { question: "Can you redesign our existing website without losing Google rankings?", answer: "Yes. We keep URLs where possible, set up 301 redirects for any that change, carry over titles and content that already rank, and check Search Console after launch." },
      { question: "Will I be able to update the website myself?", answer: "Yes. We set up an easy content editor (WordPress, Shopify or a headless CMS) and show your team how to update pages, products and blog posts." },
    ],
  },
  "web-development-karachi": {
    metaTitle: "Web Designer & Web Development in Karachi",
    extraKeywords: ["web designer karachi", "web designer in karachi", "website designer karachi"],
    caseStudyIds: ["nw-canvas", "rbo-accounting", "smart-links-cabling", "zahh-beverages", "orvex-booths", "alpha-ahead-real-estate"],
    keepFaqs: [0, 3],
    servicesTitle: "Web Development for Karachi Companies",
    services: [
          {
                icon: "🏭",
                title: "Industrial & B2B Websites",
                text: "Product catalogues, specifications and RFQ forms for manufacturers and suppliers."
          },
          {
                icon: "⚖️",
                title: "Professional Services Sites",
                text: "Law, accounting and consulting websites built for trust and enquiries."
          },
          {
                icon: "🛒",
                title: "Retail & E-commerce",
                text: "Online stores for Karachi retailers with payments, courier booking and stock sync.",
                href: "/services/ecommerce-solutions/",
                linkLabel: "E-commerce"
          },
          {
                icon: "🚚",
                title: "Logistics & Client Portals",
                text: "Shipment tracking, document downloads and customer logins for logistics firms."
          },
          {
                icon: "💳",
                title: "Finance & Insurance Portals",
                text: "Secure application forms, document upload and customer dashboards."
          },
          {
                icon: "🌐",
                title: "Corporate Websites",
                text: "Multi-page company sites with careers, news and investor information.",
                href: "/services/custom-web-development/",
                linkLabel: "Web Development"
          }
    ],
    pricing: [
      ["Corporate or Professional Website", "2 – 3 Weeks", "PKR 35,000 – 70,000", "Custom design, services and team pages, contact and WhatsApp, on-page SEO"],
      ["B2B Catalogue or Retail Store", "3 – 5 Weeks", "PKR 60,000 – 200,000", "Product catalogue or Shopify / WooCommerce store, RFQ or payments, courier integration"],
      ["Logistics or Finance Portal", "4 – 10 Weeks", "PKR 150,000 – 500,000", "Customer logins, tracking or applications, document upload, admin panel and API"],
      ["Website Care Plan", "Ongoing", "From PKR 8,000 / mo", "Hosting management, updates, backups, uptime monitoring, content edits"],
    ],
    highlights: {
      tag: "Karachi Websites",
      title: "Websites We Build for Karachi Businesses",
      cards: [
        { icon: "🏭", title: "Industrial & B2B Websites", text: "Product catalogues with specifications, downloadable datasheets and RFQ forms for manufacturers and suppliers." },
        { icon: "📈", title: "Professional Services", text: "Sites for accounting, legal and consulting firms with service pages, team profiles and appointment booking." },
        { icon: "🛒", title: "Retail & E-commerce", text: "Online stores with branch pickup, delivery zones across Karachi and stock synced with your POS." },
      ],
    },
    faqs: [
      { question: "Can you build a portal where our customers log in?", answer: "Yes. We build secure customer portals with logins, document downloads, shipment or application status and an admin panel for your staff, connected to your existing systems through an API." },
      { question: "Do you provide hosting for Karachi businesses?", answer: "Yes. We set up fast hosting with daily backups, SSL and uptime monitoring, or deploy to your own cloud account so you keep full control." },
      { question: "Can our website show live stock from our POS?", answer: "Yes. We connect the website to your POS or ERP so product availability and prices update automatically." },
      { question: "Do you build catalogue websites for manufacturers?", answer: "Yes. We build searchable catalogues with specifications, datasheets and RFQ forms, similar to the export catalogue we built for NW Canvas Industry." },
    ],
  },
};
