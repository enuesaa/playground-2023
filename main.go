package main

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use: "go-last-commit",
}
var listCmd = &cobra.Command{
	Use: "list",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("list command")
	},
}

func main() {
	// disable default commands
	rootCmd.CompletionOptions.DisableDefaultCmd = true
	rootCmd.SetHelpCommand(&cobra.Command{Hidden: true})

	rootCmd.AddCommand(listCmd)
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}
