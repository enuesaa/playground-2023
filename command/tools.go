package command

import (
	"fmt"

	"github.com/urfave/cli/v2"

	"github.com/santhosh-tekuri/jsonschema/v5"
)

func InjectFncore() *cli.Command {
	command := cli.Command{
		Name:  "inject-fncore",
		Usage: "inject schema to fncore",
		Action: func(cCtx *cli.Context) error {
			compiler := jsonschema.NewCompiler()
			fmt.Println(compiler)

			schema := jsonschema.Schema {
				Types: []string{"string"},
				// Properties: map[string]*jsonschema.Schema {
				// 	"aa": {
				// 		Types: []string{"string"},
				// 	},
				// },
			}
			fmt.Printf("%s", schema.String())

			// fmt.Println("new task template: ", cCtx.Args().First())
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
