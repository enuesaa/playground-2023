package cmd

import (
	"fmt"
	"os"
	"strings"

	"github.com/cli/go-gh"
	"github.com/spf13/cobra"
	"github.com/tidwall/gjson"
)

var rootCmd = &cobra.Command{
	Use: "last-commit <repository>",
	Run: func(cmd *cobra.Command, args []string) {
		if len(args) != 1 {
			fmt.Println("need: repository")
			os.Exit(1)
		}
		owner, name := parseRepositoryOwnerAndName(args[0])
		ghView(owner, name)
	},
}

func Execute() {
	// disable default commands
	rootCmd.CompletionOptions.DisableDefaultCmd = true
	rootCmd.SetHelpCommand(&cobra.Command{Hidden: true})

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

func ghView(owner string, name string) {
	args := []string{
		"api", "graphql",
		"-F", fmt.Sprintf("owner=%s", owner),
		"-F", fmt.Sprintf("name=%s", name),
		"-f", fmt.Sprintf("query=%s", `query($name: String!, $owner: String!) {
			repository(name: $name, owner: $owner) {
				name
				pushedAt
				refs(first: 100, refPrefix: "refs/heads/") {
					nodes {
						name
						prefix
						target {
							... on Commit {
								history(first: 1) {
									nodes {
										message
										author {
											name
										}
										committedDate
									}
								}
							}
						}
					}
          totalCount
          pageInfo {
            hasNextPage
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
	print(stdOut.String())
}

func print(str string) {
	commitMessage := gjson.Get(str, "data.repository.refs.nodes.0.target.history.nodes.0.message")
	authorName := gjson.Get(str, "data.repository.refs.nodes.0.target.history.nodes.0.author.name")
	committedDate := gjson.Get(str, "data.repository.refs.nodes.0.target.history.nodes.0.committedDate")
	fmt.Printf("%s %s %s\n", committedDate, authorName, commitMessage)
}
