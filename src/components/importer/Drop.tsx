import styles from './Drop.module.scss'
import { useState, DragEventHandler } from 'react'
import { readFile } from '@/libs/filereader/main'

export default function Drop() {
  const [markdown, setMarkdown] = useState<string|null>(null)
  const onDrop :DragEventHandler = async (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    const data = await readFile(file)
    setMarkdown(data)
  }
 
  return (
    <>
      <section
        onDragOver={(e) => {e.preventDefault()}}
        onDrop={onDrop}
        style={{width: '100%', height: '300px', background: 'rgba(255, 255, 255, 0.1)'}}>
        か
      </section>
      <textarea value={markdown ?? ''} onChange={() => {}}></textarea>
    </>
  )
}
