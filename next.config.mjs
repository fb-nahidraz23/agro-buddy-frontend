/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [new URL('https://cdn.pixabay.com/photo/2023/02/18/11/00/**')],
  },
}

export default nextConfig
