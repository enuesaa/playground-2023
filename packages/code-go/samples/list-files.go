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

// see https://dskrzypiec.dev/mock-go-filesystem/
// os.ReadDir 自体をmockしている
