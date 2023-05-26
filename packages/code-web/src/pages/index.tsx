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
        const go = new Go()
        const res = await WebAssembly.instantiateStreaming(fetch('/main.wasm'), go.importObject)
        go.run(res.instance)
        console.log(GlobalFuncName())
      }}/>
    </>
  )
}
