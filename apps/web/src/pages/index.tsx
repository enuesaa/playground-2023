import { useEffect } from 'react'
import * as wasm from '../lib/wasm/toolkit.js'

export default function Page() {

  useEffect(() => {
    // fetch('protowasi.wasm')
    //   .then((response) => response.arrayBuffer())
    //   .then((bytes) => WebAssembly.instantiate(bytes, {}))
    //   .then((results) => {
    //     console.log(results)
    //   });

    // WebAssembly.instantiateStreaming(fetch('toolkit_bg.wasm'), {}).then(
    //   (results) => {
    //     console.log(results)
    //   },
    // );
    console.log(wasm.main('a'))
  }, [])

  return (<></>)
}
