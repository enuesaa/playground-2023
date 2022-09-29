# serde-jsonformat-cli
Simple json formatter using [serde](https://github.com/serde-rs/serde).

## Installation
~~~sh
$ cargo install --git https://github.com/enuesaa/serde-jsonformat-cli
$ which jsonformat
~~~

## Usage
### format json (pretty)
Internally, this uses `serde_json::to_string_pretty`.
~~~sh
$ jsonformat --input sample.json
{
  "a": "b",
}
~~~

### format yaml
~~~sh
$ jsonformat --input sample.json --format yaml
a: b
~~~
