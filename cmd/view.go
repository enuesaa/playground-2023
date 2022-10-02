package cmd

import (
	"fmt"

	"github.com/cli/go-gh"
	"github.com/spf13/cobra"
)

var viewCmd = &cobra.Command{
	Use: "view",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("view command")
		ghView()
	},
}

func init() {
	rootCmd.AddCommand(viewCmd)
}

func ghView() {
	args := []string{"repo", "view"}
	stdOut, _, err := gh.Exec(args...)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(stdOut.String())
}
