const ms = require("ms");

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    environment: process.env.ENVIRONMENT || "local",
    baseUrl: process.env.BASE_URL || "http://localhost:8888",
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.natgeofe.com", "picsum.photos", "images.ctfassets.net"],
  },
};

module.exports = nextConfig;
