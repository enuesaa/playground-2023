import { type FileInfo } from '../type'

type Props = {
  files: FileInfo[];
  onSelect: (selected: string) => void;
}
export const Sidebar = ({ files, onSelect }: Props) => {
  return (
    <ul style={{ lineHeight: '1.2', fontSize: '15px', color: '#ccf7ff', listStyleType: 'none', padding: '10px', height: '100%', marginBlockStart: '0' }}>
      {files.map((f, i) => (
        <li key={i} style={{ cursor: 'pointer', margin: '10px' }} onClick={(e) => {
          e.preventDefault()
          onSelect(f.path)
        }}>
          {f.path}
        </li>
      ))}
    </ul>
  )
}
