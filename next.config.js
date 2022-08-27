/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.kibrispdr.org", "image.tmdb.org"]
  },
  image: {
    domains: ["image.tmdb.org"]
  }
}

module.exports = nextConfig
