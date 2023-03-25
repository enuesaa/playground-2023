import { listUtilities } from './tailwind/core_resolver'

export type UtiltiyClass = {
  name: string
  rawcss: string
}
export const searchUtilityClassFromCss = (word: string): Array<UtiltiyClass> => {
  const utilities = listUtilities()
  const filterd: Array<UtiltiyClass> = []
  Object.keys(utilities).map((key) => {
    const css = utilities[key]
    const rawcss = JSON.stringify(css).replaceAll('"', '') /** @todo fix */
    if (rawcss.indexOf(word) !== -1) {
      filterd.push({ name: key, rawcss: rawcss })
    }
  })
  return filterd
}
