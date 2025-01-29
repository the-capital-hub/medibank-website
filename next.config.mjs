/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    images: {
      unoptimized: true, // Disables next/image optimization for static export
    },
  };

export default nextConfig;
