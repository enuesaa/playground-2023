import { useRef, MouseEventHandler } from 'react'

export default function Page() {
  if (typeof window !== 'undefined') {
    window.addEventListener("message", (event) => {
      console.log('on child', event)
      // event.stopPropagation()

    }, false);
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    window.parent.postMessage('from child')
  }

  return (
    <>
      a
      <button onClick={handleClick}>aa</button>
    </>
  )
}
