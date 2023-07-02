terraform {
  required_providers {
    tfnotes = {
      source = "hashicorp.com/edu/tfnotes" 
    }
  }
}

provider "tfnotes" {}

# data "note" "main" {}
