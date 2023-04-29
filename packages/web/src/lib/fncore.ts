import { atom } from 'jotai'

type Fncore = typeof import('@/fncore/fncore.js')

export const fncoreAtom = atom<Fncore | null>(null)
fncoreAtom.onMount = (set) => {
  ;(async () => set(await import('@/fncore/fncore.js')))()
}
