import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: builds will ignore ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
