
/**
 * fn配下に定義する
 * 
 * fn/{namespace}/{category}/{action}.ts
 * - fn/tool/base64/decode.ts ... tool:bas64:decode
 * - fn/code/go/json-decode.ts ... code:go:json-decode
 */

/**
 * next.js とか remix みたいに named export する
 * 
 * これを pages/fn/[name].tsx が getStaticProps をして render する
 */
type Metadata = {
  resource: string;
  name: string;
  tags: string[];
  description: string;
}
export const metadata: Metadata = {
  resource: 'tool:base64:decode', // url とか arn 的な意味合い
  name: 'base64でデコードする',
  tags: ['decode'],
  description: '',
}

export const attentions = ['aaa']

// files

export const contents =  [`
# aaaa
aaaaa [aaa](https://example.com)

![image](/aaa.png)
`]

// kvs([
//   {name: 'aa', value: 'bb', description: ''},
// ]),

export const links = [
  {href: 'https://example.com', name: '', description: ''},
]

export const demos = [
  {
    name: '',
    description: '',
    inputs: ['textarea'],
    handler: () => {},
  }
]
