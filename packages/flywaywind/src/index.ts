import { Hono } from 'hono'

// declare const MY_KV: KVNamespace;
type Bindings = {
  MY_KV: KVNamespace
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => c.text('Hello Hono!'))
app.get('/api/items/aa', async (c) => {
  const item = await c.env.MY_KV.get('aa')
  return c.json({success: true, aa: item})
})

app.post('/api/items', async (c) => {
  const { value } = await c.req.json()
  if (typeof value === "string") {
    await c.env.MY_KV.put("aa", value)
  }
  return c.json({success: true})
})

export default app
