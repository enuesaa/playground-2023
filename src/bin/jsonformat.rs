use clap::Parser;

use serde_jsonformat_cli::util::read;
use serde_jsonformat_cli::{json2json, json2yaml};

#[derive(Debug, Parser)]
struct Args {
    /// format like `json` or `yaml`
    #[clap(short = 'f', long = "format", default_value_t = String::from("json"))]
    format: String,

    /// input file name like `example.json`
    #[clap(short = 'i', long = "input")]
    input: String,
}

fn main() {
    let args = Args::parse();
    if args.format == "json" {
        let json_string = read(&args.input);
        let formatted = json2json(&json_string);
        println!("{}", formatted);
    } else if args.format == "yaml" {
        let json_string = read(&args.input);
        let formatted = json2yaml(&json_string);
        print!("{}", formatted);
    }
}
