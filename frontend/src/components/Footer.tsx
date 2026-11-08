import React from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { ORGANIZATION_SAME_AS } from "@/seo/metadata";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const coreServiceSlugs = [
    "custom-web-development",
    "ai-automation",
    "seo-services",
    "saas-product-development",
    "mobile-app-development",
    "voice-ai-bots",
  ];
  const topServices = coreServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[0] => Boolean(s));

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Company Info */}
          <div className="footer__brand">
            <Link href="/" className="footer__logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '16px' }}>
              <Image 
                src="/logo.png" 
                alt="Devsynx Logo" 
                width={42}
                height={42}
                style={{ objectFit: "contain" }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.45rem', color: '#FFFFFF', letterSpacing: '0.06em' }}>
                DEVSYNX
              </span>
            </Link>
            <p className="footer__desc">
              Reliable software and AI systems that help businesses grow, automate, and move faster.
              Crafted in Islamabad, shipped worldwide.
            </p>
            <div className="footer__contact-list">
              <a href="mailto:info@devsynx.com" className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6L12 13 2 6"/></svg>
                  info@devsynx.com
                </a>
              <a href="tel:+923029462542" className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg>
                  +92 302 946 2542
                </a>
              <a
                href="https://wa.me/923029462542"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-item"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a9.5 9.5 0 0 1-14.16 8.32L3 21l1.26-3.69A9.5 9.5 0 1 1 21 11.5z"/><path d="M8.5 9.5c.2 1.5 1.6 3.4 3.1 4.2 1.1.6 2.2.8 3.4.3"/></svg>
                WhatsApp: +92 302 946 2542
              </a>
              <span className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Islamabad and Rawalpindi, Pakistan
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="footer__section">
            <div className="footer__title">Services</div>
            <ul className="footer__links">
              {topServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="footer__link">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/" className="footer__link footer__link--all">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <div className="footer__title">Industries</div>
            <ul className="footer__links">
              <li><Link href="/healthcare-software-development/" className="footer__link">Healthcare</Link></li>
              <li><Link href="/real-estate-software-development/" className="footer__link">Real Estate</Link></li>
              <li><Link href="/fintech-software-development/" className="footer__link">Fintech</Link></li>
              <li><Link href="/edtech-software-development/" className="footer__link">EdTech &amp; E-Learning</Link></li>
              <li><Link href="/field-service-app-development/" className="footer__link">Field Service</Link></li>
            </ul>
          </div>

          <div className="footer__section">
            <div className="footer__title">Locations</div>
            <ul className="footer__links">
              <li><Link href="/software-house-islamabad/" className="footer__link">Islamabad (HQ)</Link></li>
              <li><Link href="/software-house-lahore/" className="footer__link">Lahore</Link></li>
              <li><Link href="/software-house-karachi/" className="footer__link">Karachi</Link></li>
              <li><Link href="/software-development-company-dubai/" className="footer__link">Dubai</Link></li>
              <li><Link href="/software-development-company-new-york/" className="footer__link">New York</Link></li>
              <li><Link href="/software-development-company-london/" className="footer__link">London</Link></li>
              <li><Link href="/locations/" className="footer__link footer__link--all">All Locations →</Link></li>
            </ul>
          </div>

          <div className="footer__section">
            <div className="footer__title">Company</div>
            <ul className="footer__links">
              <li><Link href="/about/" className="footer__link">About Us</Link></li>
              <li><Link href="/team/" className="footer__link">Our Team</Link></li>
              <li><Link href="/clients/" className="footer__link">Case Studies</Link></li>
              <li><Link href="/blog/" className="footer__link">Blog</Link></li>
              <li><Link href="/tools/" className="footer__link">Free Cost Calculators</Link></li>
              <li><Link href="/contact/" className="footer__link">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} DEVSYNX Private Limited. All rights reserved.
          </p>
          <div className="footer__social">
            <a href="https://www.linkedin.com/company/devsynx-offial/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.instagram.com/devsynx.official/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
