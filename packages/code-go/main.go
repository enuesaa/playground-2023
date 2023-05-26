package main

import (
	"fmt"
	"strings"
	"syscall/js"
)

func main() {
	// see https://future-architect.github.io/articles/20221024a/
	c := make(chan struct{})
	js.Global().Set("GlobalFuncName", js.FuncOf(func(this js.Value, args []js.Value) any {
		fmt.Println("aaaaaaaaaaa")
		return "aa"
	}))
	<-c
}

func HasPrefix(text string, prefix string) bool {
	return strings.HasPrefix(text, prefix)
}
