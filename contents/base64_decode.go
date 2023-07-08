package contents

import (
	"fmt"

	"github.com/enuesaa/kakkofn/schema"
)

func Base64Decode() {
	content := schema.ContentSchema {
		Id: "base64:decode",
		Name: "",
	}

	fmt.Printf("%v", content)
}

// export const metadata = metadata({
// 	id: 'code/go/json-decode', // url とか arn 的な意味合い
// 	name: 'base64でデコードする',
// 	tags: ['decode'],
// 	description: '',
// 	created: '',
// 	modified: '',
//   })
  
//   export const kvs = ([
//   //  {name: '', value: '', href: 'https://example.com', description: ''},
//   //  {name: 'usage', value: 'JSON.Marahsll()', description: ''},
//   ])
  
//   export const kvs2 = kvs([])
  
//   export const demo = demos({
// 	//   name: '',
// 	//   description: '',
// 	//   inputs: ['textarea'],
// 	//   handler: () => {},
//   })
  
//   export const file = file('./files')d 
  
//   export const markdown = markdown('./content.md')
//   export const attention = attention('aa')
  