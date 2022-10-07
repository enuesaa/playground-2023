package cmd

import (
	"os"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:  "last-commit <repository>",
	Args: cobra.ExactArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		branch, _ := cmd.Flags().GetString("branch")
		owner, name := ParseRepositoryOwnerAndName(args[0])
		if branch == "" {
			List(owner, name)
		} else {
			View(owner, name, branch)
		}
	},
	CompletionOptions: cobra.CompletionOptions{
		DisableDefaultCmd: true,
	},
}

func Execute() {
	rootCmd.SetHelpCommand(&cobra.Command{Hidden: true})
	rootCmd.Flags().StringP("branch", "", "", "branch name")

	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}
