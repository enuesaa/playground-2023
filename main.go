package main

import (
	"github.com/enuesaa/kakkofn/handler"
	"github.com/gofiber/fiber/v2"
)

func CreateApp() *fiber.App {
	app := fiber.New()

	app.Get("/api/fns", handler.ListFns)
	app.Get("/api/fns/:id", handler.DescribeFn)

	app.Get("/assets/codego/app.wasm", handler.GetCodegoWasm) // get wasm binary
	// app.Get("/assets/codego/wasm_exec.js", handler.GetCodegoWasm) // golang wasm_exec.js
	// app.Get("/assets/toolkit/app.wasm", handler.GetCodegoWasm)

	app.Static("/", "./tmp/dist")

	return app
}

func main() {
	app := CreateApp()
	app.Listen(":3000")
}
