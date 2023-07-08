package contents

import (
	"fmt"

	"github.com/enuesaa/kakkofn/schema"
)

func Base64Decode() {
	content := schema.ContentSchema {
		Id: "base64:decode",
		Name: "",
		Description: "base64でデコードする",
		Created: "",
		Modified: "",
	}
	fmt.Printf("%v", content)

	demo := schema.DemoSchema {
		Name: "",
		Path: "",
	}
	fmt.Printf("%v", demo)

	// examples
}

//   export const kvs = ([
//   //  {name: '', value: '', href: 'https://example.com', description: ''},
//   //  {name: 'usage', value: 'JSON.Marahsll()', description: ''},
//   ])
