export type SolutionTopic = {
  slug: string;
  title: string;
  description: string;
  focusKeywords: string[];
};

export const solutionTopics: SolutionTopic[] = [
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
];

export function getSolutionTopicBySlug(slug: string): SolutionTopic | undefined {
  return solutionTopics.find((topic) => topic.slug === slug);
}
