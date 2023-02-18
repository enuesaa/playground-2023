import { handler } from './handler.ts'

const base = "http://localhost:8000"

Deno.bench('Under books', () => {
  const req = new Request(`${base}/books/1`);
  handler(req);
});
