package handler

import "github.com/gin-gonic/gin"

func ListContents(c *gin.Context) {

	c.JSON(200, gin.H{
		"message": "pong",
	})
}