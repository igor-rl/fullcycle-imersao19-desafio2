import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imersao.fullcycle.com.br',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
