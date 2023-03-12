import { atom } from 'jotai'

type Transmeet = typeof import('@/transmeet/transmeet.js')
export const transmeetAtom = atom<Transmeet | null>(null)
transmeetAtom.onMount = (set) => {
  (async() => set(await import('@/transmeet/transmeet.js')))()
}
