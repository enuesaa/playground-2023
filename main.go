package main

import (
	"github.com/enuesaa/kakkofn/handler"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	api := app.Group("/api")
	api.Get("/api/fns", handler.ListFns)
	api.Get("/api/fns/:id", handler.DescribeFn)

	app.Get("/assets/codego/app.wasm", handler.GetCodegoWasm) // get wasm binary
	// app.Get("/assets/codego/wasm_exec.js", handler.GetCodegoWasm) // golang wasm_exec.js
	// app.Get("/assets/toolkit/app.wasm", handler.GetCodegoWasm)

	app.Static("/", "./dist")

	app.Listen(":3000")
}
