# designdoc
## Apps
| name | purpose | stacks |
| - | - | - |
| main | Tools | Go |
| toolkit | Wasm App | Rust |
| web | Web | React, Next.js |

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

## memo
go app をツールにする。go で cargo build や pnpm build するイメージ

- go
  - tools
  - define schema
  - write contents
  - write json schema to rust wasm
  - build rust app
  - write contents to frontend app
- rust wasm
  - write wasm app.
- frontend
