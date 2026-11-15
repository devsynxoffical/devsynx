export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  category: 'Digital Transformation' | 'Cloud & Infrastructure' | 'AI & Automation' | 'Enterprise Engineering';
  features: string[];
  benefits: string[];
  useCases: string[];
  faqs: FAQ[];
  gradient: string;
  /** Optional in-depth guide shown after the overview. */
  guide?: { heading: string; content: string }[];
  guideTitle?: string;
  /** Optional price table: [project, timeline, price, included]. */
  pricing?: [string, string, string, string][];
  pricingNote?: string;
  /** Optional service-specific delivery steps (replaces the generic five). */
  process?: { step: string; title: string; desc: string }[];
  /** Optional one-line description per use case (keyed by use case title). */
  useCaseDetails?: Record<string, string>;
}

export const services: Service[] = [
  // Digital Transformation (7 Services)
  {
    slug: 'seo-services',
    title: 'Technical SEO Services & Organic Growth Agency',
    shortTitle: 'Technical SEO',
    description: 'Enterprise technical SEO, Next.js Core Web Vitals optimization, programmatic SEO architecture, and international ranking strategies for US, UK, and global brands.',
    longDescription: 'Devsynx is an engineering-first technical SEO agency. We bridge the gap between technical web development and organic search algorithms. From Next.js App Router metadata and dynamic JSON-LD structured schema to programmatic SEO architecture, sub-second Core Web Vitals, and data-driven content clustering, we turn search into a compounding revenue engine for businesses in the US, UK, Europe, UAE, and worldwide.',
    icon: 'search',
    image: '/images/services/web-dev.webp',
    category: 'Digital Transformation',
    gradient: 'linear-gradient(135deg, #059669 0%, #004050 100%)',
    features: [
      'Next.js & React Technical SEO Architecture',
      'Sub-Second Core Web Vitals (LCP, INP, CLS) Tuning',
      'Programmatic SEO & Dynamic Landing Page Engines',
      'Comprehensive JSON-LD Schema & Knowledge Graph Integration',
      'International SEO, Multi-Region Hreflang & Geo-Targeting',
      'High-Authority Digital PR & Commercial Backlink Acquisition',
    ],
    benefits: [
      'Top 3 rankings for high-intent commercial keywords',
      '95+ Mobile & Desktop Google PageSpeed scores',
      'Sustainable inbound organic pipeline with zero paid ad dependency',
    ],
    useCases: [
      'High-growth B2B SaaS and enterprise tech platforms',
      'High-volume E-commerce stores & packaging marketplaces',
      'International multi-location service companies',
      'Next.js web applications migrating from legacy stacks',
    ],
    faqs: [
      {
        question: 'How does Devsynx differ from traditional SEO agencies?',
        answer: 'Unlike traditional agencies that only deliver slide decks, Devsynx is an engineering software house. Our senior developers write the Next.js code, optimize SSR/SSG rendering, implement schema markup directly, optimize databases, and fix server bottlenecks to dominate technical search signals.',
      },
      {
        question: 'Do you specialize in Next.js and JavaScript SEO?',
        answer: 'Yes. Next.js is our core specialization. We architect Server-Side Rendering (SSR) and Static Site Generation (SSG) pipelines with dynamic OpenGraph images, canonical URLs, automated XML sitemaps, and robots.txt rules that ensure flawless Googlebot crawling.',
      },
      {
        question: 'How long does it take to see organic ranking improvements?',
        answer: 'Technical fixes (indexing fixes, Core Web Vitals optimization, internal link restructuring) typically yield measurable ranking and impression jumps in 2 to 4 weeks, with compounding organic revenue growth establishing over 60 to 90 days.',
      },
    ],
  },
  {
    slug: 'custom-web-development',
    title: 'Web Development Company: Next.js & React',
    shortTitle: 'Web Development',
    description: 'Fast, scalable web applications built with modern frameworks like Next.js, React, and TypeScript for US & EU clients.',
    longDescription: "DEVSYNX is a web development company building fast business websites, online stores and custom web applications for clients in Pakistan, the Gulf, the US, the UK and Europe. We build in Next.js and React for speed and SEO, or WordPress when your team wants to edit content easily, with technical SEO, analytics and WhatsApp or form enquiries set up from launch. Every project has a written fixed price and you own the code, domain and hosting accounts.",
    icon: 'web',
    image: '/images/services/web-dev.webp',
    category: 'Digital Transformation',
    gradient: 'linear-gradient(135deg, #1a73e8 0%, #004050 100%)',
    features: ["Next.js and React websites and web apps", "WordPress sites your team can edit", "Headless CMS (Sanity, Strapi, Contentful)", "Technical SEO, schema and fast Core Web Vitals", "Customer portals, dashboards and booking systems", "Integrations: payments, CRM, WhatsApp, email", "Hosting, SSL, backups and monitoring", "Monthly care plans for updates and changes"],
    benefits: ["Fast, mobile-first sites built for Google", "Written fixed price, paid by milestone", "You own the code, domain and hosting"],
    useCases: ["Business and company websites", "Landing pages for ads", "Customer portals and dashboards", "Booking and appointment systems", "SaaS and web applications", "Website redesigns and migrations"],
    faqs: [{"question": "What technologies do you use for web development?", "answer": "Next.js, React, TypeScript, Node.js, PostgreSQL and Tailwind CSS for custom builds, WordPress or a headless CMS for content-heavy sites, and Shopify or WooCommerce for online stores."}, {"question": "How much does a website cost?", "answer": "Business websites start at about PKR 35,000 (around $125), stores at PKR 60,000 and custom web applications at PKR 150,000. You get a written fixed price before work starts."}, {"question": "Will my website be SEO-friendly?", "answer": "Yes. We set up page titles, descriptions, schema markup, sitemaps, fast loading and Search Console on every site, so Google can index and rank it properly."}, {"question": "Can you redesign my site without losing Google rankings?", "answer": "Yes. We keep URLs where possible, add 301 redirects for any that change, carry over content that already ranks and monitor Search Console after launch."}, {"question": "Do you offer fixed-price or dedicated team contracts?", "answer": "Both. Fixed-price projects for clearly defined websites and applications, and dedicated developers on a monthly rate for ongoing product work."}, {"question": "Do you work with clients outside Pakistan?", "answer": "Yes. We build websites for clients in the UAE, Saudi Arabia, Qatar, the US, the UK and Europe, with calls in your working hours and pricing in your currency."}],
    useCaseDetails: {"Business and company websites": "Service, about and contact pages that explain what you do and turn visitors into calls, WhatsApp chats and form enquiries.", "Landing pages for ads": "Single-purpose pages for Google and Meta campaigns, built to load fast and tested to raise the share of visitors who enquire.", "Customer portals and dashboards": "Secure logins where customers see orders, documents, invoices or project status without calling your office.", "Booking and appointment systems": "Online booking with calendars, reminders and payments for clinics, salons, consultants and service businesses.", "SaaS and web applications": "Multi-user products with roles, subscriptions and admin panels, built in Next.js, Node.js and PostgreSQL.", "Website redesigns and migrations": "Moving from an old site or a site builder to a faster one without losing Google rankings, with redirects for every changed URL."},
    guideTitle: "Web Development: Costs, Platforms and What to Expect",
    guide: [{"heading": "Next.js or WordPress?", "content": "Next.js is our default for speed, security and SEO: pages load almost instantly and score well on Google's Core Web Vitals. WordPress is the better choice when your team wants to publish and edit pages often without a developer. For larger sites we combine both strengths with a headless CMS, where editors use a simple dashboard and visitors get a fast Next.js site."}, {"heading": "How much does a website cost?", "content": "With DEVSYNX, a small business website (5 to 10 pages) costs about PKR 35,000 to 70,000, a larger site with a CMS PKR 70,000 to 120,000, an e-commerce store PKR 60,000 to 200,000 and a custom web application PKR 150,000 to 500,000 (about $535 to $1,800). Our free website cost calculator gives a first estimate, and you receive a fixed price after a short call."}, {"heading": "How long does it take?", "content": "A landing page takes about a week, a business website 2 to 3 weeks, an online store 3 to 5 weeks and a custom web application 4 to 10 weeks. Content is usually the slowest part, so we can write or edit page copy for you if needed."}, {"heading": "SEO from the first day", "content": "Every site launches with clean URLs, page titles and descriptions, schema markup, an XML sitemap, fast loading and Search Console setup. That gives Google everything it needs to index the site, and makes later SEO work faster and cheaper."}, {"heading": "Ownership and hosting", "content": "Your domain, hosting and code are registered in your name. We can host and maintain the site on a monthly care plan, or deploy it to your own hosting or cloud account so you keep full control."}],
    process: [{"step": "01", "title": "Discovery Call", "desc": "We learn about your business, customers and goals, review your current site and agree the pages and features you need."}, {"step": "02", "title": "Design in Figma", "desc": "We design the key pages for mobile and desktop and refine them with your feedback before development."}, {"step": "03", "title": "Development", "desc": "We build the site in Next.js or WordPress with SEO, analytics and enquiry tracking set up, sharing a live preview link."}, {"step": "04", "title": "Content, Testing & Launch", "desc": "We add content, test speed and forms on real devices, set up redirects from any old site and go live."}, {"step": "05", "title": "Care & Growth", "desc": "Optional monthly care for updates, backups and changes, plus SEO and landing pages as your marketing grows."}],
    pricing: [["Business Website (5–10 pages)", "2 – 3 Weeks", "PKR 35,000 – 70,000 (~$125 – $250)", "Custom design, mobile-first, on-page SEO, WhatsApp and contact forms"], ["Website with CMS (10–25 pages)", "3 – 4 Weeks", "PKR 70,000 – 120,000 (~$250 – $430)", "Editable pages and blog, schema, analytics and Search Console"], ["E-commerce Store", "3 – 5 Weeks", "PKR 60,000 – 200,000 (~$215 – $715)", "Shopify or WooCommerce, payments, courier integration"], ["Custom Web Application", "4 – 10 Weeks", "PKR 150,000 – 500,000 (~$535 – $1,800)", "Portals, dashboards, booking or SaaS with admin panel and API"], ["Website Care Plan", "Ongoing", "From PKR 8,000 / mo", "Hosting management, updates, backups, monitoring, content edits"]],
    pricingNote: "Every project gets a written fixed price after a free call. International clients are quoted in USD, AED, GBP or EUR.",
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development Company: iOS & Android',
    shortTitle: 'App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android with intuitive UX and strong retention.',
    longDescription: "DEVSYNX is a mobile app development company that designs, builds and launches iOS and Android apps for startups and businesses in Pakistan, the Gulf, the US, the UK and Europe. Most apps are built in Flutter, so one codebase runs on both platforms, with a Node.js or Firebase backend, an admin panel and store submission included. Every project gets a written fixed price, a weekly test build on your phone and full ownership of the code and store accounts.",
    icon: 'mobile',
    image: '/images/services/mobile-dev.webp',
    category: 'Digital Transformation',
    gradient: 'linear-gradient(135deg, #6C63FF 0%, #3F3D56 100%)',
    features: ["Flutter apps for iOS and Android from one codebase", "Native Swift or Kotlin when a feature needs it", "Backend, APIs and admin panel", "Payments: cards, Apple Pay, Google Pay, JazzCash, Easypaisa", "Push notifications, chat and live tracking", "Offline mode and data sync", "App Store and Google Play submission", "Analytics, crash reporting and post-launch support"],
    benefits: ["One codebase for iOS and Android", "Written fixed price, paid by milestone", "You own the code and the store accounts"],
    useCases: ["On-demand and booking apps", "E-commerce and loyalty apps", "Healthcare and telehealth apps", "Field service and logistics apps", "Social and community apps", "Internal apps for staff"],
    faqs: [{"question": "Do you build native or cross-platform apps?", "answer": "Mostly cross-platform with Flutter, so one codebase runs on iOS and Android. We add native Swift or Kotlin code where a feature needs it."}, {"question": "How much does it cost to build an app?", "answer": "Most apps we build cost between PKR 200,000 and 700,000 (about $700 to $2,500), depending on the number of screens, features and apps. You get a written fixed price before work starts."}, {"question": "Who owns the app and the code?", "answer": "You do. The app is published under your own App Store and Google Play accounts, and the source code, backend and design files are transferred to you at each paid milestone."}, {"question": "Can you publish the app on the App Store and Google Play?", "answer": "Yes. We prepare the store listings, screenshots and privacy details and handle the review process until the app is approved."}, {"question": "Do you work with clients outside Pakistan?", "answer": "Yes. We build apps for clients in the UAE, Saudi Arabia, Qatar, the US, the UK and Europe, with calls in your working hours and pricing in your currency."}, {"question": "Can you take over an app another developer started?", "answer": "Yes. We review the existing code, fix urgent issues, document it and continue development, recommending a rebuild only if the code cannot reasonably be maintained."}],
    useCaseDetails: {"On-demand and booking apps": "Customer and provider apps with scheduling, live tracking, payments and ratings for services, rentals and appointments.", "E-commerce and loyalty apps": "Shopping apps connected to your store, with saved carts, order tracking, loyalty points and push campaigns.", "Healthcare and telehealth apps": "Appointment booking, video consultations, reminders and secure patient records for clinics and practices.", "Field service and logistics apps": "Job lists, photos, signatures, routes and proof of delivery that work even where signal is weak.", "Social and community apps": "Profiles, feeds, chat and creator tools, like the Zeparty and Spicify apps we built.", "Internal apps for staff": "Attendance, approvals, inspections and reporting apps that replace paper forms and spreadsheets."},
    guideTitle: "Mobile App Development: Costs, Timelines and Choices",
    guide: [{"heading": "Flutter or native?", "content": "For most apps we recommend Flutter: one codebase gives you iOS and Android apps with near-native speed, and every change ships to both platforms at once, which keeps the build and maintenance cost lower. We build native Swift or Kotlin modules only when an app needs deep device features, such as advanced Bluetooth, background audio or specific hardware integrations."}, {"heading": "How much does a mobile app cost?", "content": "With DEVSYNX, a focused first version (MVP) with login, a few core screens, a backend and store submission usually costs PKR 200,000 to 350,000 (about $700 to $1,250). A medium app with payments, notifications and an admin panel is typically PKR 300,000 to 500,000, and a complex marketplace or on-demand app with customer, provider and admin apps up to about PKR 700,000 (about $2,500). Use our free app cost calculator for an estimate based on your features, then we confirm a fixed price after a short call."}, {"heading": "How long does it take?", "content": "A focused MVP usually goes live in 4 to 8 weeks, a medium app in 8 to 12 weeks and a complex multi-app platform in 12 to 20 weeks. The biggest factor is how quickly the feature list and designs are agreed, which is why every project starts with a short scoping phase and a clickable prototype."}, {"heading": "What you receive at launch", "content": "The live apps on the App Store and Google Play under your own developer accounts, the full source code in your Git repository, the backend and database in your cloud account, the admin panel, design files, and a short handover document so any developer can continue the work."}, {"heading": "After launch", "content": "Apple and Google release new OS versions every year, and apps need updates to keep working and keep store approval. Our monthly support plan covers crash monitoring, fixes, OS updates and small improvements, and we can keep adding features in planned releases as your users ask for them."}],
    process: [{"step": "01", "title": "Scoping & Prototype", "desc": "We agree the user flows and feature list, then build a clickable Figma prototype you can test on your phone before any code is written."}, {"step": "02", "title": "Fixed-Price Proposal", "desc": "You receive a written fixed price, a timeline and milestone payments based on the approved prototype."}, {"step": "03", "title": "Build in Weekly Sprints", "desc": "We build the app, backend and admin panel in sprints and send a new test build to your phone every week."}, {"step": "04", "title": "Testing & Store Submission", "desc": "We test on real iOS and Android devices, prepare store listings and handle App Store and Google Play review."}, {"step": "05", "title": "Launch & Support", "desc": "We monitor crashes and performance after launch and keep the app updated through a monthly support plan."}],
    pricing: [["App MVP (iOS + Android)", "4 – 8 Weeks", "PKR 200,000 – 350,000 (~$700 – $1,250)", "Core features, login, backend, admin panel, store submission"], ["Medium App", "8 – 12 Weeks", "PKR 300,000 – 500,000 (~$1,100 – $1,800)", "Payments, notifications, chat or maps, analytics"], ["Complex / Marketplace App", "12 – 20 Weeks", "Up to PKR 700,000 (~$2,500)", "Customer, provider and admin apps, live tracking, commissions"], ["Monthly Support", "Ongoing", "From PKR 25,000 / mo", "Crash monitoring, OS updates, fixes and small features"]],
    pricingNote: "Every project gets a written fixed price after a free scoping call. International clients are quoted in USD, AED, GBP or EUR.",
  },
  {
    slug: 'saas-product-development',
    title: 'SaaS Product Development Company & MVP Engineering',
    shortTitle: 'SaaS Platforms',
    description: 'Build multi-tenant cloud software with subscription billing, role-based access control, analytics, and growth-ready architecture.',
    longDescription: 'Devsynx is a full-cycle SaaS development company helping startup founders and enterprises engineer scalable SaaS platforms from MVP to market leader. We build multi-tenant databases, Stripe/Paddle billing integrations, role-based access control (RBAC), and automated customer onboarding.',
    icon: 'saas',
    image: '/images/services/saas-dev.webp',
    category: 'Digital Transformation',
    gradient: 'linear-gradient(135deg, #06909D 0%, #1a73e8 100%)',
    features: ['Multi-tenant database isolation', 'Stripe & Paddle subscription billing', 'Enterprise Role-Based Access Control (RBAC)', 'Real-time telemetry and user analytics', 'Automated CI/CD and SOC2-ready architecture'],
    benefits: ['Launch production MVP in 4 to 8 weeks', 'Scalable to millions of monthly active users', 'Zero technical debt with modular microservices'],
    useCases: ['B2B SaaS subscription platforms', 'Two-sided digital marketplaces', 'Vertical industry CRM & ERP tools', 'Automated workflow engines'],
    faqs: [
      { question: 'How long does a SaaS MVP take to build?', answer: 'A focused production MVP typically launches in 4 to 8 weeks with complete user authentication, billing, core workflows, and analytics.' },
      { question: 'How do you structure SaaS multi-tenancy?', answer: 'Depending on compliance and scale, we implement schema-per-tenant, row-level security (RLS) in PostgreSQL, or isolated tenant databases.' },
      { question: 'Do you handle payment gateways and billing logic?', answer: 'Yes, we integrate Stripe Billing, Paddle, usage-based metering, coupon codes, tax compliance, and automated invoice delivery.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design & Prototyping',
    shortTitle: 'UX/UI Design',
    description: 'Create intuitive, beautiful interfaces that users love through research-driven design and rapid prototyping.',
    longDescription: 'Human-centered experiences designed through user research, wireframing, prototyping, and visual design systems.',
    icon: 'design',
    image: '/images/services/uiux-design.webp',
    category: 'Digital Transformation',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    features: ['User research & personas', 'Wireframing & prototyping', 'Visual design systems'],
    benefits: ['Higher user engagement', 'Reduced development rework'],
    useCases: ['App redesigns', 'Design systems', 'Product prototypes'],
    faqs: [
      { question: 'What tools do you use?', answer: 'We primarily use Figma, Maze, and Storybook.' },
    ],
  },
  {
    slug: 'ecommerce-solutions',
    title: 'E-commerce Website Development & Shopify',
    shortTitle: 'E-Commerce',
    description: 'Custom e-commerce storefronts, Shopify integration, and conversion-optimized shopping checkout flows.',
    longDescription: "DEVSYNX is an e-commerce website development company building online stores on Shopify, WooCommerce and custom Next.js for brands in Pakistan, the Gulf, the US, the UK and Europe. We design the store, set up products, payments and shipping, connect courier and inventory systems, and launch with SEO, analytics and tracking for Google and Meta ads. Every store has a written fixed price and you own the store, domain and data.",
    icon: 'cart',
    image: '/images/services/web-dev.webp',
    category: 'Digital Transformation',
    gradient: 'linear-gradient(135deg, #10B981 0%, #064E3B 100%)',
    features: ["Shopify and Shopify Plus stores", "WooCommerce stores on WordPress", "Custom and headless stores in Next.js", "Payments: cards, Apple Pay, JazzCash, Easypaisa, COD", "Courier integration and order tracking", "Inventory and ERP sync", "Product SEO, schema and fast pages", "Meta and Google tracking for ads"],
    benefits: ["Stores that load fast on mobile", "Written fixed price, paid by milestone", "You own the store, domain and data"],
    useCases: ["Fashion and clothing brands", "Beauty and skincare stores", "Food and grocery delivery", "B2B wholesale ordering", "Electronics and gadgets", "Subscription products"],
    faqs: [{"question": "Which platform is best for my online store?", "answer": "For most brands Shopify, because it is reliable and easy to manage. WooCommerce if you already use WordPress, and a custom Next.js store for very large catalogues or special checkout needs."}, {"question": "How much does an e-commerce website cost?", "answer": "Most stores cost between PKR 60,000 and 200,000 (about $215 to $715). You get a written fixed price after a free call."}, {"question": "Can you set up cash on delivery and couriers in Pakistan?", "answer": "Yes. We set up COD with order confirmation, JazzCash, Easypaisa and cards, and integrate couriers such as TCS, Leopards and PostEx."}, {"question": "Do you work with Shopify Plus?", "answer": "Yes. We build custom Liquid themes and headless storefronts, and integrate apps and ERPs for larger brands."}, {"question": "Can you move my store from another platform?", "answer": "Yes. We migrate products, customers and orders, keep or redirect URLs to protect your Google rankings, and test everything before switching."}, {"question": "Do you build stores for clients outside Pakistan?", "answer": "Yes. We build stores for brands in the UAE, Qatar, Saudi Arabia, the US, the UK and Europe, with payments and shipping set up for each market."}],
    useCaseDetails: {"Fashion and clothing brands": "Collections, size charts, lookbooks and sale-day performance for clothing labels, built to handle launch traffic.", "Beauty and skincare stores": "Product routines, ingredient details and reviews that build trust, like the stores we built for skincare brands.", "Food and grocery delivery": "Menus, delivery zones, time slots and order tracking for restaurants and grocery shops, as with Doughi.", "B2B wholesale ordering": "Customer logins with their own price lists, minimum order quantities and repeat ordering for wholesalers and manufacturers.", "Electronics and gadgets": "Detailed specifications, comparisons and warranty registration for technical products.", "Subscription products": "Recurring orders for coffee, supplements and boxes, with customer portals to pause or change subscriptions."},
    guideTitle: "E-commerce Website Development: Platforms, Costs and Launch",
    guide: [{"heading": "Shopify, WooCommerce or custom?", "content": "Shopify is our default for most brands: it is secure, reliable on sale days and easy for your team to manage. WooCommerce suits businesses that already use WordPress or need full control of hosting. A custom or headless Next.js store makes sense for very large catalogues, unusual checkout rules or brands that want the fastest possible pages."}, {"heading": "How much does an online store cost?", "content": "With DEVSYNX, an online store usually costs PKR 60,000 to 200,000 (about $215 to $715), depending on the platform, design, number of products and integrations. Custom or headless stores with complex features are quoted separately. Platform fees, apps and payment fees are paid directly to the providers."}, {"heading": "Payments and delivery", "content": "For Pakistan we set up cash on delivery with order confirmation, JazzCash, Easypaisa and cards, plus courier booking with TCS, Leopards or PostEx. For the Gulf, US and UK we set up cards, Apple Pay, Google Pay and buy-now-pay-later options where available."}, {"heading": "Built to sell, not just to look good", "content": "Every store launches with fast mobile pages, product schema, clean collection URLs, abandoned-cart emails or WhatsApp reminders, and tracking for Google and Meta ads, so your marketing can be measured from the first order."}, {"heading": "After launch", "content": "We can handle new collections, sale campaigns, app updates and speed checks on a monthly care plan, and connect your store to SEO and ad campaigns when you are ready to grow."}],
    process: [{"step": "01", "title": "Store Planning", "desc": "We agree the platform, product structure, payments, shipping and the pages you need."}, {"step": "02", "title": "Design", "desc": "We design the home, collection, product and checkout pages for mobile first, using your brand."}, {"step": "03", "title": "Build & Integrations", "desc": "We build the store, add products, and connect payments, couriers, inventory and email or WhatsApp."}, {"step": "04", "title": "Testing & Launch", "desc": "We test real orders on mobile and desktop, set up tracking and SEO, then launch."}, {"step": "05", "title": "Grow", "desc": "Optional care plan, SEO and ad campaigns to bring traffic and repeat customers."}],
    pricing: [["Starter Store", "2 – 3 Weeks", "PKR 60,000 – 100,000 (~$215 – $360)", "Theme-based design, up to 50 products, payments and courier setup"], ["Custom-Designed Store", "3 – 5 Weeks", "PKR 100,000 – 200,000 (~$360 – $715)", "Custom design, product filters, reviews, abandoned-cart flows, ad tracking"], ["Custom / Headless Store", "4 – 10 Weeks", "Quoted after a scoping call", "Next.js storefront, large catalogues, B2B pricing, ERP integration"], ["Store Care Plan", "Ongoing", "From PKR 8,000 / mo", "Updates, new collections, speed checks and small changes"]],
    pricingNote: "Every store gets a written fixed price after a free call. Platform, app and payment fees are paid directly to the providers. International clients are quoted in USD, AED, GBP or EUR.",
  },
  {
    slug: 'progressive-web-apps',
    title: 'Progressive Web Apps (PWA)',
    shortTitle: 'PWA Apps',
    description: 'Web applications with app-like experience, offline capabilities, and instant installation.',
    longDescription: 'Fast, installable web apps that operate offline and deliver push notifications directly on mobile devices without app store delays.',
    icon: 'pwa',
    image: '/images/services/mobile-dev.webp',
    category: 'Digital Transformation',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #4C1D95 100%)',
    features: ['Offline caching', 'Add to home screen', 'Push notifications'],
    benefits: ['No App Store friction', 'Zero storage overhead'],
    useCases: ['Field sales tools', 'News portals', 'SaaS dashboards'],
    faqs: [
      { question: 'Do PWAs work on iOS?', answer: 'Yes, modern iOS Safari supports PWA installation and caching.' },
    ],
  },

  // Cloud & Infrastructure (5 Services)
  {
    slug: 'devops-cicd',
    title: 'DevOps & CI/CD Pipelines',
    shortTitle: 'DevOps',
    description: 'Accelerate your development pipeline with automated testing, continuous integration, and deployment.',
    longDescription: 'Continuous integration, deployment pipelines, container orchestration, and monitoring solutions for zero-downtime releases.',
    icon: 'devops',
    image: '/images/services/devops.webp',
    category: 'Cloud & Infrastructure',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #1E3A5F 100%)',
    features: ['CI/CD pipeline setup', 'Infrastructure as Code', 'Kubernetes orchestration'],
    benefits: ['10x faster deployments', 'Zero-downtime releases'],
    useCases: ['Pipeline automation', 'Kubernetes setup', 'Cloud monitoring'],
    faqs: [
      { question: 'What tools do you use?', answer: 'GitHub Actions, Docker, Kubernetes, Terraform, and AWS.' },
    ],
  },
  {
    slug: 'cloud-migration',
    title: 'Cloud Ops & Infrastructure Migration',
    shortTitle: 'Cloud Ops',
    description: 'Seamless migration of legacy workloads to AWS, Google Cloud, or Azure with zero downtime.',
    longDescription: 'Migrate server infrastructure and databases safely to public or hybrid cloud environments optimized for cost efficiency.',
    icon: 'cloud',
    image: '/images/services/devops.webp',
    category: 'Cloud & Infrastructure',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)',
    features: ['AWS / GCP / Azure migration', 'Cost optimization', 'Disaster recovery setup'],
    benefits: ['40% reduction in hosting costs', 'Auto-scaling capacity'],
    useCases: ['Data center exit', 'Database migration', 'Serverless refactoring'],
    faqs: [
      { question: 'Will my service experience downtime?', answer: 'We use blue-green and canary deployment strategies to ensure continuous uptime.' },
    ],
  },
  {
    slug: 'microservices-architecture',
    title: 'Microservices Architecture',
    shortTitle: 'Microservices',
    description: 'Decouple monolithic systems into independent, fault-tolerant microservices.',
    longDescription: 'Scale individual services independently, simplify team ownership, and isolate system failures with modern event-driven architectures.',
    icon: 'network',
    image: '/images/services/devops.webp',
    category: 'Cloud & Infrastructure',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #312E81 100%)',
    features: ['Event-driven messaging', 'API Gateway setup', 'Service mesh routing'],
    benefits: ['Isolated failure domains', 'Independent team deployment'],
    useCases: ['Monolith refactoring', 'High-traffic backends'],
    faqs: [
      { question: 'When should I move to microservices?', answer: 'When your team size expands or specific services require unique hardware scaling.' },
    ],
  },
  {
    slug: 'serverless-computing',
    title: 'Serverless Architecture & APIs',
    shortTitle: 'Serverless',
    description: 'Build backend APIs with zero server management using AWS Lambda and Cloud Functions.',
    longDescription: 'Pay only for exact compute execution time while your backend automatically scales from zero to millions of requests effortlessly.',
    icon: 'lightning',
    image: '/images/services/devops.webp',
    category: 'Cloud & Infrastructure',
    gradient: 'linear-gradient(135deg, #F97316 0%, #9A3412 100%)',
    features: ['AWS Lambda & DynamoDB', 'Pay-per-use billing', 'Instant auto-scaling'],
    benefits: ['Zero idle server costs', 'Unlimited scaling capacity'],
    useCases: ['Webhook handlers', 'Real-time API backends'],
    faqs: [
      { question: 'Is serverless cost effective?', answer: 'Yes, for most workloads serverless reduces server infrastructure bills significantly.' },
    ],
  },
  {
    slug: 'cloud-security-compliance',
    title: 'Cloud Security & Telemetry',
    shortTitle: 'Cloud Security',
    description: 'Enterprise-grade security monitoring, IAM access governance, and SOC2 compliance.',
    longDescription: 'Protect client data and infrastructure with automated threat detection, centralized telemetry logging, and role-based access security.',
    icon: 'shield',
    image: '/images/services/devops.webp',
    category: 'Cloud & Infrastructure',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #831843 100%)',
    features: ['IAM governance', 'SOC2 / HIPAA hardening', 'Telemetry dashboards'],
    benefits: ['Bank-grade security posture', 'Full regulatory compliance'],
    useCases: ['Healthcare software', 'Fintech platforms'],
    faqs: [
      { question: 'Do you help with HIPAA compliance?', answer: 'Yes, we implement strict encryption, audit logs, and data isolation required for HIPAA.' },
    ],
  },

  // AI & Intelligent Automation (5 Services)
  // AI & Intelligent Automation (5 Services)
  {
    slug: 'ai-automation',
    title: 'AI Automation Services & Engineering Agency',
    shortTitle: 'AI Automation',
    description: 'Autonomous AI agents, workflow automation, and custom LLM integrations engineered for business growth.',
    longDescription: 'Devsynx is an AI automation agency engineering autonomous LLM agent workflows, Retrieval-Augmented Generation (RAG) vector pipelines, and intelligent process automation for US, UK, and European enterprises. We eliminate repetitive manual operations and unlock 24/7 autonomous workflows.',
    icon: 'ai',
    image: '/images/services/ai-automation.webp',
    category: 'AI & Automation',
    gradient: 'linear-gradient(135deg, #10A37F 0%, #004050 100%)',
    features: ['Autonomous AI Agent Workflows', 'Enterprise RAG & Vector Search (Pinecone/pgvector)', 'Custom LLM Fine-Tuning & Prompt Engineering', 'Multi-System API Webhook Orchestration', 'Automated Human-in-the-Loop Review Gates'],
    benefits: ['80% reduction in manual operational labor', '24/7 instantaneous lead qualification', 'Zero error rate in high-volume document pipelines'],
    useCases: ['Autonomous customer support agents', 'Automated inbound lead triage & scoring', 'Intelligent invoice & contract parsing', 'Internal enterprise knowledge bases'],
    faqs: [
      { question: 'What are AI automation services?', answer: 'AI automation services combine large language models (LLMs), autonomous agents, and API integrations to automate complex business workflows that previously required manual human effort.' },
      { question: 'How do you secure proprietary company data in LLM workflows?', answer: 'We use enterprise-grade private model deployments, zero-retention API contracts, and local vector databases to guarantee complete data confidentiality and SOC2/GDPR compliance.' },
      { question: 'How quickly can an AI agent system be deployed?', answer: 'Most initial AI agent workflows and RAG knowledge assistants are prototyped in 1 to 2 weeks and deployed to production within 3 to 4 weeks.' },
    ],
  },
  {
    slug: 'voice-ai-bots',
    title: 'AI Voice Agent Development & AI Calling Agents',
    shortTitle: 'Voice AI Bots',
    description: 'Deploy sub-second latency conversational AI calling agents for inbound customer service, lead qualification, and appointment booking.',
    longDescription: "DEVSYNX builds AI voice agents: phone assistants that answer calls 24/7, talk naturally, answer common questions, qualify leads and book appointments straight into your calendar or CRM. They connect to your existing phone number through Twilio, Telnyx or SIP, speak English, Urdu, Arabic and other languages, and hand the call to a person whenever a caller needs one. We build them for clinics, home-service companies, real estate, sales teams and support desks in the US, the UK, the Gulf and Pakistan.",
    icon: 'phone',
    image: '/images/services/ai-automation.webp',
    category: 'AI & Automation',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)',
    features: ["Answers inbound calls 24/7 on your existing number", "Books, reschedules and cancels appointments in your calendar", "Qualifies leads with your own questions and scoring", "Outbound calls: reminders, confirmations and follow-ups", "English, Urdu, Arabic and other languages", "Live transfer to your team or a callback ticket", "Twilio, Telnyx and SIP trunk integrations", "Call recordings, transcripts and summaries in your CRM"],
    benefits: ["No missed calls, day or night", "Bookings and leads go straight into your systems", "Hands off to a person whenever needed"],
    useCases: ["Clinic and dental appointment booking", "Home services and contractor leads", "Real estate enquiries", "Customer support triage", "Appointment reminders and confirmations", "After-hours answering"],
    faqs: [{"question": "Does the AI voice agent sound natural?", "answer": "Yes. We use modern neural voices with natural pacing and short response times. Callers can usually tell it is an assistant, which is why we design clear, polite conversations and a quick route to a person."}, {"question": "Can it book appointments in our calendar and CRM?", "answer": "Yes. We integrate with Google Calendar, Outlook, Cal.com, HubSpot, Salesforce, Zoho, GoHighLevel and custom systems through webhooks."}, {"question": "What happens when the agent cannot answer a question?", "answer": "It transfers the call to a team member or creates a callback ticket with a summary, based on rules you choose."}, {"question": "Which languages does it support?", "answer": "English, Urdu, Arabic and many other languages, and it can switch language when the caller does."}, {"question": "Can we keep our existing phone number?", "answer": "Yes. We forward or route your existing number through Twilio, Telnyx or your SIP provider, so customers call the same number as before."}, {"question": "How much does an AI voice agent cost?", "answer": "A one-time build price, fixed after a short call, plus running costs for minutes and AI usage that depend on your call volume. Many businesses start with one use case and expand once they see the results."}],
    useCaseDetails: {"Clinic and dental appointment booking": "Patients call to book, move or cancel appointments; the agent checks availability, books the slot and sends a confirmation.", "Home services and contractor leads": "The agent answers every call, asks about the job, address and urgency, and books an estimate or passes hot leads to your team, as in our AI calling agent for a US service business.", "Real estate enquiries": "Callers ask about listings, prices and viewings; the agent answers from your listings and books viewings with the right agent.", "Customer support triage": "The agent handles common questions such as order status, opening hours and policies, and routes complex issues to a person with a summary.", "Appointment reminders and confirmations": "Outbound calls confirm tomorrow's appointments and reschedule no-shows, cutting empty slots.", "After-hours answering": "Evening and weekend calls are answered and logged instead of going to voicemail, with urgent ones escalated by text."},
    guideTitle: "AI Voice Agents: How They Work and What They Cost",
    guide: [{"heading": "How an AI voice agent works", "content": "A caller dials your number. The call is routed to the agent, which turns speech into text, decides what to say using a large language model that follows your script and knowledge base, and replies with a natural voice in about a second. It can look up availability, book appointments, update your CRM and transfer the call to a person, all within the same call."}, {"heading": "What it can and cannot do", "content": "Voice agents handle structured, repetitive calls very well: booking, qualifying, answering common questions and confirming appointments. They should not give medical, legal or financial advice, and complex or emotional calls should go to a person. We design every agent with clear limits and a smooth handover, so callers are never stuck."}, {"heading": "What it costs", "content": "There are two parts: a one-time build (script, integrations, voice, testing), quoted as a fixed price after a short call, and running costs for phone minutes, speech and AI usage, which depend on your call volume. For most small and mid-size businesses the running cost is a fraction of a full-time receptionist, and you can start with one use case, such as after-hours calls, before expanding."}, {"heading": "Launching safely", "content": "We start with a test number, run real call scenarios with your team, tune the script and voice, and only then connect your main line. Every call is recorded and transcribed so you can review what the agent said and keep improving it."}, {"heading": "Data and compliance", "content": "Recordings and transcripts are stored in your own accounts. We configure call disclosures, consent messages and data retention to match your market, such as US call-recording rules or UK GDPR."}],
    process: [{"step": "01", "title": "Call Audit", "desc": "We review which calls you get, what callers ask and which tasks the agent should handle first."}, {"step": "02", "title": "Script & Knowledge Base", "desc": "We write the conversation flow, answers and escalation rules with your team."}, {"step": "03", "title": "Integrations", "desc": "We connect your phone number, calendar, CRM and messaging so bookings and leads land in the right place."}, {"step": "04", "title": "Test Calls & Tuning", "desc": "We run real scenarios on a test number and tune the voice, speed and answers before going live."}, {"step": "05", "title": "Go Live & Improve", "desc": "We connect your main line, review transcripts weekly and keep improving the agent."}],
    pricing: [["Single-Purpose Agent", "1 – 2 Weeks", "Fixed build price + usage", "One use case, e.g. after-hours answering or appointment booking"], ["Booking & Qualification Agent", "2 – 4 Weeks", "Fixed build price + usage", "Calendar and CRM integration, lead scoring, transfers"], ["Multi-Language / Multi-Location", "3 – 6 Weeks", "Fixed build price + usage", "Several languages, branches or phone lines, reporting"], ["Monitoring & Improvement", "Ongoing", "Monthly retainer", "Transcript reviews, script updates, new flows"]],
    pricingNote: "Build prices are fixed after a free call. Running costs (phone minutes, speech and AI usage) are billed at cost from your own accounts.",
  },
  {
    slug: 'process-automation',
    title: 'RPA and Document Automation Services',
    shortTitle: 'RPA & Automation',
    description: 'RPA and document automation by DEVSYNX: invoice and form extraction, data entry bots, approvals and reporting connected to your systems.',
    longDescription: 'DEVSYNX provides end-to-end robotic process automation (RPA) and intelligent document automation to eliminate manual data entry, streamline invoice extraction, and connect your business systems.',
    icon: 'cpu',
    image: '/images/services/ai-automation.webp',
    category: 'AI & Automation',
    gradient: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)',
    features: ['Robotic Process Automation (RPA)', 'Automated OCR document & invoice extraction', 'Multi-app webhook pipelines (Make, Zapier, Python)', 'Legacy ERP database synchronization', 'Automated compliance logging and exception alerting'],
    benefits: ['100% data entry accuracy', 'Frees internal staff for revenue-generating work', 'Immediate ROI within 60 to 90 days'],
    useCases: ['Automated accounts payable & invoice approval', 'Cross-platform inventory & order sync', 'Employee onboarding & HR compliance workflows', 'Automated customer reporting & data feeds'],
    faqs: [
      { question: 'What is the difference between BPA and RPA?', answer: 'BPA (Business Process Automation) redesigns and streamlines holistic end-to-end workflows via direct APIs, whereas RPA (Robotic Process Automation) mimics human interactions on user interfaces.' },
      { question: 'Can you automate processes in legacy software without APIs?', answer: 'Yes, our BPA developers build secure database bridges, scheduled SFTP ingestion scripts, or headless browser automation to integrate with legacy software.' },
      { question: 'How do you prevent broken automation runs?', answer: 'We implement automated error trapping, fallback retry queues, dead-letter alerts, and Slack/email notifications so exceptions are caught immediately.' },
    ],
  },
  {
    slug: 'predictive-analytics',
    title: 'Predictive Data Analytics & ML',
    shortTitle: 'Predictive Analytics',
    description: 'Machine learning models for revenue forecasting, customer churn prediction, and intelligent insights.',
    longDescription: 'Turn raw historical business data into actionable forecasts and automated recommendations using specialized machine learning models.',
    icon: 'chart',
    image: '/images/services/ai-automation.webp',
    category: 'AI & Automation',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #78350F 100%)',
    features: ['Churn prediction models', 'Demand forecasting', 'Customer segmentation'],
    benefits: ['Data-driven decision making', 'Proactive customer retention'],
    useCases: ['SaaS churn prevention', 'E-commerce demand planning'],
    faqs: [
      { question: 'What data do I need?', answer: 'We can train effective models starting with historical transaction or user activity logs.' },
    ],
  },
  {
    slug: 'nlp-text-mining',
    title: 'Natural Language Processing (NLP)',
    shortTitle: 'NLP Text Mining',
    description: 'Extract structure, sentiment, and key entity details from unorganized text documents.',
    longDescription: 'Automate contract reviews, customer ticket classification, and unstructured document ingestion using advanced NLP embeddings.',
    icon: 'text',
    image: '/images/services/ai-automation.webp',
    category: 'AI & Automation',
    gradient: 'linear-gradient(135deg, #A855F7 0%, #581C87 100%)',
    features: ['Entity recognition', 'Sentiment analysis', 'Automated document tagging'],
    benefits: ['Rapid document search', 'Automated support classification'],
    useCases: ['Legal contract analysis', 'Customer feedback mining'],
    faqs: [
      { question: 'Can it parse PDF files?', answer: 'Yes, we extract structured data from PDFs, scanned images, and Word documents.' },
    ],
  },

  // Enterprise Software Engineering (4 Services)
  {
    slug: 'api-development-integration',
    title: 'API Engineering & System Integration',
    shortTitle: 'API Integration',
    description: 'Robust RESTful and GraphQL APIs connecting disjunct platforms into a unified ecosystem.',
    longDescription: 'Design, document, and deploy high-speed internal and external API gateways with rate limiting, OAuth authentication, and OpenAPI specs.',
    icon: 'code',
    image: '/images/services/saas-dev.webp',
    category: 'Enterprise Engineering',
    gradient: 'linear-gradient(135deg, #64748B 0%, #0F172A 100%)',
    features: ['REST & GraphQL gateway', 'OAuth2 / JWT security', 'Swagger OpenAPI docs'],
    benefits: ['Seamless platform connectivity', 'Developer-friendly APIs'],
    useCases: ['Third-party integrations', 'Mobile backend APIs'],
    faqs: [
      { question: 'Do you provide full documentation?', answer: 'Yes, we generate interactive Swagger/Postman documentation.' },
    ],
  },
  {
    slug: 'quality-assurance-testing',
    title: 'Quality Assurance & Automation',
    shortTitle: 'QA & Testing',
    description: 'End-to-end automated testing, load testing, and security regression checks.',
    longDescription: 'Ensure bug-free releases with automated Cypress/Playwright integration tests, unit test suites, and high-load stress testing.',
    icon: 'check',
    image: '/images/services/saas-dev.webp',
    category: 'Enterprise Engineering',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #7F1D1D 100%)',
    features: ['Playwright end-to-end testing', 'JMeter load testing', 'CI/CD pipeline test runner'],
    benefits: ['Zero critical production bugs', 'Reliated release confidence'],
    useCases: ['Pre-launch audits', 'Continuous test suites'],
    faqs: [
      { question: 'Do you offer manual QA?', answer: 'We combine automated testing suites with thorough manual exploratory QA.' },
    ],
  },
  {
    slug: 'cybersecurity-auditing',
    title: 'Cybersecurity & Vulnerability Audit',
    shortTitle: 'Cyber Security',
    description: 'Penetration testing, code audit, and vulnerability assessments for web & mobile apps.',
    longDescription: 'Identify and fix security flaws before malicious actors can exploit them with comprehensive OWASP penetration testing.',
    icon: 'lock',
    image: '/images/services/saas-dev.webp',
    category: 'Enterprise Engineering',
    gradient: 'linear-gradient(135deg, #0284C7 0%, #0C4A6E 100%)',
    features: ['OWASP Top 10 pentesting', 'Source code security audit', 'SQLi & XSS protection'],
    benefits: ['Protected user data', 'Prevents security breaches'],
    useCases: ['Pre-audit compliance', 'Fintech security check'],
    faqs: [
      { question: 'Do you provide remediation reports?', answer: 'Yes, we deliver step-by-step fix guides and verify resolutions.' },
    ],
  },
  {
    slug: 'legacy-system-modernization',
    title: 'Legacy System Modernization',
    shortTitle: 'System Modernization',
    description: 'Refactor aging monoliths into clean, maintainable, cloud-native tech stacks.',
    longDescription: 'Upgrade outdated legacy codebase to modern Next.js, Node.js, and cloud backends without losing existing data or business logic.',
    icon: 'refresh',
    image: '/images/services/saas-dev.webp',
    category: 'Enterprise Engineering',
    gradient: 'linear-gradient(135deg, #475569 0%, #1E293B 100%)',
    features: ['Incremental migration strategy', 'Database schema refactoring', 'UI modernization'],
    benefits: ['Faster feature velocity', 'Lower maintenance costs'],
    useCases: ['PHP to Next.js migration', 'On-premise to Cloud'],
    faqs: [
      { question: 'Can we modernize without halting current operations?', answer: 'Yes, we use strangler-fig pattern to replace modules incrementally.' },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
