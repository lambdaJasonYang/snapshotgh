/** @type {import('next').NextConfig} */

const ghpageURL = process.env.ghpageURL ? `/${process.env.ghpageURL}` : undefined;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: ghpageURL,
  basePath: ghpageURL,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
