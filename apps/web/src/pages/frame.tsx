import { useRef, MouseEventHandler } from 'react'
import { useEventListener } from 'usehooks-ts'
import { type AppMessage, isAppMessage } from '@/lib/message'

export default function Page() {
  const frame = useRef<HTMLIFrameElement>(null)

  useEventListener('message', (event) => {
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
