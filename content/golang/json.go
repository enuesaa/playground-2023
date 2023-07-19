package golang

import (
	"github.com/enuesaa/kakkofn/schema"
)

func JsonDecode() schema.Content {
	content := schema.NewContent("golang:json:decode")
	content.Name = "JSONのデコード"
	content.Description = "GoでJSONのデコードをします"

	// todo define struct. do not store key as string.
	content.AddKv("created", "2023-07-17T00:00:00+09:00")
	content.AddKv("modified", "2023-07-17T00:00:00+09:00")
	content.AddKv("docUrl", "https://example.com")
	content.AddKv("usage", "JSON.Marahsll()")

	content.AddDemo("main", "codego/jsonDecode")

	return content
}
