"use client";

import { FAQ } from "@/components/FAQ";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqBlockProps {
  items: FaqItem[];
}

export function FaqBlock({ items }: FaqBlockProps) {
  return (
    <div className="faq-wrapper">
      <FAQ items={items} />
    </div>
  );
}
