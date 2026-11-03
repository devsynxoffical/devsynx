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
    title: 'Custom Web Development Company & React Services',
    shortTitle: 'Web Development',
    description: 'Fast, scalable web applications built with modern frameworks like Next.js, React, and TypeScript for US & EU clients.',
    longDescription: 'Devsynx is a custom web development company engineering high-performance digital platforms using Next.js, React, Node.js, and TypeScript. Every application is built search-engine-first, fully responsive, and optimized for sub-100ms TTFB and flawless Core Web Vitals.',
    icon: 'web',
    image: '/images/services/web-dev.webp',
    category: 'Digital Transformation',
    gradient: 'linear-gradient(135deg, #1a73e8 0%, #004050 100%)',
    features: ['Next.js 15 App Router architecture', 'Full-stack TypeScript engineering', 'Sub-100ms Server-Side Rendering (SSR)', 'Headless CMS & REST/GraphQL APIs', 'Enterprise CI/CD deployment pipelines'],
    benefits: ['Sub-1s page load times (95+ PageSpeed)', '60% lower total development cost', 'Complete source code repository ownership'],
    useCases: ['SaaS customer web portals', 'Enterprise web applications', 'High-conversion marketing platforms', 'E-commerce flagships'],
    faqs: [
      { question: 'What technologies do you use for custom web development?', answer: 'We specialize in Next.js, React, TypeScript, Node.js, Tailwind CSS, PostgreSQL, and AWS/Vercel cloud infrastructure.' },
      { question: 'How do you ensure web applications are SEO-friendly?', answer: 'We configure route-level metadata, dynamic OpenGraph cards, schema.org JSON-LD structured data, automatic XML sitemaps, and strict Core Web Vitals performance.' },
      { question: 'Do you offer fixed-price or dedicated team contracts?', answer: 'We support both: fixed-price contracts for tightly defined MVP discovery sprints, and dedicated full-time engineering pods for scaling platforms.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortTitle: 'App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android with intuitive UX and strong retention.',
    longDescription: 'We design and develop mobile apps for iOS and Android that users love to use. From UX strategy and architecture to deployment and support.',
    icon: 'mobile',
    image: '/images/services/mobile-dev.webp',
    category: 'Digital Transformation',
    gradient: 'linear-gradient(135deg, #6C63FF 0%, #3F3D56 100%)',
    features: ['Cross-platform development', 'Native performance', 'Push notifications'],
    benefits: ['Single codebase for iOS & Android', '60% faster time to market'],
    useCases: ['Consumer apps', 'Enterprise mobility', 'On-demand services'],
    faqs: [
      { question: 'Do you build native or cross-platform?', answer: 'We build with React Native and Flutter for optimal cross-platform performance.' },
    ],
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
    title: 'E-Commerce Solutions & Shopify',
    shortTitle: 'E-Commerce',
    description: 'Custom e-commerce storefronts, Shopify integration, and conversion-optimized shopping checkout flows.',
    longDescription: 'High-converting online stores engineered with headless commerce, inventory synchronization, and secure payment processing.',
    icon: 'cart',
    image: '/images/services/web-dev.webp',
    category: 'Digital Transformation',
    gradient: 'linear-gradient(135deg, #10B981 0%, #064E3B 100%)',
    features: ['Headless Shopify storefronts', 'Custom checkout flows', 'Inventory ERP sync'],
    benefits: ['Higher conversion rates', 'Instant page loads'],
    useCases: ['Retail stores', 'D2C brands', 'B2B Wholesale portals'],
    faqs: [
      { question: 'Do you work with Shopify Plus?', answer: 'Yes, we specialize in custom liquid themes and headless Hydrogen setups.' },
    ],
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
    title: 'AI Calling Agent & Voice AI Bot Development',
    shortTitle: 'Voice AI Bots',
    description: 'Deploy sub-second latency conversational AI calling agents for inbound customer service, lead qualification, and appointment booking.',
    longDescription: 'Devsynx develops production-grade voice AI agents and AI phone calling systems that converse naturally, handle complex caller inquiries, qualify inbound leads, and schedule appointments directly into your CRM with sub-500ms response latency.',
    icon: 'phone',
    image: '/images/services/ai-automation.webp',
    category: 'AI & Automation',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)',
    features: ['Sub-500ms voice response latency', 'Direct CRM & Google/Outlook calendar booking', 'Twilio, Telnyx & SIP trunking integrations', 'Multi-language neural speech synthesis', 'Automated call recording, transcription & analytics'],
    benefits: ['Instant 0-second caller wait times', '100% lead follow-up within 60 seconds', '70% lower cost compared to offshore call centers'],
    useCases: ['Clinic and dental appointment scheduling', 'Home services & contractor lead qualification', 'High-volume customer support triage', 'Outbound appointment confirmation and reminders'],
    faqs: [
      { question: 'Does the voice AI agent sound robotic or human?', answer: 'We integrate state-of-the-art neural speech engines that replicate human cadence, realistic pauses, and polite conversational interruptions, making interactions virtually indistinguishable from human agents.' },
      { question: 'Can voice bots sync directly with our calendar and CRM?', answer: 'Yes, we integrate bi-directionally with HubSpot, Salesforce, Zoho, Google Calendar, Cal.com, and custom database webhooks.' },
      { question: 'What happens if a caller asks a question the bot cannot answer?', answer: 'The bot uses intelligent escalation rules to smoothly transfer live calls to a human team member or log an urgent callback ticket.' },
    ],
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
