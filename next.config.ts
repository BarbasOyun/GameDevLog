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
  basePath: process.env.NODE_ENV === 'production' ? '/GameDevLog' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/GameDevLog/' : '',
}

module.exports = nextConfig