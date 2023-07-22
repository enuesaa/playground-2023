package main

import (
	"fmt"
	"os"

	"github.com/enuesaa/kakkofn/handler"
	// esbuild "github.com/evanw/esbuild/pkg/api"
	"github.com/gofiber/fiber/v2"
	// "github.com/fsnotify/fsnotify"
)

func getHelpMessage() string {
	message := `
Subcommands:
  dev          start app with dev mode
  start        start app with production mode
  build:codego build codego app
  build:web    build web app`

	return message
}

// package json の script 的な役割
func main() {
	if len(os.Args) < 2 {
		fmt.Println("Error: Please specify subcommand.")
		fmt.Println(getHelpMessage())
		os.Exit(1)
	}

	mode := os.Args[1]
	switch mode {
    case "dev":
		// 	watcher, err := fsnotify.NewWatcher()
		// 	if err != nil {
		// 		fmt.Println(err)
		// 	}
		// 	defer watcher.Close()
		// 	watcher.Add("README.md")

		// 	// todo catch events

		// 	esbuild.Build(esbuild.BuildOptions{
		// 		EntryPoints: []string{"web/app.tsx"},
		// 		Outfile:     "web/public/app.js",
		// 		Bundle:      true,
		// 		Write:       true,
		// 		LogLevel:    esbuild.LogLevelInfo,
		// 	})
		// 	app := createApp()
		// 	app.Listen("3000")
    case "start":
		// 	app := createApp()
		// 	app.Listen("3000")
    case "build:codego":
		// - GOOS=js GOARCH=wasm go build -C ../codego -o main.wasm main.go && mv ../codego/main.wasm public/main.wasm && cat $(go env GOROOT)/misc/wasm/wasm_exec.js > public/wasm_exec.js
    case "build:web":
		// 	esbuild.Build(esbuild.BuildOptions{
		// 		EntryPoints: []string{"web/app.tsx"},
		// 		Outfile:     "web/public/app.js", // できればapi経由で配信できないかな
		// 		Bundle:      true,
		// 		Write:       true,
		// 		LogLevel:    esbuild.LogLevelInfo,
		// 	})
    default:
		fmt.Println("Error: Invalid subcommand.")
		fmt.Println(getHelpMessage())
		os.Exit(1)
	}
}

func createApp() *fiber.App {
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
