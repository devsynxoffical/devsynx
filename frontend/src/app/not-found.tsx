import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Return to the Devsynx homepage or explore our services.",
  path: "/",
  robots: { index: false, follow: true },
  includeCanonical: false,
});

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <p className="not-found__code">Error 404</p>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__text">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="not-found__actions">
          <Link href="/" className="btn btn--primary btn--lg">
            Back to home
          </Link>
          <Link href="/services/" className="btn btn--secondary btn--lg">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
