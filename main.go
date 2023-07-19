package main

import (
	"io"
	"os"

	// "github.com/enuesaa/kakkofn/handler"
	esbuild "github.com/evanw/esbuild/pkg/api"
	"github.com/gin-gonic/gin"
)

func main() {
	esbuild.Build(esbuild.BuildOptions{
		EntryPoints: []string{"web/index.tsx"},
		Outfile:     "public/dist.js",
		Bundle:      true,
		Write:       true,
		LogLevel:    esbuild.LogLevelInfo,
	})

	f, _ := os.Create("tmp/gin.log")
	gin.DefaultWriter = io.MultiWriter(os.Stdout, f)

	router := setupRouter()
	router.Run(":3000")
}


func setupRouter() *gin.Engine {
	router := gin.Default()

	// nextjs で言う api routes みたいな. SSGされる対象
	// - GET /api/contents ... list contents
	// - GET /api/contents/{id} ... get content with id
	// - GET /api/contents/{id}/actions ... list content actions
	// - GET /api/contents/{id}/actions/{id}/wasm ... get wasm binary

	// base := router.Group("/api")
	// {
	// 	base.GET("contents", handler.ListContents)
	// }
	router.Static("/", "public/")

	return router
}