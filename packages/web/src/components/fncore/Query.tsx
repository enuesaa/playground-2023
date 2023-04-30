import { useAtomValue } from 'jotai'
import { fncoreAtom } from '@/lib/fncore'

export const Query = () => {
  const fncore = useAtomValue(fncoreAtom)
  if (fncore === null) {
    return <></>
  }

  const res = fncore.replace('baabbcca', 'a', 'b')

  return <section style={{ color: '#fafafa' }}>{res}</section>
}