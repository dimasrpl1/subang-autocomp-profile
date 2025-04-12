import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ebkmleylaghxmtfquvyf.supabase.co',
        pathname: '/**', // This will allow all paths
      },
    ],
  },
};

export default nextConfig;
