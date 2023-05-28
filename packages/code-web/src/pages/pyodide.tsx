import Script from 'next/script'

export default function Page() {
  // (async () => {
  //   let pyodide = await loadPyodide();
  //   console.log(pyodide.runPython(`
  //     import sys
  //     sys.version
  //   `));
  // })()

  return (
    <section>
      <Script id='pyodide' src='https://cdn.jsdelivr.net/pyodide/v0.23.2/full/pyodide.js' onLoad={async () => {
        let pyodide = await loadPyodide();
        pyodide.runPython(`
          import sys
          sys.version

          for item in ['a', 'b']:
            print(item)
        `)
      }} />
    </section>
  )
}