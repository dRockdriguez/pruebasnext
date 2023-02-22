/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: true
  },
};

module.exports = nextConfig;
