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
  title: "Contact DEVSYNX: Call, WhatsApp or Book a Call",
  description:
    "Call or WhatsApp DEVSYNX on +92 302 946 2542, email info@devsynx.com, or book a free 30 minute call. Reply within 24 hours.",
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
