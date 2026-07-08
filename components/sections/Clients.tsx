import { Landmark } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function Clients() {
  const doubled = [...siteConfig.clients, ...siteConfig.clients];

  return (
    <section id="clients" className="section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Trusted By</span>
          <h2 className="section-title text-slate-900 dark:text-white">
            Serving government bodies &amp; institutions
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            We&apos;re proud to have contributed to projects for these
            organizations.
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-light to-transparent dark:from-slate-950" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-light to-transparent dark:from-slate-950" />

          <div className="flex w-max animate-marquee gap-5">
            {doubled.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex min-w-[220px] items-center gap-3 rounded-xl border bg-white/70 px-5 py-4 backdrop-blur dark:bg-white/5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy/10 text-brand-navy dark:bg-blue-500/10 dark:text-blue-400">
                  <Landmark className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
