package main

import (
	"fmt"
	"io"
	"os"

	"github.com/enuesaa/kakkofn/handler"
	esbuild "github.com/evanw/esbuild/pkg/api"
	"github.com/gin-gonic/gin"
)

func main() {
    result := esbuild.Build(esbuild.BuildOptions{
        EntryPoints: []string{"web/index.ts"},
        Outfile:     "output.js",
        Bundle:      true,
        Write:       true,
        LogLevel:    esbuild.LogLevelInfo,
    })
	fmt.Println(result)

	f, _ := os.Create("tmp/gin.log")
	gin.DefaultWriter = io.MultiWriter(os.Stdout, f)

	router := setupRouter()
	router.Run(":80")
}


func setupRouter() *gin.Engine {
	router := gin.Default()

	// nextjs で言う api routes みたいな. SSGされる対象
	// - GET /api/contents ... list contents
	// - GET /api/contents/{id} ... get content with id
	// - GET /api/contents/{id}/actions ... list content actions
	// - GET /api/contents/{id}/actions/{id}/wasm ... get wasm binary

	base := router.Group("/api")
	{
		base.GET("contents", handler.ListContents)
	}

	return router
}