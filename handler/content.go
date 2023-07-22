package handler

import (
	"github.com/gofiber/fiber/v2"
	"github.com/enuesaa/kakkofn/content"
	"github.com/enuesaa/kakkofn/content/golang"
)

func ListContents(c *fiber.Ctx) error {
	list := make([]content.Content, 0)
	list = append(list, golang.JsonDecode())

	return c.JSON(list)
}
