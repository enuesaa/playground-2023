import { MouseEventHandler } from 'react'
import { useEventListener } from 'usehooks-ts'
import Script from 'next/script'
import { type AppMessage, isAppMessage } from '@/lib/message'

export default function Page() {
  // if (typeof window !== 'undefined') {
  //   window.addEventListener('message', (event) => {
  //     console.log('on child', event)
  //   })
  // }

  useEventListener('message', (event) => {
    if (isAppMessage(event)) {
      console.log('on embed', event.data.text)
    }
  })

  const handleHello: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    const res = globalThis.goWasmRoutes.callname({ name: 'bb' })
    window.parent.postMessage({ source: 'kakkofn', text: res } as AppMessage)
  }

  const handleHasPrefix: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    const res = globalThis.goWasmRoutes.hasPrefix({ text: 'dkjbdkj', prefix: 'a' })
    window.parent.postMessage({ source: 'kakkofn', text: res } as AppMessage)
  }

  const handleIsValidJson: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const res = globalThis.goWasmRoutes.decodeJson({ text: '{}' })
    window.parent.postMessage({ source: 'kakkofn', text: res } as AppMessage)
  }

  return (
    <>
      <button onClick={handleHello}>hello</button>
      <button onClick={handleHasPrefix}>hasPrefix</button>
      <button onClick={handleIsValidJson}>isValidJson</button>
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
        const isValidJson = goWasmRoutes.decodeJson({ text: '{}' })
        console.log(isValidJson)
      }} />
    </>
  )
}
