import type { Metadata } from "next";
import { LocalLandingPage } from "@/components/LocalLandingPage";
import { getLocalPage } from "@/seo/localPages";
import { buildPageMetadata } from "@/seo/metadata";

const page = getLocalPage("web-design-company-doha");

export const metadata: Metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  keywords: page.keywords,
});

export default function WebDesignCompanyDohaPage() {
  return <LocalLandingPage page={page} />;
}
