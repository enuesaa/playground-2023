# codego
wasm app of golang.

## Links
- https://future-architect.github.io/articles/20221024a/
- https://betterprogramming.pub/error-handling-with-tinygo-wasm-883533bb8b77
- https://www.wasm.builders/k33g_org/an-essay-on-the-bi-directional-exchange-of-strings-between-the-wasm-module-with-tinygo-and-nodejs-with-wasi-support-3i9h
- https://ludwig125.hatenablog.com/entry/2022/03/06/080625

## fix `no required module provides package "syscall/js"` on vscode
https://github.com/golang/vscode-go/issues/1799

## TODO
- 言語比較をしたい
  - usage
  - links to doc or source
  - wasm deno
  - errors or exceptions
  - flow ... 処理内容を示す marmeid がほしい
- インタフェースを研究する文脈で、題材として扱う
  - Github Next の Blocks のような
- というか全てウェブアプリで、何でも可視化できればベスト
  そのためには型の定義や、その型で、どういう図を生成できるかマッピングが必要
  - Numbers
  - String
  - Boolean
  - List

## development plan
- fnlook でグラフなどのインタフェースを用意する
- それを web でマッピングする
- 最後に wasm の demo など作る
