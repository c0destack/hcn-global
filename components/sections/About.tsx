import { CheckCircle2, MapPin, Target, Eye } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const values = [
  'Registered proprietorship firm with active GSTIN',
  'Ghaziabad-based with deep local knowledge',
  'Specialists in government tender execution',
  'Committed to safety, quality & on-time delivery',
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-tight grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow">About Us</span>
          <h2 className="section-title text-slate-900 dark:text-white">
            A firm built on{' '}
            <span className="text-brand-navy dark:text-blue-400">trust</span>,
            precision, and craftsmanship.
          </h2>
          <p className="mt-5 text-slate-600 dark:text-slate-300">
            {siteConfig.name} is a proprietor-led civil construction firm based
            in Ghaziabad, Uttar Pradesh. We specialize in executing government
            tenders across civil, residential, commercial, and infrastructure
            domains — delivering projects that stand the test of time.
          </p>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Our approach blends engineering discipline with hands-on site
            management, ensuring every rupee is accounted for and every
            milestone is met.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {values.map((v) => (
              <li
                key={v}
                className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-navy dark:text-blue-400" />
                {v}
              </li>
            ))}
          </ul>

          <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-brand-navy/15 bg-brand-navy/5 px-4 py-2 text-sm font-semibold text-brand-navy dark:border-white/10 dark:bg-white/5 dark:text-blue-300">
            <MapPin className="h-4 w-4" />
            GSTIN: {siteConfig.gstin}
          </div>
        </div>

        <div className="grid content-start gap-5">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy dark:bg-blue-500/10 dark:text-blue-400">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-white">
                Our Mission
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              To deliver public and private construction projects that combine
              engineering excellence with transparent execution — earning the
              trust of every client we serve.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy dark:bg-blue-500/10 dark:text-blue-400">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-white">
                Our Vision
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              To be Uttar Pradesh&apos;s most reliable civil construction
              partner for government bodies — known for quality, integrity, and
              timely delivery.
            </p>
          </div>

          <div className="card bg-brand-navy text-white dark:bg-blue-500">
            <h3 className="font-heading text-lg font-semibold">
              Serving Government &amp; Private Clients
            </h3>
            <p className="mt-2 text-sm text-white/85">
              From municipal roadworks to residential complexes — we bring the
              same standard of workmanship to every project, big or small.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
