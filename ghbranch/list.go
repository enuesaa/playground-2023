package ghbranch

import (
	"errors"
	"fmt"

	"github.com/cli/go-gh"
)

func List(owner string, name string) (string, error) {
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
		return "", errors.New("")
	}
	return stdOut.String(), nil
}
