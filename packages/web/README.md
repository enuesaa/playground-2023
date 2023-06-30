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


## Memo
- 言語系
  - usage
  - links to doc or source
  - wasm deno
  - errors or exceptions
  - flow ... 処理内容を示す marmeid がほしい
- インタフェースを研究する文脈で、題材として扱う
  - Github Next の Blocks のような
- というか全てウェブアプリで、何でも可視化できればベスト
  Rust の Displayトレイトのような fn がたくさんあれば良い
  - ある型用とか。というか terraform のdata resourceみたいな
  - プログラミングじゃないから型は柔らかく、、と思いつつ補完を考えると。。
- というかフローなんだよなあ。
  - なんか色んな fn を結びつけて順次実行できたらいいかなあ。
  - langchain のようなイメージ
  - めちゃくちゃ繋げたいわけではなく、ほんのちょっとできればいい
- json形式とかでexportできればいいなあ
- なんかついでに簡単な図を作成できればいいなあ
  - 文字を表示する fn とか
