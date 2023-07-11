import { isIncludeInvoker } from '@/lib/invoker'
import Script from 'next/script'
import { useEventListener } from 'usehooks-ts'

export default function Page() {
  // おそらくここで lib/toolkit を呼び出す

  useEventListener('message', (event) => {
    if (isIncludeInvoker(event)) {
      console.log('on embed', event.data.text)

      const name = 'callname'
      if (!globalThis.goWasmRoutes.hasOwnProperty(name)) {
        return;
      }

      const fn = globalThis.goWasmRoutes[name]
      const res = fn(arg)
      // send success message
    }
  })

  return (
    <>
      {'入力値をみてcomponentを組み立てる'}
    </>
  )
}
