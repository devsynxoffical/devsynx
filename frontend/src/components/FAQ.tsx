"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQ({ items, title, subtitle }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      {title && (
        <div className="faq__header">
          <h2 className="faq__title">{title}</h2>
          {subtitle && <p className="faq__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="faq__list">
        {items.map((item, index) => (
          <div
            key={index}
            className={`faq__item ${openIndex === index ? "faq__item--open" : ""}`}
          >
            <button
              className="faq__question"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span className="faq__question-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="faq__question-text">{item.question}</span>
              <span className="faq__icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14" className="faq__icon-vertical" />
                  <path d="M5 12h14" />
                </svg>
              </span>
            </button>
            <div className="faq__answer">
              <div className="faq__answer-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

