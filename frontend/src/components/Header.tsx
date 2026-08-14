"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
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

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services/" },
    { name: "Clients", href: "/clients/" },
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
    <header className={headerClasses}>
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
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="header__nav-link">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="header__cta">
            <Link href="/contact/" className="btn btn--primary btn--sm">
              Start a Project
            </Link>
            <a
              href="https://wa.me/923029462542"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary btn--sm"
            >
              WhatsApp
            </a>
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
              {navigation.map((item, i) => (
              <Link
                  key={item.name}
                  href={item.href}
                className="header__mobile-link"
                  style={{ "--nav-i": i } as React.CSSProperties}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
              </Link>
              ))}
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
