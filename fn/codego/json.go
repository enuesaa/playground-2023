package codego

import (
	"github.com/enuesaa/kakkofn/fn"
)

func JsonDecode() fn.Content {
	content := fn.NewContent("golang:json:decode")
	content.Name = "JSONのデコード"
	content.Description = "GoでJSONのデコードをします"

	// todo define struct. do not store key as string.
	content.AddKv("created", "2023-07-17T00:00:00+09:00")
	content.AddKv("modified", "2023-07-17T00:00:00+09:00")
	content.AddKv("docUrl", "https://example.com")
	content.AddKv("usage", "JSON.Marahsll()")

	content.AddDemo("main", "codego/decodeJson")

	return content
}
