package handler

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
)

// wasm のコードの転送量を抑えたいためAPIで返す
// 入力値の定義(JSON Schema)
func DescribeFn(c *fiber.Ctx) error {
	id := c.Params("id")
	fmt.Printf("%s", id)

	return c.JSON("")
}
