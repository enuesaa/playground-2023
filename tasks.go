//go:build ignore

package main

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"strings"

	esbuild "github.com/evanw/esbuild/pkg/api"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Error: Please specify subcommand.")
		os.Exit(1)
	}

	mode := os.Args[1]
	switch mode {
    case "build":
		ctx, cancel := context.WithCancel(context.Background())
		cmd := exec.CommandContext(ctx, "go", "build", "-o", "tmp/main", ".")
		defer cancel()
		runCmd(cmd)

		esbuild.Build(esbuild.BuildOptions{
			EntryPoints: []string{"web/app.tsx"},
			Outdir:   "tmp/dist",
			Bundle:   true,
			Write:    true,
			LogLevel: esbuild.LogLevelInfo,
		})
    default:
		fmt.Println("Error: Invalid subcommand.")
		os.Exit(1)
	}
}

func runCmd(cmd *exec.Cmd) {
	fmt.Printf("Running command `%s`\n", strings.Join(cmd.Args, " "))

	stdout, err := cmd.StdoutPipe()
	if err != nil {
		fmt.Println(err)
	}
	buff := make([]byte, 1024)
	if err := cmd.Start(); err != nil {
		fmt.Println(err)
	}
	for {
		s, err := stdout.Read(buff)
		if err != nil {
			break;
		}
		fmt.Println(string(buff))
		if s == 0 {
			break;
		}
		buff = make([]byte, 1024)
	}
	cmd.Wait()
	code := cmd.ProcessState.ExitCode()
	fmt.Printf("Command finished with exit code %d\n", code)
}
