/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  output: 'export',
  distDir: 'dist',
  webpack: (config, { isServer }) => {
    config.experiments = { asyncWebAssembly: true }
    config.output.webassemblyModuleFilename = (isServer ? "../" : "") + "static/wasm/[modulehash].wasm";
    return config;
  },
}

module.exports = nextConfig
