/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photos.geozone.co.nz',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
