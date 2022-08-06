/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@import "./variables.scss";`
  },
}

module.exports = nextConfig
