import styeles from './Drop.module.scss'
import { useState, DragEventHandler } from 'react'
import { readFile } from '@/libs/filereader/main'

export function Drop() {
  const [markdown, setMarkdown] = useState<string | null>(null)
  const onDrop: DragEventHandler = async (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    const data = await readFile(file)
    setMarkdown(data)
  }

  return (
    <>
      <div
        className={styeles.droparea}
        onDrop={onDrop}
        onDragOver={(e) => {
          e.preventDefault()
        }}
      ></div>
      <textarea
        value={markdown ?? ''}
        onChange={(e) => {
          e.preventDefault()
        }}
      ></textarea>
    </>
  )
}
