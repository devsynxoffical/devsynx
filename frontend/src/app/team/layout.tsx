import type { Metadata } from "next";
import { brandVariantKeywords, coreIntentKeywords } from "@/seo/keywords";
import { buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Team — Leadership & Specialists",
  description:
    "Meet the Devsynx team — founders, engineers, and specialists delivering custom software, AI solutions, and medical billing expertise for clients worldwide.",
  path: "/team/",
  keywords: [
    "devsynx team",
    "software development team pakistan",
    "devsynx leadership",
    ...coreIntentKeywords.slice(0, 6),
    ...brandVariantKeywords,
  ],
  ogImageAlt: "Devsynx Team",
});

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
