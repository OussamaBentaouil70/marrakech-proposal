import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  output: 'export',
  transpilePackages: ['lenis'],
  devIndicators: false,
  images: {
    unoptimized: true, // required for static export
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'gsap$': path.resolve('./node_modules/gsap/dist/gsap.js'),
      'gsap/ScrollTrigger$': path.resolve('./node_modules/gsap/dist/ScrollTrigger.js'),
    }
    return config
  },
}

export default nextConfig
