import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-slate-50 dark:border-white/5 dark:bg-slate-950">
      <div className="container-tight py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo-mark.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div>
                <div className="font-heading text-lg font-extrabold text-brand-navy dark:text-white">
                  {siteConfig.name}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {siteConfig.tagline}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              {siteConfig.shortDescription}
            </p>
            <p className="mt-4 inline-block rounded-md bg-brand-navy/5 px-3 py-1 text-xs font-semibold text-brand-navy dark:bg-white/5 dark:text-blue-300">
              GSTIN: {siteConfig.gstin}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-600 transition hover:text-brand-navy dark:text-slate-400 dark:hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.services.map((s) => (
                <li
                  key={s.id}
                  className="text-slate-600 dark:text-slate-400"
                >
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-navy dark:text-blue-400" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2},
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} -{' '}
                  {siteConfig.address.pincode}
                </span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-brand-navy dark:text-blue-400" />
                <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-navy dark:text-blue-400" />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-black/5 pt-6 text-xs text-slate-500 dark:border-white/5 dark:text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Designed with care in Ghaziabad, India.</p>
        </div>
      </div>
    </footer>
  );
}
