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
};

export default withNextIntl(nextConfig);