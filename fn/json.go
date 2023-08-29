package fn

import (
	"github.com/enuesaa/kakkofn/fndef"
)

func JsonDecode() fndef.Fn {
	fn := fndef.Fn{}
	// content := fndef.NewContent("golang:json:decode")
	// content.Name = "JSONのデコード"
	// content.Description = "GoでJSONのデコードをします"

	// // todo define struct. do not store key as string.
	// content.AddKv("created", "2023-07-17T00:00:00+09:00")
	// content.AddKv("modified", "2023-07-17T00:00:00+09:00")
	// content.AddKv("docUrl", "https://example.com")
	// content.AddKv("usage", "JSON.Marahsll()")

	// content.AddAction("main", "codego/decodeJson")

	return fn
}
