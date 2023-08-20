import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { type FileInfo } from '../type'
import { MarkdownHighlight } from './MarkdownHighlight'

type Props = {
  file: FileInfo|null;
}
export const FileContent = ({ file }: Props) => {

  return (
    <section style={{ background: '#10181a', padding: '20px' }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{ code: MarkdownHighlight }}
        linkTarget={'_blank'}
      >
        {file?.content ?? ''}
      </ReactMarkdown>
    </section>
  )
}
