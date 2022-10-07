package cmd

import (
	"fmt"

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
										email
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
		return
	}

	str := stdOut.String()
	commitMessage := gjson.Get(str, "data.repository.ref.target.history.nodes.0.message")
	authorName := gjson.Get(str, "data.repository.ref.target.history.nodes.0.author.name")
	authorEmail := gjson.Get(str, "data.repository.ref.target.history.nodes.0.author.email")
	committedDate := gjson.Get(str, "data.repository.ref.target.history.nodes.0.committedDate")
	fmt.Printf("%s\t%s <%s>\t%s\n", committedDate, authorName, authorEmail, commitMessage)
}
