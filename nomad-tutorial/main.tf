terraform {
  required_providers {
    nomad = {
      source  = "hashicorp/nomad"
      version = "2.0.0"
    }
  }
}

provider "nomad" {
  address = "http://localhost:4646"
}

resource "nomad_job" "redis" {
  jobspec = file("redis.hcl")
}

resource "nomad_job" "nginx" {
  jobspec = file("nginx.hcl")
}
