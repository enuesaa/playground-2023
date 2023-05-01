use clap::{Args, Parser, Subcommand, ValueEnum};

pub mod wasm;

#[derive(Debug, Parser)]
#[command(name = "aero-core", about = "Wasm app management CLI.", long_about = None)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Debug, Subcommand)]
enum Commands {
    App(AppArgs),
    // invoke
}

#[derive(Debug, Args)]
struct AppArgs {
    #[command(subcommand)]
    command: Option<AppCommands>,
}

#[derive(Debug, Subcommand)]
enum AppCommands {
    List {},
    Create(AppCreateArgs),
    Delete(AppCreateArgs),
}

#[derive(Debug, Args)]
struct AppCreateArgs {
    #[arg(short, long)]
    name: String,
}

fn main() {
    let args = Cli::parse();

    match args.command {
        Commands::App(app) => {
            match app.command.unwrap() {
                AppCommands::List {} => {
                    println!("List");
                },
                AppCommands::Create(create_args) => {
                    println!("Create");
                },
                AppCommands::Delete(create_args) => {
                    println!("Delete");
                },
            }
        }
    }
}