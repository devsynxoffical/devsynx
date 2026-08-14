import type { Metadata } from "next";
import {
  blogIntentKeywords,
  brandVariantKeywords,
  coreIntentKeywords,
  highIntentLongTailKeywords,
  quickWinKeywords,
  topCountryKeywords,
} from "@/seo/keywords";
import { buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Software Development & AI Services",
  description:
    "Explore 20+ technology services from Devsynx: custom software, AI and machine learning, web and mobile development, cloud solutions, SaaS, automation, and more.",
  path: "/services/",
  keywords: [
    "software development services",
    "ai services",
    "automation services",
    "saas development",
    ...brandVariantKeywords,
    ...coreIntentKeywords.slice(0, 10),
    ...highIntentLongTailKeywords.slice(0, 6),
    ...quickWinKeywords.slice(0, 6),
    ...blogIntentKeywords.slice(0, 6),
    ...topCountryKeywords.slice(0, 10),
  ],
  ogImageAlt: "Devsynx Services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
