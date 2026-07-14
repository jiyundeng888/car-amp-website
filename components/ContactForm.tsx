"use client";

import { useState } from "react";

// ============================================================
// Replace this URL with your Cloudflare Workers API endpoint.
// The backend will be implemented separately on Cloudflare Workers.
// ============================================================
const API_ENDPOINT = "https://api-your-project-name.pages.dev/api/contact";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? `Unable to submit: ${err.message}. Please try again or email us directly.`
          : "An unexpected error occurred. Please try again or email us directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2.4rem] border border-white/10 bg-graphite/50 p-12 text-center shadow-panel">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-signal/15">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F04423"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-black text-white">
          Thank you for your inquiry.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
          Our sales team will get back to you within 48 hours. For urgent
          matters, email us directly at sales@voltedge-audio.com.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full border border-white/15 px-7 py-3 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-white/5"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none ring-signal/40 transition placeholder:text-slate-600 focus:border-signal/40 focus:ring-4";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2.4rem] border border-white/10 bg-graphite/50 p-6 shadow-panel md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-300">
          Name <span className="text-signal">*</span>
          <input
            required
            name="name"
            className={inputClass}
            placeholder="Your full name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-300">
          Email <span className="text-signal">*</span>
          <input
            required
            type="email"
            name="email"
            className={inputClass}
            placeholder="name@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-300">
          Company
          <input
            name="company"
            className={inputClass}
            placeholder="Company name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-300">
          Phone
          <input
            type="tel"
            name="phone"
            className={inputClass}
            placeholder="+1 (555) 000-0000"
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-bold text-slate-300">
        Market Role
        <select name="role" className={inputClass}>
          <option>Distributor</option>
          <option>Car Audio Retailer</option>
          <option>Installer / Shop</option>
          <option>Private Label Brand</option>
          <option>Other</option>
        </select>
      </label>

      <label className="mt-5 grid gap-2 text-sm font-bold text-slate-300">
        Product Interest
        <input
          name="interest"
          className={inputClass}
          placeholder="Mono amps, 4-channel amps, DSP bundles..."
        />
      </label>

      <label className="mt-5 grid gap-2 text-sm font-bold text-slate-300">
        Message <span className="text-signal">*</span>
        <textarea
          required
          name="message"
          rows={6}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about target RMS power, model quantity, branding needs, and expected order volume."
        />
      </label>

      {status === "error" && (
        <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 w-full rounded-full bg-signal px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-glow transition hover:bg-white hover:text-asphalt disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>

      <p className="mt-5 text-xs leading-6 text-slate-500">
        By submitting this form, you agree to be contacted by VoltEdge Audio
        regarding your inquiry. We do not share your information with third
        parties.
      </p>
    </form>
  );
}
