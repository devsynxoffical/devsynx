/**
 * App development city pages built from the owner's services-first priority
 * (15 Nov 2026). Demand: "app development company new york" 590 (KD 0),
 * "app development company london" 390 (KD 30) + "mobile app developers
 * london" 480 (KD 31). Rendered via intlPage().
 */
import type { IntlConfig } from "./localPages";

const M = "/services/mobile-app-development/";

export const appCityConfigs: IntlConfig[] = [
  {
    slug: "app-development-company-new-york",
    service: "app",
    city: "New York",
    country: "United States",
    countryHub: "/usa/",
    currency: "USD",
    areas: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island", "Midtown", "Flatiron", "SoHo", "Long Island City", "Jersey City", "Hoboken", "White Plains"],
    caseStudyIds: ["spicify-app", "ballchart", "superhuman-mail", "thestarmint", "saviored", "purrchase-ai"],
    keywords: ["app development company new york", "mobile app development company new york", "app developers new york", "mobile app developers nyc", "app development nyc", "iphone app developers new york"],
    quickAnswerExtra: "We design and build iOS and Android apps for New York startups, consumer brands and agencies, at a fixed USD price with live calls in the Eastern Time morning.",
    intro: [
      "New York app projects tend to be ambitious and fast-moving: consumer apps that need to look as good as the brand, fintech and media products that must handle real traffic on day one, and startup MVPs that have to be in investors' hands within weeks. Local agencies are excellent, but NYC rates make a first version expensive.",
      "We build the same kind of apps from an offshore team: Flutter apps for iOS and Android from one codebase, a Node.js or Firebase backend and an admin panel, with a written fixed price in USD. Our app work includes the Spicify social app, the BallChart sports platform and the Superhuman Mail client, and we work in your repositories and tools.",
      "You get a weekly test build on your phone, a daily written update in Slack and live calls during the Eastern Time morning.",
    ],
    highlights: {
      tag: "New York Apps",
      title: "Apps We Build for New York Companies",
      cards: [
        { icon: "🚀", title: "Startup MVPs", text: "A first iOS and Android release in weeks, ready for investor demos and early users." },
        { icon: "🛍️", title: "Consumer & Retail Apps", text: "Shopping, loyalty and membership apps for fashion, beauty and DTC brands." },
        { icon: "📰", title: "Media & Creator Apps", text: "Feeds, subscriptions and creator tools for publishers and communities." },
        { icon: "💳", title: "Fintech & Web3 Dashboards", text: "Portfolio, payments and wallet experiences with secure logins." },
      ],
    },
    guideTitle: "Building an App in New York Without NYC Agency Costs",
    guide: [
      { heading: "Start with the smallest app that proves the idea", content: "Most New York founders do not need every feature on day one. We agree the one flow that proves demand, such as booking, buying or posting, and launch that first. It reaches users sooner and costs a fraction of a full build." },
      { heading: "One codebase for iPhone and Android", content: "New York audiences are split between iPhone and Android. Flutter lets one team ship both with near-native performance, so updates reach every user at once and maintenance stays affordable." },
      { heading: "Plan for scale and security early", content: "Apps that get press or a launch spike need a backend that scales and authentication that is hard to break. We use managed cloud services, rate limiting and proper secrets handling from the first version." },
      { heading: "Own everything", content: "The apps are published under your Apple and Google developer accounts, and the source code, backend and designs are transferred to your company at each paid milestone." },
    ],
    servicesTitle: "App Development Services in New York",
    services: [
      { icon: "📱", title: "iOS & Android Apps", text: "Flutter apps for both platforms, with native modules where a feature needs them.", href: M, linkLabel: "Mobile App Development" },
      { icon: "🧪", title: "Clickable Prototypes", text: "Figma prototypes you can test with users and show investors before development." },
      { icon: "⚙️", title: "Backend & Admin Panel", text: "APIs, databases and an admin dashboard to manage users, content and orders." },
      { icon: "💳", title: "Payments & Subscriptions", text: "Apple Pay, Google Pay, Stripe and in-app subscriptions." },
      { icon: "🤖", title: "AI Features", text: "Chat, search, recommendations and voice built into your app.", href: "/ai-automation-agency/", linkLabel: "AI Automation" },
      { icon: "🛠️", title: "App Rescue & Maintenance", text: "Take over an existing app, fix crashes and keep it updated for new OS releases." },
    ],
    pricing: [
      ["App MVP (iOS + Android)", "4 – 8 Weeks", "Fixed price in USD, from about $700", "Core features, login, backend, admin panel, store submission"],
      ["Medium App", "8 – 12 Weeks", "Fixed price in USD, about $1,100 – $1,800", "Payments, notifications, chat or maps, analytics"],
      ["Dedicated App Developer", "Monthly, min. 1 month", "Flat monthly rate in USD", "A Flutter engineer working inside your team"],
      ["Support & Updates", "Ongoing", "Monthly retainer in USD", "Crash monitoring, OS updates and small features"],
    ],
    faqs: [
      { question: "How much does it cost to build an app in New York with DEVSYNX?", answer: "Most apps we build cost between about $700 and $2,500 depending on screens and features, far below typical New York agency quotes. You get a written fixed price after a free scoping call." },
      { question: "What overlap do you have with New York hours?", answer: "Our team covers the Eastern Time morning for stand-ups and live calls, and posts written updates in Slack before your day starts." },
      { question: "Do you sign US contracts and NDAs?", answer: "Yes. We sign an NDA before scoping and work under a US-law agreement that assigns all code and intellectual property to your company." },
      { question: "Can you work with our in-house designers or engineers?", answer: "Yes. We can build from your designs, join your repositories and follow your code review and release process." },
    ],
    related: [
      { href: "/software-development-company-new-york/", label: "Software Development New York" },
      { href: "/web-design-company-new-york/", label: "Web Design New York" },
      { href: M, label: "Mobile App Development" },
      { href: "/tools/app-development-cost-calculator/", label: "App Cost Calculator" },
    ],
  },
  {
    slug: "app-development-company-london",
    service: "app",
    city: "London",
    country: "United Kingdom",
    countryHub: "/uk/",
    currency: "GBP",
    areas: ["City of London", "Shoreditch", "Canary Wharf", "King's Cross", "Soho", "Camden", "Islington", "Hackney", "Southwark", "Kensington", "Croydon", "Richmond"],
    caseStudyIds: ["spicify-app", "doughi", "quickdoctor-ie", "superhuman-mail", "mdt-control", "glitchy-digital-marketing"],
    keywords: ["app development company london", "mobile app developers london", "app developers london", "mobile app development company london", "app development london", "flutter developers london"],
    quickAnswerExtra: "We build iOS and Android apps for London startups, restaurants, retailers and health businesses, at a fixed GBP price with calls during the UK working day.",
    intro: [
      "London has one of the strongest app scenes in Europe, from fintech in the City and Canary Wharf to food, retail and health startups across Shoreditch and King's Cross. It also has some of the highest agency day rates, which makes a first version or a second release costly for small teams.",
      "We build iOS and Android apps in Flutter from one codebase, with the backend, admin panel and store submission included, on a written fixed price in GBP. Our UK and European work includes the Doughi ordering platform, the QuickDoctor telehealth platform and the MDT Control industrial dashboard, alongside consumer apps such as Spicify.",
      "Pakistan is 4 to 5 hours ahead of the UK, so our afternoon overlaps your whole morning for calls and most build work is finished before your day starts.",
    ],
    highlights: {
      tag: "London Apps",
      title: "Apps We Build for London Businesses",
      cards: [
        { icon: "🍕", title: "Food & Ordering", text: "Ordering, delivery and loyalty apps for restaurants and food brands, as with Doughi." },
        { icon: "🩺", title: "Health & Telehealth", text: "Booking, consultation and patient apps, drawing on our QuickDoctor work." },
        { icon: "🏦", title: "Fintech & B2B", text: "Secure customer apps and internal tools for finance and professional services." },
        { icon: "🚀", title: "Startups", text: "MVPs and second versions for pre-seed to Series A teams." },
      ],
    },
    guideTitle: "What London Companies Should Know Before Building an App",
    guide: [
      { heading: "UK GDPR from the first screen", content: "Apps that collect personal data need clear consent, minimal data collection, secure storage and a way for users to delete their account. We build these in from the start and can host data in UK or EU cloud regions." },
      { heading: "Choose Flutter unless you truly need native", content: "For most London apps, Flutter delivers iOS and Android from one codebase with near-native speed and lower long-term cost. We add native Swift or Kotlin only for deep device features." },
      { heading: "Budget for life after launch", content: "Apple and Google change their requirements every year. A small monthly support plan keeps the app working, approved in the stores and improving based on what users ask for." },
      { heading: "Keep control of your product", content: "Apps are published under your own developer accounts, and the code, backend and designs are transferred to you at each paid milestone, so you are never locked in to one supplier." },
    ],
    servicesTitle: "App Development Services in London",
    services: [
      { icon: "📱", title: "iOS & Android Apps", text: "Flutter apps for both platforms, with native code where needed.", href: M, linkLabel: "Mobile App Development" },
      { icon: "🍽️", title: "Ordering & Booking Apps", text: "Menus, carts, delivery zones, table and appointment booking." },
      { icon: "🔐", title: "Secure Customer Apps", text: "Logins, payments and data handling built for UK GDPR." },
      { icon: "⚙️", title: "Backend & Admin Panel", text: "APIs, databases and dashboards for your team." },
      { icon: "📊", title: "IoT & Dashboard Apps", text: "Monitoring and control apps for connected devices and equipment." },
      { icon: "🛠️", title: "App Takeover & Support", text: "Fix, document and continue apps started by another developer." },
    ],
    pricing: [
      ["App MVP (iOS + Android)", "4 – 8 Weeks", "Fixed price in GBP, from about £550", "Core features, login, backend, admin panel, store submission"],
      ["Medium App", "8 – 12 Weeks", "Fixed price in GBP, about £900 – £1,450", "Payments, notifications, chat or maps, analytics"],
      ["Dedicated App Developer", "Monthly, min. 1 month", "Flat monthly rate in GBP", "A Flutter engineer working in UK hours"],
      ["Support & Updates", "Ongoing", "Monthly retainer in GBP", "Crash monitoring, OS updates and small features"],
    ],
    faqs: [
      { question: "How much does it cost to build an app in London with DEVSYNX?", answer: "Most apps we build cost between about £550 and £2,000 depending on screens and features, a fraction of London agency day rates. You get a written fixed price in GBP after a free scoping call." },
      { question: "Are your apps UK GDPR compliant?", answer: "We build with UK GDPR in mind: consent, minimal data collection, encryption, account deletion and UK or EU hosting when required, and we sign a data processing agreement." },
      { question: "Can you work under a UK contract?", answer: "Yes. We can work under a UK-law services agreement that assigns all code and intellectual property to your company, and invoice in GBP." },
      { question: "Can you take over an app another agency built?", answer: "Yes. We review the code, fix urgent issues, document it and continue development, recommending a rebuild only if the code cannot reasonably be maintained." },
    ],
    related: [
      { href: "/web-design-company-london/", label: "Web Design London" },
      { href: "/software-development-company-london/", label: "Software Development London" },
      { href: M, label: "Mobile App Development" },
      { href: "/tools/app-development-cost-calculator/", label: "App Cost Calculator" },
    ],
  },
];
