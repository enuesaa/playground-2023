import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))
app.get('/api', (c) => c.text('Hello from api!'))
app.get('/api/a.txt', serveStatic({ path: './a.txt' })) // for test

export default app
