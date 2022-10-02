package cmd

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/TylerBrock/colorjson"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use: "last-commit",
}

func Execute() {
	// disable default commands
	rootCmd.CompletionOptions.DisableDefaultCmd = true
	rootCmd.SetHelpCommand(&cobra.Command{Hidden: true})

	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func printJson(str string) {
	var obj map[string]interface{}
	json.Unmarshal([]byte(str), &obj)

	f := colorjson.NewFormatter()
	f.Indent = 2
	s, _ := f.Marshal(obj)
	fmt.Println(string(s))
}
