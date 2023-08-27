# protowasi
prototype app for wasi.
## Commands
```bash
rustup target add wasm32-wasi
cargo build --target wasm32-wasi
wasmtime target/wasm32-wasi/debug/protowasi.wasm
```
