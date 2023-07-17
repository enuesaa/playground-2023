package main

import (
	"fmt"

	"github.com/enuesaa/kakkofn/contents/golang"
)

func main() {
	// api

	// - GET /contents ... list contents
	// - GET /contents/{id} ... get content with id
	// - GET /contents/{id}/actions ... list content actions
	// - POST /contents/{id}/actions/{id}/invoke ... invoke actions by wasmer-go
	// - GET /contents/{id}/actions/{id}/wasm ... get wasm binary

	fmt.Println(golang.Routes())
}
