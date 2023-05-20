package samples

import (
	"os"
	"fmt"
)

func ListFiles() {
	files, err := os.ReadDir("./aaa")
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("%+v", files)
	}
}