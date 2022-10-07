package cmd

import (
	"fmt"
	"os"
	"strings"

	"github.com/spf13/cobra"
)

type Commit struct {
	Message    string
	AuthorName string
	Date       string
}

var rootCmd = &cobra.Command{
	Use:  "last-commit <repository>",
	Args: cobra.ExactArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		branch, _ := cmd.Flags().GetString("branch")
		owner, name := parseRepositoryOwnerAndName(args[0])
		if branch == "" {
			List(owner, name)
		} else {
			View(owner, name, branch)
		}
	},
}

func Execute() {
	diableCobraDefaultCommands()
	rootCmd.Flags().StringP("branch", "", "", "branch name")

	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func diableCobraDefaultCommands() {
	rootCmd.CompletionOptions.DisableDefaultCmd = true
	rootCmd.SetHelpCommand(&cobra.Command{Hidden: true})
}

func parseRepositoryOwnerAndName(str string) (string, string) {
	result := strings.Split(str, "/")
	if len(result) != 2 {
		fmt.Println("invalid format: repository")
		os.Exit(1)
	}
	return result[0], result[1]
}
