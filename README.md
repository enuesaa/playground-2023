**Work in progress..**
# aero
## Summary
コンテナのランナーのようなものを作りたい

## Apps
### aero
CLI app to manage images or invoke request to container. Also, aero-api depends this app.
### aero-api
Rust app. use [axum](https://github.com/tokio-rs/axum)
### aero-web
NextJS app to manage images.
## Commands
### Register
`aero register --name <name> --from <url>`
### List
`aero list`
### Invoke
`aero invoke --name <name> --body {"image": "imageA", "data": {"something": "value"}}`

## Memo
コンテナのランタイムをどうするか.
