import { useContext, useState } from 'react'
import { PackedStyleHandlerContext } from './PackedContext'
import { nanoid } from 'nanoid'

type Packed = {
  card: () => string,
}
export const usePacked = (): Packed => {
  const [id] = useState<string>(nanoid())
  const packedStyleHandler = useContext(PackedStyleHandlerContext)

  // packedStyleHandler(id, {})
  const card = () => {
    const classId = nanoid()
    packedStyleHandler(id, {
      'bhj': { background: '#ff6633' },
    })
    return 'bhj'
  }

  return { card }
}
