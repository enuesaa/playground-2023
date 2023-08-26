import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./web/**/*.{ts,tsx}', './web/pages/**/*.{ts,tsx}'],
  exclude: [],
  theme: {
    extend: {}
  },
  outdir: 'web/styled-system',
})
