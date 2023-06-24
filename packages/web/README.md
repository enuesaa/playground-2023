# web
## fnlook
React components to visualize data.

## Develpoment Plan
- components/fnlook配下にUIコンポーネントを実装する
  - グラフ
  - テキスト など
- fn配下にコンテンツ(fn)を実装する

## URL体系
- /fn/{fnname}


fn/{namespace}/{category}/{action}/main.ts
- fn/tool/base64/decode/main.ts ... tool:bas64:decode
- fn/code/go/json-decode/main.ts ... code:go:json-decode

next.js とか remix みたいに named export する
- これを pages/fn/[name].tsx が getStaticProps をして render する
