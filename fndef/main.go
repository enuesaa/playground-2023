package fndef

type FnResourceName struct {
	Service string // like `toolkit`
	Group string // like `json`
	Name string // like `decode`
}

type FnInputSchema struct {} // json schema
type FnOutputSchema struct {} // json schema

type FnContent struct {
	Type string // note, table, link ...
	Value string
}

type FnKv struct {
	Key   string
	Value string
}

type Fn struct {
	ResourceName FnResourceName // like `toolkit:json:decode`
	InputSchema FnInputSchema
	OutputSchema FnOutputSchema
	Kvs []FnKv
	Examples interface{}
	Contents []FnContent
}
