import type { CountryTarget } from "@/seo/landingPages";

type CountryContent = {
  intro: string;
  whyOffshore: string;
  delivery: string;
  industries: string[];
  guideTitle?: string;
  guide?: { heading: string; content: string }[];
  faqs?: { question: string; answer: string }[];
};

const contentBySlug: Record<string, CountryContent> = {
  usa: {
    intro:
      "US startups and enterprises partner with Devsynx for fast MVP delivery, product engineering, and AI automation without the overhead of a large in-house team.",
    whyOffshore:
      "Teams across California, Texas, New York, and the Midwest use our Pakistan-based engineers for morning overlap, senior technical leadership, and predictable sprint delivery.",
    delivery:
      "Typical engagements include discovery workshops, fixed-scope MVPs in 4–8 weeks, and long-term product squads with weekly demos and shared Jira boards.",
    industries: ["SaaS", "Healthcare", "Fintech", "E-commerce", "Real Estate"],
    guideTitle: "Outsourcing Software Development from the US: What to Know",
    guide: [
      { heading: "Why US companies outsource", content: "Senior engineers in the US are expensive and slow to hire. Outsourcing lets a startup ship its first product before raising a large round, and lets an established company add capacity for a project without permanent headcount. The trade-off is communication, which a good partner solves with process rather than promises." },
      { heading: "How the time difference works", content: "Pakistan is 9 to 10 hours ahead of US Eastern Time and 12 to 13 hours ahead of Pacific. Our team holds stand-ups and calls in your morning, then works while you sleep, so you start each day with progress, test builds and written notes to review." },
      { heading: "Contracts, IP and payments", content: "We sign an NDA before detailed scoping and a services agreement that assigns all code and intellectual property to your US entity. Work happens in your GitHub organisation, and payments are made in USD by milestone, so you never pay far ahead of delivered work." },
      { heading: "Fixed price or dedicated team", content: "A fixed price suits a clearly scoped MVP, website or app. A dedicated developer or squad on a monthly rate suits an evolving product with a roadmap. Many US clients start with a fixed-price first version, then move to a monthly team." },
      { heading: "What we build for US clients", content: "Our US work includes lead-generation platforms for contractors and roofers, an AI calling agent, B2B sales-intelligence tools, telehealth and staffing websites, and Shopify stores for retail brands. See the city pages for New York, Chicago, Dallas, Houston, Austin, Miami, Los Angeles and San Francisco." },
      { heading: "How a typical project runs", content: "Week one is scoping: we turn your idea or requirements into a written feature list, screens and a fixed quote. Development runs in one- or two-week sprints with a demo at the end of each, so you can test the product and change priorities before more money is spent. Launch includes deployment to your cloud account, monitoring and a handover document." },
      { heading: "Communication that works across the ocean", content: "Most outsourcing problems are communication problems. We assign a project manager who writes clear daily updates, keeps a shared task board and flags risks early, and we confirm every requirement in writing so nothing depends on memory from a call." },
    ],
    faqs: [
      { question: "Is it safe to outsource software development to Pakistan?", answer: "Yes, with the right safeguards: an NDA, a contract that assigns IP to you, code in your own repositories, milestone payments and regular demos. These protect you with any outsourcing partner, in any country." },
      { question: "How much can a US company save by outsourcing?", answer: "It depends on scope and seniority, but offshore rates are usually a fraction of US agency or in-house rates. Most apps we build cost about $700 to $2,500 at a fixed price; larger platforms are quoted per milestone." },
      { question: "Do you work with US agencies as a white-label partner?", answer: "Yes. We build websites, apps and integrations under NDA for US agencies, who keep the client relationship." },
      { question: "How do we get started?", answer: "Send a short description of what you need on WhatsApp or through the contact form. We reply with questions, schedule a call in your morning and send a written proposal with a fixed price within 48 hours." },
    ],
  },
  uk: {
    intro:
      "UK businesses choose Devsynx for GDPR-aware software development, modern web platforms, and AI integrations aligned with European data expectations.",
    whyOffshore:
      "We support founders and CTOs in London, Manchester, and Edinburgh with documentation-heavy delivery, clear SLAs, and English-first communication.",
    delivery:
      "Projects often start with a technical audit or MVP scope, followed by iterative releases with staging environments and production monitoring.",
    industries: ["Fintech", "EdTech", "PropTech", "Professional Services", "Retail"],
    guideTitle: "Outsourcing Software Development from the UK: What to Know",
    guide: [
      { heading: "Working hours that suit the UK", content: "Pakistan is 4 to 5 hours ahead of the UK, so our working day overlaps with your morning and early afternoon. Stand-ups, reviews and calls happen during UK business hours, with progress and test builds ready when your next day starts." },
      { heading: "UK GDPR and data protection", content: "For projects that process personal data we sign a data processing agreement, keep personal data to what the system needs, use UK or EU hosting where required and document how data is stored and deleted. Customer-facing AI and call recording include clear disclosures." },
      { heading: "Bespoke software or off-the-shelf", content: "Many UK SMEs run on a patchwork of spreadsheets and SaaS subscriptions. Bespoke software makes sense when your process gives you an edge or when subscriptions no longer fit; otherwise we connect and automate the tools you already pay for." },
      { heading: "Pricing in pounds", content: "Projects are quoted as fixed prices in GBP with milestone payments, or as a monthly rate for a dedicated developer. There are no recruitment fees, and you own the code, designs and data." },
      { heading: "What we build for UK clients", content: "Websites and Shopify stores, mobile apps, customer portals, AI phone and chat agents and workflow automation, for clients from London start-ups to food brands selling across the UK. See our London web, app and AI automation pages for details." },
      { heading: "How a typical project runs", content: "We begin with a short discovery call and a written scope with screens or page lists and a fixed GBP price. Work then runs in short sprints with a demo at the end of each, so you see real progress and can adjust priorities. Launch includes deployment, monitoring and a handover document for your team." },
      { heading: "Accessibility and performance", content: "UK public-sector suppliers and many private companies expect websites and apps to follow WCAG accessibility guidelines. We build with accessible colours, keyboard navigation and screen-reader labels, and keep pages fast on mobile networks." },
      { heading: "Choosing an outsourcing partner", content: "Compare partners on the same written scope, not just the day rate. Ask to see live products they have built, who will actually work on your project, how often you will see demos, and who owns the code. A good partner will answer all of these in writing before you sign anything." },
      { heading: "Support after launch", content: "Software needs updates, security patches and small improvements once people start using it. We offer monthly support plans in GBP covering monitoring, bug fixes and new features, or a full handover if your own team will take over." },
    ],
    faqs: [
      { question: "Is outsourcing to Pakistan GDPR compliant?", answer: "It can be. Transfers of personal data need the right safeguards, such as a data processing agreement and appropriate transfer terms, and many projects can keep personal data hosted in the UK or EU while our team works on the code." },
      { question: "Do you sign UK contracts?", answer: "Yes. We sign NDAs and services agreements that assign all intellectual property to your UK company, with GBP milestone payments." },
      { question: "Can you work with our in-house developers?", answer: "Yes. We regularly join existing teams, follow your code review process and work in your repositories and project tools." },
      { question: "How do we get started?", answer: "Message us on WhatsApp or use the contact form with a short description. We book a call during UK working hours and send a written proposal with a fixed GBP price within 48 hours." },
    ],
  },
  uae: {
    intro:
      "UAE companies work with Devsynx to launch customer-facing apps, internal automation, and cloud-native platforms for the Gulf market.",
    whyOffshore:
      "Our remote model fits Dubai and Abu Dhabi teams that need speed, bilingual-ready UX, and integration with regional payment and CRM tools.",
    delivery:
      "We align milestones to GST-friendly reporting, provide Arabic-ready UI foundations when needed, and ship mobile-first experiences for high mobile usage.",
    industries: ["Real Estate", "Logistics", "Hospitality", "Retail", "Government Tech"],
    guideTitle: "Working With DEVSYNX From the UAE",
    guide: [
      { heading: "One hour apart", content: "Pakistan is one hour ahead of the UAE, so our working day lines up almost completely with yours. Calls, WhatsApp questions and reviews happen in real time, the same day, without anyone working late." },
      { heading: "Arabic and English from the start", content: "UAE customers expect both languages. We build right-to-left Arabic layouts, proper Arabic fonts and separate Arabic and English pages with their own titles and descriptions, so each language can rank in Google and read naturally." },
      { heading: "Payments, WhatsApp and local tools", content: "Gulf customers pay with cards, Apple Pay and buy-now-pay-later services such as Tabby and Tamara, and they prefer WhatsApp to email. We integrate UAE payment gateways, WhatsApp Business and CRMs such as Zoho and HubSpot that many UAE companies already use." },
      { heading: "VAT and corporate tax ready", content: "Invoices, receipts and reports often need to show VAT correctly, and many businesses now track corporate tax too. We build systems that store tax details properly and export the reports your accountant needs. Our own UAE work includes the website for an FTA-approved accounting firm." },
      { heading: "What we build for UAE clients", content: "Websites and Shopify stores, mobile apps, real-estate and holiday-home booking platforms, education marketplaces, AI voice and WhatsApp agents and internal tools. See our Dubai, Abu Dhabi and Sharjah pages for local details and case studies." },
      { heading: "How a project runs", content: "After a call we send a written scope and fixed price in AED or USD. Work runs in short sprints with a demo at the end of each, test links you can open on your phone, and a handover with documentation at launch." },
      { heading: "Data and hosting", content: "When your sector or clients require it, we deploy to cloud regions in the UAE or the wider Middle East, and set up access controls, backups and logs your team can review." },
      { heading: "Support after launch", content: "After launch we offer monthly support in AED or USD for monitoring, security updates, bug fixes and new features, or a documented handover if your own team will take over. Support requests come in on WhatsApp and are answered during your working day." },
    ],
    faqs: [
      { question: "Do you have an office in the UAE?", answer: "Our team is based in Rawalpindi, Pakistan, and works with UAE clients remotely. With only a one-hour time difference, communication is the same as working with a local team, and we can schedule visits for larger projects." },
      { question: "Can you build an Arabic and English website or app?", answer: "Yes. We build bilingual products with right-to-left Arabic layouts and separate language versions that can each rank on Google." },
      { question: "How do you price projects for UAE companies?", answer: "Projects are quoted as fixed prices in AED or USD with milestone payments, or as a monthly rate for dedicated developers. Because our team is offshore, prices are usually well below Dubai agency rates." },
      { question: "Which UAE cities do you work with?", answer: "Dubai, Abu Dhabi, Sharjah, Ajman and the Northern Emirates, as well as clients across Saudi Arabia, Qatar, Kuwait and Oman." },
      { question: "Can you add an AI voice or WhatsApp agent for our UAE business?", answer: "Yes. We build AI agents that answer calls and WhatsApp messages in English and Arabic, book appointments and update your CRM, with handover to your staff when needed." },
    ],
  },
  dubai: {
    intro:
      "Dubai-based brands rely on Devsynx for premium web experiences, mobile apps, and AI calling workflows that match local customer expectations.",
    whyOffshore:
      "From DIFC startups to established trading groups, clients value our product mindset, transparent pricing, and ability to scale teams quickly.",
    delivery:
      "Engagements include WhatsApp-ready support flows, performance-optimized Next.js sites, and integrations with HubSpot, Zoho, and custom ERPs.",
    industries: ["E-commerce", "Travel", "FMCG", "Proptech", "B2B Services"],
  },
  germany: {
    intro:
      "German enterprises, Mittelstand companies, and startups partner with Devsynx for high-precision software engineering, scalable web platforms, and autonomous AI automation.",
    whyOffshore:
      "Engineering leaders in Berlin, Munich, Frankfurt, and Hamburg leverage our senior engineering pods for rigorous clean-code standards, 4+ hours CET business overlap, and strict GDPR compliance.",
    delivery:
      "We run structured bi-weekly sprints, comprehensive automated test suites (CI/CD), clear technical documentation, and production deployments on AWS Europe or GCP Frankfurt.",
    industries: ["Fintech & Banking", "Automotive & Logistics", "Industrial B2B", "Healthcare & MedTech", "Enterprise SaaS"],
    guideTitle: "Working With DEVSYNX From Germany",
    guide: [
      { heading: "Time difference with Germany", content: "Pakistan is three to four hours ahead of Germany depending on daylight saving. Our afternoon overlaps with your morning, so stand-ups, reviews and calls happen in German business hours, and work continues while you are offline." },
      { heading: "GDPR and data processing", content: "For systems that handle personal data we sign a data processing agreement, keep personal data to what the system needs and host in EU regions such as Frankfurt when required. We document data flows, retention and access so your data protection officer can review them." },
      { heading: "Documentation and quality", content: "German clients rightly expect clear specifications, tested code and documentation. We write requirements and acceptance criteria before development, use code review and automated tests, and hand over technical documentation with every release." },
      { heading: "ERP, Odoo and integrations", content: "Many German Mittelstand companies run on ERP systems and need web portals, dashboards or automation around them. Our work includes a website and lead platform for an Odoo ERP consultancy serving the DACH region, and we integrate with ERPs, CRMs and accounting tools through their APIs." },
      { heading: "Language", content: "We work in English. Customer-facing websites and apps can be built in German and English with separate pages and metadata; you provide the German texts or we arrange professional translation." },
      { heading: "Pricing in EUR", content: "Projects are quoted as fixed EUR prices with milestone payments, or as monthly rates for dedicated developers, with all code and intellectual property owned by your company." },
      { heading: "What we build for German clients", content: "Web platforms, customer and partner portals, mobile apps, ERP add-ons and AI automation for document processing, customer service and internal workflows." },
      { heading: "Choosing an offshore partner", content: "Compare partners on the same written specification rather than on day rates. Ask for live examples, the people who will work on your project, how often you will see working software, and how code ownership and handover are handled. A reliable partner answers these in writing before you sign." },
      { heading: "Support after launch", content: "We offer monthly support in EUR for monitoring, security updates, bug fixes and new features, or a documented handover to your in-house team." },
      { heading: "Security", content: "We follow secure development practices: role-based access, encrypted connections, secrets kept out of code, dependency updates and logs for important actions. For sensitive projects we can work inside your own cloud account and repositories so you keep full control." },
    ],
    faqs: [
      { question: "Is your work GDPR compliant?", answer: "We design systems to support GDPR compliance: data processing agreements, EU hosting where needed, data minimisation, access control and documented retention. Final compliance also depends on your own processes, which we help you document." },
      { question: "Can you build German-language websites?", answer: "Yes. We build German and English versions with separate pages, language tags and translated metadata." },
      { question: "How do we start?", answer: "Send a short description by email, WhatsApp or the contact form. We arrange a call in your morning and send a written proposal with a fixed EUR price within 48 hours." },
      { question: "Do you sign NDAs and contracts with German companies?", answer: "Yes. We sign NDAs and services agreements that assign all intellectual property to your company, with EUR milestone payments." },
      { question: "Can you work alongside our in-house developers?", answer: "Yes. We join existing teams, follow your coding standards and review process, and work in your repositories and project tools." },
    ],
  },
  canada: {
    intro:
      "Canadian startups, scale-ups, and enterprises partner with Devsynx for dedicated full-stack development, mobile apps, and AI workflow automation at a fraction of typical domestic agency rates.",
    whyOffshore:
      "Founders and engineering leaders across Toronto, Vancouver, Montreal, and Calgary work with our team in Rawalpindi/Islamabad through scheduled calls in their morning and written updates every day.",
    delivery:
      "We provide dedicated sprint pods, transparent Jira/Slack communication, fixed-cost MVP milestones, and cloud hosting in Canadian regions such as AWS Canada Central when data residency matters.",
    industries: ["Fintech", "HealthTech", "CleanTech & Energy", "E-commerce & Retail", "B2B SaaS"],
    guideTitle: "Working With an Offshore Team From Canada",
    guide: [
      { heading: "Time zones from coast to coast", content: "Pakistan is 9 to 10 hours ahead of Eastern Time and 12 to 13 hours ahead of Pacific. We schedule calls in your morning, whether you are in Toronto, Calgary or Vancouver, and send daily written updates so progress is visible without long meetings." },
      { heading: "Canadian privacy and anti-spam rules", content: "Systems that collect personal information should follow Canadian privacy law, and marketing messages must follow anti-spam consent rules. We design consent, data minimisation and retention into the system and can host data in Canadian cloud regions when your sector requires it." },
      { heading: "English and French", content: "Products for Quebec or national audiences often need French. We build bilingual interfaces and websites with separate language versions and translated metadata." },
      { heading: "Pricing in CAD", content: "Projects are quoted as fixed CAD prices with milestone payments, or as a monthly rate for dedicated developers, with all code and IP owned by your company." },
      { heading: "What we build for Canadian clients", content: "Websites and online stores, mobile apps, customer portals and AI automation. See our pages for web development in Canada and Calgary, app development in Calgary and software development in Toronto." },
      { heading: "How a typical project runs", content: "After a call in your morning we send a written scope and fixed CAD price. Development runs in short sprints with a demo at the end of each, and you can test builds or staging links between calls. Launch includes deployment to your cloud account, monitoring and handover documentation." },
      { heading: "Accessibility", content: "Ontario's accessibility rules apply to many organisations' websites, and accessible products serve every customer better. We build to WCAG guidelines with proper contrast, keyboard navigation and screen-reader support from the start." },
      { heading: "Choosing an outsourcing partner", content: "Ask any partner for live examples, the names and roles of the people who will work on your project, how often you will see working software, and who owns the code and accounts. Compare proposals on the same written scope rather than on hourly rates alone." },
      { heading: "Support after launch", content: "After launch we offer monthly support in CAD for monitoring, security updates, bug fixes and new features, or a documented handover if your own developers will continue the work." },
    ],
    faqs: [
      { question: "Is there enough time-zone overlap with Canada?", answer: "There is a few hours of overlap in your early morning, which we use for calls and reviews. The rest of the work happens overnight, so you wake up to progress and test builds." },
      { question: "Can you host our data in Canada?", answer: "Yes. We can deploy to Canadian cloud regions such as AWS Canada Central or Azure Canada when your industry or clients require Canadian data residency." },
      { question: "How much does custom software cost for a Canadian company?", answer: "We quote a fixed CAD price after a free scoping call. Because our team is offshore, the total is usually well below Canadian agency rates for the same scope." },
      { question: "How do we get started?", answer: "Send us a short description on WhatsApp or through the contact form. We schedule a call in your morning and send a written proposal with a fixed CAD price within 48 hours." },
    ],
  },
  australia: {
    intro:
      "Australian businesses trust Devsynx for high-speed software development, custom web applications, and autonomous AI automation with rapid sprint turnarounds.",
    whyOffshore:
      "Teams across Sydney, Melbourne, Brisbane, and Perth benefit from our timezone advantage—tasks discussed during your afternoon are developed, tested, and staged for review overnight.",
    delivery:
      "Our Australian clients enjoy dedicated Slack communication, weekly video reviews, fixed-price discovery sprints, and cloud architectures optimized for Australian users.",
    industries: ["Mining & Logistics", "Fintech & Wealth", "Real Estate & PropTech", "E-Commerce", "Health & Wellness"],
    guideTitle: "Working With DEVSYNX From Australia",
    guide: [
      { heading: "Using the time difference", content: "Australia's east coast is five to six hours ahead of Pakistan. We meet during your afternoon, then our team works through your evening and night, so changes discussed in a call are often ready to review the next morning." },
      { heading: "Privacy and data hosting", content: "Systems that handle personal information should follow the Australian Privacy Principles. We minimise personal data, document how it is used and can host in Australian cloud regions such as Sydney when your clients or sector expect it." },
      { heading: "GST, payments and local services", content: "Online stores and booking systems need GST on invoices, Australian payment options such as cards, Apple Pay and buy-now-pay-later services, and shipping or delivery integrations. We set these up for your business and state." },
      { heading: "Accessibility", content: "Australian organisations increasingly expect websites to meet WCAG accessibility guidelines. We build with accessible colours, keyboard navigation and screen-reader labels from the start." },
      { heading: "Pricing in AUD", content: "Projects are quoted as fixed AUD prices with milestone payments, or as monthly rates for dedicated developers, and all code and intellectual property belong to your company." },
      { heading: "How a project runs", content: "After a call we send a written scope and fixed price. Work runs in short sprints with demos, test links and daily written updates, and launch includes deployment, monitoring and a handover document." },
      { heading: "What we build for Australian clients", content: "Websites and online stores, mobile apps, booking and field-service systems, customer portals and AI voice and chat agents. See our Sydney and Melbourne pages for local examples." },
      { heading: "Choosing an offshore partner", content: "Compare proposals on the same written scope, ask to see live products, find out who will actually work on your project and how often you will see working software, and confirm that you will own the code and all accounts from day one." },
      { heading: "Support after launch", content: "After launch we offer monthly support in AUD covering monitoring, security updates, bug fixes and new features, or a documented handover to your own developers." },
      { heading: "Security", content: "We use role-based access, encrypted connections, regular dependency updates and secrets kept out of code. For sensitive projects we work inside your own cloud account and repositories, so you keep control of the system and its data." },
    ],
    faqs: [
      { question: "How much overlap is there with Sydney and Melbourne hours?", answer: "Our working day overlaps with your afternoon, which we use for calls and reviews. Work continues overnight, so you usually see progress first thing in the morning." },
      { question: "Can you host our data in Australia?", answer: "Yes. We can deploy to Australian cloud regions such as AWS or Azure Sydney when your clients or industry require local hosting." },
      { question: "How do you price projects for Australian companies?", answer: "We quote a fixed AUD price after a free call, or a monthly rate for dedicated developers. Because our team is offshore, the cost is usually well below Australian agency rates." },
      { question: "Which Australian cities do you work with?", answer: "Sydney, Melbourne, Brisbane, Perth, Adelaide and regional businesses across Australia, all remotely." },
      { question: "Can you work alongside our in-house team?", answer: "Yes. We regularly join existing teams, follow your coding standards and review process, and work in your repositories and project tools." },
    ],
  },
};

const defaultContent = (country: CountryTarget): CountryContent => ({
  intro: `Businesses in ${country.name} partner with Devsynx for custom software, web applications, mobile products, and AI automation.`,
  whyOffshore:
    `Our Pakistan-based engineering hub offers cost-efficient delivery, senior architects, and overlap with ${country.name} business hours where possible.`,
  delivery:
    "We run agile sprints, share weekly progress, and deploy to AWS, Azure, or Google Cloud with security best practices.",
  industries: ["SaaS", "Healthcare", "Retail", "Logistics", "Professional Services"],
});

export function getCountryPageContent(country: CountryTarget): CountryContent {
  return contentBySlug[country.slug] ?? defaultContent(country);
}
