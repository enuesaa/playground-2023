import styeles from './Drop.module.scss'
import { useState, useRef, DragEventHandler, ChangeEventHandler, MouseEventHandler  } from 'react'
import { readFile } from '@/libs/filereader/main'

export function Drop() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [markdown, setMarkdown] = useState<string | null>(null)
  const resolveFile = async (file: File) => {
    const data = await readFile(file)
    setMarkdown(data)
  }
  const onDrop: DragEventHandler = async (e) => {
    e.preventDefault()
    await resolveFile(e.dataTransfer.files[0])
  }
  const onClick: MouseEventHandler = (e) => {
    e.preventDefault()
    if (inputRef.current === null) {return}
    inputRef.current.click()
  }
  const onChange: ChangeEventHandler = async (e: any) => {
    e.preventDefault()
    await resolveFile(e.target.files[0])
  }

  return (
    <>
      <div
        className={styeles.droparea}
        onDrop={onDrop}
        onDragOver={(e) => {
          e.preventDefault()
        }}
        onClick={onClick}
      >
        drop here!
      </div>
      <input type='file' ref={inputRef} onChange={onChange} style={{display: 'none'}} />
      <textarea
        value={markdown ?? ''}
        onChange={(e) => {
          e.preventDefault()
        }}
      ></textarea>
    </>
  )
}
