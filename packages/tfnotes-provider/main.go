package main

import (
	"context"
	"log"

	"tfnotes-provider/internal/provider"
	"github.com/hashicorp/terraform-plugin-framework/providerserver"
)

func main() {
	opts := providerserver.ServeOpts {
		Address: "example.com/example/example",
		Debug: true,
	}

	err := providerserver.Serve(context.Background(), provider.New, opts)

	if err != nil {
		log.Fatal(err.Error())
	}
}
