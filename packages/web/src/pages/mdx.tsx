import type { GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
import fs from 'node:fs/promises'

type Props = {
  source: MDXRemoteSerializeResult
}
export default function Page({ source }: Props) {
  const components = {}

  return (
    <>
      <MDXRemote {...source} components={components} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const file = await fs.readFile('./content/tool/base64/decode.mdx', 'utf-8')
  const mdxSource = await serialize(file)

  return { props: { source: mdxSource } }
}
