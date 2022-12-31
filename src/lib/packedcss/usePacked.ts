import { useContext } from 'react'
import { PackedStyleHandlerContext } from './PackedContext'
import { nanoid } from 'nanoid'

type Packed = {
  card: () => string,
}
export const usePacked = (): Packed => {
  const packedStyleHandler = useContext(PackedStyleHandlerContext)

  const id = nanoid()
  // packedStyleHandler(id, {})

  const card = () => {
    const classId = nanoid()
    packedStyleHandler('a', {
      'bhj': { background: '#ff6633' },
    })
    return 'bhj'
  }

  return { card }
}
