import { Hono } from 'hono'
import { KVNamespace } from '@cloudflare/workers-types';
// @ts-ignore
import './wasm_exec.js'
// @ts-ignore
import module from './main.wasm'

// declare const MY_KV: KVNamespace;
type Bindings = {
  MY_KV: KVNamespace
}

// see https://tech.mfkessai.co.jp/2022/05/invoke-tinygo-wasm-in-cloudflare-workers/
// @ts-ignore
globalThis.performance = {
  now() {
    return Date.now()
  },
}

const app = new Hono<{ Bindings: Bindings }>()

// app.get('/', (c) => c.text('Hello Hono!'))
app.get('/api/items/aa', async (c) => {
  // const item = await c.env.MY_KV.get('aa')
  return c.json({success: true, a: globalThis.hasOwnProperty('MY_KV')})
})

// app.post('/api/items', async (c) => {
//   const { value } = await c.req.json()
//   if (typeof value === "string") {
//     await c.env.MY_KV.put("aa", value)
//   }
//   return c.json({success: true})
// })

app.post('/api/wasm', async (c) => {
  // @ts-ignore
  const go = new Go()
  let instance = await WebAssembly.instantiate(module, go.importObject).then((obj) => {
    go.run(obj)
    return obj
  })
  // @ts-ignore
  let result = instance.exports.add(1, 2)
  return c.json({success: true, result})
})

export default app
