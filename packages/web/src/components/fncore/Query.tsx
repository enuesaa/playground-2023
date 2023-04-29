import { useAtomValue } from 'jotai'
import { fncoreAtom } from '@/lib/fncore'

export const Query = () => {
  const fncore = useAtomValue(fncoreAtom)
  if (fncore === null) {
    return <></>
  }

  const res = fncore.hello('aaa')

  return <section style={{ color: '#fafafa' }}>{res}</section>
}