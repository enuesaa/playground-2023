package golang

import (
	"github.com/enuesaa/kakkofn/schema"
)

func Routes() []schema.Content {
	list := make([]schema.Content, 0)
	list = append(list, JsonDecode())

	return list
}
