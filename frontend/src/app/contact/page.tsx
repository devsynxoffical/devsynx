"use client";

import "@/styles/contact.css";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQ } from "@/components/FAQ";

import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from "@/seo/metadata";

const contactFaqs = [
  { question: "What happens after I submit the contact form?", answer: "You'll receive an email confirmation within minutes. Our team reviews your inquiry and responds within 24 hours with a personalized reply and next steps." },
  { question: "Do you offer free consultations?", answer: "Yes! We offer a free 30-minute consultation call where we discuss your project requirements, goals, and provide initial recommendations with no strings attached." },
  { question: "What information should I include in my message?", answer: "The more detail you provide, the better we can assist. Include your project goals, timeline, budget range, and any specific technologies or requirements you have in mind." },
  { question: "Can we schedule a video call?", answer: "Absolutely. After the initial contact, we typically set up a video call to discuss your project in depth. We use Google Meet, Zoom, or Microsoft Teams based on your preference." },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact/" },
]);

const pageSchema = buildWebPageSchema({
  title: "Contact Devsynx | Start Your Software & AI Project",
  description: "Get in touch with Devsynx. Book a consultation, request a project quote, or reach out to our engineering leadership team.",
  path: "/contact/",
});

const faqSchema = buildFaqSchema(contactFaqs);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="page-hero__shape page-hero__shape--1"></div>
          <div className="page-hero__shape page-hero__shape--2"></div>
        </div>
        <div className="container">
          <AnimatedSection animation="fade-up" delay={100}>
            <span className="page-hero__label">Let&apos;s Talk</span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="page-hero__title">
              Get in <span className="text-gradient">Touch</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="page-hero__subtitle">
              Have a project in mind? Let&apos;s discuss how we can help your business grow
              with the right technology solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <AnimatedSection animation="fade-right" className="contact-form-wrapper">
              <div className="contact-form__header">
                <h2 className="contact-form__title">Send Us a Message</h2>
                <p className="contact-form__subtitle">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="name" className="contact-form__label">
                      Full Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="contact-form__input"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="email" className="contact-form__label">
                      Email Address <span>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="contact-form__input"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="company" className="contact-form__label">Company</label>
                    <input type="text" id="company" name="company" className="contact-form__input" placeholder="Your Company" value={formData.company} onChange={handleChange} />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="service" className="contact-form__label">Service Interested In</label>
                    <select id="service" name="service" className="contact-form__input" value={formData.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-apps">Mobile App Development</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="automation">Business Automation</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="saas">SaaS Development</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="budget" className="contact-form__label">Estimated Budget</label>
                  <select id="budget" name="budget" className="contact-form__input" value={formData.budget} onChange={handleChange}>
                    <option value="">Select a range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="message" className="contact-form__label">
                    Project Details <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact-form__textarea"
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn--primary btn--lg btn--full btn--glow">
                  Send Message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                </button>
              </form>
            </AnimatedSection>

            {/* Contact Info Sidebar */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="contact-info">
                <div className="contact-info__card">
                  <div className="contact-info__card-badge">Contact details</div>
                  <h3 className="contact-info__title">Contact Information</h3>
                  <p className="contact-info__text">
                    Reach out directly or fill out the form. We typically respond within a few hours.
                  </p>

                  <div className="contact-info__items">
                    <div className="contact-info__item">
                      <div className="contact-info__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6L12 13 2 6" /></svg>
                      </div>
                      <div>
                        <p className="contact-info__label">Email</p>
                        <a href="mailto:info@devsynx.com" className="contact-info__value">info@devsynx.com</a>
                      </div>
                    </div>
                    <div className="contact-info__item">
                      <div className="contact-info__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" /></svg>
                      </div>
                      <div>
                        <p className="contact-info__label">Phone</p>
                        <a href="tel:+923029462542" className="contact-info__value">+92 302 946 2542</a>
                      </div>
                    </div>
                    <div className="contact-info__item">
                      <div className="contact-info__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a9.5 9.5 0 0 1-14.16 8.32L3 21l1.26-3.69A9.5 9.5 0 1 1 21 11.5z"/><path d="M8.5 9.5c.2 1.5 1.6 3.4 3.1 4.2 1.1.6 2.2.8 3.4.3"/></svg>
                      </div>
                      <div>
                        <p className="contact-info__label">WhatsApp</p>
                        <a href="https://wa.me/923029462542" target="_blank" rel="noopener noreferrer" className="contact-info__value">+92 302 946 2542</a>
                      </div>
                    </div>
                    <div className="contact-info__item">
                      <div className="contact-info__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      </div>
                      <div>
                        <p className="contact-info__label">Location</p>
                        <p className="contact-info__value">Islamabad, Pakistan</p>
                      </div>
                    </div>
                    <div className="contact-info__item">
                      <div className="contact-info__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                      </div>
                      <div>
                        <p className="contact-info__label">Response Time</p>
                        <p className="contact-info__value">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-info__card contact-info__card--highlight">
                  <h3 className="contact-info__title">Quick Links</h3>
                  <div className="contact-info__links">
                    <Link href="/services/" className="contact-info__link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      Browse All Services
                    </Link>
                    <Link href="/about/" className="contact-info__link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      Learn About Us
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section__header">
              <span className="section__label">FAQ</span>
              <h2 className="section__title">
                Common <span className="text-gradient">Questions</span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="faq-wrapper">
              <FAQ items={contactFaqs} />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
