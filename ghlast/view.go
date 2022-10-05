package ghlast

import (
	"errors"
	"fmt"

	"github.com/cli/go-gh"
	"github.com/tidwall/gjson"
)

func View(owner string, name string, branch string) (string, error) {
	args := []string{
		"api", "graphql",
		"-F", fmt.Sprintf("owner=%s", owner),
		"-F", fmt.Sprintf("name=%s", name),
		"-F", fmt.Sprintf("qualifiedName=%s", branch),
		"-f", fmt.Sprintf("query=%s", `query($name: String!, $owner: String!, $qualifiedName: String!) {
			repository(name: $name, owner: $owner) {
				name
				pushedAt
				ref(qualifiedName: $qualifiedName) {
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
			}
		}`),
	}

	stdOut, _, err := gh.Exec(args...)
	if err != nil {
		return "", errors.New("")
	}
	str := stdOut.String()
	commitMessage := gjson.Get(str, "data.repository.ref.target.history.nodes.0.message")
	authorName := gjson.Get(str, "data.repository.ref.target.history.nodes.0.author.name")
	committedDate := gjson.Get(str, "data.repository.ref.target.history.nodes.0.committedDate")
	fmt.Printf("%s %s %s\n", committedDate, authorName, commitMessage)
	return stdOut.String(), nil
}
