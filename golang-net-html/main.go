package main

import (
	"fmt"
	"strings"

	"golang.org/x/net/html"
)

func main() {

	r := strings.NewReader(`
<html><head></head><body><a href="/" class="text-lg w-24">cc</a></body></html>
`)

	node, _ := html.Parse(r)
    fmt.Printf("%v\n", node.Type == html.DocumentNode) // true
    fmt.Printf("%v\n", node.FirstChild.Data) // html
    fmt.Printf("%v\n", node.FirstChild.Type == html.ElementNode) // true
    fmt.Printf("%v\n", node.FirstChild.FirstChild.Data) // head

    bodyElm := node.FirstChild.FirstChild.NextSibling // head の次の要素を取得
    fmt.Printf("%v\n", bodyElm.Data) // body

    aElm := bodyElm.FirstChild
    fmt.Printf("%v\n", aElm.Data) // a
    fmt.Printf("%v\n", aElm.Type == html.ElementNode) // true
    fmt.Printf("%v\n", aElm.Attr[0].Key) // href
    fmt.Printf("%v\n", aElm.Attr[0].Val) // /
    fmt.Printf("%v\n", aElm.Attr[1].Key) // class
    fmt.Printf("%v\n", aElm.Attr[1].Val) // text-lg w-24

    fmt.Printf("%v\n", aElm.FirstChild.Type == html.TextNode) // true
    fmt.Printf("%v\n", aElm.FirstChild.Data) // cc
}
