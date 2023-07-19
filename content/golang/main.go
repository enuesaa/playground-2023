package golang

import (
	"github.com/enuesaa/kakkofn/content"
)

func Routes() []content.Content {
	list := make([]content.Content, 0)
	list = append(list, JsonDecode())

	return list
}
