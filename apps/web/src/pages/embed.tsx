import { useRef, MouseEventHandler } from 'react'
import useEvent from '@react-hook/event'

export default function Page() {
  // if (typeof window !== 'undefined') {
  //   window.addEventListener('message', (event) => {
  //     console.log('on child', event)
  //   })
  // }

  useEvent(globalThis.window, 'message', (event) => {
    console.log('on child', event)
  })

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    window.parent.postMessage('from child')
  }

  return (
    <>
      a<button onClick={handleClick}>aa</button>
    </>
  )
}
