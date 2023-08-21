import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CSSProperties } from 'react'

type Props = JSX.IntrinsicElements['code']
export const CodeBlock = ({ className, children }: Props) => {
  const language = className?.replace('language-', '') ?? '' // like `language-go` to `go`

  if (typeof children !== 'string') {
    return (<>children</>)
  }

  const theme = {
    ...a11yDark,
  } as {[key: string]: CSSProperties}
  theme[':not(pre) > code[class*="language-"]']['background'] = '#282a36'
  theme['pre[class*="language-"]']['background'] = '#282a36'
  console.log(theme)

  return (
    <SyntaxHighlighter style={theme} {...(language !== '' && {language})}>
      {children}
    </SyntaxHighlighter>
  )
}
