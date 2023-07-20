import { isIncludeInvoker } from '@/lib/invoker'
import Script from 'next/script'
import { useEventListener } from 'usehooks-ts'

// go.json.decode
// json は wasm のファイル名?
// decode が handler name ?

// なんかでも、同じ namespace のhandlerを呼ぶのって少ないと思うんだよなあ

export default function Page() {
  useEventListener('message', (event) => {
    if (isIncludeInvoker(event)) {
      console.log('on embed', event.data.text)

      const name = 'callname' // 何を name とするか定義が必要
      if (!globalThis.goWasmRoutes.hasOwnProperty(name)) {
        // send error message
        return
      }

      const fn = globalThis.goWasmRoutes[name]
      const res = fn(arg)
      // send success message
    }
  })

  return (
    <>
      {'入力値をみてcomponentを組み立てる'}
      <Script
        id='exec-wasm'
        src='/wasm_exec.js'
        onLoad={async () => {
          globalThis.goWasmRoutes = {
            callname: (_) => '',
            hasPrefix: (_) => '',
            decodeJson: (_) => '',
          }

          const go = new Go()
          // たぶん、これも name ごと？
          const source = fetch('/main.wasm')
          await WebAssembly.instantiateStreaming(source, go.importObject)
        }}
      />
    </>
  )
}
