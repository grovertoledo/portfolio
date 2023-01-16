/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'media-exp1.licdn.com',
      'avatars.githubusercontent.com',
      'styles.redditmedia.com',
      'cdn.sanity.io'
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
