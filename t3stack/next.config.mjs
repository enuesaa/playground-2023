// @ts-check

/** @see https://create.t3.gg/en/deployment/docker#3-create-dockerfile */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
};
export default config;
