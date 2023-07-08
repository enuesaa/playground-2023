import { useRef, MouseEventHandler } from 'react'
import Iframe from 'react-iframe'

export default function Page() {
  const frame = useRef<HTMLIFrameElement>(null)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    console.log(frame.current)

    frame.current?.contentWindow?.postMessage('aaa')
  }

  return (
    <>
      <Iframe
        url="/embed"
        width="640px"
        height="320px"
        onLoad={() => {
          console.log('a')
        }}
      />

      <iframe
        src='/embed'
        ref={frame}
      />

      <button onClick={handleClick}>aa</button>
    </>
  )
}
