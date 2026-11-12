"use client";

import React, { useState } from "react";
import { CAREER_ROLES } from "@/seo/careers";


const MAX_CV_MB = 5;

/**
 * Job application form. Posts multipart data (including an optional CV file)
 * to /careers-submit.php, which emails the application to the team and stores
 * the CV outside the public web folder.
 */
export function CareerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [startedAt] = useState(() => Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const file = (form.elements.namedItem("cv") as HTMLInputElement | null)?.files?.[0];
    if (file && file.size > MAX_CV_MB * 1024 * 1024) {
      setError(`Your CV is larger than ${MAX_CV_MB} MB. Please upload a smaller PDF or paste a link instead.`);
      return;
    }
    const body = new FormData(form);
    body.set("started", String(startedAt));
    setStatus("sending");
    try {
      const res = await fetch("/careers-submit.php", { method: "POST", body });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        if (data.error === "cv_type") setError("Please upload your CV as a PDF, DOC or DOCX file.");
        if (data.error === "cv_size") setError("Your CV could not be uploaded (it may be too large). Please upload a smaller PDF or paste a link instead.");
        throw new Error("send failed");
      }
      setStatus("sent");
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.("event", "job_application", { role: String(body.get("role") ?? "") });
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="contact-form" role="status" style={{ display: "grid", gap: "14px" }}>
        <h3 className="contact-form__title">Thank you, your application has been sent.</h3>
        <p className="contact-form__subtitle">
          We review every application and will contact you by email or WhatsApp if your profile matches a role.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} encType="multipart/form-data">
      {/* honeypot: hidden from people, filled by bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
      <div className="contact-form__row">
        <div className="contact-form__group">
          <label htmlFor="c-name" className="contact-form__label">Full Name <span>*</span></label>
          <input type="text" id="c-name" name="name" className="contact-form__input" placeholder="Your full name" required maxLength={120} />
        </div>
        <div className="contact-form__group">
          <label htmlFor="c-email" className="contact-form__label">Email Address <span>*</span></label>
          <input type="email" id="c-email" name="email" className="contact-form__input" placeholder="you@example.com" required maxLength={160} />
        </div>
      </div>
      <div className="contact-form__row">
        <div className="contact-form__group">
          <label htmlFor="c-phone" className="contact-form__label">Phone / WhatsApp <span>*</span></label>
          <input type="tel" id="c-phone" name="phone" className="contact-form__input" placeholder="+92 300 1234567" required maxLength={40} />
        </div>
        <div className="contact-form__group">
          <label htmlFor="c-city" className="contact-form__label">City</label>
          <input type="text" id="c-city" name="city" className="contact-form__input" placeholder="Rawalpindi, Islamabad, Lahore…" maxLength={80} />
        </div>
      </div>
      <div className="contact-form__row">
        <div className="contact-form__group">
          <label htmlFor="c-role" className="contact-form__label">Role <span>*</span></label>
          <select id="c-role" name="role" className="contact-form__input" required defaultValue="">
            <option value="" disabled>Select a role</option>
            {CAREER_ROLES.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div className="contact-form__group">
          <label htmlFor="c-exp" className="contact-form__label">Experience</label>
          <select id="c-exp" name="experience" className="contact-form__input" defaultValue="">
            <option value="">Select</option>
            <option>Student / fresh graduate</option>
            <option>Less than 1 year</option>
            <option>1–2 years</option>
            <option>3–5 years</option>
            <option>5+ years</option>
          </select>
        </div>
      </div>
      <div className="contact-form__row">
        <div className="contact-form__group">
          <label htmlFor="c-link" className="contact-form__label">LinkedIn, GitHub or portfolio link</label>
          <input type="url" id="c-link" name="portfolio" className="contact-form__input" placeholder="https://" maxLength={300} />
        </div>
        <div className="contact-form__group">
          <label htmlFor="c-cv" className="contact-form__label">CV (PDF, DOC or DOCX, max {MAX_CV_MB} MB)</label>
          <input type="file" id="c-cv" name="cv" className="contact-form__input" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="c-msg" className="contact-form__label">Tell us about yourself <span>*</span></label>
        <textarea id="c-msg" name="message" className="contact-form__textarea" rows={5} required maxLength={4000}
          placeholder="Your skills, projects you are proud of, and why you want to join DEVSYNX." />
      </div>
      {error || status === "error" ? (
        <div role="alert" className="contact-form__subtitle" style={{ color: "#f87171" }}>
          {error || "Your application could not be sent."} You can also email your CV to{" "}
          <a href="mailto:info@devsynx.com?subject=Job%20application" style={{ textDecoration: "underline" }}>info@devsynx.com</a>.
        </div>
      ) : null}
      <button type="submit" className="btn btn--primary btn--lg btn--full btn--glow" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Submit Application"}
      </button>
    </form>
  );
}
