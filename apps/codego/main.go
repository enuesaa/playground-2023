package main

import (
	"syscall/js"
	"encoding/json"
)

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
	// see https://www.asobou.co.jp/blog/web/go-webassembly-3

	ch := make(chan struct{})
	js.Global().Get("goWasmRoutes").Set("decodeJson", js.FuncOf(decodeJson))
	<-ch
}
