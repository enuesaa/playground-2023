use clap::{Args, Parser, Subcommand, ArgAction};

pub mod wasm;

#[derive(Parser)]
#[command(name = "aero-core", about = "Wasm app management CLI.", long_about = None)]
#[clap(disable_help_subcommand = true, disable_help_flag = true)]
struct Cli {
    #[command(subcommand)]
    command: Commands,

    // see https://github.com/clap-rs/clap/issues/1127
    #[arg(long, short_alias = '?', action = ArgAction::Help, help = "Print help information")]
    help: bool,
}

#[derive(Subcommand)]
enum Commands {
    ListApps(ListAppsArgs),
    DescribeApp(DescribeAppArgs),
    CreateApp(CreateAppArgs),
    UpdateApp(UpdateAppArgs),
    DeleteApp(DeleteAppArgs),
    Invoke(InvokeArgs),
}

#[derive(Debug, Args)]
struct ListAppsArgs {}

#[derive(Debug, Args)]
struct DescribeAppArgs {
    #[arg(long)]
    name: String,
}

#[derive(Debug, Args)]
struct CreateAppArgs {
    #[arg(long)]
    name: String,
    #[arg(long)]
    source: String,
    #[arg(long)]
    handler: String,
}

#[derive(Debug, Args)]
struct UpdateAppArgs {
    #[arg(long)]
    name: String,
    #[arg(long)]
    source: String,
    #[arg(long)]
    handler: String,
}

#[derive(Debug, Args)]
struct DeleteAppArgs {
    #[arg(long)]
    name: String,
    #[arg(long)]
    source: String,
    #[arg(long)]
    handler: String,
}

#[derive(Debug, Args)]
struct InvokeArgs {
    #[arg(long)]
    app: String,
    #[arg(long)]
    body: String, // json
}

fn main() {
    let args = Cli::parse();

    match args.command {
        Commands::ListApps(args) => {
            println!("list {:?}", args);
        },
        Commands::DescribeApp(args) => {
            println!("describe {:?}", args);
        },
        Commands::CreateApp(args) => {
            println!("create {:?}", args);
        },
        Commands::UpdateApp(args) => {
            println!("update {:?}", args);
        },
        Commands::DeleteApp(args) => {
            println!("delete {:?}", args);
        },
        Commands::Invoke(args) => {
            println!("invoke {:?}", args);
        },
    }
}