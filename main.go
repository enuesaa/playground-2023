package main

import (
	"github.com/enuesaa/kakkofn/handler"
	"github.com/gofiber/fiber/v2"
	_ "github.com/evanw/esbuild/pkg/api"
	_ "github.com/fsnotify/fsnotify"
)

func main() {
	app := CreateApp()
	app.Listen(":3000")
}

func CreateApp() *fiber.App {
	// nextjs で言う api routes みたいな. SSGされる対象
	// - GET /api/fns ... list fns
	// - GET /api/fns/{id} ... get fn with id
		// - GET /api/fns/{id}/actions ... list content actions
		// - GET /api/fns/{id}/actions/{id}/wasm ... get wasm binary
	
	// - GET /assets/codego/wasm ... get wasm binary
	// - GET /assets/codego/wasm_exec.js ... golang wasm_exec.js

	// 入力値は現実的にどのようなパターンがありそうか考える必要がある

	app := fiber.New()
	app.Get("/api", handler.ListContents)
	app.Get("/codego/wasm", handler.GetCodegoWasm)
	app.Static("/", "./public")

	return app
}
