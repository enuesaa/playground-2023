package main

import (
	"fmt"
	"strings"

	"golang.org/x/net/html"
)

func main() {

	r := strings.NewReader(`
<html>
<head>
    <title>aaa</title>
</head>
<body>
    <header>
        <h1>aaaaa</h1>
    </header>
    <main>
        <div class="cl cb">bbb</div>
    </main>
</body>
</html>
`)

	node, _ := html.Parse(r)
    fmt.Printf("%+v\n", node)
    fmt.Printf("%+v\n", node.FirstChild)
    fmt.Printf("%+v\n", node.FirstChild.Type)
    fmt.Printf("%+v\n", html.ElementNode)
    fmt.Printf("%+v\n", html.TextNode)
    fmt.Printf("%+v\n", node.NextSibling)
}
