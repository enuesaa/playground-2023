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

## Architecture
### Web API
written by Go. 
- handle something meta information.
- use wasmer-go to execute wasm app.

### CLI
written by Go. 
- print something meta information.
- use wasmer-go to execute wasm app.

### Wasm
written by Rust. 

### Web App
written by JS

