package main

import (
	"log"
	"os"

	"github.com/enuesaa/kakkofn/command"
	"github.com/urfave/cli/v2"
)

func main() {
	app := &cli.App{
		Name:    "kakkofn",
		Usage:   "kakkofn",
		Version: "0.0.1",
		Commands: []*cli.Command{
			command.ListFns(),
			command.InjectSchema(),
		},
	}

	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}
