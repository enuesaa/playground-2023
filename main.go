package main

import (
	"github.com/enuesaa/kakkofn/handler"
	esbuild "github.com/evanw/esbuild/pkg/api"
	"github.com/gofiber/fiber/v2"
)

func main() {
	// TODO watch mode
	esbuild.Build(esbuild.BuildOptions{
		EntryPoints: []string{"web/app.tsx"},
		Outfile:     "public/app.js",
		Bundle:      true,
		Write:       true,
		LogLevel:    esbuild.LogLevelInfo,
	})

	// nextjs で言う api routes みたいな. SSGされる対象
	// - GET /api/contents ... list contents
	// - GET /api/contents/{id} ... get content with id
	// - GET /api/contents/{id}/actions ... list content actions
	// - GET /api/contents/{id}/actions/{id}/wasm ... get wasm binary
	app := fiber.New()
	app.Get("/api", handler.ListContents)
	app.Static("/", "./public")
    app.Listen(":3000")
}
