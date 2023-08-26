import { CodeBlock } from './CodeBlock'
import { Sidebar } from './Sidebar'
import { type FileInfo } from '../type'
import { ReactNode, useState } from 'react'
import { File } from './File'

type Props = {
  children: ReactNode
  hideSidebar: boolean
}
export const Files = ({ children, hideSidebar }: Props) => {
  // see https://stackoverflow.com/questions/65078600
  if (!Array.isArray(children)) return children
  return (
    <section style={{ borderRadius: '5px', boxShadow: '0 2px 2px #000', color: '#fafafa', display: 'flex', width: '100%', fontSize: '16px' }}>
      <div style={{ flex: '1 0 auto' }}>
        {children}
        {/* <CodeBlock className={`language-${openedFile?.language}:${openedFile?.path}`}>{openedFile?.content}</CodeBlock> */}
      </div>
    </section>
  )
}

