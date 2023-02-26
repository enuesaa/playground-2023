import { atom } from 'jotai'

type Point = {
  x: number;
  y: number;
}

type Waveslib = Omit<typeof import('@/waveslib/waveslib.js'), 'generate_points'> & {
  generate_points: (count: number) => Point[];
}

/**
 * @see https://github.com/satelllte/nextjs-wasm
 */
export const waveslibAtom = atom<Waveslib | null>(null)
waveslibAtom.onMount = (set) => {
  (async() => set(await import('@/waveslib/waveslib.js')))()
}
