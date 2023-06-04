import Link from 'next/link'

export default function Page() {

  return (
    <>
      <h2>json.Marshal(s)</h2>
      <div>json decode</div>
      <div>language: go <span>他言語との比較 (Python, Node.js)</span></div>
      <div>
        <h3>usage</h3>
        <code>
        import (
          "encoding/json"
        )
        
        func main 
          json.Marshal(s)
        </code>
      </div>
      <div>demo (たくさん examples をほしい)</div>
      <div>
        <h3>example1</h3>
        <h3>example2</h3>
      </div>
      <div>フロー図 (mermaid)</div>
      <div>
        エラー文言
        <div>json decode に失敗したとき</div>
      </div>
      <Link href={'https://pkg.go.dev/encoding/json'}>doc</Link>
    </>
  )
}
