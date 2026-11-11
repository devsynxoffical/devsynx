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
      ["Fashion Store (Shopify or custom)", "2 – 3 Weeks", "PKR 80,000 – 250,000", "Catalogue, size charts, COD confirmation, courier booking, sale-day caching"],
      ["Restaurant Ordering App", "6 – 12 Weeks", "PKR 450,000 – 1,500,000", "Menu, delivery zones across Lahore, rider app, kitchen screen, WhatsApp updates"],
      ["Housing Society Portal", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Plot inventory, file transfers, installments, member logins and dealer leads"],
      ["School ERP", "6 – 16 Weeks", "PKR 500,000 – 2,500,000", "Admissions, fee vouchers, results, attendance and parent app"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 60,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
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
    caseStudyIds: ["installmentguard", "rbo-accounting", "employee-security-crm", "top-performance", "whatsapp-business-api", "nw-canvas"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Import & Distribution System", "6 – 16 Weeks", "PKR 500,000 – 2,500,000", "Shipments, landed cost, godown stock, distributor orders and credit"],
      ["Delivery & Fleet App", "6 – 12 Weeks", "PKR 450,000 – 1,500,000", "Rider and driver apps, proof of delivery, routes and live tracking"],
      ["Lending / Installment Platform", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Applications, KYC documents, schedules, repayments and recovery reports"],
      ["B2B Ordering Website", "2 – 3 Weeks", "PKR 80,000 – 250,000", "Wholesale price lists, online orders and WhatsApp enquiry buttons"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 60,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
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
      ["Mill Production ERP", "6 – 16 Weeks", "PKR 500,000 – 2,500,000", "Lots, stages, wastage, efficiency per shift and dispatch"],
      ["Export Order & LC Tracker", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Buyer POs, samples, LC terms, shipment status and documents"],
      ["Exporter Website", "2 – 3 Weeks", "PKR 80,000 – 250,000", "Product range, capacity, certifications and RFQ form for foreign buyers"],
      ["Owner Dashboard App", "6 – 12 Weeks", "PKR 450,000 – 1,500,000", "Production, dispatch and receivables on the owner's phone"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 60,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
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
    caseStudyIds: ["egg-produce", "saviored", "quickdoctor-ie", "google-workspace-security", "zahh-beverages", "ag-plumbing-murah"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Commission Agent System", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Grower and buyer ledgers, daily mandi rates, bilties and SMS statements"],
      ["Mango Export Tracking", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Orchard purchases, grading, packing and consignments to buyers"],
      ["College Management System", "6 – 16 Weeks", "PKR 500,000 – 2,500,000", "Admissions, fees, exams, attendance and parent alerts"],
      ["Clinic or Lab Website", "2 – 3 Weeks", "PKR 80,000 – 250,000", "Doctor profiles, online reports and appointment booking"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 60,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
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
      ["Wholesale Trading Software", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Stock, credit customers, supplier ledgers and daily cash"],
      ["Hospital Information System", "6 – 16 Weeks", "PKR 500,000 – 2,500,000", "OPD, admissions, pharmacy, lab and billing"],
      ["Startup MVP", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "First product version with logins, payments and an admin panel"],
      ["Bilingual Business Website", "2 – 3 Weeks", "PKR 80,000 – 250,000", "English and Urdu pages, WhatsApp enquiries and local SEO"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 60,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
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
      { question: "Can you visit Peshawar for project meetings?", answer: "Yes. Peshawar is about two hours from our Islamabad office by motorway, so we can hold kickoff workshops and milestone reviews on-site." },
      { question: "Do you build multi-currency invoicing?", answer: "Yes. We build invoicing and ledgers that handle multiple currencies with exchange rates recorded per transaction." },
    ],
  },


  "software-house-gujranwala": {
    caseStudyIds: ["rizki-akbar-enterprise", "whatsapp-business-api", "installmentguard", "smart-links-cabling", "zahh-beverages", "odoo-service"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Factory ERP", "6 – 16 Weeks", "PKR 500,000 – 2,500,000", "Purchase, production, finished goods, dispatch and costing"],
      ["Dealer Ordering App", "6 – 12 Weeks", "PKR 450,000 – 1,500,000", "Dealers check stock and prices and order from their phones"],
      ["Dealer Credit & Warranty System", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Credit limits, recoveries, statements and warranty claims"],
      ["Product Catalogue Website", "2 – 3 Weeks", "PKR 80,000 – 250,000", "Full product range with specifications and dealer enquiry forms"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 60,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
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
      { question: "Do you visit Gujranwala for meetings?", answer: "Gujranwala is within easy reach of our Islamabad office by motorway, so we can hold kickoff workshops on-site for larger projects. Day-to-day work runs on WhatsApp and video calls." },
      { question: "Can you set up Odoo for a manufacturing company?", answer: "Yes. We implement Odoo manufacturing, inventory, sales and accounting modules and build custom add-ons where your process differs." },
    ],
  },
  "software-house-bahawalpur": {
    caseStudyIds: ["luxora-women", "saviored", "fix-it-bilal", "scale-with-ads", "google-review-removal", "whatsapp-business-api"],
    keepFaqs: [0, 1, 3],
    pricing: [
      ["Cotton & Grain Trading Software", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Grower purchases, ginning, bales, buyer sales and daily rates"],
      ["School Fee & Results System", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Fee collection, attendance and results on low-cost phones"],
      ["First Online Store", "2 – 3 Weeks", "PKR 80,000 – 250,000", "Products, COD, courier booking and WhatsApp orders"],
      ["Offline-Ready Mobile App", "6 – 12 Weeks", "PKR 450,000 – 1,500,000", "Works on slow connections and syncs when signal returns"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 60,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
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
      ["Export Catalogue & RFQ Website", "2 – 3 Weeks", "PKR 80,000 – 250,000", "Specifications, certifications and RFQ forms for importers"],
      ["Sample & Order Tracker", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Samples, approvals, bulk orders and buyer deadlines"],
      ["Export ERP with Documentation", "6 – 16 Weeks", "PKR 500,000 – 2,500,000", "Orders, production, QC records, invoices and packing lists"],
      ["Wholesale B2B Store", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Buyer logins, price tiers, repeat orders and online payments"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 60,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
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
      ["Kinnow Factory System", "6 – 16 Weeks", "PKR 500,000 – 2,500,000", "Fruit intake, grading lines, cartons, containers and margins per lot"],
      ["Cold Storage Management", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Chambers, client stock, rent and release slips"],
      ["Farm & Packing Staff App", "6 – 12 Weeks", "PKR 450,000 – 1,500,000", "Offline data entry for farm and packing teams"],
      ["Exporter Website", "2 – 3 Weeks", "PKR 80,000 – 250,000", "Orchards, capacity and certifications for foreign buyers"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 60,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
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
      ["Dealer & Distributor Portal", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Dealer logins, prices, credit, orders and dispatch tracking"],
      ["Fan or Furniture Factory ERP", "6 – 16 Weeks", "PKR 500,000 – 2,500,000", "Production, inventory, warranty claims and costing"],
      ["Overseas Owner App", "6 – 12 Weeks", "PKR 450,000 – 1,500,000", "Sales, rent, expenses and site photos for owners abroad"],
      ["Showroom Catalogue Website", "2 – 3 Weeks", "PKR 80,000 – 250,000", "Products, finishes and prices with WhatsApp enquiries"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 60,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
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
      ["Hotel & Guest House Booking", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Live availability, seasonal rates, advance payments and WhatsApp confirmations"],
      ["School or College Portal", "6 – 16 Weeks", "PKR 500,000 – 2,500,000", "Admissions, hostel, fees, results and parent app"],
      ["Clinic Appointment System", "4 – 8 Weeks", "PKR 350,000 – 1,200,000", "Online booking, patient records, prescriptions and reminders"],
      ["Tourism or Business Website", "2 – 3 Weeks", "PKR 80,000 – 250,000", "Photo galleries, maps, reviews and WhatsApp enquiries"],
      ["Monthly Maintenance & SLA", "Ongoing", "From PKR 60,000 / mo", "Monitoring, security patches, bug fixes, backups, small feature changes"],
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


  /* ---------------- Retargeted international pages ---------------- */
  "software-development-company-dubai": {
    metaTitle: "IT & Software Development Company in Dubai",
    metaDescription: "IT and software development company for Dubai and UAE businesses: custom software, web and mobile apps, ERP/CRM and AI automation. Fixed AED or USD pricing.",
    h1Before: "IT & Software Development Company in",
    extraKeywords: ["it company dubai", "it company uae", "it company in dubai", "it companies in dubai", "it services company dubai"],
  },
  "software-development-company-doha": {
    metaTitle: "IT & Software Company in Qatar | Doha",
    metaDescription: "IT and software company serving Doha and Qatar: custom software, web and mobile apps, e-commerce and AI automation, in Arabic and English. Fixed QAR or USD pricing.",
    h1Before: "IT & Software Company in",
    extraKeywords: ["it company qatar", "it company in qatar", "software company qatar", "software company in qatar", "it company doha"],
  },

  /* ---------------- SEO pages ---------------- */
  "seo-services-lahore": {
    metaTitle: "SEO Expert & SEO Services in Lahore",
    h1Before: "SEO Expert & SEO Services in",
    extraKeywords: ["seo expert in lahore", "seo expert lahore", "best seo expert in lahore", "seo specialist lahore"],
    caseStudyIds: ["ustaad-ae", "productboxeswholesale", "topcustomboxes", "progenius-students-seo", "rankmora", "silayi-pret"],
    keepFaqs: [0, 3],
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
    caseStudyIds: ["productboxeswholesale", "acutepharmacy", "ustaad-ae", "topcustomboxes", "rankmora", "progenius-students-seo"],
    keepFaqs: [0, 1],
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
    caseStudyIds: ["silayi-pret", "luxora-women", "mizn-abayas", "scale-with-ads", "seven-figure-studio", "glitchy-digital-marketing"],
    keepFaqs: [0, 2],
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
      { question: "How do you reduce fake COD orders from ads?", answer: "We send confirmed and delivered orders back to Meta through the Conversions API so the algorithm learns from real buyers, and we add order confirmation by WhatsApp or call before dispatch." },
      { question: "Can you run campaigns for a sale starting next week?", answer: "Usually yes, if tracking is already in place. We need access to your ad accounts, the product feed and the offer details; creatives can be produced within a few days." },
    ],
  },
  "digital-marketing-agency-karachi": {
    caseStudyIds: ["scale-with-ads", "seven-figure-studio", "zahh-beverages", "rebecca-minkoff", "ustaad-ae", "glitchy-digital-marketing"],
    keepFaqs: [0, 2],
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
      { question: "Can you redesign our existing website without losing Google rankings?", answer: "Yes. We keep URLs where possible, set up 301 redirects for any that change, carry over titles and content that already rank, and check Search Console after launch." },
      { question: "Will I be able to update the website myself?", answer: "Yes. We set up an easy content editor (WordPress, Shopify or a headless CMS) and show your team how to update pages, products and blog posts." },
    ],
  },
  "web-development-karachi": {
    metaTitle: "Web Designer & Web Development in Karachi",
    extraKeywords: ["web designer karachi", "web designer in karachi", "website designer karachi"],
    caseStudyIds: ["nw-canvas", "rbo-accounting", "smart-links-cabling", "zahh-beverages", "orvex-booths", "alpha-ahead-real-estate"],
    keepFaqs: [0, 3],
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
      { question: "Can our website show live stock from our POS?", answer: "Yes. We connect the website to your POS or ERP so product availability and prices update automatically." },
      { question: "Do you build catalogue websites for manufacturers?", answer: "Yes. We build searchable catalogues with specifications, datasheets and RFQ forms, similar to the export catalogue we built for NW Canvas Industry." },
    ],
  },
};
