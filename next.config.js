/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/news/gb',
        permanent: false,
      },
      {
        source: '/news/:country((?!gb|us).*)',
        destination: '/news/gb',
        permanent: false,
      },
      {
        source: '/news/:country',
        destination: '/news/:country/top',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
