import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import 'wasm_exec-ts'

export default function Page() {
  const go = new Go();
  WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject).then((result) => {
      go.run(result.instance);
  });

  return (
    <>
      <Header />
      <Main>
      </Main>
    </>
  )
}
