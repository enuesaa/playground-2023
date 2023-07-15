import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))
app.get('/api', (c) => c.text('Hello from api!'))

export default app
