/**
 * fn/{namespace}/{category}/{action}/main.ts
 * - fn/tool/base64/decode/main.ts ... tool:bas64:decode
 * - fn/code/go/json-decode/main.ts ... code:go:json-decode
 * 
 * next.js とか remix みたいに named export する
 * - これを pages/fn/[name].tsx が getStaticProps をして render する
 */
export const metadata = metadata({
  id: 'code/go/json-decode', // url とか arn 的な意味合い
  name: 'base64でデコードする',
  tags: ['decode'],
  description: '',
  created: '',
  modified: '',
})

// 表示をトグルできるイメージ
export const kvs = kvs([
  {name: '', value: '', href: 'https://example.com', description: ''},
  {name: 'usage', value: 'JSON.Marahsll()', description: ''},
])

export const slides = [
  attention('aa'),
  markdown('./content.md'),
  demo({
    name: '',
    description: '',
    inputs: ['textarea'],
    handler: () => {},
  }),
  files('./files')
]
