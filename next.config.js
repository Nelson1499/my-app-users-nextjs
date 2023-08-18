/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["robohash.org"],
    unoptimized: true,
  },
  output: "next export",
};

module.exports = nextConfig;
