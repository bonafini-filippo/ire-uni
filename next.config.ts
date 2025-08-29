import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: false, // Abilita PWA anche in development per testing
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-cache',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWA(nextConfig);
