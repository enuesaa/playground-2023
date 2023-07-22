//go:build ignore

package main

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"strings"

	esbuild "github.com/evanw/esbuild/pkg/api"
	"github.com/fsnotify/fsnotify"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Error: Please specify subcommand.")
		fmt.Println(getHelpMessage())
		os.Exit(1)
	}

	mode := os.Args[1]
	switch mode {
    case "dev":
		esbuild.Build(esbuild.BuildOptions{
			EntryPoints: []string{"web/app.tsx"},
			Outfile:     "web/public/app.js",
			Bundle:      true,
			Write:       true,
			LogLevel:    esbuild.LogLevelInfo,
		})
		// see https://blog.lufia.org/entry/2019/12/03/140005
		ctx, cancel := context.WithCancel(context.Background())
		cmd := exec.CommandContext(ctx, "go", "run", ".")
		defer cmd.Cancel()

		watcher, err := fsnotify.NewWatcher()
		if err != nil {
			fmt.Println(err)
			os.Exit(1)
		}
		defer watcher.Close()
		watcher.Add("README.md")		

		go func() {
			for {
				select {
				case event, ok := <-watcher.Events:
					if !ok {
						return
					}
					fmt.Println("event:", event)
					fmt.Println(cmd.Args)
					cancel()
					process, err := os.FindProcess(cmd.Process.Pid)
					if err != nil {
						fmt.Println(err)
					}
					if err := process.Kill(); err != nil {
						fmt.Println(err)
					}
					code := cmd.ProcessState.ExitCode()
					fmt.Printf("Command finished with exit code %d\n", code)
				case err, ok := <-watcher.Errors:
					if !ok {
						return
					}
					fmt.Println(err)
				}
			}
		}()

		runCmd(cmd)
		<-make(chan struct{})

    case "build:codego":
		// - GOOS=js GOARCH=wasm go build -C ../codego -o main.wasm main.go && mv ../codego/main.wasm public/main.wasm && cat $(go env GOROOT)/misc/wasm/wasm_exec.js > public/wasm_exec.js
		// see https://blog.lufia.org/entry/2019/12/03/140005
		ctx, cancel := context.WithCancel(context.Background())
		defer cancel()
		cmd := exec.CommandContext(ctx, "go", "build", "-C", "apps/codego", "-o", "main.wasm")
		cmd.Env = append(os.Environ(), "GOOS=js", "GOARCH=wasm")
		runCmd(cmd)
    case "build:web":
		esbuild.Build(esbuild.BuildOptions{
			EntryPoints: []string{"web/app.tsx"},
			Outfile:     "web/public/app.js", // できればapi経由で配信できないかな
			Bundle:      true,
			Write:       true,
			LogLevel:    esbuild.LogLevelInfo,
		})
    default:
		fmt.Println("Error: Invalid subcommand.")
		fmt.Println(getHelpMessage())
		os.Exit(1)
	}
}

func getHelpMessage() string {
	message := `
Subcommands:
  dev          start app with dev mode
  build:codego build codego app
  build:web    build web app
`

	return message
}

// see https://stackoverflow.com/questions/1877045/how-do-you-get-the-output-of-a-system-command-in-go
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
	// cmd.Wait()
	// code := cmd.ProcessState.ExitCode()
	// fmt.Printf("Command finished with exit code %d\n", code)
}
