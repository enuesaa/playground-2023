package main

import (
	"strings"
	"syscall/js"
	"encoding/json"
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

type Memo struct {
	Name     string
}

func decodeJson(_ js.Value, args []js.Value) interface{} {
	text := args[0].Get("text").String()

	var memo Memo
	if err := json.Unmarshal([]byte(text), &memo); err != nil {
		return js.ValueOf(false)
	}
	return js.ValueOf(true)
}

func main() {
	// see https://future-architect.github.io/articles/20221024a/
	ch := make(chan struct{})
	// see https://www.asobou.co.jp/blog/web/go-webassembly-3
	js.Global().Get("goWasmRoutes").Set("callname", js.FuncOf(callname))
	js.Global().Get("goWasmRoutes").Set("hasPrefix", js.FuncOf(hasPrefix))
	js.Global().Get("goWasmRoutes").Set("decodeJson", js.FuncOf(decodeJson))
	<-ch
}
