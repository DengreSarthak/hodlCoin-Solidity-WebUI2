/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: '/hodlCoin-Solidity-WebUI',
  assetPrefix: '/hodlCoin-Solidity-WebUI',
  // trailingSlash: true,
}

export default nextConfig;
