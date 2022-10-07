package cmd

import (
	"fmt"
	"os"
	"strings"
)

func ParseRepositoryOwnerAndName(str string) (string, string) {
	result := strings.Split(str, "/")
	if len(result) != 2 {
		fmt.Println("Invalid format. Need github user name with repository name like format `<username>/<repository>`.")
		os.Exit(1)
	}
	return result[0], result[1]
}
