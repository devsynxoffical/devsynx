"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/ThemeToggle";

interface NavSubItem {
  name: string;
  href: string;
  desc: string;
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
}

interface NavItem {
  name: string;
  href: string;
  isDropdown?: boolean;
  isPortfolioDropdown?: boolean;
  subItems?: NavSubItem[];
}

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isPortfolioMenuOpen, setIsPortfolioMenuOpen] = useState(false);
  const [isMobilePortfolioExpanded, setIsMobilePortfolioExpanded] = useState(true);
  const pathname = usePathname();

  // Only show transparent header on the home page (which has the dark hero)
  const isHomePage = pathname === "/" || pathname === "";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsPortfolioMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Capabilities", href: "/services/", isDropdown: true },
    {
      name: "Portfolio",
      href: "/clients/",
      isPortfolioDropdown: true,
      subItems: [
        {
          name: "All Projects",
          href: "/clients/",
          desc: "Complete catalog of client work & case studies",
          iconColor: "#06909D",
          iconBg: "rgba(6, 144, 157, 0.12)",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
            </svg>
          ),
        },
        {
          name: "Mobile Applications",
          href: "/portfolio/mobile-applications/",
          desc: "iOS, Android, React Native & video apps",
          iconColor: "#3B82F6",
          iconBg: "rgba(59, 130, 246, 0.12)",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="3" />
              <path d="M12 18h.01" />
            </svg>
          ),
        },
        {
          name: "Custom Software & SaaS",
          href: "/portfolio/software/",
          desc: "Multi-tenant SaaS & enterprise systems",
          iconColor: "#10B981",
          iconBg: "rgba(16, 185, 129, 0.12)",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8" />
              <path d="M12 17v4" />
              <path d="M7 8l3 3-3 3" />
              <path d="M13 14h4" />
            </svg>
          ),
        },
        {
          name: "SEO Results & Rankings",
          href: "/portfolio/seo-results/",
          desc: "Technical SEO & organic revenue growth",
          iconColor: "#F59E0B",
          iconBg: "rgba(245, 158, 11, 0.12)",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          ),
        },
        {
          name: "Digital Marketing & Funnels",
          href: "/portfolio/digital-marketing/",
          desc: "High-ROAS paid media & VSL funnels",
          iconColor: "#EC4899",
          iconBg: "rgba(236, 72, 153, 0.12)",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          ),
        },
        {
          name: "UI / UX Design & 3D",
          href: "/portfolio/ui-ux/",
          desc: "Figma design systems & 3D WebGL visualizers",
          iconColor: "#8B5CF6",
          iconBg: "rgba(139, 92, 246, 0.12)",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l9 4.9V17L12 22l-9-5V6.9L12 2z" />
              <path d="M12 22V12" />
              <path d="M21 6.9l-9 5.1-9-5.1" />
            </svg>
          ),
        },
      ],
    },
    { name: "Team", href: "/team/" },
    { name: "About", href: "/about/" },
    { name: "Contact", href: "/contact/" },
  ];

  const headerClasses = [
    "header",
    scrolled ? "header--scrolled" : "",
    isHomePage && !scrolled && !isMenuOpen ? "header--transparent" : "",
    isMenuOpen ? "header--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header
      className={headerClasses}
      onMouseLeave={() => {
        setIsMegaMenuOpen(false);
        setIsPortfolioMenuOpen(false);
      }}
    >
      <div className="container">
        <div className="header__inner">
          {/* Logo */}
          <Link href="/" className="header__logo" onClick={() => setIsMenuOpen(false)}>
            <Image 
              src="/logo.png" 
              alt="Devsynx Logo" 
              width={40}
              height={40}
              className="header__logo-img"
              style={{ objectFit: "contain" }}
              priority
            />
            <span className="header__logo-text">DEVSYNX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            {navigation.map((item) => {
              if (item.isDropdown) {
                return (
                  <div 
                    key={item.name} 
                    className="header__dropdown-wrapper"
                    onMouseEnter={() => {
                      setIsMegaMenuOpen(true);
                      setIsPortfolioMenuOpen(false);
                    }}
                    style={{ position: "relative" }}
                  >
                    <Link
                      href={item.href}
                      className="header__nav-link"
                      style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
                    >
                      {item.name}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </Link>

                    {/* Capabilities Mega Menu */}
                    {isMegaMenuOpen && (
                      <div 
                        className="header__megamenu" 
                        style={{ 
                          position: "fixed", 
                          top: "var(--header-height)", 
                          left: 0, 
                          right: 0, 
                          background: "var(--header-bg)", 
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          borderBottom: "1px solid var(--color-border)", 
                          boxShadow: "0 20px 50px rgba(0,0,0,0.2)", 
                          padding: "40px 0", 
                          zIndex: 999,
                          color: "var(--color-dark)"
                        }}
                      >
                        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>
                          <div>
                            <h4 style={{ fontSize: "0.813rem", fontWeight: 700, color: "var(--color-primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Digital Transformation</h4>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                              <li><Link href="/services/custom-web-development/" className="megamenu-item" style={{ fontSize: "0.938rem", fontWeight: 600 }}>Web Development</Link></li>
                              <li><Link href="/services/mobile-app-development/" className="megamenu-item" style={{ fontSize: "0.938rem", fontWeight: 600 }}>App Development</Link></li>
                              <li><Link href="/services/custom-web-development/" className="megamenu-item" style={{ fontSize: "0.938rem", fontWeight: 600 }}>Custom Software</Link></li>
                              <li><Link href="/services/ui-ux-design/" className="megamenu-item" style={{ fontSize: "0.938rem", fontWeight: 600 }}>UX/UI Design</Link></li>
                            </ul>
                          </div>
                          <div>
                            <h4 style={{ fontSize: "0.813rem", fontWeight: 700, color: "var(--color-primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Cloud &amp; DevOps</h4>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                              <li><Link href="/services/devops-cicd/" className="megamenu-item" style={{ fontSize: "0.938rem", fontWeight: 600 }}>DevOps &amp; CI/CD</Link></li>
                              <li><Link href="/services/devops-cicd/" className="megamenu-item" style={{ fontSize: "0.938rem", fontWeight: 600 }}>Cloud Infrastructure</Link></li>
                              <li><Link href="/services/devops-cicd/" className="megamenu-item" style={{ fontSize: "0.938rem", fontWeight: 600 }}>Microservices</Link></li>
                            </ul>
                          </div>
                          <div>
                            <h4 style={{ fontSize: "0.813rem", fontWeight: 700, color: "var(--color-primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>AI &amp; Automation</h4>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                              <li><Link href="/services/ai-automation/" className="megamenu-item" style={{ fontSize: "0.938rem", fontWeight: 600 }}>Generative AI &amp; Agents</Link></li>
                              <li><Link href="/services/ai-automation/" className="megamenu-item" style={{ fontSize: "0.938rem", fontWeight: 600 }}>Process Automation</Link></li>
                              <li><Link href="/services/ai-automation/" className="megamenu-item" style={{ fontSize: "0.938rem", fontWeight: 600 }}>Voice Calling Bots</Link></li>
                            </ul>
                          </div>
                          <div>
                            <h4 style={{ fontSize: "0.813rem", fontWeight: 700, color: "var(--color-primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>SaaS &amp; Products</h4>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                              <li><Link href="/services/saas-product-development/" className="megamenu-item" style={{ fontSize: "0.938rem", fontWeight: 600 }}>SaaS Platform Dev</Link></li>
                              <li><Link href="/services/saas-product-development/" className="megamenu-item" style={{ fontSize: "0.938rem", fontWeight: 600 }}>Multi-tenant Architecture</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (item.isPortfolioDropdown) {
                return (
                  <div
                    key={item.name}
                    className="header__dropdown-wrapper"
                    onMouseEnter={() => {
                      setIsPortfolioMenuOpen(true);
                      setIsMegaMenuOpen(false);
                    }}
                    style={{ position: "relative" }}
                  >
                    <Link
                      href={item.href}
                      className="header__nav-link"
                      style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
                    >
                      {item.name}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{
                          transform: isPortfolioMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </Link>

                    {/* Portfolio Rich Dropdown */}
                    {isPortfolioMenuOpen && (
                      <div
                        className="header__portfolio-menu"
                        style={{
                          position: "absolute",
                          top: "calc(100% + 14px)",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "430px",
                          background: "var(--header-bg)",
                          backdropFilter: "blur(24px)",
                          WebkitBackdropFilter: "blur(24px)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "20px",
                          boxShadow: "0 25px 60px rgba(0,0,0,0.22)",
                          padding: "12px",
                          zIndex: 1000,
                        }}
                      >
                        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                          {item.subItems?.map((sub, idx) => (
                            <React.Fragment key={sub.href}>
                              {idx === 1 && (
                                <div style={{ height: "1px", background: "var(--color-border)", margin: "4px 6px" }} />
                              )}
                              <Link
                                href={sub.href}
                                className="portfolio-menu-link"
                                onClick={() => setIsPortfolioMenuOpen(false)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "12px",
                                  padding: "9px 12px",
                                  borderRadius: "12px",
                                  textDecoration: "none",
                                  transition: "background 0.2s ease, transform 0.2s ease",
                                }}
                              >
                                <span
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "10px",
                                    background: sub.iconBg,
                                    color: sub.iconColor,
                                    border: `1px solid ${sub.iconColor}33`,
                                    flexShrink: 0,
                                  }}
                                >
                                  {sub.icon}
                                </span>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-dark)" }}>
                                    {sub.name}
                                  </div>
                                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", marginTop: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {sub.desc}
                                  </div>
                                </div>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5">
                                  <path d="M9 18l6-6-6-6" />
                                </svg>
                              </Link>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={item.name} href={item.href} className="header__nav-link">
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="header__cta" style={{ gap: "12px" }}>
            <ThemeToggle />
            <Link href="/contact/" className="btn btn--primary btn--sm">
              Start a Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="header__menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`header__menu-icon ${isMenuOpen ? "header__menu-icon--open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`header__mobile ${isMenuOpen ? "header__mobile--open" : ""}`}>
          <nav className="header__mobile-nav">
            {navigation.map((item, i) => {
              if (item.isPortfolioDropdown) {
                return (
                  <div key={item.name} style={{ margin: "4px 0" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 0",
                      }}
                    >
                      <Link
                        href={item.href}
                        className="header__mobile-link"
                        style={{ padding: 0 }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setIsMobilePortfolioExpanded(!isMobilePortfolioExpanded)}
                        aria-label="Toggle portfolio categories"
                        style={{
                          background: "var(--color-bg)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          color: "var(--color-dark)",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          style={{
                            transform: isMobilePortfolioExpanded ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                          }}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                    </div>

                    {isMobilePortfolioExpanded && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                          paddingLeft: "14px",
                          borderLeft: "2px solid var(--color-primary)",
                          margin: "4px 0 14px 8px",
                        }}
                      >
                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              padding: "8px 10px",
                              borderRadius: "8px",
                              textDecoration: "none",
                              fontSize: "0.875rem",
                              fontWeight: 600,
                              color: "var(--color-dark)",
                            }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "28px",
                                height: "28px",
                                borderRadius: "8px",
                                background: sub.iconBg,
                                color: sub.iconColor,
                                flexShrink: 0,
                              }}
                            >
                              {sub.icon}
                            </span>
                            <span>{sub.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="header__mobile-link"
                  style={{ "--nav-i": i } as React.CSSProperties}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            <div 
              className="header__mobile-theme-row" 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between", 
                padding: "14px 20px", 
                background: "var(--color-bg)", 
                borderRadius: "var(--radius-md)", 
                border: "1px solid var(--color-border)", 
                margin: "8px 0 16px" 
              }}
            >
              <span style={{ fontSize: "0.938rem", fontWeight: 600, color: "var(--color-dark)" }}>
                Switch Theme Mode
              </span>
              <ThemeToggle />
            </div>

            <Link
              href="/contact/"
              className="btn btn--primary btn--full"
              style={{ "--nav-i": navigation.length } as React.CSSProperties}
              onClick={() => setIsMenuOpen(false)}
            >
              Start a Project
            </Link>
            <a
              href="https://wa.me/923029462542"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary btn--full"
              style={{ marginTop: "12px" }}
              onClick={() => setIsMenuOpen(false)}
            >
              WhatsApp: +92 302 946 2542
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
