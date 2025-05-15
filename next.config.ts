import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**", // Allows any hostname over HTTP
      },
      {
        protocol: "https",
        hostname: "**", // Allows any hostname over HTTPS
      },
    ],
  },
};

export default nextConfig;