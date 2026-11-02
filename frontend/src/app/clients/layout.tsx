import type { Metadata } from "next";
import { brandVariantKeywords, coreIntentKeywords } from "@/seo/keywords";
import { buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Client Case Studies & Engineering Portfolio",
  description:
    "Explore 70+ verified DEVSYNX case studies across healthcare, SaaS, AI automation, e-commerce, mobile apps, and cloud delivered for global clients.",
  path: "/clients/",
  keywords: [
    "devsynx clients",
    "software development portfolio",
    "client projects",
    "case studies",
    ...coreIntentKeywords.slice(0, 6),
    ...brandVariantKeywords,
  ],
  ogImageAlt: "DEVSYNX Client Projects",
});

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
