/** @todo fix */
import tailwind from 'tailwindcss/src/corePlugins'
const corePlugins = tailwind.corePlugins

export const listUtilities = (): Record<string, Record<string, string>> => {
  const utilities = {}
  const addUtilities = (args: Record<string, Record<string, string>>) => {
    Object.assign(utilities, args)
  }
  Object.keys(corePlugins).map(key => {
    const plugin = corePlugins[key]
    /**
     * @see https://tailwindcss.com/docs/plugins
     */
    plugin({
      addBase: () => {},
      addUtilities: addUtilities,
      theme: () => {},
      addComponents: () => {},
      matchUtilities: () => {},
      addDefaults: () => {},
      config: () => ({ future: 'all', }),
    })
  })

  return utilities
}