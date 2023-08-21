import { type FileInfo } from '../type'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = {
  file: FileInfo|null;
}
export const FileContent = ({ file }: Props) => {
  return (
    <SyntaxHighlighter style={a11yDark} language={file?.language}>
      {file?.content ?? ''}
    </SyntaxHighlighter>
  )
}
