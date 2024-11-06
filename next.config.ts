/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // Add domains for external images here
      'images.unsplash.com',
      'your-domain.com',
    ],
  },
  // Enable experimental features if needed
  experimental: {
    // typedRoutes: true,
    // serverActions: true,
  },
  // Add redirects/rewrites if needed
  async redirects() {
    return [
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
