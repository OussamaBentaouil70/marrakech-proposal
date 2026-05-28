import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  transpilePackages: ['lenis'],
  devIndicators: false,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  experimental: {
    optimizeCss: true,
  },
  webpack(config) {
    // GSAP ships "import": "./index.js" (ESM) in its exports map.
    // webpack 5 prefers the "import" condition, so dynamic `import('gsap')`
    // resolves to the ESM entry — which has bare `import` statements that
    // webpack can't initialise as a CJS factory, causing the runtime error
    // "Cannot read properties of undefined (reading 'call')".
    // Alias both to the pre-built UMD dist files which are pure CJS.
    config.resolve.alias = {
      ...config.resolve.alias,
      // $ means exact match — prevents the gsap alias from swallowing gsap/ScrollTrigger
      'gsap$': path.resolve('./node_modules/gsap/dist/gsap.js'),
      'gsap/ScrollTrigger$': path.resolve('./node_modules/gsap/dist/ScrollTrigger.js'),
    }
    return config
  },
}

export default nextConfig
