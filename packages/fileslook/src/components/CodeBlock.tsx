import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { FiCopy, FiCheck } from 'react-icons/fi'
import { MouseEventHandler, useState } from 'react'

type Props = JSX.IntrinsicElements['code']
export const CodeBlock = ({ className, children }: Props) => {
  const [clicked, setClicked] = useState<boolean>(false)
  if (typeof children !== 'string') {
    return (<>children</>)
  }

  const {language, filename} = extractMetadata(className ?? '')

  const handleCopy: MouseEventHandler<HTMLSpanElement> = async (e) => {
    e.preventDefault()
    await globalThis.navigator.clipboard.writeText(children)
    setClicked(true)
    setTimeout(() => { setClicked(false) }, 3000)
  }

  return (
    <div style={{position: 'relative'}}>
      {filename === null ? (<></>) : (
        <span style={{position: 'absolute', top: '5px', right: '5px', color: '#aaaaaa', userSelect: 'none'}}>
          {filename}
        </span>
      )}
      <span onClick={handleCopy} style={{position: 'absolute', bottom: '3px', right: '5px', color: '#aaaaaa', fontSize: '16px', cursor: 'pointer'}}>
        {clicked ? (<FiCheck />): (<FiCopy />)}
      </span>
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
