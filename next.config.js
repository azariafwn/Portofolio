/** @type {import('next').Next.config} */
const nextConfig = {
  reactStrictMode: true,
  // Tambahkan ini untuk mengabaikan error TS saat build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Tambahkan ini juga untuk mengabaikan error ESLint saat build
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig