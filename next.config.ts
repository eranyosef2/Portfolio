import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
   basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
};

export default nextConfig;
