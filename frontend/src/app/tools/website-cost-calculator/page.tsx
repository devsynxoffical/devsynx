import type { Metadata } from "next";
import { ToolPageView } from "@/components/ToolPageView";
import { getToolPage } from "@/seo/toolPages";
import { buildPageMetadata } from "@/seo/metadata";

const page = getToolPage("website-cost-calculator");

export const metadata: Metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  keywords: page.keywords,
});

export default function WebsiteCostCalculatorPage() {
  return <ToolPageView page={page} />;
}
