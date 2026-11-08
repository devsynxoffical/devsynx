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
import "@/styles/city-landing.css";
import "@/styles/nav.css";
import "@/styles/responsive.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06909D",
};

const siteDescription =
  "Custom software, AI systems, and SaaS products built for growth. Production-ready MVPs delivered in under 30 days. Trusted by 300+ clients worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL("https://devsynx.com"),
  verification: {
    google: "oAtkeRVxkEt7aCuVLEfrbNTCiNnAQenDnFwXZlf2GzE",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
        : {}),
      indexnow: "devsynx2026indexnow4c8f9b2a",
    },
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
    "AI automation services",
    "technical SEO agency",
    "custom web development",
    "SaaS product development",
    "offshore software development",
    "business process automation",
    "United States",
    "United Kingdom",
    "UAE",
    "Germany",
    "Canada",
    "Australia",
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
  // No site-wide canonical here: each page sets its own via buildPageMetadata.
  // A layout-level canonical made every page without its own (including the
  // 404 page) point at the homepage.
  category: "Technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://devsynx.com/#organization",
  name: "DEVSYNX",
  legalName: "DEVSYNX Private Limited",
  alternateName: ["Devsynx", "Dev Synx"],
  url: "https://devsynx.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://devsynx.com/logo.png",
    width: 512,
    height: 512,
  },
  image: "https://devsynx.com/logo.png",
  description:
    "DEVSYNX Private Limited is a software development company in Islamabad, Pakistan. It builds custom software, AI automation and AI agents, web and mobile apps, SaaS products and Shopify stores, and provides SEO and digital marketing, for clients in Pakistan, the United States, the United Kingdom, Canada, Australia and the UAE.",
  email: "info@devsynx.com",
  telephone: "+92-302-946-2542",
  founder: [
    {
      "@type": "Person",
      name: "Syed Hassan Ali Shah",
      jobTitle: "CEO and Founder",
    },
    {
      "@type": "Person",
      name: "Sana Fatima",
      jobTitle: "Co-Founder",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressRegion: "Islamabad Capital Territory",
    addressCountry: "PK",
  },
  sameAs: [...ORGANIZATION_SAME_AS],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+92-302-946-2542",
      email: "info@devsynx.com",
      availableLanguage: ["English", "Urdu"],
      areaServed: ["US", "GB", "AE", "DE", "CA", "AU", "PK"],
    },
  ],
  areaServed: [
    { "@type": "City", name: "Islamabad" },
    { "@type": "City", name: "Rawalpindi" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Germany" },
  ],
  knowsAbout: [
    "Custom software development",
    "AI automation",
    "AI agent development",
    "Web development",
    "Mobile app development",
    "SaaS development",
    "Shopify development",
    "Technical SEO",
    "Next.js web development",
    "Voice AI bots",
    "Search engine optimization",
    "Digital marketing",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DEVSYNX",
  url: "https://devsynx.com/",
  description: siteDescription,
  publisher: {
    "@type": "Organization",
    "@id": "https://devsynx.com/#organization",
  },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VP1M3HVXMD"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-VP1M3HVXMD');
            `,
          }}
        />
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
