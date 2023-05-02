## Motivation
FaaS (Function as a Service) のようなものを作りたい.   

## Packages
### aero-api
Web API to manage or run wasm apps.  
use [axum](https://github.com/tokio-rs/axum).

### aero-cli
CLI to manage or run wasm apps. This calls aero-api internally.  
use clap.

### aero-web
Web console.  
use NextJS.
