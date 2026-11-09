/**
 * AI SEO / AEO / GEO service page. Demand (OpenSEO, 9 Nov 2026):
 * US "ai seo agency" 1,600 (KD 0), "ai seo services" 1,000 (KD 2), "llm seo" 720 (KD 8),
 * "aeo agency" 590 (KD 1), "aeo services" 390 (KD 9), "seo for chatgpt" 320 (KD 5);
 * UK "ai seo agency" 480 (KD 2), "ai seo services" 390 (KD 7), "geo agency" 260 (KD 0).
 */
import type { LocalPage } from "./localPages";

export const aeoPage: LocalPage = {
  slug: "ai-seo-agency",
  path: "/ai-seo-agency/",
  group: "global",
  navLabel: "AI SEO Agency (AEO & GEO)",
  metaTitle: "AI SEO Agency: AEO & GEO Services",
  metaDescription:
    "AI SEO agency for answer engine optimization (AEO) and generative engine optimization (GEO): get your brand understood, cited and recommended in Google AI Overviews, ChatGPT and Perplexity.",
  keywords: ["ai seo agency", "ai seo services", "aeo agency", "aeo services", "geo agency", "generative engine optimization agency", "answer engine optimization agency", "llm seo", "seo for chatgpt", "how to rank in chatgpt"],
  serviceName: "AI SEO (AEO & GEO)",
  placeLabel: "",
  areaType: "Country",
  areaServed: ["United States", "United Kingdom", "United Arab Emirates", "Canada", "Australia", "Pakistan"],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "AI SEO Agency", path: "/ai-seo-agency/" },
  ],
  badge: "AEO · GEO · LLM SEO",
  h1Before: "AI SEO Agency for",
  h1Highlight: "AEO & GEO",
  quickAnswer:
    "DEVSYNX is an AI SEO agency. We optimise your website and brand for answer engines and generative search, meaning Google AI Overviews, ChatGPT search, Perplexity, Gemini and Copilot, as well as classic Google results. That means making your pages easy for AI systems to crawl and quote, giving clear factual answers, building consistent entity information about your business across the web, and tracking where AI tools mention you. Nobody can guarantee an AI will cite you; we improve the signals these systems rely on and measure the results.",
  whatsappText: "Hi DEVSYNX, I want my business to show up in ChatGPT and Google AI Overviews.",
  stats: [
    { value: "AEO", label: "Answer Engine Optimization" },
    { value: "GEO", label: "Generative Engine Optimization" },
    { value: "Dev-led", label: "Technical Fixes In-House" },
    { value: "Monthly", label: "AI Visibility Reporting" },
  ],
  introTag: "Why AI SEO",
  introTitle: "Search Is Becoming an Answer, Not a List of Links",
  intro: [
    "More and more buyers ask ChatGPT, Perplexity or Google's AI Overviews which company to hire, which tool to use or how much something costs, and act on the answer without visiting ten websites. If an AI system doesn't understand your business, or can't find clear facts to quote, you are left out of that answer.",
    "AI SEO, also called answer engine optimization (AEO) and generative engine optimization (GEO), is the work of making your brand easy to understand, trust and cite for these systems. It builds on good classic SEO: AI answers draw heavily on pages that already rank well and are clearly structured.",
    "Because DEVSYNX is a development company, we change the website itself, not just recommend changes: structured data, page structure, crawl access, answer blocks and performance are implemented by our engineers.",
  ],
  highlights: {
    tag: "What We Do",
    title: "The Four Parts of AI SEO",
    cards: [
      { icon: "🕷️", title: "AI Crawl Access", text: "Check that AI crawlers (such as OAI-SearchBot, PerplexityBot and Google's crawlers) can reach your pages and are not blocked by firewalls or bot challenges, and add an llms.txt summary." },
      { icon: "🧱", title: "Answer-Ready Content", text: "Short, factual answers at the top of key pages, question-based headings, FAQs and comparison tables that AI systems can lift and attribute." },
      { icon: "🏷️", title: "Entity & Brand Signals", text: "Consistent name, services, location and facts across your site, schema markup, Google Business Profile, directories and review platforms." },
      { icon: "📊", title: "AI Visibility Tracking", text: "Monthly checks of the prompts your customers use, recording whether and how ChatGPT, Perplexity and AI Overviews mention you and your competitors." },
    ],
  },
  guideTitle: "How AI SEO (AEO & GEO) Works",
  guide: [
    { heading: "What is the difference between SEO, AEO and GEO?", content: "SEO aims to rank pages in search results. AEO (answer engine optimization) aims to have your content used as the direct answer to a question, such as a featured snippet or an AI Overview. GEO (generative engine optimization) aims to have generative AI tools like ChatGPT, Perplexity and Gemini mention, cite or recommend your brand. They overlap heavily: all three reward clear, accurate, well-structured content from a trustworthy source." },
    { heading: "How AI tools decide what to say about you", content: "AI search tools retrieve web pages related to the question, then write an answer from them, often citing sources. They favour pages that rank well, answer the question directly, are easy to parse, and come from sources that other sites describe consistently. Your own site, review platforms, directories, articles and forums all feed into that picture." },
    { heading: "What we change on your website", content: "• A direct answer in the first lines of each key page.\n• Question-style headings matching how people ask.\n• FAQ sections with matching FAQ schema.\n• Organization, Service, Product and Article structured data.\n• Clear facts: what you do, where, for whom, prices or price ranges, and proof such as case studies.\n• Crawl access for AI and search crawlers, and an llms.txt summary.\n• Fast, server-rendered pages, so content is visible without running scripts." },
    { heading: "What happens off your website", content: "AI systems cross-check what you say about yourself. Consistent listings on Google Business Profile and industry directories, genuine reviews, mentions in articles and comparisons, and accurate information on platforms like LinkedIn all strengthen the picture. We identify the sources AI tools already cite in your niche and help you appear in them." },
    { heading: "How we measure results", content: "We agree a set of real buyer prompts, such as \"best [service] company in [city]\", and track monthly whether ChatGPT, Perplexity and Google AI Overviews mention or cite you, alongside classic Search Console data. AI answers vary between runs and users, so we look at trends across many prompts rather than single screenshots." },
    { heading: "What AI SEO cannot promise", content: "No agency controls what an AI model says, and anyone guaranteeing ChatGPT recommendations is overselling. What we can do is remove the reasons you are left out, such as blocked crawlers, unclear pages and inconsistent facts, and build the signals these systems rely on." },
  ],
  servicesTitle: "AI SEO Services",
  services: [
    { icon: "🔍", title: "AI Visibility Audit", text: "Where AI tools mention you today, crawl access, structure and entity gaps." },
    { icon: "✍️", title: "Answer-First Content", text: "Rewriting key pages and building guides that AI systems can quote." },
    { icon: "🏷️", title: "Schema & Entity Setup", text: "Structured data and consistent brand facts across your site." },
    { icon: "🛠️", title: "Technical SEO", text: "Speed, rendering, indexing and crawl access fixed in code.", href: "/services/seo-services/", linkLabel: "Technical SEO" },
    { icon: "🌍", title: "Local & International SEO", text: "City and country pages for markets you serve.", href: "/seo-agency-dubai/", linkLabel: "SEO Agency Dubai" },
    { icon: "🤖", title: "AI Automation", text: "Chatbots and agents built on your own content.", href: "/ai-automation-agency/", linkLabel: "AI Automation Agency" },
  ],
  caseStudiesTitle: "SEO and Search Results We Have Delivered",
  caseStudyIds: ["progenius-students-seo", "rankmora", "ustaad-ae", "productboxeswholesale", "topcustomboxes", "acutepharmacy"],
  pricingTitle: "How AI SEO Engagements Work",
  pricingNote: "Quoted in USD, GBP, AED or PKR after a free AI visibility check. No long lock-in.",
  pricingColumns: ["Engagement", "Timeline", "How It's Priced", "What's Included"],
  pricing: [
    ["AI Visibility Audit", "2 Weeks", "Fixed fee", "Prompt tracking baseline, crawl access, content and entity gaps, 90-day plan"],
    ["Implementation Sprint", "3 – 6 Weeks", "Fixed price", "Schema, answer blocks, page rewrites, llms.txt, technical fixes"],
    ["Monthly AI SEO", "Monthly, min. 3 months", "Monthly retainer", "Content, entity building, citations outreach, monthly AI visibility report"],
    ["Classic SEO Add-on", "Monthly", "Monthly retainer", "Rankings, technical SEO and local SEO alongside AI work"],
  ],
  areasTitle: "Who We Work With",
  areasNote: "B2B and service businesses in these markets, remotely.",
  areas: ["United States", "United Kingdom", "United Arab Emirates", "Saudi Arabia", "Qatar", "Canada", "Australia", "Pakistan"],
  related: [
    { href: "/seo-agency-dubai/", label: "SEO Agency Dubai" },
    { href: "/seo-services-pakistan/", label: "SEO Services Pakistan" },
    { href: "/blog/nextjs-seo-optimization-guide/", label: "Next.js SEO Guide" },
    { href: "/ai-automation-agency/", label: "AI Automation Agency" },
  ],
  faqs: [
    { question: "What is an AI SEO agency?", answer: "An AI SEO agency optimises a business's website and online presence so that AI search tools such as Google AI Overviews, ChatGPT, Perplexity and Gemini understand it correctly and are more likely to mention or cite it, alongside classic search rankings." },
    { question: "What is the difference between AEO and GEO?", answer: "AEO (answer engine optimization) focuses on having your content used as the direct answer to questions, such as AI Overviews and featured snippets. GEO (generative engine optimization) focuses on being mentioned and cited by generative AI tools like ChatGPT and Perplexity. In practice they use the same foundations." },
    { question: "Can you guarantee my business will appear in ChatGPT?", answer: "No. Nobody controls what an AI model says. We remove common blockers, strengthen the signals AI systems rely on, and track your visibility across many real prompts each month." },
    { question: "How long does AI SEO take?", answer: "Technical and on-page changes can affect AI answers within weeks once pages are recrawled. Building broader brand signals, such as reviews, mentions and listings, takes several months." },
    { question: "Do I still need normal SEO?", answer: "Yes. AI answers draw heavily on pages that already rank well and are clearly structured, so classic SEO and AI SEO work together." },
  ],
  ctaTitle: "Get a Free AI Visibility Check",
};
