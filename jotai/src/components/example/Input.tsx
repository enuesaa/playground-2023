import { useAtom } from 'jotai'
import { phraseAtom } from '@/jotai/phraseAtom'
import { ChangeEventHandler } from 'react'

export const Input = () => {
  const [text, setText] = useAtom(phraseAtom)
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => setText(e.target.value)

  return (
    <input value={text} onChange={handleChange} />
  )
}