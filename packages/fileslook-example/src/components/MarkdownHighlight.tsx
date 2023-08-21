import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CodeComponent } from 'react-markdown/lib/ast-to-react'

export const MarkdownHighlight: CodeComponent = ({ inline, className, children }) => {
  if (inline === true) {
    return <code className={className}>{children}</code>
  }

  const match = /language-(\w+)/.exec(className || '')
  if (!match) {
    return <code className={className}>{children}</code>
  }

  return (
    <SyntaxHighlighter style={darcula} language={match[1]}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
}