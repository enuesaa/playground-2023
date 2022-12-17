import { useState, useRef, DragEventHandler, ChangeEventHandler, MouseEventHandler } from 'react'
import { readFile } from '@/lib/filereader/main'
import { css } from '@emotion/react'

export function Drop() {
  const styles = {
    droparea: css({
      width: '100%',
      height: '300px',
      background: 'rgba(255, 255, 255, 0.1)',
      textAlign: 'center',
      fontSize: '50px',
      fontWeight: '800',
      color: '#191919',
      lineHeight: '300px',
      cursor: 'pointer',
      borderRadius: '5px',
    }),
  }
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
    if (inputRef.current === null) {
      return
    }
    inputRef.current.click()
  }
  const onChange: ChangeEventHandler = async (e: any) => {
    e.preventDefault()
    await resolveFile(e.target.files[0])
  }

  return (
    <>
      <div
        css={styles.droparea}
        onDrop={onDrop}
        onDragOver={(e) => {
          e.preventDefault()
        }}
        onClick={onClick}
      >
        drop here!
      </div>
      <input type='file' ref={inputRef} onChange={onChange} style={{ display: 'none' }} />
      <textarea
        value={markdown ?? ''}
        onChange={(e) => {
          e.preventDefault()
        }}
      ></textarea>
    </>
  )
}
