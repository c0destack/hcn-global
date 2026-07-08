'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Building2, ShieldCheck, HardHat } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const stats = [
  { icon: Building2, label: 'Projects Delivered', value: '50+' },
  { icon: ShieldCheck, label: 'Govt. Compliant', value: '100%' },
  { icon: HardHat, label: 'Years of Trade', value: '10+' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 md:pt-40"
    >
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-navy/10 blur-3xl dark:bg-blue-500/10"
      />

      <div className="container-tight relative pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-navy shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-blue-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            Government Tender Specialists · Ghaziabad
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white">
            Building{' '}
            <span className="bg-gradient-to-r from-brand-navy to-blue-500 bg-clip-text text-transparent">
              Tomorrow,
            </span>
            <br />
            Together.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 md:text-lg dark:text-slate-300">
            {siteConfig.name} is a trusted civil construction firm delivering
            infrastructure, residential, and commercial projects for government
            bodies and private clients across India.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="#contact" className="btn-primary">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#services" className="btn-outline">
              View Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 md:gap-6"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="card flex flex-col items-center text-center"
            >
              <s.icon className="h-6 w-6 text-brand-navy dark:text-blue-400" />
              <div className="mt-2 font-heading text-2xl font-extrabold text-slate-900 md:text-3xl dark:text-white">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-slate-500 md:text-sm dark:text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
