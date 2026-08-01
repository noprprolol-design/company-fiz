import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "*.ngrok-free.app",
    "*.ngrok.io",
  ],
};

export default nextConfig;