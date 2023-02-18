import { assertEquals } from "testing/asserts";
import { handler } from './handler.ts'

const base = "http://localhost:8000"
/**
 * @see https://medium.com/deno-the-complete-reference/unit-testing-of-http-server-in-deno-a03b1c028f92
 */
Deno.test("Root page is 404", () => {
  const req = new Request(base);
  const res = handler(req);
  assertEquals(res.status, 404);
});

Deno.test("Under books, pages are found", () => {
  const req = new Request(`${base}/books/1`);
  const res = handler(req);
  assertEquals(res.status, 200);
});
