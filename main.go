package main

import (
	"fmt"
	"os/exec"

	"github.com/enuesaa/kakkofn/contents"
)

func main() {
	contents.Base64Decode()

	// this is for development.
	res, err := exec.Command("wasm-pack", "build", "apps/toolkit", "--out-dir", "../web/src/toolkit").Output()
	if err != nil {
		fmt.Printf("%v", err)
	}
	fmt.Printf("%v", res)
}
