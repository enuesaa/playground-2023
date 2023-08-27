import { useEffect } from 'react'

export default function Page() {

  useEffect(() => {
    // fetch('protowasi.wasm')
    //   .then((response) => response.arrayBuffer())
    //   .then((bytes) => WebAssembly.instantiate(bytes, {}))
    //   .then((results) => {
    //     console.log(results)
    //   });

    WebAssembly.instantiateStreaming(fetch('protowasi.wasm'), {}).then(
      (results) => {
        console.log(results)
      },
    );
  }, [])

  return (<></>)
}
