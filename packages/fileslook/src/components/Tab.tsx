import { type FileInfo } from '../type'

type Props = {
  file: FileInfo|null;
}
export const Tab = ({ file }: Props) => {
  const filename = file?.path.split('/').pop() ?? 'unknown'

  return (
    <div style={{ padding: '0 10px', userSelect: 'none' }}>
      <div style={{ fontSize: '15px', background: '#10181a', padding: '7px 15px', display: 'inline-block', borderRadius: '5px 5px 0 0' }}>{filename}</div>
    </div>
  )
}
