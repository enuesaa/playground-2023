#!/usr/bin/env node

// from test code
import postcss from 'postcss'
import tailwind from 'tailwindcss'

const tailwindPlugin = tailwind({
  // content: [],
  corePlugins: { preflight: false },
})
const postcssProcessor = postcss(tailwindPlugin)
const input = String.raw`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
`

const res = postcssProcessor.process(input)
console.log(res)


// import a from 'tailwindcss/src/corePlugins.js'
// console.log(a.corePlugins)

// load tailwind default config
// parse process.argv
// out tailwind css