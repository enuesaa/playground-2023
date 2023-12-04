# tabbyml

- docker では動かなかった
- 代わりに brew でインストールした
- やっぱり CUDA 環境で動かしてみたいなあ。
- ~/.tabby 配下に model をダウンロードするっぽい
- 管理画面は Next.js + @shadcn/ui っぽい

## Results
ぱっと見便利そう。

### Go
```
curl -X 'POST' \
  'http://localhost:8080/v1/completions' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "language": "go",
  "segments": {
    "prefix": "type User struct {",
    "suffix": "}"
  }
}'

{
  "id": "cmpl-422ab829-cf28-4ce5-a39d-7f37704d94a8",
  "choices": [
    {
      "index": 0,
      "text": "\n\tName string\n\tAge  int\n}\n"
    }
  ]
}
```

### typescript
```
curl -X 'POST' \
  'http://localhost:8080/v1/completions' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "language": "typescript",
  "segments": {
    "prefix": "type User = {",
    "suffix": "}"
  }
}'

{
  "id": "cmpl-292dfd7f-647f-4028-8654-245f812fa704",
  "choices": [
    {
      "index": 0,
      "text": "\n  id: string;\n  name: string;\n  email: string;\n"
    }
  ]
}
```