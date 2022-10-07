package cmd

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/cli/go-gh"
	"github.com/tidwall/gjson"
)

func List(owner string, name string) {
	args := []string{
		"api", "graphql",
		"-F", fmt.Sprintf("owner=%s", owner),
		"-F", fmt.Sprintf("name=%s", name),
		"-f", fmt.Sprintf("query=%s", `query($name: String!, $owner: String!) {
			repository(name: $name, owner: $owner) {
				name
				refs(first: 100, refPrefix: "refs/heads/") {
					nodes {
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
		return
	}

	str := stdOut.String()
	refs := gjson.Get(str, "data.repository.refs.nodes").Array()
	for i := 0; i < len(refs); i++ {
		node := gjson.Get(str, fmt.Sprintf("data.repository.refs.nodes.%s", strconv.Itoa(i))).String()
		branchName := gjson.Get(node, "name")
		committedDate := gjson.Get(node, "target.history.nodes.0.committedDate")
		commitMessage := strings.Split(gjson.Get(node, "target.history.nodes.0.message").String(), "\n")[0]
		fmt.Printf("%s\t%-30s\t%s\n", committedDate, branchName, commitMessage)
	}
}
