import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Hono!'))
app.get('/aaa', c => c.json({ path: 'aaa' }))
app.get('/bbb', c => c.json({ path: 'bbb' }))

serve(app)
