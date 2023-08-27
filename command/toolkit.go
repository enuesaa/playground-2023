package command

import (
	"fmt"

	"github.com/urfave/cli/v2"
)

// inject schema
func InjectSchema() *cli.Command {
	command := cli.Command{
		Name:  "inject-schema",
		Usage: "inject schema",
		Action: func(cCtx *cli.Context) error {
			fmt.Println("inject schema")
			return nil
		},
	}

	return &command
}

// build toolkit
