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
  title: "Contact Devsynx — Start Your Software Project",
  description:
    "Contact Devsynx for custom software development, AI systems, cloud solutions, and mobile app projects. Book a free consultation and get a response within 24 hours.",
  path: "/contact/",
  keywords: [
    "contact devsynx",
    "hire software developers",
    "ai development company contact",
    ...brandVariantKeywords,
    ...coreIntentKeywords.slice(0, 10),
    ...highIntentLongTailKeywords.slice(0, 6),
    ...quickWinKeywords.slice(0, 6),
    ...blogIntentKeywords.slice(0, 6),
    ...topCountryKeywords.slice(0, 10),
  ],
  ogImageAlt: "Contact Devsynx",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
