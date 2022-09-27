#!/usr/bin/env node

import postcss from 'postcss'
import tailwind from 'tailwindcss'
import a from 'tailwindcss/src/corePlugins'

/**
 * @see https://tailwindcss.com/docs/plugins
 */
let corePlugins = a.corePlugins
let utilities = {}
const addUtilities = (args) => {
  utilities = Object.assign(utilities, args)
}
for (const key of Object.keys(corePlugins)) {
  const fnc = corePlugins[key]
  fnc({
    addBase: () => {},
    addUtilities: addUtilities,
    theme: () => {},
    addComponents: () => {},
    matchUtilities: () => {},
    addDefaults: () => {},
    config: () => ({ future: 'all', }),
  })
}

console.log(utilities)

// const tailwindPlugin = tailwind({
//   // content: [],
//   corePlugins: { preflight: false },
// })
// const postcssProcessor = postcss(tailwindPlugin)
// const input = String.raw`
//   @tailwind base;
//   @tailwind components;
//   @tailwind utilities;
// `

// const res = postcssProcessor.process(input)
// console.log(res)


// // import a from 'tailwindcss/src/corePlugins.js'
// // console.log(a.corePlugins)

// // load tailwind default config
// // parse process.argv
// // out tailwind css