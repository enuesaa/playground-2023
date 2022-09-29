use clap::Parser;

#[derive(Debug, Parser)]
// #[clap(disable_help_flag = true)]
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
        println!("format json");
    }
    if args.format == "yaml" {
        println!("format yaml");
    }
}
