import { type FileInfo } from '../type'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = {
  file: FileInfo|null;
}
export const FileContent = ({ file }: Props) => {

  return (
    <section style={{ background: '#10181a', padding: '20px' }}>
      <SyntaxHighlighter style={darcula} language={file?.language}>
        {file?.content ?? ''}
      </SyntaxHighlighter>
    </section>
  )
}
