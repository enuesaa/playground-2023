import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { cb } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = JSX.IntrinsicElements['code']
export const CodeBlock = ({ className, children }: Props) => {
  const language = className?.replace('language-', '') ?? '' // like `language-go` to `go`

  if (typeof children !== 'string') {
    return (<>children</>)
  }

  return (
    <SyntaxHighlighter style={cb} {...(language !== '' && {language})}>
      {children}
    </SyntaxHighlighter>
  )
}
