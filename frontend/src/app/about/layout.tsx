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
  title: "About DEVSYNX: Software and AI Engineering Company",
  description:
    "DEVSYNX is a software and AI engineering company in Islamabad, Pakistan, serving clients in the US, UK, UAE and Pakistan.",
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
  ogImageAlt: "About Devsynx | Software & AI Agency",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
