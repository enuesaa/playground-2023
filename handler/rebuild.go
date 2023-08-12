package handler

import (
	"github.com/gofiber/fiber/v2"
)

func Rebuild(c *fiber.Ctx) error {
	return c.JSON("")
}
