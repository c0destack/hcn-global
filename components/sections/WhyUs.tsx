import {
  BadgeIndianRupee,
  Clock,
  FileCheck2,
  Gem,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  FileCheck2,
  Clock,
  Gem,
  Users,
  BadgeIndianRupee,
};

export function WhyUs() {
  return (
    <section id="why-us" className="section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title text-slate-900 dark:text-white">
            Reliable, compliant, and built to last.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            What sets {siteConfig.name} apart when you&apos;re awarding a
            tender or a private contract.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.whyUs.map((item) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <div key={item.title} className="card">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
