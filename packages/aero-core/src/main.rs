pub mod wasm;
pub mod commands;
pub mod cli;
pub mod router;

use clap::Parser;
use crate::cli::Cli;
use crate::router::route;

fn main() {
    let args = Cli::parse();
    let command = args.command;

    route(command);
}
