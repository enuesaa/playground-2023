import { serve } from "http/server";

const BOOK_ROUTE = new URLPattern({ pathname: "/books/:id" });

function handler(req: Request): Response {
  const match = BOOK_ROUTE.exec(req.url);

  if (match) {
    const id = match.pathname.groups.id;
    return new Response(`Book ${id}`);
  }

  return new Response("Not found (try /books/1)", {
    status: 404,
  });
}

console.log("Listening on http://localhost:8000");
serve(handler);
