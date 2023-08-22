import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'
import { useState } from 'react'
import { CodeBlock } from '@enuesaa/fileslook'

export default function Page() {
  const markdown= `
# タイトル
~~~go:main.go
package main

import (
  "fmt"
)

func main() {
  fmt.Println("a")
}
~~~
`

  const [compiledSource, setCompiledSource] = useState<string|null>(null);
  (async () => {
    const markdownSerialized = await serialize(markdown)
    setCompiledSource(markdownSerialized.compiledSource)
  })()

  return (
    <>
      <Link href={'/'} style={{ color: '#fafafa' }}>top</Link>
      <section style={{width: '900px', margin: '10px auto', color: '#fafafa'}}>
        { compiledSource === null ? (<></>) : (
          <MDXRemote
            compiledSource={compiledSource}
            scope={{}}
            frontmatter={{}}
            components={{
              code: CodeBlock,
            }}
          />
        )}
      </section>
    </>
  )
}
