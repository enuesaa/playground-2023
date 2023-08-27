package command

import (
	"context"
	"fmt"
	"os/exec"
	"strings"

	esbuild "github.com/evanw/esbuild/pkg/api"
)

func Rebuild() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	runCmd(exec.CommandContext(ctx, "go", "build", "-o", "tmp/main", "."))

	runCmd(exec.CommandContext(ctx, "cp", "-RT", "web/public", "dist"))
	esbuild.Build(esbuild.BuildOptions{
		EntryPoints: []string{"web/main.tsx"},
		Outdir:      "tmp/dist",
		Bundle:      true,
		Write:       true,
		LogLevel:    esbuild.LogLevelInfo,
		JSX:         esbuild.JSXAutomatic,
	})
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
			break
		}
		fmt.Println(string(buff))
		if s == 0 {
			break
		}
		buff = make([]byte, 1024)
	}
	cmd.Wait()
	code := cmd.ProcessState.ExitCode()
	fmt.Printf("Command finished with exit code %d\n", code)
}
