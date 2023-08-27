package handler

// import (
// 	"fmt"

// 	"github.com/enuesaa/kakkofn/fn"
// 	"github.com/enuesaa/kakkofn/fn/codego"
// 	"github.com/gofiber/fiber/v2"
// )

// func ListFns(c *fiber.Ctx) error {
// 	list := make([]fn.Content, 0)
// 	list = append(list, codego.JsonDecode())

// 	return c.JSON(list)
// }

// // wasm のコードの転送量を抑えたいためAPIで返す
// // 入力値の定義(JSON Schema)
// func DescribeFn(c *fiber.Ctx) error {
// 	id := c.Params("id")
// 	fmt.Printf("%s", id)

// 	return c.JSON("")
// }
