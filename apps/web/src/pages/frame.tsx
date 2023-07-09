import { useRef, MouseEventHandler } from 'react'
import useEvent from '@react-hook/event'
import { type AppMessage, isAppMessage } from '@/lib/message'

export default function Page() {
  const frame = useRef<HTMLIFrameElement>(null)

  // if (typeof window !== 'undefined') {
  //   window.addEventListener('message', (event) => {
  //     console.log('on parent', event)
  //   })
  // }

  useEvent(globalThis.window, 'message', (event) => {
    // https://github.com/facebook/react-devtools/issues/812
    if (isAppMessage(event)) {
      console.log('on parent', event.data.text)
    }
  })

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    frame.current?.contentWindow?.postMessage({source: 'kakkofn', text: 'aaa'} as AppMessage, 'http://localhost:3000')
  }

  return (
    <>
      <iframe src='/embed' ref={frame} />
      <button onClick={handleClick}>aa</button>
    </>
  )
}
