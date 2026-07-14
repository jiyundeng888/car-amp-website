'use client';

import { FormEvent, useState } from 'react';

const endpoint = 'https://api-你的项目名.pages.dev/api/contact';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('sent');
      event.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2.4rem] border border-white/10 bg-white/[0.05] p-6 shadow-panel md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-300">
          Name
          <input required name="name" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none ring-signal/40 transition placeholder:text-slate-600 focus:ring-4" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-300">
          Email
          <input required type="email" name="email" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none ring-signal/40 transition placeholder:text-slate-600 focus:ring-4" placeholder="name@company.com" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-300">
          Company
          <input name="company" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none ring-signal/40 transition placeholder:text-slate-600 focus:ring-4" placeholder="Company name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-300">
          Market Role
          <select name="role" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none ring-signal/40 transition focus:ring-4">
            <option>Distributor</option>
            <option>Car Audio Retailer</option>
            <option>Installer / Shop</option>
            <option>Private Label Brand</option>
          </select>
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-bold text-slate-300">
        Product Interest
        <input name="interest" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none ring-signal/40 transition placeholder:text-slate-600 focus:ring-4" placeholder="Mono amps, 4-channel amps, DSP bundles..." />
      </label>

      <label className="mt-5 grid gap-2 text-sm font-bold text-slate-300">
        Message
        <textarea required name="message" rows={6} className="resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none ring-signal/40 transition placeholder:text-slate-600 focus:ring-4" placeholder="Tell us about target RMS power, model quantity, branding needs, and expected order volume." />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-7 w-full rounded-full bg-signal px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-glow transition hover:bg-white hover:text-asphalt disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
      </button>

      {status === 'sent' ? (
        <p className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-200">
          Inquiry sent. Our sales team will follow up with quotation details.
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="mt-5 rounded-2xl border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-red-100">
          The backend endpoint is not connected yet. Please replace the project placeholder after deploying the Cloudflare Workers API.
        </p>
      ) : null}

      <p className="mt-5 text-xs leading-6 text-slate-500">
        Form endpoint: {endpoint}. Replace the project placeholder after deploying the Cloudflare Workers backend.
      </p>
    </form>
  );
}
