'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-black/5 bg-white/80 backdrop-blur-lg shadow-sm dark:border-white/5 dark:bg-slate-950/80'
          : 'bg-transparent'
      )}
    >
      <div className="container-tight flex h-16 items-center justify-between md:h-20">
        <Link
          href="#home"
          className="flex items-center gap-2 text-brand-navy dark:text-white"
          aria-label={siteConfig.name}
        >
          <Image
            src="/logo-mark.svg"
            alt=""
            width={40}
            height={40}
            priority
            className="h-9 w-9"
          />
          <div className="hidden sm:block">
            <div className="font-heading text-lg font-extrabold leading-none tracking-tight">
              {siteConfig.name}
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-navy/70 dark:text-slate-300">
              {siteConfig.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-brand-navy/5 hover:text-brand-navy dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="#contact" className="btn-primary hidden md:inline-flex">
            Get Quote
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/10 lg:hidden dark:border-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white/95 backdrop-blur lg:hidden dark:border-white/5 dark:bg-slate-950/95">
          <nav className="container-tight flex flex-col py-3">
            {siteConfig.navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-brand-navy/5 hover:text-brand-navy dark:text-slate-300 dark:hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 self-start"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
