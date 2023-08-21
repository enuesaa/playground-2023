import { MarkdownHighlight } from '@/components/MarkdownHighlight'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useState } from 'react'

export default function Page() {
  const markdown= `
# タイトル
~~~go
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
    <section style={{width: '900px', margin: '10px auto', color: '#fafafa'}}>
      { compiledSource === null ? (<></>) : (
        <MDXRemote
          compiledSource={compiledSource}
          scope={{}}
          frontmatter={{}}
          components={{
            // @ts-ignore
            code: MarkdownHighlight,
          }}
        />
      )}
    </section>
  )
}
