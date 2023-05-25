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
// 問題はどのレイヤーでmockするか
// - wasmで擬似的にfilesystemを再現する
// - golangでどうにかする
// そもそも os.ReadDir を再現したところで、そのくらい価値があるのか。
// ui を再考する必要がある
