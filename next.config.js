/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  async redirects() {
    return [
      {
        source: '/:country((?!gb|us).*)',
        destination: '/gb',
        permanent: false,
      },
      {
        source: '/:country',
        destination: '/:country/top',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
