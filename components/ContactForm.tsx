"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { btnOutline, btnPrimary, formInput, formLabel } from "@/lib/styles";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    const project = (form.elements.namedItem("project") as HTMLSelectElement)?.value;
    const budget = (form.elements.namedItem("budget") as HTMLSelectElement)?.value;
    const company = (form.elements.namedItem("company") as HTMLInputElement)?.value; // honeypot

    if (!name || !email || !message) {
      setStatus("Please fill in your name, email, and message before sending.");
      return;
    }

    setSending(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, project, budget, message, company }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent — I'll reply within one business day.");
        form.reset();
      } else {
        throw new Error(data.error || "Unknown error");
      }
    } catch {
      // Fall back to opening the visitor's email client if the API call fails
      // (e.g. SMTP env vars not configured yet, or a network issue).
      const subject = encodeURIComponent(`New project inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}` +
          (project ? `\nProject type: ${project}` : "") +
          (budget ? `\nBudget: ${budget}` : "") +
          `\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus(`Couldn't send automatically — opening your email client instead. You can also email ${profile.email} directly.`);
    } finally {
      setSending(false);
    }
  }

  const whatsappNumber = profile.whatsapp; // set in data/profile.ts to enable the button

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot field — hidden from real users off-screen, bots tend to fill every field */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={formLabel}>Name</label>
          <input type="text" id="name" name="name" required autoComplete="name" className={formInput} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={formLabel}>Email</label>
          <input type="email" id="email" name="email" required autoComplete="email" className={formInput} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="project" className={formLabel}>Project type</label>
          <select id="project" name="project" defaultValue="" className={formInput}>
            <option value="">Select one</option>
            <option>Frontend development</option>
            <option>Backend / API</option>
            <option>Full-stack build</option>
            <option>AI / LLM integration</option>
            <option>Full-time role</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className={formLabel}>Budget range</label>
          <select id="budget" name="budget" defaultValue="" className={formInput}>
            <option value="">Select one</option>
            <option>Under $1,000</option>
            <option>$1,000 – $5,000</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000+</option>
            <option>Not applicable</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className={formLabel}>Message</label>
          <textarea id="message" name="message" required rows={5} className={formInput}></textarea>
        </div>
      </div>

      <div className="mt-5.5 flex flex-wrap gap-3.5">
        <button type="submit" disabled={sending} className={btnPrimary}>
          {sending ? "Sending…" : "Send message"}
        </button>
        {whatsappNumber && (
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Atul, I found your portfolio and wanted to reach out about a project.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={btnOutline}
          >
            Message on WhatsApp
          </a>
        )}
      </div>

      {status && (
        <p role="status" className="mt-4 text-sm text-[var(--ink)]">
          {status}
        </p>
      )}
      <p className="mt-3.5 text-[13px] text-[var(--ink-soft)]">
        Messages are sent directly to my inbox. If sending fails for any reason, this falls
        back to opening your email client instead.
      </p>
    </form>
  );
}
