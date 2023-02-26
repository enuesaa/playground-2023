import { atom } from 'jotai'

/**
 * @see https://github.com/satelllte/nextjs-wasm
 */
type WasmAtom = {
  wasm: null | typeof import('public/waveslib/waveslib.js'),
}
export const wasmAtom = atom<WasmAtom>({ wasm: null })
wasmAtom.onMount = (set) => {
  (async() => {
    const bridge = await import('public/waveslib/waveslib.js')
    set({ wasm: bridge })
  })()
}
