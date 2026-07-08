import {
  Building2,
  Factory,
  HardHat,
  Home,
  type LucideIcon,
  ArrowUpRight,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const iconMap: Record<string, LucideIcon> = {
  HardHat,
  Home,
  Building2,
  Factory,
};

export function Services() {
  return (
    <section
      id="services"
      className="section bg-slate-50/70 dark:bg-slate-900/40"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title text-slate-900 dark:text-white">
            End-to-end construction services
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Four core practice areas — one accountable team. From tender
            documentation to final handover, we manage every phase.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((svc) => {
            const Icon = iconMap[svc.icon] ?? HardHat;
            return (
              <div
                key={svc.id}
                className="card group relative overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-navy/5 blur-2xl transition group-hover:bg-brand-navy/10 dark:bg-blue-500/10" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white shadow-soft dark:bg-blue-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-slate-900 dark:text-white">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {svc.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {svc.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5 text-brand-navy dark:text-blue-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
