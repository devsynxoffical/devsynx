export type ProjectMetric = {
  label: string;
  value: string;
  description: string;
};

export type TechCategory = {
  category: string;
  technologies: string[];
};

export type KeyFeature = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type ClientProject = {
  id: string;
  clientName: string;
  projectTitle: string;
  domain: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  region: string;
  gradient: string;
  image: string;
  desktopImage?: string;
  mobileImage?: string;
  websiteUrl: string;
  year?: string;
  
  // In-Depth Case Study Content
  aboutClient: string;
  challenge: string;
  solution: string;
  whatWeDelivered: string[];
  techStack: TechCategory[];
  metrics: ProjectMetric[];
  keyFeatures: KeyFeature[];
  testimonial?: Testimonial;
  seoKeywords: string[];
};

export const clientProjects: ClientProject[] = [
  {
    id: "contractor-leads",
    clientName: "Contractor Leads US",
    projectTitle: "Lead Generation & CRM for Contractors",
    domain: "contractorleads.us",
    tagline: "Automated multi-channel contractor lead acquisition & dispatch platform",
    description:
      "High-converting lead acquisition platform and automated CRM system designed specifically for commercial and residential contractors across North America.",
    category: "LEAD GENERATION & CRM",
    tags: ["Contractor Platform", "Lead Generation", "CRM Automation", "Next.js", "SMS Dispatch"],
    region: "United States",
    gradient: "linear-gradient(135deg, #06909D, #1a73e8)",
    image: "/portfolio-assets/contractor-leads-us-mockup.jpg",
    websiteUrl: "https://www.contractorleads.us/",
    year: "2024",
    aboutClient:
      "Contractor Leads US is a premier B2B lead generation network connecting residential and commercial contractors with verified, high-intent property owners looking for roofing, plumbing, HVAC, and remodeling services across all 50 US states.",
    challenge:
      "Contractors were losing up to 60% of potential inbound bids due to slow manual response times, disaggregated lead intake forms, and high friction in phone-to-CRM data entry. Contractor Leads US needed an automated real-time dispatch infrastructure that could intake homeowner project requests, verify phone numbers instantly, score contractor availability by zip code, and distribute exclusive leads within seconds.",
    solution:
      "Devsynx designed and built an end-to-end full-stack web platform with automated routing logic. We implemented high-converting multi-step qualification funnels, real-time SMS & email notifications via Twilio and SendGrid, an interactive contractor dashboard with Stripe credit billing, and automated webhooks that sync directly into standard contractor CRMs like Jobber and Housecall Pro.",
    whatWeDelivered: [
      "High-converting responsive multi-step lead capture intake funnels",
      "Instant phone verification and spam filtering via Twilio Lookup API",
      "Automated zip code geo-routing matching homeowners to nearby licensed contractors",
      "Contractor self-service portal with credit wallet and auto-recharge via Stripe",
      "Real-time SMS lead alerts delivering homeowner details in under 15 seconds",
      "Direct API integrations with Salesforce, HubSpot, Jobber, and custom webhooks"
    ],
    techStack: [
      { category: "Frontend", technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend & Cloud", technologies: ["Node.js", "PostgreSQL", "Prisma ORM", "AWS Lambda"] },
      { category: "Integrations", technologies: ["Twilio SMS & Voice", "Stripe Connect", "SendGrid", "Zapier Webhooks"] }
    ],
    metrics: [
      { label: "Lead Response Time", value: "< 15s", description: "Average time from form submit to contractor SMS alert" },
      { label: "Conversion Lift", value: "+310%", description: "Increase in completed homeowner lead submissions" },
      { label: "Contractors Onboarded", value: "1,200+", description: "Active licensed contractors receiving daily leads" }
    ],
    keyFeatures: [
      { title: "Geo-Fenced Lead Matching", description: "Algorithm automatically matches project requests to verified contractors within a set radius." },
      { title: "Instant SMS Dispatch", description: "Sends lead project details to the contractor's mobile phone within 15 seconds of inquiry." },
      { title: "Automated Dispute Resolution", description: "Contractors can request instant credit refunds for invalid or out-of-scope inquiries." }
    ],
    testimonial: {
      quote: "Devsynx completely re-engineered our lead engine from scratch. Our contractors now receive exclusive leads in under 15 seconds, and our intake conversion tripled within the first 60 days.",
      author: "Mark S.",
      role: "Operations Director, Contractor Leads US"
    },
    seoKeywords: [
      "Contractor Leads US",
      "contractorleads.us",
      "contractorleads",
      "contractor lead generation software",
      "contractor CRM development",
      "Devsynx Contractor Leads",
      "who built contractorleads.us",
      "custom contractor portal developer"
    ]
  },
  {
    id: "roofing-systems",
    clientName: "Roofing Systems Co",
    projectTitle: "Commercial Roofing & Solar Platform",
    domain: "roofingsystems.co",
    tagline: "Enterprise commercial roofing estimation, solar workflows & project operations",
    description:
      "Digital portal for commercial roofing estimating, solar panel integration workflows, and project management for roofing contractors.",
    category: "CONSTRUCTION & SOLAR",
    tags: ["Roofing Portal", "Project Management", "Estimating System", "Solar Workflows"],
    region: "United States",
    gradient: "linear-gradient(135deg, #FDBD02, #06909D)",
    image: "/portfolio-assets/roofing-systems-co-mockup.jpg",
    websiteUrl: "https://roofingsystems.co/",
    year: "2024",
    aboutClient:
      "Roofing Systems Co is a commercial construction technology provider serving commercial roofers, building owners, and industrial solar installers across the United States.",
    challenge:
      "Commercial roof replacements and solar panel retrofits require complex pitch calculations, drone roof survey imports, multi-tier subcontractor bids, and strict warranty compliance. The client was relying on disconnected spreadsheets and paper quotes, causing estimation delays of 7 to 10 days per commercial building proposal.",
    solution:
      "Devsynx engineered a dedicated commercial roofing digital portal. The system features an interactive square-footage and material estimator, high-resolution CAD & drone image annotation tools, automated solar load feasibility checks, and one-click PDF commercial bid proposal generation.",
    whatWeDelivered: [
      "Interactive commercial roofing square footage and material cost calculator",
      "Automated PDF proposal generator with customized scope of work and warranty tiers",
      "Subcontractor bidding room with role-based document access",
      "Drone imagery inspection viewer with defect tagging and leak heatmaps",
      "Solar structural load feasibility calculator integration",
      "Full mobile-optimized field audit app for on-roof project managers"
    ],
    techStack: [
      { category: "Frontend", technologies: ["React", "Next.js", "HTML5 Canvas", "Tailwind CSS"] },
      { category: "Backend", technologies: ["Python FastAPI", "PostgreSQL", "Amazon S3", "Docker"] },
      { category: "Tools", technologies: ["PDFKit Engine", "Leaflet Geo Maps", "AWS CloudFront"] }
    ],
    metrics: [
      { label: "Bid Turnaround", value: "24 hrs", description: "Reduced from 7-10 business days down to under 24 hours" },
      { label: "Quote Accuracy", value: "99.2%", description: "Eliminated manual estimation calculation errors" },
      { label: "Commercial Bids Sent", value: "$42M+", description: "Total commercial project bids generated through platform" }
    ],
    keyFeatures: [
      { title: "Smart Material Estimator", description: "Calculates membranes, insulation layers, fasteners, and labor hours by square footage." },
      { title: "One-Click Bid Proposal", description: "Generates branded, client-ready PDF contracts with digital e-signature capabilities." },
      { title: "Field Inspection Audit", description: "Allows field engineers to upload geo-tagged roof defect photos directly from tablet or mobile." }
    ],
    testimonial: {
      quote: "Devsynx transformed our estimation process. What used to take our senior estimators a week now takes less than an hour, giving us a major competitive edge on commercial RFP bids.",
      author: "David R.",
      role: "VP of Engineering, Roofing Systems Co"
    },
    seoKeywords: [
      "Roofing Systems Co",
      "roofingsystems.co",
      "roofingsystems",
      "commercial roofing software",
      "solar roofing estimation platform",
      "Devsynx Roofing Systems",
      "who developed roofingsystems.co",
      "construction estimating portal development"
    ]
  },
  {
    id: "suuvo",
    clientName: "Suuvo",
    projectTitle: "Short-Form Video & Social Media Platform",
    domain: "suuvo.com",
    tagline: "Next-generation short-form vertical video, creator community & interactive social engagement platform",
    description:
      "TikTok and Instagram-style social media platform featuring algorithmic vertical video feeds, creator monetization, live interaction, and real-time social engagement.",
    category: "SOCIAL MEDIA & ENTERTAINMENT",
    tags: ["Short-Form Video", "Social Media App", "Reels & Feeds", "Creator Economy", "Mobile & Web"],
    region: "Global",
    gradient: "linear-gradient(135deg, #10A37F, #004050)",
    image: "/portfolio-assets/suuvo-travel-mockup.jpg",
    websiteUrl: "https://www.suuvo.com/",
    year: "2024",
    aboutClient:
      "Suuvo is a next-generation social entertainment and video discovery platform built for the creator economy, empowering digital creators and global audiences to produce, share, and discover short-form vertical videos, live moments, and trending community content.",
    challenge:
      "Building a high-throughput social video ecosystem like TikTok and Instagram requires sub-100ms algorithmic feed generation, zero-buffer vertical video caching, real-time comment and like websockets, high-speed media transcoding pipelines, and automated content moderation at global scale.",
    solution:
      "Devsynx architected and engineered Suuvo's full-stack social video platform. We developed a fluid 60 FPS vertical swipe video player with predictive pre-buffering, an AI recommendation feed engine, real-time interactive engagement (likes, comments, shares, duets), creator profile hubs, and automated HLS video transcoding clusters.",
    whatWeDelivered: [
      "Infinite vertical video feed with gesture-driven swipe navigation and predictive pre-buffering",
      "Algorithmic recommendation engine serving personalized trending video feeds",
      "Creator studio with in-browser & mobile video upload, trimming, music overlay, and thumbnail generation",
      "Real-time WebSocket interaction infrastructure supporting millions of concurrent likes, comments, and shares",
      "Distributed cloud video transcoding pipeline automatically encoding uploads into multi-resolution adaptive bitrates",
      "Creator analytics dashboard tracking impressions, watch time, follower growth, and virtual gifting engagement"
    ],
    techStack: [
      { category: "Frontend & Mobile", technologies: ["Next.js 14", "React", "React Native", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Video & Media Pipeline", technologies: ["AWS MediaConvert", "HLS Adaptive Streaming", "FFmpeg Clusters", "CloudFront CDN"] },
      { category: "Backend & Real-Time", technologies: ["Node.js", "Go Microservices", "WebSockets", "Redis Cluster", "PostgreSQL", "AWS S3"] }
    ],
    metrics: [
      { label: "Video Start Time", value: "< 120ms", description: "Zero-latency playback on swipe via intelligent chunk pre-fetching" },
      { label: "Concurrent Watchers", value: "150K+", description: "Handled simultaneously without streaming stutter or server degradation" },
      { label: "Daily Videos Streamed", value: "2.8M+", description: "Served daily across global audiences" }
    ],
    keyFeatures: [
      { title: "Instant-Swipe Video Engine", description: "Ultra-responsive vertical scroll architecture pre-buffers adjacent videos for instant playback." },
      { title: "Personalized Discovery Feed", description: "Machine learning recommendation logic that adapts to user watch time, likes, and shares." },
      { title: "Creator Engagement Hub", description: "Enables interactive comments, creator follows, virtual gifts, and instant social sharing." }
    ],
    testimonial: {
      quote: "Devsynx achieved the impossible by building a TikTok-grade video streaming and social platform that feels buttery smooth. Our creators and users are blown away by the speed and polish.",
      author: "Alexandre M.",
      role: "Founder & Product Lead, Suuvo"
    },
    seoKeywords: [
      "Suuvo",
      "Suuvo app",
      "suuvo.com",
      "TikTok alternative platform",
      "Instagram reels clone developer",
      "short form video app development",
      "social media app developer",
      "Devsynx Suuvo",
      "who built suuvo.com",
      "video streaming platform agency"
    ]
  },
  {
    id: "qualified-leads-x",
    clientName: "Qualified Leads X",
    projectTitle: "B2B Lead Qualification & Intelligence",
    domain: "qualifiedleadsx.com",
    tagline: "Automated B2B prospect verification, intent scoring & sales intelligence SaaS",
    description:
      "Data-driven lead enrichment and qualification platform that scores and routes high-intent B2B sales prospects to growth teams.",
    category: "SALES INTELLIGENCE",
    tags: ["B2B SaaS", "Lead Enrichment", "Sales Intelligence", "Data Verification"],
    region: "United States",
    gradient: "linear-gradient(135deg, #6C63FF, #3F3D56)",
    image: "/portfolio-assets/qualified-leads-x-mockup.jpg",
    websiteUrl: "https://www.qualifiedleadsx.com/",
    year: "2024",
    aboutClient:
      "Qualified Leads X provides high-growth B2B enterprise software companies with verified contact records, real-time technographic intelligence, and buyer intent scoring.",
    challenge:
      "Sales development teams waste 40% of their prospecting hours dealing with bounced email addresses, outdated phone numbers, and unqualified company profiles. Qualified Leads X needed an automated data validation pipeline that could crawl, verify, and score corporate leads in bulk.",
    solution:
      "Devsynx architected a high-throughput SaaS platform with background data enrichment queues. The platform conducts multi-point MX record validations, LinkedIn profile matching, revenue tier verification, and AI-driven buyer intent scoring before delivering verified contact lists.",
    whatWeDelivered: [
      "Bulk CSV contact list upload and real-time asynchronous data verification queue",
      "Multi-point email deliverability verification engine (SMTP handshake & MX check)",
      "Technographic scanner identifying current CRM, cloud provider, and software stack",
      "Automated lead scoring system assigning 0-100 sales intent scores",
      "One-click sync to HubSpot, Salesforce, Outreach, and Apollo.io",
      "Stripe recurring subscription tiers with automated quota tracking and usage alerts"
    ],
    techStack: [
      { category: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Lucide Icons"] },
      { category: "Backend", technologies: ["Python FastAPI", "Celery Workers", "Redis", "PostgreSQL"] },
      { category: "Cloud & Ops", technologies: ["Docker", "AWS ECS", "Stripe Billing", "SendGrid"] }
    ],
    metrics: [
      { label: "Bounce Rate Reduction", value: "< 2%", description: "Verified email lists achieve over 98% inbox delivery" },
      { label: "Contacts Verified", value: "3.5M+", description: "Processed across enterprise client campaigns" },
      { label: "Prospecting Time Saved", value: "65%", description: "Saved per SDR rep per week" }
    ],
    keyFeatures: [
      { title: "Real-Time MX & SMTP Ping", description: "Verifies mail server responsiveness without sending spam probe emails." },
      { title: "Technographic Profiling", description: "Discovers what tools, analytics, and infrastructure a prospect company uses." },
      { title: "Instant CRM Push", description: "Syncs qualified leads into sales pipelines with custom field mapping." }
    ],
    testimonial: {
      quote: "Devsynx built our core verification and enrichment SaaS from the ground up. The system is blazing fast, handles millions of contact records without flinching, and our users love the UI.",
      author: "Jason K.",
      role: "Founder, Qualified Leads X"
    },
    seoKeywords: [
      "Qualified Leads X",
      "qualifiedleadsx.com",
      "qualifiedleadsx",
      "B2B sales intelligence software",
      "lead enrichment SaaS development",
      "Devsynx Qualified Leads X",
      "who built qualifiedleadsx.com",
      "email verification platform developer"
    ]
  },
  {
    id: "seven-figure-studio",
    clientName: "Seven Figure Studio",
    projectTitle: "Agency Growth & Digital Studio Platform",
    domain: "sevenfigurestudio.us",
    tagline: "High-converting digital brand portal, interactive portfolio & client acquisition engine",
    description:
      "Creative digital agency portal delivering full-funnel marketing, brand strategy, and high-performance Webflow/Next.js design solutions.",
    category: "AGENCY & DIGITAL MARKETING",
    tags: ["Agency Portal", "Digital Studio", "Growth Engine", "Motion Design"],
    region: "United States",
    gradient: "linear-gradient(135deg, #EC4899, #831843)",
    image: "/portfolio-assets/seven-figure-studio-mockup.jpg",
    websiteUrl: "https://sevenfigurestudio.us/",
    year: "2024",
    aboutClient:
      "Seven Figure Studio is an elite digital growth studio partnering with high-revenue founders, DTC brands, and venture-backed startups to scale their brand identity and digital presence.",
    challenge:
      "The agency needed a state-of-the-art web presence that communicated luxury, high authority, and technical superiority, with sub-second page loads, fluid interactive micro-animations, and frictionless discovery call booking.",
    solution:
      "Devsynx engineered a bespoke, dark-mode agency platform featuring cinematic typography, smooth GSAP-driven scroll animations, interactive project showcases, and calendar scheduling integrations engineered for maximum conversion.",
    whatWeDelivered: [
      "Custom dark-mode UI with fluid micro-interactions and smooth scroll orchestration",
      "Interactive case study showcase with embedded video breakdowns and before/after comparisons",
      "Integrated Calendly and HubSpot scheduling flow with automated qualification logic",
      "Automated client inquiry intake pipeline with instant Slack team notifications",
      "Ultra-fast Lighthouse 99 performance score with optimized assets and zero layout shift",
      "Comprehensive programmatic SEO structure targeting high-ticket agency services"
    ],
    techStack: [
      { category: "Frontend", technologies: ["Next.js", "React", "GSAP / Framer Motion", "Tailwind CSS"] },
      { category: "Integrations", technologies: ["HubSpot CRM", "Calendly API", "Slack Webhooks", "Vercel Edge"] }
    ],
    metrics: [
      { label: "Lighthouse Score", value: "99/100", description: "Near-perfect performance, accessibility, and SEO" },
      { label: "Booked Calls Lift", value: "+240%", description: "Increase in qualified founder discovery calls" },
      { label: "Avg Session Duration", value: "4m 12s", description: "High user engagement driven by interactive visual storytelling" }
    ],
    keyFeatures: [
      { title: "Fluid Kinetic Typography", description: "Smooth editorial headers and animations that captivate incoming corporate visitors." },
      { title: "Frictionless Call Scheduler", description: "Qualifies high-intent prospects before booking directly onto founder calendars." },
      { title: "Dynamic Client Showcase", description: "Interactive filtered portfolio highlighting agency creative achievements." }
    ],
    testimonial: {
      quote: "Devsynx understood our aesthetic vision down to the exact pixel. The site feels like a bespoke digital experience and our inbound client conversion shot through the roof.",
      author: "Julian V.",
      role: "Creative Director, Seven Figure Studio"
    },
    seoKeywords: [
      "Seven Figure Studio",
      "sevenfigurestudio.us",
      "sevenfigurestudio",
      "digital agency website developer",
      "creative studio web design",
      "Devsynx Seven Figure Studio",
      "who built sevenfigurestudio.us",
      "high performance Next.js agency site"
    ]
  },
  {
    id: "ra-enterprise-contractor",
    clientName: "RA Enterprise Contractor",
    projectTitle: "Commercial Contracting & Engineering",
    domain: "raenterprisecontractor.my",
    tagline: "Heavy commercial construction, infrastructure bidding & project tracking portal",
    description:
      "Enterprise infrastructure and commercial building contractor platform providing project tracking, bidding, and compliance management.",
    category: "ENTERPRISE CONTRACTING",
    tags: ["Contracting", "Enterprise Management", "Infrastructure", "Engineering"],
    region: "Malaysia",
    gradient: "linear-gradient(135deg, #2563EB, #1E3A5F)",
    image: "/portfolio-assets/ra-enterprise-contractor-mockup.jpg",
    websiteUrl: "https://raenterprisecontractor.my/",
    year: "2024",
    aboutClient:
      "RA Enterprise Contractor is a leading engineering and commercial infrastructure contractor in Malaysia specializing in public works, civil engineering, industrial buildings, and mechanical installations.",
    challenge:
      "Managing municipal tender bids, subcontractor safety compliance certifications, and live job-site milestone tracking across dozens of concurrent infrastructure projects required a centralized, secure digital platform.",
    solution:
      "Devsynx engineered an enterprise corporate and operations portal. The platform showcases completed infrastructure mega-projects, handles tender document distribution, tracks engineering compliance certificates, and enables direct government and commercial client RFPs.",
    whatWeDelivered: [
      "Enterprise corporate portal with bilingual support (English & Bahasa Malaysia)",
      "Civil and mechanical engineering project showcase with milestone galleries",
      "Secure document repository for government regulatory compliance and CIDB certifications",
      "Interactive commercial tender request submission system with automated notifications",
      "Responsive field-ready mobile optimization for site engineers and corporate stakeholders",
      "Enterprise-grade SSL, DDoS protection, and ISO-compliant security safeguards"
    ],
    techStack: [
      { category: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Backend & Storage", technologies: ["Node.js", "Express", "PostgreSQL", "AWS S3"] },
      { category: "Hosting", technologies: ["AWS Lightsail", "Cloudflare CDN", "Let's Encrypt SSL"] }
    ],
    metrics: [
      { label: "Tender Submissions", value: "+180%", description: "Increase in digital RFP inquiries from commercial builders" },
      { label: "Compliance Retrieval", value: "< 5s", description: "Instant access to required CIDB and safety certificates" },
      { label: "Site Reliability", value: "99.95%", description: "Continuous uptime across government inspection audits" }
    ],
    keyFeatures: [
      { title: "Infrastructure Case Catalog", description: "Categorized archive of commercial, civil, and industrial developments." },
      { title: "Tender Document Access", description: "Controlled distribution of architectural blueprints and RFP schedules." },
      { title: "CIDB & Safety Certifications", description: "Direct verification badges guaranteeing regulatory safety compliance." }
    ],
    testimonial: {
      quote: "Devsynx built a robust, authoritative digital platform for RA Enterprise that has significantly streamlined our commercial tender negotiations and government client presentations.",
      author: "Ir. Razak A.",
      role: "Managing Director, RA Enterprise Contractor"
    },
    seoKeywords: [
      "RA Enterprise Contractor",
      "raenterprisecontractor.my",
      "raenterprisecontractor",
      "commercial contractor website developer",
      "civil engineering portal Malaysia",
      "Devsynx RA Enterprise",
      "who built raenterprisecontractor.my",
      "infrastructure contractor software"
    ]
  },
  {
    id: "rizki-akbar-enterprise",
    clientName: "Rizki Akbar Enterprise",
    projectTitle: "Corporate Business Solutions Portal",
    domain: "rizkiakbarenterprise.com",
    tagline: "International trade consulting, supply chain & enterprise corporate services portal",
    description:
      "Multi-industry corporate business portal providing supply chain logistics, trade consulting, and enterprise management services.",
    category: "CORPORATE SOLUTIONS",
    tags: ["Enterprise Portal", "Corporate Services", "Global Trade", "Logistics"],
    region: "Indonesia & SEA",
    gradient: "linear-gradient(135deg, #0EA5E9, #0369A1)",
    image: "/portfolio-assets/rizki-akbar-enterprise-mockup.jpg",
    websiteUrl: "https://www.rizkiakbarenterprise.com/",
    year: "2024",
    aboutClient:
      "Rizki Akbar Enterprise is a diversified corporate group across Southeast Asia operating in commodities export, supply chain distribution, and corporate enterprise consultancy.",
    challenge:
      "The conglomerate operated across separate subsidiaries without a unified digital corporate umbrella. International trade partners needed a centralized corporate verification portal to review business credentials, track shipping capabilities, and initiate trade contracts.",
    solution:
      "Devsynx designed and deployed a unified corporate hub. The platform features multilingual presentation of corporate divisions, live import/export commodity catalogs, a direct consultation scheduling engine, and secure credential verification for international partners.",
    whatWeDelivered: [
      "Corporate conglomerate multi-division web portal with unified brand governance",
      "B2B export commodities catalog with dynamic specification sheets and PDF downloads",
      "Direct international trade inquiry and RFQ procurement pipeline",
      "Corporate executive bio portal and investor relations disclosure section",
      "High-speed CDN routing ensuring fast access for partners in Europe, Asia, and North America",
      "Automated lead routing assigning incoming trade inquiries to relevant division managers"
    ],
    techStack: [
      { category: "Frontend", technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend", technologies: ["Node.js", "PostgreSQL", "Nginx", "Cloudflare"] },
      { category: "Communications", technologies: ["WhatsApp Business API", "SendGrid", "Google Workspace"] }
    ],
    metrics: [
      { label: "Global Trade Leads", value: "+215%", description: "Increase in verified international B2B procurement inquiries" },
      { label: "Page Load Time", value: "0.9s", description: "Optimized across low-bandwidth mobile networks in SEA" },
      { label: "Divisions Unified", value: "5 Units", description: "Successfully consolidated under one corporate digital umbrella" }
    ],
    keyFeatures: [
      { title: "Commodity Trade Catalog", description: "Showcases agricultural, mineral, and manufactured export commodities with specs." },
      { title: "Multi-Division Routing", description: "Routes incoming bids directly to logistics, trade, or consulting departments." },
      { title: "Direct WhatsApp Procurement", description: "Instant WhatsApp bridge allowing trade officers to initiate real-time deals." }
    ],
    testimonial: {
      quote: "Devsynx created an elegant, authoritative enterprise platform that unified our group companies and boosted our credibility with international trade partners worldwide.",
      author: "Rizki A.",
      role: "CEO, Rizki Akbar Enterprise"
    },
    seoKeywords: [
      "Rizki Akbar Enterprise",
      "rizkiakbarenterprise.com",
      "rizkiakbarenterprise",
      "corporate portal developer",
      "international trade website development",
      "Devsynx Rizki Akbar",
      "who built rizkiakbarenterprise.com",
      "conglomerate web platform agency"
    ]
  },
  {
    id: "ag-plumbing-murah",
    clientName: "AG Plumbing Murah",
    projectTitle: "On-Demand Plumbing & Service Booking",
    domain: "agplumbingmurah.com",
    tagline: "Instant emergency plumbing technician dispatching & booking platform",
    description:
      "On-demand emergency plumbing service booking system connecting homeowners and businesses with certified local technicians.",
    category: "ON-DEMAND HOME SERVICES",
    tags: ["Service Booking", "Dispatch App", "On-Demand Services", "Mobile Web"],
    region: "Southeast Asia",
    gradient: "linear-gradient(135deg, #10B981, #064E3B)",
    image: "/portfolio-assets/ag-plumbing-murah-mockup.jpg",
    websiteUrl: "https://agplumbingmurah.com/",
    year: "2024",
    aboutClient:
      "AG Plumbing Murah is an on-demand residential and commercial plumbing contractor offering 24/7 emergency leak detection, pipe clearing, and bathroom sanitation services across metropolitan regions.",
    challenge:
      "Homeowners facing water leaks or burst pipes require immediate assistance. The client was losing emergency jobs to competitors because their previous site had slow load times, confusing contact forms, and no direct mobile click-to-call or WhatsApp dispatch.",
    solution:
      "Devsynx developed a mobile-first, high-conversion dispatch web application. The platform offers one-tap emergency calling, instant WhatsApp pre-filled booking, a transparent pricing calculator for standard plumbing repairs, and geo-located technician arrival estimations.",
    whatWeDelivered: [
      "Ultra-fast mobile-first landing experience loading in under 1 second on mobile networks",
      "Prominent one-tap emergency call and pre-filled WhatsApp booking triggers",
      "Interactive pricing transparency calculator for standard repair scenarios",
      "Customer reviews and live before/after photo slider showcasing completed jobs",
      "Local SEO architecture targeting high-intent emergency plumbing searches by district",
      "Integrated Google Maps location picker allowing customers to pin exact service addresses"
    ],
    techStack: [
      { category: "Frontend", technologies: ["React", "Next.js", "Tailwind CSS", "Lucide Icons"] },
      { category: "Integrations", technologies: ["WhatsApp Click-to-Chat API", "Google Maps Platform", "CallTrackingMetrics"] }
    ],
    metrics: [
      { label: "Mobile Conversions", value: "48%", description: "Of all mobile visitors initiate a direct phone call or WhatsApp inquiry" },
      { label: "Page Load Speed", value: "0.7s", description: "Ensures immediate access during stressful plumbing emergencies" },
      { label: "Emergency Bookings", value: "3,800+", description: "Emergency repair requests dispatched via platform" }
    ],
    keyFeatures: [
      { title: "One-Tap Emergency Dispatch", description: "Floating action buttons trigger immediate phone calls or pre-formatted WhatsApp chats." },
      { title: "Transparent Pricing Estimator", description: "Provides clear upfront estimates eliminating homeowner fear of hidden fees." },
      { title: "Hyper-Local SEO Pages", description: "Targeted landing structures that dominate local emergency service search results." }
    ],
    testimonial: {
      quote: "Devsynx understood that in emergency plumbing, speed is everything. Our phone rings all day long now and our conversion rate doubled from day one.",
      author: "Ahmad G.",
      role: "Founder, AG Plumbing Murah"
    },
    seoKeywords: [
      "AG Plumbing Murah",
      "agplumbingmurah.com",
      "agplumbingmurah",
      "plumbing service website developer",
      "emergency home service web app",
      "Devsynx AG Plumbing",
      "who built agplumbingmurah.com",
      "on-demand service booking developer"
    ]
  },
  {
    id: "quickdoctor-ie",
    clientName: "QuickDoctor Ireland",
    projectTitle: "Telehealth & Prescription Platform",
    domain: "quickdoctor.ie",
    tagline: "GDPR & HIPAA-compliant telemedicine consultations & digital prescription dispatch",
    description:
      "HIPAA & GDPR-compliant online doctor consultation platform delivering fast medical prescriptions and remote clinical consultations.",
    category: "TELEHEALTH & HEALTHCARE",
    tags: ["Telehealth", "Medical Consultation", "GDPR Healthcare", "Digital Prescriptions"],
    region: "Ireland & Europe",
    gradient: "linear-gradient(135deg, #06909D, #004050)",
    image: "/portfolio-assets/quickdoctor-ireland-mockup.jpg",
    websiteUrl: "https://quickdoctor.ie/",
    year: "2024",
    aboutClient:
      "QuickDoctor Ireland is a certified European telehealth provider delivering online clinical consultations, medical illness certs, and digital prescription fulfillment for patients across the Republic of Ireland and the EU.",
    challenge:
      "Building a healthcare platform requires strict compliance with GDPR, European Health Data Space regulations, and Irish Medical Council guidelines. The platform needed encrypted patient questionnaires, doctor review queues, secure video calls, and instant Healthmail prescription integration.",
    solution:
      "Devsynx engineered a state-of-the-art telehealth web platform. We implemented end-to-end encrypted medical questionnaire intakes, an intuitive doctor diagnostic portal, automated prescription generation routed directly to registered pharmacies, and secure Stripe payment processing.",
    whatWeDelivered: [
      "GDPR & Medical Council compliant patient symptom intake questionnaires",
      "Secure doctor diagnostic portal with clinical review workflows and patient history logs",
      "Automated PDF prescription generator integrating with Healthmail clinical email networks",
      "Encrypted patient records database with field-level cryptographic encryption (AES-256)",
      "Instant SMS and email status alerts keeping patients updated on doctor approvals",
      "Seamless mobile experience allowing patients to request repeat prescriptions in 3 minutes"
    ],
    techStack: [
      { category: "Frontend", technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend & Security", technologies: ["Node.js", "PostgreSQL", "AES-256 Encryption", "Docker"] },
      { category: "Healthcare APIs", technologies: ["Healthmail Integration", "Twilio HIPAA SMS", "Stripe Healthcare"] }
    ],
    metrics: [
      { label: "Prescription Turnaround", value: "< 45m", description: "Average time from patient submission to pharmacy dispatch" },
      { label: "Patient Satisfaction", value: "99.4%", description: "Positive clinical review ratings from Irish patients" },
      { label: "Consultations Handled", value: "45,000+", description: "Securely processed with 100% regulatory compliance" }
    ],
    keyFeatures: [
      { title: "Clinical Triage Questionnaire", description: "Dynamic medical forms that safely triage patient conditions for doctor sign-off." },
      { title: "Secure Healthmail Integration", description: "Dispatches official prescriptions directly to any chosen pharmacy in Ireland." },
      { title: "Encrypted Health Vault", description: "Guarantees patient confidentiality with zero-knowledge encrypted database storage." }
    ],
    testimonial: {
      quote: "Devsynx achieved the highest standards of healthcare security and user experience. Their team delivered a platform that both our clinical doctors and patients love using every day.",
      author: "Dr. Ciarán O.",
      role: "Clinical Lead, QuickDoctor Ireland"
    },
    seoKeywords: [
      "QuickDoctor Ireland",
      "quickdoctor.ie",
      "quickdoctor",
      "telehealth platform developer",
      "GDPR healthcare web application",
      "Devsynx QuickDoctor",
      "who built quickdoctor.ie",
      "online doctor prescription portal developer"
    ]
  },
  {
    id: "ballchart",
    clientName: "BallChart Sports",
    projectTitle: "Real-Time Sports Analytics Platform",
    domain: "ballchart.com",
    tagline: "High-frequency sports telemetry, shot-chart heatmaps & performance analytics",
    description:
      "Advanced sports analytics and interactive statistical charting platform delivering real-time game telemetry, team metrics, and player performance data.",
    category: "SPORTS ANALYTICS & TECH",
    tags: ["Sports Analytics", "Real-Time Data", "Charting Engine", "Mobile App", "D3.js"],
    region: "United States",
    gradient: "linear-gradient(135deg, #F97316, #9A3412)",
    image: "/portfolio-assets/ballchart-sports-mockup.jpg",
    websiteUrl: "https://ballchart.com",
    year: "2024",
    aboutClient:
      "BallChart is a premier US sports technology analytics company empowering coaches, sports analysts, scouts, and fantasy enthusiasts with interactive statistical charting and live game telemetry.",
    challenge:
      "Displaying thousands of real-time sports data points, shot heatmaps, player court trajectories, and comparative team analytics on web and mobile browsers without frame drops or memory leaks required exceptional data visualization engineering.",
    solution:
      "Devsynx engineered a hardware-accelerated sports visualization engine using D3.js and Canvas/WebGL, paired with low-latency WebSockets for live match score synchronization, cross-platform Flutter mobile applications, and high-performance cloud databases.",
    whatWeDelivered: [
      "Interactive 2D & 3D court shot-chart heatmaps with customizable filter ranges",
      "Live WebSocket match score synchronization with sub-50ms data streaming updates",
      "Comparative head-to-head player and team statistical analytics dashboards",
      "Cross-platform iOS and Android mobile applications built with Flutter",
      "Exportable high-resolution match summary graphics for social media and broadcast",
      "Subscription paywall with tier-based access to advanced player performance metrics"
    ],
    techStack: [
      { category: "Web & Charts", technologies: ["React", "Next.js", "D3.js", "HTML5 Canvas / WebGL", "Tailwind CSS"] },
      { category: "Mobile", technologies: ["Flutter", "Dart", "iOS Swift", "Android Kotlin"] },
      { category: "Backend & Streaming", technologies: ["Node.js", "WebSockets", "Redis", "TimescaleDB", "AWS"] }
    ],
    metrics: [
      { label: "Frame Rate", value: "60 FPS", description: "Smooth fluid chart interaction even during heavy live match data loads" },
      { label: "Live Telemetry Latency", value: "< 50ms", description: "Real-time WebSocket score and stat delivery" },
      { label: "Active Sports Users", value: "80,000+", description: "Athletes, coaches, and sports enthusiasts on the platform" }
    ],
    keyFeatures: [
      { title: "Dynamic Shot Charting", description: "Visualizes exact shot coordinates, accuracy percentages, and zone efficiency." },
      { title: "Live Game Sync", description: "Streams live play-by-play actions directly onto interactive court diagrams." },
      { title: "Cross-Platform Sync", description: "Seamless transition between desktop web analysis and native mobile apps." }
    ],
    testimonial: {
      quote: "Devsynx pulled off an incredible feat of visualization engineering. Our charts render at a blistering 60 FPS and our mobile app launch in the App Store was executed flawlessly.",
      author: "Trevor B.",
      role: "Head of Product, BallChart Sports"
    },
    seoKeywords: [
      "BallChart Sports",
      "ballchart.com",
      "ballchart",
      "sports analytics software developer",
      "real time sports telemetry platform",
      "Devsynx BallChart",
      "who built ballchart.com",
      "Flutter sports app development agency"
    ]
  },
  {
    id: "saviored",
    clientName: "Saviored Learning",
    projectTitle: "Digital E-Learning & Skill Platform",
    domain: "saviored.com",
    tagline: "Interactive learning management system, video streaming & certification engine",
    description:
      "Interactive online course management system empowering educators and students with video streaming, quizzes, and course certifications.",
    category: "EDTECH & E-LEARNING",
    tags: ["E-Learning", "Course Management", "Video Streaming", "Stripe Billing"],
    region: "United States",
    gradient: "linear-gradient(135deg, #8B5CF6, #4C1D95)",
    image: "/portfolio-assets/saviored-learning-mockup.jpg",
    websiteUrl: "https://saviored.com",
    year: "2024",
    aboutClient:
      "Saviored is an innovative EdTech platform delivering modern skill-building courses, video masterclasses, interactive coding/business challenges, and industry-recognized certifications.",
    challenge:
      "Legacy learning management systems are notoriously slow, clunky, and lack engaging interactive elements. Saviored required a fast, Netflix-style video curriculum browser, instant quiz evaluation, automated certificate generation, and seamless instructor payout infrastructure.",
    solution:
      "Devsynx engineered a full-featured EdTech platform. Features include adaptive bitrate HLS video streaming, interactive module quizzes with instant scoring, automated dynamic SVG/PDF certificate generation upon course completion, and Stripe subscription management.",
    whatWeDelivered: [
      "Adaptive HLS video streaming with custom branded video player and resume-playback",
      "Interactive student quizzes, progress tracking, and downloadable course resources",
      "Automated digital certificate generation with verifiable public verification URLs",
      "Instructor dashboard for course creation, video upload, and revenue analytics",
      "Stripe recurring memberships and one-time course purchase checkout flows",
      "Gamified student badges and completion leaderboards driving course engagement"
    ],
    techStack: [
      { category: "Frontend", technologies: ["Next.js 14", "React", "TypeScript", "Video.js", "Tailwind CSS"] },
      { category: "Backend & Media", technologies: ["Node.js", "PostgreSQL", "AWS S3", "AWS CloudFront", "Mux Video"] },
      { category: "Payments", technologies: ["Stripe Connect & Billing", "SendGrid", "PDFKit"] }
    ],
    metrics: [
      { label: "Course Completion Lift", value: "+75%", description: "Driven by gamified milestone rewards and responsive video playback" },
      { label: "Video Buffer Latency", value: "< 0.4s", description: "HLS adaptive streaming across global student devices" },
      { label: "Certificates Issued", value: "22,000+", description: "Digitally verified certifications awarded to students" }
    ],
    keyFeatures: [
      { title: "Adaptive Bitrate Streaming", description: "Automatically adjusts video quality to match student internet bandwidth." },
      { title: "Verifiable Certificates", description: "Students receive unique verifiable credentials ready for LinkedIn sharing." },
      { title: "Instructor Revenue Portal", description: "Automated revenue split and royalty payouts via Stripe Connect." }
    ],
    testimonial: {
      quote: "Devsynx created a sleek, high-speed learning platform that feels like MasterClass. Our student engagement and retention numbers have never been higher.",
      author: "Evelyn T.",
      role: "Founder & Lead Educator, Saviored"
    },
    seoKeywords: [
      "Saviored",
      "Saviored Learning",
      "saviored.com",
      "EdTech platform development company",
      "custom LMS software developer",
      "Devsynx Saviored",
      "who built saviored.com",
      "video course streaming platform agency"
    ]
  },
  {
    id: "horizone-invest",
    clientName: "Horizone Invest",
    projectTitle: "Real Estate Investment Portal",
    domain: "horizoneinvest.com",
    tagline: "Fractional property investment portal, automated rental yields & investor portfolio tracking",
    description:
      "Fintech real estate investment portal facilitating fractional property ownership, portfolio management, and yield tracking for investors.",
    category: "REAL ESTATE FINTECH",
    tags: ["Real Estate Fintech", "Investment Portal", "Portfolio Tracker", "KYC Verification"],
    region: "UAE & Europe",
    gradient: "linear-gradient(135deg, #D97706, #78350F)",
    image: "/portfolio-assets/horizone-invest-mockup.jpg",
    websiteUrl: "https://horizoneinvest.com",
    year: "2024",
    aboutClient:
      "Horizone Invest is a modern real estate investment platform headquartered in Dubai and Europe, democratizing luxury commercial and residential property investment through fractional participation.",
    challenge:
      "Facilitating fractional real estate investments across cross-border markets demands strict KYC/AML identity verification, automated rental dividend calculation, secondary market liquidity, and transparent property asset tracking.",
    solution:
      "Devsynx architected an institutional-grade FinTech portal. We integrated SumSub automated biometric KYC verification, dynamic property offering pages with financial ROI calculators, automated monthly rental distribution ledgers, and secure investor document signing.",
    whatWeDelivered: [
      "Dynamic luxury property offering catalog with projected IRR and rental yield modeling",
      "Integrated automated KYC/AML investor identity onboarding via SumSub API",
      "Self-service investor portfolio dashboard tracking asset appreciation and dividend payouts",
      "Automated monthly rental dividend distribution calculation and wallet ledger",
      "Secure e-signature integration for legal property co-ownership contracts",
      "Bank-grade security with 2FA, data encryption, and audit trail compliance"
    ],
    techStack: [
      { category: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Chart.js", "Tailwind CSS"] },
      { category: "Backend & FinTech", technologies: ["Node.js", "PostgreSQL", "Prisma", "Docker", "AWS"] },
      { category: "Integrations", technologies: ["SumSub KYC", "DocuSign API", "Stripe Treasury", "Plaid"] }
    ],
    metrics: [
      { label: "Assets Under Platform", value: "$65M+", description: "Prime real estate assets listed and managed on portal" },
      { label: "KYC Pass Time", value: "< 3 mins", description: "Automated biometric verification for international investors" },
      { label: "Dividend Accuracy", value: "100%", description: "Zero-error automated monthly rental yield payouts" }
    ],
    keyFeatures: [
      { title: "Fractional Share Ledger", description: "Tracks precise co-ownership units and monthly yield accruals for every investor." },
      { title: "Interactive ROI Calculator", description: "Models 5-year capital appreciation, occupancy rates, and net cash yields." },
      { title: "One-Click KYC Onboarding", description: "Verifies government IDs and proof of address for global compliance in minutes." }
    ],
    testimonial: {
      quote: "Devsynx engineered a FinTech platform that matches the quality of top tier investment banks. Their attention to security, precision, and design made our international launch an absolute triumph.",
      author: "Tariq H.",
      role: "Managing Partner, Horizone Invest"
    },
    seoKeywords: [
      "Horizone Invest",
      "horizoneinvest.com",
      "horizoneinvest",
      "real estate fintech portal developer",
      "fractional property investment software",
      "Devsynx Horizone Invest",
      "who built horizoneinvest.com",
      "investment portfolio dashboard developer"
    ]
  },
  {
    id: "mdt-control",
    clientName: "MDT Control Systems",
    projectTitle: "Industrial Automation & Control Systems",
    domain: "mdtcontrol.com",
    tagline: "Industrial SCADA monitoring, IoT telemetry & smart factory automation software",
    description:
      "Industrial SCADA monitoring and control software platform for manufacturing automation, telemetry sensors, and IoT hardware.",
    category: "INDUSTRIAL IOT & SCADA",
    tags: ["Industrial IoT", "Automation Control", "Telemetry", "SCADA", "MQTT"],
    region: "Germany & Europe",
    gradient: "linear-gradient(135deg, #64748B, #0F172A)",
    image: "/portfolio-assets/mdt-control-systems-mockup.jpg",
    websiteUrl: "https://mdtcontrol.com",
    year: "2024",
    aboutClient:
      "MDT Control Systems is a German industrial engineering and automation firm providing intelligent SCADA systems, programmable logic controller (PLC) programming, and industrial IoT monitoring to European manufacturing plants.",
    challenge:
      "Factory plant managers struggled to monitor heterogeneous sensor protocols across different assembly lines, resulting in unpredicted equipment downtime, delayed temperature/pressure alarms, and siloed maintenance logs.",
    solution:
      "Devsynx engineered a cloud SCADA web platform capable of ingesting high-frequency MQTT and Modbus telemetry data from factory floor PLCs, rendering real-time plant schematics, and delivering predictive maintenance threshold alerts.",
    whatWeDelivered: [
      "Real-time industrial IoT telemetry dashboard rendering machine metrics under 100ms",
      "Dynamic visual plant schematic viewer displaying machine statuses (running, idle, warning)",
      "Automated SMS/Email incident escalation workflows triggered by threshold anomalies",
      "Historical telemetry trend analytics with exportable ISO maintenance logs",
      "Hardware-agnostic gateway integration supporting Siemens, Beckhoff, and Allen-Bradley PLCs",
      "Role-based plant floor access control ensuring airtight cybersecurity"
    ],
    techStack: [
      { category: "Frontend", technologies: ["React", "TypeScript", "ECharts", "Tailwind CSS"] },
      { category: "IoT & Backend", technologies: ["Python", "Node.js", "MQTT Broker", "TimescaleDB", "Redis"] },
      { category: "Infrastructure", technologies: ["Docker Containers", "Kubernetes", "AWS IoT Core"] }
    ],
    metrics: [
      { label: "Unplanned Downtime", value: "-42%", description: "Reduction achieved through real-time threshold alert escalation" },
      { label: "Sensor Ingestion Rate", value: "50,000/s", description: "High-frequency telemetry datapoints ingested smoothly" },
      { label: "Alarm Response Speed", value: "< 2s", description: "Time from sensor threshold breach to floor operator alert" }
    ],
    keyFeatures: [
      { title: "Live Machine Twin", description: "Visual schematic displays temperature, vibration, and motor rpm in real time." },
      { title: "Anomaly Predictive Alerting", description: "Detects micro-deviations in mechanical sensor telemetry before failures happen." },
      { title: "Audit & Maintenance Logs", description: "Maintains tamper-proof historical logs required for European industrial audits." }
    ],
    testimonial: {
      quote: "Devsynx combined deep software engineering expertise with an understanding of industrial protocols. Our plant operators can now detect sensor anomalies minutes before failures occur.",
      author: "Klaus W.",
      role: "Lead Systems Architect, MDT Control Systems"
    },
    seoKeywords: [
      "MDT Control Systems",
      "mdtcontrol.com",
      "mdtcontrol",
      "industrial IoT software development",
      "SCADA web platform developer",
      "Devsynx MDT Control",
      "who built mdtcontrol.com",
      "smart factory telemetry dashboard"
    ]
  },
  {
    id: "rankmora",
    clientName: "RankMora SaaS",
    projectTitle: "SEO Intelligence & Rank Tracking SaaS",
    domain: "rankmora.io",
    tagline: "Automated SERP rank tracking, competitor intelligence & search visibility analytics",
    description:
      "Automated keyword rank tracking and SEO intelligence SaaS platform analyzing search engine positions across global markets.",
    category: "SEO SAAS PLATFORM",
    tags: ["SEO SaaS", "Rank Tracker", "Search Intelligence", "SERP API"],
    region: "Global",
    gradient: "linear-gradient(135deg, #10A37F, #06909D)",
    image: "/portfolio-assets/rankmora-saas-mockup.jpg",
    websiteUrl: "https://rankmora.io/",
    year: "2024",
    aboutClient:
      "RankMora is a modern search engine optimization SaaS platform serving digital marketing agencies, SEO professionals, and e-commerce brands tracking keyword visibility across 150+ countries.",
    challenge:
      "Scraping and parsing search engine results pages (SERPs) across localized geographic proxies, mobile vs desktop viewports, and featured snippets requires massive scale, proxy rotation, CAPTCHA bypass, and low-cost database storage for historical keyword positions.",
    solution:
      "Devsynx engineered RankMora's distributed scraping microservice cluster. We implemented automated daily SERP tracking, historical ranking timeline graphs, competitor domain overlap analysis, automated white-label PDF reports, and Stripe SaaS subscription billing.",
    whatWeDelivered: [
      "Distributed proxy scraping cluster monitoring keywords across Google, Bing, and Yahoo",
      "Hyper-local geographic SERP tracking down to specific city and zip code coordinates",
      "Interactive historical rank progression charting with volatility anomaly indicators",
      "Automated competitor rank gap discovery identifying high-value untapped search terms",
      "White-label automated client PDF reports dispatched weekly with agency branding",
      "Full SaaS billing engine with tiered keyword allotments and team seat management"
    ],
    techStack: [
      { category: "Frontend", technologies: ["Next.js 14", "React", "TypeScript", "Chart.js", "Tailwind CSS"] },
      { category: "Scraping & Microservices", technologies: ["Go", "Node.js", "Python Puppeteer", "Redis Queue", "PostgreSQL"] },
      { category: "Cloud", technologies: ["AWS ECS", "DigitalOcean Kubernetes", "Stripe Billing", "SendGrid"] }
    ],
    metrics: [
      { label: "Keywords Tracked Daily", value: "1.2M+", description: "Daily search rank checks processed across global proxies" },
      { label: "Data Accuracy", value: "99.8%", description: "Verified against live manual search results in target regions" },
      { label: "Report Delivery", value: "100%", description: "Automated white-label reporting for digital marketing agencies" }
    ],
    keyFeatures: [
      { title: "Hyper-Local SERP Checks", description: "Checks rankings from exact GPS coordinates to reflect local search variance." },
      { title: "SERP Feature Detection", description: "Monitors who owns the AI Overview, Featured Snippet, Map Pack, and People Also Ask." },
      { title: "Agency White-Labeling", description: "Allows agencies to customize client dashboards and automated PDF reports with their own logos." }
    ],
    testimonial: {
      quote: "Devsynx engineered a beast of a SaaS platform. Scraping millions of keywords accurately across global proxies is technically grueling, but they built a bulletproof architecture.",
      author: "Samir B.",
      role: "Founder & Product Lead, RankMora SaaS"
    },
    seoKeywords: [
      "RankMora SaaS",
      "RankMora",
      "rankmora.io",
      "SEO rank tracking SaaS developer",
      "SERP tracking software engineering",
      "Devsynx RankMora",
      "who built rankmora.io",
      "custom SEO tool developers"
    ]
  },
  {
    id: "thestarmint",
    clientName: "The Star Mint",
    projectTitle: "Digital Asset & NFT Marketplace",
    domain: "thestarmint.com",
    tagline: "Web3 digital collectible marketplace, smart contract minting & non-custodial wallet gateway",
    description:
      "Web3 digital collectible marketplace featuring instant minting, smart contract integration, and secondary trading functionality.",
    category: "WEB3 & DIGITAL ASSETS",
    tags: ["Web3 Marketplace", "Smart Contracts", "Digital Collectibles", "Solidity", "IPFS"],
    region: "United States",
    gradient: "linear-gradient(135deg, #A855F7, #581C87)",
    image: "/portfolio-assets/the-star-mint-mockup.jpg",
    websiteUrl: "https://thestarmint.com/",
    year: "2024",
    aboutClient:
      "The Star Mint is an innovative digital collectibles and Web3 art curation platform connecting visionary digital artists with collectors worldwide through curated limited-edition releases.",
    challenge:
      "High gas fees, complex wallet onboarding, and unoptimized smart contracts frequently create friction for mainstream digital collectors. The Star Mint needed a frictionless storefront with gas-optimized ERC-721A smart contracts and intuitive wallet connection.",
    solution:
      "Devsynx architected and deployed The Star Mint platform. We wrote audited gas-optimized Solidity smart contracts, integrated Wagmi/Viem and RainbowKit for wallet connectivity, decentralized asset hosting on IPFS/Pinata, and designed an ultra-sleek editorial user interface.",
    whatWeDelivered: [
      "Gas-optimized ERC-721A batch minting smart contracts reducing gas fees by up to 60%",
      "Seamless non-custodial wallet connection supporting MetaMask, Coinbase Wallet, and WalletConnect",
      "Decentralized metadata and media storage via IPFS and Pinata high-speed gateways",
      "Real-time blockchain event indexing tracking collection floor prices and volume",
      "Credit card on-ramp integration allowing collectors to purchase digital assets via fiat",
      "Smart contract deployment and verification on Etherscan and Polygon"
    ],
    techStack: [
      { category: "Web3 & Smart Contracts", technologies: ["Solidity", "Hardhat", "ERC-721A", "OpenZeppelin"] },
      { category: "Frontend", technologies: ["Next.js", "TypeScript", "Wagmi", "Viem", "RainbowKit", "Tailwind CSS"] },
      { category: "Storage & APIs", technologies: ["IPFS / Pinata", "Alchemy RPC Nodes", "The Graph Subgraph"] }
    ],
    metrics: [
      { label: "Gas Fee Savings", value: "60%", description: "Achieved through ERC-721A batch minting contract architecture" },
      { label: "Collection Sellout Time", value: "< 24 hrs", description: "First Genesis collection sold out smoothly without network bottlenecks" },
      { label: "Transaction Success", value: "100%", description: "Zero failed mint transactions recorded on launch day" }
    ],
    keyFeatures: [
      { title: "Batch Mint Optimization", description: "Allows collectors to mint multiple digital assets in a single low-gas transaction." },
      { title: "Fiat Payment On-Ramp", description: "Enables traditional debit/credit card purchases without requiring crypto upfront." },
      { title: "Decentralized IPFS Pinning", description: "Ensures collectible art and provenance metadata remain permanently accessible." }
    ],
    testimonial: {
      quote: "Devsynx executed our Web3 launch with surgical precision. Their smart contracts were rock-solid, gas-efficient, and the frontend user experience was praised by our entire collector community.",
      author: "Marcus E.",
      role: "Creative Director, The Star Mint"
    },
    seoKeywords: [
      "The Star Mint",
      "thestarmint.com",
      "thestarmint",
      "Web3 marketplace developer",
      "NFT smart contract development",
      "Devsynx The Star Mint",
      "who built thestarmint.com",
      "blockchain storefront developer"
    ]
  },
  {
    id: "sigma-smart-tech",
    clientName: "Sigma Smart Tech",
    projectTitle: "Smart Home & IoT Control Hub",
    domain: "sigmasmarttech.com",
    tagline: "Intelligent smart home automation, Bluetooth/Wi-Fi hardware pairing & energy analytics",
    description:
      "IoT mobile app and cloud dashboard for remote smart home device control, security monitoring, and automated energy management.",
    category: "SMART HOME & IOT",
    tags: ["IoT Mobile App", "Smart Home", "Hardware Sync", "Bluetooth LE", "Wi-Fi Hub"],
    region: "United States",
    gradient: "linear-gradient(135deg, #0284C7, #0C4A6E)",
    image: "/portfolio-assets/sigma-smart-tech-mockup.jpg",
    websiteUrl: "https://sigmasmarttech.com/",
    year: "2024",
    aboutClient:
      "Sigma Smart Tech manufactures cutting-edge smart home automation devices including automated ambient lighting, climate regulators, security sensors, and smart power plugs for modern connected households.",
    challenge:
      "Connecting non-technical homeowners to IoT hardware requires seamless BLE/Wi-Fi pairing that never fails, instant cloud synchronization across multiple family smartphones, and an energy-monitoring dashboard that demonstrates real cost savings.",
    solution:
      "Devsynx engineered the companion mobile application and cloud IoT hub. We built an effortless 30-second Bluetooth LE discovery and Wi-Fi credential onboarding wizard, real-time device control with sub-100ms latency, and automated energy consumption analytics.",
    whatWeDelivered: [
      "Cross-platform iOS and Android smart home control app built with React Native",
      "Smooth 3-step Bluetooth Low Energy (BLE) hardware pairing and Wi-Fi setup wizard",
      "Sub-100ms cloud command execution via AWS IoT Core MQTT message broker",
      "Automated scheduled routines (e.g., 'Good Morning', 'Away Mode', 'Energy Saver')",
      "Live power wattage monitoring with monthly utility bill estimation charts",
      "Multi-user household permission sharing with administrative master controls"
    ],
    techStack: [
      { category: "Mobile App", technologies: ["React Native", "TypeScript", "BLE Native Modules", "Redux Toolkit"] },
      { category: "Cloud IoT", technologies: ["AWS IoT Core", "Node.js", "DynamoDB", "Lambda Serverless"] },
      { category: "Security", technologies: ["mTLS Hardware Certificates", "JWT Authentication", "OAuth2"] }
    ],
    metrics: [
      { label: "Hardware Pairing Success", value: "98.9%", description: "First-attempt Bluetooth-to-Wi-Fi onboarding rate" },
      { label: "Command Latency", value: "< 90ms", description: "Time from tap on smartphone to physical light or switch toggle" },
      { label: "Household Energy Saved", value: "22%", description: "Average energy consumption saved via automated routines" }
    ],
    keyFeatures: [
      { title: "Zero-Friction BLE Pairing", description: "Automatically detects unconfigured Sigma devices nearby with one-tap connection." },
      { title: "Smart Scheduling Automations", description: "Triggers appliances based on sunrise/sunset, geo-fencing, and user schedules." },
      { title: "Energy Breakdown Analytics", description: "Highlights which appliances consume the most electricity during peak hours." }
    ],
    testimonial: {
      quote: "Devsynx solved our biggest hardware bottleneck: seamless mobile pairing. Our device reviews on Amazon and customer ratings skyrocketed thanks to their intuitive mobile app.",
      author: "Nathan C.",
      role: "VP of Product, Sigma Smart Tech"
    },
    seoKeywords: [
      "Sigma Smart Tech",
      "sigmasmarttech.com",
      "sigmasmarttech",
      "smart home app development company",
      "IoT mobile application developer",
      "Devsynx Sigma Smart Tech",
      "who built sigmasmarttech.com",
      "BLE hardware companion app agency"
    ]
  },
  {
    id: "spicify-app",
    clientName: "Spicify App",
    projectTitle: "Culinary & Recipe Social Mobile App",
    domain: "spicifyapp.com",
    tagline: "Interactive culinary discovery, AI ingredient recommendations & social meal planning app",
    description:
      "Cross-platform mobile application connecting food lovers, home chefs, and recipe creators with personalized meal planning and social sharing.",
    category: "MOBILE SOCIAL APP",
    tags: ["Mobile App", "Culinary Platform", "Social Media", "Flutter", "AI Recommendations"],
    region: "United States & UK",
    gradient: "linear-gradient(135deg, #EF4444, #7F1D1D)",
    image: "/portfolio-assets/spicify-app-mockup.jpg",
    websiteUrl: "https://www.spicifyapp.com/",
    year: "2024",
    aboutClient:
      "Spicify is a viral culinary social mobile application uniting passionate home cooks, professional chefs, and foodies to share authentic recipes, plan weekly meals, and discover dishes based on ingredients in their pantry.",
    challenge:
      "Modern users find traditional recipe sites overwhelmed with invasive ads and long life stories. Spicify needed a high-speed, TikTok-style culinary social app with step-by-step cooking mode, instant grocery list synchronization, and smart ingredient substitution algorithms.",
    solution:
      "Devsynx developed the complete Spicify ecosystem: a blazing-fast Flutter cross-platform mobile app for iOS and Android, an AI recipe recommendation engine matching available pantry items, interactive hands-free cooking mode, and social creator tipping.",
    whatWeDelivered: [
      "Cross-platform iOS and Android mobile app engineered with Flutter and Dart",
      "Smart 'What's In My Fridge' search generating recipes from available ingredients",
      "Hands-free cooking mode with voice command prompts and step timers",
      "Social feed with video recipe reels, bookmarking, and community comments",
      "One-tap grocery list aggregation categorized by supermarket aisle",
      "Creator profile monetization with subscriber-only recipe unlock tiers via In-App Purchases"
    ],
    techStack: [
      { category: "Mobile App", technologies: ["Flutter", "Dart", "Provider / Riverpod", "iOS & Android"] },
      { category: "Backend & Cloud", technologies: ["Node.js", "Firebase", "PostgreSQL", "Google Cloud Storage"] },
      { category: "APIs & Audio", technologies: ["Speech-to-Text API", "RevenueCat In-App Purchases", "Algolia Search"] }
    ],
    metrics: [
      { label: "App Store Rating", value: "4.9 / 5", description: "Consistent top ratings across thousands of iOS and Android reviews" },
      { label: "Daily Active Chefs", value: "65,000+", description: "Home cooks actively cooking with the app daily" },
      { label: "Recipes Shared", value: "140K+", description: "Unique international culinary recipes submitted by community" }
    ],
    keyFeatures: [
      { title: "Hands-Free Kitchen Mode", description: "Keeps the screen awake and advances steps with voice commands so messy hands never touch the screen." },
      { title: "Pantry Ingredient Matcher", description: "Select what you have in the fridge and discover delicious meals instantly." },
      { title: "Smart Grocery Categorization", description: "Groups recipe ingredients automatically by supermarket produce, dairy, and spice aisles." }
    ],
    testimonial: {
      quote: "Devsynx brought Spicify from a napkin sketch to the App Store. Their product intuition, mobile engineering excellence, and design aesthetics created an app our users are obsessed with.",
      author: "Chloe L.",
      role: "Co-Founder & CEO, Spicify App"
    },
    seoKeywords: [
      "Spicify App",
      "Spicify",
      "spicifyapp.com",
      "culinary mobile app developer",
      "Flutter social mobile app development",
      "Devsynx Spicify",
      "who built spicifyapp.com",
      "recipe app development agency"
    ]
  },
  {
    id: "egg-produce",
    clientName: "Egg Produce",
    projectTitle: "Agricultural Supply Chain & Produce Logistics",
    domain: "eggproduce.com",
    tagline: "B2B farm-to-retail produce marketplace, refrigerated logistics & inventory tracking",
    description:
      "Agricultural B2B marketplace and logistics tracking system streamlining fresh produce distribution from farms to retail stores.",
    category: "AGRITECH & LOGISTICS",
    tags: ["AgriTech", "Supply Chain", "B2B Marketplace", "Logistics", "Cold-Chain"],
    region: "United States",
    gradient: "linear-gradient(135deg, #10B981, #14B8A6)",
    image: "/portfolio-assets/egg-produce-mockup.jpg",
    websiteUrl: "https://eggproduce.com/",
    year: "2024",
    aboutClient:
      "Egg Produce is an agricultural distribution network connecting commercial poultry and organic egg farms across North America directly with grocery chains, food distributors, and institutional buyers.",
    challenge:
      "Egg and agricultural distribution requires strict cold-chain compliance, USDA grade batch verification, fast inventory turnover, and transparent pricing that protects farmers while guaranteeing timely delivery to grocery retailers.",
    solution:
      "Devsynx engineered a specialized B2B AgriTech distribution platform. The software tracks egg batch packaging dates, monitors temperature compliance during transit, manages wholesale bulk purchase contracts, and automates freight logistics scheduling.",
    whatWeDelivered: [
      "B2B wholesale agricultural procurement portal with live crate pricing and volume discounts",
      "Automated batch lot tracking with USDA grade, organic, and cage-free certification logs",
      "Cold-chain refrigerated transportation booking and real-time delivery GPS tracking",
      "Automated commercial invoicing with ACH bank transfer and Net 30/60 terms",
      "Farmer vendor portal displaying production forecasts and automated settlement statements",
      "Mobile-friendly barcode scanning integration for warehouse pallet loading and unloading"
    ],
    techStack: [
      { category: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Backend & Database", technologies: ["Node.js", "Express", "PostgreSQL", "Prisma ORM"] },
      { category: "Logistics & APIs", technologies: ["Google Maps Fleet API", "Stripe ACH / Plaid", "AWS S3"] }
    ],
    metrics: [
      { label: "Spoilage Waste Reduced", value: "-35%", description: "Faster cold-chain dispatch and optimized warehouse routing" },
      { label: "Commercial Crates Moved", value: "4.2M+", description: "Distributed safely across major US grocery retailers" },
      { label: "Wholesale Order Speed", value: "3x Faster", description: "Automated recurring procurement replacing manual fax/phone orders" }
    ],
    keyFeatures: [
      { title: "Lot & Batch Traceability", description: "Traces every egg carton back to the specific farm origin, batch date, and quality audit." },
      { title: "Automated Freight Dispatch", description: "Assigns refrigerated pallet orders to regional freight carriers automatically." },
      { title: "Commercial B2B Terms", description: "Supports Net 30/60 terms with automated credit checks and scheduled ACH bank transfers." }
    ],
    testimonial: {
      quote: "Devsynx transformed our agricultural distribution pipeline. Our farm-to-retail logistics are now completely automated, traceable, and significantly more profitable.",
      author: "Harold M.",
      role: "Operations Director, Egg Produce"
    },
    seoKeywords: [
      "Egg Produce",
      "eggproduce.com",
      "eggproduce",
      "AgriTech software development company",
      "agricultural supply chain portal",
      "Devsynx Egg Produce",
      "who built eggproduce.com",
      "cold chain logistics web application"
    ]
  },

  // --- EXPANDED PORTFOLIO PROJECTS (devsynx-portfolio package) ---
  {
    "id": "rbo-accounting",
    "clientName": "RBO Accounting Services FZE",
    "projectTitle": "Corporate Tax & UAE Accounting Hub",
    "domain": "rboaccounting.ae",
    "tagline": "FTA-approved corporate tax, accounting, and business setup architecture across 7 Emirates",
    "description": "Comprehensive corporate web rebuild and national SEO restructuring for an FTA-approved accounting firm based in Ajman Free Zone, UAE, spanning 45 localized service pages and structured tax compliance schemas.",
    "category": "Web Development",
    "tags": [
      "Corporate Tax",
      "UAE Accounting",
      "SEO Architecture",
      "Next.js",
      "FTA Compliance",
      "Structured Data"
    ],
    "region": "United Arab Emirates",
    "gradient": "linear-gradient(135deg, #0f172a, #0284c7)",
    "image": "/portfolio-assets/rbo-accounting-services-fze-mockup.jpg",
    "desktopImage": "/portfolio-assets/rbo-accounting-services-fze-desktop.png",
    "mobileImage": "/portfolio-assets/rbo-accounting-services-fze-mobile.png",
    "websiteUrl": "https://www.rboaccounting.ae",
    "year": "2024",
    "aboutClient": "RBO Accounting Services FZE is a premier UAE Federal Tax Authority (FTA) approved corporate taxation, bookkeeping, auditing, and corporate advisory practice headquartered in Ajman Free Zone, serving multinational enterprises, SMEs, and freezone startups throughout Dubai, Abu Dhabi, and the Northern Emirates.",
    "challenge": "With UAE Corporate Tax regulations coming into effect, RBO faced an influx of business search queries but possessed an outdated, non-responsive 6-page site that ranked poorly for high-value transactional tax keywords. Legacy URLs lacked metadata, lead intake was unencrypted, and competitors dominated Emirate-level local search results.",
    "solution": "Devsynx engineered a ground-up 45-page digital platform featuring dedicated Emirate location hubs, granular corporate tax and VAT service pillars, automated consultation intake, Google Business Profile local SEO optimization, and a 30-row 301 redirect map preserving legacy link equity.",
    "whatWeDelivered": [
      "45 fully indexed, schema-structured pages covering UAE Corporate Tax, VAT, Auditing, and Freezone Setup",
      "Dedicated Emirate location landing pages (Dubai, Abu Dhabi, Sharjah, Ajman, RAK)",
      "30-row legacy 301 redirect map and technical SEO audit resolution",
      "Google Business Profile optimization and local citation map embedding",
      "Bilingual consultation booking forms with CRM and WhatsApp routing"
    ],
    "techStack": [
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js 14",
          "React",
          "TypeScript",
          "Tailwind CSS"
        ]
      },
      {
        "category": "SEO & Performance",
        "technologies": [
          "Schema.org JSON-LD",
          "OpenGraph",
          "Sitemap Generator",
          "Core Web Vitals Engine"
        ]
      },
      {
        "category": "Hosting & Security",
        "technologies": [
          "Cloudflare Enterprise SSL",
          "Vercel Edge Network",
          "HSTS Header Security"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Search Impressions",
        "value": "+340%",
        "description": "Organic search visibility across UAE tax & VAT keywords within 90 days"
      },
      {
        "label": "Indexed Pages",
        "value": "45",
        "description": "Complete service and location hubs indexed on Google Search Console"
      },
      {
        "label": "Consultation Leads",
        "value": "+185%",
        "description": "Qualified inbound inquiries from UAE business owners and freezone startups"
      }
    ],
    "keyFeatures": [
      {
        "title": "Emirate Location Hubs",
        "description": "Customized landing hubs for Dubai, Abu Dhabi, and Free Zones optimized for local geo-intent."
      },
      {
        "title": "Automated Tax Calculator",
        "description": "Interactive corporate tax estimation widget capturing high-intent qualification data."
      },
      {
        "title": "FTA Compliance Architecture",
        "description": "Structured FAQ and legal tax advisory content meeting UAE regulatory transparency standards."
      },
      {
        "title": "Mobile-First Consultation Flow",
        "description": "Frictionless WhatsApp and calendar booking integration optimized for GCC mobile users."
      }
    ],
    "seoKeywords": [
      "RBO Accounting",
      "UAE corporate tax consultant",
      "FTA approved tax agents Ajman",
      "Dubai accounting firm",
      "VAT filing UAE",
      "Ajman Free Zone business setup"
    ]
  },
  {
    "id": "nw-canvas",
    "clientName": "NW Canvas Industry",
    "projectTitle": "Industrial Exporter Platform & 3D Catalog",
    "domain": "nw-canvas.com",
    "tagline": "High-performance industrial exporter platform with interactive 3D tent visualizer & 77-product factory catalog",
    "description": "Enterprise industrial export website and custom 3D digital showroom for a leading Pakistani manufacturer of canvas tents, tarpaulins, military fabrics, and relief shelters exporting globally across Europe, Africa, and the Middle East.",
    "category": "Web Development",
    "tags": [
      "Industrial Export",
      "3D Visualization",
      "Product Catalog",
      "React",
      "Next.js",
      "B2B Manufacturing"
    ],
    "region": "Pakistan / Global Export",
    "gradient": "linear-gradient(135deg, #1c1917, #78350f)",
    "image": "/portfolio-assets/nw-canvas-industry-mockup.jpg",
    "desktopImage": "/portfolio-assets/nw-canvas-industry-desktop.png",
    "mobileImage": "/portfolio-assets/nw-canvas-industry-mobile.png",
    "websiteUrl": "https://nw-canvas.com",
    "year": "2024",
    "aboutClient": "NW Canvas Industry is a heavyweight textile and canvas manufacturing powerhouse in Pakistan, supplying institutional clients, international relief agencies (UNHCR, Red Cross), military organizations, and commercial glamping resorts with heavy-duty canvas tents, waterproof tarpaulins, and specialized fabric products.",
    "challenge": "International B2B buyers required detailed technical specifications, elevation drawings, fabric tensile certifications, and 3D tent perspectives before issuing multi-container Requests for Quotation (RFQs). Their previous static website lacked product filtering, modern visuals, and interactive CAD-level demonstrations.",
    "solution": "Devsynx built a high-performance Next.js industrial showcase with smooth GSAP scroll animations, a 25-model 3D tent render library featuring 8 photographic perspectives per shelter, an interactive RFQ specification builder, and a comprehensive 77-product downloadable factory catalog.",
    "whatWeDelivered": [
      "Industrial factory website redesign in React/Next.js with pinned process scroll architecture",
      "25-tent 3D asset library with elevation models, framing specs, and 8 camera view angles",
      "77-product comprehensive digital catalog covering canvas fabrics, tarpaulins, and relief tents",
      "Interactive container-load RFQ inquiry builder with multi-currency quotation request",
      "Export compliance, lab testing certs, and international shipping logistics portal"
    ],
    "techStack": [
      {
        "category": "Frontend & 3D",
        "technologies": [
          "Next.js",
          "Three.js / WebGL",
          "GSAP ScrollTrigger",
          "Framer Motion"
        ]
      },
      {
        "category": "Media & Asset Pipeline",
        "technologies": [
          "Blender 3D",
          "Photorealistic Ray Tracing",
          "Vector Technical Schematics"
        ]
      },
      {
        "category": "Backend & Inquiries",
        "technologies": [
          "Node.js API",
          "Direct CRM Webhook",
          "Resend Transactional Email"
        ]
      }
    ],
    "metrics": [
      {
        "label": "RFQ Inquiries",
        "value": "+210%",
        "description": "Increase in verified international wholesale export inquiries from the Middle East and Africa"
      },
      {
        "label": "Product Catalog Views",
        "value": "18.4K",
        "description": "Digital product sheet downloads and 3D tent visualizer interactions"
      },
      {
        "label": "Page Load Speed",
        "value": "0.9s",
        "description": "Sub-second load time despite high-resolution 3D renders and industrial diagrams"
      }
    ],
    "keyFeatures": [
      {
        "title": "Interactive 3D Elevation Views",
        "description": "Examine tent framing, rain fly layers, and floor dimensions from 8 realistic studio angles."
      },
      {
        "title": "Container Load Calculator",
        "description": "Estimate 20ft and 40ft container capacity for bulk canvas rolls and packed tent bundles."
      },
      {
        "title": "Factory Tour & Compliance",
        "description": "Showcase ISO quality certifications, weaving looms, proofing baths, and laboratory stress tests."
      },
      {
        "title": "One-Click PDF Product Sheets",
        "description": "Dynamically generate and download technical datasheets for institutional tender submissions."
      }
    ],
    "seoKeywords": [
      "NW Canvas Industry",
      "canvas tent manufacturer Pakistan",
      "relief tents exporter",
      "wholesale tarpaulin supplier",
      "military canvas fabric",
      "glamping safari tents"
    ]
  },
  {
    "id": "zahh-beverages",
    "clientName": "ZAHH Beverages",
    "projectTitle": "Premium Mineral Water Brand & 3D Packaging",
    "domain": "zahhbeverages.com",
    "tagline": "Elegant FMCG beverage brand experience featuring photorealistic 3D bottle and multipack visuals",
    "description": "High-end FMCG mineral water brand identity and digital platform showcasing pure natural artesian water, pristine manufacturing standards, and photorealistic 3D bottle and multi-pack packaging renders.",
    "category": "Web Development",
    "tags": [
      "FMCG Branding",
      "Mineral Water",
      "3D Packaging",
      "Next.js",
      "Print Design",
      "Brand Identity"
    ],
    "region": "Pakistan",
    "gradient": "linear-gradient(135deg, #082f49, #0284c7)",
    "image": "/portfolio-assets/zahh-beverages-mockup.jpg",
    "desktopImage": "/portfolio-assets/zahh-beverages-desktop.png",
    "mobileImage": "/portfolio-assets/zahh-beverages-mobile.png",
    "websiteUrl": "https://zahhbeverages.com",
    "year": "2024",
    "aboutClient": "ZAHH Beverages is a premium bottled natural mineral water brand delivering pure, mineral-balanced hydration extracted from untouched subterranean springs and processed through state-of-the-art multi-stage reverse osmosis and UV filtration.",
    "challenge": "Launching into a crowded beverage marketplace dominated by multinational giants required ZAHH to communicate uncompromising purity, luxury visual appeal, and retail distributor confidence before physical retail shelf stocking commenced.",
    "solution": "Devsynx engineered the digital brand universe from scratch: 3D modeling and lighting 500ml and 1500ml PET bottles with locked label typography, generating 6/8/10 multipack distribution renders, designing printed marketing collateral, and deploying a sleek Next.js brand portal.",
    "whatWeDelivered": [
      "Complete luxury FMCG brand website featuring glassmorphism and pristine aquatic visual elements",
      "Custom 3D CAD modeling of 500ml and 1500ml bottles with photorealistic condensation and refractive water physics",
      "Multi-pack case renders (6, 8, 10 bottle bundles) for retail distributors and hypermarkets",
      "Complete print packaging kit: A4 corporate flyers, tri-fold brochures, and distributor sales deck",
      "Distributor dealership application portal with automated logistics routing"
    ],
    "techStack": [
      {
        "category": "Frontend Design",
        "technologies": [
          "Next.js",
          "Tailwind CSS",
          "GSAP Motion",
          "SVG Micro-Animations"
        ]
      },
      {
        "category": "3D & Industrial Design",
        "technologies": [
          "Blender 3D",
          "Octane Render",
          "Label UV Unwrapping",
          "CAD Surface Modeling"
        ]
      },
      {
        "category": "Typography & Print",
        "technologies": [
          "Bebas Neue",
          "Manrope",
          "Playfair Display",
          "Adobe Illustrator CMYK Prep"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Distributor Inquiries",
        "value": "140+",
        "description": "Retail distribution applications submitted within the first 60 days of launch"
      },
      {
        "label": "Retail Conversion",
        "value": "99.4%",
        "description": "Positive brand perception score during wholesale distributor pitch meetings"
      },
      {
        "label": "Mobile Engagement",
        "value": "3.8m",
        "description": "Average session duration on interactive 3D bottle visualizer"
      }
    ],
    "keyFeatures": [
      {
        "title": "Photorealistic 3D Bottle Showcase",
        "description": "Explore bottle geometry, ergonomic grip curves, and pure mineral content breakdowns."
      },
      {
        "title": "Water Purity & Filtration Journey",
        "description": "Interactive scrollytelling step-by-step breakdown from deep aquifer extraction to bottle seal."
      },
      {
        "title": "Distributor & Bulk Order Portal",
        "description": "Dedicated wholesale request flow with pallet volume calculator and freight scheduling."
      },
      {
        "title": "Print-Ready Collateral Suite",
        "description": "Cohesive brand guidelines, vehicle wrap concepts, billboards, and point-of-sale shelf talkers."
      }
    ],
    "seoKeywords": [
      "ZAHH Beverages",
      "premium mineral water Pakistan",
      "bottled water distributor",
      "pure drinking water supplier",
      "FMCG beverage brand"
    ]
  },
  {
    "id": "million-dollar-funnels",
    "clientName": "Million Dollar Funnels",
    "projectTitle": "High-Ticket Direct Response Funnel Agency",
    "domain": "milliondollarfunnels.us",
    "tagline": "Sleek dark-mode sales funnel platform engineered for ultra-high conversion coaching & consulting offers",
    "description": "High-converting digital sales funnel agency platform featuring dark near-black aesthetics, electric cyan accents, video sales letter integration, work proof galleries, and high-ticket appointment scheduling.",
    "category": "Web Development",
    "tags": [
      "Sales Funnels",
      "High-Ticket",
      "Direct Response",
      "Next.js",
      "Calendly Integration",
      "Conversion Optimization"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #050b14, #06b6d4)",
    "image": "/portfolio-assets/million-dollar-funnels-mockup.jpg",
    "desktopImage": "/portfolio-assets/million-dollar-funnels-desktop.png",
    "mobileImage": "/portfolio-assets/million-dollar-funnels-mobile.png",
    "websiteUrl": "https://milliondollarfunnels.us",
    "year": "2024",
    "aboutClient": "Million Dollar Funnels is an elite direct-response growth agency that architects, builds, and scales multi-million-dollar sales funnels for high-ticket coaches, masterminds, course creators, and boutique consulting firms.",
    "challenge": "High-ticket coaching clients demand indisputable proof of return on ad spend. The agency needed a commanding, razor-sharp digital headquarters that demonstrated funnel mastery through its own conversion metrics and lightning-fast load times.",
    "solution": "Devsynx designed a high-contrast dark agency experience with electric cyan and neon blue accents, featuring a coaching Limited Time Offer (LTO) banner, interactive proof case studies, automated calendar booking, and CRM lead capture.",
    "whatWeDelivered": [
      "Complete agency website built in Next.js with sub-second page performance",
      "Coaching LTO countdown and dynamic incentive banner engine",
      "Proof vault featuring video testimonials, Stripe screenshot carousels, and client case studies",
      "Automated calendar booking funnel integrated with Calendly and GoHighLevel CRM",
      "Custom dark-mode brand recoloring and transparent vector asset library"
    ],
    "techStack": [
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS"
        ]
      },
      {
        "category": "Interactivity & Media",
        "technologies": [
          "Vimeo Player API",
          "Framer Motion",
          "Lottie Animations"
        ]
      },
      {
        "category": "Integration & Analytics",
        "technologies": [
          "GoHighLevel API",
          "Stripe Proof Sync",
          "Meta Pixel CAPI"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Opt-in Rate",
        "value": "18.4%",
        "description": "Average conversion rate on high-ticket funnel audit requests"
      },
      {
        "label": "Client Revenue Scaled",
        "value": "$14.2M+",
        "description": "Verified client sales generated through funnels built and optimized by the agency"
      },
      {
        "label": "Mobile Speed Score",
        "value": "98/100",
        "description": "Google PageSpeed Insights score on 4G cellular connections"
      }
    ],
    "keyFeatures": [
      {
        "title": "High-Ticket VSL Architecture",
        "description": "Zero-distraction video sales letter layout with timed call-to-action reveals."
      },
      {
        "title": "Verified Proof Gallery",
        "description": "Dynamic filterable grid of Stripe revenue dashboards, ad account ROAS, and video reviews."
      },
      {
        "title": "Frictionless Call Scheduler",
        "description": "Pre-qualifying questionnaire embedded directly before appointment calendar selection."
      },
      {
        "title": "Dark-Tech Visual Aesthetics",
        "description": "Custom glassmorphism cards with glowing gradients designed to retain attention."
      }
    ],
    "seoKeywords": [
      "Million Dollar Funnels",
      "high ticket sales funnels",
      "funnel building agency",
      "consulting funnel design",
      "VSL agency",
      "conversion rate optimization"
    ]
  },
  {
    "id": "million-dollar-media",
    "clientName": "Million Dollar Media",
    "projectTitle": "Digital Advertising & Creator Agency Showcase",
    "domain": "milliondollarmedia.us",
    "tagline": "High-impact social media and creative advertising agency platform with dynamic client performance cards",
    "description": "Premium creative agency platform built for high-growth paid social, video editing, and influencer advertising campaigns, featuring creator talent cards, viral view metrics, and client brand showcases.",
    "category": "Web Development",
    "tags": [
      "Creative Agency",
      "Paid Advertising",
      "Influencer Media",
      "Next.js",
      "Video Production",
      "Social Growth"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #09090b, #3b82f6)",
    "image": "/portfolio-assets/million-dollar-media-mockup.jpg",
    "desktopImage": "/portfolio-assets/million-dollar-media-desktop.png",
    "mobileImage": "/portfolio-assets/million-dollar-media-mobile.png",
    "websiteUrl": "https://milliondollarmedia.us",
    "year": "2024",
    "aboutClient": "Million Dollar Media produces high-converting short-form video ads, TikTok creative, Meta ad campaigns, and YouTube creative direction for DTC consumer brands and high-profile content creators.",
    "challenge": "Creative agencies live and die by their visual portfolio. The agency required an aesthetic, media-rich site that could stream high-definition video reels instantly without stuttering on mobile devices.",
    "solution": "Devsynx developed a cinema-grade agency platform utilizing lazy-loaded HLS video streaming, dynamic creator cards with live follower counts, interactive brand logos, and a streamlined project intake questionnaire.",
    "whatWeDelivered": [
      "Modern creative agency website with dark theme and dynamic electric accents",
      "Interactive client showcase cards displaying creator photos, roles, follower counts, and view metrics",
      "Optimized video reel modal with instant playback and zero buffering",
      "Interactive brand partnership ticker featuring Tier-1 DTC brand logos",
      "Client proposal intake funnel with automated qualification scoring"
    ],
    "techStack": [
      {
        "category": "Frontend Architecture",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS"
        ]
      },
      {
        "category": "Video & Animation",
        "technologies": [
          "HLS.js",
          "Cloudflare Stream",
          "Framer Motion",
          "GSAP"
        ]
      },
      {
        "category": "Performance & CDN",
        "technologies": [
          "Vercel Edge Network",
          "WebP/AVIF Image Pipeline",
          "Edge Caching"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Video Views Generated",
        "value": "120M+",
        "description": "Aggregated organic and paid views across agency-produced campaigns"
      },
      {
        "label": "Client Retention",
        "value": "92%",
        "description": "Annual recurring creative retainer contracts secured"
      },
      {
        "label": "Load Time",
        "value": "0.8s",
        "description": "Instant video feed load speed on mobile devices"
      }
    ],
    "keyFeatures": [
      {
        "title": "Dynamic Creator Grid",
        "description": "Filterable roster of creators, editors, and strategists with direct portfolio samples."
      },
      {
        "title": "Video Ad Showcase",
        "description": "Interactive mobile-aspect-ratio video players replicating TikTok and Instagram Reels feeds."
      },
      {
        "title": "Creative Performance Metrics",
        "description": "Transparent reporting cards highlighting CPM reductions, hook rates, and CTR metrics."
      },
      {
        "title": "Instant Pitch Booking",
        "description": "One-click consultation workflow linked directly to agency strategy leads."
      }
    ],
    "seoKeywords": [
      "Million Dollar Media",
      "creative ad agency",
      "short form video agency",
      "TikTok ads agency",
      "Meta UGC video ads",
      "social media marketing"
    ]
  },
  {
    "id": "funnels-that-print",
    "clientName": "Funnels That Print",
    "projectTitle": "Omnichannel Funnel Building & Automation Agency",
    "domain": "funnelsthatprint.com",
    "tagline": "End-to-end VSL, appointment booking, and automated AI calling funnel infrastructure",
    "description": "Full-stack conversion agency site featuring 6-step proprietary delivery process, 56 case study posts, 59 proof screenshots, 20 client logos, 6 video reviews, and an AI calling automation demonstration.",
    "category": "Web Development",
    "tags": [
      "Funnel Architecture",
      "AI Calling",
      "Appointment Automation",
      "Next.js",
      "Case Studies",
      "Lead Generation"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #022c22, #059669)",
    "image": "/portfolio-assets/funnels-that-print-mockup.jpg",
    "desktopImage": "/portfolio-assets/funnels-that-print-desktop.png",
    "mobileImage": "/portfolio-assets/funnels-that-print-mobile.png",
    "websiteUrl": "https://funnelsthatprint.com",
    "year": "2024",
    "aboutClient": "Funnels That Print builds turnkey client-acquisition machinery for B2B service firms, SaaS startups, and high-ticket agencies, combining custom landing pages, automated email/SMS follow-ups, and AI conversational voice triage.",
    "challenge": "The founders possessed massive proof\u2014over 50 case study screenshots and hours of video testimonials\u2014but lacked a cohesive platform to organize, filter, and present this overwhelming evidence without slowing down page load speeds.",
    "solution": "Devsynx engineered an ultra-fast digital showcase integrating an interactive 6-step delivery roadmap, a searchable proof vault with 59 screenshots, 6 video testimonial widgets, 56 structured case studies, and custom animated loaders.",
    "whatWeDelivered": [
      "Complete responsive web application engineered on Next.js 14",
      "Proprietary 6-step conversion workflow interactive diagram",
      "Proof vault featuring 59 high-resolution revenue and lead screenshots",
      "56 searchable case study articles with metrics and client breakdowns",
      "Integration of 20 client brand logos and 6 streaming video testimonials",
      "Custom branded pre-loader and micro-animations"
    ],
    "techStack": [
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS"
        ]
      },
      {
        "category": "Motion & Interactivity",
        "technologies": [
          "Framer Motion",
          "GSAP ScrollTrigger",
          "Lightgallery.js"
        ]
      },
      {
        "category": "Automation & Integration",
        "technologies": [
          "GoHighLevel API",
          "Vapi AI Voice Webhooks",
          "Zapier Automation"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Proof Vault Assets",
        "value": "115+",
        "description": "Organized testimonials, Stripe screenshots, and video case studies"
      },
      {
        "label": "Client Inbound Calls",
        "value": "45/mo",
        "description": "Qualified strategy call bookings generated via the new site"
      },
      {
        "label": "PageSpeed Score",
        "value": "99",
        "description": "Desktop Google PageSpeed rating despite heavy screenshot galleries"
      }
    ],
    "keyFeatures": [
      {
        "title": "Searchable Case Study Database",
        "description": "Filter by industry (SaaS, Agency, Coaching, Real Estate) to see exact ROI metrics."
      },
      {
        "title": "Interactive 6-Step Engine",
        "description": "Visual breakdown of Offer Creation, Copywriting, Page Design, Tech Setup, CRM Sync, and AI Voice."
      },
      {
        "title": "Integrated Video Testimonials",
        "description": "Lightweight video player modals that stream without delaying initial page paint."
      },
      {
        "title": "Automated AI Lead Qualification",
        "description": "Demo widget allowing prospective clients to experience conversational AI call triage live."
      }
    ],
    "seoKeywords": [
      "Funnels That Print",
      "funnel building agency",
      "automated appointment funnel",
      "AI calling funnels",
      "VSL funnel builder",
      "high ticket client acquisition"
    ]
  },
  {
    "id": "ustaad-ae",
    "clientName": "Ustaad.ae",
    "projectTitle": "UAE Private Tutoring & EdTech Marketplace",
    "domain": "ustaad.ae",
    "tagline": "Search-optimized education marketplace connecting verified tutors with students across Dubai and Abu Dhabi",
    "description": "EdTech marketplace platform and programmatic SEO architecture for private tutors, home instructors, and academic specialists across the United Arab Emirates, driving organic rank across 100+ curriculum subjects.",
    "category": "SEO & Growth",
    "tags": [
      "EdTech Marketplace",
      "Programmatic SEO",
      "UAE Education",
      "Next.js",
      "Search Console",
      "Local SEO"
    ],
    "region": "United Arab Emirates",
    "gradient": "linear-gradient(135deg, #1e1b4b, #6366f1)",
    "image": "/portfolio-assets/ustaad-ae-mockup.jpg",
    "desktopImage": "/portfolio-assets/ustaad-ae-desktop.png",
    "mobileImage": "/portfolio-assets/ustaad-ae-mobile.png",
    "websiteUrl": "https://ustaad.ae",
    "year": "2024",
    "aboutClient": "Ustaad.ae is the premier private education and home tuition discovery network in the United Arab Emirates, connecting parents and university students with verified tutors for British (IGCSE/A-Levels), IB, American, and CBSE curricula.",
    "challenge": "Education in the UAE is hyper-competitive and fragmented across dozens of curricula and subjects. Ustaad.ae required an organic search strategy that could capture thousands of long-tail search terms (e.g. 'A-level physics tutor Dubai Marina') without manual page drafting.",
    "solution": "Devsynx executed a comprehensive programmatic SEO blueprint: architecting subject and location taxonomy hubs, generating photorealistic educational hero visuals, writing in-depth curriculum study guides, and optimizing Google Search Console crawl efficiency.",
    "whatWeDelivered": [
      "Next.js programmatic landing page architecture covering 100+ subjects across Dubai, Abu Dhabi, and Sharjah",
      "Editorial blog strategy and high-ranking curriculum syllabus guides (IB, IGCSE, SAT, CBSE)",
      "Photorealistic educational brand imagery and student-tutor lifestyle visual assets",
      "Search Console keyword-to-page indexing optimization and crawl budget cleanup",
      "Direct tutor inquiry and booking flow with instant WhatsApp connection"
    ],
    "techStack": [
      {
        "category": "Frontend & SEO",
        "technologies": [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Programmatic Routing"
        ]
      },
      {
        "category": "SEO Architecture",
        "technologies": [
          "Schema.org Course & Person",
          "Dynamic XML Sitemaps",
          "GSC API Automation"
        ]
      },
      {
        "category": "Cloud & Database",
        "technologies": [
          "Supabase PostgreSQL",
          "Vercel Edge Network",
          "Cloudflare CDN"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Organic Clicks",
        "value": "28.5K",
        "description": "Monthly organic search visits from UAE parents and students"
      },
      {
        "label": "Top 3 Rankings",
        "value": "180+",
        "description": "Primary curriculum tutor search terms ranking in Google UAE Top 3"
      },
      {
        "label": "Tutor Leads",
        "value": "+240%",
        "description": "Direct student-to-tutor match requests generated monthly"
      }
    ],
    "keyFeatures": [
      {
        "title": "Curriculum-Specific Hubs",
        "description": "Tailored landing pages with syllabus breakdowns for IB Diploma, IGCSE, AP, and CBSE."
      },
      {
        "title": "Emirate & Neighborhood Filtering",
        "description": "Search by locality: Downtown Dubai, JLT, Silicon Oasis, Khalifa City, and Sharjah."
      },
      {
        "title": "Verified Tutor Profiles",
        "description": "Badges for degrees, police clearances, tutoring hours logged, and parent reviews."
      },
      {
        "title": "Instant Contact Routing",
        "description": "One-click connection connecting parents directly to available verified tutors via WhatsApp."
      }
    ],
    "seoKeywords": [
      "Ustaad.ae",
      "private tutor Dubai",
      "IGCSE math tutor Abu Dhabi",
      "IB physics tutor UAE",
      "home tutor Dubai Marina",
      "tutoring services UAE"
    ]
  },
  {
    "id": "top-performance",
    "clientName": "Top Performance Qatar",
    "projectTitle": "Automotive Performance Parts & Tuning E-Commerce",
    "domain": "topperformance.qa",
    "tagline": "High-octane automotive parts catalog and performance upgrade booking portal in Qatar",
    "description": "E-commerce platform and digital garage showroom for Qatar's premier automotive tuning and performance parts distributor, supporting vehicle compatibility search, turbocharger packages, and dyno booking.",
    "category": "E-Commerce & Retail",
    "tags": [
      "Automotive E-Commerce",
      "Parts Catalog",
      "Qatar Retail",
      "Vehicle Fitment",
      "Shopify Plus",
      "Dyno Tuning"
    ],
    "region": "Qatar",
    "gradient": "linear-gradient(135deg, #18181b, #dc2626)",
    "image": "/portfolio-assets/top-performance-mockup.jpg",
    "desktopImage": "/portfolio-assets/top-performance-desktop.png",
    "mobileImage": "/portfolio-assets/top-performance-mobile.png",
    "websiteUrl": "https://topperformance.qa",
    "year": "2024",
    "aboutClient": "Top Performance is Doha's leading motorsport performance center, importing world-class aftermarket exhaust systems, turbo kits, suspension components, and ECU tuning solutions for high-performance supercars and 4x4 dune vehicles.",
    "challenge": "Automotive performance requires strict Year-Make-Model (YMM) fitment data to prevent costly part returns. The client needed a fast, bilingual (English/Arabic) e-commerce storefront with complex inventory filtering and dyno session scheduling.",
    "solution": "Devsynx engineered a customized storefront featuring a Year-Make-Model vehicle fitment engine, high-resolution 3D parts visualizer, workshop dyno appointment calendar, and seamless local Qatari payment gateway integration.",
    "whatWeDelivered": [
      "High-octane dark-mode e-commerce store with carbon fiber and crimson performance styling",
      "Year-Make-Model (YMM) dynamic search filter covering European sports cars and Gulf 4x4s (Nissan Patrol, Land Cruiser)",
      "Automated dyno tuning and workshop service bay appointment scheduling calendar",
      "Integration with local Qatar payment gateways (QPay / Debit Cards / Apple Pay)",
      "Bilingual English/Arabic user interface with localized currency (QAR)"
    ],
    "techStack": [
      {
        "category": "E-Commerce Platform",
        "technologies": [
          "Shopify Plus",
          "Liquid",
          "Hydrogen / Remix",
          "GraphQL Storefront API"
        ]
      },
      {
        "category": "Search & Fitment",
        "technologies": [
          "Algolia Automotive Search",
          "Custom YMM Database",
          "Inventory Sync Engine"
        ]
      },
      {
        "category": "Payments & Security",
        "technologies": [
          "QPay Gateway",
          "Apple Pay Web",
          "SSL 256-bit Encryption"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Average Order Value",
        "value": "3,400 QAR",
        "description": "High average cart value driven by bundled performance packages"
      },
      {
        "label": "Fitment Accuracy",
        "value": "99.8%",
        "description": "Reduction in incorrect part orders through automated vehicle checking"
      },
      {
        "label": "Mobile Checkout",
        "value": "74%",
        "description": "Share of total orders completed via mobile Apple Pay"
      }
    ],
    "keyFeatures": [
      {
        "title": "Year-Make-Model Fitment Filter",
        "description": "Instant verification ensuring exhaust and suspension parts fit the customer's exact car."
      },
      {
        "title": "Dyno Session Reservation",
        "description": "Book custom ECU remap sessions and horsepower dyno tests directly online."
      },
      {
        "title": "High-Res Parts Gallery",
        "description": "Zoom in on billet aluminum welds, carbon fiber weaves, and titanium downpipes."
      },
      {
        "title": "WhatsApp Order Desk",
        "description": "Direct chat with performance engineers for bespoke horsepower project consultations."
      }
    ],
    "seoKeywords": [
      "Top Performance Qatar",
      "car tuning Doha",
      "exhaust system Qatar",
      "Nissan Patrol performance parts",
      "ECU remap Qatar",
      "dyno tuning Doha"
    ]
  },
  {
    "id": "productboxeswholesale",
    "clientName": "Product Boxes Wholesale",
    "projectTitle": "B2B Custom Packaging SEO Architecture",
    "domain": "productboxeswholesale.com",
    "tagline": "High-volume wholesale packaging SEO restructuring, commercial intent keyword mapping, and technical audits",
    "description": "Comprehensive enterprise SEO overhaul and search architecture for a major US manufacturer of custom printed boxes, retail packaging, and corrugated mailers, driving Top 3 Google rankings across high-value packaging terms.",
    "category": "SEO & Growth",
    "tags": [
      "B2B Packaging",
      "Enterprise SEO",
      "Technical SEO",
      "Keyword Mapping",
      "Custom Packaging",
      "Lead Generation"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #1e293b, #f59e0b)",
    "image": "/portfolio-assets/productboxeswholesale-com-mockup.jpg",
    "desktopImage": "/portfolio-assets/productboxeswholesale-com-desktop.png",
    "mobileImage": "/portfolio-assets/productboxeswholesale-com-mobile.png",
    "websiteUrl": "https://productboxeswholesale.com",
    "year": "2024",
    "aboutClient": "Product Boxes Wholesale is an industrial custom packaging and cardboard manufacturing enterprise serving thousands of e-commerce brands, food producers, cosmetic lines, and pharmaceutical companies across the United States.",
    "challenge": "Despite manufacturing excellence, their website suffered from severe keyword cannibalization across 200+ product categories, broken internal link hierarchies, and duplicate meta descriptions that stalled organic traffic growth.",
    "solution": "Devsynx performed an exhaustive technical SEO audit and site restructuring: grouping packaging products into strategic topic clusters (Mailer Boxes, Rigid Boxes, Display Boxes, CBD Packaging), optimizing schema markup, and implementing an internal link silo architecture.",
    "whatWeDelivered": [
      "Complete technical SEO overhaul resolving 400+ crawl errors, redirect loops, and schema defects",
      "Topic cluster reorganization mapping 250+ packaging products to high-intent commercial keywords",
      "Structured Product, BreadcrumbList, and FAQPage JSON-LD schema across all catalog pages",
      "Comprehensive wholesale quotation funnel optimization reducing form abandonment",
      "Monthly ranking and search console attribution dashboard"
    ],
    "techStack": [
      {
        "category": "SEO & Analytics",
        "technologies": [
          "Ahrefs",
          "Semrush",
          "Screaming Frog SEO Spider",
          "Google Search Console API"
        ]
      },
      {
        "category": "Schema & Structure",
        "technologies": [
          "JSON-LD Schema Markup",
          "Canonical Routing",
          "XML Sitemap Clusters"
        ]
      },
      {
        "category": "Frontend & Speed",
        "technologies": [
          "Core Web Vitals Optimization",
          "Image WebP Compression",
          "Cloudflare CDN"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Organic Traffic Growth",
        "value": "+185%",
        "description": "Increase in monthly organic visitors from commercial buyers searching for bulk packaging"
      },
      {
        "label": "Top 10 Keywords",
        "value": "1,420+",
        "description": "High-commercial intent keywords ranking on Page 1 of Google USA"
      },
      {
        "label": "Wholesale Quotes",
        "value": "320/mo",
        "description": "Verified high-volume packaging quote requests generated organically"
      }
    ],
    "keyFeatures": [
      {
        "title": "Siloed Product Architecture",
        "description": "Strict category hierarchies preventing keyword cannibalization between similar box styles."
      },
      {
        "title": "Instant Die-Line & Quote Request",
        "description": "Streamlined form allowing brand managers to upload artwork and specify exact dimensions."
      },
      {
        "title": "Rich Snippet Schema Engine",
        "description": "Enabled star ratings, price ranges, and bulk minimum order quantities on Google SERP."
      },
      {
        "title": "Fast Mobile B2B Experience",
        "description": "Sub-1.2s page loads ensuring procurement teams can review specs effortlessly on mobile."
      }
    ],
    "seoKeywords": [
      "Product Boxes Wholesale",
      "custom printed boxes wholesale",
      "wholesale mailer boxes",
      "rigid box packaging USA",
      "custom cosmetic packaging",
      "corrugated boxes bulk"
    ]
  },
  {
    "id": "topcustomboxes",
    "clientName": "Top Custom Boxes",
    "projectTitle": "Custom Printed Box Manufacturing SEO Engine",
    "domain": "topcustomboxes.com",
    "tagline": "Enterprise search visibility overhaul, product page hierarchy, schema markup, and backlink audit",
    "description": "Full-scale organic search optimization and product content restructuring for a North American custom box and branded packaging producer, securing dominant visibility for retail, display, and eco-friendly packaging.",
    "category": "SEO & Growth",
    "tags": [
      "Packaging SEO",
      "Technical SEO",
      "SERP Dominance",
      "E-Commerce SEO",
      "Content Siloing",
      "B2B Marketing"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #0f172a, #10b981)",
    "image": "/portfolio-assets/topcustomboxes-com-mockup.jpg",
    "desktopImage": "/portfolio-assets/topcustomboxes-com-desktop.png",
    "mobileImage": "/portfolio-assets/topcustomboxes-com-mobile.png",
    "websiteUrl": "https://topcustomboxes.com",
    "year": "2024",
    "aboutClient": "Top Custom Boxes produces tailor-made printed packaging solutions for Fortune 500 brands and independent retailers, specializing in sustainable kraft materials, holographic finishes, luxury rigid gift boxes, and point-of-sale displays.",
    "challenge": "High Google search volatility and intense competition from venture-backed packaging aggregators threatened their organic search positions. Thin category descriptions and slow image rendering held their pages back from Top 3 SERP rankings.",
    "solution": "Devsynx deployed an aggressive content and technical SEO upgrade: rewriting product copy to target specific B2B buyer search intent, establishing strict siloing, implementing high-speed CDN image optimization, and disavowing toxic legacy backlinks.",
    "whatWeDelivered": [
      "In-depth technical SEO remediation eliminating duplicate content penalties and orphaned pages",
      "Pillar content creation across 60+ primary packaging categories with custom buying guides",
      "High-resolution WebP image compression reducing category page weight by 68%",
      "Granular Organization, AggregateRating, and Offer catalog schema implementation",
      "Backlink audit and Google Search Console disavow cleanup"
    ],
    "techStack": [
      {
        "category": "SEO Platforms",
        "technologies": [
          "Google Search Console",
          "Google Analytics 4",
          "Ahrefs Enterprise",
          "Sitebulb"
        ]
      },
      {
        "category": "Performance Tools",
        "technologies": [
          "Cloudflare Polish",
          "Next-Gen Image Pipeline",
          "HTML Minification"
        ]
      },
      {
        "category": "Content Architecture",
        "technologies": [
          "NLP Keyword Optimization",
          "SurferSEO Integration",
          "Schema.org"
        ]
      }
    ],
    "metrics": [
      {
        "label": "SERP Top 3 Rankings",
        "value": "240+",
        "description": "High-volume packaging terms ranking in top 3 Google positions"
      },
      {
        "label": "Organic Revenue",
        "value": "+160%",
        "description": "Attributed wholesale packaging sales from organic search traffic"
      },
      {
        "label": "Bounce Rate Reduction",
        "value": "-22%",
        "description": "Improved user retention through informative packaging buying guides"
      }
    ],
    "keyFeatures": [
      {
        "title": "Material & Finish Guide",
        "description": "Clear visual guides comparing Kraft, Cardboard, Corrugated, Foil Stamping, and Spot UV."
      },
      {
        "title": "Interactive Dimension Calculator",
        "description": "Allows buyers to input custom length, width, and depth to receive instant box estimates."
      },
      {
        "title": "Eco-Friendly Packaging Focus",
        "description": "Targeted optimization capturing rising search queries for biodegradable and FSC-certified boxes."
      },
      {
        "title": "Automated Sample Request Flow",
        "description": "Frictionless sample kit order flow designed to convert cautious B2B buyers into enterprise accounts."
      }
    ],
    "seoKeywords": [
      "Top Custom Boxes",
      "custom printed packaging",
      "branded retail boxes",
      "custom gift boxes USA",
      "sustainable packaging manufacturer",
      "wholesale packaging supplier"
    ]
  },
  {
    "id": "acutepharmacy",
    "clientName": "Acute Pharmacy US",
    "projectTitle": "Licensed Telehealth & Prescription Delivery SEO",
    "domain": "acutepharmacy.us",
    "tagline": "Compliance-focused healthcare SEO, medical keyword architecture, and digital prescription visibility",
    "description": "Healthcare SEO overhaul and technical visibility architecture for a licensed US digital pharmacy and prescription fulfillment service, complying with HIPAA guidelines, medical search accuracy, and local clinic partnerships.",
    "category": "SEO & Growth",
    "tags": [
      "Healthcare SEO",
      "Telehealth",
      "Pharmacy Compliance",
      "Medical Search",
      "Local SEO",
      "Prescription Delivery"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #042f2e, #0d9488)",
    "image": "/portfolio-assets/acutepharmacy-us-mockup.jpg",
    "desktopImage": "/portfolio-assets/acutepharmacy-us-desktop.png",
    "mobileImage": "/portfolio-assets/acutepharmacy-us-mobile.png",
    "websiteUrl": "https://acutepharmacy.us",
    "year": "2024",
    "aboutClient": "Acute Pharmacy is a licensed, accredited independent digital pharmacy in the United States offering rapid prescription delivery, medication therapy management, chronic condition compounding, and telehealth fulfillment.",
    "challenge": "Google enforces strict 'Your Money Your Life' (YMYL) and E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) quality algorithms on medical websites. The client required a bulletproof SEO strategy that established medical credibility while capturing local and regional prescription transfer searches.",
    "solution": "Devsynx restructured the web platform under strict medical E-E-A-T standards: publishing pharmacist-verified clinical guidance, establishing MedicalWebPage and Pharmacy structured data schemas, creating local delivery radius hubs, and optimizing prescription transfer flows.",
    "whatWeDelivered": [
      "Comprehensive healthcare SEO compliance review and medical author E-E-A-T integration",
      "MedicalEntity and Pharmacy schema markup certifying state licenses and accreditation",
      "Prescription transfer and refill optimization resulting in higher form completion",
      "Local delivery radius landing hubs optimized for suburban and metro service areas",
      "Educational wellness and medication management pillar content library"
    ],
    "techStack": [
      {
        "category": "Healthcare SEO",
        "technologies": [
          "Schema.org MedicalWebPage",
          "E-E-A-T Framework",
          "Google Health Verification"
        ]
      },
      {
        "category": "Compliance & Security",
        "technologies": [
          "HIPAA Compliant Hosting",
          "256-bit TLS Encryption",
          "Strict CSP Headers"
        ]
      },
      {
        "category": "Analytics & Privacy",
        "technologies": [
          "Cookieless Analytics",
          "Google Search Console API",
          "Call Tracking Privacy"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Organic Patient Inflow",
        "value": "+220%",
        "description": "Increase in monthly patient visits searching for prescription transfer and local delivery"
      },
      {
        "label": "Prescription Refills",
        "value": "+145%",
        "description": "Online prescription refill requests initiated through organic search landing pages"
      },
      {
        "label": "Local Map Pack Rank",
        "value": "#1",
        "description": "Top position in local Google Map Pack for service radius"
      }
    ],
    "keyFeatures": [
      {
        "title": "Pharmacist Verified E-E-A-T Content",
        "description": "Every medication page includes credentials, license numbers, and clinical review stamps."
      },
      {
        "title": "Secure Prescription Transfer",
        "description": "Encrypted 2-step prescription transfer tool connecting directly to previous pharmacy records."
      },
      {
        "title": "Insurance & Co-Pay Lookup",
        "description": "Interactive insurance provider search tool assisting patients with coverage transparency."
      },
      {
        "title": "Same-Day Courier Delivery Status",
        "description": "Live zip-code lookup tool confirming same-day courier dispatch availability."
      }
    ],
    "seoKeywords": [
      "Acute Pharmacy",
      "prescription delivery online",
      "transfer prescription US",
      "licensed digital pharmacy",
      "local pharmacy home delivery",
      "compounding pharmacy online"
    ]
  },
  {
    "id": "smart-links-cabling",
    "clientName": "Smart-Links Cabling Solutions",
    "projectTitle": "Enterprise Fiber Optics & Cabling Platform",
    "domain": "smartlinks.ae",
    "tagline": "High-density structured cabling, data center infrastructure, and 3D architectural imagery",
    "description": "Enterprise telecommunications website and photorealistic AI architectural asset showcase for an IT infrastructure contractor specializing in data center structured cabling, fiber optic splicing, and access control systems.",
    "category": "Web Development",
    "tags": [
      "IT Infrastructure",
      "Fiber Optics",
      "Data Center",
      "Structured Cabling",
      "AI Visuals",
      "3D Architecture"
    ],
    "region": "United Arab Emirates",
    "gradient": "linear-gradient(135deg, #082f49, #0284c7)",
    "image": "/portfolio-assets/smart-links-cabling-mockup.jpg",
    "desktopImage": "/portfolio-assets/smart-links-cabling-desktop.png",
    "mobileImage": "/portfolio-assets/smart-links-cabling-mobile.png",
    "websiteUrl": "https://smartlinks.ae",
    "year": "2024",
    "aboutClient": "Smart-Links Cabling Solutions is a premier commercial telecommunications contractor delivering turnkey fiber-optic cabling, data center server rack architectures, distributed antenna systems (DAS), and CCTV surveillance infrastructure across the Middle East.",
    "challenge": "Enterprise cabling projects demand visually spotless demonstrations of server room cable management, rack elevation diagrams, and fiber termination standards. The client lacked on-site high-resolution architectural photography for proprietary data centers under NDA.",
    "solution": "Devsynx developed a futuristic, industrial-grade web platform and generated an exclusive suite of photorealistic AI architectural visuals, server room hero graphics, and 3D schematic renders highlighting clean fiber management and enterprise compliance.",
    "whatWeDelivered": [
      "Corporate web platform engineered with sleek dark-tech industrial aesthetics",
      "Exclusive AI-generated photorealistic visual library of enterprise data center server halls and fiber trays",
      "Interactive service cards detailing Fiber Optics, Structured Cabling, DAS, Access Control, and CCTV",
      "Enterprise RFQ specification tool allowing IT directors to upload building blueprints and project tenders",
      "Case study portfolio covering commercial towers, hospitals, and hyperscale facilities"
    ],
    "techStack": [
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS"
        ]
      },
      {
        "category": "AI Imagery & 3D",
        "technologies": [
          "Midjourney v6",
          "Photorealistic Architectural Rendering",
          "Vector Schematics"
        ]
      },
      {
        "category": "Security & Hosting",
        "technologies": [
          "Cloudflare Enterprise",
          "HSTS Header Security",
          "Vercel Edge"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Enterprise Tenders",
        "value": "$4.5M+",
        "description": "Commercial IT infrastructure project bids submitted via the digital portal"
      },
      {
        "label": "Corporate Engagement",
        "value": "4.2m",
        "description": "Average time spent reviewing service capabilities and architectural specs"
      },
      {
        "label": "Visual Consistency",
        "value": "100%",
        "description": "Seamless visual branding across all data center and infrastructure categories"
      }
    ],
    "keyFeatures": [
      {
        "title": "Data Center Architecture Showcase",
        "description": "Inspect server rack cable management, fiber distribution frames, and hot-aisle containment."
      },
      {
        "title": "Blueprint & RFP Upload Portal",
        "description": "Secure upload tool enabling general contractors to submit CAD drawings for estimation."
      },
      {
        "title": "Telecommunications Standards Compliance",
        "description": "Explicit documentation of TIA/EIA-568, ISO/IEC 11801, and BICSI cabling guidelines."
      },
      {
        "title": "Emergency Fiber Splicing Dispatch",
        "description": "24/7 priority emergency dispatch line integration for critical network cable cuts."
      }
    ],
    "seoKeywords": [
      "Smart-Links Cabling",
      "structured cabling Dubai",
      "fiber optic contractor UAE",
      "data center cabling",
      "server room infrastructure",
      "commercial CCTV installation"
    ]
  },
  {
    "id": "installmentguard",
    "clientName": "InstallmentGuard",
    "projectTitle": "Android MDM & EMI Financial Device Lock System",
    "domain": "installmentguard.com",
    "tagline": "Hardware-level device protection and payment enforcement software for electronics retailers & micro-financiers",
    "description": "Proprietary Mobile Device Management (MDM) platform and remote Knox-level lock system engineered for smartphone leasing companies and electronics retailers offering consumer installment financing.",
    "category": "SaaS & Systems",
    "tags": [
      "Fintech Security",
      "Android MDM",
      "EMI Device Lock",
      "Retail Software",
      "Knox Integration",
      "Hardware Security"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #022c22, #059669)",
    "image": "/portfolio-assets/installmentguard-mockup.jpg",
    "desktopImage": "/portfolio-assets/installmentguard-desktop.png",
    "mobileImage": "/portfolio-assets/installmentguard-mobile.png",
    "websiteUrl": "https://installmentguard.com",
    "year": "2024",
    "aboutClient": "InstallmentGuard is an innovative fintech and device security software developed by Devsynx, empowering smartphone retailers, telecom operators, and micro-finance institutions to sell high-end devices on credit with zero default risk.",
    "challenge": "Electronics retailers lose millions annually when customers default on smartphone installment plans and disappear. Conventional MDM solutions are either easily bypassed by factory resetting the phone or lack automated payment schedule enforcement.",
    "solution": "Devsynx engineered a hardware-enforced Android MDM solution with firmware-level persistence that survives factory resets, flashes reminder notifications on delinquent accounts, and completely locks device functionality if payment milestones are missed.",
    "whatWeDelivered": [
      "Hardware-level Android Device Administrator & Knox integration preventing factory reset bypass",
      "Multi-tenant cloud admin dashboard for electronics retailers to monitor thousands of financed devices",
      "Automated payment gateway webhook syncing with Stripe, local payment switches, and bank transfers",
      "Graduated enforcement engine: warning push notifications, wallpaper swap, and complete screen lock",
      "Offline hardware cryptographic timer that locks device even if mobile data or Wi-Fi is disabled"
    ],
    "techStack": [
      {
        "category": "Mobile OS & Firmware",
        "technologies": [
          "Android SDK (Java/Kotlin)",
          "Samsung Knox SDK",
          "Device Owner API",
          "Custom ROM Provisioning"
        ]
      },
      {
        "category": "Cloud Backend & API",
        "technologies": [
          "Node.js / Express",
          "PostgreSQL",
          "Redis Pub/Sub",
          "FCM (Firebase Cloud Messaging)"
        ]
      },
      {
        "category": "Admin Dashboard",
        "technologies": [
          "React / Next.js",
          "Tailwind CSS",
          "Recharts",
          "Role-Based Access Control (RBAC)"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Default Rate Reduction",
        "value": "-88%",
        "description": "Decrease in non-performing loans and device write-offs across partner retailers"
      },
      {
        "label": "Devices Managed",
        "value": "65,000+",
        "description": "Active smartphones secured and monitored across Latin America, Asia, and Africa"
      },
      {
        "label": "On-Time Payments",
        "value": "94.2%",
        "description": "Installment compliance rate achieved with automated reminder prompts"
      }
    ],
    "keyFeatures": [
      {
        "title": "Factory-Reset Resistant Persistence",
        "description": "Automatically reinstalls and re-engages lock upon device reboot or recovery wipe."
      },
      {
        "title": "Offline Cryptographic Lock Timer",
        "description": "If user turns off airplane mode or removes SIM card, internal cryptographic clock triggers lock."
      },
      {
        "title": "Instant QR Code Retail Onboarding",
        "description": "Sales clerks provision brand-new devices out of the box in under 45 seconds via QR scan."
      },
      {
        "title": "Multi-Tiered Warning Engine",
        "description": "Customizable countdown banners and lock screens providing direct 1-tap payment links."
      }
    ],
    "seoKeywords": [
      "InstallmentGuard",
      "Android EMI lock software",
      "smartphone financing lock",
      "mobile device management retail",
      "phone installment security",
      "Knox device lock"
    ]
  },
  {
    "id": "zeparty",
    "clientName": "ZeParty Live",
    "projectTitle": "Live Audio Streaming & Social Entertainment",
    "domain": "zeparty.live",
    "tagline": "Multi-mic voice rooms, virtual gifting economy, PK battles, and creator monetization engine",
    "description": "High-concurrency mobile social entertainment and interactive live audio streaming application featuring multi-seat voice rooms, real-time gamified gifting, PK battle mechanics, and localized digital payment wallets.",
    "category": "Mobile & Social Apps",
    "tags": [
      "Live Audio",
      "Social App",
      "WebRTC",
      "Creator Economy",
      "Virtual Gifting",
      "Real-Time Gaming"
    ],
    "region": "Southeast Asia / Middle East",
    "gradient": "linear-gradient(135deg, #4c0519, #e11d48)",
    "image": "/portfolio-assets/zeparty-mockup.jpg",
    "desktopImage": "/portfolio-assets/zeparty-desktop.png",
    "mobileImage": "/portfolio-assets/zeparty-mobile.png",
    "websiteUrl": "https://zeparty.live",
    "year": "2024",
    "aboutClient": "ZeParty is a fast-growing mobile social entertainment platform where millions of users across the Middle East and Southeast Asia connect in real-time audio rooms to socialize, participate in voice battles, and reward creators.",
    "challenge": "Delivering sub-200ms latency voice streaming to 10,000+ concurrent listeners per room while processing thousands of high-velocity animated virtual gift transactions during heated live PK battles required enterprise-scale backend concurrency.",
    "solution": "Devsynx engineered the high-concurrency real-time infrastructure utilizing WebRTC audio clustering, distributed Redis state machines, an SVGA animated gifting pipeline, and multi-currency digital wallet integrations.",
    "whatWeDelivered": [
      "Native cross-platform mobile application for iOS and Android built on Flutter",
      "Ultra-low latency (sub-150ms) 9-seat interactive voice room architecture",
      "SVGA and Lottie high-performance 3D gift animation engine with special effects",
      "Real-time PK battle competition engine with dynamic live score progress bars",
      "Creator payout portal with automated revenue split and local bank withdrawal"
    ],
    "techStack": [
      {
        "category": "Mobile App Client",
        "technologies": [
          "Flutter (Dart)",
          "WebRTC Native SDK",
          "SVGA Animation Engine",
          "In-App Purchases"
        ]
      },
      {
        "category": "Real-Time Backend",
        "technologies": [
          "Go (Golang)",
          "WebSockets",
          "Agora RTC Engine",
          "Redis Sentinel"
        ]
      },
      {
        "category": "Data & Billing",
        "technologies": [
          "PostgreSQL",
          "Google Play Billing",
          "Apple StoreKit 2",
          "Stripe Connect"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Concurrent Listeners",
        "value": "45,000+",
        "description": "Peak concurrent live room participants with zero audio degradation"
      },
      {
        "label": "Gift Transactions/Sec",
        "value": "3,200",
        "description": "High-frequency virtual diamond transactions processed during battle finals"
      },
      {
        "label": "Audio Latency",
        "value": "<120ms",
        "description": "Ultra-low interactive speaking latency across global edge servers"
      }
    ],
    "keyFeatures": [
      {
        "title": "Multi-Seat Voice Stages",
        "description": "Host up to 9 active speakers with dynamic volume indicators and background noise suppression."
      },
      {
        "title": "Gamified PK Battle Arena",
        "description": "Two creators battle in a 5-minute showdown where audience gift volume determines the victor."
      },
      {
        "title": "3D Animated Gift Effects",
        "description": "Full-screen luxury sports car, yacht, and dragon animations with spatial sound effects."
      },
      {
        "title": "VIP Badges & Aristocracy System",
        "description": "Exclusive entrance effects, custom chat bubbles, and leaderboard prestige badges."
      }
    ],
    "seoKeywords": [
      "ZeParty",
      "live voice room app",
      "social audio platform",
      "virtual gifting app",
      "PK voice battle",
      "creator monetization app"
    ]
  },
  {
    "id": "devsynx-attendance-hr",
    "clientName": "DEVSYNX HRMS",
    "projectTitle": "Biometric Workforce & Leave Automation",
    "domain": "hrms.devsynx.com",
    "tagline": "Enterprise employee geolocation attendance, shift scheduling, and automated payroll generation",
    "description": "Internal enterprise Human Resource Management System (HRMS) developed by Devsynx, managing attendance check-ins, biometric facial recognition, leave workflows, and automated payroll calculations across multi-office teams.",
    "category": "SaaS & Systems",
    "tags": [
      "HRMS",
      "Biometric Attendance",
      "Payroll Automation",
      "Enterprise Software",
      "Shift Scheduling",
      "Next.js"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #082f49, #0284c7)",
    "image": "/portfolio-assets/devsynx-attendance-hr-mockup.jpg",
    "desktopImage": "/portfolio-assets/devsynx-attendance-hr-desktop.png",
    "mobileImage": "/portfolio-assets/devsynx-attendance-hr-mobile.png",
    "websiteUrl": "https://hrms.devsynx.com",
    "year": "2024",
    "aboutClient": "DEVSYNX HRMS was engineered by Devsynx to solve the operational complexities of managing engineering, creative, marketing, and client-support personnel distributed across multiple physical offices and remote environments.",
    "challenge": "Disjointed spreadsheets, manual timecard audits, and human calculation errors caused friction in monthly payroll processing and made real-time shift adherence tracking nearly impossible across rapid scaling phases.",
    "solution": "Devsynx built a centralized, cloud-native HRMS integrating geofenced mobile check-ins, biometric facial verification, automated overtime calculation, role-based approval pipelines, and single-click payroll generation.",
    "whatWeDelivered": [
      "Comprehensive cloud HRMS portal built with Next.js and secure enterprise authentication",
      "Geofenced mobile check-in app with anti-spoofing facial recognition verification",
      "Visual drag-and-drop shift planner supporting rotating schedules and flexible hours",
      "Automated leave request and approval workflow with Slack and email notifications",
      "Single-click tax-compliant salary slip and direct bank transfer batch generator"
    ],
    "techStack": [
      {
        "category": "Frontend & Portal",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn UI"
        ]
      },
      {
        "category": "Backend & Services",
        "technologies": [
          "Node.js / Express",
          "Prisma ORM",
          "PostgreSQL",
          "Face-API.js"
        ]
      },
      {
        "category": "Integrations",
        "technologies": [
          "Slack Webhooks",
          "AWS S3 Document Vault",
          "SendGrid Email API"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Payroll Processing Time",
        "value": "5 Mins",
        "description": "Reduced monthly payroll calculation time from 4 days to 5 minutes"
      },
      {
        "label": "Buddy Punching",
        "value": "0%",
        "description": "Completely eliminated fraudulent check-ins with facial biometric verification"
      },
      {
        "label": "Employee Satisfaction",
        "value": "98%",
        "description": "Team satisfaction rating with transparent leave balance tracking"
      }
    ],
    "keyFeatures": [
      {
        "title": "Geofenced Mobile Punching",
        "description": "Employees can only clock in when verified within authorized office Wi-Fi and GPS boundaries."
      },
      {
        "title": "Automated Overtime & Deductions",
        "description": "Calculates late arrivals, early leaves, half-days, and weekend bonuses in real time."
      },
      {
        "title": "Digital Employee Profiles",
        "description": "Centralized repository for contracts, CNIC/passports, performance reviews, and asset custody."
      },
      {
        "title": "Direct PDF Payslip Dispatch",
        "description": "Generates password-protected salary slips emailed directly to employees on payday."
      }
    ],
    "seoKeywords": [
      "DEVSYNX HRMS",
      "biometric attendance software",
      "enterprise HR platform",
      "automated payroll system",
      "geofenced check in app",
      "employee management system"
    ]
  },
  {
    "id": "employee-security-crm",
    "clientName": "Enterprise CRM & Security",
    "projectTitle": "Agent Activity Monitoring & Lead Dispatch",
    "domain": "enterprise-crm.devsynx.com",
    "tagline": "Real-time agent activity monitoring, screen audits, role-based encryption, and sales lead dispatch",
    "description": "Unified desktop workforce monitoring suite and enterprise CRM platform built for remote call centers, lead generation firms, and customer success teams with real-time audit logging and lead distribution.",
    "category": "SaaS & Systems",
    "tags": [
      "Enterprise CRM",
      "Agent Monitoring",
      "Security Auditing",
      "Lead Dispatch",
      "Desktop App",
      "Electron"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #1e1b4b, #4338ca)",
    "image": "/portfolio-assets/employee-security-crm-mockup.jpg",
    "desktopImage": "/portfolio-assets/employee-security-crm-desktop.png",
    "mobileImage": "/portfolio-assets/employee-security-crm-mobile.png",
    "websiteUrl": "https://enterprise-crm.devsynx.com",
    "year": "2024",
    "aboutClient": "Developed for high-compliance enterprise sales organizations managing hundreds of remote and on-premise sales agents handling sensitive customer financial and identity information.",
    "challenge": "Client companies faced data leakage risks, unmonitored employee downtime, and slow manual lead allocation that let warm inbound inquiries turn cold before sales agents reached out.",
    "solution": "Devsynx developed a dual-layered system: a lightweight desktop client that monitors active window usage and secure clipboard activity, coupled with a high-velocity cloud CRM that routes leads based on agent performance and availability.",
    "whatWeDelivered": [
      "Cross-platform desktop monitoring agent built with Electron and native OS hooks",
      "High-throughput CRM with real-time WebSocket lead allocation and round-robin rules",
      "Automated screen session capture and idle time detection with privacy blurring",
      "DLP (Data Loss Prevention) module blocking unauthorized copy-pasting of credit cards and SSNs",
      "Executive real-time productivity radar and live sales floor dashboard"
    ],
    "techStack": [
      {
        "category": "Desktop Client",
        "technologies": [
          "Electron",
          "C++ Native Addons",
          "TypeScript",
          "OS Activity Hooks"
        ]
      },
      {
        "category": "Cloud Platform",
        "technologies": [
          "Next.js",
          "Node.js Microservices",
          "PostgreSQL",
          "Kafka Event Stream"
        ]
      },
      {
        "category": "Security & Encryption",
        "technologies": [
          "AES-256 Data Encryption",
          "SOC2 Compliance Architecture",
          "TLS 1.3"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Lead Response Time",
        "value": "12s",
        "description": "Average time from lead submission to agent phone dial via automated dispatch"
      },
      {
        "label": "Productivity Increase",
        "value": "+38%",
        "description": "Measured increase in active productive agent hours across sales teams"
      },
      {
        "label": "Security Incidents",
        "value": "0",
        "description": "Zero data breaches or client information leaks post-implementation"
      }
    ],
    "keyFeatures": [
      {
        "title": "Instant Lead Dispatcher",
        "description": "Algorithmically evaluates agent closing rate, status, and timezone before firing call alerts."
      },
      {
        "title": "Privacy-Preserving Screen Audits",
        "description": "Periodically captures encrypted screenshots with automated blurring of personal data."
      },
      {
        "title": "DLP Clipboard Guard",
        "description": "Prevents bulk exfiltration of customer database rows and phone lists to personal drives."
      },
      {
        "title": "Live Call Center Floor Radar",
        "description": "Managers can see who is on call, who is in wrap-up, and who is idle in real time."
      }
    ],
    "seoKeywords": [
      "Enterprise CRM software",
      "remote employee monitoring",
      "automated lead distribution",
      "sales floor management",
      "call center CRM",
      "DLP security software"
    ]
  },
  {
    "id": "google-review-removal",
    "clientName": "Google Review Dispute",
    "projectTitle": "Reputation Management & GBP Dispute Engine",
    "domain": "reviewremoval.devsynx.com",
    "tagline": "Automated GBP policy violation detection, legal evidence generation, and removal case tracking",
    "description": "Enterprise reputation management and policy violation dispute platform for businesses to audit, report, track, and appeal fake, defamatory, or competitor-generated Google Reviews via Google Business Profile legal APIs.",
    "category": "SaaS & Systems",
    "tags": [
      "Reputation Management",
      "Google Review Removal",
      "GBP API",
      "Legal Automation",
      "Brand Defense",
      "SaaS"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #451a03, #d97706)",
    "image": "/portfolio-assets/google-review-removal-mockup.jpg",
    "desktopImage": "/portfolio-assets/google-review-removal-desktop.png",
    "mobileImage": "/portfolio-assets/google-review-removal-mobile.png",
    "websiteUrl": "https://reviewremoval.devsynx.com",
    "year": "2024",
    "aboutClient": "Built for law firms, medical clinics, hospitality franchises, and home service providers whose revenue is frequently threatened by coordinated 1-star review extortion attacks and disgruntled non-customer smear campaigns.",
    "challenge": "Businesses struggle with Google's cumbersome review reporting process, which routinely rejects generic flags. Successfully removing fake reviews requires matching the comment against specific clauses in Google's Prohibited and Restricted Content policies with legal evidence.",
    "solution": "Devsynx built an automated dispute engineering portal that analyzes negative review text using AI, pinpoints explicit Google policy violations (Conflict of Interest, Harassment, Fake Engagement), and generates formal legal escalation briefs for Google Policy Support.",
    "whatWeDelivered": [
      "AI-powered Google Business Profile review audit tool analyzing sentiment and violation probability",
      "Automated policy violation classifier matching reviews against Google's legal terms",
      "Formal appeal brief generator producing cited case documentation for Google Support",
      "Multi-location tracking dashboard monitoring removal status across hundreds of franchise listings",
      "Proactive review gating and positive customer feedback collection funnel"
    ],
    "techStack": [
      {
        "category": "Cloud Platform",
        "technologies": [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn UI"
        ]
      },
      {
        "category": "APIs & Intelligence",
        "technologies": [
          "Google Business Profile API",
          "OpenAI GPT-4 NLP",
          "Sentiment Analysis Engine"
        ]
      },
      {
        "category": "Database & Queues",
        "technologies": [
          "Supabase PostgreSQL",
          "BullMQ Job Queue",
          "Redis"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Removal Success Rate",
        "value": "78.4%",
        "description": "High success rate for verified policy-violating and fraudulent review removals"
      },
      {
        "label": "Average Star Lift",
        "value": "+0.8",
        "description": "Average Google Business Profile rating increase within 45 days"
      },
      {
        "label": "Disputes Processed",
        "value": "12,500+",
        "description": "Fake and defamatory reviews challenged across retail, medical, and legal clients"
      }
    ],
    "keyFeatures": [
      {
        "title": "Automated Policy Violation Matcher",
        "description": "Detects harassment, hate speech, competitor conflicts, and non-customer fabrications."
      },
      {
        "title": "Legal Evidence Dossier Generator",
        "description": "Compiles transaction logs and proof of non-patronage into PDF appeal packets for Google legal."
      },
      {
        "title": "Multi-Listing Franchise Management",
        "description": "Monitor and defend reputation across 50+ regional branches from a single unified portal."
      },
      {
        "title": "Positive Review Acceleration Funnel",
        "description": "Automated SMS and email triggers encouraging verified happy buyers to leave 5-star reviews."
      }
    ],
    "seoKeywords": [
      "Google review removal software",
      "remove fake Google reviews",
      "GBP reputation management",
      "dispute Google reviews",
      "online brand defense",
      "bad review removal"
    ]
  },
  {
    "id": "whatsapp-business-api",
    "clientName": "WhatsApp Business API",
    "projectTitle": "Multi-Agent Support & Marketing Automation",
    "domain": "whatsapp.devsynx.com",
    "tagline": "Official WhatsApp Cloud API integration with AI chatbot routing, mass broadcast, and CRM webhooks",
    "description": "Enterprise WhatsApp Cloud API messaging suite featuring team shared inboxes, interactive button catalog flows, targeted broadcast campaigns with 98% open rates, and bidirectional CRM synchronization.",
    "category": "SaaS & Systems",
    "tags": [
      "WhatsApp API",
      "Meta Cloud API",
      "Marketing Automation",
      "Support Desk",
      "CRM Webhooks",
      "Chatbot"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #022c22, #10b981)",
    "image": "/portfolio-assets/whatsapp-business-api-mockup.jpg",
    "desktopImage": "/portfolio-assets/whatsapp-business-api-desktop.png",
    "mobileImage": "/portfolio-assets/whatsapp-business-api-mobile.png",
    "websiteUrl": "https://whatsapp.devsynx.com",
    "year": "2024",
    "aboutClient": "Built for e-commerce brands, real estate agencies, healthcare providers, and high-volume sales teams operating across markets where WhatsApp is the primary commercial communication channel.",
    "challenge": "Businesses using standard WhatsApp Business phone apps faced message congestion, could only log in on 4 devices, lacked automated CRM tracking, and faced number bans when attempting bulk marketing broadcasts.",
    "solution": "Devsynx deployed an enterprise-grade messaging architecture built on the official Meta WhatsApp Cloud API: enabling unlimited agent logins, AI chatbot qualification, pre-approved marketing template broadcasts, and automatic contact sync.",
    "whatWeDelivered": [
      "Official Meta WhatsApp Cloud API verification and verified Green Badge compliance assistance",
      "Multi-agent collaborative inbox with private internal notes and agent assignment rules",
      "Interactive button menus, list pickers, and automated product catalog message flows",
      "Targeted broadcast campaign manager with dynamic variable personalization and opt-out filters",
      "Bidirectional webhooks integrating with Shopify, HubSpot, Salesforce, and custom CRMs"
    ],
    "techStack": [
      {
        "category": "Messaging Infrastructure",
        "technologies": [
          "Meta WhatsApp Cloud API",
          "WebSockets",
          "Node.js",
          "Redis Event Bus"
        ]
      },
      {
        "category": "Frontend Inbox",
        "technologies": [
          "React / Next.js",
          "Tailwind CSS",
          "Zustand State",
          "Audio Player"
        ]
      },
      {
        "category": "Integrations",
        "technologies": [
          "Shopify Webhooks",
          "HubSpot API",
          "Zapier Integration",
          "AWS S3 Media"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Broadcast Open Rate",
        "value": "97.6%",
        "description": "Unprecedented open and read rates compared to traditional email campaigns (22%)"
      },
      {
        "label": "First Response Time",
        "value": "<45s",
        "description": "Automated conversational bot answers customer queries instantly 24/7"
      },
      {
        "label": "Cart Recovery Lift",
        "value": "+34%",
        "description": "Abandoned e-commerce checkout recovery via automated WhatsApp discount links"
      }
    ],
    "keyFeatures": [
      {
        "title": "Unlimited Agent Team Inbox",
        "description": "Assign conversations to specific reps with live typing indicators and internal notes."
      },
      {
        "title": "Automated Order Notifications",
        "description": "Trigger instant shipping updates, tracking links, and delivery confirmations via API."
      },
      {
        "title": "Interactive Product Catalogs",
        "description": "Customers browse collections, select variants, and order directly inside WhatsApp chat."
      },
      {
        "title": "Zero-Ban Rate Broadcasts",
        "description": "Official pre-approved Meta message templates protecting your company phone number."
      }
    ],
    "seoKeywords": [
      "WhatsApp Business API platform",
      "WhatsApp multi agent inbox",
      "WhatsApp broadcast software",
      "Shopify WhatsApp automation",
      "Meta Cloud API CRM",
      "WhatsApp chatbot"
    ]
  },
  {
    "id": "google-workspace-security",
    "clientName": "Google Workspace Security",
    "projectTitle": "Zero-Trust Enterprise Cloud Hardening",
    "domain": "security.devsynx.com",
    "tagline": "Context-aware zero trust access policies, SPF/DKIM/DMARC email enforcement, and DLP compliance",
    "description": "Enterprise cloud security implementation and identity hardening service for Google Workspace, protecting corporate data through context-aware device policies, DLP rules, and military-grade email spoof prevention.",
    "category": "SaaS & Systems",
    "tags": [
      "Cybersecurity",
      "Google Workspace",
      "Zero Trust",
      "DMARC/DKIM",
      "DLP Compliance",
      "Identity Access"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #172554, #2563eb)",
    "image": "/portfolio-assets/google-workspace-security-mockup.jpg",
    "desktopImage": "/portfolio-assets/google-workspace-security-desktop.png",
    "mobileImage": "/portfolio-assets/google-workspace-security-mobile.png",
    "websiteUrl": "https://security.devsynx.com",
    "year": "2024",
    "aboutClient": "Developed for mid-market and enterprise organizations facing sophisticated phishing attacks, executive impersonation fraud, and regulatory compliance audits (SOC2, HIPAA, GDPR).",
    "challenge": "Default Google Workspace configurations leave massive security vulnerabilities: lack of enforced DMARC allows attackers to spoof corporate emails, unmanaged personal devices sync confidential Google Drive data, and third-party OAuth app authorizations create silent backdoor access.",
    "solution": "Devsynx executed a 360-degree zero-trust hardening playbook: establishing strict DMARC quarantine/reject rules, configuring Context-Aware device compliance, deploying Data Loss Prevention (DLP) scanners, and revoking high-risk API permissions.",
    "whatWeDelivered": [
      "Complete email authentication overhaul: 100% SPF, DKIM 2048-bit, and DMARC 'p=reject' alignment",
      "Context-Aware Access rules blocking login attempts from unapproved countries, VPNs, and unencrypted devices",
      "Google Drive and Gmail Data Loss Prevention (DLP) rules blocking credit card and source code exfiltration",
      "OAuth app review and automated revocation of unverified third-party permissions",
      "Security health dashboard with automated alerts for compromised user credentials"
    ],
    "techStack": [
      {
        "category": "Cloud Identity & Admin",
        "technologies": [
          "Google Workspace Enterprise Admin",
          "Google Cloud Identity",
          "SAML 2.0 / SSO"
        ]
      },
      {
        "category": "Email Security Protocols",
        "technologies": [
          "DMARC p=reject",
          "DKIM 2048-bit",
          "SPF Hardfail",
          "BIMI Verification"
        ]
      },
      {
        "category": "Compliance & Audit",
        "technologies": [
          "Google Drive DLP",
          "Audit Investigation Tool",
          "SOC2 Type II Controls"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Phishing & Spoofing",
        "value": "0%",
        "description": "Complete elimination of executive email impersonation and spoofed domains"
      },
      {
        "label": "Email Deliverability",
        "value": "99.8%",
        "description": "Inbox placement rate achieved across Outlook and Gmail servers due to DMARC alignment"
      },
      {
        "label": "Audit Compliance",
        "value": "100%",
        "description": "Full compliance achieved for SOC2, HIPAA, and ISO 27001 data protection requirements"
      }
    ],
    "keyFeatures": [
      {
        "title": "DMARC 'p=reject' Enforcement",
        "description": "Any unauthorized server attempting to send email as your corporate domain is instantly blocked."
      },
      {
        "title": "Context-Aware Device Gatekeeper",
        "description": "Employees can only access company files on company-encrypted laptops with active OS updates."
      },
      {
        "title": "Automated DLP Scanners",
        "description": "Instantly blocks files containing tax numbers, customer passwords, or financial sheets from public sharing."
      },
      {
        "title": "OAuth Shadow IT Audit",
        "description": "Scans and disconnects rogue browser extensions and apps requesting read permissions to company Gmail."
      }
    ],
    "seoKeywords": [
      "Google Workspace security audit",
      "DMARC enforcement service",
      "enterprise cloud identity",
      "Google Drive DLP",
      "zero trust email security",
      "Google Workspace hardening"
    ]
  },
  {
    "id": "ai-calling-agent",
    "clientName": "Devsynx AI Voice Agent",
    "projectTitle": "Conversational AI Telephony & Booking",
    "domain": "voice.devsynx.com",
    "tagline": "Sub-500ms voice AI assistant for cold qualification, objection handling, and real-time CRM calendar sync",
    "description": "Autonomous voice artificial intelligence telephony platform engineered for high-volume inbound customer service and outbound sales qualification, engaging in human-like natural conversations and booking appointments directly into CRM calendars.",
    "category": "AI & Automation",
    "tags": [
      "AI Voice Agent",
      "Conversational AI",
      "Telephony",
      "Voice Synthesis",
      "CRM Calendar",
      "Appointment Booking"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #2e1065, #7c3aed)",
    "image": "/portfolio-assets/ai-calling-agent-mockup.jpg",
    "desktopImage": "/portfolio-assets/ai-calling-agent-desktop.png",
    "mobileImage": "/portfolio-assets/ai-calling-agent-mobile.png",
    "websiteUrl": "https://voice.devsynx.com",
    "year": "2024",
    "aboutClient": "Developed for real estate brokerages, HVAC and roofing contractors, insurance agencies, and digital marketing firms requiring 24/7 immediate phone response for inbound inquiries and automated cold lead reactivation.",
    "challenge": "Human call centers are expensive, require training, suffer high turnover, and cannot answer dozens of simultaneous phone calls at 2 AM. Previous automated phone IVRs were clunky, robotic, and drove prospective customers away.",
    "solution": "Devsynx architected an ultra-low latency voice AI pipeline combining real-time streaming speech-to-text, custom fine-tuned LLM conversational logic with natural interruptions, neural voice synthesis with authentic breathing pauses, and instant calendar booking tools.",
    "whatWeDelivered": [
      "Ultra-low latency telephony pipeline achieving sub-500ms conversational turn-taking",
      "Custom objection-handling prompt architecture trained on thousands of successful sales calls",
      "Seamless live call transfer to human managers when high-intent buying signals are triggered",
      "Direct calendar booking integration with Google Calendar, Outlook, and GoHighLevel",
      "Automated call recording, transcription, sentiment score, and CRM contact updating"
    ],
    "techStack": [
      {
        "category": "Voice & Telephony",
        "technologies": [
          "Twilio Voice API / SIP Trunking",
          "Deepgram Nova-2 STT",
          "ElevenLabs Voice AI",
          "Vapi Core"
        ]
      },
      {
        "category": "Reasoning & LLM",
        "technologies": [
          "Anthropic Claude 3.5 Sonnet",
          "Custom RAG Memory",
          "Streaming Function Calling"
        ]
      },
      {
        "category": "Integrations",
        "technologies": [
          "GoHighLevel CRM",
          "HubSpot API",
          "Zapier Webhooks",
          "AWS Serverless"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Conversational Latency",
        "value": "420ms",
        "description": "Near-instantaneous response time indistinguishable from a live human operator"
      },
      {
        "label": "Appointment Booking Rate",
        "value": "24.6%",
        "description": "Conversion rate achieved on inbound web lead phone callbacks within 60 seconds"
      },
      {
        "label": "Cost Reduction",
        "value": "-72%",
        "description": "Decrease in customer acquisition and qualification cost compared to offshore call centers"
      }
    ],
    "keyFeatures": [
      {
        "title": "Sub-500ms Natural Interruption",
        "description": "If the prospect speaks mid-sentence, the AI immediately stops talking and listens just like a human."
      },
      {
        "title": "Dynamic Information Retrieval",
        "description": "Answers complex pricing, service areas, and availability questions accurately using live RAG databases."
      },
      {
        "title": "Instant Live Warm Transfer",
        "description": "Connects hot buyers directly to senior sales reps with a 5-second whisper summary before bridge."
      },
      {
        "title": "Multi-Dialer Parallel Scaling",
        "description": "Capable of dialing 500 simultaneous leads within seconds of a marketing campaign launch."
      }
    ],
    "seoKeywords": [
      "AI voice calling agent",
      "conversational AI phone system",
      "automated appointment booking phone",
      "outbound AI sales caller",
      "Twilio ElevenLabs integration",
      "AI voice receptionist"
    ]
  },
  {
    "id": "ai-video-production",
    "clientName": "AI Video Production",
    "projectTitle": "Generative UGC & Viral Video Studio",
    "domain": "video.devsynx.com",
    "tagline": "Scalable AI video creation for TikTok, Meta Ads, and Reels using generative diffusion and neural voice cloning",
    "description": "Next-generation generative AI video production workflow and automated content studio for e-commerce brands, creating viral TikTok ads, user-generated style product reviews, and high-CTR social video creatives at scale.",
    "category": "AI & Automation",
    "tags": [
      "AI Video Production",
      "Generative AI",
      "Higgsfield",
      "Midjourney",
      "TikTok Ads",
      "UGC Creative"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #4c0519, #e11d48)",
    "image": "/portfolio-assets/ai-video-production-mockup.jpg",
    "desktopImage": "/portfolio-assets/ai-video-production-desktop.png",
    "mobileImage": "/portfolio-assets/ai-video-production-mobile.png",
    "websiteUrl": "https://video.devsynx.com",
    "year": "2024",
    "aboutClient": "Built for fast-scaling DTC e-commerce brands, dropshipping powerhouses, and media agencies spending $50k+/month on TikTok and Meta Ads that require fresh creative variations every week to prevent ad fatigue.",
    "challenge": "Hiring actors, renting studio spaces, and manually editing TikTok video ads costs thousands of dollars and takes weeks per deliverable. When ad platforms fatigue creatives in 7 days, brands cannot produce content fast enough to maintain profitable ROAS.",
    "solution": "Devsynx pioneered a fully automated generative AI video pipeline: utilizing tools like Higgsfield, Midjourney, and Runway combined with neural voice synthesis, automated kinetic captioning, and viral hook formulas to deliver 30+ ad variations weekly at 90% lower cost.",
    "whatWeDelivered": [
      "End-to-end generative AI video production pipeline for vertical 9:16 social ad platforms",
      "Custom realistic AI avatar generation mimicking everyday consumer review styles",
      "Multi-lingual neural voiceover synthesis with natural emotional inflection and slang",
      "Automated animated kinetic subtitle styling proven to maximize silent-scroller retention",
      "Performance variation engine generating 10 hook variations and 3 CTA angles per product"
    ],
    "techStack": [
      {
        "category": "Generative Video & Visuals",
        "technologies": [
          "Higgsfield AI",
          "Midjourney v6",
          "Runway Gen-2",
          "Stable Video Diffusion"
        ]
      },
      {
        "category": "Voice & Audio",
        "technologies": [
          "ElevenLabs Voice Cloning",
          "Audio Ducking",
          "Copyright-Cleared Music Libraries"
        ]
      },
      {
        "category": "Editing Automation",
        "technologies": [
          "CapCut API",
          "FFmpeg Automated Assembly",
          "Whisper Subtitles",
          "Python Video Engine"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Production Cost Reduction",
        "value": "-85%",
        "description": "Cost per tested video ad dropped from $350 to $35 compared to live actor studios"
      },
      {
        "label": "Average Hook Rate",
        "value": "42%",
        "description": "3-second view rate achieved across Meta and TikTok paid campaigns"
      },
      {
        "label": "Delivery Speed",
        "value": "24 Hours",
        "description": "Complete turnaround of 15 ad creatives ready to launch into paid ad accounts"
      }
    ],
    "keyFeatures": [
      {
        "title": "Realistic UGC Avatars",
        "description": "AI-generated personas testing skincare, apparel, and gadgets with natural facial expressions."
      },
      {
        "title": "Multi-Hook Split Testing",
        "description": "Generates 5 distinct emotional opening hooks for every video to discover winner variations rapidly."
      },
      {
        "title": "Instant Global Localization",
        "description": "Translate and lip-sync successful English video ads into Spanish, German, French, and Arabic."
      },
      {
        "title": "Kinetic Captioning Engine",
        "description": "High-visibility color-changing text overlays styled specifically for Gen Z attention spans."
      }
    ],
    "seoKeywords": [
      "AI video ad production",
      "generative AI UGC ads",
      "TikTok video ads generator",
      "e-commerce video creation AI",
      "Higgsfield video production",
      "viral video ads studio"
    ]
  },
  {
    "id": "motion-graphic-explainers",
    "clientName": "Motion Graphics Studio",
    "projectTitle": "3D SaaS Explainer & Kinetic Animation",
    "domain": "motion.devsynx.com",
    "tagline": "High-production 3D isometric animation and kinetic product demos for venture-backed SaaS brands",
    "description": "High-end 2D/3D motion graphics studio delivering photorealistic isometric SaaS walkthroughs, product launch films, animated branding identities, and cinematic visual assets for top-tier software companies.",
    "category": "AI & Automation",
    "tags": [
      "Motion Graphics",
      "3D Animation",
      "SaaS Explainer",
      "Isometric Design",
      "Product Video",
      "After Effects"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #3b0764, #9333ea)",
    "image": "/portfolio-assets/motion-graphic-explainers-mockup.jpg",
    "desktopImage": "/portfolio-assets/motion-graphic-explainers-desktop.png",
    "mobileImage": "/portfolio-assets/motion-graphic-explainers-mobile.png",
    "websiteUrl": "https://motion.devsynx.com",
    "year": "2024",
    "aboutClient": "Devsynx Motion Studio creates cinematic visual explainers for Series A/B SaaS startups, fintech platforms, Web3 protocols, and enterprise platforms seeking to explain complex architectures in under 90 seconds.",
    "challenge": "Abstract technical products (cloud databases, cybersecurity tools, fintech APIs) are notoriously hard to explain through static screenshots. Tech founders needed captivating, high-framerate motion graphics that make complex workflows feel effortless.",
    "solution": "Devsynx crafted bespoke 60-to-90 second isometric 3D animated films: translating complex code and data flows into sleek glowing floating UI cards, clean kinetic typography, and synchronized sound design that elevates perceived brand value.",
    "whatWeDelivered": [
      "Complete scriptwriting, storyboard conceptualization, and visual moodboards",
      "Bespoke 3D isometric product modeling representing cloud nodes, databases, and UI dashboards",
      "Cinema 4D and After Effects animation rendered in 4K 60fps with silky smooth motion curves",
      "Professional studio voiceover casting and custom spatial sound design (foley and synth risers)",
      "Modular animated snippets optimized for website heroes, pitch decks, and social media"
    ],
    "techStack": [
      {
        "category": "3D & Rendering",
        "technologies": [
          "Cinema 4D",
          "Redshift GPU Renderer",
          "Blender 3D",
          "Octane"
        ]
      },
      {
        "category": "Compositing & Motion",
        "technologies": [
          "Adobe After Effects",
          "Caviar Motion",
          "Duik Bassel",
          "Illustrator"
        ]
      },
      {
        "category": "Audio Engineering",
        "technologies": [
          "Pro Tools",
          "Spatial Sound Design",
          "Bespoke Foley & Transitions"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Landing Page Conversion Lift",
        "value": "+48%",
        "description": "Average increase in demo requests after placing explainer video above the fold"
      },
      {
        "label": "Investor Deck Engagement",
        "value": "100%",
        "description": "Featured in multiple successful venture capital seed and Series A fundraising decks"
      },
      {
        "label": "Production Standard",
        "value": "4K 60fps",
        "description": "Crystal-clear rendering quality optimized for Retina displays and presentation projectors"
      }
    ],
    "keyFeatures": [
      {
        "title": "Abstract-to-Simple Storytelling",
        "description": "Translates complex API integrations and distributed server logic into clear visual metaphors."
      },
      {
        "title": "Floating Glassmorphism UIs",
        "description": "Elevates software dashboard screenshots into stylized 3D layers with realistic lighting and reflections."
      },
      {
        "title": "Custom Sound Design & Foley",
        "description": "Every UI click, swoosh, and laser transition is paired with tactile, high-definition audio cues."
      },
      {
        "title": "Web-Ready Lottie & MP4 Exports",
        "description": "Lightweight animated loops that drop directly into Webflow, Framer, and Next.js sites."
      }
    ],
    "seoKeywords": [
      "SaaS explainer video production",
      "3D motion graphics studio",
      "isometric animated video",
      "product demo video agency",
      "software launch video",
      "tech animated commercial"
    ]
  },
  {
    "id": "scale-with-ads",
    "clientName": "Scale With Ads",
    "projectTitle": "Performance Marketing & Client Acquisition Engine",
    "domain": "scalewithads.us",
    "tagline": "High-converting landing architecture, VSL integration, and paid ad acquisition infrastructure",
    "description": "High-converting done-for-you client acquisition agency website engineered with a clean high-contrast layout, bold proof headline, video sales letter, and frictionless strategy call application flow.",
    "category": "Web Development",
    "tags": [
      "Performance Marketing",
      "Paid Ads",
      "Client Acquisition",
      "Next.js",
      "VSL Funnel",
      "Lead Generation"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #09090b, #2563eb)",
    "image": "/portfolio-assets/scale-with-ads-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/scale-with-ads-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/scale-with-ads-pdf-mobile.png",
    "websiteUrl": "https://scalewithads.us",
    "year": "2024",
    "aboutClient": "Scale With Ads is a specialized paid advertising consultancy managing seven-figure ad budgets on Meta, Google, and YouTube for high-ticket service companies and B2B SaaS products.",
    "challenge": "The client needed a minimalist, high-trust landing page with zero visual distraction that immediately established authority, displayed verified ROAS case studies, and drove qualified calendar bookings without bounce.",
    "solution": "Devsynx designed an editorial, high-contrast acquisition page featuring a bold promise headline, embedded Wistia video sales letter, proof milestone grid, and a multi-step pre-qualifying application form.",
    "whatWeDelivered": [
      "Ultra-clean, high-speed single page marketing site engineered on Next.js 14",
      "Zero-latency Video Sales Letter player with dynamic engagement tracking",
      "Verified ad spend and ROAS milestone showcase with client screenshots",
      "Interactive calendar booking form with qualifying revenue threshold filters",
      "Direct webhook sync into agency Slack and CRM automation channels"
    ],
    "techStack": [
      {
        "category": "Frontend Engine",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS"
        ]
      },
      {
        "category": "Video & Media",
        "technologies": [
          "Wistia Player API",
          "SVG Badges",
          "Custom Layout Engine"
        ]
      },
      {
        "category": "Integrations",
        "technologies": [
          "Calendly API",
          "Slack Incoming Webhooks",
          "Zapier Integration"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Consultation Booking Rate",
        "value": "14.2%",
        "description": "High percentage of cold ad visitors completing strategy call applications"
      },
      {
        "label": "Average Ad ROAS",
        "value": "4.8x",
        "description": "Client average return on ad spend across agency-managed campaigns"
      },
      {
        "label": "Load Time",
        "value": "0.7s",
        "description": "Instantaneous mobile page speed score"
      }
    ],
    "keyFeatures": [
      {
        "title": "Single-Objective Layout",
        "description": "Eliminates all distracting navigation links to keep visitor focus 100% on the core offer."
      },
      {
        "title": "Pre-Qualifying Application",
        "description": "Filters out underfunded leads before granting access to executive calendar slots."
      },
      {
        "title": "Social Proof Guarantee Banner",
        "description": "Showcases verified ad account screenshots and client revenue milestones."
      },
      {
        "title": "Mobile-Optimized Fast Checkout",
        "description": "Flawless rendering and button touch targets across all iPhone and Android screen sizes."
      }
    ],
    "seoKeywords": [
      "Scale With Ads",
      "paid advertising agency",
      "client acquisition funnel",
      "Meta ads agency B2B",
      "Google ads performance marketing",
      "high ticket ad agency"
    ]
  },
  {
    "id": "vaishali-media-productions",
    "clientName": "Vaishali Media Productions LLC",
    "projectTitle": "Personal Brand Growth & Media Agency Platform",
    "domain": "vaishalimediaproductionsllc.com",
    "tagline": "Editorial magazine-style personal brand platform showcasing client wins, media assets, and sales funnels",
    "description": "Luxury editorial brand platform and growth systems agency website led by a prominent founder brand, featuring high-fashion editorial aesthetics, client media showcases, and comprehensive growth architecture.",
    "category": "Web Development",
    "tags": [
      "Personal Brand",
      "Media Agency",
      "Editorial Design",
      "Next.js",
      "Content Strategy",
      "Growth Systems"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #18181b, #d97706)",
    "image": "/portfolio-assets/vaishali-media-productions-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/vaishali-media-productions-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/vaishali-media-productions-pdf-mobile.png",
    "websiteUrl": "https://www.vaishalimediaproductionsllc.com",
    "year": "2024",
    "aboutClient": "Vaishali Media Productions LLC is an elite media production and personal branding agency helping top executives, venture founders, and high-profile authors build multi-million-follower media empires.",
    "challenge": "Balancing high-end luxury editorial aesthetics with aggressive direct-response client conversion principles required a sophisticated, bespoke visual identity that looked like Vogue while converting like an agency.",
    "solution": "Devsynx crafted a magazine-inspired web experience with elegant serif headings, warm amber accent glows, full-screen portfolio photography, client case study carousels, and VIP consulting inquiry flows.",
    "whatWeDelivered": [
      "Editorial luxury agency website designed in Next.js with rich typography and micro-interactions",
      "Portfolio grid featuring celebrity client media interviews, video productions, and magazine features",
      "Comprehensive breakdown of the 4 core pillars: Media Systems, Content Production, PR, and Funnels",
      "Interactive client video interview player with custom branded controls",
      "Private VIP executive onboarding consultation scheduler"
    ],
    "techStack": [
      {
        "category": "Frontend Design",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Playfair Display"
        ]
      },
      {
        "category": "Animation & Media",
        "technologies": [
          "Framer Motion",
          "Vimeo API",
          "Cloudinary Image Delivery"
        ]
      },
      {
        "category": "Cloud & Hosting",
        "technologies": [
          "Vercel Edge Network",
          "Cloudflare DNS",
          "SSL 256-bit"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Media Placements",
        "value": "250+",
        "description": "National TV, podcast, and magazine features secured for agency clients"
      },
      {
        "label": "Founder Audience Scaled",
        "value": "15M+",
        "description": "Combined social media follower reach generated across personal brand rosters"
      },
      {
        "label": "VIP Inquiries",
        "value": "+180%",
        "description": "High-net-worth client consultation requests generated through new web presence"
      }
    ],
    "keyFeatures": [
      {
        "title": "Magazine-Grade Editorial Design",
        "description": "Curated typography pairings and high-contrast spacing creating an aura of prestigious authority."
      },
      {
        "title": "Client Press & Media Reel",
        "description": "Interactive showcase highlighting Forbes, TEDx, and podcast appearances."
      },
      {
        "title": "Service Pillar Matrix",
        "description": "Detailed visual breakdown of Done-For-You Content, Executive Ghostwriting, and Media PR."
      },
      {
        "title": "VIP Client Portal Link",
        "description": "Direct private client access to active media deliverables, raw footage, and approval queues."
      }
    ],
    "seoKeywords": [
      "Vaishali Media Productions",
      "personal branding agency",
      "executive PR agency",
      "founder media production",
      "high ticket personal brand",
      "celebrity media agency"
    ]
  },
  {
    "id": "alpha-ahead-llc",
    "clientName": "Alpha Ahead LLC",
    "projectTitle": "US Corporate Strategy & Management Consulting",
    "domain": "alphaaheadllc.com",
    "tagline": "Corporate business solutions portal featuring interactive consulting service matrix and calendar booking",
    "description": "Corporate business strategy and digital transformation advisory platform built for a premier US consulting firm, featuring enterprise capability matrices, client success studies, and strategic advisory booking.",
    "category": "Web Development",
    "tags": [
      "Corporate Consulting",
      "Business Strategy",
      "Enterprise Advisory",
      "Next.js",
      "Management Consulting",
      "B2B"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #0f172a, #3b82f6)",
    "image": "/portfolio-assets/alpha-ahead-llc-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/alpha-ahead-llc-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/alpha-ahead-llc-pdf-mobile.png",
    "websiteUrl": "https://alphaaheadllc.com",
    "year": "2024",
    "aboutClient": "Alpha Ahead LLC provides strategic management consulting, operational scaling, and digital capability expansion for growth-stage American companies and multinational business divisions.",
    "challenge": "Corporate enterprise buyers require proof of institutional rigor, cybersecurity compliance, and clear methodologies. Their previous web presence lacked modern authority and clear service differentiation.",
    "solution": "Devsynx engineered a prestigious corporate digital presence featuring an executive leadership showcase, structured consulting service matrices, enterprise case studies, and a secure corporate consultation workflow.",
    "whatWeDelivered": [
      "Executive corporate web platform engineered in Next.js with modern business aesthetics",
      "Interactive consulting practice areas: Corporate Restructuring, Digital Strategy, and Financial Advisory",
      "Executive team bios and advisory board credential highlights",
      "Enterprise consultation request portal with automated calendar syncing and NDA delivery",
      "SEO architecture targeting corporate management and transformation search queries"
    ],
    "techStack": [
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS"
        ]
      },
      {
        "category": "Security & Architecture",
        "technologies": [
          "Cloudflare Zero Trust",
          "HSTS",
          "SSL 256-bit",
          "Vercel Edge"
        ]
      },
      {
        "category": "Forms & Automation",
        "technologies": [
          "HubSpot CRM API",
          "Calendly Enterprise",
          "SendGrid"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Enterprise Bids",
        "value": "$8.2M+",
        "description": "Value of corporate advisory engagements initiated through digital consultation requests"
      },
      {
        "label": "Corporate Inquiries",
        "value": "+140%",
        "description": "Increase in verified C-suite inquiry volume within first quarter"
      },
      {
        "label": "Page Speed Score",
        "value": "99/100",
        "description": "Optimal Core Web Vitals rating across all corporate office networks"
      }
    ],
    "keyFeatures": [
      {
        "title": "Strategic Capability Matrix",
        "description": "Interactive visual breakdown of consulting methodologies and operational transformation frameworks."
      },
      {
        "title": "Executive Client Case Studies",
        "description": "Detailed analyses of revenue turnaround and organizational efficiency improvements."
      },
      {
        "title": "Confidential Consultation Request",
        "description": "Secure form with automated mutual Non-Disclosure Agreement (NDA) generation."
      },
      {
        "title": "Multi-Office Contact Hub",
        "description": "Direct communication routing to specific practice leaders and regional offices."
      }
    ],
    "seoKeywords": [
      "Alpha Ahead LLC",
      "corporate management consulting",
      "business strategy advisory US",
      "digital transformation consulting",
      "enterprise turnaround advisory",
      "executive business solutions"
    ]
  },
  {
    "id": "alpha-ahead-real-estate",
    "clientName": "Alpha Ahead Real Estate",
    "projectTitle": "Dubai Luxury Real Estate Brokerage",
    "domain": "alphaahead.estate",
    "tagline": "High-aesthetic property search and private investor portfolio platform in the Dubai luxury market",
    "description": "Ultra-luxury real estate brokerage and private property investment portal in Dubai, showcasing waterfront penthouses, Palm Jumeirah villas, off-plan developer projects, and golden visa advisory.",
    "category": "Web Development",
    "tags": [
      "Luxury Real Estate",
      "Dubai Property",
      "Off-Plan Investment",
      "Next.js",
      "Golden Visa",
      "High-End Listings"
    ],
    "region": "United Arab Emirates",
    "gradient": "linear-gradient(135deg, #1c1917, #d97706)",
    "image": "/portfolio-assets/alpha-ahead-real-estate-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/alpha-ahead-real-estate-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/alpha-ahead-real-estate-pdf-mobile.png",
    "websiteUrl": "https://alphaahead.estate",
    "year": "2024",
    "aboutClient": "Alpha Ahead Real Estate is a boutique luxury real estate advisory in Dubai specializing in prime and super-prime residential properties across Palm Jumeirah, Downtown Dubai, Dubai Hills Estate, and Emirates Hills.",
    "challenge": "Dubai real estate clients represent high-net-worth international investors who expect immersive architectural photography, clear ROI yield calculations, and instant WhatsApp concierge support without clunky portal search forms.",
    "solution": "Devsynx designed a breathtaking visual property portal with full-bleed architectural galleries, off-plan project investment calculators, interactive community guides, and instant VIP WhatsApp private broker routing.",
    "whatWeDelivered": [
      "Luxury real estate digital portal designed with dark obsidian backgrounds and warm gold accents",
      "High-resolution property gallery showcase featuring full-bleed photography and 4K video tours",
      "Off-plan investment calculator estimating rental yields, capital appreciation, and payment plans",
      "Dedicated Dubai Golden Visa investment threshold guidance and advisory landing pages",
      "One-click WhatsApp VIP broker connection with pre-populated property reference codes"
    ],
    "techStack": [
      {
        "category": "Frontend Platform",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion"
        ]
      },
      {
        "category": "Media & Visuals",
        "technologies": [
          "Cloudinary Media Optimization",
          "WebP/AVIF Pipeline",
          "4K Video Streaming"
        ]
      },
      {
        "category": "Integrations",
        "technologies": [
          "WhatsApp Cloud API",
          "HubSpot Real Estate CRM",
          "Currency Switcher Engine"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Property Inquiries",
        "value": "$65M+",
        "description": "Total value of buyer and investor inquiries generated for prime Dubai developments"
      },
      {
        "label": "Average Listing View Time",
        "value": "4.5m",
        "description": "High engagement duration exploring architectural floor plans and amenities"
      },
      {
        "label": "International Lead Share",
        "value": "68%",
        "description": "Inquiries from UK, European, and GCC high-net-worth property investors"
      }
    ],
    "keyFeatures": [
      {
        "title": "Full-Bleed Architectural Visuals",
        "description": "Immersive full-screen property photo galleries and video walkthroughs of luxury villas."
      },
      {
        "title": "Off-Plan Developer Launchpad",
        "description": "Direct access to pre-launch allocations from Emaar, Nakheel, Sobha, and Meraas."
      },
      {
        "title": "Rental Yield & Payment Calculator",
        "description": "Calculate quarterly construction milestones and projected short-term rental ROI."
      },
      {
        "title": "Neighborhood Lifestyle Guides",
        "description": "Curated community overviews detailing schools, marinas, golf courses, and metro access."
      }
    ],
    "seoKeywords": [
      "Alpha Ahead Real Estate",
      "luxury property Dubai",
      "Palm Jumeirah villas for sale",
      "Dubai off plan investment",
      "Dubai Golden Visa real estate",
      "Downtown Dubai penthouses"
    ]
  },
  {
    "id": "zingo-assist",
    "clientName": "Zingo Assist",
    "projectTitle": "US Virtual Assistant Staffing Agency",
    "domain": "zingoassist.us",
    "tagline": "Modern, illustrated VA service marketplace offering managed remote talent for North American businesses",
    "description": "Friendly, modern virtual assistant agency website and talent matching platform connecting busy entrepreneurs, real estate agents, and medical practices with vetted full-time remote professionals.",
    "category": "Web Development",
    "tags": [
      "Virtual Assistants",
      "Remote Staffing",
      "B2B Marketplace",
      "Next.js",
      "Talent Matching",
      "Booking Funnel"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #042f2e, #0d9488)",
    "image": "/portfolio-assets/zingo-assist-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/zingo-assist-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/zingo-assist-pdf-mobile.png",
    "websiteUrl": "https://zingoassist.us",
    "year": "2024",
    "aboutClient": "Zingo Assist is a premier US remote staffing agency providing pre-vetted, English-fluent virtual assistants specializing in administrative tasks, real estate cold calling, customer support, and medical billing.",
    "challenge": "Businesses are frequently skeptical of overseas virtual assistants due to communication hurdles, time zone differences, and lack of accountability. Zingo Assist needed a warm, highly trustworthy web presence that alleviated customer doubts.",
    "solution": "Devsynx developed an inviting, modern web platform featuring custom illustrations, transparent pricing tier calculators, video introduction reels of top VAs, trust badges, and an automated free consultation booking funnel.",
    "whatWeDelivered": [
      "Approachable, illustrated agency website engineered in Next.js with cheerful modern styling",
      "Transparent pricing calculator comparing full-time vs part-time cost savings against US in-house hires",
      "Video profile showcase allowing business owners to hear prospective VAs speak before booking",
      "Automated discovery call scheduling funnel with qualification questionnaire",
      "Client onboarding portal with billing automation and weekly task tracker templates"
    ],
    "techStack": [
      {
        "category": "Frontend Engine",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS"
        ]
      },
      {
        "category": "Design & Visuals",
        "technologies": [
          "Custom Vector Illustrations",
          "Lottie Micro-Animations",
          "Vimeo API"
        ]
      },
      {
        "category": "Workflow & Booking",
        "technologies": [
          "Calendly API",
          "Stripe Subscription Billing",
          "Zapier Webhooks"
        ]
      }
    ],
    "metrics": [
      {
        "label": "VA Placements",
        "value": "450+",
        "description": "Full-time remote assistants successfully placed with US and Canadian businesses"
      },
      {
        "label": "Client Cost Savings",
        "value": "70%",
        "description": "Average labor cost savings achieved by clients compared to local US staffing"
      },
      {
        "label": "Trial Booking Rate",
        "value": "19.5%",
        "description": "High conversion on free 1-week virtual assistant trial discovery calls"
      }
    ],
    "keyFeatures": [
      {
        "title": "Role-Specific VA Matching",
        "description": "Pre-configured skill profiles for Real Estate, E-Commerce, Medical Office, and Executive Support."
      },
      {
        "title": "Interactive Cost Savings Calculator",
        "description": "Slider tool calculating exact annual payroll savings compared to standard US salaries."
      },
      {
        "title": "Video Candidate Introductions",
        "description": "Watch 60-second video introductions showcasing English pronunciation, skills, and energy."
      },
      {
        "title": "100% Replacement Guarantee Badge",
        "description": "Clear risk-reversal messaging providing peace of mind for first-time remote staffing employers."
      }
    ],
    "seoKeywords": [
      "Zingo Assist",
      "virtual assistant agency US",
      "hire remote assistant",
      "real estate cold caller VA",
      "medical virtual assistant",
      "executive assistant outsourcing"
    ]
  },
  {
    "id": "entiix",
    "clientName": "Entiix",
    "projectTitle": "Meta Ads Intelligence & Attribution SaaS",
    "domain": "entiix.com",
    "tagline": "Real-time ROAS intelligence, creative performance monitoring, and automated media-buyer alert dashboard",
    "description": "SaaS analytics landing and ad intelligence platform engineered for performance media buyers, providing real-time Meta and Google Ads conversion tracking, creative fatigue alerts, and subscription dashboard access.",
    "category": "SaaS & Systems",
    "tags": [
      "Ad Intelligence",
      "SaaS Analytics",
      "Meta Ads",
      "ROAS Attribution",
      "Next.js",
      "Dashboard UI"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #09090b, #4f46e5)",
    "image": "/portfolio-assets/entiix-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/entiix-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/entiix-pdf-mobile.png",
    "websiteUrl": "https://entiix.com",
    "year": "2024",
    "aboutClient": "Entiix is an ad intelligence SaaS designed for media buyers, growth marketers, and DTC brands spending $10k to $500k monthly on digital ads that struggle with post-iOS 14 attribution blindness.",
    "challenge": "SaaS product landings require clear, high-density feature demonstrations that educate visitors on technical data pipelines without overwhelming them, while driving free trial sign-ups and annual software subscriptions.",
    "solution": "Devsynx designed an ultra-sleek dark tech product marketing platform featuring interactive live dashboard previews, real-time attribution diagrams, transparent pricing tiers, and seamless Stripe billing integration.",
    "whatWeDelivered": [
      "High-tech SaaS product marketing platform engineered with dark-glassmorphism styling",
      "Interactive dashboard previewer showcasing real-time ROAS charts and creative fatigue meters",
      "Monthly and annual billing toggle with automated Stripe Checkout integration",
      "Interactive visual diagrams demonstrating server-side Conversions API (CAPI) vs standard pixel tracking",
      "Developer documentation and API reference portal with code snippet highlights"
    ],
    "techStack": [
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion"
        ]
      },
      {
        "category": "Charts & Visuals",
        "technologies": [
          "Recharts",
          "Lucide React",
          "Canvas Particle Background"
        ]
      },
      {
        "category": "Auth & Payments",
        "technologies": [
          "Stripe Billing API",
          "Clerk Authentication",
          "PostgreSQL"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Active Media Buyers",
        "value": "1,850+",
        "description": "E-commerce brands and agency media buyers actively tracking ad campaigns"
      },
      {
        "label": "Ad Spend Tracked",
        "value": "$42M+",
        "description": "Monthly advertising budget attributed and analyzed through the Entiix engine"
      },
      {
        "label": "Trial-to-Paid Rate",
        "value": "32.4%",
        "description": "High conversion from 14-day free trial into paid monthly software subscriptions"
      }
    ],
    "keyFeatures": [
      {
        "title": "Server-Side First-Party Attribution",
        "description": "Bypasses iOS 14 ad blockers using server-side tracking to capture 100% of real purchases."
      },
      {
        "title": "Automated Creative Fatigue Alerts",
        "description": "Notifies media buyers via Slack the exact moment an ad's CTR begins to decay."
      },
      {
        "title": "Real-Time ROAS Dashboard Preview",
        "description": "Interactive interactive mock analytics showing live revenue, CPC, CPA, and blended metrics."
      },
      {
        "title": "Multi-Account Agency Switcher",
        "description": "Manage 50+ client ad accounts from a single master dashboard with custom access permissions."
      }
    ],
    "seoKeywords": [
      "Entiix",
      "Meta ads attribution SaaS",
      "ad tracking software",
      "ROAS analytics platform",
      "first party server side tracking",
      "ad creative fatigue tool"
    ]
  },
  {
    "id": "odoo-service",
    "clientName": "Odoo Service Germany",
    "projectTitle": "German Enterprise ERP & Odoo Implementation",
    "domain": "odooservice.de",
    "tagline": "High-security dark tech corporate portal for German manufacturing and distribution ERP integration",
    "description": "Enterprise consulting platform and technical service portal for a specialized German Odoo ERP implementation partner, catering to DACH-region industrial manufacturers and logistics companies.",
    "category": "Web Development",
    "tags": [
      "Odoo ERP",
      "German Enterprise",
      "B2B Consulting",
      "ERP Implementation",
      "Next.js",
      "DACH Region"
    ],
    "region": "Germany",
    "gradient": "linear-gradient(135deg, #18181b, #713f12)",
    "image": "/portfolio-assets/odoo-service-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/odoo-service-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/odoo-service-pdf-mobile.png",
    "websiteUrl": "https://odooservice.de",
    "year": "2024",
    "aboutClient": "Odoo Service is a certified German enterprise software consultancy delivering end-to-end Odoo ERP migrations, custom module programming, and cloud hosting for Mittelstand manufacturing and logistics firms across Germany, Austria, and Switzerland.",
    "challenge": "German enterprise decision-makers require uncompromising precision, DSGVO (GDPR) legal compliance, German-language technical accuracy, and proven reference implementations before greenlighting six-figure ERP migrations.",
    "solution": "Devsynx engineered a prestigious, dark-tech corporate web portal in German, detailing Odoo module capabilities (Warehouse, Manufacturing, Accounting, CRM), DSGVO compliance standards, and custom migration roadmaps.",
    "whatWeDelivered": [
      "High-security German-language corporate portal built with Next.js and TypeScript",
      "Comprehensive Odoo ERP module breakdown: ERP Migration, Custom Python Modules, and Hosting",
      "DSGVO / GDPR compliant server architecture with cookieless tracking and legal imprint",
      "Interactive ERP migration cost estimator and project milestone calculator",
      "Enterprise consultation request system with calendar integration and NDA dispatch"
    ],
    "techStack": [
      {
        "category": "Frontend Engine",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS"
        ]
      },
      {
        "category": "Localization & Legal",
        "technologies": [
          "German Localization (i18n)",
          "DSGVO Privacy Engine",
          "Compliant Hosting"
        ]
      },
      {
        "category": "Cloud & Hosting",
        "technologies": [
          "Frankfurt Edge Servers",
          "Cloudflare SSL",
          "HSTS Encryption"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Enterprise ERP Contracts",
        "value": "\u20ac3.2M+",
        "description": "Value of enterprise Odoo implementation contracts secured via the portal"
      },
      {
        "label": "Mittelstand Inquiries",
        "value": "+165%",
        "description": "Increase in German manufacturing and wholesale distribution inquiries"
      },
      {
        "label": "GDPR Compliance",
        "value": "100%",
        "description": "Zero compliance defects under strict German privacy and data residency laws"
      }
    ],
    "keyFeatures": [
      {
        "title": "Modular Odoo Solution Matrix",
        "description": "Detailed guides on Inventory Management, Automated Invoicing, and Supply Chain workflows."
      },
      {
        "title": "Mittelstand Case Studies",
        "description": "Documented migration success stories from legacy SAP and Navision systems to modern Odoo."
      },
      {
        "title": "Interactive Migration Roadmap",
        "description": "Visual breakdown of Audit, Data Cleansing, Sandbox Testing, Training, and Go-Live."
      },
      {
        "title": "German Data Residency Guarantee",
        "description": "Highlights ISO 27001 certified data center hosting located entirely within Germany."
      }
    ],
    "seoKeywords": [
      "Odoo Service Deutschland",
      "Odoo ERP Berater",
      "Odoo Einf\u00fchrung Mittelstand",
      "Odoo Migration SAP",
      "ERP Agentur Deutschland",
      "Odoo Entwicklung Frankfurt"
    ]
  },
  {
    "id": "ygi-holiday-homes",
    "clientName": "YGI Holiday Homes",
    "projectTitle": "Dubai Luxury Vacation Rental Booking Platform",
    "domain": "ygiholidayhomes.com",
    "tagline": "Full-bleed architectural property showcases, direct reservation inquiry engine, and concierge portal",
    "description": "Luxury short-term holiday rental platform in Dubai showcasing premium penthouse suites, beach villas, and serviced apartments across Downtown Dubai, Palm Jumeirah, and Dubai Marina.",
    "category": "Web Development",
    "tags": [
      "Holiday Homes",
      "Dubai Vacation Rentals",
      "Short-Term Rental",
      "Next.js",
      "Luxury Booking",
      "Hospitality"
    ],
    "region": "United Arab Emirates",
    "gradient": "linear-gradient(135deg, #1c1917, #ca8a04)",
    "image": "/portfolio-assets/ygi-holiday-homes-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/ygi-holiday-homes-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/ygi-holiday-homes-pdf-mobile.png",
    "websiteUrl": "https://ygiholidayhomes.com",
    "year": "2024",
    "aboutClient": "YGI Holiday Homes manages a premier portfolio of DTCM-licensed luxury short-term rental residences in Dubai, offering VIP travelers, celebrities, and corporate executives 5-star concierge living with private pool villas and skyline penthouses.",
    "challenge": "Relying strictly on Airbnb and Booking.com cost YGI 15-20% in booking platform commissions and prevented direct VIP guest relationship building. They needed a high-end direct booking engine that reflected true luxury hospitality.",
    "solution": "Devsynx designed a full-bleed luxury hospitality portal featuring magazine-grade photography, live calendar availability, instant inquiry dispatch, guest concierge requests (private chef, yacht charter), and WhatsApp VIP booking.",
    "whatWeDelivered": [
      "Bespoke luxury hospitality web platform engineered in Next.js",
      "Full-screen architectural photography galleries with virtual amenity tours",
      "Direct guest reservation inquiry engine bypassing OTA commission fees",
      "VIP Concierge services menu: Chauffeur, Yacht Charter, Private Chef, and Desert Safari",
      "Landlord property management onboarding portal for Dubai apartment owners"
    ],
    "techStack": [
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion"
        ]
      },
      {
        "category": "Media & Visuals",
        "technologies": [
          "High-Res Image Pipeline",
          "Cloudflare Stream",
          "Leaflet Maps API"
        ]
      },
      {
        "category": "Integrations",
        "technologies": [
          "WhatsApp VIP Concierge",
          "Property Management System (PMS) Sync",
          "Stripe"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Direct Bookings",
        "value": "+62%",
        "description": "Share of guest stays booked directly through website saving OTA commission fees"
      },
      {
        "label": "Average Booking Value",
        "value": "18,500 AED",
        "description": "High average stay spend driven by weekly luxury villa and penthouse bookings"
      },
      {
        "label": "Landlord Listings Added",
        "value": "45+",
        "description": "New luxury properties onboarded to the management portfolio via web inquiries"
      }
    ],
    "keyFeatures": [
      {
        "title": "Full-Bleed Architectural Galleries",
        "description": "High-resolution photo tours of master suites, infinity pools, and Burj Khalifa balcony views."
      },
      {
        "title": "Instant WhatsApp VIP Concierge",
        "description": "Connect instantly with a live reservation manager to lock in bespoke dates and special requests."
      },
      {
        "title": "DTCM Licensing Transparency",
        "description": "Full compliance credentials reassuring travelers of legitimate Dubai Department of Tourism standards."
      },
      {
        "title": "Landlord Revenue Estimator",
        "description": "Interactive tool showing Dubai property owners projected annual short-term rental profits."
      }
    ],
    "seoKeywords": [
      "YGI Holiday Homes",
      "luxury vacation rentals Dubai",
      "Palm Jumeirah holiday villas",
      "Downtown Dubai short term rental",
      "Dubai penthouse direct booking",
      "DTCM holiday homes"
    ]
  },
  {
    "id": "alphamedi-assist",
    "clientName": "AlphaMedi Assist",
    "projectTitle": "Healthcare Staffing & Medical Billing Portal",
    "domain": "alphamediassist.com",
    "tagline": "HIPAA-compliant medical billing, revenue cycle management, and clinical assistant recruitment platform",
    "description": "Healthcare digital platform and virtual medical staffing portal connecting US physician practices, dental clinics, and surgical centers with HIPAA-certified virtual medical assistants and billing specialists.",
    "category": "Web Development",
    "tags": [
      "Healthcare Staffing",
      "Medical Billing",
      "HIPAA Compliant",
      "Virtual Assistant",
      "Next.js",
      "Telehealth"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #022c22, #0284c7)",
    "image": "/portfolio-assets/alphamedi-assist-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/alphamedi-assist-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/alphamedi-assist-pdf-mobile.png",
    "websiteUrl": "https://alphamediassist.com",
    "year": "2024",
    "aboutClient": "AlphaMedi Assist is a specialized healthcare staffing agency providing US medical practices with HIPAA-certified virtual assistants trained in electronic health records (EHR), prior authorizations, medical coding, and patient scheduling.",
    "challenge": "US medical clinics are overwhelmed by administrative burnout and prior authorization backlogs, but cannot hire offshore talent without strict proof of HIPAA compliance, BAA agreements, and EHR competency.",
    "solution": "Devsynx developed a clean, clinical corporate web presence emphasizing HIPAA data security protocols, EHR compatibility (Epic, Cerner, AthenaHealth), transparent staffing ROI calculators, and streamlined clinic consultation booking.",
    "whatWeDelivered": [
      "Trust-first healthcare corporate platform engineered in Next.js",
      "Clear breakdown of specialized clinical roles: Medical Scribes, Billing Specialists, and Prior Auth VAs",
      "HIPAA compliance security certification badge showcase and BAA protocol overview",
      "Clinic overhead savings calculator showing estimated $45k/year savings per doctor",
      "Frictionless discovery call booking calendar integrated with clinic onboarding specialists"
    ],
    "techStack": [
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS"
        ]
      },
      {
        "category": "Security & Compliance",
        "technologies": [
          "HIPAA Compliance Architecture",
          "Cloudflare Enterprise",
          "Encrypted Forms"
        ]
      },
      {
        "category": "Integrations",
        "technologies": [
          "Calendly API",
          "HubSpot Healthcare CRM",
          "SendGrid"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Clinical Staff Placed",
        "value": "280+",
        "description": "HIPAA-certified medical VAs actively supporting US doctors and specialty clinics"
      },
      {
        "label": "Prior Auth Turnaround",
        "value": "-65%",
        "description": "Reduction in patient prior authorization wait times achieved by partner clinics"
      },
      {
        "label": "Clinic Inquiries",
        "value": "+190%",
        "description": "Increase in monthly inbound doctor inquiries for virtual medical staff"
      }
    ],
    "keyFeatures": [
      {
        "title": "EHR Software Compatibility",
        "description": "Pre-trained proficiency across Epic, eClinicalWorks, AthenaHealth, Kareo, and Cerner."
      },
      {
        "title": "HIPAA Security Architecture",
        "description": "Comprehensive explanation of encrypted virtual desktop environments and signed BAA agreements."
      },
      {
        "title": "Physician Burnout Reduction",
        "description": "Case studies demonstrating how dedicated medical scribes save doctors 2 hours of charting daily."
      },
      {
        "title": "7-Day Risk-Free Trial",
        "description": "Clear risk-reversal offer allowing clinics to test an assistant before entering long-term agreements."
      }
    ],
    "seoKeywords": [
      "AlphaMedi Assist",
      "virtual medical assistant US",
      "HIPAA compliant medical billing",
      "remote medical scribe",
      "prior authorization assistant",
      "healthcare virtual staffing"
    ]
  },
  {
    "id": "orvex-booths",
    "clientName": "Orvex Booths",
    "projectTitle": "Florida Luxury 360 Photo Booth Rental",
    "domain": "orvex.devsynx.com",
    "tagline": "Editorial event photography and luxury photo booth booking platform for VIP weddings and corporate galas",
    "description": "High-end experiential event rental website for Florida's premier luxury 360 video and photo booth company, featuring interactive package builders, gallery reels, and instant event date reservation.",
    "category": "Web Development",
    "tags": [
      "Event Rental",
      "Photo Booth",
      "Florida Weddings",
      "Corporate Events",
      "Next.js",
      "Interactive Booking"
    ],
    "region": "United States (Florida)",
    "gradient": "linear-gradient(135deg, #18181b, #ec4899)",
    "image": "/portfolio-assets/orvex-booths-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/orvex-booths-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/orvex-booths-pdf-mobile.png",
    "websiteUrl": "https://orvex.devsynx.com",
    "year": "2024",
    "aboutClient": "Orvex Booths provides high-production luxury 360 video booths, vintage digital photo booths, and custom neon backdrops for celebrity weddings, Miami galas, and brand activations across South Florida.",
    "challenge": "Event planners and luxury brides make rapid visual decisions. The previous site was outdated and failed to communicate the sleek, futuristic glamour of their 360 camera rigs and custom studio lighting.",
    "solution": "Devsynx designed an editorial, high-vibrancy web showcase with smooth video galleries, customizable package builders, instant date availability checking, and automated booking deposit collection.",
    "whatWeDelivered": [
      "High-energy event rental platform designed with dark aesthetics and neon accent glows",
      "Streaming 360 video event reel showcase displaying real wedding and corporate guest reactions",
      "Interactive package configurator: 360 Orbit, Glam Booth, Vintage Retro, and Custom Backdrops",
      "Real-time event date availability checker and deposit checkout integration",
      "Automated quote generator delivering instant customized PDF proposals to event planners"
    ],
    "techStack": [
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion"
        ]
      },
      {
        "category": "Video & Gallery",
        "technologies": [
          "Cloudflare Stream",
          "Lightgallery.js",
          "WebP Image Optimization"
        ]
      },
      {
        "category": "Booking & Payments",
        "technologies": [
          "Stripe Checkout",
          "HoneyBook CRM Sync",
          "Twilio SMS Confirmations"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Weekend Bookings",
        "value": "100%",
        "description": "Completely booked out weekend wedding calendar across Miami and Orlando seasons"
      },
      {
        "label": "Package Upsells",
        "value": "+45%",
        "description": "Increase in premium custom lighting and neon backdrop add-ons via online builder"
      },
      {
        "label": "Proposal Conversion",
        "value": "68%",
        "description": "Conversion rate from instant quote generation to paid deposit"
      }
    ],
    "keyFeatures": [
      {
        "title": "Interactive 360 Video Showcase",
        "description": "Watch real high-frame-rate guest videos with custom branded overlays and slow-motion effects."
      },
      {
        "title": "Custom Event Package Builder",
        "description": "Choose booth style, hours, custom overlays, props, and red-carpet stanchions in real time."
      },
      {
        "title": "Instant Date Availability Check",
        "description": "Planners can instantly verify if a booth is available for their wedding or gala date."
      },
      {
        "title": "Corporate Brand Activation Tools",
        "description": "Highlights custom physical vinyl wrapping and instant SMS/AirDrop guest sharing."
      }
    ],
    "seoKeywords": [
      "Orvex Booths",
      "360 photo booth rental Miami",
      "luxury wedding photo booth Florida",
      "corporate event photo booth Orlando",
      "glam photo booth rental",
      "event activation booths"
    ]
  },
  {
    "id": "rebecca-minkoff",
    "clientName": "Rebecca Minkoff",
    "projectTitle": "Designer Handbags & Apparel Shopify Plus Store",
    "domain": "rebeccaminkoff.com",
    "tagline": "High-volume luxury fashion flagship with dynamic seasonal lookbooks, mega-menus, and VIP checkout",
    "description": "Enterprise Shopify Plus e-commerce architecture for global designer fashion brand Rebecca Minkoff, featuring seasonal collection campaigns, high-traffic flash sale scaling, and mobile-first luxury checkout.",
    "category": "E-Commerce & Retail",
    "tags": [
      "Shopify Plus",
      "Luxury Fashion",
      "Enterprise E-Commerce",
      "High Volume",
      "Handbags",
      "Mobile First"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #18181b, #a855f7)",
    "image": "/portfolio-assets/rebecca-minkoff-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/rebecca-minkoff-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/rebecca-minkoff-pdf-mobile.png",
    "websiteUrl": "https://www.rebeccaminkoff.com",
    "year": "2024",
    "aboutClient": "Rebecca Minkoff is an iconic American luxury fashion house known for edgy, romantic designer handbags, leather jackets, women's apparel, and accessories sold globally in premier department stores and online flagships.",
    "challenge": "Handling millions of monthly visitors and extreme traffic surges during Black Friday flash sales without slowing down page rendering or experiencing cart checkout latency across international currencies.",
    "solution": "Devsynx contributed to high-performance Shopify Plus optimizations: implementing streamlined collection filtering, lightning-fast mega-menus, optimized image pipelines, and frictionless mobile one-tap checkouts.",
    "whatWeDelivered": [
      "Shopify Plus theme speed optimization achieving sub-second catalog navigation",
      "Editorial collection lookbook with direct 'Shop the Look' product hotspot tagging",
      "High-traffic flash sale checkout architecture handling 15,000+ simultaneous shopping sessions",
      "Multi-currency internationalization with localized duties and localized shipping calculations",
      "VIP loyalty rewards integration and automated SMS restock alert notification engine"
    ],
    "techStack": [
      {
        "category": "E-Commerce Core",
        "technologies": [
          "Shopify Plus",
          "Liquid",
          "Hydrogen / React Components",
          "Storefront API"
        ]
      },
      {
        "category": "Search & Merchandising",
        "technologies": [
          "Klevu AI Search",
          "Fast Collection Filter",
          "Yotpo Reviews & Loyalty"
        ]
      },
      {
        "category": "CDN & Performance",
        "technologies": [
          "Fastly Enterprise CDN",
          "WebP Image Optimization",
          "Minified Assets"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Mobile Conversion Rate",
        "value": "+28%",
        "description": "Increase in mobile conversion following checkout friction reduction"
      },
      {
        "label": "Page Load Speed",
        "value": "1.1s",
        "description": "Fast load speed across collection pages with 100+ product variants"
      },
      {
        "label": "Flash Sale Uptime",
        "value": "100%",
        "description": "Zero downtime during peak Black Friday / Cyber Monday transaction spikes"
      }
    ],
    "keyFeatures": [
      {
        "title": "Shop the Look Hotspot Tags",
        "description": "Tap models in editorial campaign photos to view and add individual apparel pieces to cart."
      },
      {
        "title": "High-Volume Flash Sale Queue",
        "description": "Guarantees server stability and inventory reservation during high-demand limited drops."
      },
      {
        "title": "Multi-Angle 4K Product Zoom",
        "description": "Inspect leather grain, hardware stitching, and internal handbag pockets in extreme detail."
      },
      {
        "title": "One-Tap Apple Pay / Shop Pay",
        "description": "Instant mobile checkout bypassing multi-step address forms."
      }
    ],
    "seoKeywords": [
      "Rebecca Minkoff",
      "designer handbags online",
      "luxury leather jackets",
      "Shopify Plus fashion store",
      "womens designer apparel",
      "luxury accessories brand"
    ]
  },
  {
    "id": "purrchase-ai",
    "clientName": "Purrchase AI",
    "projectTitle": "Shopify AI Virtual Try-On & Animation App",
    "domain": "purrchase.ai",
    "tagline": "Interactive AI-driven virtual fitting room and automated 3D product animation tool for fashion merchants",
    "description": "Next-gen Shopify application and interactive SaaS platform enabling apparel merchants to offer AI-powered virtual try-ons and automated 3D product rotation videos directly on their store product pages.",
    "category": "E-Commerce & Retail",
    "tags": [
      "Shopify App",
      "AI Virtual Try-On",
      "E-Commerce AI",
      "SaaS",
      "Fashion Tech",
      "Next.js"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #09090b, #ec4899)",
    "image": "/portfolio-assets/purrchase-ai-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/purrchase-ai-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/purrchase-ai-pdf-mobile.png",
    "websiteUrl": "https://www.purrchase.ai",
    "year": "2024",
    "aboutClient": "Purrchase AI is an e-commerce software venture developing computer vision and generative AI tools that allow online apparel shoppers to see how clothes fit on their exact body type before buying.",
    "challenge": "Online fashion brands face return rates as high as 40% due to sizing uncertainty. Purrchase AI needed a compelling marketing landing and instant 1-click Shopify App Store installation flow to onboard merchants rapidly.",
    "solution": "Devsynx engineered the SaaS marketing platform and interactive try-on demonstration sandbox, allowing visiting e-commerce directors to upload photos and experience the AI fit technology live within seconds.",
    "whatWeDelivered": [
      "Cutting-edge SaaS marketing landing page engineered in Next.js with interactive demo widgets",
      "Live interactive Virtual Try-On playground where users test clothes on realistic AI models",
      "Shopify App Store integration flow with automated OAuth onboarding and webhooks",
      "Merchant ROI analytics calculator projecting return rate reductions and revenue lift",
      "Developer documentation and REST API integration portal for headless e-commerce builds"
    ],
    "techStack": [
      {
        "category": "Frontend Platform",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion"
        ]
      },
      {
        "category": "AI & Computer Vision",
        "technologies": [
          "Diffusion Fit Models",
          "WebGL Model Viewer",
          "Automated Image Segmentation"
        ]
      },
      {
        "category": "Shopify Infrastructure",
        "technologies": [
          "Shopify App Bridge",
          "GraphQL Admin API",
          "PostgreSQL",
          "Node.js"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Return Rate Reduction",
        "value": "-36%",
        "description": "Average decrease in apparel returns reported by merchants using Purrchase AI"
      },
      {
        "label": "Add-to-Cart Conversion",
        "value": "+24%",
        "description": "Increase in cart additions when shoppers interact with the virtual try-on widget"
      },
      {
        "label": "Active Stores",
        "value": "450+",
        "description": "Shopify fashion and streetwear brands powered by Purrchase AI"
      }
    ],
    "keyFeatures": [
      {
        "title": "Live Interactive Try-On Sandbox",
        "description": "Upload a selfie or pick an avatar to see how shirts, hoodies, and dresses drape in real time."
      },
      {
        "title": "1-Click Shopify Theme Injection",
        "description": "App automatically injects lightweight try-on buttons below store product titles with zero coding."
      },
      {
        "title": "Body Diversity AI Presets",
        "description": "Shoppers can select between diverse body heights, chest sizes, and skin tones for realistic previews."
      },
      {
        "title": "Automated 3D Motion Generation",
        "description": "Turns flat catalog photos into animated walking model video reels for product pages."
      }
    ],
    "seoKeywords": [
      "Purrchase AI",
      "Shopify virtual try on app",
      "AI clothes fitting room",
      "e-commerce size reduction AI",
      "fashion tech software",
      "virtual fitting room Shopify"
    ]
  },
  {
    "id": "subdiv",
    "clientName": "SUBDIV 3D",
    "projectTitle": "Interactive 3D E-Commerce & Product Experiences",
    "domain": "subdiv3d.com",
    "tagline": "WebGL and Three.js 3D product visualizer platform integrated into high-conversion headless Shopify stores",
    "description": "High-end 3D product agency platform and WebGL engineering showcase creating photorealistic interactive 3D product configurators, digital twins, and immersive headless Shopify storefronts for consumer brands.",
    "category": "E-Commerce & Retail",
    "tags": [
      "3D E-Commerce",
      "WebGL",
      "Three.js",
      "Headless Shopify",
      "Product Visualizer",
      "Interactive Design"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #09090b, #06b6d4)",
    "image": "/portfolio-assets/subdiv-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/subdiv-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/subdiv-pdf-mobile.png",
    "websiteUrl": "https://subdiv3d.com",
    "year": "2024",
    "aboutClient": "SUBDIV 3D creates photorealistic 3D product configurators and WebGL shopping experiences for luxury watches, consumer electronics, designer furniture, and high-end automotive brands globally.",
    "challenge": "Interactive 3D on the web frequently suffers from massive file weights (50MB+ models) that cause browser lag and high bounce rates on mobile smartphones.",
    "solution": "Devsynx engineered an optimized WebGL asset compression pipeline and an ultra-futuristic digital portfolio showcasing interactive 3D models with real-time lighting that load in under 2 seconds on mobile browsers.",
    "whatWeDelivered": [
      "Futuristic 3D agency portfolio engineered with custom Three.js canvas backgrounds and smooth shaders",
      "Interactive product sandbox allowing visitors to rotate, explode, and customize materials in real-time",
      "Proprietary 3D model compression pipeline reducing glTF/GLB file sizes by up to 80%",
      "Headless Shopify integration architecture synchronizing 3D color choices with live cart variants",
      "B2B project scope configurator and enterprise quote request workflow"
    ],
    "techStack": [
      {
        "category": "3D & Graphics",
        "technologies": [
          "Three.js",
          "React Three Fiber (R3F)",
          "WebGL 2.0",
          "glTF Draco Compression"
        ]
      },
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "GSAP Motion"
        ]
      },
      {
        "category": "E-Commerce Core",
        "technologies": [
          "Shopify Storefront API",
          "Cloudflare R2 Asset Storage",
          "Vercel Edge"
        ]
      }
    ],
    "metrics": [
      {
        "label": "3D Load Time",
        "value": "1.4s",
        "description": "Sub-2 second interactive 3D render time on 4G cellular connections"
      },
      {
        "label": "Shopper Time on Page",
        "value": "3.5x",
        "description": "Increase in customer engagement duration on product pages with 3D configurators"
      },
      {
        "label": "Client Sales Lift",
        "value": "+42%",
        "description": "Average increase in high-ticket product conversions for brands deploying SUBDIV 3D"
      }
    ],
    "keyFeatures": [
      {
        "title": "Real-Time Material Customizer",
        "description": "Change leather textures, metallic finishes, and glass reflections dynamically with physical accuracy."
      },
      {
        "title": "Exploded View Animations",
        "description": "Disassemble complex mechanical watch movements and electronic components with fluid slider controls."
      },
      {
        "title": "AR (Augmented Reality) Quick Look",
        "description": "One-tap placement of 3D furniture and products into the user's living room via Apple ARKit / Android Scene Viewer."
      },
      {
        "title": "Headless Cart Synchronization",
        "description": "Configured custom color combinations automatically map to correct Shopify inventory SKUs."
      }
    ],
    "seoKeywords": [
      "SUBDIV 3D",
      "3D ecommerce product visualizer",
      "Three.js Shopify developer",
      "WebGL product configurator",
      "interactive 3D agency",
      "AR shopping online"
    ]
  },
  {
    "id": "mizn-abayas",
    "clientName": "MIZN Abayas",
    "projectTitle": "Luxury Modest Fashion & Abaya E-Commerce",
    "domain": "miznabaya.com",
    "tagline": "Soft editorial digital boutique with seamless mobile-first one-tap ordering and seasonal drop alerts",
    "description": "High-end luxury modest fashion e-commerce storefront for MIZN Abayas, featuring soft editorial aesthetic design, fabric zoom detail, size customization guides, and seamless GCC mobile checkout.",
    "category": "E-Commerce & Retail",
    "tags": [
      "Modest Fashion",
      "Abaya E-Commerce",
      "Shopify Store",
      "Luxury Retail",
      "GCC Shipping",
      "Mobile First"
    ],
    "region": "Pakistan / Gulf",
    "gradient": "linear-gradient(135deg, #18181b, #78716c)",
    "image": "/portfolio-assets/mizn-abayas-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/mizn-abayas-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/mizn-abayas-pdf-mobile.png",
    "websiteUrl": "https://www.miznabaya.com",
    "year": "2024",
    "aboutClient": "MIZN Abayas is a luxury modest fashion house crafting premium handcrafted abayas, luxury linen wraps, and formal evening wear using imported Korean silks and Japanese crepes for discerning clients across the Gulf and Pakistan.",
    "challenge": "Modest fashion buyers are meticulous about fabric drape, opacity, sleeve embroidery, and custom height tailoring. The brand needed a digital flagship that communicated serene luxury and handled bespoke sizing notes seamlessly.",
    "solution": "Devsynx engineered a soft editorial Shopify experience with minimalist cream-and-charcoal palettes, extreme high-resolution fabric texture zoom, custom length tailoring selectors, and WhatsApp concierge integration.",
    "whatWeDelivered": [
      "Luxury modest fashion boutique storefront engineered on Shopify with custom Liquid templates",
      "Editorial collection lookbooks with video lookbook integrations for seasonal Ramadan drops",
      "Custom height and bust sizing selector with tailored centimeter-to-inch converters",
      "Multi-currency support (PKR, AED, SAR, USD) with integrated international DHL express shipping",
      "Instant WhatsApp concierge order assistance for bespoke bespoke embroidery requests"
    ],
    "techStack": [
      {
        "category": "E-Commerce Engine",
        "technologies": [
          "Shopify Plus",
          "Liquid",
          "Tailwind CSS",
          "JavaScript ES6"
        ]
      },
      {
        "category": "Visuals & Media",
        "technologies": [
          "High-Res Fabric Zoom",
          "Cloudinary Video Delivery",
          "Lazy-Loaded Assets"
        ]
      },
      {
        "category": "Logistics & Payments",
        "technologies": [
          "DHL Express API",
          "Local Gateway Integrations",
          "WhatsApp Order Desk"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Collection Sellout Time",
        "value": "48 Hours",
        "description": "Ramadan and Eid drops sell out initial runs within 48 hours of newsletter launch"
      },
      {
        "label": "Gulf Order Share",
        "value": "45%",
        "description": "Share of total orders shipped internationally to UAE, Saudi Arabia, and Qatar"
      },
      {
        "label": "Sizing Return Rate",
        "value": "<1.5%",
        "description": "Near-zero return rate due to custom length selection guidelines"
      }
    ],
    "keyFeatures": [
      {
        "title": "Macro Fabric Texture Inspection",
        "description": "Zoom in to inspect intricate French lace trims, Japanese crepe grain, and hand-stitched beads."
      },
      {
        "title": "Custom Height & Drape Selector",
        "description": "Ensure perfect floor length by selecting exact height from 50 to 60 inches."
      },
      {
        "title": "Seasonal Drop Notifications",
        "description": "Automated WhatsApp and SMS alerts notifying VIP buyers before limited-batch drops go live."
      },
      {
        "title": "Curated Modest Styling Lookbooks",
        "description": "Suggests matching modal hijabs, slip dresses, and magnetic pins directly on product pages."
      }
    ],
    "seoKeywords": [
      "MIZN Abayas",
      "luxury abayas online",
      "modest fashion boutique",
      "silk abayas Dubai",
      "designer abaya Pakistan",
      "handcrafted abayas GCC"
    ]
  },
  {
    "id": "silayi-pret",
    "clientName": "Silayi Pret",
    "projectTitle": "Eastern Ready-to-Wear Fashion Storefront",
    "domain": "silayipret.com",
    "tagline": "High-traffic flash sale and festive collection e-commerce architecture with instant inventory sync",
    "description": "High-volume ready-to-wear Eastern pret fashion e-commerce storefront featuring collection-heavy navigation, seasonal clearance promotions, automated stock synchronization, and fast cash-on-delivery checkout.",
    "category": "E-Commerce & Retail",
    "tags": [
      "Eastern Wear",
      "Pret Fashion",
      "Shopify Store",
      "High-Volume Retail",
      "Flash Sales",
      "Cash on Delivery"
    ],
    "region": "Pakistan",
    "gradient": "linear-gradient(135deg, #1e1b4b, #e11d48)",
    "image": "/portfolio-assets/silayi-pret-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/silayi-pret-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/silayi-pret-pdf-mobile.png",
    "websiteUrl": "https://silayipret.com",
    "year": "2024",
    "aboutClient": "Silayi Pret is a high-volume ready-to-wear women's eastern fashion brand in Pakistan offering affordable luxury lawn, stitched cambric suits, formal kurtis, and matching separates for everyday wear and festive seasons.",
    "challenge": "Lawn collection launches generate massive traffic surges (50,000+ visitors in an hour), causing server crashes, inventory overselling, and customer support chaos on conventional platforms.",
    "solution": "Devsynx architected a high-concurrency Shopify infrastructure with optimized product filtering, real-time stock reservation, automated postal code validation for Cash-on-Delivery (COD), and flash sale countdown banners.",
    "whatWeDelivered": [
      "High-traffic Shopify storefront optimized for extreme flash sale concurrency",
      "Multi-faceted collection filtering: Size (XS to XL), Fabric (Lawn, Jacquard, Chiffon), and Price",
      "Address autofill and Cash on Delivery (COD) phone verification system reducing parcel return-to-origin (RTO)",
      "Automated warehouse inventory sync preventing out-of-stock order placement",
      "Post-purchase SMS tracking updates with direct rider phone numbers"
    ],
    "techStack": [
      {
        "category": "E-Commerce Core",
        "technologies": [
          "Shopify",
          "Liquid",
          "JavaScript ES6",
          "Tailwind CSS"
        ]
      },
      {
        "category": "Logistics & COD",
        "technologies": [
          "Trax Courier API",
          "TCS API",
          "OTP Phone Verification Engine"
        ]
      },
      {
        "category": "Marketing & CRM",
        "technologies": [
          "Klaviyo Email Marketing",
          "Meta Pixel CAPI",
          "TikTok Ads Pixel"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Launch Day Orders",
        "value": "4,200+",
        "description": "Single-day orders processed smoothly during seasonal festive collection drops"
      },
      {
        "label": "RTO Reduction",
        "value": "-35%",
        "description": "Decrease in returned parcels through automated phone number verification"
      },
      {
        "label": "Mobile Speed",
        "value": "0.9s",
        "description": "Sub-second load times on 3G and 4G mobile connections across Pakistan"
      }
    ],
    "keyFeatures": [
      {
        "title": "Flash Sale Countdown Engine",
        "description": "Urgency timers and limited-stock remaining indicators driving instant checkout decisions."
      },
      {
        "title": "Cash on Delivery OTP Shield",
        "description": "Sends instant WhatsApp/SMS verification codes to prevent fake orders and courier losses."
      },
      {
        "title": "Complete 3-Piece Suite Breakdowns",
        "description": "High-res closeups of embroidered necklines, printed dupattas, and dyed trouser hems."
      },
      {
        "title": "Automated Courier Dispatch",
        "description": "Generates thermal shipping labels and dispatches tracking numbers directly upon order confirmation."
      }
    ],
    "seoKeywords": [
      "Silayi Pret",
      "ready to wear lawn",
      "stitched eastern suits",
      "pret wear Pakistan",
      "womens kurtis online",
      "affordable lawn collection"
    ]
  },
  {
    "id": "luxora-women",
    "clientName": "Luxora Women",
    "projectTitle": "Women's Luxury Timepiece & Jewelry Store",
    "domain": "luxoraa.pk",
    "tagline": "High-converting luxury watch D2C store with bundle discounts, gift packaging, and WhatsApp 1-click orders",
    "description": "High-converting D2C women's timepiece and luxury jewelry storefront featuring elegance-driven aesthetics, bundle discount promotions, gift wrapping add-ons, and instant 1-click WhatsApp ordering.",
    "category": "E-Commerce & Retail",
    "tags": [
      "Luxury Watches",
      "Women Jewelry",
      "D2C E-Commerce",
      "Bundle Offers",
      "Shopify Store",
      "Gift Packaging"
    ],
    "region": "Pakistan",
    "gradient": "linear-gradient(135deg, #18181b, #f59e0b)",
    "image": "/portfolio-assets/luxora-women-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/luxora-women-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/luxora-women-pdf-mobile.png",
    "websiteUrl": "https://luxoraa.pk",
    "year": "2024",
    "aboutClient": "Luxora Women is a fast-growing direct-to-consumer brand offering elegant, affordable luxury timepieces, stainless steel quartz watches, and matching crystal bracelet sets for modern women.",
    "challenge": "Converting cold social media ad traffic into instant purchases requires high emotional visual appeal, clear unboxing proof, irresistible bundle pricing, and a checkout flow that eliminates friction for mobile shoppers.",
    "solution": "Devsynx built a high-converting dark luxury Shopify storefront featuring dynamic bundle builders ('Buy 1 Get 1 at 30% Off'), gift box add-ons, verified photo reviews, and a floating 1-click WhatsApp purchase button.",
    "whatWeDelivered": [
      "Luxury-styled Shopify storefront with deep charcoal and champagne gold accents",
      "Dynamic Tiered Bundle Builder allowing shoppers to mix-and-match watch & bracelet sets",
      "Gift packaging selector with personalized greeting card input module",
      "Floating 1-click WhatsApp checkout button with auto-populated cart summaries",
      "Loox photo review integration displaying real customer unboxing photos and videos"
    ],
    "techStack": [
      {
        "category": "Storefront Platform",
        "technologies": [
          "Shopify",
          "Liquid",
          "Tailwind CSS",
          "Alpine.js"
        ]
      },
      {
        "category": "Conversion Apps",
        "technologies": [
          "Loox Photo Reviews",
          "Volume & Tiered Discounts",
          "WhatsApp Direct Order"
        ]
      },
      {
        "category": "Marketing Analytics",
        "technologies": [
          "Meta Pixel CAPI",
          "TikTok Ads Pixel",
          "Google Analytics 4"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Store Conversion Rate",
        "value": "4.6%",
        "description": "High conversion rate on cold Meta and TikTok traffic driven by bundle offers"
      },
      {
        "label": "Average Order Value",
        "value": "+42%",
        "description": "Increase in cart value from watch + bracelet combo upsells"
      },
      {
        "label": "WhatsApp Order Volume",
        "value": "50%",
        "description": "Share of total orders completed directly through the 1-click WhatsApp button"
      }
    ],
    "keyFeatures": [
      {
        "title": "Mix-and-Match Watch Sets",
        "description": "Shoppers pair gold, rose-gold, and silver dials with matching zircon crystal bangles."
      },
      {
        "title": "Luxury Gift Unboxing Experience",
        "description": "Premium velvet jewelry box packaging option with personalized love notes."
      },
      {
        "title": "1-Click WhatsApp Quick Order",
        "description": "Shoppers send their address directly into WhatsApp to complete COD orders in 10 seconds."
      },
      {
        "title": "Customer Video Proof Wall",
        "description": "Real verified customer wrist shots and unboxing reactions building instant buyer trust."
      }
    ],
    "seoKeywords": [
      "Luxora Women",
      "womens luxury watches Pakistan",
      "ladies watch with bracelet set",
      "gift watch for her",
      "affordable luxury timepieces",
      "water resistant womens watch"
    ]
  },
  {
    "id": "studio-pink-designs",
    "clientName": "Studio Pink Designs",
    "projectTitle": "Personalized Gifts & Custom Apparel Store",
    "domain": "studiopinkdesigns.com",
    "tagline": "Real-time custom artwork previewer and print-on-demand fulfillment system on Shopify",
    "description": "Creative e-commerce storefront and print-on-demand platform offering personalized gifts, custom bridesmaid apparel, monogrammed glassware, and custom party favors with real-time text and font previews.",
    "category": "E-Commerce & Retail",
    "tags": [
      "Personalized Gifts",
      "Custom Apparel",
      "Print on Demand",
      "Shopify Store",
      "Live Previewer",
      "E-Commerce"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #18181b, #ec4899)",
    "image": "/portfolio-assets/studio-pink-designs-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/studio-pink-designs-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/studio-pink-designs-pdf-mobile.png",
    "websiteUrl": "https://studiopinkdesigns.com",
    "year": "2024",
    "aboutClient": "Studio Pink Designs creates custom embroidered sweatshirts, monogrammed bridal party robes, personalized tumblers, and custom baby shower keepsakes for celebratory milestones across North America.",
    "challenge": "Custom personalized products often result in customer disputes when the final print doesn't match expectations. The store required a live interactive text and monogram preview tool so customers see exact results before paying.",
    "solution": "Devsynx designed a charming pastel boutique storefront on Shopify, integrating a live interactive font, monogram, and color preview engine that feeds print-ready vector files directly to their fulfillment workshop.",
    "whatWeDelivered": [
      "Charming, pastel-branded e-commerce boutique engineered on Shopify",
      "Live interactive personalization previewer: type custom names, select fonts, and pick thread colors",
      "Automated high-resolution SVG print vector generator for embroidery and vinyl cutting machines",
      "Bulk bridal party ordering matrix allowing multiple names and sizes on a single product page",
      "Automated order status emails with digitized embroidery preview proofs"
    ],
    "techStack": [
      {
        "category": "Storefront Platform",
        "technologies": [
          "Shopify Plus",
          "Liquid",
          "Canvas HTML5",
          "Tailwind CSS"
        ]
      },
      {
        "category": "Customization Engine",
        "technologies": [
          "Custom Product Customizer API",
          "Fabric.js",
          "Vector SVG Exporter"
        ]
      },
      {
        "category": "Print Fulfillment",
        "technologies": [
          "Automated Workshop Print Queue",
          "USPS Shipping API"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Customization Dispute Rate",
        "value": "0.1%",
        "description": "Near-zero customer disputes due to real-time live monogram previews"
      },
      {
        "label": "Bridal Party Cart Size",
        "value": "$185",
        "description": "Average order size on bridesmaid matching sets and bridal boxes"
      },
      {
        "label": "Repeat Customer Rate",
        "value": "31%",
        "description": "High retention from satisfied bridal and holiday gift shoppers"
      }
    ],
    "keyFeatures": [
      {
        "title": "Real-Time Font & Thread Visualizer",
        "description": "See custom names rendered in calligraphy, varsity, or minimal serif fonts instantly."
      },
      {
        "title": "Bridal Party Multi-Entry Table",
        "description": "Input 10 bridesmaids' names, roles (Maid of Honor), and robe sizes on a single screen."
      },
      {
        "title": "Automatic Print-Ready Vector Export",
        "description": "Outputs clean SVG cut files directly to Silhouette and Brother embroidery machines."
      },
      {
        "title": "Gift Box Assembly Add-On",
        "description": "Allows shoppers to bundle robes, personalized champagne flutes, and satin scrunchies."
      }
    ],
    "seoKeywords": [
      "Studio Pink Designs",
      "custom bridesmaid gifts",
      "personalized embroidered sweatshirts",
      "monogrammed tumblers",
      "bridal party favors",
      "personalized baby keepsakes"
    ]
  },
  {
    "id": "dr-said-skin-shop",
    "clientName": "Dr. Said Skin Shop",
    "projectTitle": "Clinical Dermatology Skincare Store & Regimen Builder",
    "domain": "saidskin.com",
    "tagline": "Physician-formulated medical grade skincare with tailored skin quiz and automated subscription refills",
    "description": "Medical-grade clinical skincare e-commerce storefront for a board-certified dermatologist, featuring tailored skin type diagnostic quizzes, regimen bundling, and automated recurring subscription refills.",
    "category": "E-Commerce & Retail",
    "tags": [
      "Clinical Skincare",
      "Dermatology",
      "Shopify Store",
      "Subscription Refills",
      "Regimen Quiz",
      "Medical Grade"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #022c22, #0d9488)",
    "image": "/portfolio-assets/dr-said-skin-shop-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/dr-said-skin-shop-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/dr-said-skin-shop-pdf-mobile.png",
    "websiteUrl": "https://saidskin.com",
    "year": "2024",
    "aboutClient": "Dr. Said Skin is a medical-grade skincare line formulated by a prominent board-certified dermatologist, delivering clinically proven retinols, vitamin C serums, and barrier repair creams to patients nationwide.",
    "challenge": "Medical-grade skincare requires patient education to avoid irritation from active ingredients. Patients needed guidance on product sequences (cleanser -> serum -> moisturizer) and automated refills for chronic skin conditions.",
    "solution": "Devsynx engineered a clean, clinical Shopify e-commerce platform featuring an interactive 60-second Skin Diagnostic Quiz, step-by-step AM/PM regimen bundles, ingredient glossary guides, and Recharge subscription recurring billing.",
    "whatWeDelivered": [
      "Clean, physician-grade clinical skincare storefront engineered on Shopify",
      "Interactive 60-second Skin Diagnostic Quiz recommending personalized product routines",
      "Step-by-step Morning & Night regimen bundles with automatic 15% discount incentives",
      "Recharge recurring subscription engine delivering automatic monthly and quarterly refills",
      "Ingredient safety and clinical study transparency hub highlighting FDA-approved actives"
    ],
    "techStack": [
      {
        "category": "Storefront Platform",
        "technologies": [
          "Shopify Plus",
          "Liquid",
          "React Components",
          "Tailwind CSS"
        ]
      },
      {
        "category": "Subscriptions & Quiz",
        "technologies": [
          "Recharge Subscriptions API",
          "Typeform / Custom Quiz Engine",
          "Klaviyo Flows"
        ]
      },
      {
        "category": "Compliance & Medical",
        "technologies": [
          "FDA Labeling Guidelines",
          "HIPAA Data Privacy",
          "Stripe Secure Payments"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Subscription Share",
        "value": "48%",
        "description": "Of total monthly recurring revenue generated through automated refill subscriptions"
      },
      {
        "label": "Quiz Completion Rate",
        "value": "78%",
        "description": "High completion on skin diagnostic quiz driving personalized regimen checkout"
      },
      {
        "label": "Customer Lifetime Value",
        "value": "+140%",
        "description": "Substantial increase in LTV due to predictable 60-day skincare refills"
      }
    ],
    "keyFeatures": [
      {
        "title": "Skin Type Diagnostic Quiz",
        "description": "Analyzes acne, hyperpigmentation, sensitivity, and aging concerns to build custom routines."
      },
      {
        "title": "AM/PM Step-by-Step Routine Builder",
        "description": "Clearly indicates Step 1 (Cleanse), Step 2 (Correct), Step 3 (Hydrate), and Step 4 (Protect)."
      },
      {
        "title": "Automated Subscribe & Save",
        "description": "Subscribers enjoy 15% savings and automatic doorstep refills every 30, 60, or 90 days."
      },
      {
        "title": "Doctor's Clinical Notes",
        "description": "Direct advice on usage frequency, sunscreen pairing, and what to expect during initial weeks."
      }
    ],
    "seoKeywords": [
      "Dr Said Skin",
      "dermatologist skincare online",
      "medical grade skincare shop",
      "acne treatment regimen",
      "retinol cream subscription",
      "clinical vitamin C serum"
    ]
  },
  {
    "id": "gamingwise",
    "clientName": "GamingWise",
    "projectTitle": "Custom PC Builder & Gaming Gear Store",
    "domain": "gamingwise.tech",
    "tagline": "Multilingual PC part compatibility builder and dark aesthetic gaming gear catalog in Morocco",
    "description": "High-octane e-commerce store and custom PC builder platform for Morocco's premier esports hardware and gaming PC components distributor, featuring French-language hardware catalogs and part compatibility checking.",
    "category": "E-Commerce & Retail",
    "tags": [
      "Gaming Hardware",
      "PC Builder",
      "Morocco E-Commerce",
      "Esports Gear",
      "Hardware Catalog",
      "Shopify Store"
    ],
    "region": "Morocco",
    "gradient": "linear-gradient(135deg, #18181b, #7c3aed)",
    "image": "/portfolio-assets/gamingwise-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/gamingwise-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/gamingwise-pdf-mobile.png",
    "websiteUrl": "https://gamingwise.tech",
    "year": "2024",
    "aboutClient": "GamingWise is Morocco's top destination for competitive gamers and PC enthusiasts, supplying custom liquid-cooled gaming rigs, RTX graphics cards, mechanical keyboards, and high-refresh-rate esports monitors.",
    "challenge": "Building a custom PC requires ensuring that CPU sockets, motherboards, RAM clearances, and power supplies are 100% physically and electrically compatible, while catering to French-speaking Moroccan customers.",
    "solution": "Devsynx engineered a dark RGB-aesthetic gaming storefront featuring an interactive Custom PC Configurator with automated compatibility logic, localized Moroccan Dirham (MAD) pricing, and cash-on-delivery tracking across Morocco.",
    "whatWeDelivered": [
      "Dark gaming aesthetic e-commerce storefront with neon purple and cyan cyber accents",
      "Interactive Custom PC Builder with real-time socket and wattage compatibility checks",
      "Bilingual French and Arabic hardware catalog with granular technical specs (DPI, Hz, VRAM)",
      "Integrated Moroccan Cash on Delivery (Amana / CTM Express) order fulfillment",
      "Pre-built esports gaming PC bundles optimized for Fortnite, Valorant, and GTA V RP"
    ],
    "techStack": [
      {
        "category": "E-Commerce Core",
        "technologies": [
          "Shopify",
          "Liquid",
          "React Component Engine",
          "Tailwind CSS"
        ]
      },
      {
        "category": "PC Builder Engine",
        "technologies": [
          "Custom JavaScript Compatibility Logic",
          "Wattage Calculator",
          "Stock Sync API"
        ]
      },
      {
        "category": "Logistics & Local",
        "technologies": [
          "CTM Express Courier API",
          "MAD Currency Engine",
          "WhatsApp Gaming Desk"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Custom PC Orders",
        "value": "+180%",
        "description": "Increase in custom gaming PC orders built via the online configurator tool"
      },
      {
        "label": "Hardware Compatibility Error",
        "value": "0%",
        "description": "Completely prevented incompatible part purchases through automated logic"
      },
      {
        "label": "Average Basket Size",
        "value": "12,500 MAD",
        "description": "High average order value for complete gaming setups and GPU upgrades"
      }
    ],
    "keyFeatures": [
      {
        "title": "Automated Compatibility Engine",
        "description": "Prevents pairing incompatible CPUs and motherboards (e.g. Intel LGA1700 vs AMD AM5)."
      },
      {
        "title": "Real-Time FPS Performance Estimator",
        "description": "Estimates expected frames-per-second across popular games based on selected CPU & GPU."
      },
      {
        "title": "Power Supply Wattage Calculator",
        "description": "Calculates total system draw and recommends minimum safe PSU ratings automatically."
      },
      {
        "title": "Morocco-Wide Express Dispatch",
        "description": "Insured wooden-crate shipping for liquid-cooled PCs to Casablanca, Rabat, Marrakech, and Tangier."
      }
    ],
    "seoKeywords": [
      "GamingWise Maroc",
      "PC gamer Maroc",
      "achat carte graphique Maroc",
      "configurateur PC gamer",
      "ecran 144hz Casablanca",
      "materiel gaming Maroc"
    ]
  },
  {
    "id": "doughi",
    "clientName": "Doughi Cookies UK",
    "projectTitle": "Artisan Cookie Bakery & Flavor Drop Storefront",
    "domain": "doughi.co.uk",
    "tagline": "Vibrant D2C cookie storefront with timed batch release countdowns and next-day UK courier dispatch",
    "description": "Vibrant, mouth-watering direct-to-consumer gourmet cookie storefront for a UK artisan bakery brand, featuring timed weekly flavor drop countdowns, custom box builders, and next-day letterbox delivery logistics.",
    "category": "E-Commerce & Retail",
    "tags": [
      "Artisan Bakery",
      "Food E-Commerce",
      "D2C Brand",
      "Shopify Store",
      "Flavor Drops",
      "UK Courier"
    ],
    "region": "United Kingdom",
    "gradient": "linear-gradient(135deg, #1c1917, #f97316)",
    "image": "/portfolio-assets/doughi-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/doughi-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/doughi-pdf-mobile.png",
    "websiteUrl": "https://doughi.co.uk",
    "year": "2024",
    "aboutClient": "Doughi is an artisan UK bakery crafting oversized, gooey NYC-style stuffed cookies with viral flavor combinations like Pistachio Knafeh, Red Velvet Nutella, and Lotus Biscoff S'mores.",
    "challenge": "Fresh baked cookies must be dispatched on specific baking days to ensure peak freshness. The store needed an intuitive box builder (Box of 4, 6, or 12) with integrated dispatch calendar scheduling.",
    "solution": "Devsynx designed an energetic, appetizing Shopify store featuring a custom Pick-and-Mix Cookie Box Builder, dynamic batch drop countdowns, Royal Mail / DPD dispatch slot pickers, and mouth-watering macro food photography.",
    "whatWeDelivered": [
      "Appetizing, vibrant D2C bakery storefront engineered on Shopify with custom Liquid code",
      "Interactive Pick-and-Mix Box Builder (4-pack, 6-pack, 12-pack) with real-time flavor slots",
      "Weekly Batch Drop countdown timer triggering limited-stock frenzy checkouts",
      "Delivery date selector integrated with Royal Mail Tracked 24 and DPD Next Day",
      "Dietary and allergen filter highlighting vegan, gluten-free, and nut-safe options"
    ],
    "techStack": [
      {
        "category": "Storefront Engine",
        "technologies": [
          "Shopify",
          "Liquid",
          "Tailwind CSS",
          "JavaScript ES6"
        ]
      },
      {
        "category": "Custom Apps",
        "technologies": [
          "Pick-and-Mix Box Builder",
          "Delivery Date Scheduler",
          "DPD Logistics API"
        ]
      },
      {
        "category": "Marketing & Social",
        "technologies": [
          "TikTok Shop Integration",
          "Klaviyo Drop Alerts",
          "Instagram Feed Sync"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Drop Sellout Time",
        "value": "15 Mins",
        "description": "Weekly cookie batch inventory consistently sells out within minutes of drop launch"
      },
      {
        "label": "Box Builder Cart Value",
        "value": "+38%",
        "description": "Higher average spend driven by customers filling 6-pack and 12-pack boxes"
      },
      {
        "label": "Repeat Orders",
        "value": "44%",
        "description": "High customer loyalty and monthly repeat orders from cookie enthusiasts"
      }
    ],
    "keyFeatures": [
      {
        "title": "Pick-and-Mix Box Builder",
        "description": "Visual cookie tray where customers click flavors to fill their custom 6 or 12 box."
      },
      {
        "title": "Gooey Cross-Section Food Photography",
        "description": "Macro closeups showing melting chocolate centers, toasted marshmallows, and caramel drizzles."
      },
      {
        "title": "Bake & Dispatch Slot Selector",
        "description": "Customers pick their exact desired delivery date for birthdays, events, or weekend treats."
      },
      {
        "title": "Reheat & Storage Guide",
        "description": "Step-by-step oven and microwave warm-up instructions to recreate bakery fresh gooeyness at home."
      }
    ],
    "seoKeywords": [
      "Doughi Cookies",
      "NYC cookies UK",
      "gourmet cookies delivery",
      "stuffed cookies London",
      "fresh baked cookies by post",
      "artisan bakery UK"
    ]
  },
  {
    "id": "signature-design-by-ashley",
    "clientName": "Signature Design by Ashley",
    "projectTitle": "US Designer Furniture & Living Room Catalog",
    "domain": "signaturedesign-by-ashley.com",
    "tagline": "Immersive room-by-room furniture visualizer and large-scale home decor freight fulfillment store",
    "description": "Enterprise home furnishings e-commerce catalog showcasing sectionals, bedroom suites, dining collections, and home office decor with room-based spatial navigation and white-glove freight delivery.",
    "category": "E-Commerce & Retail",
    "tags": [
      "Furniture E-Commerce",
      "Home Decor",
      "Room Visualizer",
      "Freight Shipping",
      "Shopify Store",
      "High-Ticket Retail"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #1c1917, #78350f)",
    "image": "/portfolio-assets/signature-design-by-ashley-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/signature-design-by-ashley-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/signature-design-by-ashley-pdf-mobile.png",
    "websiteUrl": "https://signaturedesign-by-ashley.com",
    "year": "2024",
    "aboutClient": "Signature Design by Ashley is one of America's most recognizable furniture brands, manufacturing quality sectionals, reclining sofas, farmhouse dining sets, and master bedroom collections for homes nationwide.",
    "challenge": "Furniture is a high-ticket, physically large purchase where buyers worry about room dimensions, fabric durability, and freight delivery logistics. The digital catalog needed spatial room context and freight calculation transparency.",
    "solution": "Devsynx optimized the digital catalog experience with room-by-room lifestyle staging photography, detailed dimensional schematics (doorway clearance checks), white-glove delivery scheduling, and fabric swatch ordering.",
    "whatWeDelivered": [
      "Expansive, high-aesthetic furniture catalog storefront on Shopify Plus",
      "Room-based navigation: Living Room, Bedroom, Dining, Home Office, and Outdoor",
      "Detailed 3D dimension schematics ensuring sectionals fit through standard doorways and elevators",
      "Freight zip-code delivery calculator with White-Glove inside placement options",
      "Fabric swatch sample ordering kit allowing customers to test textures at home"
    ],
    "techStack": [
      {
        "category": "E-Commerce Architecture",
        "technologies": [
          "Shopify Plus",
          "Liquid",
          "React Custom Components",
          "GraphQL"
        ]
      },
      {
        "category": "Freight & Fulfillment",
        "technologies": [
          "LTL Freight API",
          "Zip-Code Delivery Radius Engine",
          "Scheduled Delivery Desk"
        ]
      },
      {
        "category": "Performance & Visuals",
        "technologies": [
          "High-Res Room Staging",
          "Cloudflare CDN",
          "Lazy-Loaded Asset Pipeline"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Return Rate Reduction",
        "value": "-24%",
        "description": "Decrease in furniture returns due to explicit doorway clearance schematics"
      },
      {
        "label": "Average Order Value",
        "value": "$1,850",
        "description": "High cart values driven by complete living room and bedroom set bundles"
      },
      {
        "label": "White-Glove Uptake",
        "value": "62%",
        "description": "Customers choosing white-glove assembly delivery service at checkout"
      }
    ],
    "keyFeatures": [
      {
        "title": "Doorway & Hallway Fit Checker",
        "description": "Dimensions guide showing package box sizes vs standard apartment door frames to prevent delivery failure."
      },
      {
        "title": "Complete Collection Bundler",
        "description": "Add matching coffee tables, end tables, and area rugs with a single click at bundle discounts."
      },
      {
        "title": "LTL Freight Tracking Integration",
        "description": "Provides customers with live freight GPS updates and appointment delivery confirmation calls."
      },
      {
        "title": "Stain-Resistant Fabric Testing Proof",
        "description": "Video demonstrations showing water and coffee spills wiping off Next-Gen performance fabrics."
      }
    ],
    "seoKeywords": [
      "Signature Design by Ashley",
      "sectional sofas online",
      "living room furniture sets",
      "bedroom suites delivery",
      "rustic dining tables US",
      "white glove furniture delivery"
    ]
  },
  {
    "id": "solettos",
    "clientName": "Solettos Footwear Comfort",
    "projectTitle": "D2C Orthotic Cushion & High-Heel Inserts",
    "domain": "solettos.com",
    "tagline": "High-converting single-product D2C storefront with anatomical diagrams, influencer reviews, and bundle pricing",
    "description": "High-converting single-product direct-to-consumer storefront for ergonomic ball-of-foot cushions, engineered with podiatrist endorsements, anatomical pressure relief diagrams, and rapid checkout flows.",
    "category": "E-Commerce & Retail",
    "tags": [
      "D2C Footwear",
      "Single Product Store",
      "Orthotic Cushion",
      "Shopify Store",
      "Conversion Rate",
      "High Heels"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #18181b, #ec4899)",
    "image": "/portfolio-assets/solettos-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/solettos-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/solettos-pdf-mobile.png",
    "websiteUrl": "https://www.solettos.com",
    "year": "2024",
    "aboutClient": "Solettos is a viral D2C women's wellness and footwear accessory brand creating medical-grade silicone metatarsal cushions that eliminate ball-of-foot pain when wearing high heels and dress shoes.",
    "challenge": "Single-product D2C stores live or die on conversion rate. The brand needed an airtight sales page that educated shoppers on foot anatomy, answered pain points, demonstrated shoe fit, and incentivized buying multi-pairs.",
    "solution": "Devsynx engineered a high-conversion single-product Shopify sales page featuring anatomical pressure heat maps, podiatrist video testimonials, buy-more-save-more multi-pair bundles, and instant 1-tap checkout.",
    "whatWeDelivered": [
      "High-converting single-product D2C Shopify sales architecture",
      "Interactive anatomical heat-map demonstrating 80% metatarsal pressure relief",
      "Multi-pair bundle discount tiers: 'Buy 2 Pairs (Most Popular)' and 'Buy 4 Pairs (Best Value)'",
      "Video review carousel featuring real women walking in 4-inch stiletto heels pain-free",
      "30-Day Pain-Free Walk Guarantee trust badge and frictionless returns flow"
    ],
    "techStack": [
      {
        "category": "Storefront Platform",
        "technologies": [
          "Shopify",
          "Liquid",
          "Tailwind CSS",
          "JavaScript ES6"
        ]
      },
      {
        "category": "Conversion & Upsell",
        "technologies": [
          "Custom Tiered Bundle Builder",
          "Sticky Mobile Cart Bar",
          "Loox Reviews"
        ]
      },
      {
        "category": "Payments & Tracking",
        "technologies": [
          "Shop Pay / Apple Pay",
          "Meta Pixel CAPI",
          "TikTok Ads CAPI"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Store Conversion Rate",
        "value": "5.4%",
        "description": "High conversion on cold mobile ad traffic driven by anatomical proof"
      },
      {
        "label": "Multi-Pair Bundle Rate",
        "value": "68%",
        "description": "Of customers purchase 2 or more pairs to outfit multiple pairs of heels"
      },
      {
        "label": "Return Rate",
        "value": "<2%",
        "description": "Extremely low return rate backed by authentic product efficacy"
      }
    ],
    "keyFeatures": [
      {
        "title": "Anatomical Pressure Heat Map",
        "description": "Visual comparison illustrating barefoot pressure concentration vs cushioned relief."
      },
      {
        "title": "Fits All Shoe Types",
        "description": "Demonstrates invisible fit in open-toe stilettos, pumps, boots, and strappy sandals."
      },
      {
        "title": "Sticky One-Tap Checkout Bar",
        "description": "Floating mobile checkout bar ensuring the 'Claim Your Pairs' button is always accessible."
      },
      {
        "title": "Washable Medical-Grade Silicone",
        "description": "Highlights reusable, washable, and antibacterial skin-safe material specifications."
      }
    ],
    "seoKeywords": [
      "Solettos",
      "high heel cushions",
      "ball of foot pain relief",
      "metatarsal pads for heels",
      "comfortable stiletto inserts",
      "silicone foot cushions"
    ]
  },
  {
    "id": "superhuman-mail",
    "clientName": "Superhuman Mail",
    "projectTitle": "Blazing-Fast Productivity Email Experience",
    "domain": "Google Play Store",
    "tagline": "Sub-100ms keyboard-first mobile email client featuring offline sync and AI-assisted reply drafting",
    "description": "High-performance Android mobile application development and optimization for the world's fastest productivity email client, engineered with sub-100ms triage interactions, offline search, and AI email drafting.",
    "category": "Mobile & Social Apps",
    "tags": [
      "Android App",
      "Mobile Productivity",
      "Email Client",
      "Kotlin",
      "Sub-100ms Speed",
      "AI Writing"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #09090b, #4f46e5)",
    "image": "/portfolio-assets/superhuman-mail-store-listing.png",
    "desktopImage": "/portfolio-assets/superhuman-mail-store-listing.png",
    "mobileImage": "/portfolio-assets/superhuman-mail-store-listing.png",
    "websiteUrl": "https://play.google.com/store/apps/details?id=com.superhuman.mail",
    "year": "2024",
    "aboutClient": "Superhuman is the gold standard in email productivity, used by top executives, founders, and knowledge workers globally to reach Inbox Zero twice as fast through keyboard shortcuts, speed, and design.",
    "challenge": "Android devices vary widely in CPU power and memory constraints. Achieving Superhuman's legendary sub-100ms interaction speed and instantaneous local database search across 50,000+ cached emails required native Android engineering mastery.",
    "solution": "Devsynx contributed to native Android performance optimization: refining offline SQLite/Room local database caching, optimizing threading on UI message list renders, and streamlining AI smart reply generation.",
    "whatWeDelivered": [
      "Native Android performance profiling eliminating micro-stutters and frame drops",
      "High-speed local message indexing engine supporting instantaneous full-text offline search",
      "Gesture-based swipe triage architecture matching desktop keyboard shortcuts (Archive, Remind, Snooze)",
      "AI-assisted writing assistant with custom voice and tone matching",
      "Read status tracking and automated scheduled send queues"
    ],
    "techStack": [
      {
        "category": "Mobile OS & Native",
        "technologies": [
          "Kotlin",
          "Android Jetpack Compose",
          "Coroutines & Flow",
          "Room SQLite Database"
        ]
      },
      {
        "category": "Sync & Protocols",
        "technologies": [
          "IMAP / Gmail API",
          "Microsoft Graph API",
          "Background WorkManager"
        ]
      },
      {
        "category": "AI & Intelligence",
        "technologies": [
          "OpenAI On-Device AI Integration",
          "Natural Language Processing"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Triage Speed",
        "value": "<100ms",
        "description": "Every swipe, archive, and open interaction renders in under 100 milliseconds"
      },
      {
        "label": "Play Store Rating",
        "value": "4.8 \u2605",
        "description": "High user rating across verified enterprise executives and founders"
      },
      {
        "label": "Time Saved Daily",
        "value": "45 Mins",
        "description": "Average daily time saved per user processing high-volume corporate email"
      }
    ],
    "keyFeatures": [
      {
        "title": "Sub-100ms Interaction Speed",
        "description": "Engineered for speed with zero loading spinners; emails open instantaneously from local cache."
      },
      {
        "title": "Superhuman AI Auto-Drafting",
        "description": "Turn brief 1-line notes into full, polite executive responses matching your exact writing style."
      },
      {
        "title": "Offline-First Email Triage",
        "description": "Read, draft, and triage emails on airplanes with zero internet; syncs automatically upon reconnection."
      },
      {
        "title": "Read Status Notification",
        "description": "Know the exact moment a prospect opens your email to follow up with perfect timing."
      }
    ],
    "seoKeywords": [
      "Superhuman Mail Android",
      "fastest email app",
      "Inbox Zero mobile client",
      "AI email writer",
      "executive email productivity",
      "business email app Android"
    ]
  },
  {
    "id": "glitchy-digital-marketing",
    "clientName": "Glitchy Digital Marketing",
    "projectTitle": "Agency Analytics & Client Squad Mobile App",
    "domain": "Apple App Store",
    "tagline": "Real-time ROAS tracking, multi-client campaign management, and collaborative squad chat on iOS",
    "description": "Native iOS mobile application built for a digital marketing agency and its enterprise clients, providing live ad spend dashboards, push notification ROI alerts, creative approvals, and dedicated squad messaging.",
    "category": "Mobile & Social Apps",
    "tags": [
      "iOS App",
      "SwiftUI",
      "Agency Mobile App",
      "Ad Analytics",
      "App Store",
      "Real-Time Chat"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #18181b, #06b6d4)",
    "image": "/portfolio-assets/glitchy-digital-marketing-store-listing.png",
    "desktopImage": "/portfolio-assets/glitchy-digital-marketing-store-listing.png",
    "mobileImage": "/portfolio-assets/glitchy-digital-marketing-store-listing.png",
    "websiteUrl": "https://apps.apple.com/pk/app/glitchy-digital-marketing/id6738339402",
    "year": "2024",
    "aboutClient": "Glitchy Digital Marketing is a performance marketing agency managing multi-channel paid media for fast-growth startups that required a proprietary mobile client portal on the Apple App Store.",
    "challenge": "Clients demand instant visibility into their ad spend, ROAS, and live leads without logging into complicated desktop dashboards like Meta Ads Manager or Google Analytics.",
    "solution": "Devsynx engineered and published a native iOS application built on SwiftUI featuring real-time ad performance widgets, push alerts when key milestone sales occur, and a direct squad chat connecting clients with media buyers.",
    "whatWeDelivered": [
      "Native iOS mobile application published to the official Apple App Store",
      "Real-time Meta, Google, and TikTok ad spend and ROAS synchronization",
      "Interactive daily/weekly/monthly revenue and return-on-ad-spend charts",
      "Push notification alerts for high-value sales and budget milestone completions",
      "In-app creative review tool allowing clients to approve video ads with a single tap"
    ],
    "techStack": [
      {
        "category": "Mobile Client",
        "technologies": [
          "Swift",
          "SwiftUI",
          "Combine Framework",
          "WidgetKit"
        ]
      },
      {
        "category": "Backend & Sync",
        "technologies": [
          "Node.js API",
          "PostgreSQL",
          "Meta Graph API",
          "Google Ads API"
        ]
      },
      {
        "category": "Push & Chat",
        "technologies": [
          "Apple Push Notification service (APNs)",
          "WebSockets",
          "Firebase Cloud Messaging"
        ]
      }
    ],
    "metrics": [
      {
        "label": "App Store Rating",
        "value": "5.0 \u2605",
        "description": "Flawless user review score on Apple App Store for client portal usability"
      },
      {
        "label": "Client Engagement",
        "value": "4.8x/day",
        "description": "Average daily app opens by brand founders tracking live ad performance"
      },
      {
        "label": "Creative Approval Time",
        "value": "3 Hours",
        "description": "Reduced ad creative approval cycle from 3 days down to 3 hours via mobile taps"
      }
    ],
    "keyFeatures": [
      {
        "title": "Real-Time Live ROAS Widget",
        "description": "iOS Home Screen and Lock Screen widgets showing today's ad spend, revenue, and return on ad spend."
      },
      {
        "title": "One-Tap Creative Approvals",
        "description": "Watch video ad drafts on mobile and tap 'Approve' or 'Request Changes' with voice notes."
      },
      {
        "title": "Agency Squad Direct Chat",
        "description": "Private Slack-style messaging channel connecting the brand founder directly to their assigned media buyer."
      },
      {
        "title": "Monthly Strategic Reports",
        "description": "Download beautifully formatted PDF monthly executive performance summaries directly from the app."
      }
    ],
    "seoKeywords": [
      "Glitchy Digital Marketing",
      "agency client portal app",
      "iOS ad tracking app",
      "marketing agency mobile app",
      "real time ROAS tracker",
      "agency squad chat"
    ]
  },
  {
    "id": "progenius-students-seo",
    "clientName": "ProGenius Students SEO",
    "projectTitle": "Technical SEO Overhaul & Organic Traffic Growth",
    "domain": "progeniusstudents.com",
    "tagline": "22.6k organic clicks and 139k impressions in 90 days with technical cleanup and schema optimization",
    "description": "Comprehensive technical SEO recovery and educational search optimization case study for ProGenius Students, driving 22.6k organic clicks, 139k search impressions, and an average ranking position of 7.8 in 90 days.",
    "category": "SEO & Growth",
    "tags": [
      "Technical SEO",
      "Case Study",
      "Search Console Growth",
      "Schema Markup",
      "Educational SEO",
      "Core Web Vitals"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #022c22, #059669)",
    "image": "/portfolio-assets/progenius-students-seo-mockup.jpg",
    "desktopImage": "/portfolio-assets/progenius-students-seo-desktop.png",
    "mobileImage": "/portfolio-assets/progenius-students-seo-mobile.png",
    "websiteUrl": "https://progeniusstudents.com",
    "year": "2024",
    "aboutClient": "ProGenius Students is an academic preparation, study skills, and standardized tutoring platform helping high school and college students excel in STEM, AP examinations, and collegiate admissions.",
    "challenge": "The website was suffering from indexing bottlenecks, broken internal canonical links, unoptimized heading hierarchies, and zero structured data, causing organic impressions to stagnate under 5,000 monthly views.",
    "solution": "Devsynx executed a 90-day technical SEO overhaul: fixing crawl errors, rewriting meta titles and descriptions for high click-through rates, deploying EducationalOrganization schema, and clustering content by curriculum topics.",
    "whatWeDelivered": [
      "Full technical SEO audit resolving 180+ broken links, crawl errors, and duplicate title tags",
      "Comprehensive keyword-to-page mapping targeting high-intent student academic queries",
      "Structured Course, FAQPage, and LearningResource JSON-LD schema deployment",
      "Content expansion across 40+ high-traffic study guides and test preparation hubs",
      "Verified Google Search Console growth: 22.6k clicks and 139k impressions in 90 days"
    ],
    "techStack": [
      {
        "category": "SEO Platforms",
        "technologies": [
          "Google Search Console",
          "Google Analytics 4",
          "Ahrefs",
          "Screaming Frog"
        ]
      },
      {
        "category": "Schema & Structure",
        "technologies": [
          "JSON-LD Schema Markup",
          "Canonical Architecture",
          "XML Sitemaps"
        ]
      },
      {
        "category": "Performance Engine",
        "technologies": [
          "Core Web Vitals Remediation",
          "WebP Image Optimization",
          "Minified CSS/JS"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Organic Clicks",
        "value": "22.6K",
        "description": "Verified Google Search Console clicks recorded in a 90-day sprint"
      },
      {
        "label": "Total Impressions",
        "value": "139K",
        "description": "Search impressions across high-intent academic preparation terms"
      },
      {
        "label": "Average SERP Position",
        "value": "7.8",
        "description": "Top-page average search position across indexed academic subjects"
      },
      {
        "label": "Latest 28 Days",
        "value": "8.76K clicks",
        "description": "Google Search Console, 10 Oct – 6 Nov 2026: 29.3K impressions, 29.9% CTR, average position 6.6, all organic"
      }
    ],
    "keyFeatures": [
      {
        "title": "16.2% High Click-Through Rate",
        "description": "Rewrote SERP snippet titles and meta descriptions using psychological curiosity and clarity hooks."
      },
      {
        "title": "Educational Schema Architecture",
        "description": "Enabled rich snippet star ratings, test FAQs, and course duration badges in Google search results."
      },
      {
        "title": "Core Web Vitals Optimization",
        "description": "Reduced Largest Contentful Paint (LCP) from 3.8s down to 1.1s for seamless student mobile reading."
      },
      {
        "title": "Internal Link Topic Silos",
        "description": "Engineered contextual cross-linking linking foundational study guides to high-converting tutoring packages."
      }
    ],
    "seoKeywords": [
      "ProGenius Students SEO",
      "academic tutoring SEO case study",
      "technical SEO audit results",
      "Google Search Console growth",
      "educational schema optimization",
      "organic traffic growth"
    ]
  },
  {
    "id": "ui-ux-design-portfolio",
    "clientName": "Devsynx UI/UX Design System",
    "projectTitle": "Enterprise Figma Architecture & Prototyping",
    "domain": "figma.com",
    "tagline": "Production-ready design system with tokenized components, interactive micro-animations, and complete user journeys",
    "description": "Comprehensive enterprise UI/UX design portfolio and Figma component design system showcasing complete user journeys, high-fidelity responsive wireframes, design tokens, and developer handoff documentation.",
    "category": "Web Development",
    "tags": [
      "UI/UX Design",
      "Figma Design System",
      "Design Tokens",
      "Wireframing",
      "Prototyping",
      "Design Engineering"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #18181b, #a855f7)",
    "image": "/portfolio-assets/ui-ux-figma-thumb.png",
    "desktopImage": "/portfolio-assets/ui-ux-figma-thumb.png",
    "mobileImage": "/portfolio-assets/ui-ux-figma-thumb.png",
    "websiteUrl": "https://devsynx.com",
    "year": "2024",
    "aboutClient": "Devsynx Design Systems Team crafts world-class user interfaces, responsive design architectures, and pixel-perfect design systems for software startups and enterprise platforms globally.",
    "challenge": "SaaS and mobile products often suffer from inconsistent typography, mismatched button states, chaotic color palettes, and friction in developer handoff when design systems lack rigid tokenization.",
    "solution": "Devsynx established a battle-tested Figma design system with tokenized color palettes, semantic typography, auto-layout components, interactive micro-animations, and comprehensive developer specs.",
    "whatWeDelivered": [
      "Complete enterprise Figma design system with 250+ responsive auto-layout components",
      "Tokenized color schemes supporting seamless light and dark mode switching",
      "Interactive high-fidelity prototypes demonstrating real user onboarding journeys",
      "Comprehensive typography scales calibrated for optimal legibility across mobile and desktop",
      "Developer handoff documentation detailing padding, corner radii, and animation easings"
    ],
    "techStack": [
      {
        "category": "Design & Prototyping",
        "technologies": [
          "Figma",
          "Auto-Layout 5.0",
          "Component Variants",
          "Smart Animate"
        ]
      },
      {
        "category": "Design Tokens",
        "technologies": [
          "Tokens Studio",
          "Style Dictionary",
          "Tailwind Theme Tokens"
        ]
      },
      {
        "category": "Handoff & Specs",
        "technologies": [
          "Storybook",
          "Zeroheight",
          "SVG Asset Export Pipeline"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Development Speed",
        "value": "2.5x",
        "description": "Faster frontend development velocity using pre-tokenized design components"
      },
      {
        "label": "Component Consistency",
        "value": "100%",
        "description": "Consistent UI implementation across web, iOS, and Android platforms"
      },
      {
        "label": "Design System Adoption",
        "value": "15+ Teams",
        "description": "Client engineering teams actively building software on top of Devsynx Figma tokens"
      }
    ],
    "keyFeatures": [
      {
        "title": "Tokenized Dark & Light Themes",
        "description": "Instantly switch entire application dashboards between obsidian dark and clean white modes."
      },
      {
        "title": "Interactive Micro-Animation Specs",
        "description": "Precise spring and ease-out curves defined for button hovers, modals, and tab switches."
      },
      {
        "title": "Accessible WCAG AAA Contrast",
        "description": "Every text and background color combination tested to exceed strict accessibility standards."
      },
      {
        "title": "Developer-Ready Component Handoff",
        "description": "Every button, input, modal, and card is pre-mapped directly to matching React/Tailwind classes."
      }
    ],
    "seoKeywords": [
      "UI UX design portfolio",
      "Figma design system",
      "enterprise SaaS UI design",
      "design tokens Tailwind",
      "mobile app prototype Figma",
      "developer handoff system"
    ]
  },
  {
    "id": "fix-it-bilal",
    "clientName": "Fix It Bilal",
    "projectTitle": "On-Demand Handyman & Home Maintenance Portal",
    "domain": "fixitbilal.com",
    "tagline": "Local home repair, electrical, and plumbing service booking with emergency dispatch and upfront pricing",
    "description": "On-demand local home maintenance and handyman service booking platform in Dubai, featuring upfront pricing, emergency same-day dispatch, customer reviews, and direct WhatsApp booking.",
    "category": "Web Development",
    "tags": [
      "Handyman Services",
      "Home Maintenance",
      "Dubai Services",
      "Next.js",
      "Local SEO",
      "Emergency Booking"
    ],
    "region": "United Arab Emirates",
    "gradient": "linear-gradient(135deg, #082f49, #0284c7)",
    "image": "/portfolio-assets/fix-it-bilal-mockup.jpg",
    "desktopImage": "/portfolio-assets/fix-it-bilal-desktop.png",
    "mobileImage": "/portfolio-assets/fix-it-bilal-mobile.png",
    "websiteUrl": "https://fixitbilal.com",
    "year": "2024",
    "aboutClient": "Fix It Bilal is a trusted home repair and technical maintenance service in Dubai, providing certified electricians, plumbers, AC technicians, and painters to residential villas and commercial offices.",
    "challenge": "Home service customers face emergency issues (AC breakdown, water leak) and require immediate mobile phone booking, clear pricing, and proof of technician trust without confusing multi-step forms.",
    "solution": "Devsynx engineered a mobile-first local service platform with instant WhatsApp click-to-book buttons, transparent upfront rate cards, emergency dispatch response timers, and localized Dubai neighborhood SEO.",
    "whatWeDelivered": [
      "Mobile-first home services booking platform engineered on Next.js",
      "Instant WhatsApp emergency dispatch button with pre-filled service address templates",
      "Clear upfront pricing menu for AC repair, plumbing, electrical, carpentry, and painting",
      "Customer verified review badges and photographic before/after repair showcase",
      "Localized neighborhood landing pages covering Dubai Marina, JVC, Springs, and Downtown"
    ],
    "techStack": [
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS"
        ]
      },
      {
        "category": "Local SEO & Mobile",
        "technologies": [
          "LocalBusiness Schema",
          "Google Maps Embed API",
          "Mobile Tap-to-Call"
        ]
      },
      {
        "category": "Cloud & Hosting",
        "technologies": [
          "Cloudflare SSL",
          "Vercel Edge Network",
          "HSTS Encryption"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Monthly Booking Calls",
        "value": "350+",
        "description": "Emergency service booking calls and WhatsApp inquiries generated monthly"
      },
      {
        "label": "Mobile Traffic Share",
        "value": "88%",
        "description": "Of total website traffic searching for urgent handyman services on mobile devices"
      },
      {
        "label": "Average Response Time",
        "value": "<5 Mins",
        "description": "Rapid customer support response to incoming home maintenance emergencies"
      }
    ],
    "keyFeatures": [
      {
        "title": "1-Tap Emergency WhatsApp Dispatch",
        "description": "Allows homeowners to snap a photo of the leak or AC error code and send it directly to technicians."
      },
      {
        "title": "Transparent Upfront Rate Card",
        "description": "No hidden fees: clearly states inspection charges, hourly labor, and spare parts estimates."
      },
      {
        "title": "Dubai Community Coverage Map",
        "description": "Quick neighborhood selector confirming 30-minute arrival times for JVC, Marina, and Arabian Ranches."
      },
      {
        "title": "Certified Technician Trust Badges",
        "description": "Highlights trade licenses, background-checked technicians, and 30-day workmanship warranties."
      }
    ],
    "seoKeywords": [
      "Fix It Bilal",
      "handyman Dubai",
      "emergency AC repair Dubai",
      "plumber near me JVC",
      "home maintenance Dubai Marina",
      "electrician in Dubai"
    ]
  },
  {
    "id": "horizon-sole",
    "clientName": "Horizon Sole",
    "projectTitle": "Performance Footwear & Sneakers Brand",
    "domain": "horizonsole.com",
    "tagline": "Modern footwear storefront with dynamic size selector, 360 spin viewer, and fast checkout",
    "description": "Direct-to-consumer athletic footwear and lifestyle sneaker brand e-commerce storefront, featuring ergonomic cushioning storytelling, dynamic shoe size recommendations, and high-conversion mobile checkouts.",
    "category": "E-Commerce & Retail",
    "tags": [
      "Athletic Footwear",
      "Sneakers Brand",
      "D2C E-Commerce",
      "Shopify Store",
      "Footwear Ergonomics",
      "Lifestyle"
    ],
    "region": "United States",
    "gradient": "linear-gradient(135deg, #082f49, #06b6d4)",
    "image": "/portfolio-assets/horizon-sole-mockup.jpg",
    "desktopImage": "/portfolio-assets/horizon-sole-desktop.png",
    "mobileImage": "/portfolio-assets/horizon-sole-mobile.png",
    "websiteUrl": "https://horizonsole.com",
    "year": "2024",
    "aboutClient": "Horizon Sole designs high-performance running sneakers and all-day walking shoes that combine athletic responsive foam soles with minimalist Scandinavian street aesthetics.",
    "challenge": "Footwear has high return rates when customers miscalculate shoe widths or heel cups. The brand needed an intuitive size guidance system and dynamic visual storytelling to sell shoes online with confidence.",
    "solution": "Devsynx created a sleek, athletic e-commerce storefront featuring an interactive 3D sole cushioning breakdown, an interactive fit finder quiz, and seamless one-click mobile checkout via Shop Pay and Apple Pay.",
    "whatWeDelivered": [
      "Athletic streetwear e-commerce platform engineered on Shopify with custom Liquid components",
      "Interactive sole anatomy scrollytelling section highlighting energy-return nitrogen foam",
      "Fit Finder quiz comparing shoe sizing against Nike, Adidas, and Brooks models",
      "Multi-angle 360 photography viewer showing outsole tread, heel cup, and breathable mesh",
      "30-Day 'Walk on Clouds' wear test guarantee policy with automated returns"
    ],
    "techStack": [
      {
        "category": "Storefront Platform",
        "technologies": [
          "Shopify Plus",
          "Liquid",
          "Tailwind CSS",
          "JavaScript ES6"
        ]
      },
      {
        "category": "Fit & Conversion",
        "technologies": [
          "Fit Finder Quiz Engine",
          "Loox Photo Reviews",
          "Apple Pay / Shop Pay"
        ]
      },
      {
        "category": "Media Optimization",
        "technologies": [
          "Cloudinary 360 Spin",
          "WebP Image Compression",
          "Fast CDN"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Store Conversion Rate",
        "value": "4.2%",
        "description": "High conversion on social media ad traffic driven by fit finder accuracy"
      },
      {
        "label": "Sizing Return Rate",
        "value": "<3.5%",
        "description": "Extremely low footwear return rate achieved through accurate brand comparison sizing"
      },
      {
        "label": "Customer Satisfaction",
        "value": "4.9 \u2605",
        "description": "Top-tier rating based on all-day arch support and walking comfort"
      }
    ],
    "keyFeatures": [
      {
        "title": "Energy-Return Foam Breakdown",
        "description": "Interactive diagram demonstrating shock absorption and forward propulsion technology."
      },
      {
        "title": "Brand Size Comparison Quiz",
        "description": "Input your current running shoe brand and size to receive the perfect Horizon Sole fit recommendation."
      },
      {
        "title": "360-Degree Rotation Spin",
        "description": "Drag to spin sneakers and inspect breathable knit patterns, reflective heel tabs, and grip lugs."
      },
      {
        "title": "1-Tap Mobile Shop Pay",
        "description": "Lightning-fast mobile checkout allowing customers to buy sneakers in under 15 seconds."
      }
    ],
    "seoKeywords": [
      "Horizon Sole",
      "all day walking shoes",
      "running sneakers online",
      "comfortable athletic footwear",
      "cushioned running shoes",
      "D2C sneaker brand"
    ]
  },
  {
    "id": "inspired-by-gaurav",
    "clientName": "Inspired by Gaurav",
    "projectTitle": "E-Commerce Growth Agency & Brand Accelerator",
    "domain": "inspiredbygaurav.com",
    "tagline": "High-contrast luxury growth agency showcasing 7-figure scaling case studies for beauty, skincare, and apparel",
    "description": "High-performance digital growth agency and e-commerce consultancy platform featuring dark obsidian aesthetics, vibrant amber gradients, verified 7-figure brand revenue dashboards, and founder scaling case studies.",
    "category": "Web Development",
    "tags": [
      "Growth Agency",
      "E-Commerce Scaling",
      "Performance Marketing",
      "React",
      "Brand Showcase",
      "7-Figure Funnels"
    ],
    "region": "India / US",
    "gradient": "linear-gradient(135deg, #1c1917, #f97316)",
    "image": "/portfolio-assets/inspired-by-gaurav-mockup.jpg",
    "desktopImage": "/portfolio-assets/inspired-by-gaurav-desktop.png",
    "mobileImage": "/portfolio-assets/inspired-by-gaurav-mobile.png",
    "websiteUrl": "https://inspiredbygaurav.com",
    "year": "2024",
    "aboutClient": "Inspired by Gaurav is an elite direct-to-consumer brand accelerator and growth agency scaling premium fashion, beauty, skincare, and jewelry brands across North America and South Asia to 7-figure monthly run rates.",
    "challenge": "E-commerce founders are bombarded with generic marketing agency claims. The agency required an ultra-premium, dark-aesthetic website that proved scaling capabilities through unassailable revenue dashboards and client brand carousels.",
    "solution": "Devsynx engineered a high-impact digital experience featuring dark mode with warm orange-to-gold gradient accents, filterable case study cards across beauty and apparel, and an interactive revenue audit scheduler.",
    "whatWeDelivered": [
      "Luxury growth agency web platform engineered in Vite/React and Next.js",
      "Filterable client brand showcase cards for skincare, beauty, supplements, apparel, and jewelry",
      "Verified Shopify and Stripe 7-figure scaling revenue proof carousels",
      "Proprietary 4-step 'Scale Beyond 7-Figures' growth methodology breakdown",
      "Executive revenue audit and growth strategy consultation scheduling calendar"
    ],
    "techStack": [
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion"
        ]
      },
      {
        "category": "Visuals & Animation",
        "technologies": [
          "Lucide Icons",
          "Custom Gradient Engine",
          "GSAP ScrollTrigger"
        ]
      },
      {
        "category": "Integrations",
        "technologies": [
          "Calendly API",
          "HubSpot CRM",
          "Cloudflare Security"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Client Revenue Scaled",
        "value": "$35M+",
        "description": "Total verified e-commerce revenue scaled across partner brand accounts"
      },
      {
        "label": "Average Brand Growth",
        "value": "310%",
        "description": "Average year-over-year revenue growth achieved for portfolio brands"
      },
      {
        "label": "Consultation Inquiries",
        "value": "+175%",
        "description": "Increase in qualified 7-figure brand founder strategy applications"
      }
    ],
    "keyFeatures": [
      {
        "title": "Filterable Brand Showcase",
        "description": "Explore scaling case studies categorized by industry: Skincare, Apparel, Jewelry, and Wellness."
      },
      {
        "title": "Live ROAS & Scale Dashboards",
        "description": "Transparent breakdowns of ad spend, customer acquisition cost (CAC), and blended return on ad spend."
      },
      {
        "title": "The 4-Pillar Growth Engine",
        "description": "Detailed walkthrough of Creative Production, Media Buying, CRO, and Lifetime Value Retention."
      },
      {
        "title": "Founder Audit Request Funnel",
        "description": "High-intent questionnaire capturing store URL, monthly ad budget, and current revenue hurdles."
      }
    ],
    "seoKeywords": [
      "Inspired by Gaurav",
      "ecommerce growth agency",
      "scale DTC brands 7 figures",
      "Shopify scaling consultant",
      "beauty brand marketing agency",
      "ecommerce performance agency"
    ]
  },
  {
    "id": "devsynx-platform",
    "clientName": "DEVSYNX Platform",
    "projectTitle": "High-Performance Next.js Agency & Engineering Engine",
    "domain": "devsynx.com",
    "tagline": "Ultra-modern Next.js 15 digital engineering platform featuring static rendering, dark glassmorphism, and live portfolio showcase",
    "description": "Our own flagship digital software engineering agency platform built on Next.js 15 App Router, delivering sub-second page transitions, dynamic case studies, SEO architecture, and interactive client intake flows.",
    "category": "Web Development",
    "tags": [
      "Next.js 15",
      "Digital Agency",
      "Full Stack Engineering",
      "SEO Architecture",
      "Dark Glassmorphism",
      "Static Export"
    ],
    "region": "Global",
    "gradient": "linear-gradient(135deg, #050b0e, #06909d)",
    "image": "/portfolio-assets/devsynx-pdf-mockup.jpg",
    "desktopImage": "/portfolio-assets/devsynx-pdf-desktop.png",
    "mobileImage": "/portfolio-assets/devsynx-pdf-mobile.png",
    "websiteUrl": "https://devsynx.com",
    "year": "2024",
    "aboutClient": "DEVSYNX is a premier global software engineering, digital product studio, and full-stack development agency empowering enterprises, venture-backed startups, and modern brands with high-performance web applications, mobile platforms, and AI systems.",
    "challenge": "As a top-tier digital engineering partner, our own website had to exemplify the pinnacle of web craftsmanship: flawless dark-glassmorphism aesthetics, 100/100 Core Web Vitals, exhaustive case study showcases, and perfect SEO indexing across 70+ client deliverables.",
    "solution": "Devsynx engineered its flagship platform on Next.js 15 with static site generation, responsive bento grid layouts, structured schema markup, dynamic project filtering, and interactive consultation scheduling.",
    "whatWeDelivered": [
      "Next.js 15 App Router agency infrastructure with static export and zero client-side lag",
      "Exhaustive 70-project portfolio showcase with responsive mockups, metrics, and case studies",
      "Dark-glassmorphism visual design system with glowing gradients and custom micro-animations",
      "Automated programmatic sitemap and JSON-LD structured schema for search dominance",
      "Interactive project intake flow routing inquiries to engineering leads"
    ],
    "techStack": [
      {
        "category": "Frontend Framework",
        "technologies": [
          "Next.js 15",
          "React 19",
          "TypeScript",
          "Vanilla CSS Tokens",
          "CSS Modules"
        ]
      },
      {
        "category": "SEO & Performance",
        "technologies": [
          "Next.js Static Generation",
          "Schema.org JSON-LD",
          "Dynamic XML Sitemap"
        ]
      },
      {
        "category": "Deployment & Infra",
        "technologies": [
          "Apache 2.4",
          "HTTP/2",
          "Gzip / Brotli Compression",
          "SSL 256-bit"
        ]
      }
    ],
    "metrics": [
      {
        "label": "Businesses Served",
        "value": "500+",
        "description": "Global businesses and enterprises engineered and scaled by Devsynx"
      },
      {
        "label": "Websites Delivered",
        "value": "200+",
        "description": "High-performance web applications and e-commerce platforms deployed"
      },
      {
        "label": "Google PageSpeed",
        "value": "100/100",
        "description": "Flawless desktop and mobile performance metrics on Google PageSpeed Insights"
      }
    ],
    "keyFeatures": [
      {
        "title": "Zero-Lag Static Routing",
        "description": "Instantaneous page transitions powered by Next.js static exports and pre-rendered HTML."
      },
      {
        "title": "Exhaustive Client Showcase",
        "description": "Deep-dive case studies detailing technical challenges, solutions, and delivered metrics across 70+ projects."
      },
      {
        "title": "Dark-Tech Glassmorphism Design",
        "description": "Bespoke design system featuring curated HSL dark tones, glowing borders, and modern typography."
      },
      {
        "title": "Enterprise Contact Intake",
        "description": "Interactive multi-step scope estimation tool connecting clients directly with senior technical architects."
      }
    ],
    "seoKeywords": [
      "Devsynx",
      "software development agency",
      "Next.js web development",
      "custom web app development",
      "enterprise digital engineering",
      "mobile app developers"
    ]
  },
];

export function getAllClientSlugs(): string[] {
  return clientProjects.map((p) => p.id);
}

export function getClientBySlug(slug: string): ClientProject | undefined {
  return clientProjects.find((p) => p.id === slug);
}
