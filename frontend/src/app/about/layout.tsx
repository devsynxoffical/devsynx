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
  title: "About Devsynx — Software & AI Agency in Islamabad",
  description:
    "Devsynx is a full-service software and AI agency founded in Islamabad, Pakistan. We help businesses launch products, automate operations, and scale with technology.",
  path: "/about/",
  keywords: [
    "about devsynx",
    "software company pakistan",
    "ai agency islamabad",
    ...brandVariantKeywords,
    ...coreIntentKeywords.slice(0, 10),
    ...highIntentLongTailKeywords.slice(0, 6),
    ...quickWinKeywords.slice(0, 6),
    ...blogIntentKeywords.slice(0, 6),
    ...topCountryKeywords.slice(0, 10),
  ],
  ogImageAlt: "About Devsynx — Software & AI Agency",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
