// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '', // Replace with your repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '', // Replace with your repo name
}

module.exports = nextConfig