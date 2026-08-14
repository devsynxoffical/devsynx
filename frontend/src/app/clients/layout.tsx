import type { Metadata } from "next";
import { brandVariantKeywords, coreIntentKeywords } from "@/seo/keywords";
import { buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Client Projects & Case Studies",
  description:
    "Explore Devsynx client projects across healthcare, SaaS, AI automation, e-commerce, mobile apps, and cloud — delivered for businesses worldwide.",
  path: "/clients/",
  keywords: [
    "devsynx clients",
    "software development portfolio",
    "client projects",
    "case studies",
    ...coreIntentKeywords.slice(0, 6),
    ...brandVariantKeywords,
  ],
  ogImageAlt: "Devsynx Client Projects",
});

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
