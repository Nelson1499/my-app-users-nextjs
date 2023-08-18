/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["robohash.org"],
    unoptimized: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
