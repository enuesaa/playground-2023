# kakkofn
My experimental website.

## Packages
| name | purpose | stacks | priority |
| - | - | - | - |
| web | Web application for kakkofn.dev | NextJS | ★★★★★ |
| toolkit | Tools | Rust | ★★★ |
| codego | Code demonstration | Golang(Wasm) | ★★★★★ |

## URL体系
- /fn/{fnname}

fn/{namespace}/{category}/{action}/main.ts
- fn/tool/base64/decode/main.ts ... tool:bas64:decode
- fn/code/go/json-decode/main.ts ... code:go:json-decode

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
- いろんな fn を結びつけて順次実行できたらいいかなあ。
  - langchain のようなイメージ
  - めちゃくちゃ繋げたいわけではなく、ほんのちょっとできればいい
- json形式とかでexportできればいいなあ

- 初めのうちは export とかいらない
- タイルを他のcomponentに変えられるようにしたい
- タイルの値をまた fn で加工していくイメージ
  - タイルの非表示度かもでき
  - タイルの追加などもでき、svg化も出来る
