package main

import (
	"flag"
	"fmt"

	"github.com/enuesaa/kakkofn/handler"
	esbuild "github.com/evanw/esbuild/pkg/api"
	"github.com/gofiber/fiber/v2"
	"github.com/fsnotify/fsnotify"
)

func main() {
	devflag := flag.String("dev", "dev", "dev")
    flag.Parse()

	if *devflag == "dev" {
		watcher, err := fsnotify.NewWatcher()
		if err != nil {
			fmt.Println(err)
		}
		defer watcher.Close()
		watcher.Add("README.md")

		// todo catch events

		esbuild.Build(esbuild.BuildOptions{
			EntryPoints: []string{"web/app.tsx"},
			Outfile:     "web/public/app.js",
			Bundle:      true,
			Write:       true,
			LogLevel:    esbuild.LogLevelInfo,
		})

		app := createApp()
		app.Listen("3000")
	} else {
		esbuild.Build(esbuild.BuildOptions{
			EntryPoints: []string{"web/app.tsx"},
			Outfile:     "web/public/app.js", // できればapi経由で配信できないかな
			Bundle:      true,
			Write:       true,
			LogLevel:    esbuild.LogLevelInfo,
		})

		app := createApp()
		app.Listen("3000")
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
