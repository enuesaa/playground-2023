package toolkit

import (
	"github.com/enuesaa/kakkofn/fn"
)

func Base64Decode() fn.Content {
	content := fn.NewContent("tool:base64:decode")
	content.Name = "base64でデコード"
	content.Description = "base64でデコードします"

	content.AddKv("created", "2023-07-17T00:00:00+09:00")
	content.AddKv("modified", "2023-07-17T00:00:00+09:00")

	content.AddDemo("main", "toolkit/base64_docode")

	return content
}
