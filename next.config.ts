const isProd = process.env.NODE_ENV === 'production'
const repoName = 'GameDevLog' // CHANGE THIS

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true // Required for static export
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
}

module.exports = nextConfig