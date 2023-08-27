package codego

import (
	"github.com/enuesaa/kakkofn/fn"
)

func Routes() []fn.Content {
	list := make([]fn.Content, 0)
	list = append(list, JsonDecode())

	return list
}
