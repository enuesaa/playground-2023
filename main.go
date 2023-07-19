package main

import (
	"io"
	"os"

	"github.com/enuesaa/kakkofn/handler"
	"github.com/gin-gonic/gin"
)

func main() {
	f, _ := os.Create("tmp/gin.log")
	gin.DefaultWriter = io.MultiWriter(os.Stdout, f)

	router := setupRouter()
	router.Run(":80")
}


func setupRouter() *gin.Engine {
	router := gin.Default()
	
	// - GET /contents ... list contents
	// - GET /contents/{id} ... get content with id
	// - GET /contents/{id}/actions ... list content actions
	// - GET /contents/{id}/actions/{id}/wasm ... get wasm binary

	// - POST /contents/{id}/actions/{id}/invoke ... invoke actions by wasmer-go

	base := router.Group("/api")
	{
		base.GET("contents", handler.ListContents)
	}

	return router
}