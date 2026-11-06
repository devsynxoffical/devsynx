import type { Metadata } from "next";
import { LocalLandingPage } from "@/components/LocalLandingPage";
import { getLocalPage } from "@/seo/localPages";
import { buildPageMetadata } from "@/seo/metadata";

const page = getLocalPage("software-house-peshawar");

export const metadata: Metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  keywords: page.keywords,
});

export default function SoftwareHousePeshawarPage() {
  return <LocalLandingPage page={page} />;
}
