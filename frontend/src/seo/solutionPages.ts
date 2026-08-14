export type SolutionTopic = {
  slug: string;
  title: string;
  description: string;
  focusKeywords: string[];
};

export const solutionTopics: SolutionTopic[] = [
  {
    slug: "custom-software-development-company",
    title: "Custom Software Development Company",
    description:
      "Custom software development for startups, SMEs, and enterprises with scalable architecture and clear delivery.",
    focusKeywords: [
      "custom software development company",
      "custom software development services",
      "enterprise software development",
    ],
  },
  {
    slug: "web-development-company-services",
    title: "Web Development Company Services",
    description:
      "Web development services for corporate websites, web apps, and product platforms using modern frameworks.",
    focusKeywords: [
      "web development company",
      "website development services",
      "web application development",
    ],
  },
  {
    slug: "software-application-development",
    title: "Software Application Development",
    description:
      "Design and development of custom software applications with high performance and business-first workflows.",
    focusKeywords: [
      "software application development",
      "application development company",
      "business software solutions",
    ],
  },
  {
    slug: "ai-automation-services",
    title: "AI Automation Services",
    description:
      "AI automation and workflow optimization services to reduce manual work and improve operational speed.",
    focusKeywords: [
      "ai automation services",
      "business process automation",
      "workflow automation company",
    ],
  },
  {
    slug: "ai-software-development",
    title: "AI Software Development",
    description:
      "Build AI-powered products with custom models, intelligent assistants, and practical automation flows.",
    focusKeywords: [
      "ai software development",
      "ai development company",
      "artificial intelligence solutions",
    ],
  },
  {
    slug: "mvp-development-company",
    title: "MVP Development Company",
    description:
      "Launch your MVP quickly with focused scope, iterative delivery, and production-ready engineering.",
    focusKeywords: [
      "mvp development company",
      "build mvp fast",
      "startup product development",
    ],
  },
  {
    slug: "nextjs-react-development-company",
    title: "Next.js and React Development Company",
    description:
      "Modern frontend and full-stack engineering with Next.js and React for high-performance digital products.",
    focusKeywords: [
      "nextjs development company",
      "react development company",
      "frontend development services",
    ],
  },
  {
    slug: "cloud-migration-services",
    title: "Cloud Migration Services",
    description:
      "Cloud migration, architecture, and DevOps services to improve reliability, scale, and security.",
    focusKeywords: [
      "cloud migration services",
      "cloud solutions company",
      "aws azure google cloud migration",
    ],
  },
  {
    slug: "saas-product-development-services",
    title: "SaaS Product Development Services",
    description:
      "End-to-end SaaS product engineering, from product strategy to scalable multi-tenant deployment.",
    focusKeywords: [
      "saas development company",
      "saas product development services",
      "multi-tenant software development",
    ],
  },
  {
    slug: "dedicated-development-team-services",
    title: "Dedicated Development Team Services",
    description:
      "Hire a dedicated software team for long-term product engineering, feature velocity, and stable delivery.",
    focusKeywords: [
      "dedicated development team",
      "hire software developers",
      "offshore software development team",
    ],
  },
  {
    slug: "devops-cicd-services",
    title: "DevOps and CI/CD Services",
    description:
      "Implement CI/CD pipelines, infrastructure automation, and release workflows to ship faster and safer.",
    focusKeywords: [
      "devops services",
      "cicd services",
      "deployment automation",
    ],
  },
  {
    slug: "mobile-app-development-company",
    title: "Mobile App Development Company",
    description:
      "Mobile app development for iOS and Android with strong UX, scalability, and post-launch support.",
    focusKeywords: [
      "mobile app development company",
      "ios android app development",
      "cross platform app development",
    ],
  },
  {
    slug: "ai-calling-agent-for-business",
    title: "AI Calling Agent for Business",
    description:
      "Deploy AI voice agents for lead qualification, appointment booking, and inbound call handling.",
    focusKeywords: [
      "ai calling agent for business",
      "ai voice agent for business",
      "voice ai for lead generation",
    ],
  },
  {
    slug: "flutter-app-development-company",
    title: "Flutter App Development Company",
    description:
      "Build cross-platform iOS and Android apps with Flutter for speed, consistency, and lower maintenance costs.",
    focusKeywords: [
      "flutter app development company",
      "cross-platform app development",
      "flutter development services",
    ],
  },
  {
    slug: "chatgpt-integration-services",
    title: "ChatGPT Integration Services",
    description:
      "Integrate ChatGPT and OpenAI APIs into products and workflows for support, content, and automation use cases.",
    focusKeywords: [
      "chatgpt integration services",
      "openai api integration",
      "llm development company",
    ],
  },
  {
    slug: "gdpr-compliant-software-development",
    title: "GDPR Compliant Software Development",
    description:
      "Software architecture and implementation aligned with GDPR compliance requirements for EU-facing products.",
    focusKeywords: [
      "gdpr compliant software development",
      "secure software development europe",
      "data privacy software development",
    ],
  },
  {
    slug: "software-development-company-pakistan",
    title: "Software Development Company Pakistan",
    description:
      "Offshore software development teams from Pakistan serving global startups and enterprise clients.",
    focusKeywords: [
      "software development company pakistan",
      "software house pakistan",
      "hire pakistani developers",
    ],
  },
  {
    slug: "why-outsource-to-pakistan",
    title: "Why Outsource Software Development to Pakistan",
    description:
      "Learn why global companies outsource software development to Pakistan for quality engineering and cost efficiency.",
    focusKeywords: [
      "why outsource to pakistan",
      "offshore software development pakistan",
      "cost of hiring developers pakistan vs india",
    ],
  },
];

export function getSolutionTopicBySlug(slug: string): SolutionTopic | undefined {
  return solutionTopics.find((topic) => topic.slug === slug);
}
