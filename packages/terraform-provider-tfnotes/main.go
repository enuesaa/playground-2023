package main

import (
	"context"
	"log"

	"terraform-provider-tfnotes/internal/provider"
	"github.com/hashicorp/terraform-plugin-framework/providerserver"
)

func main() {
	opts := providerserver.ServeOpts {
		Address: "hashicorp.com/edu/tfnotes",
		Debug: false, // true だと go run . で server が立ち上げっぱなしになる?ように見える
	}

	err := providerserver.Serve(context.Background(), provider.New, opts)

	if err != nil {
		log.Fatal(err.Error())
	}
}
