package cmd

import (
	"fmt"
	"os"

	"github.com/cli/go-gh"
	"github.com/tidwall/gjson"
)

func View(owner string, name string, branch string) {
	args := []string{
		"api", "graphql",
		"-F", fmt.Sprintf("owner=%s", owner),
		"-F", fmt.Sprintf("name=%s", name),
		"-F", fmt.Sprintf("qualifiedName=%s", branch),
		"-f", fmt.Sprintf("query=%s", `query($name: String!, $owner: String!, $qualifiedName: String!) {
			repository(name: $name, owner: $owner) {
				name
				ref(qualifiedName: $qualifiedName) {
					name
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
		}`),
	}

	stdOut, _, err := gh.Exec(args...)
	if err != nil {
		fmt.Printf("Branch name '%s' not exists.\n", branch)
		os.Exit(1)
	}

	str := stdOut.String()
	ref := gjson.Get(str, "data.repository.ref").Value()
	if ref == nil {
		fmt.Printf("Branch name '%s' not exists.\n", branch)
		os.Exit(1)
	}
	commitMessage := gjson.Get(str, "data.repository.ref.target.history.nodes.0.message")
	authorName := gjson.Get(str, "data.repository.ref.target.history.nodes.0.author.name")
	committedDate := gjson.Get(str, "data.repository.ref.target.history.nodes.0.committedDate")
	fmt.Printf("%s\t%s\t%s\n", committedDate, authorName, commitMessage)
}
