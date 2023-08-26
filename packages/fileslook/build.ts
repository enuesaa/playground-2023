import esbuild from 'esbuild'

await esbuild.build({
  bundle: true,
  entryPoints: [
    './src/index.ts',
  ],
  external: ['react', 'react-dom'],
  outdir: './dist',
  format: 'esm',
})
