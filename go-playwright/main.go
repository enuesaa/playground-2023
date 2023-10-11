package main

import (
	"fmt"

	"github.com/playwright-community/playwright-go"
)

func main() {
	pw, err := playwright.Run()
	if err != nil {
		fmt.Printf("could not start playwright: %v\n", err)
		return
	}
	browser, err := pw.Chromium.Launch()
	if err != nil {
		fmt.Printf("could not launch browser: %v\n", err)
		return
	}
	page, err := browser.NewPage()
	if err != nil {
		fmt.Printf("could not create page: %v\n", err)
		return
	}
	if _, err = page.Goto("https://example.com"); err != nil {
		fmt.Printf("could not goto: %v\n", err)
		return
	}

	title, err := page.Locator("h1").All()
	if err != nil {
		fmt.Printf("could not get entries: %v\n", err)
		return
	}
	texts, _ := title[0].AllInnerTexts()
	fmt.Printf("%+v", texts[0])
}