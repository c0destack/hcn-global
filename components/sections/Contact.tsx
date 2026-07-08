'use client';

import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/site-config';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const endpoint = siteConfig.formspreeEndpoint;

    if (!endpoint || endpoint.includes('your-form-id')) {
      setStatus('error');
      setError(
        'Contact form is not configured yet. Please email us directly at ' +
          siteConfig.email
      );
      return;
    }

    setStatus('submitting');
    setError(null);
    try {
      const data = new FormData(form);
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Failed to send message');
      form.reset();
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const mapQuery = encodeURIComponent(
    `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.pincode}`
  );

  return (
    <section id="contact" className="section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-title text-slate-900 dark:text-white">
            Let&apos;s build something great together
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Have a project or tender in mind? Send us a message — we typically
            respond within one business day.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="card space-y-4"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                />
              </div>
              <Field
                label="Email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
              <Field
                label="Subject"
                name="subject"
                type="text"
                placeholder="Project inquiry / Tender / Quote"
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project, scope, or tender details..."
                  className="w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full sm:w-auto"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-start gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-800 dark:bg-green-500/10 dark:text-green-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
                  Thanks! Your message has been sent. We&apos;ll get back to
                  you soon.
                </div>
              )}
              {status === 'error' && error && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800 dark:bg-red-500/10 dark:text-red-300">
                  {error}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-5 lg:col-span-2">
            <div className="card">
              <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-white">
                Contact Details
              </h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-navy/10 text-brand-navy dark:bg-blue-500/10 dark:text-blue-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="text-slate-700 dark:text-slate-300">
                    <div className="font-medium">Registered Address</div>
                    <p className="mt-0.5 text-slate-600 dark:text-slate-400">
                      {siteConfig.address.line1},<br />
                      {siteConfig.address.line2},<br />
                      {siteConfig.address.city}, {siteConfig.address.state} -{' '}
                      {siteConfig.address.pincode}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-navy/10 text-brand-navy dark:bg-blue-500/10 dark:text-blue-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="text-slate-700 dark:text-slate-300">
                    <div className="font-medium">Phone</div>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="text-slate-600 hover:text-brand-navy dark:text-slate-400 dark:hover:text-blue-400"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-navy/10 text-brand-navy dark:bg-blue-500/10 dark:text-blue-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="text-slate-700 dark:text-slate-300">
                    <div className="font-medium">Email</div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-slate-600 hover:text-brand-navy dark:text-slate-400 dark:hover:text-blue-400"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border shadow-sm">
              <iframe
                title="HCN Global location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
      />
    </div>
  );
}
