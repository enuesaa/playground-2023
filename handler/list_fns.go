package handler

import (
	"github.com/enuesaa/kakkofn/fn"
	"github.com/enuesaa/kakkofn/fn/codego"
	"github.com/gofiber/fiber/v2"
)

func ListFns(c *fiber.Ctx) error {
	list := make([]fn.Content, 0)
	list = append(list, codego.JsonDecode())

	return c.JSON(list)
}
