package main

import (
	"github.com/enuesaa/kakkofn/handler"
	"github.com/gofiber/fiber/v2"
)


func main() {
	app := CreateApp()
	app.Listen("3000")
}

func CreateApp() *fiber.App {
	// nextjs で言う api routes みたいな. SSGされる対象
	// - GET /api/contents ... list contents
	// - GET /api/contents/{id} ... get content with id
	// - GET /api/contents/{id}/actions ... list content actions
	// - GET /api/contents/{id}/actions/{id}/wasm ... get wasm binary

	// wasm ファイルもapi経由で配信できないか
	app := fiber.New()
	app.Get("/api", handler.ListContents)
	app.Static("/", "./public")

	return app
}
