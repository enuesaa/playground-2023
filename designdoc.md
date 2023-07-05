# kakkofn
My experimental website.

## Packages
| name | purpose | stacks | priority |
| - | - | - | - |
| web | Web application for kakkofn.dev | NextJS | ★★★★★ |
| toolkit | Tools | Rust | ★★★ |
| codego | Code demonstration | Golang(Wasm) | ★★★★★ |

## URL体系
url と id は対応しない
### id
```{namespace}/{category}/{action}```
- tool:bas64:decode
- code:go:json-decode

## codego
- usage
- links to doc or source
- wasm deno
- flow ... 処理内容を示す marmeid がほしい

## philosophy
- 何でも可視化できればベスト
- インタフェースを研究する文脈で、題材として扱う
  - Github Next の Blocks のような
- いろんな fn を結びつけて順次実行できたらいい
  - langchain のようなイメージ
  - めちゃくちゃ繋げたいわけではない。ほんのちょっとできればいい

## For now
- タイルを他のcomponentに変えられるようにしたい
- タイルの値をまた fn で加工していくイメージ
  - タイルの非表示度かもでき
  - タイルの追加などもでき、svg化も出来る

## TODO
- やはりwebとコンテンツは分けたいなあ。
  コンテンツというパッケージがあり、そのインタフェースとしてwebがあるイメージ。別に音声読み上げとかでもいい。

- そもそもgoのwasmは任意の変数を宣言できないのか調査
- wasm は隔離されていた方が良い、web componentなど使って隔離できないか、api gateway pattern を実現できないか
