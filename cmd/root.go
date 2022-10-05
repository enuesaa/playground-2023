package cmd

import (
	"fmt"
	"gh-last-commit/ghlast"
	"os"
	"strings"

	"github.com/spf13/cobra"
	"github.com/tidwall/gjson"
)

var rootCmd = &cobra.Command{
	Use:  "last-commit <repository>",
	Args: cobra.ExactArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		branch, _ := cmd.Flags().GetString("branch")
		owner, name := parseRepositoryOwnerAndName(args[0])
		if branch == "" {
			if result, error := ghlast.List(owner, name); error == nil {
				print(result)
			}
		} else {
			if result, error := ghlast.View(owner, name, branch); error == nil {
				print(result)
			}
		}
	},
}

func Execute() {
	// disable default commands
	rootCmd.CompletionOptions.DisableDefaultCmd = true
	rootCmd.SetHelpCommand(&cobra.Command{Hidden: true})
	rootCmd.Flags().StringP("branch", "", "", "branch name")

	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func parseRepositoryOwnerAndName(str string) (string, string) {
	result := strings.Split(str, "/")
	if len(result) != 2 {
		fmt.Println("invalid format: repository")
		os.Exit(1)
	}
	return result[0], result[1]
}

func print(str string) {
	commitMessage := gjson.Get(str, "data.repository.refs.nodes.0.target.history.nodes.0.message")
	authorName := gjson.Get(str, "data.repository.refs.nodes.0.target.history.nodes.0.author.name")
	committedDate := gjson.Get(str, "data.repository.refs.nodes.0.target.history.nodes.0.committedDate")
	fmt.Printf("%s %s %s\n", committedDate, authorName, commitMessage)
}
