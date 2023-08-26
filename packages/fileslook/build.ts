import esbuild from 'esbuild'

await esbuild.build({
  bundle: true,
  entryPoints: [
    './src/index.ts',
  ],
  external: ['react'],
  outdir: './dist',
  format: 'esm',
})
