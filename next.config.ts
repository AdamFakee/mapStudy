import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["mapstudy.edu.vn", "mapstudy.sgp1.digitaloceanspaces.com"],
  },
  eslint: {
    // Tắt ESLint trong quá trình build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Tắt type checking trong quá trình build (tùy chọn)
    ignoreBuildErrors: true,
  },
  output: 'standalone'
};

export default nextConfig;
