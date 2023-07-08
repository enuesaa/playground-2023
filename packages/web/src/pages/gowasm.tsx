import Script from 'next/script'

export default function Page() {
  return (
    <>
      <Script id='exec-wasm' src='/wasm_exec.js' onLoad={async () => {
        type Routes = {
          callname: (arg: { name: string }) => string;
          hasPrefix: (arg: { text: string; prefix: string; }) => string;
          decodeJson: (arg: { text: string }) => string;
        }
        const routes: Partial<Routes> = {}
        globalThis.wasmTinygoRegisterFn = (name, callback) => {
          routes[name as keyof Routes] = callback
        }

        const go = new Go()
        // see https://ludwig125.hatenablog.com/entry/2022/03/06/080625
        go.importObject.env['syscall/js.finalizeRef'] = ()=> {};

        const source = fetch('/main.wasm')
        const wasminit = await WebAssembly.instantiateStreaming(source, go.importObject)
        go.run(wasminit.instance)

        if (routes.callname !== undefined) {
          const callres = routes.callname({ name: 'bb' })
          console.log(callres)
        }
        if (routes.hasPrefix !== undefined) {
          const prefixres = routes.hasPrefix({ text: 'dkjbdkj', prefix: 'a' })
          console.log(prefixres)
        }

        if (routes.decodeJson !== undefined) {
          const isValidJson = routes.decodeJson({ text: '{}' })
          console.log(isValidJson)
        }
      }} />
    </>
  )
}
