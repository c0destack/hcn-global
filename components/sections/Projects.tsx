import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';

export function Projects() {
  return (
    <section
      id="projects"
      className="section bg-slate-50/70 dark:bg-slate-900/40"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title text-slate-900 dark:text-white">
            Selected projects
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            A snapshot of the work we&apos;ve delivered across government and
            private engagements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-soft dark:bg-slate-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-brand-navy/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
