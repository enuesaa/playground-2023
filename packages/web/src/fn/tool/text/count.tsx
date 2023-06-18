export const metadata = metadata({
  id: 'tool:text:count',
  name: '文字数カウント',
  tags: [],
  description: '',
  created: '',
  modified: '',
})

export const kvs = kvs([])

export const contents = () => {
  return (
    <>
      文字数カウントをします
      <Attention />
      <Demo />
      <Markdown />
      <Files />
    </>
  )
}