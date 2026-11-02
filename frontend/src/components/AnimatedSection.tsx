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
  threshold = 0.01,
  stagger = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (el) {
              el.classList.add("animated");
              if (stagger) {
                const items = el.querySelectorAll(".stagger-item");
                items.forEach((child, i) => {
                  (child as HTMLElement).style.setProperty("--stagger-i", String(i));
                  (child as HTMLElement).classList.add("animated");
                });
              }
            }
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(el);

    // Safety fallback: force visibility after 400ms so content is never hidden
    const fallbackTimer = setTimeout(() => {
      if (el) {
        el.classList.add("animated");
        const items = el.querySelectorAll(".stagger-item");
        items.forEach((child) => (child as HTMLElement).classList.add("animated"));
      }
    }, 400);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
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
