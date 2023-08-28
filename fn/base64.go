package fn

import (
	"github.com/enuesaa/kakkofn/fndef"
)

func Base64Decode() fndef.Content {
	content := fndef.NewContent("tool:base64:decode")
	content.Name = "base64でデコード"
	content.Description = "base64でデコードします"

	content.AddKv("created", "2023-07-17T00:00:00+09:00")
	content.AddKv("modified", "2023-07-17T00:00:00+09:00")

	content.AddAction("main", "toolkit/base64_docode")

	return content
}
