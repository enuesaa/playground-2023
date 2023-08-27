# designdoc
## Apps
| name | purpose | stacks |
| - | - | - |
| main | Web | Go, React |
| toolkit | Tools | Rust |

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
- rust wasm
  - output schema as json
- go cli
  - embed wasm app and json
  - read json and parse dynamically
- include dist
  - ssg react app
