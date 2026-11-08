"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navMenus } from "@/seo/navigation";

/**
 * Site header with dropdown menus. Menu panels are always rendered in the
 * HTML (hidden with CSS until opened) so search engines can follow every link.
 * Desktop: opens on hover, click or keyboard focus; Escape closes.
 * Mobile: each menu is an expandable section.
 */
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenId(null);
    setMobileOpenId(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenId(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

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

          {/* Desktop navigation */}
          <nav className="header__nav nav" ref={navRef} aria-label="Main">
            {navMenus.map((menu) => {
              const isOpen = openId === menu.id;
              const wide = menu.columns.length > 1;
              return (
                <div
                  key={menu.id}
                  className={`nav__item${isOpen ? " nav__item--open" : ""}`}
                  onMouseEnter={() => setOpenId(menu.id)}
                  onMouseLeave={() => setOpenId((cur) => (cur === menu.id ? null : cur))}
                >
                  <button
                    type="button"
                    className="header__nav-link nav__trigger"
                    aria-expanded={isOpen}
                    aria-controls={`nav-panel-${menu.id}`}
                    onClick={() => setOpenId(isOpen ? null : menu.id)}
                  >
                    {menu.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    id={`nav-panel-${menu.id}`}
                    className={`nav__panel${wide ? " nav__panel--wide" : ""}`}
                    style={wide ? { gridTemplateColumns: `repeat(${menu.columns.length}, minmax(0, 1fr))` } : undefined}
                  >
                    {menu.columns.map((col) => (
                      <div className="nav__col" key={col.title}>
                        <div className="nav__col-title">{col.title}</div>
                        <ul className="nav__list">
                          {col.links.map((l) => (
                            <li key={l.href + l.label}>
                              <Link href={l.href} className="nav__link" onClick={() => setOpenId(null)}>
                                <span className="nav__link-label">{l.label}</span>
                                {l.desc ? <span className="nav__link-desc">{l.desc}</span> : null}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {menu.footerLink ? (
                      <Link href={menu.footerLink.href} className="nav__footer-link" onClick={() => setOpenId(null)}>
                        {menu.footerLink.label} →
                      </Link>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="header__cta" style={{ gap: "12px" }}>
            <ThemeToggle />
            <Link href="/contact/" className="btn btn--primary btn--sm">
              Start a Project
            </Link>
          </div>

          <button
            className="header__menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`header__menu-icon ${isMenuOpen ? "header__menu-icon--open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        <div className={`header__mobile ${isMenuOpen ? "header__mobile--open" : ""}`}>
          <nav className="header__mobile-nav mnav" aria-label="Mobile">
            <Link href="/" className="mnav__top" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            {navMenus.map((menu) => {
              const open = mobileOpenId === menu.id;
              return (
                <div key={menu.id} className={`mnav__section${open ? " mnav__section--open" : ""}`}>
                  <button
                    type="button"
                    className="mnav__top mnav__toggle"
                    aria-expanded={open}
                    onClick={() => setMobileOpenId(open ? null : menu.id)}
                  >
                    {menu.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className="mnav__body">
                    {menu.columns.map((col) => (
                      <div key={col.title} className="mnav__group">
                        {menu.columns.length > 1 ? <div className="mnav__group-title">{col.title}</div> : null}
                        {col.links.map((l) => (
                          <Link key={l.href + l.label} href={l.href} className="mnav__link" onClick={() => setIsMenuOpen(false)}>
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    {menu.footerLink ? (
                      <Link href={menu.footerLink.href} className="mnav__link mnav__link--more" onClick={() => setIsMenuOpen(false)}>
                        {menu.footerLink.label} →
                      </Link>
                    ) : null}
                  </div>
                </div>
              );
            })}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "12px" }}>
              <ThemeToggle />
              <Link href="/contact/" className="btn btn--primary" style={{ flex: 1, justifyContent: "center" }} onClick={() => setIsMenuOpen(false)}>
                Start a Project
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
