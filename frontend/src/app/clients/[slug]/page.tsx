import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clientProjects, getAllClientSlugs, getClientBySlug } from "@/data/clients";
import { ClientProjectDetailClient } from "./ClientProjectDetailClient";
import {
  buildBreadcrumbSchema,
  buildCaseStudySchema,
  buildPageMetadata,
} from "@/seo/metadata";
import {
  brandVariantKeywords,
  coreIntentKeywords,
  highIntentLongTailKeywords,
  quickWinKeywords,
  trendingTechKeywords2026,
} from "@/seo/keywords";

// Required for Next.js static export
export function generateStaticParams() {
  return getAllClientSlugs().map((slug) => ({
    slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getClientBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
      robots: { index: false, follow: false },
    };
  }

  const customKeywords = [
    project.clientName,
    project.domain,
    `www.${project.domain}`,
    `${project.clientName} case study`,
    `${project.clientName} software development`,
    `${project.clientName} web platform`,
    `who built ${project.domain}`,
    `who developed ${project.domain}`,
    `${project.clientName} Devsynx`,
    `Devsynx ${project.clientName}`,
    ...project.seoKeywords,
    ...project.tags,
    ...brandVariantKeywords,
    ...coreIntentKeywords.slice(0, 6),
    ...highIntentLongTailKeywords.slice(0, 4),
    ...quickWinKeywords.slice(0, 4),
    ...trendingTechKeywords2026.slice(0, 6),
  ];

  const maxTitleLen = 48;
  const rawTitle = `${project.clientName}: ${project.projectTitle} Case Study`;
  const cleanTitle = rawTitle.length > maxTitleLen
    ? `${project.clientName} Case Study`
    : rawTitle;

  const topMetric = project.metrics?.[0]?.value ? `${project.metrics[0].label}: ${project.metrics[0].value}. ` : "";
  const rawDesc = `How DEVSYNX built ${project.projectTitle} for ${project.clientName}: ${topMetric}${project.description}`;
  const cleanDesc = rawDesc.slice(0, 155);

  return buildPageMetadata({
    title: cleanTitle,
    description: cleanDesc,
    path: `/clients/${project.id}/`,
    keywords: customKeywords,
    ogImageAlt: `${project.clientName} live platform architecture — Built by DEVSYNX`,
  });
}

export default async function ClientDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getClientBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = clientProjects.findIndex((p) => p.id === slug);
  const relatedProjects = clientProjects
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/clients/" },
    { name: project.clientName, path: `/clients/${project.id}/` },
  ]);

  const caseStudySchema = buildCaseStudySchema({
    title: project.projectTitle,
    clientName: project.clientName,
    description: project.description,
    path: `/clients/${project.id}/`,
    image: project.image,
    websiteUrl: project.websiteUrl,
    category: project.category,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <ClientProjectDetailClient
        project={project}
        relatedProjects={relatedProjects}
      />
    </>
  );
}
