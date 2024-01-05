package main
// see https://tinygo.org/docs/guides/webassembly/wasi/

//export add
func add(x, y uint32) uint32 {
	return x + y
}

func main() {}
