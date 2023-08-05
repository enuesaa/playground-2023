package fn

type ContentDemo struct {
	Name string
	Path string // wasm action path
	// input like textarea
	// output
}

type ContentKv struct {
	Key string
	Value string
}

type Content struct {
	Id string
	Name string
	Description string
	Kvs []ContentKv
	Demos []ContentDemo
}
func NewContent(id string) Content {
	return Content {
		Id: id,
		Name: "",
		Description: "",
	}
}
func (content *Content) AddKv(key string, value string) {
	content.Kvs = append(content.Kvs, ContentKv{ Key: key, Value: value })
}
// todo
func (content *Content) AddDemo(name string, path string) {}
