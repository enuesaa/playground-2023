package handler

import (
	"context"
	"os"
	"os/exec"

	"github.com/gofiber/fiber/v2"
)

func GetCodegoWasm(c *fiber.Ctx) error {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	cmd := exec.CommandContext(ctx, "go", "build", "-C", "apps/codego", "-o", "main.wasm")
	cmd.Env = append(os.Environ(), "GOOS=js", "GOARCH=wasm")
	cmd.Start()
	cmd.Wait()

	return c.SendFile("./apps/codego/main.wasm")
}