/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Ashraf',
  assetPrefix: '/Ashraf',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'c243690.parspack.net',
      },
    ],
  },
}

module.exports = nextConfig

