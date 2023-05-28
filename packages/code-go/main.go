package main

import (
	"fmt"
	"strings"
	"syscall/js"
)

func callname(_ js.Value, args []js.Value) interface{} {
	fmt.Println(args)
	name := args[0].String()
    return js.ValueOf("Hello," + name)
}

func hasPrefix(_ js.Value, args []js.Value) interface{} {
	fmt.Println(args)
	text := args[0].String()
	prefix := args[1].String()
	return js.ValueOf(strings.HasPrefix(text, prefix))
}

func main() {
	// see https://future-architect.github.io/articles/20221024a/
    ch := make(chan struct{})
	// see https://www.asobou.co.jp/blog/web/go-webassembly-3

	js.Global().Get("wasmTinygoRegisterFn").Invoke("callname", js.FuncOf(callname))
	// js.Global().Get("wasmTinygoGlobalObject").Set("callname", js.FuncOf(callname))
	// js.Global().Set("wasmTinygoGlobalObject", js.ValueOf(map[string]any{
	// 	"hasPrefix": js.FuncOf(hasPrefix),
	// }))
	<-ch
}
