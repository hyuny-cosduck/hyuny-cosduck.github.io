/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',             // 🔸 정적 HTML export 설정
  trailingSlash: true,          // 🔸 디렉토리 구조 유지 (optional)

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
