const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGhPages
    ? {
        output: 'export',
        basePath: '/hcn-global',
        assetPrefix: '/hcn-global/',
        trailingSlash: true,
      }
    : {}),
  images: { unoptimized: true },
};

export default nextConfig;
