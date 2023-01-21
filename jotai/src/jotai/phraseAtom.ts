import { atom } from 'jotai'

export const phraseAtom = atom('hello')
export const phraseUppercaseAtom = atom(
  (get) => get(phraseAtom).toUpperCase()
)
