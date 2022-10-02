package cmd

import (
	"fmt"

	"github.com/cli/go-gh"
	"github.com/spf13/cobra"
)

var listCmd = &cobra.Command{
	Use: "list",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("list command")
		ghlist()
	},
}

func init() {
	rootCmd.AddCommand(listCmd)
}

func ghlist() {
	args := []string{
		"api", "graphql",
		"-F", fmt.Sprintf("owner=%s", "enuesaa"),
		"-F", fmt.Sprintf("first=%s", "1"),
		"-f", fmt.Sprintf("query=%s", `query($owner: String!, $first: Int) {
			repositoryOwner(login: $owner) {
				repositories(first: $first, orderBy: {field: PUSHED_AT, direction: DESC}) {
					nodes {
						name
						refs(first: 2, orderBy: {field: TAG_COMMIT_DATE, direction: DESC}, refPrefix: "refs/heads/") {
							nodes {
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
