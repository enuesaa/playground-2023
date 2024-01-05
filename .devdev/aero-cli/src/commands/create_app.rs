use clap::Args;

#[derive(Debug, Args)]
pub struct CreateAppArgs {
    #[arg(long)]
    name: String,

    #[arg(long)]
    source: String,

    #[arg(long)]
    handler: String,
}
