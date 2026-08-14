import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  brandVariantKeywords,
  coreIntentKeywords,
  highIntentLongTailKeywords,
  quickWinKeywords,
} from "@/seo/keywords";
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_AREA_SERVED,
  ORGANIZATION_SAME_AS,
  SITE_NAME,
  TWITTER_HANDLE,
} from "@/seo/metadata";
import { pathToAbsoluteUrl } from "@/seo/priorityPages";
import "@/styles/fonts.css";
import "./globals.css";
import "@/styles/about.css";
import "@/styles/responsive.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06909D",
};

const siteDescription =
  "Devsynx builds custom software, AI systems, and SaaS products that drive real business growth. MVP delivered in under 30 days. Trusted by 50+ clients worldwide. Based in Pakistan, serving globally.";

export const metadata: Metadata = {
  metadataBase: new URL("https://devsynx.com"),
  verification: {
    google: "oAtkeRVxkEt7aCuVLEfrbNTCiNnAQenDnFwXZlf2GzE",
  },
  title: {
    default: "Custom Software Development & AI Solutions | Devsynx",
    template: "%s | Devsynx",
  },
  description: siteDescription,
  keywords: [
    "software development company",
    "custom software development",
    "AI solutions",
    "web development",
    "mobile app development",
    "SaaS development",
    "business process automation",
    "Islamabad",
    "Pakistan",
    ...brandVariantKeywords,
    ...coreIntentKeywords.slice(0, 12),
    ...highIntentLongTailKeywords.slice(0, 8),
    ...quickWinKeywords.slice(0, 6),
  ],
  authors: [{ name: SITE_NAME, url: pathToAbsoluteUrl("/") }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: pathToAbsoluteUrl("/"),
    siteName: SITE_NAME,
    title: "Custom Software Development & AI Solutions | Devsynx",
    description: siteDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development & AI Solutions | Devsynx",
    description: siteDescription,
    images: [DEFAULT_OG_IMAGE.url],
    creator: TWITTER_HANDLE,
  },
  alternates: {
    canonical: pathToAbsoluteUrl("/"),
  },
  category: "Technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: ["DEVSYNX", "Devsinc", "Dev Sinc", "Dev Synx"],
  url: pathToAbsoluteUrl("/"),
  logo: pathToAbsoluteUrl("/logo.png"),
  description:
    "Devsynx builds reliable, scalable software and AI systems that help businesses grow, automate, and move faster.",
  email: "info@devsynx.com",
  telephone: "+923029462542",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  sameAs: [...ORGANIZATION_SAME_AS],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+923029462542",
    contactType: "customer service",
    email: "info@devsynx.com",
    availableLanguage: ["English"],
  },
  foundingLocation: {
    "@type": "Place",
    name: "Islamabad, Pakistan",
  },
  areaServed: ORGANIZATION_AREA_SERVED,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: pathToAbsoluteUrl("/"),
  description: siteDescription,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: {
      "@type": "ImageObject",
      url: pathToAbsoluteUrl("/logo.png"),
    },
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
