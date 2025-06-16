import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'dietofits-home'; // Change this if your repo name is different

const nextConfig: NextConfig = {
  // For GitHub Pages static export
  output: 'export',
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
};

export default nextConfig;
