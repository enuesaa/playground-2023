package main

import (
	"strings"
	"syscall/js"
)

func callname(_ js.Value, args []js.Value) interface{} {
	// see https://stackoverflow.com/questions/71131445/how-to-access-js-objects-in-go-through-web-assembly
	name := args[0].Get("name").String()
	return js.ValueOf("Hello," + name)
}

func hasPrefix(_ js.Value, args []js.Value) interface{} {
	text := args[0].Get("text").String()
	prefix := args[0].Get("prefix").String()
	return js.ValueOf(strings.HasPrefix(text, prefix))
}

func main() {
	// see https://future-architect.github.io/articles/20221024a/
	ch := make(chan struct{})
	// see https://www.asobou.co.jp/blog/web/go-webassembly-3
	js.Global().Get("wasmTinygoRegisterFn").Invoke("callname", js.FuncOf(callname))
	js.Global().Get("wasmTinygoRegisterFn").Invoke("hasPrefix", js.FuncOf(hasPrefix))
	<-ch
}
