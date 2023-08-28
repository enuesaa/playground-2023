package fn

import (
	"github.com/enuesaa/kakkofn/fndef"
)

func Routes() []fndef.Content {
	list := make([]fndef.Content, 0)
	list = append(list, JsonDecode())

	return list
}
