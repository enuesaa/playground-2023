job "redis" {
  datacenters = ["dc1"]
  
  group "cache" {
    task "redis" {
      driver = "docker"
      
      config {
        image = "redis:3.2"
      }
      
      resources {
        cpu    = 500 # 500 MHz
        memory = 256 # 256MB
      }
    }
  }
}
