'use client';

import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const items = siteConfig.testimonials;
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % items.length),
    [items.length]
  );
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section
      id="testimonials"
      className="section bg-slate-50/70 dark:bg-slate-900/40"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title text-slate-900 dark:text-white">
            What our clients say
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="card relative overflow-hidden px-6 py-10 md:px-10 md:py-12">
            <Quote className="absolute -top-2 left-4 h-24 w-24 text-brand-navy/5 dark:text-blue-400/10" />
            <p className="relative text-lg leading-relaxed text-slate-800 md:text-xl dark:text-slate-100">
              &ldquo;{items[index].quote}&rdquo;
            </p>
            <div className="mt-6 border-t pt-4">
              <div className="font-heading font-semibold text-slate-900 dark:text-white">
                {items[index].name}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {items[index].role}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white text-slate-700 transition hover:bg-brand-navy hover:text-white dark:bg-slate-900 dark:text-slate-200"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === index
                      ? 'w-8 bg-brand-navy dark:bg-blue-400'
                      : 'w-2 bg-slate-300 dark:bg-slate-700'
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white text-slate-700 transition hover:bg-brand-navy hover:text-white dark:bg-slate-900 dark:text-slate-200"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
