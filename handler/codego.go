package handler

import (
	"context"
	"os"
	"os/exec"
)

func GetCodegoWasm() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	cmd := exec.CommandContext(ctx, "go", "build", "-C", "apps/codego", "-o", "app.wasm")
	cmd.Env = append(os.Environ(), "GOOS=js", "GOARCH=wasm")
	cmd.Start()
	cmd.Wait()
}
