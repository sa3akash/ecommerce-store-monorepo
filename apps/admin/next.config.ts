import type { NextConfig } from "next";
// import path from 'path'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },

  // reactStrictMode: true,
  // transpilePackages: ["@ecommerce/ui"], // Ensure UI package is transpiled
  // webpack(config) {
  //   config.resolve.alias["@"] = path.resolve(__dirname, "../../libs/ui/src"); // Ensure alias works
  //   return config;
  // }
};

export default nextConfig;
