/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.experiments.asyncWebAssembly = true
    /** @todo why need next line */
    config.output.webassemblyModuleFilename = (isServer ? '../' : '') + 'static/wasm/webassembly.wasm';
    return config;
  },
}

module.exports = nextConfig
