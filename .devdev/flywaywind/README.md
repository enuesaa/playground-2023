# flywaywind
App to try cloudflare workers.

## Commands
```bash
$ wrangler --version
 ⛅️ wrangler 3.2.0

$ wrangler login
```

## Links
- https://developers.cloudflare.com/workers/wrangler/configuration/
- https://tech.mfkessai.co.jp/2022/05/invoke-tinygo-wasm-in-cloudflare-workers/
- https://zenn.dev/zawawahoge/articles/48d1e9b20f4166

## Memo
- api の各ルートに Cloudflare の Route 設定(トリガー)がいる
  考えてみると当たり前だが。
- tinygo の wasm を動かすには wasm_exec.js をいじる必要がありそう。そのまま動いてくれない
