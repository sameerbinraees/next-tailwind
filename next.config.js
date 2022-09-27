/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.postimg.cc'],
    // formats: ['image/jpg', 'image/png'],
  },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
