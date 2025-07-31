/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export', // Enable static export
    images: {
      unoptimized: true, // Disables next/image optimization for static export
    },
  };

export default nextConfig;
