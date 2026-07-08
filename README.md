# HCN Global — Website

Modern, static marketing website for **HCN Global** — a Ghaziabad-based civil construction firm specializing in government tenders across civil, residential, commercial, and infrastructure domains.

**Tagline:** _Building Tomorrow, Together._

Built with **Next.js 15**, **Tailwind CSS**, **TypeScript**, and **framer-motion**. Fully static, SEO-friendly, dark/light mode enabled, and deployable to **both Vercel and GitHub Pages** from the same codebase — for ₹0.

---

## Table of contents

1. [Local development](#local-development)
2. [Editing content](#editing-content)
3. [Configure the contact form (Formspree)](#configure-the-contact-form-formspree)
4. [Deploy to Vercel (recommended)](#deploy-to-vercel-recommended)
5. [Deploy to GitHub Pages (free alternative)](#deploy-to-github-pages-free-alternative)
6. [Custom domain setup](#custom-domain-setup)
7. [Project structure](#project-structure)

---

## Local development

**Prerequisites:** Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Build for production locally:**

```bash
npm run build          # standard build (for Vercel)
npm run build:gh-pages # build with basePath for GitHub Pages
```

Both produce a fully static site in the `out/` folder.

---

## Editing content

**All company data is centralized in one file:** [`lib/site-config.ts`](./lib/site-config.ts).

Update your services, projects, testimonials, clients, address, phone, email, GSTIN, etc. there. Everything on the site reads from this file.

- **Project images**: replace the Unsplash URLs in `siteConfig.projects[].image` with your own image paths (either external URLs or files placed in `public/projects/`).
- **Logo**: swap [`public/logo-mark.svg`](./public/logo-mark.svg) with your artwork if desired.

---

## Configure the contact form (Formspree)

The contact form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month, no backend needed).

1. Sign up at [formspree.io](https://formspree.io) with your `hcnglobal05@gmail.com` address.
2. Create a new form — Formspree gives you an endpoint like `https://formspree.io/f/xyzabcde`.
3. Open [`lib/site-config.ts`](./lib/site-config.ts) and replace:

   ```ts
   formspreeEndpoint: 'https://formspree.io/f/your-form-id',
   ```

   with your real endpoint.

4. Commit and push — form submissions will land in your Gmail inbox.

Until it's configured, the form shows a helpful message asking users to email you directly.

---

## Deploy to Vercel (recommended)

Best option: nicer URL, faster India edge, per-branch preview deploys.

1. Push this repo to GitHub (any name, public or private).
2. Go to [vercel.com/new](https://vercel.com/new) → sign in with GitHub → **Import** the repo.
3. Vercel auto-detects Next.js — click **Deploy**. No env vars needed.
4. Your site is live at `https://<repo-name>.vercel.app` with free SSL.

Every `git push` to `main` auto-redeploys. Pull requests get preview URLs.

---

## Deploy to GitHub Pages (free alternative)

Already wired up via GitHub Actions in [`.github/workflows/deploy-gh-pages.yml`](./.github/workflows/deploy-gh-pages.yml).

1. Push this repo to GitHub as **`hcn-global`** (the repo name matters — it's used as the URL subpath). If you name the repo differently, update `basePath` and `assetPrefix` in [`next.config.mjs`](./next.config.mjs).
2. In your repo on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push any commit to `main` — the workflow builds and deploys automatically.
5. Your site is live at `https://<your-username>.github.io/hcn-global/`.

That's it. No credit card. Unlimited bandwidth.

---

## Custom domain setup

You can point a custom domain (e.g. `hcnglobal.in`) to **either** host — costs about ₹700/year for the domain, hosting stays free.

**Where to buy:** [Namecheap](https://www.namecheap.com), [GoDaddy](https://in.godaddy.com), or [BigRock](https://www.bigrock.in).

### For Vercel

1. In your Vercel project → **Settings → Domains** → add your domain.
2. Vercel shows the DNS records you need (usually an `A` and `CNAME`).
3. Add them in your domain registrar's DNS panel.
4. Free SSL is provisioned automatically within minutes.

### For GitHub Pages

1. Create a file `public/CNAME` containing just your domain (e.g. `hcnglobal.in`).
2. In your domain registrar, add these DNS records:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   <your-username>.github.io
   ```
3. In your GitHub repo → **Settings → Pages**, enter the custom domain and check **Enforce HTTPS**.

Full guide: [docs.github.com/pages/custom-domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Cost summary

| Item                       | Cost                     |
| -------------------------- | ------------------------ |
| Hosting (Vercel or GH Pages) | **Free**               |
| SSL certificate             | **Free** (auto)         |
| Contact form (Formspree)    | **Free** up to 50/month |
| Custom domain (optional)    | ~₹700/year              |
| **Total to launch**         | **₹0**                  |

---

## Project structure

```
hcn-global/
├── app/
│   ├── layout.tsx          Root layout, fonts, theme provider, JSON-LD schema
│   ├── page.tsx            Composes all sections
│   ├── globals.css         Tailwind + CSS variables (light/dark themes)
│   ├── sitemap.ts          Auto-generated sitemap.xml
│   └── robots.ts           Auto-generated robots.txt
├── components/
│   ├── Navbar.tsx          Sticky navbar with theme toggle
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── WhyUs.tsx
│       ├── Projects.tsx
│       ├── Clients.tsx
│       ├── Testimonials.tsx
│       └── Contact.tsx
├── lib/
│   ├── site-config.ts      All company data (edit here!)
│   └── utils.ts
├── public/
│   ├── logo.svg            Full logo
│   ├── logo-mark.svg       Logo mark (icon only)
│   ├── favicon.svg
│   └── .nojekyll           Required for GitHub Pages
├── .github/workflows/
│   └── deploy-gh-pages.yml GitHub Actions workflow
├── next.config.mjs         Static export + basePath switch for GH Pages
├── tailwind.config.ts      Brand colors, fonts, animations
└── tsconfig.json
```

---

## Support

- Update content: edit [`lib/site-config.ts`](./lib/site-config.ts).
- Change colors: edit `theme.extend.colors.brand` in [`tailwind.config.ts`](./tailwind.config.ts).
- Toggle light/dark mode via the icon in the navbar.

Built for HCN Global &middot; Ghaziabad, India.
