export type CountryTarget = {
  slug: string;
  name: string;
};

export type ServiceTarget = {
  slug: string;
  name: string;
  shortDescription: string;
};

export const countryTargets: CountryTarget[] = [
  { slug: "usa", name: "USA" },
  { slug: "uk", name: "UK" },
  { slug: "france", name: "France" },
  { slug: "germany", name: "Germany" },
  { slug: "canada", name: "Canada" },
  { slug: "australia", name: "Australia" },
  { slug: "uae", name: "UAE" },
  { slug: "dubai", name: "Dubai" },
  { slug: "saudi-arabia", name: "Saudi Arabia" },
  { slug: "qatar", name: "Qatar" },
  { slug: "netherlands", name: "Netherlands" },
  { slug: "sweden", name: "Sweden" },
  { slug: "norway", name: "Norway" },
  { slug: "italy", name: "Italy" },
  { slug: "spain", name: "Spain" },
  { slug: "switzerland", name: "Switzerland" },
  { slug: "singapore", name: "Singapore" },
  { slug: "india", name: "India" },
  { slug: "japan", name: "Japan" },
  { slug: "south-korea", name: "South Korea" },
];

export const serviceTargets: ServiceTarget[] = [
  {
    slug: "web-development",
    name: "Web Development",
    shortDescription:
      "Custom, high-performance websites and web applications built for growth.",
  },
  {
    slug: "software-development",
    name: "Software Development",
    shortDescription:
      "Custom software systems aligned to your business workflows and goals.",
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    shortDescription:
      "AI and workflow automation solutions to reduce manual work and increase efficiency.",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortDescription:
      "Cross-platform and native mobile applications built for performance and scale.",
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    shortDescription:
      "Cloud architecture, migration, and optimization services for reliable operations.",
  },
];

export function getCountryBySlug(slug: string): CountryTarget | undefined {
  return countryTargets.find((country) => country.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceTarget | undefined {
  return serviceTargets.find((service) => service.slug === slug);
}

export function getLandingPageParams() {
  return countryTargets.flatMap((country) =>
    serviceTargets.map((service) => ({
      country: country.slug,
      service: service.slug,
    }))
  );
}
