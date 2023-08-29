package command

import (
	"encoding/json"
	"fmt"

	"github.com/invopop/jsonschema"
	"github.com/urfave/cli/v2"
)

type InjectSchema struct {
	ID  int `json:"id"`
	Name string `json:"name" jsonschema:"description=name"`
}

func InjectFncore() *cli.Command {
	command := cli.Command{
		Name:  "inject-fncore",
		Usage: "inject schema to fncore",
		Action: func(cCtx *cli.Context) error {
			schema := jsonschema.Reflect(&InjectSchema{})
			ret, _ := json.Marshal(schema)
			fmt.Println(string(ret))

			return nil
		},
	}

	return &command
}

func InjectWeb() *cli.Command {
	command := cli.Command{
		Name:  "inject-web",
		Usage: "inject schema and contents to web",
		Action: func(cCtx *cli.Context) error {
			// fmt.Println("new task template: ", cCtx.Args().First())
			return nil
		},
	}

	return &command
}

func BuildFncore() *cli.Command {
	command := cli.Command{
		Name:  "build-fncore",
		Usage: "build package fncore and inject to web",
		Action: func(cCtx *cli.Context) error {
			// fmt.Println("new task template: ", cCtx.Args().First())
			return nil
		},
	}

	return &command
}
