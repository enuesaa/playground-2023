import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = JSX.IntrinsicElements['code']
export const CodeBlock = ({ className, children }: Props) => {
  if (typeof children !== 'string') {
    return (<>children</>)
  }

  const {language, filename} = extractMetadata(className ?? '')

  return (
    <div style={{position: 'relative'}}>
      {filename === null ? (<></>) : (
        <span style={{position: 'absolute', top: '5px', right: '5px', color: '#cccccc', userSelect: 'none'}}>
          {filename}
        </span>
      )}
      <SyntaxHighlighter
        style={nightOwl}
        customStyle={{boxShadow: '0 1px 2px rgba(0,0,0,0.3)', borderRadius: '5px'}}
        language={language ?? undefined}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

/**
 * @param className like `language-go` or `language-go:main.go`
 */
export const extractMetadata = (className: string): {language: null|string; filename: null|string} => {
  const match = /language-(\w+)(:([\w\-_.]+))?/.exec(className)
  if (match === null) {
    return {language: null, filename: null}
  }
  return {language: match[1], filename: match[3]}
}
