
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
export const metadata = {
  resourceName: 'tool:base64:decode', // url とか arn 的な意味合い
  name: 'base64でデコードする',
  tags: ['decode'],
  description: '',
}

export const slides = [
  // attention 'aaa'
  // text 'aaa'
  // link: [{url: '', text: ''}] // これどうするか
  // images: [],
  // graphs: [],
  // // どちらかというと表
  // kvs: [
  //   {
  //     key: 'aa',
  //     value: 'bb',
  //     description: '',
  //   }
  // ]
];

export const demos = [
  {
    name: '',
    description: '',
    inputs: ['textarea'],
    handler: () => {},
  }
]
