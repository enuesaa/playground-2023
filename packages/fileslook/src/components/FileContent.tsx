import { type FileInfo } from '../type'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = {
  file: FileInfo|null;
}
export const FileContent = ({ file }: Props) => {
  return (
    <SyntaxHighlighter style={oneDark} language={file?.language}>
      {file?.content ?? ''}
    </SyntaxHighlighter>
  )
}
