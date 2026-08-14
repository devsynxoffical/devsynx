"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";
  delay?: number;
  threshold?: number;
  stagger?: boolean;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
  stagger = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("animated");
            if (stagger) {
              const items = el.querySelectorAll(".stagger-item");
              items.forEach((child, i) => {
                (child as HTMLElement).style.setProperty("--stagger-i", String(i));
                requestAnimationFrame(() => {
                  (child as HTMLElement).classList.add("animated");
                });
              });
            }
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, stagger]);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll animate--${animation} ${className}`}
    >
      {children}
    </div>
  );
}
