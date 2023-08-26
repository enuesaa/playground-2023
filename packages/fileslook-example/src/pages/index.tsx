// import { Files, File } from '@enuesaa/fileslook'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Link href={'markdown'} style={{ color: '#fafafa' }}>markdown</Link>
      <section style={{width: '900px', margin: '10px auto'}}>
        {/* <Files hideSidebar={false}>
          <File path='index.ts' language='ts' code={`
            import a from 'b'
          `} />
          <File path='main.go' language='go' code={`
            package main
            // import fmt
            import ("fmt")

            // ここでなんかやる
            func main() {
              fmt.Println("aa")
            }
          `} />
        </Files> */}
      </section>
    </>
  )
}
