job "nginx" {
  datacenters = ["dc1"]
  group "group1" {
    task "task1" {
      driver = "docker"
      config {
        image = "nginx:latest"
        port_map {
          http = 80
        }
      }
      resources {
        network {
          mbits = 10
          port "http" {
            static = 8080
          }
        }
      }
    }
  }
}
