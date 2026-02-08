/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SEND_EMAIL_URL: process.env.NEXT_PUBLIC_SEND_EMAIL_URL || '',
  },
};

module.exports = nextConfig;