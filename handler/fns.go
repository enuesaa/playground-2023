package handler

import (
	"github.com/enuesaa/kakkofn/content"
	"github.com/enuesaa/kakkofn/content/golang"
	"github.com/gofiber/fiber/v2"
)

func ListFns(c *fiber.Ctx) error {
	list := make([]content.Content, 0)
	list = append(list, golang.JsonDecode()) // todo should rename to codego

	return c.JSON(list)
}
