import type { Metadata } from "next";
import { LocalLandingPage } from "@/components/LocalLandingPage";
import { getLocalPage } from "@/seo/localPages";
import { buildPageMetadata } from "@/seo/metadata";

const page = getLocalPage("seo-services-pakistan");

export const metadata: Metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  keywords: page.keywords,
});

export default function SeoServicesPakistanPage() {
  return <LocalLandingPage page={page} />;
}
