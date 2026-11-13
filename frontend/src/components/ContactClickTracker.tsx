"use client";

import { useEffect } from "react";

/**
 * Sends a GA4 event whenever a visitor clicks a WhatsApp, phone or email link
 * anywhere on the site, so enquiries can be reported per page in Google
 * Analytics (Reports > Engagement > Events, or mark them as key events).
 * The floating WhatsApp button tracks itself and is skipped here.
 */
export function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.classList.contains("wa-float")) return;
      const href = a.getAttribute("href") ?? "";
      let method = "";
      if (href.startsWith("https://wa.me/") || href.startsWith("https://api.whatsapp.com/")) method = "whatsapp";
      else if (href.startsWith("tel:")) method = "phone";
      else if (href.startsWith("mailto:")) method = "email";
      if (!method) return;
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      const label = (a.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 80);
      const page = window.location.pathname;
      w.gtag?.("event", `${method}_click`, { page, link_text: label });
      w.gtag?.("event", "generate_lead", { method, page, link_text: label });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
