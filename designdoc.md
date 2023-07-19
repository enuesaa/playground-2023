# kakkofn
My experimental website.

## Apps
| name | purpose | stacks |
| - | - | - |
| main | Web API | Go, Gin, wasmer-go |
| web | Web Application | NextJS |
| toolkit | Tools | Rust |
| codego | Golang Demo (Wasm) | Go |

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
- apps/web にnextjsアプリを置くのではなく、第一階層にどうにか収めたいな。
- api と素結合すぎることに課題を感じている
- api が第一市民ではなく apps/web が第一市民なのに、それを表現できていない
