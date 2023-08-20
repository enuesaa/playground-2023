import { FileContent } from './FileContent'
import { Sidebar } from './Sidebar'
import { Tab } from './Tab'
import { type FileInfo } from '../type'
import { useState } from 'react'

type Props = {
  files: FileInfo[];
  opened: string; // opened file path
  hideSidebar: boolean;
}
export const Files = ({ files, opened, hideSidebar }: Props) => {
  const [openedFile, setOpenedFile] = useState<FileInfo|null>(
    files.find(f => f.path === opened) ?? null
  )

  const onSelect = (selected: string) => {
    const selectedFile = files.find(f => f.path === selected) ?? null
    if (selectedFile !== null) {
      setOpenedFile(selectedFile)
    }
  }

  return (
    <section style={{ borderRadius: '5px', boxShadow: '0 2px 2px #000', color: '#fafafa', display: 'flex', width: '100%', fontSize: '16px' }}>
      {hideSidebar ? (<></>) : (
        <div style={{ flex: '0 0 100px' }}>
          <Sidebar files={files} onSelect={onSelect} />
        </div>
      )}
      <div style={{ flex: '1 0 auto' }}>
        <Tab file={openedFile} />
        <FileContent file={openedFile} />
      </div>
    </section>
  )
}
