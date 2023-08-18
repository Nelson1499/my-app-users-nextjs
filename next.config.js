/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone" | "export",
  images: {
    domains: ["robohash.org"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
