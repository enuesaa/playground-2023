import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = JSX.IntrinsicElements['code']
export const CodeBlock = ({ className, children }: Props) => {
  const language = className?.replace('language-', '') ?? '' // like `language-go` to `go`

  if (typeof children !== 'string') {
    return (<>children</>)
  }

  const style = {
    boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
    borderRadius: '5px',
  }

  return (
    <SyntaxHighlighter style={nightOwl} customStyle={style} {...(language !== '' && {language})}>
      {children}
    </SyntaxHighlighter>
  )
}
