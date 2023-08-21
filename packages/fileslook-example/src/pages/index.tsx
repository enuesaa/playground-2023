import { Files, type FileInfo } from '@enuesaa/fileslook'

export default function Page() {
  const files: FileInfo[] = [
    {
      path: 'index.ts',
      language: 'typescript',
      content: 'import a from "b" \n'
    },
    {
      path: 'main.go',
      language: 'go',
      content: `package main

import ("fmt")

func main() {
  fmt.Println("aa")
}`
    }
  ]

  return (
    <section style={{width: '900px', margin: '10px auto'}}>
      <Files files={files} opened={'main.go'} hideSidebar={true} />
    </section>
  )
}
