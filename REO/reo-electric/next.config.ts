import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withContentlayer } from "next-contentlayer";

const withNextIntl = createNextIntlPlugin({
  // Specify the location of the request configuration file
  requestConfigPath: "./src/i18n/request.ts"
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"], // Add any image domains you'll be using
  },
};

export default withContentlayer(withNextIntl(nextConfig));