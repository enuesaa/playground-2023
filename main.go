package main

import (
	"log"
	"os"

	"github.com/enuesaa/kakkofn/command"
	"github.com/urfave/cli/v2"
)

func main() {
	app := &cli.App{
		Name:                  "kakkofn",
		Usage:                 "kakkofn [subcommand]",
		Version:               "0.0.1",
		HideHelpCommand:       true,
		CustomAppHelpTemplate: command.HelpMessage,
		Commands: []*cli.Command{
			command.ListFns(),
			command.InjectFncore(),
			command.InjectWeb(),
			command.BuildFncore(),
		},
	}

	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}
