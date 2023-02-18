import { serve } from "http/server";
import { handler } from "./handler.ts";

console.log("Listening on http://localhost:8000");
serve(handler);
