package main

import (
	// "fmt"
	// "os"
	"flag"
	"fmt"

	"github.com/enuesaa/kakkofn/handler"
	esbuild "github.com/evanw/esbuild/pkg/api"
	"github.com/gofiber/fiber/v2"
	"github.com/fsnotify/fsnotify"
)

func main() {
    watcher, err := fsnotify.NewWatcher()
    if err != nil {
        fmt.Println(err)
    }
    defer watcher.Close()
	watcher.Add("README.md")

    str := flag.String("dev", "dev", "dev")
    flag.Parse()
	fmt.Println(*str)

	// engine, err := runner.NewEngine(".air.toml", true)
	// if err != nil {
	// 	fmt.Println(err)
	// 	os.Exit(1)
	// }
	// engine.Run()

	// TODO watch mode
	esbuild.Build(esbuild.BuildOptions{
		EntryPoints: []string{"web/app.tsx"},
		Outfile:     "web/public/app.js",
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
    app.Listen(":3001")
}
