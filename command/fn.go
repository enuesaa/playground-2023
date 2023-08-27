package command

import (
	"fmt"

	"github.com/urfave/cli/v2"
)

// list contents(fns)
func ListFns() *cli.Command {
	command := cli.Command{
		Name:  "list-fns",
		Usage: "list fns",
		Action: func(cCtx *cli.Context) error {
			fmt.Println("list fns")
			return nil
		},
	}

	return &command
}
