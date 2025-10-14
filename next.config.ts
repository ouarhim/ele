import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  // Specify the location of the request configuration file
  requestConfig: "./src/i18n/request.ts"
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"], // Add any image domains you'll be using
  },
  // Disable turbopack for production builds to avoid deployment issues
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/loader'],
          as: '*.js',
        },
      },
    },
  },
  // Ensure proper output for deployment
  output: 'standalone',
  // Disable turbopack for production
  ...(process.env.NODE_ENV === 'production' && {
    experimental: {
      turbo: undefined,
    },
  }),
};

export default withNextIntl(nextConfig);