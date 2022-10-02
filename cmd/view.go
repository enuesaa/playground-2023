package cmd

import (
	"fmt"
	"os"
	"strings"

	"github.com/cli/go-gh"
	"github.com/spf13/cobra"
)

var viewCmd = &cobra.Command{
	Use: "view <repository>",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("view command")
		if len(args) != 1 {
			fmt.Println("need: repository")
			os.Exit(1)
		}
		owner, name := parseRepositoryOwnerAndName(args[0])
		ghView(owner, name)
	},
}

func init() {
	rootCmd.AddCommand(viewCmd)
}

func parseRepositoryOwnerAndName(str string) (string, string) {
	result := strings.Split(str, "/")
	if len(result) != 2 {
		fmt.Println("invalid format: repository")
		os.Exit(1)
	}
	return result[0], result[1]
}

func ghView(owner string, name string) {
	args := []string{
		"api", "graphql",
		"-F", fmt.Sprintf("owner=%s", owner),
		"-F", fmt.Sprintf("name=%s", name),
		"-f", fmt.Sprintf("query=%s", `query($name: String!, $owner: String!) {
			repository(name: $name, owner: $owner) {
				defaultBranchRef {
					target {
						... on Commit {
							history(first: 1) {
								nodes {
									message
									id
									author {
										name
									}
									committedDate
								}
							}
						}
					}
				}
			}
		}`),
	}

	stdOut, _, err := gh.Exec(args...)
	if err != nil {
		fmt.Println(err)
		return
	}
	printJson(stdOut.String())
}
