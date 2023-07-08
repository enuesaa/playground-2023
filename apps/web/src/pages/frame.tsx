import { useRef, MouseEventHandler } from 'react'

export default function Page() {
  const frame = useRef<HTMLIFrameElement>(null)

  if (typeof window !== 'undefined') {
    // react-devtools-bridge のメッセージも catch してしまう
    window.addEventListener(
      'message',
      (event) => {
        console.log('on parent', event)
        // event.stopPropagation()
      },
      false,
    )
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    frame.current?.contentWindow?.postMessage('aaa', 'http://localhost:3000')
  }

  return (
    <>
      <iframe src='/embed' ref={frame} />
      <button onClick={handleClick}>aa</button>
    </>
  )
}
