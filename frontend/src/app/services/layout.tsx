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

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Software, AI and Marketing Services",
    description:
      "20 services from one team: custom software, AI automation, web and mobile apps, SaaS, cloud, SEO and digital marketing. See what we build.",
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
    ogImageAlt: "DEVSYNX Services",
  }),
  title: {
    default: "Software, AI and Marketing Services",
    template: "%s | DEVSYNX",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
