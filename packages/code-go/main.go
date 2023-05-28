package main

import (
	// "strings"
	// "fmt"
	"syscall/js"
)

// func main() {
// 	// see https://future-architect.github.io/articles/20221024a/
// 	c := make(chan struct{})
// 	js.Global().Set("GlobalFuncName", js.FuncOf(func(this js.Value, args []js.Value) any {
// 		fmt.Println("aaaaaaaaaaa")
// 		return "aa"
// 	}))
// 	<-c
// }

func main() {}

// see https://betterprogramming.pub/error-handling-with-tinygo-wasm-883533bb8b77
// see https://www.wasm.builders/k33g_org/an-essay-on-the-bi-directional-exchange-of-strings-between-the-wasm-module-with-tinygo-and-nodejs-with-wasi-support-3i9h
// see https://ludwig125.hatenablog.com/entry/2022/03/06/080625

// func hasPrefix() (*byte, int) {
// 	// strings.HasPrefix(text, prefix)
// 	st := "aaa"
// 	return &(([]byte)(st)[0]), len(st)
// }

//export hasPrefix2
func hasPrefix2() interface{} {
    // _ = js.CopyBytesToJS(args[0], []byte{0, 9, 21, 32})
	// fmt.Println("aa")
	return js.ValueOf("aa")
}
