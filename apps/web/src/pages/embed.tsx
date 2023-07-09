import { MouseEventHandler } from 'react'
import useEvent from '@react-hook/event'
import Script from 'next/script'
import { type AppMessage, isAppMessage } from '@/lib/message'

export default function Page() {
  // if (typeof window !== 'undefined') {
  //   window.addEventListener('message', (event) => {
  //     console.log('on child', event)
  //   })
  // }

  useEvent(globalThis.window, 'message', (event) => {
    if (isAppMessage(event)) {
      console.log(event.data.text)
    }
  })

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    window.parent.postMessage({ source: 'kakkofn', text: 'bbb' } as AppMessage)
  }

  return (
    <>
      <button onClick={handleClick}>aa</button>
      <Script id='exec-wasm' src='/wasm_exec.js' onLoad={async () => {
        globalThis.goWasmRoutes = {
          callname: (_) => '',
          hasPrefix: (_) => '',
          decodeJson: (_) => '',
        }

        const go = new Go()
        const source = fetch('/main.wasm')
        const wasminit = await WebAssembly.instantiateStreaming(source, go.importObject)
        go.run(wasminit.instance)

        const callres = goWasmRoutes.callname({ name: 'bb' })
        console.log(callres)
        const prefixres = goWasmRoutes.hasPrefix({ text: 'dkjbdkj', prefix: 'a' })
        console.log(prefixres)
        const isValidJson = goWasmRoutes.decodeJson({ text: '{}' })
        console.log(isValidJson)
      }} />
    </>
  )
}
