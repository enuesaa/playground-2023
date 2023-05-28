import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import Script from 'next/script'

export default function Page() {
  return (
    <>
      <Header />
      <Main>
      </Main>

      <Script id='exec-wasm' src='/wasm_exec.js' onLoad={async () => {
        const routes: Record<string, (arg: any) => any> = {}
        global.wasmTinygoRegisterFn = (name: string, callback: (arg: any) => any) => {
          routes[name] = callback
        }
        const go = new Go()
        const res = await WebAssembly.instantiateStreaming(fetch('/main.wasm'), go.importObject)
        const wasm = res.instance
        go.run(wasm)

        const callres = routes.callname({ name: 'aa' })
        console.log(callres)
        // const prefixres = wasmTinygoGlobalObject.hasPrefix("dkjbdkj", "a")
        // console.log(prefixres)
      }}/>
    </>
  )
}
