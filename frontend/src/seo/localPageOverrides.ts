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
};

export const localPageOverrides: Record<string, LocalPageOverride> = {
  /* ---------------- Software house pages ---------------- */
  "software-house-lahore": {
    caseStudyIds: ["silayi-pret", "luxora-women", "mizn-abayas", "zahh-beverages", "ai-calling-agent", "devsynx-attendance-hr"],
    keepFaqs: [0, 1, 3],
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
    caseStudyIds: ["nw-canvas", "zahh-beverages", "devsynx-attendance-hr", "installmentguard", "whatsapp-business-api", "rbo-accounting"],
    keepFaqs: [0, 1, 3],
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
    caseStudyIds: ["nw-canvas", "mizn-abayas", "odoo-service", "devsynx-attendance-hr", "egg-produce", "silayi-pret"],
    keepFaqs: [0, 1, 3],
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
    caseStudyIds: ["egg-produce", "saviored", "devsynx-attendance-hr", "whatsapp-business-api", "zahh-beverages", "installmentguard"],
    keepFaqs: [0, 1, 3],
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
    caseStudyIds: ["installmentguard", "ai-calling-agent", "whatsapp-business-api", "zeparty", "devsynx-attendance-hr", "nw-canvas"],
    keepFaqs: [0, 1, 3],
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
    caseStudyIds: ["nw-canvas", "devsynx-attendance-hr", "zahh-beverages", "installmentguard", "whatsapp-business-api", "odoo-service"],
    keepFaqs: [0, 1, 3],
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
    caseStudyIds: ["egg-produce", "saviored", "devsynx-attendance-hr", "whatsapp-business-api", "zahh-beverages", "luxora-women"],
    keepFaqs: [0, 1, 3],
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
    caseStudyIds: ["nw-canvas", "doughi", "rebecca-minkoff", "solettos", "devsynx-attendance-hr", "mizn-abayas"],
    keepFaqs: [0, 1, 3],
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
    caseStudyIds: ["egg-produce", "nw-canvas", "devsynx-attendance-hr", "whatsapp-business-api", "saviored", "installmentguard"],
    keepFaqs: [0, 1, 3],
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
