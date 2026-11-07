/**
 * Industry landing pages ("[industry] software development"). Each one is
 * built around DEVSYNX case studies in that industry. Rendered through
 * LocalLandingPage via globalPage() in seo/localPages.ts.
 */
import type { LocalPage } from "./localPages";

export type IndustryConfig = Pick<
  LocalPage,
  | "slug" | "path" | "navLabel" | "metaTitle" | "metaDescription" | "keywords" | "serviceName"
  | "badge" | "h1Before" | "h1Highlight" | "h1After" | "quickAnswer" | "whatsappText"
  | "introTag" | "introTitle" | "intro" | "highlights" | "guideTitle" | "guide"
  | "servicesTitle" | "services" | "caseStudiesTitle" | "caseStudyIds" | "related" | "faqs" | "ctaTitle"
>;

export const industryConfigs: IndustryConfig[] = [
  /* ---------------- Healthcare ---------------- */
  {
    slug: "healthcare-software-development",
    path: "/healthcare-software-development/",
    navLabel: "Healthcare Software Development",
    metaTitle: "Healthcare Software Development Company",
    metaDescription:
      "Healthcare software development: telehealth platforms, patient portals, clinic and pharmacy systems built with HIPAA and GDPR requirements in mind.",
    keywords: ["healthcare software development company", "healthcare software development", "telehealth app development", "medical software development", "clinic management software development", "hipaa compliant app development"],
    serviceName: "Healthcare Software Development",
    badge: "Telehealth · Patient portals · Clinic & pharmacy systems",
    h1Before: "Healthcare Software Development",
    h1Highlight: "Company",
    quickAnswer:
      "DEVSYNX builds healthcare software: telehealth and video consultation platforms, patient portals, appointment and clinic management systems, pharmacy e-commerce and AI phone assistants for practices. We design for HIPAA (US) and GDPR (UK/EU) requirements from the start, including access control, audit logs and encrypted data, and we have shipped platforms such as the QuickDoctor telehealth service in Ireland.",
    whatsappText: "Hi DEVSYNX, I need healthcare software built.",
    introTag: "Healthcare Software",
    introTitle: "Software for Clinics, Telehealth Providers and Pharmacies",
    intro: [
      "Healthcare software has two jobs that pull in different directions: it must be easy enough for patients and busy staff to use, and strict enough to protect sensitive health data. Most failed healthcare projects get one of these wrong.",
      "We build both sides together. QuickDoctor, a telehealth and prescription platform in Ireland, handles online consultations and digital prescription dispatch. AlphaMedi Assist and Acute Pharmacy in the US cover practice websites and pharmacy e-commerce, and our AI voice agent answers and books patient calls around the clock.",
    ],
    highlights: {
      tag: "What We Build",
      title: "Healthcare Software Types",
      cards: [
        { icon: "🩺", title: "Telehealth Platforms", text: "Video consultations, symptom questionnaires, e-prescriptions and payments, with consultation notes stored securely." },
        { icon: "📅", title: "Clinic & Practice Management", text: "Appointments, patient records, billing, reminders and staff schedules for clinics, labs and multi-location practices." },
        { icon: "💊", title: "Pharmacy E-commerce", text: "Online pharmacies with prescription upload and verification, product catalogues and delivery tracking." },
        { icon: "📞", title: "AI Patient Phone Assistants", text: "Voice agents that answer calls, book and reschedule appointments and route urgent calls to staff." },
      ],
    },
    guideTitle: "Building Healthcare Software: What to Plan For",
    guide: [
      { heading: "Start with the compliance requirements", content: "Identify which rules apply before design starts. In the United States, software that stores or transmits protected health information on behalf of providers must meet HIPAA's privacy and security rules, and your vendors (hosting, video, email) need business associate agreements. In the UK and EU, health data is special-category data under GDPR. Other countries have their own health data laws. These requirements shape the architecture, hosting choice and third-party services, so they are far cheaper to build in than to add later." },
      { heading: "Security features healthcare software needs", content: "• Role-based access so receptionists, nurses and doctors see only what they need.\n• Audit logs recording who viewed or changed each record.\n• Encryption in transit and at rest, with secure key management.\n• Strong authentication, including multi-factor login for staff.\n• Automatic session timeouts on shared devices.\n• Backups with tested restore procedures.\n• Hosting in a region and with a provider that supports your compliance obligations." },
      { heading: "Integrations: EHR, labs, pharmacies and payments", content: "Most healthcare products have to exchange data with existing systems: electronic health records, lab systems, pharmacy networks, insurers and payment providers. Standards such as HL7 FHIR make this easier where systems support them. Map every integration early, because each one needs credentials, testing environments and sometimes a commercial agreement, which can take longer than the coding." },
      { heading: "Designing for patients and staff", content: "Patients use healthcare apps rarely and often when unwell or stressed, so flows must be short, clear and accessible on a phone. Staff use the system all day, so speed and keyboard-friendly screens matter more than visual polish. Test with both groups before launch; a booking flow that confuses patients turns straight into phone calls to reception." },
      { heading: "Launching in stages", content: "A practical first release covers one workflow end to end, such as online booking with reminders, or a video consultation with payment. Run it with one clinic or a small patient group, measure no-shows, call volume and staff time, then add records, prescriptions or integrations in later releases." },
    ],
    servicesTitle: "Healthcare Software Development Services",
    services: [
      { icon: "📱", title: "Patient Apps", text: "iOS and Android apps for booking, consultations, reminders and records.", href: "/app-development-company-pakistan/", linkLabel: "Mobile Apps" },
      { icon: "💻", title: "Web Portals & Dashboards", text: "Patient portals and staff dashboards built in Next.js and Node.js.", href: "/custom-software-development-company/", linkLabel: "Custom Software" },
      { icon: "🤖", title: "AI Voice & Chat Assistants", text: "Answer patient questions and book appointments by phone or chat.", href: "/ai-automation-agency/", linkLabel: "AI Automation" },
      { icon: "🔐", title: "Security & Compliance Reviews", text: "Access control, audit logging and data protection reviews.", href: "/services/cybersecurity-auditing/", linkLabel: "Security Auditing" },
      { icon: "🔌", title: "System Integrations", text: "Connect EHRs, lab systems, payment providers and calendars.", href: "/services/api-development-integration/", linkLabel: "API Integration" },
      { icon: "☁️", title: "Secure Cloud Hosting", text: "Infrastructure set up for encryption, backups and monitoring.", href: "/services/cloud-security-compliance/", linkLabel: "Cloud Compliance" },
    ],
    caseStudiesTitle: "Healthcare Projects We Have Delivered",
    caseStudyIds: ["quickdoctor-ie", "alphamedi-assist", "acutepharmacy", "dr-said-skin-shop", "ai-calling-agent", "devsynx-attendance-hr"],
    related: [
      { href: "/fintech-software-development/", label: "Fintech Software Development" },
      { href: "/ai-automation-agency/", label: "AI Automation Agency" },
      { href: "/tools/app-development-cost-calculator/", label: "App Development Cost Calculator" },
      { href: "/hire-dedicated-developers/", label: "Hire Dedicated Developers" },
    ],
    faqs: [
      { question: "How much does healthcare software development cost?", answer: "It depends on scope and compliance needs. A focused first release such as online booking or video consultations is a few months of work; a full practice management platform with integrations is larger. We give a fixed price after a scoping call." },
      { question: "Can you build HIPAA-compliant software?", answer: "We build software with HIPAA's technical safeguards in mind: access control, audit logs, encryption and secure hosting with providers that sign business associate agreements. Compliance also depends on your own policies and vendor agreements, which we help you map." },
      { question: "Do you integrate with EHR systems?", answer: "Yes, where the EHR offers an API, including HL7 FHIR interfaces. We review the integration options and access requirements during scoping." },
      { question: "Can an AI assistant book patient appointments?", answer: "Yes. Our AI voice and chat agents can check availability, book and reschedule appointments and send reminders, and they transfer anything clinical or urgent to staff." },
      { question: "Have you built telehealth platforms before?", answer: "Yes. QuickDoctor, a telehealth and prescription platform in Ireland, is one example; its case study is on this page." },
    ],
    ctaTitle: "Plan Your Healthcare Software Project",
  },

  /* ---------------- Real estate ---------------- */
  {
    slug: "real-estate-software-development",
    path: "/real-estate-software-development/",
    navLabel: "Real Estate Software Development",
    metaTitle: "Real Estate Software & App Development",
    metaDescription:
      "Real estate software and app development: property portals, CRMs, investment platforms, holiday-home booking and lead management. Case studies in the UAE and US.",
    keywords: ["real estate software development", "real estate app development", "property management software development", "real estate crm development", "property portal development", "proptech development company"],
    serviceName: "Real Estate Software Development",
    badge: "Property portals · CRMs · Investment & booking platforms",
    h1Before: "Real Estate Software &",
    h1Highlight: "App Development",
    quickAnswer:
      "DEVSYNX builds real estate software: property listing portals, agent CRMs, investment and fractional-ownership platforms, holiday-home booking systems and lead-management tools. Recent projects include the Horizone Invest real estate investment portal, the Alpha Ahead Real Estate site in the UAE and YGI Holiday Homes' booking platform.",
    whatsappText: "Hi DEVSYNX, I need real estate software built.",
    introTag: "PropTech",
    introTitle: "Software for Developers, Brokers and Property Managers",
    intro: [
      "Real estate businesses run on leads and listings. The software that wins is the one that captures every enquiry, shows accurate inventory and keeps agents following up, without double data entry between the website, CRM and spreadsheets.",
      "We build these systems for developers, brokerages and short-term rental operators, mostly in the UAE and the US, with bilingual Arabic and English interfaces where needed.",
    ],
    highlights: {
      tag: "What We Build",
      title: "Real Estate Software Types",
      cards: [
        { icon: "🏘️", title: "Listing Portals", text: "Search with map and filters, property pages, enquiry forms and agent assignment, with listings managed in one admin." },
        { icon: "📇", title: "Agent CRMs", text: "Lead capture from portals, ads and WhatsApp, automatic assignment, follow-up reminders and pipeline reports." },
        { icon: "📈", title: "Investment Platforms", text: "Investor onboarding, project dashboards, documents and payment tracking for real estate investment products." },
        { icon: "🏖️", title: "Holiday-Home Booking", text: "Availability calendars, direct booking, payments and channel sync for short-term rental operators." },
      ],
    },
    guideTitle: "Building Real Estate Software: A Practical Guide",
    guide: [
      { heading: "One source of truth for inventory", content: "The most common problem in real estate operations is inventory that disagrees across the website, listing portals and agents' spreadsheets. Build the system around a single property database, and push listings out to the website and portals from there. Status changes (reserved, sold, rented) should update everywhere automatically." },
      { heading: "Lead capture and speed to response", content: "Enquiries arrive from your website, property portals, Meta and Google ads, WhatsApp and phone calls. Route them into one CRM, assign them by area, project or language, and reply instantly by WhatsApp or email. Leads contacted within minutes convert far better than leads called the next day, so automation here pays off quickly." },
      { heading: "Developer and off-plan projects", content: "For developers selling off-plan, the system usually needs unit inventory per building and floor, price lists, payment plans with instalment schedules, booking forms, document generation and broker commission tracking. Payment reminders and customer portals reduce calls to the sales office." },
      { heading: "Short-term rentals and holiday homes", content: "Holiday-home operators need availability calendars that stay in sync with booking channels to avoid double bookings, direct booking with online payment, cleaning and check-in scheduling, and owner statements. Direct booking through your own site avoids channel commissions on repeat guests." },
      { heading: "Local rules and data", content: "Real estate is regulated differently in each market, from broker licensing and advertising permits to tenancy and escrow rules. Make sure listing data, contracts and payment flows match the requirements of the markets you operate in, and confirm the details with your legal adviser." },
    ],
    servicesTitle: "Real Estate Software Services",
    services: [
      { icon: "🌐", title: "Property Websites", text: "Fast, SEO-ready property and project websites with lead forms.", href: "/web-design-company-dubai/", linkLabel: "Web Design Dubai" },
      { icon: "📱", title: "Property Apps", text: "iOS and Android apps for buyers, tenants, owners or agents.", href: "/app-development-company-dubai/", linkLabel: "App Development Dubai" },
      { icon: "📇", title: "Custom CRM", text: "A CRM built around how your agents actually work.", href: "/custom-software-development-company/", linkLabel: "Custom Software" },
      { icon: "🤖", title: "AI Lead Qualification", text: "AI voice and WhatsApp agents that qualify and book viewings.", href: "/ai-automation-agency/", linkLabel: "AI Automation" },
      { icon: "🔌", title: "Portal & Payment Integrations", text: "Listing portal feeds, payment gateways and e-signature.", href: "/services/api-development-integration/", linkLabel: "API Integration" },
      { icon: "📈", title: "Real Estate SEO", text: "Area and project pages that rank for property searches.", href: "/services/seo-services/", linkLabel: "SEO Services" },
    ],
    caseStudiesTitle: "Real Estate Projects We Have Delivered",
    caseStudyIds: ["horizone-invest", "alpha-ahead-real-estate", "ygi-holiday-homes", "alpha-ahead-llc", "installmentguard", "ai-calling-agent"],
    related: [
      { href: "/software-development-company-dubai/", label: "Software Development Dubai" },
      { href: "/fintech-software-development/", label: "Fintech Software Development" },
      { href: "/tools/website-cost-calculator/", label: "Website Cost Calculator" },
      { href: "/ai-automation-agency/", label: "AI Automation Agency" },
    ],
    faqs: [
      { question: "How much does real estate software cost?", answer: "A property website with listings and lead forms is a smaller project; a CRM, investment platform or booking system with payments and integrations is larger. We quote a fixed price after a scoping call." },
      { question: "Can you build a property portal like the big listing sites?", answer: "Yes. We build listing portals with search, maps, filters, agent accounts and enquiry routing. We usually recommend starting with your own inventory and adding third-party listings later." },
      { question: "Can the CRM capture leads from WhatsApp and property portals?", answer: "Yes. We connect website forms, portal enquiries, ad lead forms and the WhatsApp Business API so every lead lands in one place and is assigned automatically." },
      { question: "Do you build Arabic real estate websites?", answer: "Yes. We build bilingual Arabic and English sites with right-to-left layouts, as we do for UAE clients." },
      { question: "Can you manage instalment payment plans?", answer: "Yes. We build payment-plan schedules, reminders and customer portals for off-plan sales, similar to our InstallmentGuard platform." },
    ],
    ctaTitle: "Plan Your Real Estate Software",
  },

  /* ---------------- Fintech ---------------- */
  {
    slug: "fintech-software-development",
    path: "/fintech-software-development/",
    navLabel: "Fintech Software Development",
    metaTitle: "Fintech Software Development Company",
    metaDescription:
      "Fintech software development: payment, lending and instalment platforms, accounting and tax tools, built with PCI DSS, KYC and audit requirements in mind.",
    keywords: ["fintech software development company", "fintech software development", "fintech app development", "payment app development", "lending software development", "accounting software development"],
    serviceName: "Fintech Software Development",
    badge: "Payments · Lending & instalments · Accounting & tax",
    h1Before: "Fintech Software Development",
    h1Highlight: "Company",
    quickAnswer:
      "DEVSYNX builds fintech software: payment and wallet features, lending and instalment platforms, accounting and tax tools, and investment dashboards. We design for the security and audit requirements financial products need, including encryption, role-based access, audit trails and payment processing that keeps card data out of your systems. Our work includes the InstallmentGuard instalment platform and RBO Accounting's corporate tax platform in the UAE.",
    whatsappText: "Hi DEVSYNX, I need fintech software built.",
    introTag: "Fintech",
    introTitle: "Software That Moves and Tracks Money Safely",
    intro: [
      "Financial software is judged on two things: it must never get the numbers wrong, and it must never leak data. That means careful data modelling, double-checked calculations, complete audit trails and security reviewed at every release.",
      "We have built instalment and credit tracking (InstallmentGuard), a corporate tax and accounting platform for a UAE firm (RBO Accounting), a real estate investment portal (Horizone Invest) and security tooling for enterprise CRMs and Google Workspace.",
    ],
    highlights: {
      tag: "What We Build",
      title: "Fintech Software Types",
      cards: [
        { icon: "💳", title: "Payments & Wallets", text: "Checkout, subscriptions, payouts and wallet balances through regulated payment providers." },
        { icon: "🏦", title: "Lending & Instalments", text: "Applications, credit checks, repayment schedules, reminders and collections dashboards." },
        { icon: "🧾", title: "Accounting & Tax Tools", text: "Invoicing, reconciliation, tax calculations and client portals for accounting firms." },
        { icon: "📊", title: "Investment Dashboards", text: "Portfolios, transactions, statements and document management for investors." },
      ],
    },
    guideTitle: "Building Fintech Software: Key Decisions",
    guide: [
      { heading: "Use regulated partners for the regulated parts", content: "Most fintech products should not hold customer funds or raw card numbers themselves. Payment processors, banking-as-a-service providers and licensed lenders handle the regulated parts, while your software provides the experience and logic around them. Using a processor's hosted fields or checkout keeps card data out of your servers and greatly reduces your PCI DSS scope." },
      { heading: "Identity, KYC and fraud", content: "If your product onboards customers who move money, you will likely need identity verification (KYC) and anti-money-laundering checks, usually through a specialist provider. Plan the onboarding flow around these checks, including what happens when verification fails or needs manual review." },
      { heading: "Getting the money logic right", content: "Store amounts as integers in the smallest currency unit, never as floating-point numbers. Record every movement as an immutable ledger entry rather than overwriting balances. Make operations idempotent so a retried request cannot charge twice. Reconcile daily against the payment provider's records and alert on mismatches." },
      { heading: "Security and audit requirements", content: "Financial software needs role-based access with least privilege, multi-factor authentication, encryption in transit and at rest, detailed audit logs, secure secret management and regular dependency and penetration testing. Plan these as features in the roadmap rather than tasks for the end." },
      { heading: "Licensing and local rules", content: "Whether your product needs a licence depends on what it does and where: payments, lending, investment advice and e-money are regulated differently in each country. Get legal advice early; the answer often changes which partners you use and how the product is designed." },
    ],
    servicesTitle: "Fintech Development Services",
    services: [
      { icon: "📱", title: "Fintech Apps", text: "Secure iOS and Android apps with biometric login.", href: "/app-development-company-pakistan/", linkLabel: "Mobile Apps" },
      { icon: "💻", title: "Web Platforms & Portals", text: "Customer portals, admin back-offices and dashboards.", href: "/custom-software-development-company/", linkLabel: "Custom Software" },
      { icon: "🔌", title: "Payment & Banking Integrations", text: "Stripe, Checkout.com, local gateways and open-banking APIs.", href: "/services/api-development-integration/", linkLabel: "API Integration" },
      { icon: "🔐", title: "Security Audits", text: "Code, infrastructure and access reviews before launch.", href: "/services/cybersecurity-auditing/", linkLabel: "Security Auditing" },
      { icon: "☁️", title: "Compliant Cloud Setup", text: "Encrypted, monitored infrastructure with audit logging.", href: "/services/cloud-security-compliance/", linkLabel: "Cloud Compliance" },
      { icon: "🤖", title: "AI for Finance Operations", text: "Document extraction, reconciliation support and reporting.", href: "/ai-automation-agency/", linkLabel: "AI Automation" },
    ],
    caseStudiesTitle: "Fintech Projects We Have Delivered",
    caseStudyIds: ["installmentguard", "rbo-accounting", "horizone-invest", "thestarmint", "employee-security-crm", "google-workspace-security"],
    related: [
      { href: "/real-estate-software-development/", label: "Real Estate Software Development" },
      { href: "/healthcare-software-development/", label: "Healthcare Software Development" },
      { href: "/custom-software-development-company/", label: "Custom Software Development" },
      { href: "/hire-dedicated-developers/", label: "Hire Dedicated Developers" },
    ],
    faqs: [
      { question: "How much does fintech software development cost?", answer: "It depends on the product and its integrations. Security, compliance and integration work make fintech projects larger than ordinary apps of the same size. We quote a fixed price for a defined first release after a scoping call." },
      { question: "Do we need PCI DSS compliance?", answer: "If you accept card payments, PCI DSS applies in some form. Using a payment processor's hosted checkout or fields keeps card data off your servers and reduces your scope to the simplest level." },
      { question: "Can you integrate KYC and identity verification?", answer: "Yes. We integrate specialist KYC and identity verification providers into onboarding flows, including handling manual review cases." },
      { question: "Can you build an instalment or BNPL-style payment system?", answer: "Yes. We build instalment schedules, automated reminders, payment tracking and collections dashboards, as in our InstallmentGuard platform. The lending itself should run through a properly licensed entity." },
      { question: "How do you keep financial data secure?", answer: "Least-privilege access, multi-factor login, encryption in transit and at rest, audit logs, secret management, dependency scanning and security testing before each major release." },
    ],
    ctaTitle: "Plan Your Fintech Product",
  },

  /* ---------------- Education ---------------- */
  {
    slug: "edtech-software-development",
    path: "/edtech-software-development/",
    navLabel: "EdTech Software Development",
    metaTitle: "EdTech & E-Learning Software Development",
    metaDescription:
      "EdTech and e-learning software development: learning platforms, course apps, school management systems and AI tutoring features.",
    keywords: ["edtech software development company", "e-learning app development", "lms development", "education app development", "school management software development", "online course platform development"],
    serviceName: "EdTech Software Development",
    badge: "Learning platforms · School systems · Course apps",
    h1Before: "EdTech & E-Learning",
    h1Highlight: "Software Development",
    quickAnswer:
      "DEVSYNX builds education software: online course and learning platforms, mobile learning apps, school and academy management systems, and AI features such as tutoring assistants and automatic quiz generation. Our work includes the Saviored Learning skills platform in the US and education-focused SEO for ProGenius Students.",
    whatsappText: "Hi DEVSYNX, I need education software built.",
    introTag: "EdTech",
    introTitle: "Software for Course Creators, Schools and Training Companies",
    intro: [
      "Education products succeed when learners keep coming back. That depends less on feature count than on a smooth path from sign-up to the first completed lesson, good video playback on slow connections, and progress that feels visible.",
      "We build learning platforms for course creators and training companies, and management systems for schools and academies, with payments, certificates and reporting included.",
    ],
    highlights: {
      tag: "What We Build",
      title: "Education Software Types",
      cards: [
        { icon: "🎓", title: "Course & Learning Platforms", text: "Video lessons, quizzes, progress tracking, certificates and subscriptions or one-off course sales." },
        { icon: "📱", title: "Learning Apps", text: "Mobile apps with offline lessons, reminders and streaks that keep learners engaged." },
        { icon: "🏫", title: "School & Academy Management", text: "Admissions, fees, attendance, timetables, results and parent communication." },
        { icon: "🤖", title: "AI Learning Features", text: "Tutoring assistants, quiz generation from your content and automatic feedback on answers." },
      ],
    },
    guideTitle: "Building an E-Learning Platform: What Matters",
    guide: [
      { heading: "Build or use an existing LMS?", content: "Off-the-shelf learning management systems and course platforms are the fastest way to start selling courses. A custom platform makes sense when learning is your core product, when you need features or branding those tools don't allow, when per-student fees become expensive at scale, or when you want to own the data and the learner experience fully." },
      { heading: "Video and content delivery", content: "Use a dedicated video hosting service with adaptive streaming so lessons play smoothly on slow mobile connections, and protect paid videos with signed URLs. Support downloads for offline viewing in the app if your learners travel or have unreliable internet." },
      { heading: "Engagement features that work", content: "Short lessons, visible progress, reminders, quizzes after each module and certificates on completion are the features that most consistently improve completion rates. Community features such as discussions or cohorts help for professional courses but need moderation." },
      { heading: "Children's data and privacy", content: "If your platform is used by children, data protection rules are stricter, such as COPPA in the US and GDPR's provisions for children in the UK and EU, and schools may have their own requirements. Collect the minimum data, get the right consents and give schools control over student accounts." },
      { heading: "Using AI responsibly in learning", content: "AI can generate practice questions from your material, give instant feedback and answer learners' questions about a lesson. Limit the assistant to your course content, show sources, and keep teachers in control of grades and final feedback." },
    ],
    servicesTitle: "EdTech Development Services",
    services: [
      { icon: "💻", title: "Learning Platform Development", text: "Custom LMS and course platforms with payments.", href: "/custom-software-development-company/", linkLabel: "Custom Software" },
      { icon: "📱", title: "Learning Apps", text: "iOS and Android apps with offline lessons.", href: "/app-development-company-pakistan/", linkLabel: "Mobile Apps" },
      { icon: "🚀", title: "EdTech MVPs", text: "Launch a first version for real learners quickly.", href: "/mvp-development-company/", linkLabel: "MVP Development" },
      { icon: "🤖", title: "AI Tutoring Features", text: "Assistants and quiz generation from your content.", href: "/ai-automation-agency/", linkLabel: "AI Automation" },
      { icon: "🎥", title: "Course Video Production", text: "Explainer and lesson videos produced with AI tools.", href: "/clients/ai-video-production/", linkLabel: "AI Video Case Study" },
      { icon: "📈", title: "Education SEO", text: "Course and program pages that rank and enrol students.", href: "/services/seo-services/", linkLabel: "SEO Services" },
    ],
    caseStudiesTitle: "Education Projects We Have Delivered",
    caseStudyIds: ["saviored", "progenius-students-seo", "ai-video-production", "motion-graphic-explainers", "devsynx-attendance-hr", "superhuman-mail"],
    related: [
      { href: "/mvp-development-company/", label: "MVP Development" },
      { href: "/healthcare-software-development/", label: "Healthcare Software Development" },
      { href: "/tools/app-development-cost-calculator/", label: "App Development Cost Calculator" },
      { href: "/software-house-multan/", label: "School Software in Multan" },
    ],
    faqs: [
      { question: "How much does it cost to build an e-learning platform?", answer: "A focused course platform with video lessons, quizzes and payments is a moderate project; adding apps, live classes, AI features or school administration increases the scope. We quote a fixed price after a scoping call." },
      { question: "Should I build a custom LMS or use an existing one?", answer: "Use an existing platform if you are validating a course idea. Build custom when learning is your core product, when you need features or branding those tools can't provide, or when per-student fees become expensive." },
      { question: "Can learners watch lessons offline?", answer: "Yes. In mobile apps we can support secure downloads of lessons for offline viewing, with progress synced when the learner reconnects." },
      { question: "Can you add AI tutoring to our platform?", answer: "Yes. We build assistants limited to your course content that answer questions, generate practice quizzes and give feedback, with teachers in control of grading." },
      { question: "Do you build school management systems?", answer: "Yes. We build admissions, fee collection, attendance, timetables, results and parent communication, including SMS and WhatsApp notifications." },
    ],
    ctaTitle: "Plan Your Education Platform",
  },

  /* ---------------- Field service / contractors ---------------- */
  {
    slug: "field-service-app-development",
    path: "/field-service-app-development/",
    navLabel: "Field Service App Development",
    metaTitle: "Field Service App Development for Contractors",
    metaDescription:
      "Field service and contractor app development: lead generation, dispatch, scheduling, quotes and job tracking for roofing, HVAC, plumbing and home service businesses.",
    keywords: ["field service app development", "contractor app development", "field service management software development", "home services app development", "contractor lead generation software", "dispatch software development"],
    serviceName: "Field Service App Development",
    badge: "Leads · Dispatch · Quotes · Job tracking",
    h1Before: "Field Service App Development",
    h1Highlight: "for Contractors",
    quickAnswer:
      "DEVSYNX builds software for contractors and home service businesses: lead generation and CRM platforms, dispatch and scheduling, technician mobile apps with job checklists and photos, quotes and invoices, and AI phone agents that answer and book calls. Our work includes the Contractor Leads US platform, Roofing Systems Co and on-demand booking platforms for plumbing and home services.",
    whatsappText: "Hi DEVSYNX, I need software for my service business.",
    introTag: "Field Service",
    introTitle: "Software for Roofing, HVAC, Plumbing and Home Service Businesses",
    intro: [
      "Service businesses lose money in the gaps: missed calls that never become jobs, technicians driving across town because of poor scheduling, quotes sent days late and invoices that wait for paperwork. Good field service software closes those gaps.",
      "We have built lead acquisition and dispatch for Contractor Leads US, a commercial roofing and solar platform for Roofing Systems Co, and on-demand booking platforms for plumbing and home service companies in Southeast Asia and the UAE.",
    ],
    highlights: {
      tag: "What We Build",
      title: "Field Service Software Types",
      cards: [
        { icon: "📞", title: "Lead Capture & AI Answering", text: "Every call, form and ad lead captured, qualified and booked, including after hours by an AI voice agent." },
        { icon: "🗓️", title: "Scheduling & Dispatch", text: "Assign jobs by skill, location and availability, with live technician status for the office." },
        { icon: "🧰", title: "Technician Mobile Apps", text: "Job details, checklists, photos, signatures and offline mode for sites without signal." },
        { icon: "🧾", title: "Quotes, Invoices & Payments", text: "Quotes from templates, approval online, invoices on job completion and card payment on site." },
      ],
    },
    guideTitle: "Choosing Field Service Software: Off-the-Shelf or Custom",
    guide: [
      { heading: "When off-the-shelf field service software is enough", content: "Established field service platforms cover scheduling, dispatch, quoting and invoicing well for many small teams. If your process is standard and your team is small, start there; the monthly fee is usually less than building your own." },
      { heading: "When a custom system pays off", content: "Custom software makes sense when per-technician fees grow large, when you run lead generation as a business, when you combine services (for example roofing plus solar) that tools handle poorly, or when you need integrations with your own pricing, inventory or accounting systems. Many companies keep their accounting tool and build a custom layer for leads, dispatch and the customer experience." },
      { heading: "Answer every call", content: "For home services, the first company to answer usually wins the job. Missed calls after hours and during busy periods are the biggest leak. Call tracking shows how many you miss, and an AI phone agent or answering workflow can capture and book those callers automatically, with urgent jobs escalated to an on-call technician." },
      { heading: "Design the technician app for the field", content: "Technicians use the app with gloves, in bright sunlight and in basements without signal. Keep screens simple with large buttons, make every action work offline and sync later, and capture photos, checklists and customer signatures in the flow of the job so paperwork is finished when the job is." },
      { heading: "Measure what matters", content: "Track lead response time, booking rate, jobs per technician per day, first-time fix rate, average ticket and days from job completion to payment. These numbers show where the software is saving money and where to improve next." },
    ],
    servicesTitle: "Field Service Development Services",
    services: [
      { icon: "📱", title: "Technician & Customer Apps", text: "iOS and Android apps with offline mode.", href: "/app-development-company-dallas/", linkLabel: "App Development Dallas" },
      { icon: "📇", title: "CRM & Dispatch Platforms", text: "Lead routing, scheduling and job tracking.", href: "/custom-software-development-company/", linkLabel: "Custom Software" },
      { icon: "🤖", title: "AI Phone Agents", text: "Answer, qualify and book calls 24/7.", href: "/ai-automation-agency/", linkLabel: "AI Automation" },
      { icon: "🌐", title: "Lead Generation Websites", text: "Fast service-area websites that rank and convert.", href: "/services/custom-web-development/", linkLabel: "Web Development" },
      { icon: "🔌", title: "Accounting & Payment Integrations", text: "QuickBooks, Xero, Stripe and Square.", href: "/services/api-development-integration/", linkLabel: "API Integration" },
      { icon: "📈", title: "Local SEO", text: "Service-area pages and Google Business Profile optimisation.", href: "/services/seo-services/", linkLabel: "SEO Services" },
    ],
    caseStudiesTitle: "Contractor & Home Service Projects",
    caseStudyIds: ["contractor-leads", "roofing-systems", "fix-it-bilal", "ag-plumbing-murah", "ai-calling-agent", "qualified-leads-x"],
    related: [
      { href: "/app-development-company-dallas/", label: "App Development Dallas" },
      { href: "/app-development-company-calgary/", label: "App Development Calgary" },
      { href: "/ai-automation-agency/", label: "AI Automation Agency" },
      { href: "/blog/ai-calling-agents-for-business/", label: "Guide: AI Calling Agents" },
    ],
    faqs: [
      { question: "How much does field service software development cost?", answer: "A technician app with scheduling and job tracking is a moderate project; adding lead generation, quoting, payments and integrations increases the scope. We quote a fixed price after mapping your workflow." },
      { question: "Should I build my own field service software?", answer: "Use an existing platform if your process is standard and your team is small. Build custom when per-user fees grow large, when your services don't fit the tools, or when you need deep integrations or a lead-generation platform of your own." },
      { question: "Can the technician app work without internet?", answer: "Yes. We build offline-first apps that save jobs, photos, checklists and signatures on the device and sync when a connection returns." },
      { question: "Can an AI agent answer calls for my service business?", answer: "Yes. An AI phone agent can answer calls, ask qualifying questions, check availability, book jobs and alert an on-call technician for emergencies." },
      { question: "Do you integrate with QuickBooks?", answer: "Yes. We sync customers, invoices and payments with QuickBooks, Xero and payment providers such as Stripe and Square." },
    ],
    ctaTitle: "Plan Your Field Service Software",
  },
];
