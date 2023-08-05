package main

import (
	"github.com/enuesaa/kakkofn/handler"
	"github.com/gofiber/fiber/v2"
	_ "github.com/evanw/esbuild/pkg/api"
	_ "github.com/fsnotify/fsnotify"
)

func CreateApp() *fiber.App {
	app := fiber.New()
	app.Get("/api/fns", handler.ListFns)
	// app.Get("/api/fns/{id}", handler.ListFns)
	// app.Get("/api/fns/{id}/demos", handler.ListFns)

	// wasm のコードの転送量を抑えたいためAPIで返す
	// app.Get("/api/fns/{id}/demos/{id}", handler.ListFns) // 入力値の定義(JSON Schema)
	app.Get("/codego/wasm", handler.GetCodegoWasm)
	app.Static("/", "./public")

	// - GET /assets/codego/wasm ... get wasm binary
	// - GET /assets/codego/wasm_exec.js ... golang wasm_exec.js

	return app
}

func main() {
	app := CreateApp()
	app.Listen(":3000")
}
